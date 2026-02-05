"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { ZONE_MAP_IDS, getZoneMap, type ZoneMapId, type MapMarker } from "@/lib/zoneMaps";

type Props = {
  zoneId: ZoneMapId;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function hsl(hue: number, sat = 78, light = 58, alpha = 1) {
  const h = Math.round(((hue % 360) + 360) % 360);
  return `hsla(${h} ${sat}% ${light}% / ${alpha})`;
}

type LayerId = "harvest" | "event" | "raidBoss" | "base";

type NodeLayerTuning = {
  hue: number; // 0..360
  nodeSize: number; // 0.6..2.4 (inner solid node circle)
  nodeRadius: number; // 0.6..2.4 (outer translucent radius)
  outerEnabled: boolean; // toggles outer translucent ring (and pulse where applicable)
};

type ZoneLayerTuning = NodeLayerTuning & {
  zoneRadius: number; // 0.4..2.4 (big on-map zone circle)
  areaOpacity: number; // 0..0.8 (area fill + outline opacity)
};

type BaseLayerTuning = {
  hue: number; // 0..360
  size: number; // 0.6..2.4 (footprint scale)
  radius: number; // 0.6..2.4 (corner radius)
};

type LayerTuningState = {
  harvest: NodeLayerTuning;
  event: ZoneLayerTuning;
  raidBoss: ZoneLayerTuning;
  base: BaseLayerTuning;
};

const defaultTuning: LayerTuningState = {
  harvest: { hue: 145, nodeSize: 1.0, nodeRadius: 1.0, outerEnabled: true },
  event: {
    hue: 45,
    nodeSize: 1.0,
    nodeRadius: 1.0,
    outerEnabled: true,
    zoneRadius: 1.0,
    areaOpacity: 0.14,
  },
  raidBoss: {
    hue: 0,
    nodeSize: 1.0,
    nodeRadius: 1.0,
    outerEnabled: true,
    zoneRadius: 1.0,
    areaOpacity: 0.12,
  },
  base: { hue: 38, size: 1.0, radius: 1.0 },
};

export function ZoneMapCanvas(props: Props) {
  const zone = getZoneMap(props.zoneId);
  const ZONE_SETTINGS_KEY = `ashfall:zoneMapSettings:v1:${props.zoneId}`;
  const DEFAULT_KEY = `ashfall:zoneMapDefaults:v1:${props.zoneId}`;
  const GLOBAL_DEFAULT_KEY = "ashfall:zoneMapDefaults:v1:global";
  const GLOBAL_SEED_ZONE_ID: ZoneMapId = "ironwood";
  const GLOBAL_SETTINGS_KEY = "ashfall:zoneMapSettings:v1:global";

  const [optionsOpen, setOptionsOpen] = useState(false);
  const [lastStorageAction, setLastStorageAction] = useState<string | null>(null);
  const [storageDebugTick, setStorageDebugTick] = useState(0);
  const [layers, setLayers] = useState<Record<LayerId, boolean>>({
    harvest: true,
    event: true,
    raidBoss: true,
    base: true,
  });

  const [tuning, setTuning] = useState<LayerTuningState>(defaultTuning);
  const [mapOpacity, setMapOpacity] = useState(0.92);
  const [mapScale, setMapScale] = useState(1.0);

  const hasHydratedRef = useRef(false);

  type StoredStateV1 = {
    layers?: Partial<Record<LayerId, boolean>>;
    tuning?: Partial<LayerTuningState>;
    mapOpacity?: number;
    mapScale?: number;
    optionsOpen?: boolean;
  };

  const applyStoredState = useCallback((parsed: StoredStateV1) => {
    if (parsed.layers && typeof parsed.layers === "object") {
      setLayers((prev) => ({
        ...prev,
        ...parsed.layers,
      }));
    }

    if (typeof parsed.mapOpacity === "number") {
      setMapOpacity(clamp(parsed.mapOpacity, 0.4, 1));
    }
    if (typeof parsed.mapScale === "number") {
      setMapScale(clamp(parsed.mapScale, 0.85, 1.35));
    }
    if (typeof parsed.optionsOpen === "boolean") {
      setOptionsOpen(parsed.optionsOpen);
    }

    if (parsed.tuning && typeof parsed.tuning === "object") {
      setTuning((prev) => {
        const next: LayerTuningState = {
          harvest: {
            ...prev.harvest,
            ...(parsed.tuning?.harvest ?? {}),
          },
          event: {
            ...prev.event,
            ...(parsed.tuning?.event ?? {}),
          },
          raidBoss: {
            ...prev.raidBoss,
            ...(parsed.tuning?.raidBoss ?? {}),
          },
          base: {
            ...prev.base,
            ...(parsed.tuning?.base ?? {}),
          },
        };

        // Clamp key fields to prevent weird values from older schemas.
        next.harvest.hue = clamp(next.harvest.hue, 0, 360);
        next.harvest.nodeSize = clamp(next.harvest.nodeSize, 0.6, 2.4);
        next.harvest.nodeRadius = clamp(next.harvest.nodeRadius, 0.6, 2.4);
        next.harvest.outerEnabled = Boolean(next.harvest.outerEnabled);

        next.event.hue = clamp(next.event.hue, 0, 360);
        next.event.nodeSize = clamp(next.event.nodeSize, 0.6, 2.4);
        next.event.nodeRadius = clamp(next.event.nodeRadius, 0.6, 2.4);
        next.event.outerEnabled = Boolean(next.event.outerEnabled);
        next.event.zoneRadius = clamp(next.event.zoneRadius, 0.05, 2);
        next.event.areaOpacity = clamp(next.event.areaOpacity, 0, 0.8);

        next.raidBoss.hue = clamp(next.raidBoss.hue, 0, 360);
        next.raidBoss.nodeSize = clamp(next.raidBoss.nodeSize, 0.6, 2.4);
        next.raidBoss.nodeRadius = clamp(next.raidBoss.nodeRadius, 0.6, 2.4);
        next.raidBoss.outerEnabled = Boolean(next.raidBoss.outerEnabled);
        next.raidBoss.zoneRadius = clamp(next.raidBoss.zoneRadius, 0.05, 2);
        next.raidBoss.areaOpacity = clamp(next.raidBoss.areaOpacity, 0, 0.8);

        next.base.hue = clamp(next.base.hue, 0, 360);
        next.base.size = clamp(next.base.size, 0.6, 2.4);
        next.base.radius = clamp(next.base.radius, 0.6, 2.4);

        return next;
      });
    }
  }, []);

  useEffect(() => {
    try {
      const defaultsRaw = localStorage.getItem(DEFAULT_KEY);
      if (defaultsRaw) {
        applyStoredState(JSON.parse(defaultsRaw) as StoredStateV1);
      }

      let globalDefaultsRaw = localStorage.getItem(GLOBAL_DEFAULT_KEY);

      // If global defaults don't exist yet, seed them from the user's tuned Ironwood setup
      // (this lets you pick one "canonical" look and have other zones inherit it).
      if (!globalDefaultsRaw) {
        const seedRaw =
          localStorage.getItem(`ashfall:zoneMapSettings:v1:${GLOBAL_SEED_ZONE_ID}`) ??
          localStorage.getItem(`ashfall:zoneMapDefaults:v1:${GLOBAL_SEED_ZONE_ID}`);
        if (seedRaw) {
          globalDefaultsRaw = seedRaw;
          try {
            localStorage.setItem(GLOBAL_DEFAULT_KEY, seedRaw);
          } catch {
            // ignore
          }
        }
      }

      // If there are no per-zone defaults yet, seed them from global defaults (if present).
      // This lets you tune a look once and have new zones inherit it.
      if (!defaultsRaw && globalDefaultsRaw) {
        applyStoredState(JSON.parse(globalDefaultsRaw) as StoredStateV1);
        try {
          localStorage.setItem(DEFAULT_KEY, globalDefaultsRaw);
        } catch {
          // ignore
        }
      }

      // Global settings: used as the "canonical look" across zones.
      // Apply these LAST so they win over any per-zone cached settings.
      let globalSettingsRaw = localStorage.getItem(GLOBAL_SETTINGS_KEY);
      if (!globalSettingsRaw) {
        // Migrate from Ironwood (your canonical tuned zone), falling back to this zone.
        const seedRaw =
          localStorage.getItem(`ashfall:zoneMapSettings:v1:${GLOBAL_SEED_ZONE_ID}`) ??
          localStorage.getItem(`ashfall:zoneMapDefaults:v1:${GLOBAL_SEED_ZONE_ID}`) ??
          localStorage.getItem(ZONE_SETTINGS_KEY) ??
          localStorage.getItem(DEFAULT_KEY);
        if (seedRaw) {
          globalSettingsRaw = seedRaw;
          try {
            localStorage.setItem(GLOBAL_SETTINGS_KEY, seedRaw);
          } catch {
            // ignore
          }
        }
      }

      // Per-zone cached settings (older behavior). Apply, but allow global settings to override.
      const zoneRaw = localStorage.getItem(ZONE_SETTINGS_KEY);
      if (zoneRaw && !globalSettingsRaw) {
        // Only apply per-zone settings when there is no global style defined.
        // Once a global style exists, it should consistently win across zones.
        applyStoredState(JSON.parse(zoneRaw) as StoredStateV1);
      }

      // If you already have a tuned/cached setup, promote it to "defaults" once.
      if (!defaultsRaw && !globalDefaultsRaw && zoneRaw) {
        try {
          localStorage.setItem(DEFAULT_KEY, zoneRaw);
        } catch {
          // ignore
        }
      }

      if (globalSettingsRaw) {
        applyStoredState(JSON.parse(globalSettingsRaw) as StoredStateV1);
      }
    } catch {
      // ignore corrupted cache
    } finally {
      hasHydratedRef.current = true;
    }
  }, [DEFAULT_KEY, ZONE_SETTINGS_KEY, applyStoredState]);

  const saveAsDefaults = () => {
    const payload: StoredStateV1 = { layers, tuning, mapOpacity, mapScale, optionsOpen };
    try {
      const raw = JSON.stringify(payload);
      localStorage.setItem(DEFAULT_KEY, raw);
      // Also align current (per-zone) settings with the new defaults so the user
      // sees the same thing after navigating away/back.
      localStorage.setItem(ZONE_SETTINGS_KEY, raw);
      setLastStorageAction(`Saved defaults for ${props.zoneId}`);
      setStorageDebugTick((n) => n + 1);
    } catch {
      // ignore
    }
  };

  const resetToDefaults = () => {
    try {
      const raw = localStorage.getItem(DEFAULT_KEY);
      if (!raw) return;
      applyStoredState(JSON.parse(raw) as StoredStateV1);
    } catch {
      // ignore
    }
  };

  const saveAsGlobalDefaults = (applyToAllZones = false) => {
    const payload: StoredStateV1 = { layers, tuning, mapOpacity, mapScale, optionsOpen };
    const raw = JSON.stringify(payload);
    try {
      localStorage.setItem(GLOBAL_DEFAULT_KEY, raw);
      localStorage.setItem(GLOBAL_SETTINGS_KEY, raw);
    } catch {
      // ignore
    }

    // Ensure the current view is aligned immediately.
    applyStoredState(payload);
    setLastStorageAction(
      applyToAllZones ? "Applied settings to all zones" : "Saved global defaults",
    );
    setStorageDebugTick((n) => n + 1);

    if (!applyToAllZones) return;
    for (const zoneId of ZONE_MAP_IDS) {
      try {
        // Set BOTH defaults and active settings. Otherwise previously-visited zones
        // will keep showing their cached per-zone settings and it looks like "apply"
        // didn't work.
        localStorage.setItem(`ashfall:zoneMapDefaults:v1:${zoneId}`, raw);
        localStorage.setItem(`ashfall:zoneMapSettings:v1:${zoneId}`, raw);
      } catch {
        // ignore
      }
    }
  };

  const applyGlobalDefaults = () => {
    try {
      const raw = localStorage.getItem(GLOBAL_DEFAULT_KEY);
      if (!raw) return;
      applyStoredState(JSON.parse(raw) as StoredStateV1);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (!hasHydratedRef.current) return;

    const payload: StoredStateV1 = { layers, tuning, mapOpacity, mapScale, optionsOpen };

    try {
      const raw = JSON.stringify(payload);
      // Persist per-zone settings as you tune this map.
      localStorage.setItem(ZONE_SETTINGS_KEY, raw);
    } catch {
      // ignore quota / privacy mode
    }
  }, [ZONE_SETTINGS_KEY, layers, tuning, mapOpacity, mapScale, optionsOpen]);

  const activeRaidBoss = useMemo(
    () => zone.markers.find((m) => m.type === "raidBoss" && m.status === "active"),
    [zone.markers],
  );

  const visibleMarkers = useMemo(() => {
    return zone.markers.filter((m) => {
      if (m.type === "harvest") return layers.harvest;
      if (m.type === "event") return layers.event;
      if (m.type === "raidBoss") return layers.raidBoss;
      if (m.type === "base") return layers.base;
      return true;
    });
  }, [layers, zone.markers]);

  // Zone radii are authored in percent-of-map-width. Keep the base scale neutral so
  // the slider feels predictable (no "everything is huge" defaults).
  const areaScale = 1;
  const eventAreaScale = areaScale * tuning.event.zoneRadius;
  const raidAreaScale = areaScale * tuning.raidBoss.zoneRadius;

  const harvestColor = hsl(tuning.harvest.hue, 72, 62, 1);
  const eventColor = hsl(tuning.event.hue, 78, 58, 1);
  const raidColor = hsl(tuning.raidBoss.hue, 86, 58, 1);
  const baseFill = hsl(tuning.base.hue, 45, 56, 0.42);
  const baseStroke = hsl(tuning.base.hue, 55, 64, 0.55);

  const nodeInnerPx = {
    harvest: Math.round(8 * tuning.harvest.nodeSize),
    event: Math.round(14 * tuning.event.nodeSize),
    raidBoss: Math.round(16 * tuning.raidBoss.nodeSize),
  };
  const nodeOuterRadiusPx = {
    harvest: Math.round(14 * tuning.harvest.nodeRadius),
    event: Math.round(22 * tuning.event.nodeRadius),
    raidBoss: Math.round(28 * tuning.raidBoss.nodeRadius),
  };

  const nodeOuterEnabled = {
    harvest: tuning.harvest.outerEnabled,
    event: tuning.event.outerEnabled,
    raidBoss: tuning.raidBoss.outerEnabled,
  };

  const baseCorner = clamp(6 * tuning.base.radius, 2, 16);
  const baseScale = clamp(tuning.base.size, 0.5, 2.5);
  const baseCellPx = clamp(Math.round(10 * baseScale), 8, 20);

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-[1320px] px-4">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          {/* Map */}
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-2)] shadow-[0_18px_60px_rgba(0,0,0,0.48)]">
            <div
              className="relative h-[62vh] min-h-[520px] w-full sm:h-[66vh] lg:h-[70vh]"
              style={{ aspectRatio: `${zone.aspect[0]} / ${zone.aspect[1]}` }}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: `scale(${mapScale})`,
                  transformOrigin: "50% 50%",
                }}
              >
                <Image
                  alt={`${zone.name} map`}
                  src={withBasePath(zone.imageSrc)}
                  fill
                  priority
                  sizes="100vw"
                  className="select-none object-cover"
                  style={{ opacity: mapOpacity }}
                />

                {/* Readability / cinematic overlays */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_520px_at_18%_20%,color-mix(in_oklab,var(--accent-gold)_14%,transparent),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_520px_at_85%_25%,color-mix(in_oklab,var(--accent-arcane)_14%,transparent),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--bg-0)_12%,transparent)] via-transparent to-[color:color-mix(in_oklab,var(--bg-0)_62%,transparent)]" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color:color-mix(in_oklab,var(--accent-gold)_12%,transparent)]" />

                {/* Overlays: event/raid areas */}
                <div className="absolute inset-0">
                  {visibleMarkers
                    .filter((m) => typeof m.areaRadius === "number")
                    .map((m) => {
                      const isEvent = m.type === "event";
                      const isBoss = m.type === "raidBoss";
                      const areaEnabled = isEvent
                        ? tuning.event.outerEnabled
                        : isBoss
                          ? tuning.raidBoss.outerEnabled
                          : true;
                      if (!areaEnabled) return null;
                      const scale = isEvent ? eventAreaScale : raidAreaScale;
                      const rRaw = (m.areaRadius ?? 0) * 2 * scale;
                      // Guardrail: avoid accidental "covers the whole map" circles.
                      const r = clamp(rRaw, 0, 90);
                      const areaOpacity = clamp(
                        isEvent ? tuning.event.areaOpacity : tuning.raidBoss.areaOpacity,
                        0,
                        0.8,
                      );
                      const outlineOpacity = areaOpacity;
                      const gradientOpacity = clamp(areaOpacity * 1.4, 0, 0.55);

                      return (
                        <div
                          key={`${m.id}-area`}
                          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                          style={{ left: `${m.x}%`, top: `${m.y}%`, width: `${r}%` }}
                          aria-hidden="true"
                        >
                          <div
                            className="relative rounded-full"
                            style={{
                              aspectRatio: "1 / 1",
                              border: isBoss
                                ? `3px solid ${hsl(tuning.raidBoss.hue, 86, 58, outlineOpacity)}`
                                : `2px solid ${hsl(tuning.event.hue, 78, 58, outlineOpacity)}`,
                              backgroundColor: isBoss
                                ? hsl(tuning.raidBoss.hue, 86, 58, areaOpacity)
                                : hsl(tuning.event.hue, 78, 58, areaOpacity),
                              boxShadow: `0 0 0 1px rgba(0,0,0,0.32) inset, 0 0 ${isBoss ? 110 : 80}px ${hsl(isBoss ? tuning.raidBoss.hue : tuning.event.hue, 85, 58, clamp(areaOpacity * 0.9, 0, 0.55))}`,
                            }}
                          >
                            <div
                              className="absolute inset-0 rounded-full"
                              style={{
                                background: `radial-gradient(circle at 50% 50%, ${hsl(
                                  isBoss ? tuning.raidBoss.hue : tuning.event.hue,
                                  86,
                                  58,
                                  gradientOpacity,
                                )}, ${hsl(isBoss ? tuning.raidBoss.hue : tuning.event.hue, 86, 58, 0)} 64%)`,
                              }}
                            />
                            <div
                              className="areaPulse absolute inset-0 rounded-full"
                              style={{
                                border: `2px solid ${hsl(
                                  isBoss ? tuning.raidBoss.hue : tuning.event.hue,
                                  86,
                                  58,
                                  clamp(outlineOpacity * 1.6, 0, 0.85),
                                )}`,
                                boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.35) inset",
                                animationDuration: isBoss ? "1.55s" : "1.9s",
                              }}
                            />
                            <div
                              className="pointer-events-none absolute inset-0 rounded-full"
                              style={{ outline: `1px solid rgba(0,0,0,0.18)` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Overlays: bases */}
                <div className="absolute inset-0">
                  {visibleMarkers
                    .filter((m) => m.type === "base" && Array.isArray(m.cells) && m.cells.length > 0)
                    .map((m) => {
                      const cells = (m.cells ?? []).map((c) => ({ x: c.x, y: c.y }));
                      const minX = Math.min(...cells.map((c) => c.x));
                      const minY = Math.min(...cells.map((c) => c.y));
                      const maxX = Math.max(...cells.map((c) => c.x));
                      const cols = maxX - minX + 1;

                      const normalized = cells.map((c) => ({
                        x: c.x - minX,
                        y: c.y - minY,
                      }));

                      return (
                        <div
                          key={`${m.id}-base`}
                          className="baseOverlay group absolute z-40"
                          style={{ left: `${m.x}%`, top: `${m.y}%` }}
                        >
                          <div className="relative -translate-x-1/2 -translate-y-1/2">
                            <div
                              className="grid gap-[2px]"
                              style={{
                                gridTemplateColumns: `repeat(${cols}, ${baseCellPx}px)`,
                                gridAutoRows: `${baseCellPx}px`,
                                padding: 0,
                                borderRadius: 0,
                                background: "transparent",
                                border: "0",
                              }}
                            >
                              {normalized.map((c, idx) => (
                                <div
                                  key={`${m.id}-cell-${idx}`}
                                  style={{
                                    gridColumnStart: c.x + 1,
                                    gridRowStart: c.y + 1,
                                    borderRadius: Math.max(2, Math.floor(baseCorner / 2)),
                                    background: `linear-gradient(180deg, rgba(255,255,255,0.10), rgba(0,0,0,0.04)), ${baseFill}`,
                                    border: `1px solid ${baseStroke}`,
                                    boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
                                  }}
                                />
                              ))}
                            </div>
                          </div>

                        <div className="pointer-events-none absolute left-1/2 top-0 z-20 w-56 -translate-x-1/2 -translate-y-[calc(100%+10px)] opacity-0 transition-opacity group-hover:opacity-100">
                          <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)] px-4 py-3 text-[color:var(--text-1)] shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
                            <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">BASE</div>
                            <div className="ashfall-display mt-1 text-base text-[color:var(--text-0)]">
                              {m.name}
                            </div>
                            <div className="mt-2 text-sm text-[color:var(--text-1)]">
                              {m.detail ? `${m.detail} • ` : ""}
                              {cells.length} cells
                            </div>
                          </div>
                          <div className="mx-auto mt-2 h-2 w-2 rotate-45 border-b border-r border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)]" />
                        </div>
                        </div>
                      );
                    })}
                </div>

                {/* Markers */}
                <div className="absolute inset-0">
                  {visibleMarkers
                    .filter((m) => m.type !== "base")
                    .map((m) => (
                      <MarkerButton
                        key={m.id}
                        marker={m}
                        colors={{ harvest: harvestColor, event: eventColor, raidBoss: raidColor }}
                        nodeInnerPx={nodeInnerPx}
                        nodeOuterRadiusPx={nodeOuterRadiusPx}
                        nodeOuterEnabled={nodeOuterEnabled}
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* Mobile helper */}
            <div className="px-4 py-6 sm:hidden">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">TIP</div>
              <div className="mt-2 text-sm text-[color:var(--text-1)]">
                Open <span className="font-semibold">OPTIONS</span> to tune size, radius, and color.
              </div>
            </div>
          </div>

          {/* Controls */}
          <aside className="lg:sticky lg:top-24">
            <div className="flex max-h-[72vh] flex-col overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_72%,transparent)] px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                    ZONE MAP
                  </div>
                  <div className="ashfall-display mt-1 truncate text-2xl text-[color:var(--text-0)]">
                    {zone.name}
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-1)]">
                    Layers, tuning, and saved presets.
                  </div>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_40%,transparent)] px-3 py-1 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                  onClick={() => setOptionsOpen((v) => !v)}
                >
                  {optionsOpen ? "CLOSE" : "OPTIONS"}
                </button>
              </div>

              {activeRaidBoss ? (
                <div className="mt-4 rounded-2xl border border-[color:color-mix(in_oklab,rgba(239,68,68,1)_38%,var(--border-subtle))] bg-[color:color-mix(in_oklab,var(--bg-0)_72%,transparent)] px-4 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-block h-2.5 w-2.5 rounded-full"
                          style={{
                            background: raidColor,
                            boxShadow: "0 0 0 6px rgba(239,68,68,0.18)",
                          }}
                        />
                        <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                          RAID BOSS ACTIVE
                        </div>
                      </div>
                      <div className="ashfall-display mt-2 text-balance text-xl text-[color:var(--text-0)]">
                        {activeRaidBoss.name}
                      </div>
                      <div className="mt-2 text-sm text-[color:var(--text-1)]">
                        A raid-scale target is live right now. Expect third parties.
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-[color:color-mix(in_oklab,rgba(239,68,68,1)_40%,var(--border-subtle))] bg-[color:rgba(239,68,68,0.12)] px-3 py-1 text-[10px] tracking-[0.22em] text-[color:var(--text-1)]">
                      HOT
                    </span>
                  </div>
                </div>
              ) : null}

              <div className="mt-4 flex-1 overflow-y-auto pr-1">
                <div className="space-y-3 text-sm text-[color:var(--text-1)]">
                  <LayerToggle
                    label="Harvest nodes"
                    swatch={harvestColor}
                    checked={layers.harvest}
                    onChange={(v) => setLayers((s) => ({ ...s, harvest: v }))}
                  />
                  <LayerToggle
                    label="Event spawns"
                    swatch={eventColor}
                    checked={layers.event}
                    onChange={(v) => setLayers((s) => ({ ...s, event: v }))}
                  />
                  <LayerToggle
                    label="Raid boss"
                    swatch={raidColor}
                    checked={layers.raidBoss}
                    onChange={(v) => setLayers((s) => ({ ...s, raidBoss: v }))}
                  />
                  <LayerToggle
                    label="Player bases"
                    swatch={hsl(tuning.base.hue, 40, 55, 0.9)}
                    checked={layers.base}
                    onChange={(v) => setLayers((s) => ({ ...s, base: v }))}
                    square
                  />
                </div>

                {optionsOpen ? (
                  <>
                    <OrnamentDivider className="mt-5 opacity-70" />

                    <div className="mt-4 grid gap-2">
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={saveAsDefaults}
                          className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_40%,transparent)] px-3 py-1 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                        >
                          SAVE AS DEFAULTS
                        </button>
                        <button
                          type="button"
                          onClick={resetToDefaults}
                          className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_30%,transparent)] px-3 py-1 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                        >
                          RESET TO DEFAULTS
                        </button>
                        <button
                          type="button"
                          onClick={() => saveAsGlobalDefaults(false)}
                          className="rounded-full border border-[color:color-mix(in_oklab,var(--accent-gold)_40%,var(--border-subtle))] bg-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] px-3 py-1 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                        >
                          SAVE AS GLOBAL
                        </button>
                        <button
                          type="button"
                          onClick={applyGlobalDefaults}
                          className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_30%,transparent)] px-3 py-1 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                        >
                          APPLY GLOBAL
                        </button>
                        <button
                          type="button"
                          onClick={() => saveAsGlobalDefaults(true)}
                          className="rounded-full border border-[color:color-mix(in_oklab,var(--accent-arcane)_34%,var(--border-subtle))] bg-[color:color-mix(in_oklab,var(--accent-arcane)_14%,transparent)] px-3 py-1 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                        >
                          APPLY TO ALL ZONES
                        </button>
                      </div>
                      <div className="text-[10px] leading-relaxed text-[color:var(--text-2)]">
                        Defaults apply when you clear settings or reset. Global defaults can seed new zones.
                      </div>
                      {lastStorageAction ? (
                        <div className="mt-2 text-[10px] leading-relaxed text-[color:color-mix(in_oklab,var(--accent-gold)_70%,var(--text-2))]">
                          {lastStorageAction}
                        </div>
                      ) : null}

                      <details className="mt-3 rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_22%,transparent)] px-3 py-3">
                        <summary className="cursor-pointer list-none select-none">
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)]">
                              STORAGE DEBUG
                            </div>
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)]">
                              {props.zoneId.toUpperCase()}
                            </div>
                          </div>
                        </summary>
                        <StorageDebug
                          zoneId={props.zoneId}
                          keys={{
                            zoneSettings: ZONE_SETTINGS_KEY,
                            zoneDefaults: DEFAULT_KEY,
                            globalSettings: GLOBAL_SETTINGS_KEY,
                            globalDefaults: GLOBAL_DEFAULT_KEY,
                          }}
                          tick={storageDebugTick}
                        />
                      </details>
                    </div>

                    <div className="mt-4 grid gap-3">
                      <details className="group rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_28%,transparent)] px-3 py-3">
                        <summary className="cursor-pointer list-none select-none">
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                              HARVEST NODES
                            </div>
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)] group-open:hidden">
                              EXPAND
                            </div>
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)] hidden group-open:block">
                              COLLAPSE
                            </div>
                          </div>
                        </summary>
                        <div className="mt-3">
                          <NodeOptionsSection
                            title="Harvest nodes"
                            hue={tuning.harvest.hue}
                            nodeSize={tuning.harvest.nodeSize}
                            nodeRadius={tuning.harvest.nodeRadius}
                            outerEnabled={tuning.harvest.outerEnabled}
                            onChange={(next) =>
                              setTuning((s) => ({ ...s, harvest: { ...s.harvest, ...next } }))
                            }
                          />
                        </div>
                      </details>

                      <details open className="group rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_28%,transparent)] px-3 py-3">
                        <summary className="cursor-pointer list-none select-none">
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                              EVENT SPAWNS
                            </div>
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)] group-open:hidden">
                              EXPAND
                            </div>
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)] hidden group-open:block">
                              COLLAPSE
                            </div>
                          </div>
                        </summary>
                        <div className="mt-3">
                          <NodeOptionsSection
                            title="Event spawns"
                            hue={tuning.event.hue}
                            nodeSize={tuning.event.nodeSize}
                            nodeRadius={tuning.event.nodeRadius}
                            zoneRadius={tuning.event.zoneRadius}
                            areaOpacity={tuning.event.areaOpacity}
                            outerEnabled={tuning.event.outerEnabled}
                            showNodeRadius={false}
                            onChange={(next) =>
                              setTuning((s) => ({ ...s, event: { ...s.event, ...next } }))
                            }
                          />
                        </div>
                      </details>

                      <details open className="group rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_28%,transparent)] px-3 py-3">
                        <summary className="cursor-pointer list-none select-none">
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                              RAID BOSS
                            </div>
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)] group-open:hidden">
                              EXPAND
                            </div>
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)] hidden group-open:block">
                              COLLAPSE
                            </div>
                          </div>
                        </summary>
                        <div className="mt-3">
                          <NodeOptionsSection
                            title="Raid boss"
                            hue={tuning.raidBoss.hue}
                            nodeSize={tuning.raidBoss.nodeSize}
                            nodeRadius={tuning.raidBoss.nodeRadius}
                            zoneRadius={tuning.raidBoss.zoneRadius}
                            areaOpacity={tuning.raidBoss.areaOpacity}
                            outerEnabled={tuning.raidBoss.outerEnabled}
                            showNodeRadius={false}
                            onChange={(next) =>
                              setTuning((s) => ({ ...s, raidBoss: { ...s.raidBoss, ...next } }))
                            }
                          />
                        </div>
                      </details>

                      <details className="group rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_28%,transparent)] px-3 py-3">
                        <summary className="cursor-pointer list-none select-none">
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                              PLAYER BASES
                            </div>
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)] group-open:hidden">
                              EXPAND
                            </div>
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)] hidden group-open:block">
                              COLLAPSE
                            </div>
                          </div>
                        </summary>
                        <div className="mt-3">
                          <BaseOptionsSection
                            title="Player bases"
                            hue={tuning.base.hue}
                            size={tuning.base.size}
                            radius={tuning.base.radius}
                            onChange={(next) =>
                              setTuning((s) => ({ ...s, base: { ...s.base, ...next } }))
                            }
                          />
                        </div>
                      </details>

                      <details open className="group rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_28%,transparent)] px-3 py-3">
                        <summary className="cursor-pointer list-none select-none">
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                              MAP
                            </div>
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)] group-open:hidden">
                              EXPAND
                            </div>
                            <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)] hidden group-open:block">
                              COLLAPSE
                            </div>
                          </div>
                        </summary>
                        <div className="mt-3 grid gap-3">
                          <SliderRow
                            label="Opacity"
                            value={mapOpacity}
                            min={0.4}
                            max={1}
                            step={0.02}
                            display={`${Math.round(mapOpacity * 100)}%`}
                            onChange={setMapOpacity}
                          />
                          <SliderRow
                            label="Zoom"
                            value={mapScale}
                            min={0.85}
                            max={1.35}
                            step={0.01}
                            display={`${Math.round(mapScale * 100)}%`}
                            onChange={setMapScale}
                          />
                        </div>
                      </details>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </aside>
        </div>

        <style>{`
          .areaPulse {
            pointer-events: none;
            animation: ashfallAreaPulse 1.8s ease-out infinite;
            opacity: 0.95;
            will-change: transform, opacity;
          }
          @keyframes ashfallAreaPulse {
            0% {
              transform: scale(0.02);
              opacity: 0.9;
            }
            70% {
              opacity: 0.15;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

function LayerToggle(props: {
  label: string;
  swatch: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  square?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_40%,transparent)] px-3 py-2">
      <span className="flex items-center gap-2">
        <span
          className={[
            "h-2.5 w-2.5 shadow-[0_0_0_4px_rgba(0,0,0,0.0)]",
            props.square ? "rounded-[3px] border border-[color:var(--border-subtle)]" : "rounded-full",
          ].join(" ")}
          style={{
            background: props.swatch,
            boxShadow: props.square ? undefined : `0 0 0 4px ${props.swatch.replace("hsla", "hsla").replace("/ 1)", "/ 0.18)")}`,
          }}
        />
        {props.label}
      </span>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={(e) => props.onChange(e.target.checked)}
        className="h-4 w-4 accent-[color:var(--text-1)]"
      />
    </label>
  );
}

function NodeOptionsSection(props: {
  title: string;
  hue: number;
  nodeSize: number;
  nodeRadius: number;
  zoneRadius?: number;
  areaOpacity?: number;
  outerEnabled: boolean;
  showNodeRadius?: boolean;
  onChange: (
    next: Partial<NodeLayerTuning> &
      Partial<Pick<ZoneLayerTuning, "zoneRadius" | "areaOpacity">>,
  ) => void;
}) {
  const hasArea = typeof props.zoneRadius === "number";
  const showNodeRadius = props.showNodeRadius ?? true;
  return (
    <div>
      <div className="flex items-end justify-between gap-3">
        <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
          {props.title.toUpperCase()}
        </div>
        <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)]">
          H {Math.round(props.hue)} • N {Math.round(props.nodeSize * 100)}%
          {showNodeRadius ? ` • R ${Math.round(props.nodeRadius * 100)}%` : ""}
          {hasArea ? ` • A ${Math.round((props.zoneRadius ?? 0) * 100)}%` : ""}
        </div>
      </div>
      <div className="mt-3 grid gap-3">
        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_28%,transparent)] px-3 py-2">
          <span className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            {hasArea ? "AREA (FILL + PULSE)" : "OUTER RING"}
          </span>
          <input
            type="checkbox"
            checked={props.outerEnabled}
            onChange={(e) => props.onChange({ outerEnabled: e.target.checked })}
            className="h-4 w-4 accent-[color:var(--accent-gold)]"
          />
        </label>
        <SliderRow
          label="Color"
          value={props.hue}
          min={0}
          max={360}
          step={1}
          display={`${Math.round(props.hue)}°`}
          onChange={(v) => props.onChange({ hue: v })}
        />
        <SliderRow
          label="Node size"
          value={props.nodeSize}
          min={0.6}
          max={2.4}
          step={0.05}
          display={`${Math.round(props.nodeSize * 100)}%`}
          onChange={(v) => props.onChange({ nodeSize: v })}
        />
        {showNodeRadius ? (
          <SliderRow
            label="Node radius"
            value={props.nodeRadius}
            min={0.6}
            max={2.4}
            step={0.05}
            display={`${Math.round(props.nodeRadius * 100)}%`}
            onChange={(v) => props.onChange({ nodeRadius: v })}
          />
        ) : null}
        {hasArea ? (
          <SliderRow
            label="Area radius"
            value={props.zoneRadius ?? 1}
            min={0.05}
            max={2}
            step={0.05}
            display={`${Math.round((props.zoneRadius ?? 1) * 100)}%`}
            onChange={(v) => props.onChange({ zoneRadius: v })}
          />
        ) : null}
        {hasArea ? (
          <SliderRow
            label="Area opacity"
            value={props.areaOpacity ?? 0.14}
            min={0}
            max={0.8}
            step={0.01}
            display={`${Math.round((props.areaOpacity ?? 0.14) * 100)}%`}
            onChange={(v) => props.onChange({ areaOpacity: v })}
          />
        ) : null}
      </div>
    </div>
  );
}

function BaseOptionsSection(props: {
  title: string;
  hue: number;
  size: number;
  radius: number;
  onChange: (next: Partial<BaseLayerTuning>) => void;
}) {
  return (
    <div>
      <div className="flex items-end justify-between gap-3">
        <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
          {props.title.toUpperCase()}
        </div>
        <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)]">
          H {Math.round(props.hue)} • S {Math.round(props.size * 100)}% • C{" "}
          {Math.round(props.radius * 100)}%
        </div>
      </div>
      <div className="mt-3 grid gap-3">
        <SliderRow
          label="Color"
          value={props.hue}
          min={0}
          max={360}
          step={1}
          display={`${Math.round(props.hue)}°`}
          onChange={(v) => props.onChange({ hue: v })}
        />
        <SliderRow
          label="Footprint size"
          value={props.size}
          min={0.6}
          max={2.4}
          step={0.05}
          display={`${Math.round(props.size * 100)}%`}
          onChange={(v) => props.onChange({ size: v })}
        />
        <SliderRow
          label="Corner radius"
          value={props.radius}
          min={0.6}
          max={2.4}
          step={0.05}
          display={`${Math.round(props.radius * 100)}%`}
          onChange={(v) => props.onChange({ radius: v })}
        />
      </div>
    </div>
  );
}

function SliderRow(props: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">{props.label.toUpperCase()}</div>
        <div className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)]">{props.display}</div>
      </div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        className="h-2 w-full accent-[color:var(--accent-gold)]"
      />
    </div>
  );
}

function StorageDebug(props: {
  zoneId: string;
  keys: {
    zoneSettings: string;
    zoneDefaults: string;
    globalSettings: string;
    globalDefaults: string;
  };
  tick: number;
}) {
  const [snapshot, setSnapshot] = useState<Record<string, string | null>>({});
  const [origin, setOrigin] = useState<string>("");
  const [href, setHref] = useState<string>("");

  useEffect(() => {
    try {
      setOrigin(window.location.origin);
      setHref(window.location.href);
      setSnapshot({
        [props.keys.zoneSettings]: localStorage.getItem(props.keys.zoneSettings),
        [props.keys.zoneDefaults]: localStorage.getItem(props.keys.zoneDefaults),
        [props.keys.globalSettings]: localStorage.getItem(props.keys.globalSettings),
        [props.keys.globalDefaults]: localStorage.getItem(props.keys.globalDefaults),
      });
    } catch {
      setSnapshot({});
    }
  }, [props.tick, props.keys.globalDefaults, props.keys.globalSettings, props.keys.zoneDefaults, props.keys.zoneSettings]);

  const rows = Object.entries(snapshot);

  return (
    <div className="mt-3 grid gap-2 text-[10px] leading-relaxed text-[color:var(--text-2)]">
      <div className="rounded-lg border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_35%,transparent)] px-2 py-2">
        <div className="font-semibold text-[color:var(--text-1)]">Origin</div>
        <div className="mt-1 break-all">{origin || "(unknown)"}</div>
        <div className="mt-2 font-semibold text-[color:var(--text-1)]">URL</div>
        <div className="mt-1 break-all">{href || "(unknown)"}</div>
      </div>
      {rows.length === 0 ? (
        <div>Unable to read localStorage.</div>
      ) : (
        rows.map(([k, v]) => (
          <div key={k} className="rounded-lg border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_35%,transparent)] px-2 py-2">
            <div className="break-all font-semibold text-[color:var(--text-1)]">{k}</div>
            <div className="mt-1">
              {v ? (
                <span className="text-[color:var(--text-1)]">present</span>
              ) : (
                <span className="text-[color:var(--text-2)]">missing</span>
              )}
            </div>
            {v ? (
              <details className="mt-2">
                <summary className="cursor-pointer select-none text-[10px] tracking-[0.22em] text-[color:var(--text-2)]">
                  SHOW JSON
                </summary>
                <pre className="mt-2 max-h-40 overflow-auto whitespace-pre-wrap break-words rounded-md border border-[color:var(--border-subtle)] bg-black/20 p-2 text-[10px] text-[color:var(--text-1)]">
                  {v}
                </pre>
              </details>
            ) : null}
          </div>
        ))
      )}
      <div className="text-[10px] text-[color:var(--text-2)]">
        Tip: if these keys are “missing” after clicking, you’re either on the wrong origin, the click handler isn’t firing, or storage is blocked.
      </div>
    </div>
  );
}

function MarkerButton(props: {
  marker: MapMarker;
  colors: { harvest: string; event: string; raidBoss: string };
  nodeInnerPx: { harvest: number; event: number; raidBoss: number };
  nodeOuterRadiusPx: { harvest: number; event: number; raidBoss: number };
  nodeOuterEnabled: { harvest: boolean; event: boolean; raidBoss: boolean };
}) {
  const m = props.marker;
  const isHarvest = m.type === "harvest";
  const isEvent = m.type === "event";
  const isRaidBoss = m.type === "raidBoss";
  const isRaidActive = isRaidBoss && m.status === "active";

  const outerRadius = isHarvest
    ? props.nodeOuterRadiusPx.harvest
    : isEvent
      ? props.nodeOuterRadiusPx.event
      : props.nodeOuterRadiusPx.raidBoss;
  const outerDiameter = Math.max(outerRadius * 2, 22);
  const dotSize = isHarvest
    ? props.nodeInnerPx.harvest
    : isEvent
      ? props.nodeInnerPx.event
      : props.nodeInnerPx.raidBoss;
  const color = isHarvest ? props.colors.harvest : isEvent ? props.colors.event : props.colors.raidBoss;
  const outerAlpha = 0.18;
  const outerEnabled = isHarvest
    ? props.nodeOuterEnabled.harvest
    : isEvent
      ? props.nodeOuterEnabled.event
      : props.nodeOuterEnabled.raidBoss;

  return (
    <div
      className="marker group absolute"
      data-type={m.type}
      style={{ left: `${m.x}%`, top: `${m.y}%` }}
    >
      <button
        type="button"
        className="relative grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition-transform hover:scale-105 focus-visible:scale-105 focus-visible:outline-none"
        style={{
          width: outerDiameter,
          height: outerDiameter,
        }}
        aria-label={`${m.type === "harvest" ? "Harvest node" : m.type === "event" ? "Event spawn" : "Raid boss"}: ${m.name}`}
      >
        {/* Avoid duplicative rings: events/raid only use the big map area. */}
        {isHarvest && outerEnabled ? (
          <span
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background: color.replace("/ 1)", `/ ${outerAlpha})`),
              border: `2px solid ${color.replace("/ 1)", `/ ${outerAlpha})`)}`,
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.28) inset, 0 10px 24px rgba(0,0,0,0.28)",
            }}
            aria-hidden="true"
          />
        ) : null}

        <span
          className="block rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            background: color,
            boxShadow: "0 0 0 1px rgba(0,0,0,0.35) inset",
          }}
        />
      </button>

      <div className="pointer-events-none absolute left-1/2 top-0 z-20 w-64 -translate-x-1/2 -translate-y-[calc(100%+10px)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
        <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)] px-4 py-3 text-[color:var(--text-1)] shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                {m.type === "harvest" ? "HARVEST" : m.type === "event" ? "EVENT" : "RAID BOSS"}
              </div>
              <div className="ashfall-display mt-1 truncate text-base text-[color:var(--text-0)]">{m.name}</div>
            </div>
            <span className="shrink-0 rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_40%,transparent)] px-3 py-1 text-[10px] tracking-[0.22em] text-[color:var(--text-1)]">
              {m.type === "harvest"
                ? "NODE"
                : m.type === "event"
                  ? "SPAWN"
                  : isRaidActive
                    ? "ACTIVE"
                    : "BOSS"}
            </span>
          </div>
          {m.detail ? <div className="mt-2 text-sm text-[color:var(--text-1)]">{m.detail}</div> : null}
        </div>
        <div className="mx-auto mt-2 h-2 w-2 rotate-45 border-b border-r border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)]" />
      </div>
    </div>
  );
}


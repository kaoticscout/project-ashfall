"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { getZoneMap, type ZoneMapId, type MapMarker } from "@/lib/zoneMaps";

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
  event: { hue: 45, nodeSize: 1.0, nodeRadius: 1.0, outerEnabled: true, zoneRadius: 1.0 },
  raidBoss: { hue: 0, nodeSize: 1.0, nodeRadius: 1.0, outerEnabled: true, zoneRadius: 1.0 },
  base: { hue: 38, size: 1.0, radius: 1.0 },
};

export function ZoneMapCanvas(props: Props) {
  const zone = getZoneMap(props.zoneId);

  const [optionsOpen, setOptionsOpen] = useState(false);
  const [layers, setLayers] = useState<Record<LayerId, boolean>>({
    harvest: true,
    event: true,
    raidBoss: true,
    base: true,
  });

  const [tuning, setTuning] = useState<LayerTuningState>(defaultTuning);
  const [mapOpacity, setMapOpacity] = useState(0.92);
  const [mapScale, setMapScale] = useState(1.0);

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
  const baseTint = hsl(tuning.base.hue, 35, 52, 0.18);

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

  return (
    <section className="pb-16">
      <div className="relative">
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
          <div className="relative overflow-hidden border-y border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
            <div
              className="relative h-[72vh] min-h-[520px] w-full sm:h-[78vh] lg:h-[82vh]"
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
                  src={zone.imageSrc}
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
                      const scale = isEvent ? eventAreaScale : raidAreaScale;
                      const rRaw = (m.areaRadius ?? 0) * 2 * scale;
                      // Guardrail: avoid accidental "covers the whole map" circles.
                      const r = clamp(rRaw, 0, 140);

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
                              border: isBoss ? `3px solid ${hsl(tuning.raidBoss.hue, 86, 58, 0.52)}` : `2px solid ${hsl(tuning.event.hue, 78, 58, 0.48)}`,
                              backgroundColor: isBoss ? hsl(tuning.raidBoss.hue, 86, 58, 0.12) : hsl(tuning.event.hue, 78, 58, 0.14),
                              boxShadow: `0 0 0 1px rgba(0,0,0,0.32) inset, 0 0 ${isBoss ? 110 : 80}px ${hsl(isBoss ? tuning.raidBoss.hue : tuning.event.hue, 85, 58, isBoss ? 0.18 : 0.14)}`,
                            }}
                          >
                            <div
                              className="absolute inset-0 rounded-full"
                              style={{
                                background: `radial-gradient(circle at 50% 50%, ${hsl(
                                  isBoss ? tuning.raidBoss.hue : tuning.event.hue,
                                  86,
                                  58,
                                  isBoss ? 0.22 : 0.18,
                                )}, ${hsl(isBoss ? tuning.raidBoss.hue : tuning.event.hue, 86, 58, 0)} 64%)`,
                              }}
                            />
                            {isBoss ? (
                              <div
                                className="raidPulse absolute inset-0 rounded-full"
                                style={{
                                  border: `2px solid ${hsl(tuning.raidBoss.hue, 86, 58, 0.55)}`,
                                  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.35) inset",
                                }}
                              />
                            ) : null}
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
                    .filter((m) => m.type === "base" && typeof m.w === "number" && typeof m.h === "number")
                    .map((m) => (
                      <div
                        key={`${m.id}-base`}
                        className="baseOverlay group absolute"
                        style={{ left: `${m.x}%`, top: `${m.y}%` }}
                      >
                        <div
                          className="relative -translate-x-1/2 -translate-y-1/2"
                          style={{
                            width: `${(m.w ?? 0) * baseScale}%`,
                            height: `${(m.h ?? 0) * baseScale}%`,
                          }}
                        >
                          <div
                            className="absolute inset-0 border border-[color:color-mix(in_oklab,var(--border-subtle)_55%,transparent)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-[2px]"
                            style={{
                              borderRadius: `${baseCorner}px`,
                              backgroundColor: baseTint,
                            }}
                          />
                          <div
                            className="pointer-events-none absolute inset-0 ring-1 ring-inset"
                            style={{
                              borderRadius: `${baseCorner}px`,
                              borderColor: hsl(tuning.base.hue, 55, 60, 0.12),
                            }}
                          />
                        </div>

                        <div className="pointer-events-none absolute left-1/2 top-0 z-20 w-56 -translate-x-1/2 -translate-y-[calc(100%+10px)] opacity-0 transition-opacity group-hover:opacity-100">
                          <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)] px-4 py-3 text-[color:var(--text-1)] shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
                            <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">BASE</div>
                            <div className="ashfall-display mt-1 text-base text-[color:var(--text-0)]">
                              {m.name}
                            </div>
                            {m.detail ? <div className="mt-2 text-sm text-[color:var(--text-1)]">{m.detail}</div> : null}
                          </div>
                          <div className="mx-auto mt-2 h-2 w-2 rotate-45 border-b border-r border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)]" />
                        </div>
                      </div>
                    ))}
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

              {/* Floating UI (not scaled) */}
              <div className="pointer-events-none absolute inset-0">
                {/* Title chip */}
                <div className="pointer-events-auto absolute left-4 top-4 sm:left-6 sm:top-6">
                  <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_68%,transparent)] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
                    <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">ZONE MAP</div>
                    <div className="ashfall-display mt-1 text-xl text-[color:var(--text-0)] sm:text-2xl">
                      {zone.name}
                    </div>
                    <div className="mt-1 text-xs text-[color:var(--text-2)]">
                      Hover/tap markers • Toggle layers • Tune visuals
                    </div>
                  </div>
                </div>

                {/* Raid boss callout */}
                {activeRaidBoss ? (
                  <div className="pointer-events-auto absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                    <div className="rounded-2xl border border-[color:color-mix(in_oklab,rgba(239,68,68,1)_38%,var(--border-subtle))] bg-[color:color-mix(in_oklab,var(--bg-0)_72%,transparent)] px-4 py-4 shadow-[0_22px_50px_rgba(0,0,0,0.55)] backdrop-blur-md">
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
                          <div className="ashfall-display mt-2 max-w-[320px] text-balance text-2xl text-[color:var(--text-0)]">
                            {activeRaidBoss.name}
                          </div>
                          <div className="mt-2 text-sm text-[color:var(--text-1)]">
                            A raid-scale target is live right now. Expect third parties.
                          </div>
                        </div>
                        <span className="rounded-full border border-[color:color-mix(in_oklab,rgba(239,68,68,1)_40%,var(--border-subtle))] bg-[color:rgba(239,68,68,0.12)] px-3 py-1 text-[10px] tracking-[0.22em] text-[color:var(--text-1)]">
                          HOT
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Layers panel */}
                <div className="pointer-events-auto absolute right-4 top-4 w-[320px] sm:right-6 sm:top-6">
                  <div className="flex max-h-[80vh] flex-col overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_66%,transparent)] px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">LAYERS</div>
                        <div className="mt-1 text-sm text-[color:var(--text-1)]">
                          Show/hide overlay types.
                        </div>
                      </div>
                      <button
                        type="button"
                        className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_40%,transparent)] px-3 py-1 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                        onClick={() => setOptionsOpen((v) => !v)}
                      >
                        {optionsOpen ? "CLOSE" : "OPTIONS"}
                      </button>
                    </div>

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
                </div>
              </div>
            </div>

            {/* Mobile helper */}
            <div className="mx-auto max-w-[1320px] px-4 py-6 sm:hidden">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">TIP</div>
              <div className="mt-2 text-sm text-[color:var(--text-1)]">
                Open <span className="font-semibold">OPTIONS</span> to tune size, radius, and color.
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .raidPulse {
            border: 2px solid rgba(239, 68, 68, 0.55);
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35) inset;
            animation: ashfallPulseScale 1.6s ease-in-out infinite;
            opacity: 0.95;
          }
          @keyframes ashfallPulseScale {
            0% {
              transform: scale(0.72);
              opacity: 0.85;
            }
            60% {
              transform: scale(1);
              opacity: 0.2;
            }
            100% {
              transform: scale(1.06);
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
  outerEnabled: boolean;
  showNodeRadius?: boolean;
  onChange: (
    next: Partial<NodeLayerTuning> & Partial<Pick<ZoneLayerTuning, "zoneRadius">>,
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
            min={0.25}
            max={8}
            step={0.05}
            display={`${Math.round((props.zoneRadius ?? 1) * 100)}%`}
            onChange={(v) => props.onChange({ zoneRadius: v })}
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
  const isBoss = m.type === "raidBoss";

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
              {m.type === "harvest" ? "NODE" : m.type === "event" ? "SPAWN" : "ACTIVE"}
            </span>
          </div>
          {m.detail ? <div className="mt-2 text-sm text-[color:var(--text-1)]">{m.detail}</div> : null}
        </div>
        <div className="mx-auto mt-2 h-2 w-2 rotate-45 border-b border-r border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)]" />
      </div>
    </div>
  );
}


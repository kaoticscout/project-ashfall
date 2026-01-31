import Link from "next/link";
import Image from "next/image";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { getZoneMap } from "@/lib/zoneMaps";

export default function MapPage() {
  const zone = getZoneMap("bc07_zangarmarsh");
  const activeRaidBoss = zone.markers.find(
    (m) => m.type === "raidBoss" && m.status === "active",
  );
  const AREA_SCALE = 5; // cinematic readability: make event/boss zones huge

  return (
    <div>
      <section className="relative overflow-hidden pb-8 pt-10 sm:pb-10 sm:pt-14">
        <div className="absolute inset-0">
          <div className="ashfall-bg-noise absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_86%,transparent)] to-[color:var(--bg-0)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                WORLD
              </div>
              <h1 className="ashfall-display mt-3 text-balance text-4xl text-[color:var(--text-0)] sm:text-5xl">
                Interactive Map
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
                Visualize harvesting nodes and event spawns. Toggle layers, inspect hotspots, and
                share views (URL state coming next).
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
              >
                ← Back
              </Link>
              <Link
                href="/seasons"
                className="ashfall-button-primary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-0)]"
              >
                See seasons
              </Link>
            </div>
          </div>

          <OrnamentDivider className="mt-10 opacity-70" />
        </div>
      </section>

      <section className="pb-16">
        <div className="mapShell relative">
          {/* Full-bleed map section */}
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
            <div className="relative overflow-hidden border-y border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
              <div
                className="relative h-[72vh] min-h-[520px] w-full sm:h-[78vh] lg:h-[82vh]"
                style={{ aspectRatio: `${zone.aspect[0]} / ${zone.aspect[1]}` }}
              >
                <Image
                  alt={`${zone.name} map`}
                  src={zone.imageSrc}
                  fill
                  priority
                  sizes="100vw"
                  className="select-none object-cover opacity-[0.92]"
                />

                {/* Readability / cinematic overlays */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_520px_at_18%_20%,color-mix(in_oklab,var(--accent-gold)_14%,transparent),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_520px_at_85%_25%,color-mix(in_oklab,var(--accent-arcane)_14%,transparent),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--bg-0)_12%,transparent)] via-transparent to-[color:color-mix(in_oklab,var(--bg-0)_62%,transparent)]" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color:color-mix(in_oklab,var(--accent-gold)_12%,transparent)]" />

                {/* Overlays: event/raid areas (sized relative to map) */}
                <div className="absolute inset-0">
                  {zone.markers
                    .filter((m) => typeof m.areaRadius === "number")
                    .map((m) => (
                      <div
                        key={`${m.id}-area`}
                        className="mapOverlay pointer-events-none absolute"
                        data-type={m.type}
                        style={{ left: `${m.x}%`, top: `${m.y}%` }}
                        aria-hidden="true"
                      >
                        <div
                          className={[
                            "relative -translate-x-1/2 -translate-y-1/2 rounded-full",
                            m.type === "event"
                              ? "border-2 border-[color:color-mix(in_oklab,var(--accent-gold)_46%,transparent)] bg-[color:color-mix(in_oklab,var(--accent-gold)_14%,transparent)] shadow-[0_0_60px_rgba(212,175,55,0.14)]"
                              : m.type === "raidBoss"
                                ? "border-[3px] border-[color:color-mix(in_oklab,rgba(239,68,68,1)_72%,transparent)] bg-[color:rgba(239,68,68,0.12)] shadow-[0_0_90px_rgba(239,68,68,0.18)]"
                                : "",
                          ].join(" ")}
                          style={{
                            width: `${(m.areaRadius ?? 0) * 2 * AREA_SCALE}%`,
                            aspectRatio: "1 / 1",
                            boxShadow:
                              m.type === "raidBoss"
                                ? "0 0 0 1px rgba(0,0,0,0.35) inset"
                                : "0 0 0 1px rgba(0,0,0,0.25) inset",
                          }}
                        >
                          {m.type === "event" ? (
                            <div
                              className="absolute inset-0 rounded-full"
                              style={{
                                background:
                                  "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.16), rgba(212,175,55,0.00) 64%)",
                              }}
                            />
                          ) : null}

                          {m.type === "raidBoss" ? (
                            <>
                              <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                  background:
                                    "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.18), rgba(239,68,68,0.00) 64%)",
                                }}
                              />
                              {/* pulse ring (centered correctly) */}
                              <div className="raidPulse absolute inset-0 rounded-full" />
                            </>
                          ) : null}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Markers */}
                <div className="absolute inset-0">
                  {zone.markers.map((m) => (
                    <div
                      key={m.id}
                      className="marker group absolute"
                      data-type={m.type}
                      style={{ left: `${m.x}%`, top: `${m.y}%` }}
                    >

                      <button
                        type="button"
                        className={[
                          "grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_55%,transparent)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform hover:scale-105 focus-visible:scale-105 focus-visible:outline-none",
                          m.type === "harvest"
                            ? "h-4 w-4"
                            : m.type === "event"
                              ? "h-6 w-6"
                              : "h-9 w-9 border-[color:color-mix(in_oklab,rgba(239,68,68,1)_40%,var(--border-subtle))] bg-[color:color-mix(in_oklab,rgba(239,68,68,1)_16%,transparent)]",
                        ].join(" ")}
                        aria-label={`${m.type === "harvest" ? "Harvest node" : m.type === "event" ? "Event spawn" : "Raid boss"}: ${m.name}`}
                      >
                        <span
                          className={[
                            "block rounded-full",
                            m.type === "harvest"
                              ? "h-2 w-2 bg-emerald-300 shadow-[0_0_0_3px_rgba(16,185,129,0.16)]"
                              : m.type === "event"
                                ? "h-2.5 w-2.5 bg-[color:var(--accent-gold)] shadow-[0_0_0_4px_rgba(212,175,55,0.18)]"
                                : "h-3.5 w-3.5 bg-[color:rgba(239,68,68,1)] shadow-[0_0_0_6px_rgba(239,68,68,0.22)]",
                          ].join(" ")}
                        />
                      </button>

                      <div className="pointer-events-none absolute left-1/2 top-0 z-20 w-64 -translate-x-1/2 -translate-y-[calc(100%+10px)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                        <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)] px-4 py-3 text-[color:var(--text-1)] shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                                {m.type === "harvest"
                                  ? "HARVEST"
                                  : m.type === "event"
                                    ? "EVENT"
                                    : "RAID BOSS"}
                              </div>
                              <div className="ashfall-display mt-1 truncate text-base text-[color:var(--text-0)]">
                                {m.name}
                              </div>
                            </div>
                            <span
                              className={[
                                "shrink-0 rounded-full border px-3 py-1 text-[10px] tracking-[0.22em]",
                                m.type === "harvest"
                                  ? "border-[color:color-mix(in_oklab,rgba(16,185,129,0.35)_70%,var(--border-subtle))] bg-[color:rgba(16,185,129,0.10)] text-[color:var(--text-1)]"
                                  : m.type === "event"
                                    ? "border-[color:color-mix(in_oklab,var(--accent-gold)_28%,var(--border-subtle))] bg-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] text-[color:var(--text-1)]"
                                    : "border-[color:color-mix(in_oklab,rgba(239,68,68,1)_40%,var(--border-subtle))] bg-[color:rgba(239,68,68,0.12)] text-[color:var(--text-1)]",
                              ].join(" ")}
                            >
                              {m.type === "harvest" ? "NODE" : m.type === "event" ? "SPAWN" : "ACTIVE"}
                            </span>
                          </div>

                          {m.detail ? (
                            <div className="mt-2 text-sm text-[color:var(--text-1)]">{m.detail}</div>
                          ) : null}
                        </div>
                        <div className="mx-auto mt-2 h-2 w-2 rotate-45 border-b border-r border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)]" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating UI */}
                <div className="pointer-events-none absolute inset-0">
                  {/* Title chip */}
                  <div className="pointer-events-auto absolute left-4 top-4 sm:left-6 sm:top-6">
                    <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_68%,transparent)] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
                      <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                        ZONE MAP
                      </div>
                      <div className="ashfall-display mt-1 text-xl text-[color:var(--text-0)] sm:text-2xl">
                        {zone.name}
                      </div>
                      <div className="mt-1 text-xs text-[color:var(--text-2)]">
                        Hover/tap markers • Toggle layers
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
                                  background: "rgba(239,68,68,1)",
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

                  {/* Layers */}
                  <div className="pointer-events-auto absolute right-4 top-4 w-[300px] sm:right-6 sm:top-6">
                    <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_66%,transparent)] px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                            LAYERS
                          </div>
                          <div className="mt-1 text-sm text-[color:var(--text-1)]">
                            Show/hide overlay types.
                          </div>
                        </div>
                        <span className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)]">
                          PROTOTYPE
                        </span>
                      </div>

                      <div className="mt-4 space-y-3 text-sm text-[color:var(--text-1)]">
                        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_40%,transparent)] px-3 py-2">
                          <span className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]" />
                            Harvest nodes
                          </span>
                          <input
                            id="layer-harvest"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 accent-emerald-400"
                          />
                        </label>

                        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_40%,transparent)] px-3 py-2">
                          <span className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent-gold)] shadow-[0_0_0_4px_rgba(212,175,55,0.18)]" />
                            Event spawns
                          </span>
                          <input
                            id="layer-events"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 accent-[color:var(--accent-gold)]"
                          />
                        </label>

                        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,rgba(239,68,68,1)_10%,transparent)] px-3 py-2">
                          <span className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[color:rgba(239,68,68,1)] shadow-[0_0_0_4px_rgba(239,68,68,0.18)]" />
                            Raid boss
                          </span>
                          <input
                            id="layer-raidboss"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 accent-[color:rgba(239,68,68,1)]"
                          />
                        </label>
                      </div>

                      <OrnamentDivider className="mt-4 opacity-70" />
                      <div className="mt-3 text-xs leading-relaxed text-[color:var(--text-2)]">
                        Placement is percent-based so we can iterate quickly while we define real
                        spawn rules.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile-only helper strip */}
              <div className="mx-auto max-w-[1320px] px-4 py-6 sm:hidden">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  TIP
                </div>
                <div className="mt-2 text-sm text-[color:var(--text-1)]">
                  Use the layer toggles in the top-right panel. Tap markers to see details.
                </div>
              </div>
            </div>
          </div>

          <style>{`
            .mapShell:has(#layer-harvest:not(:checked)) .marker[data-type="harvest"] {
              display: none;
            }
            .mapShell:has(#layer-events:not(:checked)) .marker[data-type="event"] {
              display: none;
            }
            .mapShell:has(#layer-raidboss:not(:checked)) .marker[data-type="raidBoss"] {
              display: none;
            }
            .mapShell:has(#layer-events:not(:checked)) .mapOverlay[data-type="event"] {
              display: none;
            }
            .mapShell:has(#layer-raidboss:not(:checked)) .mapOverlay[data-type="raidBoss"] {
              display: none;
            }
            .raidPulse {
              border: 2px solid rgba(239, 68, 68, 0.55);
              box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35) inset;
              animation: ashfallPulseScale 2.1s ease-in-out infinite;
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
    </div>
  );
}


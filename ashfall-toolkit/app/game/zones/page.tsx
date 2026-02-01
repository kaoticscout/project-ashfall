import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/site/Hero";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { withBasePath } from "@/lib/withBasePath";
import { ZONES } from "@/lib/zonesDossiers";

const zoneGradientById: Record<string, string> = {
  emberwastes:
    "from-[color:color-mix(in_oklab,var(--accent-ember)_14%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_84%,transparent)] to-[color:var(--bg-0)]",
  ironwood:
    "from-[color:color-mix(in_oklab,var(--accent-gold)_12%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_84%,transparent)] to-[color:var(--bg-0)]",
  silvershade:
    "from-[color:color-mix(in_oklab,var(--accent-arcane)_14%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_84%,transparent)] to-[color:var(--bg-0)]",
  voidreach:
    "from-[color:color-mix(in_oklab,var(--accent-arcane)_18%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_84%,transparent)] to-[color:var(--bg-0)]",
};

export default function ZonesPage() {
  return (
    <div>
      <Hero
        eyebrow="The game"
        title="Zones"
        subtitle="Zone dossiers: each biome has its own harvestables, rare loot, strongholds, events, and bosses—designed to create repeatable routes and unforgettable fights."
        background="world"
        showDivider={false}
      >
      </Hero>

      {/* Quick jumps / atlas */}
      <section className="relative overflow-hidden py-12 sm:py-8">
        <div className="absolute inset-0">
          <div className="ashfall-bg-noise absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_86%,transparent)] to-[color:var(--bg-0)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-4">

          <OrnamentDivider className="mt-10 opacity-70" />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {ZONES.map((z) => (
              <a
                key={z.id}
                href={`#${z.id}`}
                className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:var(--bg-2)] shadow-[0_16px_50px_rgba(0,0,0,0.38)] transition hover:border-[color:var(--border-accent)]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={withBasePath(z.backdropSrc)}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 330px, (min-width: 768px) 50vw, 100vw"
                    priority={false}
                    className="object-cover opacity-[0.70] transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-[0.88]"
                  />
                  <div className="ashfall-bg-noise absolute inset-0 opacity-60" />
                  <div className="absolute inset-0 bg-[radial-gradient(720px_280px_at_50%_0%,rgba(120,160,255,0.12),transparent_62%),linear-gradient(180deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.26)_70%,rgba(0,0,0,0.64)_100%)]" />
                </div>

                <div className="absolute inset-x-0 bottom-0">
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                  <div className="relative p-4 sm:p-5">
                    <div className="ashfall-display text-lg text-[color:var(--text-0)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] sm:text-xl">
                      {z.name}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <OrnamentDivider className="mt-12 opacity-70" />
        </div>
      </section>

      {/* Zone dossiers */}
      {ZONES.map((z, idx) => (
        <section
          key={z.id}
          id={z.id}
          className="scroll-mt-24 pb-12 pt-16 sm:pb-16 sm:pt-8"
        >
          <div className="relative">
            <div className="absolute inset-0">
              <Image
                src={withBasePath(z.backdropSrc)}
                alt=""
                fill
                sizes="100vw"
                priority={idx === 0}
                className="object-cover opacity-[0.28]"
              />
              <div className="ashfall-bg-noise absolute inset-0" />
              <div
                className={`absolute inset-0 bg-gradient-to-b ${
                  zoneGradientById[z.id] ??
                  "from-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_86%,transparent)] to-[color:var(--bg-0)]"
                }`}
              />
              <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_20%_18%,rgba(0,0,0,0.18),transparent_60%),radial-gradient(900px_420px_at_80%_22%,rgba(0,0,0,0.16),transparent_60%),linear-gradient(180deg,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.24)_380px,rgba(0,0,0,0.40)_100%)]" />
            </div>

            <div className="relative mx-auto max-w-[1320px] px-4 pt-6 sm:pt-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                    ZONE DOSSIER
                  </div>
                  <h2 className="ashfall-display mt-3 text-balance text-4xl text-[color:var(--text-0)] sm:text-5xl">
                    {z.name}
                  </h2>
                  <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
                    {z.hook}
                  </p>
                </div>

                <div className="shrink-0">
                  <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-6 py-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] via-transparent to-transparent" />
                    <div className="relative flex items-center gap-4">
                      <Image
                        src={withBasePath(z.artSrc)}
                        alt=""
                        width={84}
                        height={84}
                        className="opacity-90"
                        priority={false}
                      />
                      <div>
                        <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                          {z.tagline.toUpperCase()}
                        </div>
                        <div className="mt-2 text-sm text-[color:var(--text-1)]">
                          {z.tagline}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-12">
                <div className="ashfall-panel lg:col-span-5">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                      SIGNATURE
                    </div>
                    <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">
                      What makes it different
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <div className="space-y-2 text-sm text-[color:var(--text-1)]">
                      {z.signature.map((s) => (
                        <div key={s}>- {s}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="ashfall-panel lg:col-span-7">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                      WHAT HAPPENS HERE
                    </div>
                    <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">
                      Loot, fights, objectives
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_62%,transparent)] p-4">
                        <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                          HARVESTABLES
                        </div>
                        <div className="mt-3 space-y-2 text-sm text-[color:var(--text-1)]">
                          {z.harvestables.map((h) => (
                            <div key={h.name}>
                              <span className="font-semibold text-[color:var(--text-0)]">
                                {h.name}
                              </span>
                              <span className="text-[color:var(--text-1)]">
                                {" "}
                                — {h.notes}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_62%,transparent)] p-4">
                        <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                          RARE ITEMS
                        </div>
                        <div className="mt-3 space-y-2 text-sm text-[color:var(--text-1)]">
                          {z.rares.map((r) => (
                            <div key={r.name}>
                              <span className="font-semibold text-[color:var(--text-0)]">
                                {r.name}
                              </span>
                              <span className="text-[color:var(--text-1)]">
                                {" "}
                                — {r.notes}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_62%,transparent)] p-4">
                        <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                          STRONGHOLDS
                        </div>
                        <div className="mt-3 space-y-2 text-sm text-[color:var(--text-1)]">
                          {z.strongholds.map((p) => (
                            <div key={p.name}>
                              <span className="font-semibold text-[color:var(--text-0)]">
                                {p.name}
                              </span>
                              <span className="text-[color:var(--text-1)]">
                                {" "}
                                — {p.notes}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_62%,transparent)] p-4">
                        <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                          EVENTS & BOSSES
                        </div>
                        <div className="mt-3 space-y-3 text-sm text-[color:var(--text-1)]">
                          <div className="space-y-2">
                            {z.events.map((e) => (
                              <div key={e.name}>
                                <span className="font-semibold text-[color:var(--text-0)]">
                                  {e.name}
                                </span>
                                <span className="text-[color:var(--text-1)]">
                                  {" "}
                                  — {e.notes}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="h-px w-full bg-[color:color-mix(in_oklab,var(--border-subtle)_70%,transparent)]" />
                          <div className="space-y-2">
                            {z.bosses.map((b) => (
                              <div key={b.name}>
                                <span className="font-semibold text-[color:var(--text-0)]">
                                  {b.name}
                                </span>
                                <span className="text-[color:var(--text-1)]">
                                  {" "}
                                  — {b.notes}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-12">
                <div className="ashfall-panel lg:col-span-12">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                      ROUTES
                    </div>
                    <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">
                      Sample plans for squads
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <div className="grid gap-4">
                      {z.routes.map((r) => (
                        <div
                          key={r.name}
                          className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_62%,transparent)] p-5"
                        >
                          <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                            {r.name.toUpperCase()}
                          </div>
                          <div className="mt-3 space-y-2 text-base text-[color:var(--text-1)]">
                            {r.notes.map((n) => (
                              <div key={n}>- {n}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {idx === ZONES.length - 1 ? null : (
                <OrnamentDivider className="mt-12 opacity-70" />
              )}

              {idx === ZONES.length - 1 ? (
                <div className="mt-12 text-sm text-[color:var(--text-2)]">
                  Want these to be “real” (numbers, drop tables, POI layouts)? Next
                  we can lock a shared zone template and then refine each zone
                  with concrete mechanics.
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}


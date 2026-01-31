import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { SiegeSpotlight } from "@/components/site/SiegeSpotlight";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";

export default function Home() {
  return (
    <div>
      <Hero
        eyebrow="Ashfall"
        title="Survive. Ascend. Siege."
        subtitle="Hero-first survival with WoW-like ability combat, mounted speed, and a homestead that fuels raids—not chores."
        background="world"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/map"
            className="ashfall-button-primary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-0)]"
          >
            Explore the world
          </Link>
          <Link
            href="/classes"
            className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
          >
            Meet the classes
          </Link>
        </div>
      </Hero>

      <SiegeSpotlight />

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0">
          <div className="ashfall-bg-noise absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-gold)_14%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_84%,transparent)] to-[color:var(--bg-0)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                SEASONS
              </div>
              <h2 className="ashfall-display mt-3 text-balance text-4xl text-[color:var(--text-0)] sm:text-5xl">
                Win the week.
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
                Weekly arcs feed seasonal ranks, prestige, and cosmetics—without wipe-driven
                grind.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/seasons"
                className="ashfall-button-primary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-0)]"
              >
                See seasons
              </Link>
              <Link
                href="/map"
                className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
              >
                Find contested zones
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                LAST WEEK • ASH-03 • WEEK 12
              </div>
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                MVP • TOP SQUADS • TOP PLAYERS
              </div>
            </div>

            {/* MVP spotlight (no card chrome) */}
            <div className="relative mt-4 overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:color-mix(in_oklab,var(--accent-gold)_12%,transparent)] via-transparent to-[color:color-mix(in_oklab,var(--accent-arcane)_10%,transparent)]" />
              <div className="absolute inset-0 border border-[color:var(--border-subtle)]" />
              <div className="relative p-6 sm:p-8">
                {/* MVP */}
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] text-lg font-semibold text-[color:var(--text-0)]">
                        VK
                      </div>
                      <div>
                        <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                          PLAYER OF THE WEEK
                        </div>
                        <div className="ashfall-display mt-1 text-3xl text-[color:var(--text-0)] sm:text-4xl">
                          VoidKestrel
                        </div>
                      </div>
                      <span className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-4 py-2 text-xs tracking-[0.22em] text-[color:var(--text-1)]">
                        VOIDMANCER
                      </span>
                    </div>
                    <span className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--accent-gold)_14%,transparent)] px-4 py-2 text-xs tracking-[0.22em] text-[color:var(--text-1)]">
                      MVP
                    </span>
                  </div>

                  <div className="mt-4 text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
                    “Abyssal Convergence” won the finale choke — three squads forced into one
                    clean collapse.
                  </div>

                  <div className="mt-6 flex flex-wrap gap-8">
                    {[
                      { k: "KOs", v: "38" },
                      { k: "Bosses", v: "6" },
                      { k: "Extractions", v: "11" },
                    ].map((x) => (
                      <div key={x.k} className="min-w-[160px]">
                        <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                          {x.k}
                        </div>
                        <div className="ashfall-display mt-1 text-3xl text-[color:var(--text-0)]">
                          {x.v}
                        </div>
                        <div className="mt-2 h-px w-full bg-[color:var(--border-subtle)]" />
                      </div>
                    ))}
                  </div>
                </div>

                <OrnamentDivider className="mt-10 opacity-80" />

                {/* Top squads */}
                <div className="mt-8">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                        TOP SQUADS
                      </div>
                      <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                        Last week’s podium
                      </div>
                    </div>
                    <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                      TEAM SCORE
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-3">
                    {[
                      { r: "#1", t: "Cinder Crown", s: "12,480", note: "Finale extraction to close it." },
                      { r: "#2", t: "Ironwood Pact", s: "11,910", note: "Owned the rotation routes." },
                      { r: "#3", t: "Silvershade Six", s: "11,220", note: "Boss chain clears + clean pulls." },
                    ].map((x) => (
                      <div key={x.r} className="border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_35%,transparent)] px-5 py-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                              {x.r}
                            </span>
                            <span className="ashfall-display text-xl text-[color:var(--text-0)]">
                              {x.t}
                            </span>
                          </div>
                          <span className="ashfall-display text-xl text-[color:var(--text-0)]">
                            {x.s}
                          </span>
                        </div>
                        <div className="mt-2 text-sm text-[color:var(--text-1)]">
                          {x.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <OrnamentDivider className="mt-10 opacity-80" />

                {/* Top players */}
                <div className="mt-8">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                        TOP PLAYERS
                      </div>
                      <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                        The names everyone saw in chat
                      </div>
                    </div>
                    <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                      WEEK 12
                    </div>
                  </div>

                  <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { rank: "#1", name: "VoidKestrel", cls: "Voidmancer", line: "38 KOs • 6 bosses • 11 extractions" },
                      { rank: "#2", name: "AshRider", cls: "Hunter", line: "31 KOs • 9 extractions • 1 chase clip" },
                      { rank: "#3", name: "BannerFang", cls: "Warlord", line: "24 KOs • 14 assists • 3 rally flips" },
                      { rank: "#4", name: "StoneHalo", cls: "Mystic", line: "19 saves • 27 assists • 0 deaths finale" },
                      { rank: "#5", name: "GateWarden", cls: "Warden", line: "Held objective 9m • 2 clutch peels" },
                      { rank: "#6", name: "ForgeKite", cls: "Architect", line: "Prep king • 8 consumables • 5 repairs" },
                    ].map((p) => (
                      <div key={p.rank} className="border-b border-[color:var(--border-subtle)] pb-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                              {p.rank}
                            </span>
                            <span className="ashfall-display text-lg text-[color:var(--text-0)]">
                              {p.name}
                            </span>
                          </div>
                          <span className="text-[10px] tracking-[0.22em] text-[color:var(--text-2)]">
                            {p.cls.toUpperCase()}
                          </span>
                        </div>
                        <div className="mt-2 text-sm text-[color:var(--text-1)]">{p.line}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

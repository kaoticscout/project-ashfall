import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { ZoneCarousel } from "@/components/site/ZoneCarousel";

export default function GamePage() {
  return (
    <div>
      <Hero
        eyebrow="The game"
        title="How Ashfall plays"
        subtitle="A survival action RPG built for spotlight moments: loot runs, world bosses, sieges, and last-second defenses."
        background="world"
      >
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="ashfall-button-cta inline-flex items-center justify-center rounded-xl px-7 py-4 text-center text-sm font-extrabold tracking-[0.18em] opacity-60 cursor-not-allowed sm:px-8 sm:py-4 sm:text-base"
          >
            SIGNUP CLOSED
          </button>
          <Link
            href="/"
            className="ashfall-button-secondary rounded-md px-4 py-3 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
          >
            ← Home
          </Link>
        </div>
      </Hero>

      <section className="pt-10 pb-4">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="ashfall-panel">
            <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                THE GAME
              </div>
              <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                Explore these stubs
              </div>
            </div>
            <div className="relative px-5 py-5">
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    href: "/game/zones",
                    title: "Zones",
                    desc: "Biome identity, routes, POIs, and hotspots.",
                  },
                  {
                    href: "/game/siege-vehicles",
                    title: "Siege vehicles",
                    desc: "Craft, deploy, and counter siege units.",
                  },
                  {
                    href: "/game/events",
                    title: "Events",
                    desc: "Contested moments and weekly cadence.",
                  },
                  {
                    href: "/game/building-progression",
                    title: "Building progression",
                    desc: "Tier ladder, defenses, and upgrades.",
                  },
                ].map((x) => (
                  <Link
                    key={x.href}
                    href={x.href}
                    className="group rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] p-4 hover:border-[color:var(--border-accent)]"
                  >
                    <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                      {x.title.toUpperCase()}
                    </div>
                    <div className="mt-2 text-sm text-[color:var(--text-1)] group-hover:text-[color:var(--text-0)]">
                      {x.desc}
                    </div>
                    <div className="mt-4 text-sm text-[color:var(--accent-gold)] opacity-0 transition-opacity group-hover:opacity-100">
                      Open →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <OrnamentDivider className="mt-10 opacity-70" />
        </div>
      </section>

      <section className="pt-10 pb-4 ">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            GAME STYLE
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Hero Sieges - World of Warcraft Collides with Rust
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                k: "EXPLORATION & MOVEMENT (WoW-inspired)",
                v: "Mounted travel across a giant continent—routes, biomes, and “ride out” decisions.",
              },
              {
                k: "WORLD & DESTINATIONS (WoW-inspired)",
                v: "Distinct zones with dungeons, strongholds, boss arenas, and hotspots that pull squads together.",
              },
              {
                k: "BASE (Rust-inspired)",
                v: "Gather materials, upgrade workbenches, unlock tiers, and fortify a raid-worthy stronghold.",
              },
              {
                k: "COMBAT (V Rising–inspired)",
                v: "High-tempo action with a few key abilities—less rotation, more aim, timing, and spacing.",
              },
              {
                k: "HEROES (Heroes of the Storm–inspired)",
                v: "Strong identities and clear roles—each hero feels different to play and to fight against.",
              },
              {
                k: "WEEKLY RESET (Rust-inspired)",
                v: "A weekly cadence that ramps pressure into raid windows—then resets the board so every week has a fresh climax.",
              },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_35%,transparent)] px-5 py-4"
              >
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  {x.k}
                </div>
                <div className="mt-2 text-sm text-[color:var(--text-1)]">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            PRINCIPLES
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Built for moments. Protected from misery.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                k: "Hero-first gameplay",
                v: "The default activity is adventuring and combat—not spreadsheets and chores.",
              },
              {
                k: "Time-budget friendly",
                v: "Big progress in a few sessions/week. More hours = more options, not unstoppable power.",
              },
              {
                k: "Clarity under chaos",
                v: "Readable telegraphs, strong silhouettes, and fights that look good in clips.",
              },
              {
                k: "High stakes, not deletion",
                v: "Wins matter. Losses sting. Your identity isn’t erased every time you log off.",
              },
              {
                k: "Anti-grief guardrails",
                v: "Sieges are structured: objectives, counterplay, and rules that keep it fair.",
              },
              {
                k: "Risk creates stories",
                v: "Extraction, contested hotspots, and bosses pull players into the same moment.",
              },
            ].map((x) => (
              <div key={x.k} className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    {x.k}
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <div className="text-sm text-[color:var(--text-1)]">{x.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-10 sm:pb-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                CORE LOOP
              </div>
              <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
                Loot. Level. Siege. Become a legend.
              </h2>
              <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
                Pick an objective, ride out fast, win a fight, and extract with what
                you earned. Your base is where you bank loot and prep power—then you
                spend that power to take bigger risks.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    What you’re doing every session
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    High signal. No fluff.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <ol className="grid gap-3 text-sm text-[color:var(--text-1)]">
                    {[
                      "Choose a target (boss, hotspot, rival base).",
                      "Ride out. Fight fast. Make a play.",
                        "Loot and extract with what matters — or harvest materials.",
                        "Level up and gear your hero. Stock consumables.",
                      "Fortify your garrison… or launch a siege.",
                    ].map((x, i) => (
                      <li
                        key={x}
                        className="flex items-start gap-3 rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-4 py-3"
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_70%,transparent)] text-xs font-semibold text-[color:var(--text-0)]">
                          {i + 1}
                        </span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <OrnamentDivider className="mt-10 opacity-70" />
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0">
          <div className="ashfall-bg-noise absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-arcane)_12%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_86%,transparent)] to-[color:var(--bg-0)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            TARGETS
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Leave the walls. Pick a target. Extract with proof.
          </h2>
          <p className="mt-4 max-w-4xl text-pretty text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
            Your base is safety. Everything valuable is outside. The game is choosing the right
            target for your risk appetite—then surviving the run home.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    The run loop
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    Out and back. Every time.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <ol className="grid gap-3 text-sm text-[color:var(--text-1)]">
                    {[
                      "Bank what you can. Bring what you need.",
                      "Pick a target and ride out fast.",
                      "Win the fight (or disengage).",
                      "Grab the reward.",
                      "Extract before the third party arrives.",
                    ].map((x, i) => (
                      <li key={x} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_70%,transparent)] text-xs font-semibold text-[color:var(--text-0)]">
                          {i + 1}
                        </span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    k: "Rifts (dynamic events)",
                    v: "Timed spawns that pull squads into the same moment. Clear waves, close the tear, cash out—then fight the third party.",
                  },
                  {
                    k: "Dungeons",
                    v: "Short, repeatable runs with boss mechanics, build checks, and high-end crafting drops.",
                  },
                  {
                    k: "Strongholds",
                    v: "Fortified PvE outposts: choke points, traps, elites. Crack it clean or get stalled long enough to be contested.",
                  },
                  {
                    k: "Sieges (PvP raids)",
                    v: "Spend high-end resources to build siege weaponry and assault a rival base. Objective-based wins. Big stakes.",
                  },
                  {
                    k: "Contested hotspots",
                    v: "Elite POIs, roaming events, and resource choke points that reliably generate fights and stories.",
                  },
                ].map((x) => (
                  <div key={x.k} className="ashfall-panel">
                    <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                      <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                        {x.k}
                      </div>
                    </div>
                    <div className="relative px-5 py-5">
                      <div className="text-sm text-[color:var(--text-1)]">{x.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <OrnamentDivider className="mt-12 opacity-70" />

          <div className="mt-12 text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            HIGH VALUE TARGETS
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Band Together and Prove Your Strength
          </h2>
          <p className="mt-4 max-w-4xl text-pretty text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
            World Raid Bosses are weekly end-game targets: you rally with other players to take down a raid-scale monster.
            During the encounter it’s pure cooperation—no PvP—and every player earns their own rewards.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    Why they matter in the weekly arc
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    A mid/late-week focal point with shard-wide gravity.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <ul className="grid gap-3 text-sm text-[color:var(--text-1)]">
                    <li>
                      <span className="text-[color:var(--text-0)] font-semibold">Scheduled pressure</span>: predictable windows that create convergence.
                    </li>
                    <li>
                      <span className="text-[color:var(--text-0)] font-semibold">Mechanic checks</span>: telegraphs, role coordination, and execution.
                    </li>
                    <li>
                      <span className="text-[color:var(--text-0)] font-semibold">Loot injection</span>: high-end crafting components that fuel sieges and builds.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4">
                <div className="ashfall-panel">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                      Rules of engagement
                    </div>
                    <div className="mt-1 text-sm text-[color:var(--text-2)]">
                      Co-op clarity.
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <ul className="grid gap-3 text-sm text-[color:var(--text-1)]">
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Non‑PvP encounter</span>: you’re here to fight the boss together.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Personal loot</span>: every player gets their own drop.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Big telegraphs</span>: readable, cinematic mechanics.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="ashfall-panel">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                      The real test
                    </div>
                    <div className="mt-1 text-sm text-[color:var(--text-2)]">
                      Kill it… then get home.
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <div className="text-sm text-[color:var(--text-1)]">
                      The boss is co-op. The world isn’t. The win is extracting with the reward and turning it into power.
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0">
          <div className="ashfall-bg-noise absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_88%,transparent)] to-[color:var(--bg-0)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            LEVELING
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Pick a hero. Level up. Build your kit.
          </h2>
          <p className="mt-4 max-w-4xl text-pretty text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
            You choose a hero archetype to adventure with—your role, your strengths, your playstyle.
            Then you earn experience by taking targets, extracting, and winning high-stakes moments.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    How you earn XP
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    Adventure-first. Always tied to targets.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <div className="grid gap-3 text-sm text-[color:var(--text-1)] sm:grid-cols-2">
                    {[
                      "Rift clears and dynamic events",
                      "Dungeon and stronghold completions",
                      "World raid boss kills",
                      "Successful extractions",
                      "Winning sieges / repelling sieges",
                      "Objective holds in hotspots",
                    ].map((x) => (
                      <div
                        key={x}
                        className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-4 py-3"
                      >
                        {x}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-xs tracking-[0.22em] text-[color:var(--text-2)]">
                    Your power comes from doing the hard stuff—not hiding in safety.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    What leveling unlocks
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    More options. More identity.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <ul className="grid gap-3 text-sm text-[color:var(--text-1)]">
                    <li>Build-defining upgrades (talents/runes/augments).</li>
                    <li>Better gear and stronger consumables.</li>
                    <li>More tools for sieges: burst windows, survivability, mobility.</li>
                    <li>Clear hero identity: you bring a role to the squad.</li>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/classes"
                      className="ashfall-button-primary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-0)]"
                    >
                      Browse heroes
                    </Link>
                    <Link
                      href="/progression"
                      className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
                    >
                      See progression
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <OrnamentDivider className="my-12 opacity-70" />

          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            SIEGING
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
            What sieging is: spend power to start a war story.
          </h2>
          <p className="mt-4 max-w-4xl text-pretty text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
            Sieges are structured PvP raids on player strongholds. You don’t “randomly grief” a base—
            you commit high-end resources to build siege weaponry, declare an assault, and fight for an objective.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    How a siege works (step-by-step)
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    Scout → craft → declare → breach → extract.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <ol className="grid gap-3 text-sm text-[color:var(--text-1)]">
                    {[
                      "Scout a target base and learn its defenses and angles.",
                      "Earn high-end resources from bosses, dungeons, and contested objectives.",
                      "Craft a Siege Kit (declaration + siege modules).",
                      "Declare the siege (warm-up warning goes out).",
                      "Assault window: breach, fight, secure the objective.",
                      "Extract with the prize before the counter-push closes the door.",
                    ].map((x, i) => (
                      <li
                        key={x}
                        className="flex items-start gap-3 rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-4 py-3"
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_70%,transparent)] text-xs font-semibold text-[color:var(--text-0)]">
                          {i + 1}
                        </span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4">
                <div className="ashfall-panel">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                      Win conditions
                    </div>
                    <div className="mt-1 text-sm text-[color:var(--text-2)]">
                      Sting without deletion.
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <ul className="grid gap-3 text-sm text-[color:var(--text-1)]">
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Vault extraction</span>: steal capped value, not everything.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Relic capture</span>: grab and hold, then escape.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Limited sabotage</span>: disable key infrastructure for downtime.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="ashfall-panel">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                      Fair-play guardrails
                    </div>
                    <div className="mt-1 text-sm text-[color:var(--text-2)]">
                      High stakes, not misery.
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <ul className="grid gap-3 text-sm text-[color:var(--text-1)]">
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Warm-up warning</span> so defenders can respond.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Raid windows</span> to avoid 24/7 pressure.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Counterplay</span>: siege engines can be destroyed; charges can be disarmed.
                      </li>
                    </ul>
                    <div className="mt-4 text-xs tracking-[0.22em] text-[color:var(--text-2)]">
                      The goal is a planned heist with a fair fight—not offline deletion.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <OrnamentDivider className="my-12 opacity-70" />

          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            GARRISONING
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
            The counter to sieging: build a base worth breaking.
          </h2>
          <p className="mt-4 max-w-4xl text-pretty text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
            Garrisoning is the defensive game: your walls, turrets, and layout decisions are what
            let you bank loot with confidence. A good base doesn’t make you invincible—it buys time,
            forces bad angles, and creates the window for a heroic repel.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="grid gap-4">
                <div className="ashfall-panel">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                      What “defense” means in Ashfall
                    </div>
                    <div className="mt-1 text-sm text-[color:var(--text-2)]">
                      Time is a resource. You’re buying it.
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <div className="grid gap-3 text-sm text-[color:var(--text-1)] sm:grid-cols-2">
                      {[
                        "Walls and doors that control entry paths",
                        "Turrets that punish obvious approaches",
                        "Traps and alarms that create warning and chaos",
                        "Wards/detectors to spot infiltrators and sappers",
                        "Choke points and fallback rooms for layered defense",
                        "Vault placement that forces commitment to reach",
                      ].map((x) => (
                        <div
                          key={x}
                          className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-4 py-3"
                        >
                          {x}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-xs tracking-[0.22em] text-[color:var(--text-2)]">
                      The goal: delay the breach long enough for defenders to rally and swing the fight.
                    </div>
                  </div>
                </div>

                <div className="ashfall-panel">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                      Workbench progression (Rust-style)
                    </div>
                    <div className="mt-1 text-sm text-[color:var(--text-2)]">
                      Materials unlock tiers. Tiers unlock power.
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <div className="text-sm text-[color:var(--text-1)]">
                      Your stronghold isn’t just “more walls”—it’s a tech ladder. As you collect materials and complete
                      upgrades, your workbench tier rises and expands what you can craft: stronger building parts,
                      better defenses, smarter traps, and higher-end siege counterplay.
                    </div>
                    <ul className="mt-4 grid gap-3 text-sm text-[color:var(--text-1)]">
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Tier upgrades</span>: spend gathered + rare mats to unlock new recipes.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Craft gates</span>: the best turrets, walls, and wards require higher tiers.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Base power scaling</span>: progression turns your garrison into a real raid target.
                      </li>
                    </ul>
                    <div className="mt-4 text-xs tracking-[0.22em] text-[color:var(--text-2)]">
                      Gather → upgrade → craft → fortify → survive the raid window.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4">
                <div className="ashfall-panel">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                      Resource collection
                    </div>
                    <div className="mt-1 text-sm text-[color:var(--text-2)]">
                      How you get materials to build.
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <ul className="grid gap-3 text-sm text-[color:var(--text-1)]">
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Gathering</span>: mine ore, harvest timber, and pick up fibers on your runs.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Salvage</span>: break down spare gear and base parts into components.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Targets</span>: dungeons, strongholds, and bosses drop rare building mats.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Risk routes</span>: contested hotspots yield the best returns—but attract raids.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Trade</span>: swap surplus resources with other players to finish a build fast.
                      </li>
                    </ul>
                    <div className="mt-4 text-xs tracking-[0.22em] text-[color:var(--text-2)]">
                      Your base is made from what you survive bringing home.
                    </div>
                  </div>
                </div>

                <div className="ashfall-panel">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                      Creativity wins defenses
                    </div>
                    <div className="mt-1 text-sm text-[color:var(--text-2)]">
                      Your layout is a weapon.
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <ul className="grid gap-3 text-sm text-[color:var(--text-1)]">
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Angle denial</span>: force attackers into crossfire.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Layered rooms</span>: trade space slowly, not all at once.
                      </li>
                      <li>
                        <span className="text-[color:var(--text-0)] font-semibold">Bait vaults</span>: punish overcommit with traps and collapse routes.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="ashfall-panel">
                  <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                    <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                      The defensive win
                    </div>
                    <div className="mt-1 text-sm text-[color:var(--text-2)]">
                      Repel the siege.
                    </div>
                  </div>
                  <div className="relative px-5 py-5">
                    <ul className="grid gap-3 text-sm text-[color:var(--text-1)]">
                      <li>Spot the breach attempt early.</li>
                      <li>Focus siege engines and disarm charges.</li>
                      <li>Stabilize at a fallback line and counter-push.</li>
                    </ul>
                    <div className="mt-4 text-xs tracking-[0.22em] text-[color:var(--text-2)]">
                      A good garrison turns a raid into an attacker loss.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0">
          <div className="ashfall-bg-noise absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-gold)_12%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_86%,transparent)] to-[color:var(--bg-0)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            SEASONS & WEEKLY ARC
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Weekly chapters. Seasonal legacy.
          </h2>
          <p className="mt-4 max-w-4xl text-pretty text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
            Ashfall runs on a cadence: the week ramps pressure and creates a finale,
            while seasons track long-term prestige and cosmetics. The goal is fresh
            incentives—without turning the game into a wipe-driven job.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              {
                k: "Early week",
                v: "Scout routes, gear up, and establish a garrison.",
              },
              {
                k: "Mid week",
                v: "Hotspots converge. Bosses and rivalries escalate.",
              },
              {
                k: "Late week",
                v: "High-threat windows. Siege declarations. Finale moments.",
              },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_35%,transparent)] px-5 py-4"
              >
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  {x.k.toUpperCase()}
                </div>
                <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">
                  {x.v}
                </div>
              </div>
            ))}
          </div>

          <OrnamentDivider className="my-12 opacity-70" />

          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            SEASONAL TRIALS
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Build your legacy. Prove you’re the best.
          </h2>
          <p className="mt-4 max-w-4xl text-pretty text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
            Each season introduces a set of ranked challenges designed to surface the best-of-the-best.
            Climb by winning the hardest moments—sieges, world bosses, extractions, and contested objectives—
            then earn special, unique rewards that broadcast your rank everywhere you go.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    What trials measure
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    Offense. Defense. Execution. Under pressure.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <div className="grid gap-3 text-sm text-[color:var(--text-1)]">
                    {[
                      "Siege Trials: win assaults and hold defenses (offense + defense both matter).",
                      "Boss Trials: down world raid bosses during high-threat windows.",
                      "Extraction Trials: extract with high-value loot under pursuit.",
                      "Control Trials: hold objectives in contested zones.",
                      "Finale Trials: finish the week strong—late-week pressure counts.",
                    ].map((x) => (
                      <div
                        key={x}
                        className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-4 py-3"
                      >
                        {x}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    The promise
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    Competitive prestige without pay-to-win.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <div className="grid gap-3 text-sm text-[color:var(--text-1)]">
                    <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-4 py-3">
                      Trials reward consistency and standout moments—not 24/7 grind.
                    </div>
                    <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-4 py-3">
                      Rewards are cosmetic, prestige, and identity.
                    </div>
                    <div className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-4 py-3">
                      The week ends. Your legacy doesn’t.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0">
          <div className="ashfall-bg-noise absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-ember)_10%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_86%,transparent)] to-[color:var(--bg-0)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            COSMETIC LEGACY
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Your stuff, your style, your story. Make it your own.
          </h2>
          <p className="mt-4 max-w-4xl text-pretty text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
            Cosmetics are the long game. Every season you chase moments that turn into identity—permanent unlocks that
            don’t get wiped, don’t get power-crept, and don’t ask you to no-life the game. When the gates open and the
            raid window hits, your look tells a story: where you’ve been, what you’ve beaten, and who learned to fear you.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    Why cosmetics drive replayability
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    Power resets. Identity stacks.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <ul className="grid gap-3 text-sm text-[color:var(--text-1)]">
                    <li>
                      <span className="text-[color:var(--text-0)] font-semibold">Seasonal chase</span>: each season adds new sets, themes, and trophies.
                    </li>
                    <li>
                      <span className="text-[color:var(--text-0)] font-semibold">Skill-locked</span>: the rarest looks come from the hardest moments.
                    </li>
                    <li>
                      <span className="text-[color:var(--text-0)] font-semibold">Always relevant</span>: cosmetics don’t get invalidated by new gear tiers.
                    </li>
                    <li>
                      <span className="text-[color:var(--text-0)] font-semibold">Social signal</span>: you can read someone’s story at a glance.
                    </li>
                  </ul>
                  <div className="mt-4 text-xs tracking-[0.22em] text-[color:var(--text-2)]">
                    If it looks expensive, it should have a story.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    How you earn them
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    Build a legacy through real play.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <div className="grid gap-3 text-sm text-[color:var(--text-1)] sm:grid-cols-2">
                    {[
                      "Seasonal Trials ranks + milestones",
                      "World raid boss trophies + weekly clears",
                      "Siege offense/defense accomplishments",
                      "Extraction streaks and high-value turn-ins",
                      "Zone control and contested hotspot wins",
                      "Event chains and rare destination completions",
                    ].map((x) => (
                      <div
                        key={x}
                        className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-4 py-3"
                      >
                        {x}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-xs tracking-[0.22em] text-[color:var(--text-2)]">
                    Cosmetics are permanent. The proof is how you got them.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                k: "Base themes",
                v: "Walls, doors, lighting, banners, vault room skins, siege scars.",
              },
              {
                k: "Hero skins",
                v: "Armor sets + silhouette-safe variants per archetype and season.",
              },
              {
                k: "Turret & trap skins",
                v: "Defenses styled to match your base theme—still readable in combat.",
              },
              {
                k: "Siege kit skins",
                v: "Rams, breachers, charges, and modules with seasonal identity.",
              },
              {
                k: "Mount variations",
                v: "Mount skins, tack, trails, and prestige trims for parade moments.",
              },
              {
                k: "Ability VFX",
                v: "Clarity-safe spell effects, trails, auras, and finisher flourishes.",
              },
              {
                k: "Titles & banners",
                v: "Season tags, boss-slayer titles, siege honors, leaderboard trims.",
              },
              {
                k: "Emotes & victory poses",
                v: "Post-fight flexes and squad rituals that make clips iconic.",
              },
              {
                k: "Base trophies",
                v: "Boss heads, relic plinths, siege pennants—displayed in your stronghold.",
              },
            ].map((x) => (
              <div key={x.k} className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    {x.k}
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <div className="text-sm text-[color:var(--text-1)]">{x.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ZoneCarousel
        preface={{
          eyebrow: "THE MAP",
          title: "One continent. Many biomes. Endless destinations.",
          description:
            "Ashfall takes place on a single massive continent split into distinct biomes—each with its own weather, routes, threats, and must-know destinations. Every zone is built around places worth riding toward: strongholds, dungeons, boss lairs, extraction paths, and siege-worthy choke points.",
          bullets: [
            "Biome identity: unique hazards, visibility, and traversal.",
            "Landmarks: memorable POIs that become fight magnets.",
            "Destinations: dungeons, strongholds, and world-boss arenas.",
            "Routes: safe paths, fast paths, and risky paths.",
            "Resource pockets: materials you can build a base from.",
            "Choke points: places where sieges and ambushes make sense.",
          ],
        }}
      />
    </div>
  );
}


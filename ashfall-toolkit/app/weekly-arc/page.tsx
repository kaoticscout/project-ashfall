import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { LandingFeatureSection } from "@/components/site/LandingFeatureSection";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";

type ArcPhase = {
  days: string;
  label: string;
  focus: string;
  highlights: string[];
  pressure: string[];
  rewards: string[];
  accent: "gold" | "ember" | "arcane";
};

type SeasonalVariant = {
  title: string;
  summary: string;
  examples: string[];
  accent: "gold" | "ember" | "arcane";
};

type MissionGroup = {
  title: string;
  items: string[];
};

const phases: ArcPhase[] = [
  {
    days: "Day 1–2",
    label: "Scouting & First Clears",
    focus:
      "Establish momentum: routes, early gear, and a stable camp that supports risk runs (not chores).",
    highlights: [
      "Fast exploration via mounts; learn chokepoints and extraction lanes",
      "Clear Tier 1–2 camps and secure first “build-defining” upgrades",
      "Early rivalries: skirmishes over routes and high-value nodes",
    ],
    pressure: [
      "Low base pressure; high freedom to explore",
      "Early contested POIs create the first clip-worthy collisions",
    ],
    rewards: [
      "Starter gear + materials",
      "First crafting stations and consumables",
      "Map knowledge and route advantage",
    ],
    accent: "gold",
  },
  {
    days: "Day 3–4",
    label: "Escalation & Rivalry",
    focus:
      "The world starts pushing players together: stronger camps, more contested objectives, and meaningful PvP stakes.",
    highlights: [
      "Contested Tier 2+ camps become reliable PvP hotspots",
      "Siege prep begins: teams chase high-end resources and blueprint paths",
      "Dungeon-like objectives and elite targets create third-party moments",
    ],
    pressure: [
      "Example modifier: Blood Moon (PvE pressure increases, bases get tested)",
      "More frequent convergence events",
    ],
    rewards: ["Mid-tier crafting inputs", "Elite drops & catalysts", "Siege components (early)"],
    accent: "ember",
  },
  {
    days: "Day 5–6",
    label: "High Threat Windows",
    focus:
      "Peak danger. Risk runs pay out big, and fights get decisive. These days should generate the best war stories.",
    highlights: [
      "Roaming threats and dangerous events pull squads into the open",
      "Siege attempts and defenses become the main spectacle",
      "High-value bosses/POIs force commitments and create betrayals",
    ],
    pressure: [
      "Example modifier: Resource decay / scarcity pressure",
      "Example modifier: Storm shrink / map pressure that forces contact",
    ],
    rewards: ["High-end mats", "Pinnacle crafting catalysts", "Prestige objectives and score drivers"],
    accent: "arcane",
  },
  {
    days: "Day 7",
    label: "Finale Event",
    focus:
      "A culminating world event that provides narrative closure: clear stakes, clear winners, and memorable clips.",
    highlights: [
      "Final convergence: boss/event that rewards execution and coordination",
      "Last-stand defenses and desperate steals are the headline moments",
      "Score/rewards finalize the week’s “chapter”",
    ],
    pressure: [
      "Example modifier: Apocalypse / hard convergence + scoring push",
      "Clear UI/audio callouts so the spectacle is watchable",
    ],
    rewards: ["Finale payout", "Ranking/leaderboard progress", "Season XP (if enabled)"],
    accent: "gold",
  },
];

function accentClass(accent: ArcPhase["accent"]) {
  if (accent === "ember") return "from-[color:color-mix(in_oklab,var(--accent-ember)_18%,transparent)]";
  if (accent === "arcane") return "from-[color:color-mix(in_oklab,var(--accent-arcane)_18%,transparent)]";
  return "from-[color:color-mix(in_oklab,var(--accent-gold)_18%,transparent)]";
}

function variantAccentClass(accent: SeasonalVariant["accent"]) {
  if (accent === "ember") return "from-[color:color-mix(in_oklab,var(--accent-ember)_16%,transparent)]";
  if (accent === "arcane") return "from-[color:color-mix(in_oklab,var(--accent-arcane)_16%,transparent)]";
  return "from-[color:color-mix(in_oklab,var(--accent-gold)_16%,transparent)]";
}

const seasonalVariants: SeasonalVariant[] = [
  {
    title: "Theme + reward identity",
    summary: "A clear seasonal fantasy that shows up in cosmetics, UI flavor, and a few map beats (no power creep).",
    examples: ["Cinder War", "Moonlit Oaths", "Riftwake", "Ironroot Hunt"],
    accent: "gold",
  },
  {
    title: "Seasonal world modifiers (readable, lightweight)",
    summary: "A small set of knobs that rotate weekly or trigger on specific days of the arc to reshape incentives.",
    examples: ["Blood Moon weeks (PvE pressure, bases tested)", "Scarcity weeks (contest density)", "Stormfront weeks (hazard lanes/visibility)"],
    accent: "ember",
  },
  {
    title: "Signature “spotlight” events",
    summary: "1–3 season-defining events designed to reliably create convergence fights and watchable clips.",
    examples: ["Caravan War (escort/ambush)", "Relic Procession (capture/hold/extract)", "Gate Breach (timed unlock into elite arena)"],
    accent: "arcane",
  },
  {
    title: "Enemy/boss roster swaps",
    summary: "Swap the roster and add a single seasonal twist mechanic—same encounter roles, new stories.",
    examples: ["Boss variant phase (e.g., void-tide)", "Rotating camp champions", "Weekly rare spawns with capped rewards"],
    accent: "gold",
  },
  {
    title: "Scoring focus shifts",
    summary: "Change what’s rewarded (not raw power): defense weeks, siege weeks, explorer weeks, etc.",
    examples: ["Defense score multiplier", "Objective-based siege score", "Route mastery & extraction score"],
    accent: "ember",
  },
  {
    title: "Bounded tactical crafting",
    summary: "Introduce a few season consumables/modules that change tactics, with weekly caps to avoid grind dominance.",
    examples: ["Visibility flare", "Short anti-root window", "Temporary ward/disarm kit"],
    accent: "arcane",
  },
];

const weeklyMissions: MissionGroup[] = [
  {
    title: "Adventure / PvE",
    items: [
      "Clear 2 contested camps (Tier 2+)",
      "Defeat 1 elite boss in a contested zone",
      "Complete 1 stronghold run and extract with a relic component",
    ],
  },
  {
    title: "Risk & extraction",
    items: [
      "Complete 1 “risk run”: extract with a high-end resource bundle",
      "Recover a tombstone under pressure (clutch recovery credit)",
    ],
  },
  {
    title: "Events (convergence moments)",
    items: [
      "Participate in 1 dynamic event and finish in a top contribution tier",
      "Win or successfully defend an escort/ambush event",
    ],
  },
  {
    title: "PvP / conflict (time-budget safe)",
    items: [
      "Win one contested objective fight OR escape while carrying valuable loot",
      "Score 3 “spotlight actions” (interrupts, clutch defensives, last-second saves)",
    ],
  },
  {
    title: "Siege-adjacent (guardrailed)",
    items: [
      "Craft one siege component (weekly bounded)",
      "Participate in one declared defense window (win or lose—objective play counts)",
    ],
  },
];

const seasonLongMissions: MissionGroup[] = [
  {
    title: "Milestones",
    items: ["Participate in 3 finale events", "Complete 10 elite objectives across the season"],
  },
  {
    title: "Mastery & variety",
    items: [
      "Reach a key build milestone on two archetypes/builds",
      "Extract successfully from each zone at least once (route mastery set)",
    ],
  },
  {
    title: "Faction story",
    items: [
      "Successfully defend your base during valid siege windows (X times)",
      "Pull off one successful heist objective (vault extraction / relic capture)",
    ],
  },
  {
    title: "Prestige (non-power)",
    items: [
      "Earn spotlight badges: Clutch Defender, Rift Runner, Caravan Breaker, Boss Slayer",
      "Complete a seasonal “war story” chain (finale + one siege + one elite boss)",
    ],
  },
];

export default function WeeklyArcPage() {
  return (
    <div>
      <Hero
        eyebrow="Cadence"
        title="Weekly Arc & Escalation Calendar"
        subtitle="A 7-day adventure chapter: predictable escalation, unpredictable stories. Designed for 3–4 hour sessions (3 days/week) while still rewarding mastery."
        background="world"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
          >
            ← Back
          </Link>
          <Link
            href="/map/"
            className="ashfall-button-primary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-0)]"
          >
            Explore maps
          </Link>
        </div>
      </Hero>

      <LandingFeatureSection
        eyebrow="Weekly arc"
        title="A chapter you can plan — without turning into chores."
        subtitle="Ashfall’s weekly cadence (if enabled) is framed as an adventure arc: early exploration, mid-week rivalry, late-week high-stakes windows, and a definitive finale. The schedule is predictable, but outcomes stay emergent."
        imageSrc="/assets/feature-seasons.svg"
        imageAlt="Weekly cadence preview"
      />

      <OrnamentDivider className="mx-auto max-w-[1320px] px-4 opacity-70" />

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">THE WEEK</div>
          <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
            The escalation calendar
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-[color:var(--text-1)] sm:text-base">
            Each phase is meant to create “spotlight moments” while respecting time budgets: high-stakes runs,
            readable fights, and objective-driven conflict (not 24/7 war).
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {phases.map((p) => (
              <div
                key={p.days}
                className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${accentClass(p.accent)} via-transparent to-transparent`} />
                <div className="relative border-b border-[color:var(--border-subtle)] px-6 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">{p.days.toUpperCase()}</div>
                      <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                        {p.label}
                      </div>
                      <div className="mt-2 text-sm text-[color:var(--text-1)]">{p.focus}</div>
                    </div>
                  </div>
                </div>

                <div className="relative grid gap-5 px-6 py-6 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                      HIGHLIGHTS
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-[color:var(--text-1)]">
                      {p.highlights.map((x) => (
                        <div key={x}>- {x}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                      PRESSURE
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-[color:var(--text-1)]">
                      {p.pressure.map((x) => (
                        <div key={x}>- {x}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                      REWARDS
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-[color:var(--text-1)]">
                      {p.rewards.map((x) => (
                        <div key={x}>- {x}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OrnamentDivider className="mx-auto max-w-[1320px] px-4 opacity-70" />

      <section className="pb-16 pt-10 sm:pt-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="ashfall-panel lg:col-span-7">
              <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">DESIGN GOALS</div>
                <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">What the arc must deliver</div>
              </div>
              <div className="relative px-5 py-5">
                <div className="space-y-3 text-sm text-[color:var(--text-1)]">
                  <div>- Predictable escalation, unpredictable outcomes.</div>
                  <div>- Clip-worthy moments from PvE, PvP, traversal, and sieges.</div>
                  <div>- Guardrails against grind dominance and 24/7 pressure.</div>
                  <div>- Readable “what’s happening” callouts for viewers and players.</div>
                  <div>- A finale that provides narrative closure each week.</div>
                </div>
              </div>
            </div>

            <div className="ashfall-panel lg:col-span-5">
              <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">EXAMPLE MODIFIERS</div>
                <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">Escalation knobs</div>
              </div>
              <div className="relative px-5 py-5">
                <div className="grid gap-3 text-sm text-[color:var(--text-1)]">
                  <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] p-4">
                    <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">DAY 3</div>
                    <div className="mt-2 font-semibold text-[color:var(--text-0)]">Blood Moon</div>
                    <div className="mt-1 text-[color:var(--text-1)]">PvE pressure rises; bases get tested.</div>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] p-4">
                    <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">DAY 5</div>
                    <div className="mt-2 font-semibold text-[color:var(--text-0)]">Resource Decay</div>
                    <div className="mt-1 text-[color:var(--text-1)]">Scarcity nudges conflict and risky rotations.</div>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] p-4">
                    <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">DAY 6</div>
                    <div className="mt-2 font-semibold text-[color:var(--text-0)]">Storm Shrink</div>
                    <div className="mt-1 text-[color:var(--text-1)]">Map pressure forces contact and decisions.</div>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] p-4">
                    <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">DAY 7</div>
                    <div className="mt-2 font-semibold text-[color:var(--text-0)]">Apocalypse Finale</div>
                    <div className="mt-1 text-[color:var(--text-1)]">Hard convergence + scoring push + closure.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrnamentDivider className="mx-auto max-w-[1320px] px-4 opacity-70" />

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">SEASONS</div>
          <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Seasonal variants (quarterly overlays)
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-[color:var(--text-1)] sm:text-base">
            Seasons should reshape incentives and spotlight moments—without adding grind dominance or power creep.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {seasonalVariants.map((v) => (
              <div
                key={v.title}
                className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${variantAccentClass(v.accent)} via-transparent to-transparent`} />
                <div className="relative border-b border-[color:var(--border-subtle)] px-6 py-5">
                  <div className="ashfall-display text-xl text-[color:var(--text-0)]">{v.title}</div>
                  <div className="mt-2 text-sm text-[color:var(--text-1)]">{v.summary}</div>
                </div>
                <div className="relative px-6 py-6">
                  <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                    EXAMPLES
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-[color:var(--text-1)]">
                    {v.examples.map((x) => (
                      <div key={x}>- {x}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/seasons"
              className="ashfall-button-primary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-0)]"
            >
              View seasons page
            </Link>
          </div>
        </div>
      </section>

      <OrnamentDivider className="mx-auto max-w-[1320px] px-4 opacity-70" />

      <section className="pb-16 pt-10 sm:pt-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">MISSIONS</div>
          <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Mission examples (what “a good week” looks like)
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-[color:var(--text-1)] sm:text-base">
            Missions are designed to be spotlight-moment shaped: quality beats, not chores.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="ashfall-panel">
              <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">WEEKLY</div>
                <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">
                  Weekly missions (refresh each week)
                </div>
                <div className="mt-1 text-sm text-[color:var(--text-2)]">
                  Built for ~3 sessions/week.
                </div>
              </div>
              <div className="relative px-5 py-5">
                <div className="grid gap-4">
                  {weeklyMissions.map((g) => (
                    <div
                      key={g.title}
                      className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] p-4"
                    >
                      <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                        {g.title.toUpperCase()}
                      </div>
                      <div className="mt-3 space-y-2 text-sm text-[color:var(--text-1)]">
                        {g.items.map((x) => (
                          <div key={x}>- {x}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="ashfall-panel">
              <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">SEASON</div>
                <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">
                  Season-long missions (quarter goals)
                </div>
                <div className="mt-1 text-sm text-[color:var(--text-2)]">
                  Multi-week milestones and prestige.
                </div>
              </div>
              <div className="relative px-5 py-5">
                <div className="grid gap-4">
                  {seasonLongMissions.map((g) => (
                    <div
                      key={g.title}
                      className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] p-4"
                    >
                      <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                        {g.title.toUpperCase()}
                      </div>
                      <div className="mt-3 space-y-2 text-sm text-[color:var(--text-1)]">
                        {g.items.map((x) => (
                          <div key={x}>- {x}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


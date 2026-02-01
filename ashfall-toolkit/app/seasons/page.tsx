import { Hero } from "@/components/site/Hero";
import Link from "next/link";
import { LandingFeatureSection } from "@/components/site/LandingFeatureSection";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { withBasePath } from "@/lib/withBasePath";

export default function SeasonsPage() {
  return (
    <div>
      <Hero
        eyebrow="Quarterly"
        title="Seasons & Battle Pass"
        subtitle="Visualize the quarterly season: objectives, battle-pass progression, rank ladder, and cosmetic rewards."
        background="world"
      />

      <LandingFeatureSection
        eyebrow="Season"
        title="Quarterly objectives. Weekly events. Permanent prestige."
        subtitle="Each quarter brings Seasonal Trials, a battle-pass track, and objectives that keep each week meaningful—without pay-to-win power. This page visualizes rewards, ranks, and long-term legacy."
        imageSrc="/assets/feature-seasons.svg"
        imageAlt="Seasons preview"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
          >
            ← Back
          </Link>
        </div>
      </LandingFeatureSection>

      {/* Battle Pass */}
      <section className="pb-10 sm:pb-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            BATTLE PASS
          </div>
          <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Progress through the quarter
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-[color:var(--text-1)] sm:text-base">
            Big beats, not chores. Progress comes from spotlight moments, week-arc milestones,
            and objectives—rewards stay cosmetic and readability-safe.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
              style={{
                backgroundImage: `url("${withBasePath("/assets/feature-seasons.svg")}")`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:color-mix(in_oklab,var(--bg-0)_35%,transparent)] to-[color:var(--bg-0)]" />

            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="text-xs tracking-[0.28em] text-[color:var(--text-2)]">
                    CURRENT TRACK (PLACEHOLDER)
                  </div>
                  <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">
                    “Ashfall: Quarter One”
                  </div>
                  <div className="mt-2 text-sm text-[color:var(--text-1)]">
                    20 tiers • Free + Premium lanes (optional) • No power rewards
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="ashfall-button-primary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-0)]"
                  >
                    View tiers
                  </a>
                  <a
                    href="#"
                    className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
                  >
                    View rewards
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <div className="relative h-3 rounded-full bg-[color:color-mix(in_oklab,var(--bg-2)_85%,transparent)]">
                  <div className="absolute left-0 top-0 h-3 w-[42%] rounded-full bg-[color:color-mix(in_oklab,var(--accent-gold)_55%,transparent)]" />
                  <div className="absolute left-[42%] top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-[color:var(--accent-gold)] shadow-[var(--glow-gold)]" />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      t: "Tier 5",
                      r: "Defense skin: “Ashsteel Plates”",
                      lane: "FREE",
                    },
                    {
                      t: "Tier 10",
                      r: "Armor set: “Cinderbound” (cosmetic)",
                      lane: "PREMIUM",
                    },
                    {
                      t: "Tier 20",
                      r: "Mount skin: “Voidlight Surger” (placeholder)",
                      lane: "PREMIUM",
                    },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="relative overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] p-5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] via-transparent to-transparent" />
                      <div className="relative">
                        <div className="text-xs tracking-[0.28em] text-[color:var(--text-2)]">
                          {x.lane}
                        </div>
                        <div className="ashfall-display mt-2 text-lg text-[color:var(--text-0)]">
                          {x.t}
                        </div>
                        <div className="mt-2 text-sm text-[color:var(--text-1)]">
                          {x.r}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrnamentDivider className="mx-auto max-w-[1320px] px-4 opacity-70" />

      {/* Rank Ladder */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="grid items-start gap-10 lg:grid-cols-[520px_1fr]">
            <div>
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                RANKS
              </div>
              <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
                Earn your seasonal legacy
              </h2>
              <p className="mt-3 text-sm text-[color:var(--text-1)] sm:text-base">
                Seasonal rank reflects mastery and consistency across objectives—elite clears,
                contested events, survival, and PvP (if enabled).
              </p>

              <div className="mt-8 space-y-2">
                {["Bronze", "Iron", "Silver", "Gold", "Mythic", "Legend"].map(
                  (tier, idx) => (
                    <div
                      key={tier}
                      className={`relative overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] px-5 py-4 ${
                        idx === 3 ? "border-[color:var(--border-accent)]" : ""
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] to-transparent opacity-70" />
                      <div className="relative flex items-center justify-between">
                        <div className="ashfall-display text-lg text-[color:var(--text-0)]">
                          {tier}
                        </div>
                        <div className="text-xs tracking-[0.28em] text-[color:var(--text-2)]">
                          REWARD BUNDLE
                        </div>
                      </div>
                      {idx === 3 ? (
                        <div className="relative mt-2 text-sm text-[color:var(--text-1)]">
                          You are here (mock): Gold II
                        </div>
                      ) : null}
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)] p-6 sm:p-8">
              <div className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[color:color-mix(in_oklab,var(--accent-gold)_16%,transparent)] blur-3xl" />
              <div className="relative">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  GOLD (EXAMPLE)
                </div>
                <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                  Gold Reward Set
                </div>
                <p className="mt-3 text-sm text-[color:var(--text-1)] sm:text-base">
                  A curated cosmetic bundle that reads as prestige without affecting power.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Base banner + lighting theme",
                    "Defense tower skin set",
                    "Armor cosmetic (readability-safe)",
                    "Mount skin variant",
                  ].map((x) => (
                    <div
                      key={x}
                      className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_70%,transparent)] p-4 text-sm text-[color:var(--text-1)]"
                    >
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrnamentDivider className="mx-auto max-w-[1320px] px-4 opacity-70" />

      {/* Objectives */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            OBJECTIVES
          </div>
          <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Motivation every week
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)] p-6 sm:p-8">
              <div className="absolute -top-24 left-[-15%] h-[420px] w-[420px] rounded-full bg-[color:color-mix(in_oklab,var(--accent-arcane)_16%,transparent)] blur-3xl" />
              <div className="relative">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  WEEKLY (REFRESHES EACH WEEK)
                </div>
                <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                  Weekly Objectives
                </div>
                <div className="mt-4 space-y-3 text-sm text-[color:var(--text-1)]">
                  <div>Clear 2 contested camps (Tier 2+)</div>
                  <div>Win 1 contested event fight (or escape with loot)</div>
                  <div>Defeat 1 elite boss or rare spawn</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)] p-6 sm:p-8">
              <div className="absolute -top-24 right-[-15%] h-[420px] w-[420px] rounded-full bg-[color:color-mix(in_oklab,var(--accent-ember)_14%,transparent)] blur-3xl" />
              <div className="relative">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  SEASON (SPANS THE QUARTER)
                </div>
                <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                  Quarter Objectives
                </div>
                <div className="mt-4 space-y-3 text-sm text-[color:var(--text-1)]">
                  <div>Participate in 3 finale events</div>
                  <div>Reach a key level milestone on 2 classes/builds</div>
                  <div>Complete 10 elite objectives (bosses/POIs/events)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reward Gallery */}
      <section className="pb-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            COSMETICS
          </div>
          <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Season reward catalog
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-[color:var(--text-1)] sm:text-base">
            Base skins, hero skins, turret skins, siege unit skins, mount variations, hero effects, and prestige identity.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)] p-6 lg:col-span-7">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] via-transparent to-transparent" />
              <div className="relative">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  BASE + DEFENSE
                </div>
                <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                  Fortress expression
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Walls & doors cosmetics",
                    "Turret skins + muzzle flashes (safe)",
                    "Trap skins + placement decals",
                    "Banners, lighting, props",
                    "Siege unit skins (rams/casters/charges)",
                  ].map((x) => (
                    <div
                      key={x}
                      className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_70%,transparent)] p-4 text-sm text-[color:var(--text-1)]"
                    >
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)] p-6 lg:col-span-5">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:color-mix(in_oklab,var(--accent-arcane)_10%,transparent)] via-transparent to-transparent" />
              <div className="relative">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  ARMOR + EFFECTS
                </div>
                <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                  Hero identity
                </div>
                <div className="mt-4 space-y-3 text-sm text-[color:var(--text-1)]">
                  <div>Armor skins + silhouettes that stay readable</div>
                  <div>Ability VFX variants (clarity-safe)</div>
                  <div>Kill effects + trails (subtle)</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)] p-6 lg:col-span-5">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:color-mix(in_oklab,var(--accent-ember)_10%,transparent)] via-transparent to-transparent" />
              <div className="relative">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  MOUNTS
                </div>
                <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                  Travel prestige
                </div>
                <div className="mt-4 space-y-3 text-sm text-[color:var(--text-1)]">
                  <div>Mount skins + tack cosmetics</div>
                  <div>Subtle particles (no gameplay advantage)</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)] p-6 lg:col-span-7">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:color-mix(in_oklab,var(--accent-gold)_8%,transparent)] via-transparent to-transparent" />
              <div className="relative">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  PRESTIGE
                </div>
                <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                  Titles, emotes, badges
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Titles", "Badges", "Emotes"].map((x) => (
                    <div
                      key={x}
                      className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_70%,transparent)] p-4 text-sm text-[color:var(--text-1)]"
                    >
                      {x}
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


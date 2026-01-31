import { Hero } from "@/components/site/Hero";
import Link from "next/link";
import { LandingFeatureSection } from "@/components/site/LandingFeatureSection";

export default function ProgressionPage() {
  return (
    <div>
      <Hero
        eyebrow="Progression"
        title="Character & Homestead Progression"
        subtitle="A progression overview for hero power and home support: levels, talents/runes, gear upgrades, crafting milestones, and optional homestead unlocks."
        background="world"
      />

      <LandingFeatureSection
        eyebrow="Progression"
        title="Paths to power — without grind dominance."
        subtitle="Ashfall’s primary power curve is hero progression (levels, buildcraft, and gear). The homestead progression is secondary: crafting stations, comfort buffs, and travel convenience that support adventuring."
        imageSrc="/assets/feature-progression.svg"
        imageAlt="Progression preview"
        reverse
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

      <section className="pb-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
            <div className="ashfall-panel">
              <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                  Progression Graph (tool placeholder)
                </div>
                <div className="mt-1 text-sm text-[color:var(--text-2)]">
                  React Flow canvas will render nodes + dependencies.
                </div>
              </div>
              <div className="relative px-5 py-5">
                <div className="relative h-[520px] w-full overflow-hidden rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
                  <div className="absolute inset-0 grid place-items-center text-sm text-[color:var(--text-2)]">
                    Graph renderer will live here.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    Filters
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    Toggle categories and tiers.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <div className="grid gap-2 text-sm text-[color:var(--text-1)]">
                    {[
                      "Talents / Runes",
                      "Gear Upgrades",
                      "Crafting Stations",
                      "Consumables (Food / Potions)",
                      "Homestead Upgrades",
                      "Travel Convenience",
                      "Objectives / Events",
                    ].map((label) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-lg border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-3 py-2"
                      >
                        <span>{label}</span>
                        <span className="text-xs text-[color:var(--text-2)]">
                          on/off
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="ashfall-panel">
                <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                  <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                    Node Inspector
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-2)]">
                    Select a node to view prerequisites, unlocks, and notes.
                  </div>
                </div>
                <div className="relative px-5 py-5">
                  <div className="text-sm text-[color:var(--text-2)]">
                    No node selected.
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


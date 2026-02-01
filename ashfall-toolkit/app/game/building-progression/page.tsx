import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { TIERS } from "@/lib/buildingProgression";
import { WorkshopTierSection } from "../../../components/site/WorkshopTierSection";

export default function BuildingProgressionPage() {
  return (
    <div>
      <Hero
        eyebrow="The game"
        title="Building progression"
        subtitle="Workshop tiers define what you can unlock. Unlocks cost materials (one-time), then building pieces cost materials per craft."
        background="world"
      >
      </Hero>

      <section className="pb-16 pt-10 sm:pt-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="ashfall-panel">
            <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                UPGRADING
              </div>
              <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                How workshop upgrades work
              </div>
              <div className="mt-2 text-sm text-[color:var(--text-1)]">
                A workshop upgrade is not just “press a button” — it’s a high-visibility
                base objective designed to create conflict. Each tier has a one-time
                upgrade recipe that uses high-end materials.
              </div>
            </div>
            <div className="relative px-5 py-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] p-4 text-sm text-[color:var(--text-1)]">
                  <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                    THE LOOP
                  </div>
                  <div className="mt-3 space-y-2">
                    <div>- Craft the tier’s Upgrade Kit at your current workshop</div>
                    <div>- Install at your base (broadcasts / creates a window)</div>
                    <div>- Defend until completion (attackers can interrupt)</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] p-4 text-sm text-[color:var(--text-1)]">
                  <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                    WHY HIGH-END MATS?
                  </div>
                  <div className="mt-3 space-y-2">
                    <div>- Upgrades should feel like milestones, not chores</div>
                    <div>- Rare mats ensure upgrades are paced by the world</div>
                    <div>- Visibility invites sieges, counterplay, and stories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ashfall-panel">
            <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                WORKSHOPS
              </div>
              <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                The tier ladder
              </div>
              <div className="mt-2 text-sm text-[color:var(--text-1)]">
                This page is intentionally one-column: scroll workshop-by-workshop,
                plan unlocks, then price your build.
              </div>
            </div>
            <div className="relative px-5 py-5">
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {TIERS.map((t) => (
                  <a
                    key={t.tier}
                    href={`#tier-${t.tier}`}
                    className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] px-4 py-3 hover:border-[color:var(--border-accent)]"
                  >
                    <div className="text-xs tracking-[0.28em] text-[color:var(--text-2)]">
                      WORKSHOP {t.tier}
                    </div>
                    <div className="ashfall-display mt-1 text-lg text-[color:var(--text-0)]">
                      {t.title.split("—")[1]?.trim() ?? t.title}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <OrnamentDivider className="mt-10 opacity-70" />

          <div className="mt-10 space-y-10">
            {TIERS.map((t) => (
              <WorkshopTierSection key={t.tier} tier={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


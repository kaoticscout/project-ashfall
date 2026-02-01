import { Hero } from "@/components/site/Hero";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { TIERS } from "@/lib/buildingProgression";
import { WorkshopTierSection } from "../../../components/site/WorkshopTierSection";
import buildingAtlas from "@/public/assets/Items/TextureAtlas.json";

function costKey(item: { item: string; qty: number }) {
  return `${item.qty}× ${item.item}`;
}

function rarityColorForTier(tier: number) {
  if (tier <= 1) return "#9CA3AF"; // Common
  if (tier === 2) return "#22C55E"; // Uncommon
  if (tier === 3) return "#3B82F6"; // Rare
  if (tier === 4) return "#C084FC"; // Epic
  return "#F97316"; // Legendary
}

function CostPills(props: { label: string; costs: { item: string; qty: number }[] }) {
  if (!props.costs.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[10px] font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
        {props.label.toUpperCase()}
      </span>
      <div className="flex flex-wrap gap-2">
        {props.costs.map((c) => (
          <span
            key={costKey(c)}
            className="inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-2)_65%,transparent)] px-3 py-1 text-xs font-semibold text-[color:var(--text-0)]"
          >
            <span className="text-[color:var(--text-2)]">{c.qty}×</span>
            <span>{c.item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

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

          <div className="ashfall-panel mt-6">
            <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                WORKSHOP PROGRESSION
              </div>
              <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                Upgrade recipes (one‑time)
              </div>
              <div className="mt-2 text-sm text-[color:var(--text-1)]">
                What it takes to upgrade each bench. Click a tier to jump to its full
                unlock list.
              </div>
            </div>
            <div className="relative px-5 py-5">
              <div className="grid gap-3 md:grid-cols-2">
                {TIERS.filter((t) => t.upgrade).map((t) => {
                  const color = rarityColorForTier(t.tier);
                  return (
                    <a
                      key={t.tier}
                      href={`#tier-${t.tier}`}
                      className="group rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] p-4 hover:border-[color:var(--border-accent)]"
                      style={{
                        boxShadow: `0 0 0 1px color-mix(in oklab, ${color} 45%, transparent)`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="text-xs tracking-[0.28em] text-[color:var(--text-2)]">
                            WORKSHOP {t.tier}
                          </div>
                          <div className="ashfall-display mt-1 text-lg text-[color:var(--text-0)]">
                            {t.title.split("—")[1]?.trim() ?? t.title}
                          </div>
                        </div>
                        <span
                          className="shrink-0 rounded-full border px-3 py-1 text-[10px] font-extrabold tracking-[0.22em]"
                          style={{
                            borderColor: `color-mix(in oklab, ${color} 70%, var(--border-subtle))`,
                            color: `color-mix(in oklab, ${color} 85%, var(--text-0))`,
                            backgroundColor: `color-mix(in oklab, ${color} 10%, transparent)`,
                          }}
                        >
                          ONE‑TIME
                        </span>
                      </div>

                      <div className="mt-3">
                        <CostPills label="Cost" costs={t.upgrade!.cost} />
                      </div>

                      <div className="mt-3 text-xs text-[color:var(--text-2)]">
                        <span className="font-semibold text-[color:var(--text-1)] group-hover:text-[color:var(--text-0)]">
                          Jump to tier
                        </span>{" "}
                        →
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <OrnamentDivider className="mt-10 opacity-70" />

          <div className="mt-10 space-y-10">
            {TIERS.map((t) => (
              <WorkshopTierSection
                key={t.tier}
                tier={t}
                atlas={buildingAtlas}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


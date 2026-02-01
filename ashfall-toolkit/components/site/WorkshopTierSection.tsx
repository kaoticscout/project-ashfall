"use client";

import { useMemo, useState } from "react";
import type { Unlock, UnlockCategory, WorkshopTier } from "@/lib/buildingProgression";
import { CATEGORY_ORDER } from "@/lib/buildingProgression";
import type { TextureAtlasMeta, TextureAtlasSprite } from "@/components/site/TextureAtlasIcon";
import { TextureAtlasIcon } from "@/components/site/TextureAtlasIcon";

type TextureAtlas = {
  meta: TextureAtlasMeta;
  sprites: TextureAtlasSprite[];
};

type CategoryBlock = {
  category: UnlockCategory;
  items: Unlock[];
};

function rarityFrameColorForTier(tier: number) {
  // MMO-style rarity palette:
  // 1: Common (gray), 2: Uncommon (green), 3: Rare (blue), 4: Epic (pinkish purple), 5+: Legendary (orange)
  if (tier <= 1) return "#9CA3AF";
  if (tier === 2) return "#22C55E";
  if (tier === 3) return "#3B82F6";
  if (tier === 4) return "#C084FC";
  return "#F97316";
}

function costKey(item: { item: string; qty: number }) {
  return `${item.qty}× ${item.item}`;
}

function groupByCategory(tier: WorkshopTier): CategoryBlock[] {
  const map = new Map<UnlockCategory, Unlock[]>();
  for (const u of tier.unlocks) {
    const arr = map.get(u.category) ?? [];
    arr.push(u);
    map.set(u.category, arr);
  }
  const ordered = CATEGORY_ORDER.filter((c) => map.has(c)).map((c) => ({
    category: c,
    items: map.get(c)!,
  }));
  // Any unexpected categories go last (shouldn't happen).
  for (const [cat, items] of map.entries()) {
    if (!CATEGORY_ORDER.includes(cat)) ordered.push({ category: cat, items });
  }
  return ordered;
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

export function WorkshopTierSection(props: {
  tier: WorkshopTier;
  atlas?: TextureAtlas;
  atlasImageSrc?: string;
}) {
  const blocks = useMemo(() => groupByCategory(props.tier), [props.tier]);
  const frameColor = useMemo(() => rarityFrameColorForTier(props.tier.tier), [props.tier.tier]);
  const spriteByName = useMemo(() => {
    const atlas = props.atlas;
    if (!atlas) return null;
    const map = new Map<string, TextureAtlasSprite>();
    for (const s of atlas.sprites) map.set(s.name, s);
    return map;
  }, [props.atlas]);

  const atlasImageSrc =
    props.atlasImageSrc ??
    (props.atlas?.meta.image ? `/assets/Items/${props.atlas.meta.image}` : undefined);

  const defaultOpen = useMemo(() => {
    const s = new Set<UnlockCategory>();
    for (const b of blocks) s.add(b.category);
    return s;
  }, [blocks]);

  const [open, setOpen] = useState<Set<UnlockCategory>>(defaultOpen);

  const setAll = (isOpen: boolean) => {
    setOpen(isOpen ? new Set(defaultOpen) : new Set());
  };

  const toggle = (cat: UnlockCategory) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  return (
    <section id={`tier-${props.tier.tier}`} className="scroll-mt-24">
      <div className="ashfall-panel">
        <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                WORKSHOP {props.tier.tier}
              </div>
              <div className="ashfall-display mt-2 text-3xl text-[color:var(--text-0)] sm:text-4xl">
                {props.tier.title}
              </div>
              <div className="mt-3 text-sm text-[color:var(--text-1)] sm:text-base">
                {props.tier.summary}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setAll(true)}
                className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_70%,transparent)] px-4 py-2 text-sm font-semibold text-[color:var(--text-0)] hover:border-[color:var(--border-accent)]"
              >
                Expand all
              </button>
              <button
                type="button"
                onClick={() => setAll(false)}
                className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_70%,transparent)] px-4 py-2 text-sm font-semibold text-[color:var(--text-0)] hover:border-[color:var(--border-accent)]"
              >
                Collapse all
              </button>
            </div>
          </div>
        </div>

        <div className="relative px-5 py-5">
          {props.tier.upgrade ? (
            <div className="mb-5 overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_75%,transparent)]">
              <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  WORKSHOP UPGRADE
                </div>
                <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">
                  {props.tier.upgrade.headline}
                </div>
                <div className="mt-2 text-sm text-[color:var(--text-1)]">
                  A tier upgrade is a high-visibility project. Expect conflict.
                </div>
              </div>
              <div className="px-5 py-5">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] p-4">
                    <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                      STEPS
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-[color:var(--text-1)]">
                      {props.tier.upgrade.steps.map((s) => (
                        <div key={s}>- {s}</div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] p-4">
                    <div className="text-xs font-extrabold tracking-[0.22em] text-[color:var(--text-2)]">
                      UPGRADE COST (ONE‑TIME)
                    </div>
                    <div className="mt-3">
                      <CostPills label="Cost" costs={props.tier.upgrade.cost} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div className="space-y-4">
            {blocks.map((b) => {
              const isOpen = open.has(b.category);
              const contentId = `tier-${props.tier.tier}-cat-${b.category.replace(/\s+/g, "-").toLowerCase()}`;
              return (
                <div
                  key={b.category}
                  className="overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)]"
                >
                  <button
                    type="button"
                    onClick={() => toggle(b.category)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full px-5 py-4 text-left hover:bg-[color:color-mix(in_oklab,var(--bg-2)_40%,transparent)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs tracking-[0.28em] text-[color:var(--text-2)]">
                          CATEGORY
                        </div>
                        <div className="ashfall-display mt-1 text-xl text-[color:var(--text-0)]">
                          {b.category}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-2)_65%,transparent)] px-3 py-1 text-xs font-extrabold tracking-[0.18em] text-[color:var(--text-1)]">
                          {b.items.length} ITEMS
                        </span>
                        <span className="text-[color:var(--text-2)]">
                          {isOpen ? "▾" : "▸"}
                        </span>
                      </div>
                    </div>
                  </button>

                  {isOpen ? (
                    <div id={contentId} className="px-5 pb-5">
                      <div className="h-px w-full bg-[color:color-mix(in_oklab,var(--border-subtle)_70%,transparent)]" />
                      <div className="mt-4 space-y-4">
                        {b.items.map((u) => (
                          <div
                            key={u.name}
                            className="relative overflow-hidden rounded-2xl border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-2)_70%,transparent)]"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-[color:color-mix(in_oklab,var(--accent-gold)_7%,transparent)] via-transparent to-transparent" />
                            <div className="relative p-4">
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex min-w-0 items-start gap-4">
                                  {spriteByName && props.atlas && atlasImageSrc ? (
                                    (() => {
                                      const sprite = spriteByName.get(u.name);
                                      return sprite ? (
                                        <TextureAtlasIcon
                                          atlasMeta={props.atlas.meta}
                                          sprite={sprite}
                                          imageSrc={atlasImageSrc}
                                          renderSizePx={72}
                                          frameColor={frameColor}
                                          frameWidthPx={2}
                                          glowPx={18}
                                          className="h-[72px] w-[72px] shrink-0 rounded-2xl border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-1)_70%,transparent)]"
                                          title={u.name}
                                        />
                                      ) : (
                                        <div
                                          className="h-[72px] w-[72px] shrink-0 rounded-2xl border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-1)_70%,transparent)]"
                                          style={{
                                            borderColor: `color-mix(in oklab, ${frameColor} 75%, var(--border-subtle))`,
                                            boxShadow: `0 0 0 2px ${frameColor}, 0 0 18px 0 color-mix(in oklab, ${frameColor} 55%, transparent)`,
                                          }}
                                        />
                                      );
                                    })()
                                  ) : (
                                    <div
                                      className="h-[72px] w-[72px] shrink-0 rounded-2xl border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-1)_70%,transparent)]"
                                      style={{
                                        borderColor: `color-mix(in oklab, ${frameColor} 75%, var(--border-subtle))`,
                                        boxShadow: `0 0 0 2px ${frameColor}, 0 0 18px 0 color-mix(in oklab, ${frameColor} 55%, transparent)`,
                                      }}
                                    />
                                  )}
                                  <div className="min-w-0">
                                    <div className="ashfall-display text-lg text-[color:var(--text-0)]">
                                      {u.name}
                                    </div>
                                    {u.notes ? (
                                      <div className="mt-1 text-sm text-[color:var(--text-1)]">
                                        {u.notes}
                                      </div>
                                    ) : null}
                                  </div>
                                </div>

                                <div className="space-y-2 sm:min-w-[320px] sm:pl-4">
                                  <CostPills label="Unlock" costs={u.unlockCost} />
                                  <CostPills label="Build" costs={u.buildCost} />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


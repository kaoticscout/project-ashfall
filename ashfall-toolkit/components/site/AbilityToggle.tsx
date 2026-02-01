export type ToggleAbility = {
  id: string;
  slot: string;
  name: string;
  /**
   * Optional texture-atlas sprite name for this ability icon.
   * Use when multiple abilities share the same display name (e.g. "Signal Flare").
   */
  iconName?: string;
  type: string;
  cooldown: string;
  summary: string;
  tags?: string[];
};

import type { TextureAtlasMeta, TextureAtlasSprite } from "@/components/site/TextureAtlasIcon";
import { TextureAtlasIcon } from "@/components/site/TextureAtlasIcon";
import { withBasePath } from "@/lib/withBasePath";

type TextureAtlas = {
  meta: TextureAtlasMeta;
  sprites: TextureAtlasSprite[];
};

export function AbilityToggle(props: {
  abilities: ToggleAbility[];
  stickyTopClassName?: string;
  atlas?: TextureAtlas;
  atlasImageSrc?: string;
}) {
  const abilities = props.abilities;
  const first = abilities[0];
  if (!first) return null;

  const spriteByName = (() => {
    const atlas = props.atlas;
    if (!atlas) return null;
    const map = new Map<string, TextureAtlasSprite>();
    for (const s of atlas.sprites) map.set(s.name, s);
    return map;
  })();

  const atlasImageSrc =
    props.atlasImageSrc ??
    (props.atlas?.meta.image
      ? withBasePath(`/assets/Classes/Skills/${props.atlas.meta.image}`)
      : undefined);

  const inputId = (id: string) => `ability_${id}`;

  const rules = abilities
    .map((a) => {
      const radio = `#${inputId(a.id)}`;
      return [
        `${radio}:checked ~ .abilityTabs label[for="${inputId(a.id)}"] {`,
        `  border-color: var(--border-accent);`,
        `  color: var(--text-0);`,
          `  background: color-mix(in oklab, var(--bg-1) 78%, transparent);`,
          `  box-shadow: var(--glow-gold);`,
        `}`,
        // Panels live inside the following <section>, so target via sibling section.
        `${radio}:checked ~ section .abilityPanels .abilityPanel[data-ability="${a.id}"] {`,
        `  display: block;`,
        `}`,
      ].join("\n");
    })
    .join("\n");

  return (
    <div>
      {/* Radio inputs (CSS-driven toggle; no JS required) */}
      {abilities.map((a, idx) => (
        <input
          key={a.id}
          id={inputId(a.id)}
          name="ability"
          type="radio"
          defaultChecked={idx === 0}
          className="sr-only"
        />
      ))}

      <div
        className={`abilityTabs sticky z-40 border-b border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_70%,transparent)] backdrop-blur supports-[backdrop-filter]:bg-[color:color-mix(in_oklab,var(--bg-0)_60%,transparent)] ${
          props.stickyTopClassName ?? "top-16"
        }`}
      >
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="py-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  ABILITIES
                </div>
                <div className="mt-1 text-sm text-[color:var(--text-1)]">
                  Select an ability to view details.
                </div>
              </div>
              <div className="hidden text-xs text-[color:var(--text-2)] sm:block">
                Tip: use the keybinds (Q/E/R/1/2/3).
              </div>
            </div>

            <div className="mt-3 mx-auto grid max-w-[520px] grid-cols-3 gap-2 sm:max-w-[860px] sm:grid-cols-6">
              {abilities.map((a) => (
                <label
                  key={a.id}
                  htmlFor={inputId(a.id)}
                  className="group relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] p-2 text-[color:var(--text-1)] transition-colors hover:border-[color:var(--border-accent)]"
                  title={`${a.slot} • ${a.name}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  {spriteByName && atlasImageSrc ? (
                    (() => {
                      const spriteName = a.iconName ?? a.name;
                      const sprite = spriteByName.get(spriteName);
                      return sprite ? (
                        <TextureAtlasIcon
                          atlasMeta={props.atlas!.meta}
                          sprite={sprite}
                          imageSrc={atlasImageSrc}
                          renderSizePx={92}
                          frameWidthPx={2}
                          glowPx={16}
                          className="relative h-[92px] w-[92px] rounded-2xl border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-2)_70%,transparent)]"
                          title={a.name}
                        />
                      ) : null;
                    })()
                  ) : null}

                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-lg border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_75%,transparent)] px-3 py-1 text-xs font-semibold text-[color:var(--text-0)] shadow-[var(--glow-gold)]">
                    {a.slot.toUpperCase()}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section id="abilities" className="scroll-mt-28 py-10 sm:py-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="abilityPanels">
            {abilities.map((a) => (
              <div
                key={a.id}
                className="abilityPanel"
                data-ability={a.id}
              >
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  ABILITY
                </div>

                <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex items-center gap-4">
                      {spriteByName && atlasImageSrc ? (
                        (() => {
                          const spriteName = a.iconName ?? a.name;
                          const sprite = spriteByName.get(spriteName);
                          return sprite ? (
                            <TextureAtlasIcon
                              atlasMeta={props.atlas!.meta}
                              sprite={sprite}
                              imageSrc={atlasImageSrc}
                              renderSizePx={56}
                              frameWidthPx={2}
                              glowPx={16}
                              className="h-[56px] w-[56px] rounded-2xl border border-[color:color-mix(in_oklab,var(--border-subtle)_85%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-1)_70%,transparent)]"
                              title={a.name}
                            />
                          ) : null;
                        })()
                      ) : null}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="ashfall-display text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
                            {a.name}
                          </h2>
                          <span className="rounded-lg border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_70%,transparent)] px-2 py-1 text-xs font-semibold text-[color:var(--text-0)]">
                            {a.slot.toUpperCase()}
                          </span>
                        </div>
                        <div className="mt-2 text-sm text-[color:var(--text-2)]">
                          {a.type} • {a.slot} • Cooldown {a.cooldown}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(a.tags ?? []).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] px-3 py-1 text-xs tracking-[0.14em] text-[color:var(--text-1)]"
                      >
                        {t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <div className="ashfall-panel">
                      <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                        <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                          What it does
                        </div>
                        <div className="mt-1 text-sm text-[color:var(--text-2)]">
                          Short, high-signal description.
                        </div>
                      </div>
                      <div className="relative px-5 py-5">
                        <p className="text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
                          {a.summary}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="ashfall-panel">
                      <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                        <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
                          Quick notes
                        </div>
                        <div className="mt-1 text-sm text-[color:var(--text-2)]">
                          Intent and usage at a glance.
                        </div>
                      </div>
                      <div className="relative px-5 py-5">
                        <div className="grid gap-3 text-sm text-[color:var(--text-1)]">
                          <div className="flex items-center justify-between gap-4 rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] px-4 py-3">
                            <span className="text-[color:var(--text-2)]">Slot</span>
                            <span className="font-semibold text-[color:var(--text-0)]">
                              {a.slot}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-4 rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] px-4 py-3">
                            <span className="text-[color:var(--text-2)]">Type</span>
                            <span className="font-semibold text-[color:var(--text-0)]">
                              {a.type}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-4 rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] px-4 py-3">
                            <span className="text-[color:var(--text-2)]">Cooldown</span>
                            <span className="font-semibold text-[color:var(--text-0)]">
                              {a.cooldown}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .abilityPanels .abilityPanel {
          display: none;
        }

        ${rules}
        #${inputId(first.id)}:checked ~ section .abilityPanels .abilityPanel[data-ability="${first.id}"] {
          display: block;
        }
      `}</style>
    </div>
  );
}


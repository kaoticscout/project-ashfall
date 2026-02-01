import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/site/Hero";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { SectionCard } from "@/components/site/SectionCard";
import { AbilityToggle } from "@/components/site/AbilityToggle";
import { getHeroById } from "@/lib/heroArchetypes";
import { getHeroSpotlight, type StatBarRow } from "@/lib/heroSpotlights";
import { withBasePath } from "@/lib/withBasePath";
import skillsAtlas from "@/public/assets/Classes/Skills/TextureAtlas.json";

function StatBar(props: StatBarRow) {
  const clamped = Math.max(0, Math.min(5, props.value));
  const widthPct = `${(clamped / 5) * 100}%`;

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-[color:var(--text-0)]">
          {props.label}
        </div>
        <div className="text-xs text-[color:var(--text-2)]">{props.hint}</div>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_85%,transparent)]">
        <div
          className="h-full rounded-full bg-[color:color-mix(in_oklab,var(--accent-gold)_55%,transparent)] shadow-[var(--glow-gold)]"
          style={{ width: widthPct }}
        />
      </div>
    </div>
  );
}

export function HeroSpotlightPage(props: { heroId: string }) {
  const hero = getHeroById(props.heroId);
  const spotlight = getHeroSpotlight(props.heroId);
  if (!hero || !spotlight) return null;

  const focusClass =
    hero.portraitFocus === "top" ? "object-top" : "object-center";

  return (
    <div>
      <Hero
        eyebrow="Hero Spotlight"
        title={hero.name}
        subtitle={spotlight.heroSubtitle}
        background="world"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/classes"
            className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
          >
            ← Back to archetypes
          </Link>
          <Link
            href="/map"
            className="ashfall-button-primary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-0)]"
          >
            Find hotspots
          </Link>
        </div>
      </Hero>

      <section id="overview" className="scroll-mt-24 pb-10 sm:pb-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)]">
            {hero.portraitSrc ? (
              <div className="absolute inset-0">
                <Image
                  src={withBasePath(hero.portraitSrc)}
                  alt=""
                  fill
                  className={`object-cover opacity-[0.18] ${focusClass}`}
                  sizes="(min-width: 1024px) 1320px, 100vw"
                  priority={false}
                />
              </div>
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.14]"
                style={{
                  backgroundImage: `url("${withBasePath("/assets/feature-classes.svg")}")`,
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:color-mix(in_oklab,var(--bg-0)_35%,transparent)] to-[color:var(--bg-0)]" />

            <div className="relative p-6 sm:p-10">
              <div className="grid items-start gap-10 lg:grid-cols-[520px_1fr]">
                <div>
                  <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                    ROLE
                  </div>
                  <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
                    {hero.roleLine}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
                    {hero.overview}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {hero.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] px-3 py-1 text-xs tracking-[0.14em] text-[color:var(--text-1)]"
                      >
                        {t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6">
                  {hero.portraitSrc ? (
                    <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)]" />
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={withBasePath(hero.portraitSrc)}
                          alt={`${hero.name} portrait`}
                          fill
                          sizes="(min-width: 1024px) 55vw, 100vw"
                          className={`object-cover opacity-95 ${focusClass}`}
                          priority={false}
                        />
                      </div>
                    </div>
                  ) : null}

                  <SectionCard
                    title="At a glance"
                    subtitle="How it plays."
                    right={
                      <span className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-3 py-1 text-xs tracking-[0.14em] text-[color:var(--text-1)]">
                        {spotlight.playstyle}
                      </span>
                    }
                  >
                    <div className="grid gap-5">
                      {spotlight.atAGlance.map((row) => (
                        <StatBar
                          key={row.label}
                          label={row.label}
                          value={row.value}
                          hint={row.hint}
                        />
                      ))}
                    </div>
                  </SectionCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrnamentDivider className="mx-auto max-w-[1320px] px-4 opacity-70" />

      <AbilityToggle
        abilities={spotlight.abilities}
        stickyTopClassName="top-16"
        atlas={skillsAtlas}
      />

      <OrnamentDivider className="mx-auto max-w-[1320px] px-4 opacity-70 pb-10 sm:pb-14" />
    </div>
  );
}


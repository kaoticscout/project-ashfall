import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/site/Hero";
import { LandingFeatureSection } from "@/components/site/LandingFeatureSection";
import { getNewestHero, HERO_ARCHETYPES } from "@/lib/heroArchetypes";

export default function ClassesPage() {
  const newest = getNewestHero();
  return (
    <div>
      <Hero
        eyebrow="Heroes"
        title="Hero Archetypes"
        subtitle="A catalog of Ashfall’s hero types. No builds here — just the fantasy, role, and signature kit for each archetype."
        background="world"
      />

      <LandingFeatureSection
        eyebrow="Spotlight"
        title={`Newest hero: ${newest.name}`}
        subtitle={newest.oneLiner}
        imageSrc={newest.portraitSrc ?? "/assets/feature-classes.svg"}
        imageAlt={newest.portraitSrc ? `${newest.name} portrait` : "Classes preview"}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/classes/${newest.id}`}
            className="ashfall-button-primary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-0)]"
          >
            View archetype
          </Link>
          <Link
            href="/"
            className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
          >
            ← Back
          </Link>
        </div>

        {newest.portraitSrc ? null : (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {newest.tags.slice(0, 4).map((t) => (
              <div
                key={t}
                className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] px-4 py-3 text-sm text-[color:var(--text-1)]"
              >
                {t}
              </div>
            ))}
          </div>
        )}
      </LandingFeatureSection>

      <section className="pb-16">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                ROSTER
              </div>
              <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
                Nine hero archetypes
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-[color:var(--text-1)] sm:text-base">
                Each archetype is designed to create spotlight moments and shape faction strategy.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {HERO_ARCHETYPES.map((c) => (
              <Link
                key={c.id}
                href={`/classes/${c.id}`}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)] p-5 hover:border-[color:var(--border-accent)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:color-mix(in_oklab,var(--bg-0)_85%,transparent)]" />
                <div className="relative">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
                    {c.portraitSrc ? (
                      <Image
                        src={c.portraitSrc}
                        alt={`${c.name} portrait`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[url('/assets/feature-classes.svg')] bg-cover bg-center opacity-35" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[color:color-mix(in_oklab,var(--bg-0)_80%,transparent)]" />
                  </div>

                  <div className="text-xs tracking-[0.28em] text-[color:var(--text-2)]">
                    {c.roleLine.toUpperCase()}
                  </div>
                  <div className="ashfall-display mt-2 text-2xl text-[color:var(--text-0)]">
                    {c.name}
                  </div>
                  <div className="mt-2 text-sm text-[color:var(--text-1)]">
                    {c.oneLiner}
                  </div>
                  <div className="mt-6 text-sm text-[color:var(--accent-gold)] opacity-0 transition-opacity group-hover:opacity-100">
                    View archetype →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


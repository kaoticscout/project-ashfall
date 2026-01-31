import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/site/Hero";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { getHeroById, HERO_ARCHETYPES } from "@/lib/heroArchetypes";

type PageProps = {
  params: { classId: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return HERO_ARCHETYPES.map((h) => ({ classId: h.id }));
}

export default function ClassDetailPage({ params }: PageProps) {
  const { classId } = params;
  const c = getHeroById(classId);
  if (!c) {
    // Static export should never hit this if IDs are correct,
    // but keep a graceful render for safety.
    return (
      <div>
        <Hero
          eyebrow="Archetype"
          title="Unknown hero"
          subtitle="This archetype ID is not defined."
          background="world"
        >
          <Link
            href="/classes"
            className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
          >
            ← Back to roster
          </Link>
        </Hero>
      </div>
    );
  }

  return (
    <div>
      <Hero
        eyebrow="Hero Archetype"
        title={c.name}
        subtitle={c.overview}
        background="world"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/classes"
            className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
          >
            ← Back to roster
          </Link>
        </div>
      </Hero>

      <section className="pb-10 sm:pb-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="grid gap-10 lg:grid-cols-[520px_1fr]">
            <div>
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                ROLE
              </div>
              <div className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
                {c.roleLine}
              </div>
              <p className="mt-4 text-sm text-[color:var(--text-1)] sm:text-base">
                {c.oneLiner}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {c.tags.map((t) => (
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
              {c.portraitSrc ? (
                <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)]" />
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={c.portraitSrc}
                      alt={`${c.name} portrait`}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover opacity-95"
                    />
                  </div>
                </div>
              ) : null}

              <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)] p-6 sm:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] via-transparent to-transparent" />
                <div className="relative">
                  <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                    SIGNATURE KIT
                  </div>
                  <div className="ashfall-display mt-3 text-2xl text-[color:var(--text-0)]">
                    Core abilities (overview)
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {c.kit.map((a) => (
                      <div
                        key={a.name}
                        className="relative overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-2)_65%,transparent)] p-5"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] via-transparent to-transparent" />
                        <div className="relative">
                          <div className="text-xs tracking-[0.28em] text-[color:var(--text-2)]">
                            {a.type.toUpperCase()}
                          </div>
                          <div className="ashfall-display mt-2 text-lg text-[color:var(--text-0)]">
                            {a.name}
                          </div>
                          <div className="mt-2 text-sm text-[color:var(--text-1)]">
                            {a.summary}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrnamentDivider className="mx-auto max-w-[1320px] px-4 opacity-70" />

      <section className="pb-16 pt-10 sm:pt-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            ABOUT
          </div>
          <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
            Archetype profile
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
            {c.overview}
          </p>
        </div>
      </section>
    </div>
  );
}


"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { withBasePath } from "@/lib/withBasePath";

type Zone = {
  id: string;
  name: string;
  imageSrc: string;
};

type ZoneCarouselPreface = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

type ZoneCarouselProps = {
  preface?: ZoneCarouselPreface;
};

function ArrowIcon(props: { direction: "left" | "right" }) {
  const isLeft = props.direction === "left";
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={isLeft ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function toTitle(s: string) {
  return s
    .split("_")
    .map((w) => (w ? w[0]!.toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export function ZoneCarousel(props: ZoneCarouselProps) {
  const { preface } = props;
  const zones = useMemo<Zone[]>(
    () => [
      {
        id: "blades_edge",
        name: "Blade’s Edge",
        imageSrc: "/assets/Zones/blades_edge.jpg",
      },
      {
        id: "hellfire_peninsula",
        name: "Hellfire Peninsula",
        imageSrc: "/assets/Zones/hellfire_peninsula.jpg",
      },
      {
        id: "nagrand",
        name: "Nagrand",
        imageSrc: "/assets/Zones/nagrand.jpg",
      },
      {
        id: "shadowmoon_valley",
        name: "Shadowmoon Valley",
        imageSrc: "/assets/Zones/shadowmoon_valley.jpg",
      },
      {
        id: "zangarmarsh",
        name: "Zangarmarsh",
        imageSrc: "/assets/Zones/zangarmarsh.jpg",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  const setSafe = useCallback(
    (idx: number) => {
      const next = ((idx % zones.length) + zones.length) % zones.length;
      setActive(next);
    },
    [zones.length]
  );

  const prev = useCallback(() => setSafe(active - 1), [active, setSafe]);
  const next = useCallback(() => setSafe(active + 1), [active, setSafe]);

  const current = zones[active] ?? zones[0];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0">
        <div className="ashfall-bg-noise absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-arcane)_12%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_86%,transparent)] to-[color:var(--bg-0)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4">
        {preface ? (
          <div className="pb-8">
            <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
              {preface.eyebrow}
            </div>
            <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
              {preface.title}
            </h2>
            <p className="mt-4 max-w-4xl text-pretty text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
              {preface.description}
            </p>
            <div className="mt-6 grid gap-3 text-sm text-[color:var(--text-1)] sm:grid-cols-2 lg:grid-cols-3">
              {preface.bullets.map((x) => (
                <div
                  key={x}
                  className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] px-4 py-3"
                >
                  {x}
                </div>
              ))}
            </div>
            <div className="mt-10 h-px w-full bg-[color:color-mix(in_oklab,var(--border-subtle)_70%,transparent)]" />
          </div>
        ) : null}

        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
              ZONES
            </div>
            <h2 className="ashfall-display mt-3 text-balance text-4xl text-[color:var(--text-0)] sm:text-5xl">
              World art. Big mood.
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
              Pick a zone. Feel the atmosphere. Hunt the hotspots.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_70%,transparent)] p-2 text-[color:var(--text-0)] hover:border-[color:var(--border-accent)]"
              aria-label="Previous zone"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_70%,transparent)] p-2 text-[color:var(--text-0)] hover:border-[color:var(--border-accent)]"
              aria-label="Next zone"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)]" />

            <div className="relative aspect-[16/9] w-full">
              <Image
                key={current?.id ?? toTitle(String(active))}
                src={withBasePath(current?.imageSrc ?? zones[0]!.imageSrc)}
                alt={current?.name ?? "Zone art"}
                fill
                priority={active === 0}
                className="ashfall-fade-in object-cover opacity-95"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_55%,transparent)] px-3 py-1 text-xs tracking-[0.22em] text-[color:var(--text-1)] backdrop-blur">
                  <span className="text-[color:var(--text-2)]">NOW SHOWING</span>
                  <span className="text-[color:var(--text-0)] font-semibold">
                    {current?.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {zones.map((z, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={z.id}
                  type="button"
                  onClick={() => setSafe(idx)}
                  className={`rounded-full border px-3 py-2 text-sm ${
                    isActive
                      ? "border-[color:var(--border-accent)] bg-[color:color-mix(in_oklab,var(--accent-gold)_12%,transparent)] text-[color:var(--text-0)]"
                      : "border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)] hover:text-[color:var(--text-0)]"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {z.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


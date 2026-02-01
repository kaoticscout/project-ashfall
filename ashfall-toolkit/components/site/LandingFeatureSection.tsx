import type { ReactNode } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";

export function LandingFeatureSection(props: {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  children?: ReactNode;
}) {
  const media = (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[28px] bg-[color:color-mix(in_oklab,var(--accent-gold)_8%,transparent)] blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[color:color-mix(in_oklab,var(--bg-0)_85%,transparent)]" />
        <Image
          src={withBasePath(props.imageSrc)}
          alt={props.imageAlt}
          width={960}
          height={540}
          className="h-auto w-full opacity-95"
          priority={false}
        />
      </div>
    </div>
  );

  const copy = (
    <div>
      <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
        {props.eyebrow.toUpperCase()}
      </div>
      <h2 className="ashfall-display mt-3 text-balance text-3xl text-[color:var(--text-0)] sm:text-4xl">
        {props.title}
      </h2>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
        {props.subtitle}
      </p>
      {props.children ? <div className="mt-6">{props.children}</div> : null}
    </div>
  );

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1320px] px-4">
        <div
          className={`grid items-center gap-8 lg:grid-cols-2 ${
            props.reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {media}
          {copy}
        </div>
      </div>
    </section>
  );
}


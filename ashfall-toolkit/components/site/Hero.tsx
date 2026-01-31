import type { ReactNode } from "react";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";

export function Hero(props: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  background?: "default" | "world";
}) {
  const bg =
    props.background === "world"
      ? "bg-[url('/assets/hero-world.svg')] bg-cover bg-center"
      : "";

  return (
    <section className={`relative overflow-hidden ${bg}`}>
      <div className="absolute inset-0">
        <div className="ashfall-bg-noise absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--bg-0)_30%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_85%,transparent)] to-[color:var(--bg-0)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 pb-10 pt-10 sm:pb-14 sm:pt-14">
        {props.eyebrow ? (
          <div className="mb-4 text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            {props.eyebrow.toUpperCase()}
          </div>
        ) : null}

        <h1 className="ashfall-display text-balance text-4xl font-semibold text-[color:var(--text-0)] sm:text-6xl">
          {props.title}
        </h1>

        {props.subtitle ? (
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
            {props.subtitle}
          </p>
        ) : null}

        {props.children ? <div className="mt-6">{props.children}</div> : null}
      </div>

      <OrnamentDivider className="relative -mt-2 opacity-80" />
    </section>
  );
}


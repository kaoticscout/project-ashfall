import type { ReactNode } from "react";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { withBasePath } from "@/lib/withBasePath";

export function Hero(props: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  background?: "default" | "world";
  backgroundVideoSrc?: string;
  variant?: "default" | "home";
  titleSize?: "default" | "brand";
  showDivider?: boolean;
  align?: "left" | "center";
  vertical?: "top" | "lower";
}) {
  const isWorld = props.background === "world";
  const bg = isWorld ? "bg-cover bg-center" : "";
  const bgStyle = isWorld
    ? { backgroundImage: `url("${withBasePath("/assets/hero-world.svg")}")` }
    : undefined;

  // Keep the homepage hero spacing explicit (px-based) so we can precisely
  // choreograph "gradient → title → black buffer → next section".
  const sectionSizing = "";

  const padding =
    props.variant === "home"
      ? "pt-[400px] pb-[100px]"
      : "pb-10 pt-10 sm:pb-14 sm:pt-14";

  const titleSize =
    props.titleSize === "brand"
      ? "text-6xl sm:text-7xl lg:text-8xl"
      : "text-4xl sm:text-6xl";

  const align = props.align ?? "left";
  const alignText = align === "center" ? "text-center" : "";
  const subtitleAlign = align === "center" ? "mx-auto" : "";
  const overlay =
    props.variant === "home"
      ? props.backgroundVideoSrc
        ? // When a video is present, keep the overlay translucent so motion reads behind the title/CTA.
          "bg-[radial-gradient(520px_240px_at_50%_0%,rgba(120,160,255,0.12),transparent_62%),radial-gradient(1100px_520px_at_50%_0%,rgba(28,62,150,0.22),transparent_72%),linear-gradient(180deg,rgba(5,11,27,0.55)_0px,rgba(5,11,27,0.72)_340px,rgba(5,11,27,0.86)_620px,rgba(5,11,27,0.92)_100%)]"
        : "bg-[radial-gradient(520px_240px_at_50%_0%,rgba(120,160,255,0.16),transparent_62%),radial-gradient(1100px_520px_at_50%_0%,rgba(28,62,150,0.44),transparent_72%),linear-gradient(180deg,#050b1b_0px,#050b1b_320px,var(--bg-0)_440px,var(--bg-0)_100%)]"
      : "bg-gradient-to-b from-[color:color-mix(in_oklab,var(--bg-0)_30%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_85%,transparent)] to-[color:var(--bg-0)]";

  const vertical = props.vertical ?? "top";
  const contentVertical =
    vertical === "lower" ? "flex min-h-full flex-col justify-end" : "";

  const titleFx =
    props.variant === "home" && props.titleSize === "brand"
      ? "ashfall-title-home"
      : "";

  const subtitleFx =
    props.variant === "home" && props.titleSize === "brand"
      ? "ashfall-subtitle-home"
      : "";

  return (
    <section
      className={`relative overflow-hidden ${bg} ${sectionSizing}`}
      style={bgStyle}
    >
      <div className="absolute inset-0">
        {props.backgroundVideoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "brightness(0.6) saturate(1.1) contrast(1.05)" }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={withBasePath(props.backgroundVideoSrc)} type="video/mp4" />
          </video>
        ) : null}
        <div className="ashfall-bg-noise absolute inset-0" />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>

      <div
        className={`relative mx-auto max-w-[1320px] px-4 ${padding} ${contentVertical}`}
      >
        <div>
        {props.eyebrow ? (
          <div
            className={`mb-4 text-xs tracking-[0.32em] text-[color:var(--text-2)] ${alignText}`}
          >
            {props.eyebrow.toUpperCase()}
          </div>
        ) : null}

        <h1
          className={`ashfall-display ${titleFx} text-balance font-semibold text-[color:var(--text-0)] ${titleSize} tracking-[0.08em] ${alignText}`}
        >
          {props.title}
        </h1>

        {props.subtitle ? (
          <p
            className={`mt-5 max-w-3xl text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg ${subtitleAlign} ${alignText} ${subtitleFx}`}
          >
            {props.subtitle}
          </p>
        ) : null}

        {props.children ? (
          <div className={`mt-6 ${align === "center" ? "flex justify-center" : ""}`}>
            {props.children}
          </div>
        ) : null}
        </div>
      </div>

      {props.showDivider === false ? null : (
        <OrnamentDivider
          className={`relative opacity-80 ${
            props.variant === "home" ? "-mt-4" : "-mt-2"
          }`}
        />
      )}
    </section>
  );
}


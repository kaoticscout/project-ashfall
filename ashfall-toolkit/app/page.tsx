import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { SiegeSpotlight } from "@/components/site/SiegeSpotlight";
import { GarrisonSpotlight } from "@/components/site/GarrisonSpotlight";
import { WorldBossSpotlight } from "@/components/site/WorldBossSpotlight";

export default function Home() {
  const betaSignupHref =
    "mailto:beta@ashfall.game?subject=Ashfall%20Beta%20Signup&body=I%27d%20like%20to%20sign%20up%20for%20the%20Ashfall%20beta.%0A%0AName%3A%0AEmail%3A%0ARegion%3A%0APlatform%3A%20PC%0A%0APlaystyle%3A%20Solo%20%2F%20Duo%20%2F%20Squad";
  const betaSignupCount = 12438;
  const betaSignupCountLabel = betaSignupCount.toLocaleString();

  return (
    <div>
      <Hero
        title="ASHFALL"
        subtitle="Loot. Level. Siege. Become a Legend."
        background="world"
        variant="home"
        titleSize="brand"
        showDivider={false}
        align="center"
      >
        <div className="mt-2 text-center">
          <a
            href={betaSignupHref}
            className="ashfall-button-cta inline-flex items-center justify-center rounded-xl px-8 py-5 text-center text-lg font-extrabold tracking-[0.18em] sm:px-10 sm:py-6 sm:text-xl"
          >
            SIGN UP FOR BETA
          </a>
          <div className="mt-6 text-sm font-bold tracking-[0.1em] text-[color:var(--text-0)]">
            {betaSignupCountLabel} raiders have answered the call
          </div>
        </div>
      </Hero>

      <SiegeSpotlight />

      <WorldBossSpotlight />

      <GarrisonSpotlight />

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0">
          <div className="ashfall-bg-noise absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-gold)_14%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_84%,transparent)] to-[color:var(--bg-0)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                SEASONS
              </div>
              <h2 className="ashfall-display mt-3 text-balance text-4xl text-[color:var(--text-0)] sm:text-5xl">
                Win the week.
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
                Weekly arcs feed seasonal ranks, prestige, and cosmetics—without wipe-driven
                grind.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/leaderboard"
                className="ashfall-button-primary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-0)]"
              >
                View leaderboard
              </Link>
              <Link
                href="/seasons"
                className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
              >
                See seasons
              </Link>
              <Link
                href="/map"
                className="ashfall-button-secondary rounded-md px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
              >
                Find contested zones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

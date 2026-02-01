import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { SiegeSpotlight } from "@/components/site/SiegeSpotlight";

export default function Home() {
  const betaSignupCount = 12438;
  const betaSignupCountLabel = betaSignupCount.toLocaleString();
  const heroVideoSrc = encodeURI(
    "/assets/Videos/The Siege of Lordaeron Has Begun - World of Warcraft (1080p, h264, youtube).mp4"
  );

  return (
    <div>
      <Hero
        title="ASHFALL"
        subtitle="Loot. Level. Siege. Become a Legend."
        background="world"
        backgroundVideoSrc={heroVideoSrc}
        variant="home"
        titleSize="brand"
        showDivider={false}
        align="center"
      >
        <div className="mt-2 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="ashfall-button-cta inline-flex items-center justify-center rounded-xl px-8 py-5 text-center text-lg font-extrabold tracking-[0.18em] opacity-60 cursor-not-allowed sm:px-10 sm:py-6 sm:text-xl"
            >
              SIGNUP CLOSED
            </button>
            <Link
              href="/game"
              className="ashfall-button-secondary inline-flex items-center justify-center rounded-xl px-7 py-5 text-center text-base font-extrabold tracking-[0.14em] text-[color:var(--text-0)] hover:text-[color:var(--text-0)] sm:px-9 sm:py-6 sm:text-lg"
            >
              LEARN MORE
            </Link>
          </div>
          <div className="mt-6 text-sm font-bold tracking-[0.1em] text-[color:var(--text-0)]">
            {betaSignupCountLabel} raiders have answered the call
          </div>
          <div className="mx-auto mt-4 max-w-3xl text-pretty text-xs leading-relaxed text-[color:color-mix(in_oklab,var(--text-0)_78%,transparent)] sm:text-sm">
            The footage above is a mood reel to inspire Ashfall’s tone and visuals—not gameplay.
            For how the game actually plays, head to{" "}
            <Link href="/game" className="underline underline-offset-4">
              The Game
            </Link>
            .
          </div>
        </div>
      </Hero>

      <SiegeSpotlight />
    </div>
  );
}

import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { SiegeSpotlight } from "@/components/site/SiegeSpotlight";

export default function Home() {
  const betaSignupHref =
    "mailto:beta@ashfall.game?subject=Ashfall%20Beta%20Signup&body=I%27d%20like%20to%20sign%20up%20for%20the%20Ashfall%20beta.%0A%0AName%3A%0AEmail%3A%0ARegion%3A%0APlatform%3A%20PC%0A%0APlaystyle%3A%20Solo%20%2F%20Duo%20%2F%20Squad";
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
            <a
              href={betaSignupHref}
              className="ashfall-button-cta inline-flex items-center justify-center rounded-xl px-8 py-5 text-center text-lg font-extrabold tracking-[0.18em] sm:px-10 sm:py-6 sm:text-xl"
            >
              SIGN UP FOR BETA
            </a>
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
        </div>
      </Hero>

      <SiegeSpotlight />
    </div>
  );
}

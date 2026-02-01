import Link from "next/link";

const YOUTUBE_ID = "hlSEfurleGA";
const YOUTUBE_EMBED = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`;

export function SiegeSpotlight() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0">
        <div className="ashfall-bg-noise absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-ember)_14%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_82%,transparent)] to-[color:var(--bg-0)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            CORE DIFFERENTIATOR
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-4xl text-[color:var(--text-0)] sm:text-5xl">
            Siege. Breach. Extract.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
            Spend high-end resources to forge siege weapons, then raid a rival base
            in a time-bounded assault—hero-first combat, objective-based wins.
          </p>
        </div>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[28px] bg-[color:color-mix(in_oklab,var(--accent-ember)_12%,transparent)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)]" />

              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={YOUTUBE_EMBED}
                  title="Ashfall siege spotlight"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-4 max-w-4xl text-center text-xs leading-relaxed text-[color:color-mix(in_oklab,var(--text-1)_92%,transparent)] sm:text-sm">
            This footage is a mood reel to inspire Ashfall’s tone and visuals—not gameplay. For how
            the game actually plays, see{" "}
            <Link href="/game" className="underline underline-offset-4">
              The Game
            </Link>
            .
          </div>

          {/* No CTAs here — keep it cinematic. */}
        </div>
      </div>
    </section>
  );
}


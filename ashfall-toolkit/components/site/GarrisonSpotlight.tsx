import { withBasePath } from "@/lib/withBasePath";

const VIDEO_SRC = "/assets/Videos/Building.mp4";

export function GarrisonSpotlight() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0">
        <div className="ashfall-bg-noise absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-gold)_14%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_82%,transparent)] to-[color:var(--bg-0)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            GARRISON
          </div>
          <h2 className="ashfall-display mt-3 text-balance text-4xl text-[color:var(--text-0)] sm:text-5xl">
            Wall it. Ward it. Sleep on your loot.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
            Turn a fragile camp into a defended stronghold—so your vault stays yours
            when the siege horns sound.
          </p>
        </div>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[28px] bg-[color:color-mix(in_oklab,var(--accent-gold)_12%,transparent)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[color:color-mix(in_oklab,var(--bg-0)_78%,transparent)]" />

              <div className="relative pb-[56.25%]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={withBasePath(VIDEO_SRC)}
                  playsInline
                  muted
                  loop
                  autoPlay
                  controls
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


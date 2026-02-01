import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";

export default function EventsPage() {
  return (
    <div>
      <Hero
        eyebrow="The game"
        title="Events"
        subtitle="Stub page: world events, contested moments, and how weekly cadence creates climaxes."
        background="world"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/game"
            className="ashfall-button-primary rounded-md px-4 py-3 text-sm font-medium text-[color:var(--text-0)]"
          >
            ← Back to The Game
          </Link>
          <Link
            href="/"
            className="ashfall-button-secondary rounded-md px-4 py-3 text-sm font-medium text-[color:var(--text-1)] hover:text-[color:var(--text-0)]"
          >
            Home
          </Link>
        </div>
      </Hero>

      <section className="pb-16 pt-10 sm:pt-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="ashfall-panel">
            <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                EVENT DESIGN
              </div>
              <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">
                What this page will cover
              </div>
            </div>
            <div className="relative px-5 py-5">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    k: "Contested hotspots",
                    v: "Places that naturally pull squads together (loot, bosses, objectives).",
                  },
                  {
                    k: "Event rules + counterplay",
                    v: "Clear start/stop, readable telegraphs, and a way to disengage.",
                  },
                  {
                    k: "Rewards & risk",
                    v: "Big rewards, but not mandatory chores; loss should sting, not delete you.",
                  },
                  {
                    k: "Weekly cadence",
                    v: "Pressure ramps into raid windows, then resets for fresh stories.",
                  },
                  {
                    k: "PvE-first options",
                    v: "Events that are fun even without PvP (co-op boss fights, escorts).",
                  },
                  {
                    k: "Spectator moments",
                    v: "Events should look good in clips: clean silhouettes and readable chaos.",
                  },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] px-5 py-4"
                  >
                    <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                      {x.k.toUpperCase()}
                    </div>
                    <div className="mt-2 text-sm text-[color:var(--text-1)]">
                      {x.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <OrnamentDivider className="mt-10 opacity-70" />

          <div className="mt-10 text-sm text-[color:var(--text-2)]">
            Next step: we can add “Event types” (boss, caravan, siege, ritual,
            dungeon) with a tiny spec template for each.
          </div>
        </div>
      </section>
    </div>
  );
}


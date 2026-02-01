import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";

export default function SiegeVehiclesPage() {
  return (
    <div>
      <Hero
        eyebrow="The game"
        title="Siege vehicles"
        subtitle="Stub page: how siege units are crafted, deployed, countered, and how they create highlight moments."
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
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="ashfall-panel lg:col-span-7">
              <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  OVERVIEW
                </div>
                <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">
                  What this page will cover
                </div>
              </div>
              <div className="relative px-5 py-5 text-sm text-[color:var(--text-1)]">
                <div className="space-y-2">
                  <div>- Vehicle types (rams, artillery, shield-busters, support)</div>
                  <div>- Crafting costs and prep loop (high-end resources, risk)</div>
                  <div>- Siege rules (windows, objectives, counterplay)</div>
                  <div>- Defenses and intercept tools (traps, walls, repairs)</div>
                </div>
              </div>
            </div>

            <div className="ashfall-panel lg:col-span-5">
              <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
                <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                  PLACEHOLDER
                </div>
                <div className="ashfall-display mt-2 text-xl text-[color:var(--text-0)]">
                  Example stub callouts
                </div>
              </div>
              <div className="relative px-5 py-5 text-sm text-[color:var(--text-1)]">
                <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] p-4">
                  “Siege vehicles create a decision: defend now, or lose structure
                  later.”
                </div>
                <div className="mt-3 rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] p-4">
                  “Counterplay must be readable and available to defenders.”
                </div>
              </div>
            </div>
          </div>

          <OrnamentDivider className="mt-10 opacity-70" />

          <div className="mt-10 text-sm text-[color:var(--text-2)]">
            Tip: this is intentionally a stub page — we can flesh it out with
            real mechanics when you’re ready.
          </div>
        </div>
      </section>
    </div>
  );
}


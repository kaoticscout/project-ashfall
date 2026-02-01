import Link from "next/link";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { ZoneMapCanvas } from "@/components/site/ZoneMapCanvas";

export default function MapPage() {
  return (
    <div>
      <section className="relative overflow-hidden pb-8 pt-10 sm:pb-10 sm:pt-14">
        <div className="absolute inset-0">
          <div className="ashfall-bg-noise absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_86%,transparent)] to-[color:var(--bg-0)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                WORLD
              </div>
              <h1 className="ashfall-display mt-3 text-balance text-4xl text-[color:var(--text-0)] sm:text-5xl">
                Interactive Map
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
                Visualize harvesting nodes, event zones, raid targets, and player-made bases. Use
                Options to tune colors, sizes, and zone radius.
              </p>
            </div>
          </div>

          <OrnamentDivider className="mt-10 opacity-70" />
        </div>
      </section>

      <ZoneMapCanvas zoneId="bc07_zangarmarsh" />
    </div>
  );
}


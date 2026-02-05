import Link from "next/link";
import { notFound } from "next/navigation";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { ZoneMapCanvas } from "@/components/site/ZoneMapCanvas";
import { getZoneMap, isZoneMapId, ZONE_MAP_IDS } from "@/lib/zoneMaps";

export function generateStaticParams() {
  return ZONE_MAP_IDS.map((zoneId) => ({ zoneId }));
}

export default async function ZoneMapPage({
  params,
}: {
  params: Promise<{ zoneId: string }>;
}) {
  const { zoneId } = await params;
  if (!isZoneMapId(zoneId)) notFound();
  const zone = getZoneMap(zoneId);

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
                {zone.name} Map
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
                Zoom in, toggle overlays, and explore points of interest.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[color:var(--text-2)]">
                <Link
                  href="/map/"
                  className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_34%,transparent)] px-4 py-2 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                >
                  BACK TO WORLD MAP
                </Link>
              </div>
            </div>
          </div>

          <OrnamentDivider className="mt-10 opacity-70" />
        </div>
      </section>

      <ZoneMapCanvas zoneId={zoneId} />
    </div>
  );
}


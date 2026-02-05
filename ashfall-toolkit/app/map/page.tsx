import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/withBasePath";

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
                World Map
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
                Start with the full world overview, then dive into a specific zone map.
              </p>
            </div>
          </div>

          <OrnamentDivider className="mt-10 opacity-70" />
        </div>
      </section>

      <section className="pb-10">
        <div className="relative">
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
            <div className="relative overflow-hidden border-y border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
              <div
                className="relative h-[68vh] min-h-[520px] w-full sm:h-[72vh] lg:h-[76vh]"
                style={{ aspectRatio: "3 / 2" }}
              >
                <Image
                  alt="Ashfall world map"
                  src={withBasePath("/assets/ZoneMaps/WorldMap.png")}
                  fill
                  priority
                  sizes="100vw"
                  className="select-none object-cover"
                  style={{ opacity: 0.96 }}
                />

                {/* Readability / cinematic overlays */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_520px_at_18%_20%,color-mix(in_oklab,var(--accent-gold)_12%,transparent),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_520px_at_85%_25%,color-mix(in_oklab,var(--accent-arcane)_12%,transparent),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--bg-0)_08%,transparent)] via-transparent to-[color:color-mix(in_oklab,var(--bg-0)_58%,transparent)]" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color:color-mix(in_oklab,var(--accent-gold)_12%,transparent)]" />

                {/* Clickable regions (2×2 overlay matching segmented map) */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                  <WorldRegion
                    href="/map/ironwood/"
                    label="Ironwood"
                    hint="Forest canopy, hidden trails"
                    className="col-start-1 row-start-1"
                  />
                  <WorldRegion
                    href="/map/silvershade/"
                    label="Silvershade"
                    hint="Moonlit ruins, cold rivers"
                    className="col-start-2 row-start-1"
                  />
                  <WorldRegion
                    href="/map/emberwastes/"
                    label="Emberwastes"
                    hint="Ash storms, siege scars"
                    className="col-start-1 row-start-2"
                  />
                  <WorldRegion
                    href="/map/voidreach/"
                    label="Voidreach"
                    hint="Rift fractures, endgame danger"
                    className="col-start-2 row-start-2"
                  />
                </div>

                {/* Helper chip */}
                <div className="pointer-events-none absolute left-4 top-4 sm:left-6 sm:top-6">
                  <div className="pointer-events-auto rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_68%,transparent)] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
                    <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                      OVERVIEW
                    </div>
                    <div className="ashfall-display mt-1 text-xl text-[color:var(--text-0)] sm:text-2xl">
                      Ashfall World
                    </div>
                    <div className="mt-1 text-xs text-[color:var(--text-2)]">
                      Click a region to open that zone map.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-[1320px] px-4 py-8">
                <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                      ZONES
                    </div>
                    <div className="mt-2 text-sm text-[color:var(--text-1)]">
                      Jump straight into a zone map (or open the overlay demo).
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/map/emberwastes/"
                      className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_34%,transparent)] px-4 py-2 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                    >
                      EMBERWASTES
                    </Link>
                    <Link
                      href="/map/ironwood/"
                      className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_34%,transparent)] px-4 py-2 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                    >
                      IRONWOOD
                    </Link>
                    <Link
                      href="/map/silvershade/"
                      className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_34%,transparent)] px-4 py-2 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                    >
                      SILVERSHADE
                    </Link>
                    <Link
                      href="/map/voidreach/"
                      className="rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_34%,transparent)] px-4 py-2 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                    >
                      VOIDREACH
                    </Link>
                    <span className="mx-2 hidden h-7 w-px bg-[color:color-mix(in_oklab,var(--border-subtle)_70%,transparent)] sm:block" />
                    <Link
                      href="/map/bc07_zangarmarsh/"
                      className="rounded-full border border-[color:color-mix(in_oklab,var(--accent-gold)_40%,var(--border-subtle))] bg-[color:color-mix(in_oklab,var(--accent-gold)_10%,transparent)] px-4 py-2 text-[10px] tracking-[0.22em] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)]"
                    >
                      OVERLAY DEMO (ZANGARMARSH)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WorldRegion(props: {
  href: string;
  label: string;
  hint: string;
  className?: string;
}) {
  return (
    <Link
      href={props.href}
      aria-label={`Open ${props.label} map`}
      className={[
        "group relative",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--border-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-0)]",
        props.className ?? "",
      ].join(" ")}
    >
      <div className="absolute inset-0 transition-colors group-hover:bg-black/5" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <div className="absolute inset-4 rounded-3xl border border-[color:color-mix(in_oklab,var(--border-accent)_55%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-0)_18%,transparent)] shadow-[0_20px_60px_rgba(0,0,0,0.30)] backdrop-blur-[2px]" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <div className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_72%,transparent)] px-4 py-3 text-center shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
          <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
            ZONE
          </div>
          <div className="ashfall-display mt-1 text-xl text-[color:var(--text-0)]">
            {props.label}
          </div>
          <div className="mt-1 text-xs text-[color:var(--text-2)]">{props.hint}</div>
        </div>
      </div>
    </Link>
  );
}


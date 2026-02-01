import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { withBasePath } from "@/lib/withBasePath";

type Accent = "ember" | "arcane" | "gold";

type EventSpotlight = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  accent: Accent;
  /**
   * Optional cinematic MP4 reference (recommended: /assets/Videos/<something>.mp4)
   * If omitted, we render a clear placeholder frame.
   */
  videoSrc?: string;
};

const ACCENT_TO_CSS_VAR: Record<Accent, string> = {
  ember: "var(--accent-ember)",
  arcane: "var(--accent-arcane)",
  gold: "var(--accent-gold)",
};

const EVENTS: EventSpotlight[] = [
  {
    id: "rifts",
    eyebrow: "Dynamic world event",
    title: "Rift Incursions",
    subtitle:
      "A tear opens. Squads converge. Close it fast—or get third-partied when the final wave drops.",
    bullets: [
      "Timed spawn that creates instant map gravity",
      "Wave pressure + a clear “cash-out” moment",
      "Built for clips: big telegraphs and silhouettes",
    ],
    accent: "arcane",
    videoSrc: "/assets/Events/Rifts.mp4",
  },
  {
    id: "world-boss",
    eyebrow: "Co-op PvE",
    title: "World Raid Boss",
    subtitle:
      "A shard-wide rally target with cinematic mechanics. The kill is co-op—then everyone has to get home with the proof.",
    bullets: [
      "Personal loot: no drama, no split",
      "Telegraph-heavy mechanics that feel like a raid",
      "Post-kill scramble turns PvE into a story",
    ],
    accent: "gold",
    videoSrc: "/assets/Events/Boss.mp4",
  },
  {
    id: "dungeons",
    eyebrow: "Repeatable destination",
    title: "Dungeon Delves",
    subtitle:
      "Short, replayable runs that test execution and tempo. Win clean, extract faster, and turn the drops into power.",
    bullets: [
      "Compact runs built around a few “peak” rooms",
      "Boss mechanics with readable checks",
      "A target you pick when you want high-end crafting mats",
    ],
    accent: "arcane",
    videoSrc: "/assets/Events/DungeonDelve.mp4",
  },
  {
    id: "strongholds",
    eyebrow: "Fortified PvE objective",
    title: "Stronghold Assaults",
    subtitle:
      "Crack a defended outpost under pressure: elites, chokepoints, and a reward room that’s always worth contesting.",
    bullets: [
      "PvE defense layout that creates real routes and angles",
      "Clear “breach” moments without full siege tech",
      "Perfect for small squads looking for a big fight magnet",
    ],
    accent: "ember",
    // videoSrc: "/assets/Events/<Stronghold>.mp4",
  },
  {
    id: "caravans",
    eyebrow: "Escort / ambush event",
    title: "Caravan Runs",
    subtitle:
      "A moving objective that forces contact. Protect the haul, survive the ambushes, then extract with the payload.",
    bullets: [
      "Route-based tension: the map itself becomes the mechanic",
      "Readable attack points for ambushers",
      "Great for “we fought all the way home” stories",
    ],
    accent: "gold",
    videoSrc: "/assets/Events/Caravan.mp4",
  },
  {
    id: "siege-windows",
    eyebrow: "Endgame conflict",
    title: "Siege Windows",
    subtitle:
      "Planned assaults with rules and counterplay. Declare, breach, and fight for an objective—then extract before the counter-push lands.",
    bullets: [
      "Warm-up warning so defenders can respond",
      "Objective wins (not full deletion) to keep it fair",
      "A weekly climax built for highlight moments",
    ],
    accent: "ember",
    videoSrc: "/assets/Events/Siege.mp4",
  },
];

function CinematicVideoFrame(props: {
  label: string;
  accent: Accent;
  videoSrc?: string;
}) {
  const accent = ACCENT_TO_CSS_VAR[props.accent];
  const src = props.videoSrc ? withBasePath(props.videoSrc) : undefined;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-2)]">
      <div className="absolute inset-0">
        <div className="ashfall-bg-noise absolute inset-0 opacity-80" />
        <div
          className="absolute inset-0"
          style={{
            background:
              `radial-gradient(900px 520px at 18% 12%, color-mix(in oklab, ${accent} 18%, transparent), transparent 62%), ` +
              `linear-gradient(180deg, color-mix(in oklab, var(--bg-0) 38%, transparent) 0%, color-mix(in oklab, var(--bg-0) 84%, transparent) 62%, var(--bg-0) 100%)`,
          }}
        />
      </div>

      <div className="relative pb-[56.25%]">
        {src ? (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-95"
            src={src}
            playsInline
            muted
            loop
            autoPlay
            controls
            preload="metadata"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-auto max-w-md px-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] shadow-[var(--glow-gold)]">
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M9 7.5v9l8-4.5-8-4.5Z"
                    fill="color-mix(in oklab, var(--accent-gold) 75%, white)"
                  />
                </svg>
              </div>
              <div className="mt-4 text-xs tracking-[0.32em] text-[color:var(--text-2)]">
                CINEMATIC VIDEO PLACEHOLDER
              </div>
              <div className="ashfall-display mt-2 text-lg text-[color:var(--text-0)]">
                {props.label}
              </div>
              <div className="mt-2 text-sm text-[color:var(--text-1)]">
                Drop an MP4 into <span className="font-semibold">/public/assets/Videos</span> and
                wire it up for this event.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function EventSection(props: { event: EventSpotlight; flip?: boolean }) {
  const e = props.event;
  const accent = ACCENT_TO_CSS_VAR[e.accent];
  const align = props.flip ? "lg:justify-end" : "lg:justify-start";
  const textAlign = props.flip ? "lg:text-right" : "";
  const labelAlign = props.flip ? "lg:justify-end" : "";

  return (
    <section id={e.id} className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-[color:color-mix(in_oklab,var(--border-subtle)_70%,transparent)] bg-[color:var(--bg-2)]">
        <div className="absolute inset-0">
          <div className="ashfall-bg-noise absolute inset-0 opacity-70" />
          <div
            className="absolute inset-0"
            style={{
              background:
                `radial-gradient(900px 520px at 18% 12%, color-mix(in oklab, ${accent} 14%, transparent), transparent 62%), ` +
                `linear-gradient(180deg, color-mix(in oklab, var(--bg-0) 55%, transparent) 0%, color-mix(in oklab, var(--bg-0) 88%, transparent) 62%, var(--bg-0) 100%)`,
            }}
          />
        </div>

        <div className="relative p-6 sm:p-10">
          <CinematicVideoFrame label={e.title} accent={e.accent} videoSrc={e.videoSrc} />

          <div className="mt-8 flex justify-center">
            <div className="h-px w-full max-w-3xl bg-[color:color-mix(in_oklab,var(--border-subtle)_70%,transparent)]" />
          </div>

          <div className="mt-8">
            <div className={`flex ${align}`}>
              <div className={`w-full max-w-3xl ${textAlign}`}>
                <div className={`flex flex-wrap items-center gap-2 ${labelAlign}`}>
                  <span
                    className="rounded-full border border-[color:color-mix(in_oklab,var(--border-subtle)_75%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-2)_55%,transparent)] px-3 py-1 text-[10px] font-extrabold tracking-[0.28em] text-[color:var(--text-1)]"
                    style={{
                      boxShadow: `0 0 0 1px color-mix(in oklab, ${accent} 28%, transparent), 0 0 18px 0 color-mix(in oklab, ${accent} 14%, transparent)`,
                    }}
                  >
                    {e.eyebrow.toUpperCase()}
                  </span>
                  <span className="text-xs tracking-[0.22em] text-[color:var(--text-2)]">
                    EVENT
                  </span>
                </div>

                <h2 className="ashfall-display mt-4 text-balance text-4xl text-[color:var(--text-0)] sm:text-5xl">
                  {e.title}
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
                  {e.subtitle}
                </p>

                <div className="mt-6 grid gap-2 sm:grid-cols-3">
                  {e.bullets.map((b) => (
                    <div
                      key={b}
                      className="rounded-2xl border border-[color:color-mix(in_oklab,var(--border-subtle)_80%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] px-4 py-3 text-sm text-[color:var(--text-1)]"
                    >
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <div>
      <Hero
        eyebrow="The game"
        title="Events"
        subtitle="Big moments with rules, stakes, and spectacle. Events are the game’s gravity: they pull squads together, create conflict windows, and turn a run into a story."
        background="world"
      >
      </Hero>

      <section className="pb-16 pt-10 sm:pt-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="grid gap-6">
            {EVENTS.map((e, idx) => (
              <div key={e.id}>
                <EventSection event={e} flip={idx % 2 === 1} />
                {idx === EVENTS.length - 1 ? null : (
                  <OrnamentDivider className="my-10 opacity-60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


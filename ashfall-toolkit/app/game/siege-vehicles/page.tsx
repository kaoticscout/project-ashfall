import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/site/Hero";
import { OrnamentDivider } from "@/components/site/OrnamentDivider";
import { withBasePath } from "@/lib/withBasePath";

type SiegeShowcase = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
};

const SHOWCASES: SiegeShowcase[] = [
  {
    id: "ram",
    eyebrow: "Breach tool",
    title: "Battering Ram",
    subtitle: "The loudest way to announce a raid: fast structural pressure, short range, high commitment.",
    imageSrc: "/assets/SiegeWeapons/battering_ram.jpg",
    imageAlt: "A heavy battering ram poised for an assault",
  },
  {
    id: "catapult",
    eyebrow: "Indirect fire",
    title: "Catapult",
    subtitle: "Arc shots over walls to break formations and punish repairs—high value, high visibility.",
    imageSrc: "/assets/SiegeWeapons/catapult.jpg",
    imageAlt: "A catapult ready to launch projectiles",
  },
  {
    id: "cannon",
    eyebrow: "Precision breach",
    title: "Cannon",
    subtitle: "Line-of-sight demolition: fewer shots, bigger consequences. Bring it when you need a clean opening.",
    imageSrc: "/assets/SiegeWeapons/cannon.jpg",
    imageAlt: "A cannon positioned for siege warfare",
  },
  {
    id: "ballista",
    eyebrow: "Anti‑personnel / anti‑support",
    title: "Ballista",
    subtitle: "Bolt-through pressure: pick angles, deny windows, and punish anyone who lingers on the wall line.",
    imageSrc: "/assets/SiegeWeapons/ballista.jpg",
    imageAlt: "A ballista siege engine aimed forward",
  },
  {
    id: "tower",
    eyebrow: "Wall access",
    title: "Siege Tower",
    subtitle: "Turn a fortress into a melee map: deliver a squad onto the wall-top and force close-quarters defense.",
    imageSrc: "/assets/SiegeWeapons/siege_tower.jpg",
    imageAlt: "A siege tower approaching defensive walls",
  },
  {
    id: "wagon",
    eyebrow: "Mobile platform",
    title: "War Wagon",
    subtitle: "A moving objective: haul supplies, mount support tools, and keep the raid’s tempo under your control.",
    imageSrc: "/assets/SiegeWeapons/war_wagon.jpg",
    imageAlt: "A war wagon used to support siege operations",
  },
  {
    id: "tanks",
    eyebrow: "Armored assault",
    title: "Armored Siege Tanks",
    subtitle: "Pure intimidation and momentum: roll in, soak fire, and create space for your breach team.",
    imageSrc: "/assets/SiegeWeapons/alliance_tank.jpg",
    imageAlt: "A heavy armored tank used in siege warfare",
  },
];

function SiegeSpotlight(props: { item: SiegeShowcase; flip?: boolean; priority?: boolean }) {
  const { item } = props;
  const align = props.flip ? "lg:justify-end" : "lg:justify-start";
  const textAlign = props.flip ? "lg:text-right" : "";
  const labelAlign = props.flip ? "lg:justify-end" : "";

  return (
    <section id={item.id} className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-[color:color-mix(in_oklab,var(--border-subtle)_70%,transparent)] bg-[color:var(--bg-2)]">
        <div className="absolute inset-0">
          <Image
            src={withBasePath(item.imageSrc)}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 1024px) 1320px, 100vw"
            className="object-cover"
            priority={props.priority ?? false}
          />
          <div className="ashfall-bg-noise absolute inset-0 opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:color-mix(in_oklab,var(--bg-0)_55%,transparent)] via-[color:color-mix(in_oklab,var(--bg-0)_75%,transparent)] to-[color:var(--bg-0)]" />
          <div className="absolute inset-0 bg-[radial-gradient(720px_420px_at_20%_30%,color-mix(in_oklab,var(--accent-ember)_16%,transparent),transparent_65%)]" />
        </div>

        <div className="relative">
          <div className="mx-auto max-w-[1320px] px-4 py-14 sm:py-20 lg:py-24">
            <div className={`flex ${align}`}>
              <div className={`w-full max-w-2xl ${textAlign}`}>
                <div className={`flex flex-wrap items-center gap-2 ${labelAlign}`}>
                  <span className="rounded-full border border-[color:color-mix(in_oklab,var(--border-subtle)_75%,transparent)] bg-[color:color-mix(in_oklab,var(--bg-2)_55%,transparent)] px-3 py-1 text-[10px] font-extrabold tracking-[0.28em] text-[color:var(--text-1)]">
                    {item.eyebrow.toUpperCase()}
                  </span>
                  <span className="text-xs tracking-[0.22em] text-[color:var(--text-2)]">
                    SIEGE WEAPON
                  </span>
                </div>

                <h2 className="ashfall-display mt-4 text-balance text-4xl text-[color:var(--text-0)] sm:text-5xl lg:text-6xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-[color:var(--text-1)] sm:text-lg">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SiegeVehiclesPage() {
  return (
    <div>
      <Hero
        eyebrow="The game"
        title="Siege weapons"
        subtitle="Siege isn’t a checklist of items — it’s a set of capabilities. Each weapon changes how a raid unfolds: where the fight happens, how quickly walls fall, and what defenders must answer."
        background="world"
      >
      </Hero>

      <section className="pb-16 pt-10 sm:pt-14">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="mt-10">
            <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
              SHOWCASE
            </div>
            <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
              Siege capabilities at a glance
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[color:var(--text-1)] sm:text-base">
              Each weapon below is designed to answer a different question: “How do we get in?” “How
              do we hold space?” “How do we reach the vault room?”
            </p>
          </div>

          <div className="mt-8 space-y-8 sm:space-y-10">
            {SHOWCASES.map((item, idx) => (
              <div key={item.id}>
                <SiegeSpotlight item={item} flip={idx % 2 === 1} priority={idx < 2} />
                {idx === SHOWCASES.length - 1 ? null : (
                  <OrnamentDivider className="mt-10 opacity-60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


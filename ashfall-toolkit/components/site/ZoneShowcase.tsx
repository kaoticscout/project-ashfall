import Image from "next/image";

export type ZoneCardData = {
  name: string;
  subtitle: string;
  imageSrc: string;
  tag: string;
};

export function ZoneShowcase(props: { title: string; zones: ZoneCardData[] }) {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1320px] px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs tracking-[0.32em] text-[color:var(--text-2)]">
              WORLD
            </div>
            <h2 className="ashfall-display mt-3 text-3xl text-[color:var(--text-0)] sm:text-4xl">
              {props.title}
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {props.zones.map((z) => (
            <div
              key={z.name}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_72%,transparent)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:color-mix(in_oklab,var(--bg-0)_85%,transparent)]" />
              <Image
                src={z.imageSrc}
                alt={z.name}
                width={640}
                height={360}
                className="h-auto w-full opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="text-xs tracking-[0.28em] text-[color:var(--text-2)]">
                  {z.tag.toUpperCase()}
                </div>
                <div className="ashfall-display mt-1 text-lg text-[color:var(--text-0)]">
                  {z.name}
                </div>
                <div className="mt-1 text-sm text-[color:var(--text-1)]">
                  {z.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


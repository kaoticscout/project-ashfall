import Link from "next/link";
import { Hero } from "@/components/site/Hero";

export default function NotFound() {
  return (
    <div>
      <Hero
        eyebrow="Lost"
        title="Page not found"
        subtitle="This route doesn’t exist yet. Head back home or open one of the toolkit pages."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-md border border-[color:var(--border-accent)] bg-[color:color-mix(in_oklab,var(--accent-gold)_16%,transparent)] px-4 py-2 text-sm font-medium text-[color:var(--text-0)] hover:shadow-[var(--glow-gold)]"
          >
            Home
          </Link>
          <Link
            href="/map"
            className="rounded-md border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] px-4 py-2 text-sm font-medium text-[color:var(--text-1)] hover:border-[color:var(--border-accent)] hover:text-[color:var(--text-0)]"
          >
            World Map
          </Link>
        </div>
      </Hero>
    </div>
  );
}


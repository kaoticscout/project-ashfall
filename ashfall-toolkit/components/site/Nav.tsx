import Link from "next/link";

const betaSignupHref =
  "mailto:beta@ashfall.game?subject=Ashfall%20Beta%20Signup&body=I%27d%20like%20to%20sign%20up%20for%20the%20Ashfall%20beta.%0A%0AName%3A%0AEmail%3A%0ARegion%3A%0APlatform%3A%20PC%0A%0APlaystyle%3A%20Solo%20%2F%20Duo%20%2F%20Squad";

const navItems = [
  { href: "/game", label: "The Game" },
  { href: "/map", label: "World Map" },
  { href: "/classes", label: "Classes" },
  { href: "/progression", label: "Progression" },
  { href: "/seasons", label: "Seasons" },
  { href: "/leaderboard", label: "Leaderboard" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_65%,transparent)] backdrop-blur supports-[backdrop-filter]:bg-[color:color-mix(in_oklab,var(--bg-0)_55%,transparent)]">
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-baseline gap-2"
            >
              <span className="ashfall-display text-lg font-extrabold tracking-[0.34em] text-[color:var(--text-0)] sm:text-xl">
                ASHFALL
              </span>
            </Link>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-[color:var(--text-1)] hover:bg-[color:color-mix(in_oklab,var(--bg-2)_55%,transparent)] hover:text-[color:var(--text-0)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden rounded-full border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] px-3 py-1 text-xs text-[color:var(--text-2)] sm:block">
              Season: Quarter Prototype
            </div>
            <a
              href={betaSignupHref}
              className="ashfall-button-primary rounded-md px-3 py-2 text-sm font-medium text-[color:var(--text-0)]"
            >
              Beta signup
            </a>
            <a
              href="https://worldofwarcraft.blizzard.com/en-us/midnight"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_60%,transparent)] px-3 py-2 text-sm text-[color:var(--text-1)] hover:border-[color:var(--border-accent)] hover:text-[color:var(--text-0)]"
            >
              Visual inspo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


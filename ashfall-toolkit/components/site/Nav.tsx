"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

const navItems = [
  { href: "/game", label: "The Game" },
  { href: "/classes", label: "Classes" },
  { href: "/map", label: "World Map" },
  { href: "/leaderboard", label: "Leaderboard", note: "WIP" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const items = useMemo(() => navItems, []);
  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname?.startsWith(href + "/");
    },
    [pathname]
  );

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_80%,transparent)] backdrop-blur supports-[backdrop-filter]:bg-[color:color-mix(in_oklab,var(--bg-0)_70%,transparent)]">
        <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-baseline gap-2 rounded-md px-2 py-2 hover:bg-[color:color-mix(in_oklab,var(--bg-2)_55%,transparent)]"
              onClick={close}
            >
              <span className="ashfall-display text-xl font-extrabold tracking-[0.34em] text-[color:var(--text-0)] sm:text-2xl">
                ASHFALL
              </span>
            </Link>
          </div>

          <nav className="hidden items-center gap-2 sm:flex">
            {items.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-5 py-3 text-base font-semibold leading-none ${
                    active
                      ? "bg-[color:color-mix(in_oklab,var(--accent-gold)_14%,transparent)] text-[color:var(--text-0)]"
                      : "text-[color:var(--text-1)] hover:bg-[color:color-mix(in_oklab,var(--bg-2)_55%,transparent)] hover:text-[color:var(--text-0)]"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <span>{item.label}</span>
                    {"note" in item ? (
                      <span className="rounded-full border border-[color:color-mix(in_oklab,var(--accent-arcane)_34%,var(--border-subtle))] bg-[color:color-mix(in_oklab,var(--accent-arcane)_18%,transparent)] px-2 py-[2px] text-[10px] font-extrabold tracking-[0.22em] text-[color:var(--text-0)]">
                        {item.note}
                      </span>
                    ) : null}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_65%,transparent)] px-4 py-3 text-base font-semibold leading-none text-[color:var(--text-0)] hover:border-[color:var(--border-accent)] sm:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              Menu
            </button>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="ashfall-button-primary rounded-lg px-5 py-3 text-base font-extrabold leading-none tracking-[0.14em] text-[color:var(--text-0)] opacity-60 cursor-not-allowed"
            >
              Signup closed
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="sm:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/50"
            aria-hidden="true"
            onClick={close}
          />
          <div className="absolute left-0 right-0 z-50 border-b border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_92%,transparent)] backdrop-blur">
            <div className="mx-auto max-w-[1320px] px-4 py-4">
              <div className="grid gap-2">
                {items.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
                        active
                          ? "border-[color:var(--border-accent)] bg-[color:color-mix(in_oklab,var(--accent-gold)_14%,transparent)] text-[color:var(--text-0)]"
                          : "border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-1)_55%,transparent)] text-[color:var(--text-1)] hover:border-[color:var(--border-accent)] hover:text-[color:var(--text-0)]"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span>{item.label}</span>
                        {"note" in item ? (
                          <span className="shrink-0 rounded-full border border-[color:color-mix(in_oklab,var(--accent-arcane)_34%,var(--border-subtle))] bg-[color:color-mix(in_oklab,var(--accent-arcane)_18%,transparent)] px-2 py-[2px] text-[10px] font-extrabold tracking-[0.22em] text-[color:var(--text-0)]">
                            {item.note}
                          </span>
                        ) : null}
                      </span>
                    </Link>
                  );
                })}
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="ashfall-button-cta mt-2 inline-flex items-center justify-center rounded-xl px-6 py-4 text-center text-sm font-extrabold tracking-[0.18em] opacity-60 cursor-not-allowed"
                >
                  SIGNUP CLOSED
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}


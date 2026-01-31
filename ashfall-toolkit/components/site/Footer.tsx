export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border-subtle)] bg-[color:color-mix(in_oklab,var(--bg-0)_70%,transparent)]">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[color:var(--text-2)]">
          Ashfall — prototype overview site for the game’s core pillars and systems.
        </div>
        <div className="text-xs text-[color:var(--text-2)]">
          World map, hero archetypes, progression arc, and seasonal structure.
        </div>
      </div>
    </footer>
  );
}


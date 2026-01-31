import type { ReactNode } from "react";

export function SectionCard(props: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="ashfall-panel">

      <div className="relative border-b border-[color:var(--border-subtle)] px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="ashfall-display text-sm font-semibold text-[color:var(--text-0)]">
              {props.title}
            </div>
            {props.subtitle ? (
              <div className="mt-1 text-sm text-[color:var(--text-2)]">
                {props.subtitle}
              </div>
            ) : null}
          </div>
          {props.right ? <div className="shrink-0">{props.right}</div> : null}
        </div>
      </div>

      <div className="relative px-5 py-5">{props.children}</div>
    </section>
  );
}


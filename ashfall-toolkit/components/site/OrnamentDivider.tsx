export function OrnamentDivider(props: { className?: string }) {
  return (
    <div className={props.className}>
      <svg
        viewBox="0 0 1200 48"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="od_g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="transparent" />
            <stop
              offset="0.15"
              stopColor="color-mix(in oklab, var(--accent-gold) 28%, transparent)"
            />
            <stop
              offset="0.5"
              stopColor="color-mix(in oklab, var(--accent-gold) 55%, transparent)"
            />
            <stop
              offset="0.85"
              stopColor="color-mix(in oklab, var(--accent-gold) 28%, transparent)"
            />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="od_fill" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0"
              stopColor="color-mix(in oklab, var(--accent-gold) 12%, transparent)"
            />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="od_face_hi" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0"
              stopColor="color-mix(in oklab, var(--accent-gold) 16%, transparent)"
            />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="od_face_lo" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0"
              stopColor="color-mix(in oklab, var(--bg-0) 55%, transparent)"
            />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Faceted fills (3D feel, still geometric) */}
        <polygon
          points="560,8 600,30 560,30"
          fill="url(#od_face_hi)"
          opacity="0.85"
        />
        <polygon
          points="560,8 600,30 640,30"
          fill="url(#od_face_lo)"
          opacity="0.75"
        />
        <polygon
          points="885,12 920,30 885,30"
          fill="url(#od_face_hi)"
          opacity="0.75"
        />
        <polygon
          points="885,12 920,30 970,30"
          fill="url(#od_face_lo)"
          opacity="0.7"
        />
        <polygon
          points="390,16 425,30 390,30"
          fill="url(#od_face_hi)"
          opacity="0.6"
        />
        <polygon
          points="390,16 425,30 470,30"
          fill="url(#od_face_lo)"
          opacity="0.55"
        />

        {/* Mountain ridge */}
        <path
          d="M0 32 L90 26 L155 34 L230 20 L320 36 L390 16 L470 34 L560 8 L640 34 L715 22 L790 38 L885 12 L970 34 L1040 24 L1120 40 L1200 30"
          fill="none"
          stroke="url(#od_g)"
          strokeWidth="1.35"
        />

        {/* Secondary ridge (geometric contour) */}
        <path
          d="M40 36 L90 30 L150 38 L230 26 L320 40 L390 26 L470 38 L560 18 L640 38 L715 28 L790 42 L885 22 L970 40 L1040 30 L1120 44"
          fill="none"
          stroke="url(#od_g)"
          strokeWidth="0.95"
          opacity="0.6"
        />

        {/* Subtle fill below ridge */}
        <path
          d="M0 32 L90 26 L155 34 L230 20 L320 36 L390 16 L470 34 L560 8 L640 34 L715 22 L790 38 L885 12 L970 34 L1040 24 L1120 40 L1200 30 L1200 48 L0 48 Z"
          fill="url(#od_fill)"
          opacity="0.9"
        />

        {/* Facet lines (geometric mountain faces) */}
        <path
          d="M230 18 L255 28 L320 32"
          fill="none"
          stroke="color-mix(in oklab, var(--accent-gold) 32%, transparent)"
          strokeWidth="0.9"
          opacity="0.85"
        />
        <path
          d="M390 16 L425 30 L470 34"
          fill="none"
          stroke="color-mix(in oklab, var(--accent-gold) 32%, transparent)"
          strokeWidth="0.9"
          opacity="0.85"
        />
        <path
          d="M560 8 L600 30 L640 34"
          fill="none"
          stroke="color-mix(in oklab, var(--accent-gold) 34%, transparent)"
          strokeWidth="0.95"
          opacity="0.9"
        />
        {/* Highlight edge for 3D ridge */}
        <path
          d="M560 8 L600 30"
          fill="none"
          stroke="color-mix(in oklab, var(--accent-gold) 46%, transparent)"
          strokeWidth="0.9"
          opacity="0.9"
        />
        <path
          d="M885 12 L920 30"
          fill="none"
          stroke="color-mix(in oklab, var(--accent-gold) 46%, transparent)"
          strokeWidth="0.85"
          opacity="0.85"
        />
        <path
          d="M885 12 L920 30 L970 34"
          fill="none"
          stroke="color-mix(in oklab, var(--accent-gold) 32%, transparent)"
          strokeWidth="0.9"
          opacity="0.85"
        />

        {/* Multi-line peaks (stacked geometric contours) */}
        <path
          d="M540 16 L600 6 L660 16"
          fill="none"
          stroke="color-mix(in oklab, var(--accent-gold) 30%, transparent)"
          strokeWidth="0.85"
          opacity="0.9"
        />
        <path
          d="M520 22 L600 10 L680 22"
          fill="none"
          stroke="color-mix(in oklab, var(--accent-gold) 26%, transparent)"
          strokeWidth="0.8"
          opacity="0.85"
        />
        <path
          d="M860 18 L885 12 L910 18"
          fill="none"
          stroke="color-mix(in oklab, var(--accent-gold) 34%, transparent)"
          strokeWidth="0.85"
          opacity="0.95"
        />
        <path
          d="M848 22 L885 16 L922 22"
          fill="none"
          stroke="color-mix(in oklab, var(--accent-gold) 26%, transparent)"
          strokeWidth="0.8"
          opacity="0.85"
        />

        {/* Peak marker (center) */}
        <path
          d="M560 8 L600 4 L640 8"
          fill="none"
          stroke="color-mix(in oklab, var(--accent-gold) 40%, transparent)"
          strokeWidth="1"
        />
        <circle
          cx="600"
          cy="4"
          r="2.1"
          fill="color-mix(in oklab, var(--accent-gold) 65%, transparent)"
        />
      </svg>
    </div>
  );
}


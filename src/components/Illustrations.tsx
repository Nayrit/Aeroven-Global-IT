export function HeroOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px] animate-float">
      <svg viewBox="0 0 420 420" className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="orbGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#c51a1b" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#004b9c" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c51a1b" />
            <stop offset="100%" stopColor="#004b9c" />
          </linearGradient>
        </defs>
        <circle cx="210" cy="210" r="150" fill="url(#orbGlow)" />
        <circle
          cx="210"
          cy="210"
          r="118"
          fill="none"
          stroke="url(#ring)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          className="origin-center"
          style={{ animation: "avdash 8s linear infinite" }}
        />
        <circle
          cx="210"
          cy="210"
          r="78"
          fill="none"
          stroke="rgba(197,26,27,0.35)"
          strokeWidth="1"
        />
        <circle
          cx="210"
          cy="210"
          r="28"
          fill="#c51a1b"
          className="animate-pulse-glow"
        />
        {[
          [210, 92],
          [318, 168],
          [286, 300],
          [134, 300],
          [102, 168],
        ].map(([x, y], i) => (
          <g key={i}>
            <line
              x1="210"
              y1="210"
              x2={x}
              y2={y}
              stroke="rgba(197,26,27,0.45)"
              strokeWidth="1.2"
            />
            <circle
              cx={x}
              cy={y}
              r="7"
              fill="#05080c"
              stroke="#c51a1b"
              strokeWidth="1.5"
              className="animate-pulse-glow"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function Skyline() {
  return (
    <svg
      viewBox="0 0 1100 180"
      className="mt-10 w-full opacity-80"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b2740" />
          <stop offset="100%" stopColor="#050a14" />
        </linearGradient>
      </defs>
      <rect width="1100" height="180" fill="url(#sky)" rx="16" />
      {[
        [40, 90, 48, 90],
        [100, 60, 42, 120],
        [155, 78, 56, 102],
        [230, 40, 50, 140],
        [295, 70, 38, 110],
        [350, 50, 64, 130],
        [430, 85, 44, 95],
        [490, 35, 58, 145],
        [565, 65, 46, 115],
        [630, 48, 70, 132],
        [720, 80, 40, 100],
        [780, 55, 52, 125],
        [850, 72, 48, 108],
        [920, 42, 60, 138],
        [1000, 88, 50, 92],
      ].map(([x, y, w, h], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height={h}
          fill={i % 3 === 0 ? "#141a2b" : "#0f1524"}
          stroke="rgba(197,26,27,0.12)"
        />
      ))}
      <circle cx="980" cy="36" r="10" fill="#c51a1b" opacity="0.7" />
    </svg>
  );
}

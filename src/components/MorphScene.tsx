"use client";

const PALETTES = [
  ["#c51a1b", "#004b9c"],
  ["#004b9c", "#003b50"],
  ["#003b50", "#c51a1b"],
  ["#004b9c", "#c51a1b"],
  ["#c51a1b", "#003b50"],
];

export function MorphScene({ index, className = "" }: { index: number; className?: string }) {
  const i = ((index % PALETTES.length) + PALETTES.length) % PALETTES.length;
  const [a, b] = PALETTES[i];

  return (
    <div className={`relative overflow-hidden bg-white ${className}`}>
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <rect width="400" height="400" fill="#f5f3ee" />
        <rect x="48" y="48" width="304" height="304" fill="none" stroke={b} strokeWidth="1" />
        <rect x="88" y="88" width="224" height="224" fill="none" stroke={a} strokeWidth="1.2" />
        <line x1="48" y1="200" x2="352" y2="200" stroke="rgba(20,23,28,0.08)" />
        <line x1="200" y1="48" x2="200" y2="352" stroke="rgba(20,23,28,0.08)" />
        <circle cx="200" cy="200" r="6" fill={a} />
        <text
          x="200"
          y="188"
          textAnchor="middle"
          fill="#14171c"
          fontSize="42"
          fontFamily="var(--font-syne), sans-serif"
          fontWeight="700"
        >
          0{i + 1}
        </text>
      </svg>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

const PALETTES = [
  ["#c51a1b", "#004b9c"],
  ["#004b9c", "#003b50"],
  ["#003b50", "#c51a1b"],
  ["#004b9c", "#c51a1b"],
  ["#c51a1b", "#003b50"],
];

export function MorphScene({ index, className = "" }: { index: number; className?: string }) {
  const reduce = useReducedMotion();
  const i = ((index % PALETTES.length) + PALETTES.length) % PALETTES.length;
  const [a, b] = PALETTES[i];
  const inset = 48 + i * 8;

  return (
    <div className={`relative overflow-hidden bg-white ${className}`}>
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <rect width="400" height="400" fill="#f5f3ee" />
        <motion.rect
          x={inset}
          y={inset}
          width={400 - inset * 2}
          height={400 - inset * 2}
          fill="none"
          stroke={b}
          strokeWidth="1"
          animate={{ x: inset, y: inset, width: 400 - inset * 2, height: 400 - inset * 2 }}
          transition={{ duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.rect
          animate={{
            x: inset + 40,
            y: inset + 40,
            width: 400 - (inset + 40) * 2,
            height: 400 - (inset + 40) * 2,
          }}
          fill="none"
          stroke={a}
          strokeWidth="1.4"
          transition={{ duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
        <line x1="48" y1="200" x2="352" y2="200" stroke="rgba(20,23,28,0.08)" />
        <line x1="200" y1="48" x2="200" y2="352" stroke="rgba(20,23,28,0.08)" />
        <motion.circle
          cx="200"
          cy="200"
          r="7"
          fill={a}
          animate={reduce ? { scale: 1 } : { scale: [1, 1.22, 1] }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }
          style={{ originX: "200px", originY: "200px" }}
        />
        <motion.text
          key={i}
          x="200"
          y="186"
          textAnchor="middle"
          fill="#14171c"
          fontSize="42"
          fontFamily="var(--font-syne), sans-serif"
          fontWeight="700"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          0{i + 1}
        </motion.text>
      </svg>
    </div>
  );
}

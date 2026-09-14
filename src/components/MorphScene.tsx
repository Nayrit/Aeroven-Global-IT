"use client";

import { useId } from "react";
import { motion } from "framer-motion";

const PALETTES = [
  ["#c51a1b", "#004b9c", "#003b50"],
  ["#004b9c", "#1a6fd4", "#c51a1b"],
  ["#003b50", "#c51a1b", "#004b9c"],
  ["#e02426", "#004b9c", "#f4f1ea"],
  ["#004b9c", "#c51a1b", "#003b50"],
];

export function MorphScene({ index, className = "" }: { index: number; className?: string }) {
  const i = ((index % PALETTES.length) + PALETTES.length) % PALETTES.length;
  const [a, b, c] = PALETTES[i];
  const fid = useId().replace(/:/g, "");

  return (
    <div className={`relative overflow-hidden bg-[#05080c] ${className}`}>
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <defs>
          <filter id={fid}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
        <rect width="400" height="400" fill="#05080c" />
        <g filter={`url(#${fid})`}>
          <motion.circle
            cx="200"
            cy="200"
            r="92"
            fill={a}
            animate={{ cx: [168, 232, 168], cy: [176, 220, 176] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="200"
            cy="200"
            r="78"
            fill={b}
            animate={{ cx: [240, 150, 240], cy: [230, 170, 230] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="200"
            cy="200"
            r="64"
            fill={c}
            animate={{ cx: [190, 210, 190], cy: [140, 250, 140] }}
            transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
        <text
          x="200"
          y="214"
          textAnchor="middle"
          fill="#f4f1ea"
          fontSize="58"
          fontFamily="var(--font-syne), sans-serif"
          fontWeight="800"
        >
          0{i + 1}
        </text>
      </svg>
    </div>
  );
}

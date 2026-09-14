"use client";

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
  const rot = index * 28;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: rot }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: `conic-gradient(from ${rot}deg, ${a}, ${b}, ${c}, ${a})`,
          filter: "blur(28px)",
          opacity: 0.85,
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 size-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
        animate={{ scale: [0.92, 1.05, 0.92], rotate: -rot }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `radial-gradient(circle, ${a} 0%, transparent 70%)`,
        }}
      />
      <svg viewBox="0 0 400 400" className="relative z-10 h-full w-full">
        <motion.circle
          cx="200"
          cy="200"
          r="118"
          fill="none"
          stroke="rgba(244,241,234,0.35)"
          strokeWidth="0.8"
          strokeDasharray="6 14"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "200px" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="72"
          fill="none"
          stroke={a}
          strokeWidth="1.2"
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "200px" }}
        />
        <text
          x="200"
          y="214"
          textAnchor="middle"
          fill="#f4f1ea"
          fontSize="54"
          fontFamily="var(--font-syne), sans-serif"
          fontWeight="800"
        >
          0{i + 1}
        </text>
      </svg>
    </div>
  );
}

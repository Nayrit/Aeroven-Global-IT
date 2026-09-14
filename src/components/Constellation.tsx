"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Office } from "@/lib/content";

const PINS: Record<string, { x: number; y: number }> = {
  "San Francisco": { x: 18, y: 42 },
  "New York": { x: 32, y: 38 },
  London: { x: 48, y: 32 },
  Munich: { x: 53, y: 36 },
  Bengaluru: { x: 70, y: 58 },
  Dhaka: { x: 73, y: 52 },
};

export function Constellation({ offices }: { offices: readonly Office[] }) {
  const [active, setActive] = useState(0);
  const current = offices[active];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <svg viewBox="0 0 100 70" className="w-full overflow-visible">
        {offices.map((office, i) => {
          const a = PINS[office.city];
          const b = PINS[offices[(i + 1) % offices.length].city];
          if (!a || !b) return null;
          return (
            <line
              key={`${office.city}-line`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgba(197,26,27,0.25)"
              strokeWidth="0.2"
            />
          );
        })}
        {offices.map((office, i) => {
          const p = PINS[office.city];
          if (!p) return null;
          const on = i === active;
          return (
            <g
              key={office.city}
              onMouseEnter={() => setActive(i)}
              className="cursor-none"
              data-cursor={office.city}
            >
              {on ? (
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r="3.8"
                  fill="none"
                  stroke="#c51a1b"
                  strokeWidth="0.25"
                  initial={{ scale: 0.6, opacity: 0.8 }}
                  animate={{ scale: 1.4, opacity: 0 }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
              ) : null}
              <circle
                cx={p.x}
                cy={p.y}
                r={on ? 1.4 : 0.9}
                fill={on ? "#c51a1b" : "#f4f1ea"}
              />
              <text
                x={p.x + 2.2}
                y={p.y + 0.8}
                fill={on ? "#f4f1ea" : "#8a96a8"}
                fontSize="3.2"
                fontFamily="var(--font-outfit), sans-serif"
              >
                {office.city}
              </text>
            </g>
          );
        })}
      </svg>
      <div>
        <p className="eyebrow">{current.isHq ? "Headquarters" : current.region}</p>
        <h3 className="display mt-4 text-[40px] text-white">{current.city}</h3>
        <p className="mt-3 text-[16px] text-[#8a96a8]">{current.address}</p>
        <p className="mt-8 text-[13px] uppercase tracking-[0.16em] text-[#5c6778]">
          Hover the map · {offices.length} studios
        </p>
      </div>
    </div>
  );
}

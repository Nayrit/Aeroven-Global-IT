"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function HorizontalReel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, x: 0, scroll: 0 });
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      {!reduce ? (
        <p className="mb-4 text-[13px] text-[#8b93a0]">Drag sideways to explore →</p>
      ) : null}
      <motion.div
        ref={ref}
        data-interactive
        className={`horizontal-reel ${className}`}
        whileTap={{ cursor: "grabbing" }}
        onPointerDown={(e) => {
          const el = ref.current;
          if (!el) return;
          drag.current = { down: true, x: e.clientX, scroll: el.scrollLeft };
          el.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!drag.current.down || !ref.current) return;
          ref.current.scrollLeft =
            drag.current.scroll - (e.clientX - drag.current.x) * 1.15;
        }}
        onPointerUp={() => {
          drag.current.down = false;
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

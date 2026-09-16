"use client";

import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

export function TiltCard({
  children,
  className = "",
  max = 10,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  return (
    <div
      ref={ref}
      data-interactive
      className={`tilt-card ${className}`}
      onMouseMove={(e) => {
        if (reduce) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (py - 0.5) * -max;
        const ry = (px - 0.5) * max * 1.2;
        el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
      }}
    >
      {children}
    </div>
  );
}

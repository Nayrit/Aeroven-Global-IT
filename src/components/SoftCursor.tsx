"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function SoftCursor() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    document.documentElement.classList.add("has-soft-cursor");
    setVisible(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const t = e.target as HTMLElement | null;
      setHover(
        !!t?.closest("a, button, .chip, .image-holder, .tilt-card, [data-interactive]"),
      );
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.classList.remove("has-soft-cursor");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [reduce]);

  if (reduce || !visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[90] hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c51a1b] mix-blend-multiply lg:block"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 900, damping: 40, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[89] hidden size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c51a1b]/50 lg:block"
        animate={{
          x: pos.x,
          y: pos.y,
          scale: hover ? 1.85 : 1,
          opacity: hover ? 0.9 : 0.55,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
      />
    </>
  );
}

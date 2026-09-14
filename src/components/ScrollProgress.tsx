"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-[#004b9c] via-[#c51a1b] to-[#c51a1b]"
      style={{ scaleX }}
    />
  );
}

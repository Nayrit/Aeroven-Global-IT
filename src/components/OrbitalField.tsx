"use client";

import { motion } from "framer-motion";

export function OrbitalField() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <motion.div
        className="absolute inset-[8%] rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -right-1.5 top-1/2 size-3 rounded-full bg-[#c51a1b]" />
      </motion.div>
      <motion.div
        className="absolute inset-[22%] rounded-full border border-[#004b9c]/40"
        animate={{ rotate: -360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 -top-1.5 size-2 rounded-full bg-[#004b9c]" />
      </motion.div>
      <div className="absolute inset-[38%] grid place-items-center rounded-full bg-gradient-to-br from-[#003b50] to-[#05080c] shadow-[0_0_80px_rgba(197,26,27,0.25)]">
        <span className="display text-[42px] text-white">A</span>
      </div>
      <div className="absolute left-[12%] top-[18%] h-24 w-px origin-top rotate-12 bg-gradient-to-b from-[#c51a1b] to-transparent" />
      <div className="absolute right-[16%] bottom-[20%] h-16 w-px origin-bottom -rotate-12 bg-gradient-to-t from-[#004b9c] to-transparent" />
    </div>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Testimonial } from "@/lib/content";

export function QuoteStage({ items }: { items: readonly Testimonial[] }) {
  const [i, setI] = useState(0);
  const item = items[i];

  const next = () => setI((v) => (v + 1) % items.length);

  return (
    <section
      className="relative flex min-h-[85vh] cursor-none items-center border-y border-black/10 bg-[#0f141c] py-24"
      onClick={next}
      data-cursor="next"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") next();
      }}
    >
      <div className="container">
        <p className="eyebrow text-[#e8b4b4]">Click for next voice</p>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={item.name}
            initial={{ y: 48, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -36, opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <p className="serif max-w-5xl text-[7vw] leading-[1.08] text-[#f4f1ea] sm:text-[48px] lg:text-[60px]">
              “{item.quote}”
            </p>
            <footer className="mt-12 flex items-end justify-between gap-6">
              <div>
                <p className="text-[16px] font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-[14px] text-[#8a96a8]">{item.role}</p>
              </div>
              <p className="display text-[14px] text-[#c51a1b]">
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </section>
  );
}

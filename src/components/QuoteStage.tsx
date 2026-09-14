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
      className="relative flex min-h-[90vh] cursor-none items-center py-24"
      onClick={next}
      data-cursor="next"
    >
      <div className="container">
        <p className="eyebrow">Voices</p>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={item.name}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <p className="serif max-w-5xl text-[8vw] leading-[1.05] text-white sm:text-[52px] lg:text-[64px]">
              “{item.quote}”
            </p>
            <footer className="mt-10 flex items-center justify-between gap-6">
              <div>
                <p className="text-[16px] font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-[14px] text-[#8a96a8]">{item.role}</p>
              </div>
              <p className="display text-[13px] text-[#c51a1b]">
                {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </section>
  );
}

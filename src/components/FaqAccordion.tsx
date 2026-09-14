"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { FaqItem } from "@/lib/content";

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="relative border-t border-black/10 last:border-b">
            {isOpen ? (
              <motion.span
                layoutId={reduce ? undefined : "faq-bar"}
                className="absolute left-0 top-0 h-full w-[2px] bg-[#c51a1b]"
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            ) : null}
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-5 pl-4 text-left"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span
                className={`text-[17px] font-semibold transition-colors sm:text-[18px] ${
                  isOpen ? "text-[#14171c]" : "text-[#5d6673]"
                }`}
              >
                {item.question}
              </span>
              <motion.span
                className="mt-0.5 text-[#c51a1b]"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
              >
                +
              </motion.span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pl-4 max-w-2xl text-[15px] leading-relaxed text-[#5d6673]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

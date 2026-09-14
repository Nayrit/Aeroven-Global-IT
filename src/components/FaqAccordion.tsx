"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/content";

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="border-t border-white/10 last:border-b">
            <button
              type="button"
              data-cursor
              className="flex w-full items-start justify-between gap-6 py-7 text-left"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="display text-[22px] text-white sm:text-[28px]">
                {item.question}
              </span>
              <span className="mt-1 text-[#c51a1b]">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-400 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-7 max-w-2xl text-[16px] leading-relaxed text-[#8a96a8]">
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

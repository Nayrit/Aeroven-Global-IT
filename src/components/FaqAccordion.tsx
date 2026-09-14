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
          <div key={item.question} className="border-t border-black/10 last:border-b">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="text-[17px] font-semibold text-[#14171c] sm:text-[18px]">
                {item.question}
              </span>
              <span className="mt-0.5 text-[#c51a1b]">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 max-w-2xl text-[15px] leading-relaxed text-[#5d6673]">
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

"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { FaqItem } from "@/lib/content";

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-[#eef0f3] bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-semibold text-[#14213D] sm:text-[16px]">
                {item.question}
              </span>
              <ChevronRight
                className={`size-5 shrink-0 text-[#FCA311] transition-transform duration-250 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-[#475569]">
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

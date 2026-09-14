"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Row = {
  number: string;
  title: string;
  description: string;
};

export function InteractiveRows({
  items,
  layoutId = "row-bar",
}: {
  items: readonly Row[];
  layoutId?: string;
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div>
      {items.map((item, i) => {
        const on = active === i;
        return (
          <button
            key={item.title}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-pressed={on}
            className="relative grid w-full gap-2 border-t border-black/10 py-7 text-left last:border-b sm:grid-cols-[72px_1fr] sm:items-start"
          >
            {on ? (
              <motion.span
                layoutId={reduce ? undefined : layoutId}
                className="absolute left-0 top-0 h-full w-[2px] bg-[#c51a1b]"
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            ) : null}
            <span
              className={`pl-4 text-[15px] font-semibold transition-colors ${
                on ? "text-[#c51a1b]" : "text-[#8b93a0]"
              }`}
            >
              {item.number}
            </span>
            <div className="pl-4 sm:pl-0">
              <h3
                className={`text-[20px] font-semibold transition-colors ${
                  on ? "text-[#14171c]" : "text-[#5d6673]"
                }`}
              >
                {item.title}
              </h3>
              {reduce ? (
                <p className="mt-2 text-[15px] leading-relaxed text-[#5d6673]">
                  {item.description}
                </p>
              ) : (
                <AnimatePresence initial={false}>
                  {on ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden text-[15px] leading-relaxed text-[#5d6673]"
                    >
                      <span className="mt-2 block">{item.description}</span>
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

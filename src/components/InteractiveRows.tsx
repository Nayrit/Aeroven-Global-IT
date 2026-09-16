"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

  return (
    <div>
      {items.map((item, i) => {
        const on = active === i;
        return (
          <button
            key={item.title}
            type="button"
            data-interactive
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-pressed={on}
            className="group relative grid w-full gap-2 border-t border-black/10 py-8 text-left last:border-b sm:grid-cols-[88px_1fr] sm:items-start"
          >
            {on ? (
              <motion.span
                layoutId={layoutId}
                className="absolute left-0 top-0 h-full w-[3px] bg-[#c51a1b]"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            ) : null}
            <motion.span
              animate={{
                color: on ? "#c51a1b" : "#8b93a0",
                x: on ? 8 : 0,
              }}
              className="pl-5 text-[18px] font-semibold"
            >
              {item.number}
            </motion.span>
            <div className="pl-5 sm:pl-0">
              <motion.h3
                animate={{
                  color: on ? "#14171c" : "#5d6673",
                  x: on ? 10 : 0,
                }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className="text-[22px] font-semibold sm:text-[26px]"
              >
                {item.title}
              </motion.h3>
              <AnimatePresence initial={false}>
                {on ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 max-w-2xl pb-1 text-[16px] leading-relaxed text-[#5d6673]">
                      {item.description}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </button>
        );
      })}
    </div>
  );
}

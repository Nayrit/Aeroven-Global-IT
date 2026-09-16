"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Pinned horizontal scroll theater — Isadora / TSH case-study DNA. */
export function ScrollReel({
  children,
  title,
  eyebrow,
  hint = "Scroll to explore →",
}: {
  children: ReactNode;
  title: string;
  eyebrow: string;
  hint?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["4vw", "-72%"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative h-[220vh] bg-transparent sm:h-[280vh] lg:h-[320vh]"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="container mb-6 flex items-end justify-between gap-6 sm:mb-8">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="display mt-4 max-w-3xl text-[28px] text-[#14171c] sm:text-[36px] lg:text-[56px]">
              {title}
            </h2>
          </div>
          <p className="hidden text-[12px] uppercase tracking-[0.18em] text-[#8b93a0] sm:block">
            {hint}
          </p>
        </div>
        <motion.div
          style={{ x }}
          className="flex gap-4 will-change-transform pl-[4vw] pr-[20vw] sm:gap-6"
        >
          {children}
        </motion.div>
        <div className="container mt-8 sm:mt-10">
          <div className="h-[2px] w-full bg-black/10">
            <motion.div
              className="h-full bg-[#c51a1b]"
              style={{ width: progress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

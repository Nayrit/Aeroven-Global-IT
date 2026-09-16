"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import type { ProcessStep } from "@/lib/content";
import { MorphScene } from "./MorphScene";

/** Scroll-pinned process theater — each wheel step advances a stage. */
export function PinnedProcess({
  eyebrow,
  headline,
  steps,
}: {
  eyebrow: string;
  headline: string;
  steps: readonly ProcessStep[];
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [0, steps.length - 0.001]);
  const bar = useTransform(scrollYProgress, [0, 1], ["8%", "100%"]);
  const [i, setI] = useState(0);

  useMotionValueEvent(raw, "change", (v) => {
    const n = Math.min(steps.length - 1, Math.max(0, Math.floor(v)));
    setI((prev) => (prev === n ? prev : n));
  });

  const step = steps[i];

  return (
    <section
      ref={ref}
      className="relative bg-white"
      style={{ height: `${steps.length * 95}vh` }}
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-16">
        <div className="container grid w-full items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[52px]">
              {headline}
            </h2>
            <p className="mt-3 text-[13px] text-[#8b93a0]">
              Keep scrolling — stages advance with you.
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12"
              >
                <p className="display text-[72px] leading-none text-[#c51a1b] sm:text-[96px]">
                  {step.number}
                </p>
                <h3 className="display mt-3 text-[32px] text-[#14171c] sm:text-[44px]">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-[#5d6673]">
                  {step.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 h-[2px] w-full max-w-md bg-black/10">
              <motion.div className="h-full bg-[#c51a1b]" style={{ width: bar }} />
            </div>
            <div className="mt-4 flex gap-2">
              {steps.map((s, idx) => (
                <span
                  key={s.number}
                  className={`h-1.5 w-8 transition-colors ${
                    idx <= i ? "bg-[#c51a1b]" : "bg-black/10"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            key={`scene-${i}`}
            initial={{ opacity: 0.4, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <MorphScene index={i} className="aspect-square w-full border border-black/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

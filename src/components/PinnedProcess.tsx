"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import type { ProcessStep } from "@/lib/content";
import { MorphScene } from "./MorphScene";

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
  const bar = useTransform(scrollYProgress, [0, 1], ["12%", "100%"]);
  const [i, setI] = useState(0);

  useMotionValueEvent(raw, "change", (v) => {
    const n = Math.min(steps.length - 1, Math.max(0, Math.floor(v)));
    setI((prev) => (prev === n ? prev : n));
  });

  const step = steps[i];

  return (
    <section ref={ref} className="relative" style={{ height: `${steps.length * 90}vh` }}>
      <div className="sticky top-0 flex min-h-screen items-center py-20">
        <div className="container grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="display mt-4 text-[40px] text-white sm:text-[56px]">
              {headline}
            </h2>
            <p className="display mt-10 text-[88px] leading-none text-[#c51a1b]">
              {step.number}
            </p>
            <h3 className="display mt-2 text-[36px] text-white sm:text-[48px]">
              {step.title}
            </h3>
            <p className="serif mt-5 max-w-lg text-[22px] leading-relaxed text-[#c9d0da]">
              {step.description}
            </p>
            <div className="mt-10 h-[2px] w-full bg-white/10">
              <motion.div className="h-full bg-[#c51a1b]" style={{ width: bar }} />
            </div>
          </div>
          <MorphScene index={i} className="aspect-square w-full rounded-[48px]" />
        </div>
      </div>
    </section>
  );
}

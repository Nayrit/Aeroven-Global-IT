"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MorphScene } from "./MorphScene";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";

type Item = {
  title: string;
  description: string;
};

export function CapabilityTheater({
  eyebrow,
  headline,
  items,
  href,
}: {
  eyebrow: string;
  headline: string;
  items: readonly Item[];
  href?: string;
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = items[active];

  return (
    <section className="py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-4 max-w-xl text-[36px] text-[#14171c] sm:text-[48px]">
            {headline}
          </h2>
          <div className="mt-10">
            {items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className="relative flex w-full items-baseline gap-4 border-t border-black/10 py-5 pl-4 text-left last:border-b"
              >
                {active === i ? (
                  <motion.span
                    layoutId={reduce ? undefined : "cap-bar"}
                    className="absolute left-0 top-0 h-full w-[2px] bg-[#c51a1b]"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                ) : null}
                <span
                  className={`text-[12px] transition-colors ${
                    active === i ? "text-[#c51a1b]" : "text-[#8b93a0]"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`text-[18px] transition-colors sm:text-[20px] ${
                    active === i
                      ? "font-semibold text-[#14171c]"
                      : "text-[#5d6673]"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>
          {href ? (
            <Magnetic strength={0.14} className="mt-10">
              <Link href={href} className="btn btn-outline">
                View capabilities
                <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
          ) : null}
        </Reveal>
        <Reveal delay={0.08}>
          <MorphScene
            index={active}
            className="aspect-square w-full border border-black/10"
          />
          <div className="mt-6 min-h-[4.5rem] max-w-md">
            <AnimatePresence mode="wait">
              <motion.p
                key={current?.title}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="text-[16px] leading-relaxed text-[#5d6673]"
              >
                {current?.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

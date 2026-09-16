"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ImageHolder } from "./ImageHolder";
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
    <section className="py-24 sm:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-4 max-w-xl text-[36px] text-[#14171c] sm:text-[48px]">
            {headline}
          </h2>
          <p className="mt-3 text-[14px] text-[#8b93a0]">Hover a capability — the preview updates.</p>
          <div className="mt-10">
            {items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                data-interactive
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className="relative flex w-full items-baseline gap-4 border-t border-black/10 py-5 pl-4 text-left last:border-b"
              >
                {active === i ? (
                  <motion.span
                    layoutId={reduce ? undefined : "cap-bar"}
                    className="absolute left-0 top-0 h-full w-[3px] bg-[#c51a1b]"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                ) : null}
                <motion.span
                  animate={{ color: active === i ? "#c51a1b" : "#8b93a0" }}
                  className="text-[13px] font-semibold"
                >
                  0{i + 1}
                </motion.span>
                <motion.span
                  animate={{
                    color: active === i ? "#14171c" : "#5d6673",
                    x: active === i && !reduce ? 6 : 0,
                    fontWeight: active === i ? 600 : 400,
                  }}
                  className="text-[18px] sm:text-[20px]"
                >
                  {item.title}
                </motion.span>
              </button>
            ))}
          </div>
          {href ? (
            <Magnetic strength={0.28} className="mt-10">
              <Link href={href} className="btn btn-outline">
                View capabilities
                <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
          ) : null}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current?.title}
                initial={reduce ? false : { opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 1.02, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <ImageHolder
                  label={`Capability 0${active + 1}`}
                  caption={current?.title}
                  ratio="square"
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={`${current?.title}-desc`}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 text-[16px] leading-relaxed text-[#5d6673]"
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

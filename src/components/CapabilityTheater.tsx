"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
  const current = items[active];

  return (
    <section className="py-24 sm:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-4 max-w-xl text-[36px] text-[#14171c] sm:text-[48px]">
            {headline}
          </h2>
          <p className="mt-3 text-[14px] text-[#8b93a0]">Hover a capability to preview it.</p>
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
                    layoutId="cap-bar"
                    className="absolute left-0 top-0 h-full w-[3px] bg-[#c51a1b]"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                ) : null}
                <span
                  className={`text-[13px] font-semibold ${
                    active === i ? "text-[#c51a1b]" : "text-[#8b93a0]"
                  }`}
                >
                  0{i + 1}
                </span>
                <motion.span
                  animate={{
                    color: active === i ? "#14171c" : "#5d6673",
                    x: active === i ? 8 : 0,
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
          <MorphScene
            index={active}
            className="aspect-square w-full border border-black/10"
          />
          <div className="mt-6 min-h-[5rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={current?.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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

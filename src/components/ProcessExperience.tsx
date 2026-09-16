"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { processPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { Counter } from "@/components/Kinetic";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export function ProcessExperience() {
  const { hero, steps, principles, cta } = processPage;
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <>
      <ChapterHero
        index="02"
        eyebrow={hero.eyebrow}
        title={hero.headline}
        body={hero.body}
      />
      <div className="container grid grid-cols-3 gap-6 border-y border-black/10 py-10">
        {hero.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <p className="display text-[28px] text-[#14171c]">
              <Counter value={stat.value} />
            </p>
            <p className="mt-2 text-[13px] text-[#5d6673]">{stat.label}</p>
          </Reveal>
        ))}
      </div>
      <section className="py-20">
        <div className="container space-y-0">
          {steps.map((step, i) => {
            const on = active === i;
            return (
              <article
                key={step.number}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                className="relative grid gap-4 border-t border-black/10 py-10 pl-4 last:border-b lg:grid-cols-[120px_1fr]"
              >
                {on ? (
                  <motion.span
                    layoutId={reduce ? undefined : "process-bar"}
                    className="absolute left-0 top-0 h-full w-[2px] bg-[#c51a1b]"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                ) : null}
                <p
                  className={`display text-[36px] transition-colors ${
                    on ? "text-[#c51a1b]" : "text-[#8b93a0]"
                  }`}
                >
                  {step.number}
                </p>
                <div>
                  <h2 className="display text-[28px] text-[#14171c] sm:text-[36px]">
                    {step.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-[#5d6673]">
                    {step.description}
                  </p>
                  {step.tags ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="border-t border-black/10 bg-white py-20">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{principles.eyebrow}</p>
            <h2 className="display mt-4 text-[32px] text-[#14171c] sm:text-[44px]">
              {principles.headline}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <h3 className="text-[18px] font-semibold text-[#14171c]">{item.title}</h3>
                <p className="mt-2 text-[14px] text-[#5d6673]">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

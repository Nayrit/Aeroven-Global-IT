"use client";

import { useState } from "react";
import { processPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { MorphScene } from "@/components/MorphScene";
import { Counter } from "@/components/Kinetic";
import { CtaBand } from "@/components/CtaBand";

export function ProcessExperience() {
  const { hero, steps, principles, cta } = processPage;
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <>
      <ChapterHero
        index="02"
        eyebrow={hero.eyebrow}
        title="From spark to system."
        body={hero.body}
      />
      <div className="container grid grid-cols-3 gap-6 border-y border-white/10 py-10">
        {hero.stats.map((stat) => (
          <div key={stat.label}>
            <p className="display text-[32px] text-white">
              <Counter value={stat.value} />
            </p>
            <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-[#8a96a8]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <section className="py-20">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <MorphScene
            index={active}
            className="aspect-square w-full rounded-[48px]"
          />
          <div>
            <div className="mb-8 flex flex-wrap gap-2">
              {steps.map((s, i) => (
                <button
                  key={s.number}
                  type="button"
                  data-cursor="step"
                  data-active={active === i}
                  className="chip"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  {s.number}
                </button>
              ))}
            </div>
            <p className="display text-[72px] leading-none text-[#c51a1b]">
              {step.number}
            </p>
            <h2 className="display mt-4 text-[40px] text-white sm:text-[56px]">
              {step.title}
            </h2>
            <p className="serif mt-6 text-[22px] leading-relaxed text-[#c9d0da]">
              {step.description}
            </p>
            {step.tags ? (
              <div className="mt-8 flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <section className="paper py-28">
        <div className="container">
          <p className="eyebrow">{principles.eyebrow}</p>
          <h2 className="display mt-4 text-[40px] text-[#05080c] sm:text-[56px]">
            {principles.headline}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.items.map((item) => (
              <article key={item.title}>
                <h3 className="display text-[24px] text-[#05080c]">{item.title}</h3>
                <p className="mt-3 text-[15px] text-[#3d4654]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

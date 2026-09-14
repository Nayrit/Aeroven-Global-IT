"use client";

import { processPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { Counter } from "@/components/Kinetic";
import { CtaBand } from "@/components/CtaBand";

export function ProcessExperience() {
  const { hero, steps, principles, cta } = processPage;

  return (
    <>
      <ChapterHero
        index="02"
        eyebrow={hero.eyebrow}
        title={hero.headline}
        body={hero.body}
      />
      <div className="container grid grid-cols-3 gap-6 border-y border-black/10 py-10">
        {hero.stats.map((stat) => (
          <div key={stat.label}>
            <p className="display text-[28px] text-[#14171c]">
              <Counter value={stat.value} />
            </p>
            <p className="mt-2 text-[13px] text-[#5d6673]">{stat.label}</p>
          </div>
        ))}
      </div>
      <section className="py-20">
        <div className="container space-y-0">
          {steps.map((step) => (
            <article
              key={step.number}
              className="grid gap-4 border-t border-black/10 py-10 last:border-b lg:grid-cols-[120px_1fr]"
            >
              <p className="display text-[36px] text-[#c51a1b]">{step.number}</p>
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
          ))}
        </div>
      </section>
      <section className="border-t border-black/10 bg-white py-20">
        <div className="container">
          <p className="eyebrow">{principles.eyebrow}</p>
          <h2 className="display mt-4 text-[32px] text-[#14171c] sm:text-[44px]">
            {principles.headline}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.items.map((item) => (
              <article key={item.title}>
                <h3 className="text-[18px] font-semibold text-[#14171c]">{item.title}</h3>
                <p className="mt-2 text-[14px] text-[#5d6673]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

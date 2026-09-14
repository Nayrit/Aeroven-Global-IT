"use client";

import { Check } from "lucide-react";
import { engagementPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { CtaBand } from "@/components/CtaBand";

export function EngagementExperience() {
  const { hero, models, compare, cta } = engagementPage;

  return (
    <>
      <ChapterHero
        index="03"
        eyebrow={hero.eyebrow}
        title={hero.headline}
        body={hero.body}
      />
      <section className="pb-16">
        <div className="container grid gap-4 md:grid-cols-2">
          {models.map((model) => (
            <article key={model.number} className="card p-7">
              <p className="text-[#c51a1b]">{model.number}</p>
              <h2 className="display mt-2 text-[26px] text-[#14171c]">{model.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5d6673]">
                {model.description}
              </p>
              <ul className="mt-5 space-y-2">
                {model.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-[14px] text-[#14171c]">
                    <Check className="size-4 text-[#c51a1b]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-black/10 pt-4 text-[13px] text-[#5d6673]">
                <span className="text-[#14171c]">{compare.bestForPrefix}</span> {model.bestFor}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-black/10 py-20">
        <div className="container">
          <p className="eyebrow">{compare.eyebrow}</p>
          <h2 className="display mt-4 text-[32px] text-[#14171c]">{compare.headline}</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="py-3 pr-4 text-[12px] uppercase tracking-[0.12em] text-[#5d6673]">
                    Factor
                  </th>
                  {compare.columns.map((col) => (
                    <th key={col} className="py-3 pr-4 text-[14px] text-[#14171c]">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.rows.map((row) => (
                  <tr key={row.label} className="border-b border-black/10">
                    <th className="py-3 pr-4 text-[14px] font-medium text-[#5d6673]">
                      {row.label}
                    </th>
                    {row.values.map((value) => (
                      <td key={`${row.label}-${value}`} className="py-3 pr-4 text-[14px] text-[#14171c]">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

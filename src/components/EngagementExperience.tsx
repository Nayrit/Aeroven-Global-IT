"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { engagementPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { MorphScene } from "@/components/MorphScene";
import { CtaBand } from "@/components/CtaBand";
import { TiltCard } from "@/components/TiltCard";

export function EngagementExperience() {
  const { hero, models, compare, cta } = engagementPage;
  const [active, setActive] = useState(0);
  const model = models[active];

  return (
    <>
      <ChapterHero
        index="03"
        eyebrow={hero.eyebrow}
        title="Choose the voltage."
        body={hero.body}
      />
      <section className="pb-16">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {models.map((m, i) => (
              <button
                key={m.number}
                type="button"
                className="chip"
                data-active={active === i}
                data-cursor="select"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                {m.title}
              </button>
            ))}
          </div>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <MorphScene
              index={active}
              className="aspect-square w-full rounded-[48px]"
            />
            <div>
              <p className="text-[#c51a1b]">{model.number}</p>
              <h2 className="display mt-3 text-[40px] text-white sm:text-[52px]">
                {model.title}
              </h2>
              <p className="serif mt-5 text-[22px] text-[#c9d0da]">{model.description}</p>
              <ul className="mt-8 space-y-3">
                {model.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-[15px] text-white">
                    <Check className="size-4 text-[#c51a1b]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-white/10 pt-5 text-[14px] text-[#8a96a8]">
                <span className="text-white">{compare.bestForPrefix}</span> {model.bestFor}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 py-24">
        <div className="container">
          <p className="eyebrow">{compare.eyebrow}</p>
          <h2 className="display mt-4 text-[40px] text-white">{compare.headline}</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 pr-4 text-[12px] uppercase tracking-[0.14em] text-[#8a96a8]">
                    Factor
                  </th>
                  {compare.columns.map((col, i) => (
                    <th
                      key={col}
                      className={`py-4 pr-4 text-[14px] ${
                        i === active ? "text-[#c51a1b]" : "text-white"
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.rows.map((row) => (
                  <tr key={row.label} className="border-b border-white/10">
                    <th className="py-4 pr-4 text-[14px] font-medium text-[#8a96a8]">
                      {row.label}
                    </th>
                    {row.values.map((value, i) => (
                      <td
                        key={`${row.label}-${value}`}
                        className={`py-4 pr-4 text-[14px] ${
                          i === active ? "text-white" : "text-white/40"
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {models.map((m, i) => (
              <button
                key={m.number}
                type="button"
                onClick={() => setActive(i)}
                data-cursor="select"
                className="text-left"
              >
                <TiltCard
                  className={`card-glass p-6 ${i === active ? "ring-1 ring-[#c51a1b]" : ""}`}
                >
                  <p className="text-[#c51a1b]">{m.number}</p>
                  <h3 className="display mt-2 text-[24px] text-white">{m.title}</h3>
                </TiltCard>
              </button>
            ))}
          </div>
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

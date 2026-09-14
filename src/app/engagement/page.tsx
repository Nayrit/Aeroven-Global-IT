import type { Metadata } from "next";
import { Check } from "lucide-react";
import { engagementPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Engagement",
  description: engagementPage.hero.body,
};

export default function EngagementPage() {
  const { hero, models, compare, cta } = engagementPage;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.headline} body={hero.body} index="03" />
      <section className="pb-24">
        <div className="container grid gap-4 md:grid-cols-2">
          {models.map((model, i) => (
            <Reveal key={model.number} delay={i * 0.05} className="card-glass p-8">
              <p className="text-[#c51a1b]">{model.number}</p>
              <h2 className="display mt-3 text-[32px] text-white">{model.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#8a96a8]">
                {model.description}
              </p>
              <ul className="mt-6 space-y-2">
                {model.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-[14px] text-white">
                    <Check className="size-4 text-[#c51a1b]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-[13px] text-[#8a96a8]">
                <span className="text-white">{compare.bestForPrefix}</span> {model.bestFor}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-t border-white/10 py-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{compare.eyebrow}</p>
            <h2 className="display mt-4 text-[40px] text-white">{compare.headline}</h2>
          </Reveal>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 pr-4 text-[12px] uppercase tracking-[0.14em] text-[#8a96a8]">
                    Factor
                  </th>
                  {compare.columns.map((col) => (
                    <th key={col} className="py-4 pr-4 text-[14px] text-white">
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
                    {row.values.map((value) => (
                      <td key={`${row.label}-${value}`} className="py-4 pr-4 text-[14px] text-white">
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

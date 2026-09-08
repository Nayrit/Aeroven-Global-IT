import type { Metadata } from "next";
import { Check } from "lucide-react";
import { engagementPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/SectionHeading";
import { FeatureIcon } from "@/components/FeatureIcon";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Engagement",
  description: engagementPage.hero.body,
};

export default function EngagementPage() {
  const { hero, models, compare, cta } = engagementPage;

  return (
    <>
      <section className="hero-glow pb-14 pt-12 sm:pb-16 sm:pt-16">
        <div className="container">
          <Reveal>
            <Breadcrumb current={hero.breadcrumb} />
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 className="mt-4 max-w-4xl text-[34px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-[48px]">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-[#c7cbd4] sm:text-[18px]">
              {hero.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2">
            {models.map((model, i) => (
              <Reveal key={model.number} delay={i * 0.05}>
                <article className="card-light group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[13px] font-bold tracking-[0.08em] text-[#FCA311]">
                      {model.number}
                    </span>
                    <div className="icon-well">
                      <FeatureIcon title={model.title} />
                    </div>
                  </div>
                  <h2 className="mt-4 text-[22px] font-extrabold tracking-[-0.02em] text-[#14213D]">
                    {model.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">
                    {model.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {model.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[14px] text-[#14213D]"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-[#FCA311]"
                          strokeWidth={2.5}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto border-t border-[#eef0f3] pt-5 text-[13px] leading-relaxed text-[#475569]">
                    <span className="font-bold text-[#14213D]">
                      {compare.bestForPrefix}
                    </span>{" "}
                    {model.bestFor}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-black">
        <div className="container">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={compare.eyebrow}
              headline={compare.headline}
            />
          </Reveal>
          <Reveal className="mt-10">
            <div className="overflow-x-auto rounded-[20px] border border-white/10">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#14213D]">
                    <th className="px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#9aa3b5]">
                      Factor
                    </th>
                    {compare.columns.map((col) => (
                      <th
                        key={col}
                        className="px-5 py-4 text-[14px] font-bold text-white"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compare.rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={
                        i % 2 === 0 ? "bg-black/40" : "bg-white/[0.03]"
                      }
                    >
                      <th className="px-5 py-4 text-[14px] font-semibold text-[#c7cbd4]">
                        {row.label}
                      </th>
                      {row.values.map((value) => (
                        <td
                          key={`${row.label}-${value}`}
                          className="px-5 py-4 text-[14px] text-[#e5e5e5]"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand cta={cta} />
    </>
  );
}

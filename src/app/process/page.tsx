import type { Metadata } from "next";
import { processPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Process",
  description: processPage.hero.body,
};

export default function ProcessPage() {
  const { hero, steps, principles, cta } = processPage;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.headline} body={hero.body} index="02" />
      <div className="container grid grid-cols-3 gap-px border-y border-white/10 bg-white/10">
        {hero.stats.map((stat) => (
          <div key={stat.label} className="bg-[#05080c] px-4 py-8">
            <p className="display text-[28px] text-white">{stat.value}</p>
            <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-[#8a96a8]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <section className="py-28">
        <div className="container space-y-16">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.04}>
              <article className="grid gap-8 border-b border-white/10 pb-16 lg:grid-cols-[160px_1fr]">
                <p className="display text-[64px] leading-none text-[#c51a1b]">
                  {step.number}
                </p>
                <div>
                  <h2 className="display text-[36px] text-white sm:text-[48px]">
                    {step.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#8a96a8]">
                    {step.description}
                  </p>
                  {step.tags ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-t border-white/10 py-28">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{principles.eyebrow}</p>
            <h2 className="display mt-4 text-[40px] text-white sm:text-[56px]">
              {principles.headline}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.items.map((item) => (
              <article key={item.title} className="card-glass p-6">
                <h3 className="display text-[22px] text-white">{item.title}</h3>
                <p className="mt-3 text-[14px] text-[#8a96a8]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

import type { Metadata } from "next";
import { processPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Process",
  description: processPage.hero.body,
};

export default function ProcessPage() {
  const { hero, steps, principles, cta } = processPage;

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
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5"
                >
                  <p className="text-[28px] font-extrabold tracking-tight text-[#FCA311]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[13px] text-[#9aa3b5]">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="relative mx-auto max-w-3xl">
            <div
              className="absolute bottom-0 left-[23px] top-0 w-px bg-gradient-to-b from-[#FCA311] via-[#e5e5e5] to-transparent sm:left-[27px]"
              aria-hidden
            />
            <ol className="space-y-8">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.05}>
                  <li className="relative flex gap-5 sm:gap-8">
                    <div className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border-2 border-[#FCA311] bg-white text-[14px] font-extrabold text-[#14213D] sm:size-14 sm:text-[16px]">
                      {step.number}
                    </div>
                    <article className="card-light flex-1 p-6 transition-transform duration-300 hover:-translate-y-0.5">
                      <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#FCA311]">
                        {step.stepLabel}
                      </p>
                      <h2 className="mt-2 text-[22px] font-extrabold tracking-[-0.02em] text-[#14213D]">
                        {step.title}
                      </h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">
                        {step.description}
                      </p>
                      {step.tags ? (
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-[#eef0f3] bg-[#fafbfc] px-3 py-1.5 text-[12px] font-semibold text-[#14213D]"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section bg-black">
        <div className="container">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={principles.eyebrow}
              headline={principles.headline}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="card-dark h-full p-6 transition-colors duration-300 hover:border-[#FCA311]/35">
                  <h3 className="text-[17px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#9aa3b5]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand cta={cta} />
    </>
  );
}

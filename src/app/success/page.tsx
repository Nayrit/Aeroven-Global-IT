import type { Metadata } from "next";
import { successPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Client Success",
  description: successPage.hero.body,
};

export default function SuccessPage() {
  const { hero, featuredBadge, featured, caseStudies, testimonials, logos, cta } =
    successPage;

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
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5"
                >
                  <p className="text-[26px] font-extrabold tracking-tight text-[#FCA311] sm:text-[32px]">
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
          <Reveal>
            <article className="gradient-navy relative overflow-hidden rounded-[24px] border border-[#FCA311]/25 p-8 sm:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-10 size-56 rounded-full bg-[#FCA311]/15 blur-3xl"
                aria-hidden
              />
              <span className="eyebrow">{featuredBadge}</span>
              <p className="mt-4 text-[13px] font-semibold tracking-[0.08em] text-[#FCA311]">
                {featured.company}
              </p>
              <p className="mt-1 text-[13px] text-[#9aa3b5]">{featured.industry}</p>
              <h2 className="mt-4 max-w-3xl text-[26px] font-extrabold tracking-[-0.02em] text-white sm:text-[34px]">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#c7cbd4] sm:text-[16px]">
                {featured.description}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {featured.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <p className="text-[24px] font-extrabold text-[#FCA311]">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[13px] text-[#9aa3b5]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Reveal key={study.company} delay={i * 0.06}>
                <article className="card-light flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-[12px] font-bold tracking-[0.08em] text-[#FCA311]">
                    {study.company}
                  </p>
                  <p className="mt-1 text-[12px] text-[#9aa3b5]">
                    {study.industry}
                  </p>
                  <h3 className="mt-4 text-[18px] font-bold text-[#14213D]">
                    {study.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#475569]">
                    {study.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4 border-t border-[#eef0f3] pt-5">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-[20px] font-extrabold text-[#14213D]">
                          {metric.value}
                        </p>
                        <p className="text-[12px] text-[#9aa3b5]">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
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
              eyebrow={testimonials.eyebrow}
              headline={testimonials.headline}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.07}>
                <blockquote className="card-dark flex h-full flex-col p-6 transition-colors duration-300 hover:border-[#FCA311]/35">
                  <p className="flex-1 text-[15px] leading-relaxed text-[#c7cbd4]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="grid size-11 place-items-center rounded-full bg-[#FCA311]/15 text-[13px] font-bold text-[#FCA311]">
                      {item.initials}
                    </span>
                    <div>
                      <cite className="not-italic text-[15px] font-bold text-white">
                        {item.name}
                      </cite>
                      <p className="text-[13px] text-[#9aa3b5]">{item.role}</p>
                    </div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-white">
        <div className="container">
          <Reveal>
            <p className="text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-[#9aa3b5]">
              {logos.label}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {logos.brands.map((name) => (
                <span
                  key={name}
                  className="text-[14px] font-bold tracking-[0.12em] text-[#14213D]/55 transition-colors hover:text-[#14213D]"
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand cta={cta} />
    </>
  );
}

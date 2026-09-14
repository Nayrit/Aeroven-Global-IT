import type { Metadata } from "next";
import { successPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { Counter } from "@/components/Kinetic";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Client Success",
  description: successPage.hero.body,
};

export default function SuccessPage() {
  const { hero, featuredBadge, featured, caseStudies, testimonials, logos, cta } =
    successPage;

  return (
    <>
      <ChapterHero
        index="04"
        eyebrow={hero.eyebrow}
        title={hero.headline}
        body={hero.body}
      />
      <div className="container grid grid-cols-2 gap-6 border-y border-black/10 py-10 lg:grid-cols-4">
        {hero.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.05}>
            <p className="display text-[28px] text-[#14171c]">
              <Counter value={stat.value} />
            </p>
            <p className="mt-2 text-[13px] text-[#5d6673]">{stat.label}</p>
          </Reveal>
        ))}
      </div>
      <section className="py-20">
        <div className="container">
          <Reveal className="card p-8 sm:p-12">
            <p className="eyebrow">{featuredBadge}</p>
            <p className="mt-5 text-[13px] text-[#c51a1b]">
              {featured.company} · {featured.industry}
            </p>
            <h2 className="display mt-3 text-[28px] text-[#14171c] sm:text-[40px]">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-3xl text-[16px] text-[#5d6673]">{featured.description}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {featured.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="display text-[28px] text-[#14171c]">{metric.value}</p>
                  <p className="mt-1 text-[13px] text-[#5d6673]">{metric.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {caseStudies
              .filter((s) => !s.featured)
              .map((study, i) => (
                <Reveal key={study.company} delay={i * 0.06} className="card p-6">
                  <p className="text-[12px] uppercase tracking-[0.12em] text-[#c51a1b]">
                    {study.company}
                  </p>
                  <p className="mt-1 text-[12px] text-[#5d6673]">{study.industry}</p>
                  <h3 className="mt-4 text-[18px] font-semibold text-[#14171c]">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-[#5d6673]">{study.description}</p>
                </Reveal>
              ))}
          </div>
        </div>
      </section>
      <section className="border-t border-black/10 bg-white py-20">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{testimonials.eyebrow}</p>
            <h2 className="display mt-4 text-[32px] text-[#14171c]">{testimonials.headline}</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08} className="card p-7">
                <p className="text-[16px] leading-relaxed text-[#14171c]">“{item.quote}”</p>
                <footer className="mt-5 text-[13px] text-[#5d6673]">
                  {item.name} — {item.role}
                </footer>
              </Reveal>
            ))}
          </div>
          <p className="mt-14 text-center text-[12px] uppercase tracking-[0.16em] text-[#8b93a0]">
            {logos.label}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-8">
            {logos.brands.map((name) => (
              <span key={name} className="text-[14px] tracking-[0.16em] text-[#8b93a0]">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

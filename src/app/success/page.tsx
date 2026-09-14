import type { Metadata } from "next";
import { successPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/SectionHeading";
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
      <PageHero eyebrow={hero.eyebrow} title={hero.headline} body={hero.body} index="04" />
      <div className="container grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 lg:grid-cols-4">
        {hero.stats.map((stat) => (
          <div key={stat.label} className="bg-[#05080c] px-5 py-8">
            <p className="display text-[32px] text-white">{stat.value}</p>
            <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-[#8a96a8]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <section className="py-24">
        <div className="container">
          <Reveal className="card-glass overflow-hidden p-8 sm:p-12">
            <p className="eyebrow">{featuredBadge}</p>
            <p className="mt-6 text-[13px] uppercase tracking-[0.16em] text-[#c51a1b]">
              {featured.company} · {featured.industry}
            </p>
            <h2 className="display mt-3 max-w-3xl text-[36px] text-white sm:text-[48px]">
              {featured.title}
            </h2>
            <p className="mt-5 max-w-3xl text-[16px] text-[#8a96a8]">{featured.description}</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {featured.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="display text-[32px] text-white">{metric.value}</p>
                  <p className="mt-1 text-[13px] text-[#8a96a8]">{metric.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Reveal key={study.company} delay={i * 0.06} className="card-glass p-6">
                <p className="text-[12px] uppercase tracking-[0.16em] text-[#c51a1b]">
                  {study.company}
                </p>
                <p className="mt-1 text-[12px] text-[#8a96a8]">{study.industry}</p>
                <h3 className="display mt-4 text-[22px] text-white">{study.title}</h3>
                <p className="mt-3 text-[14px] text-[#8a96a8]">{study.description}</p>
                <div className="mt-6 flex gap-5 border-t border-white/10 pt-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-[18px] font-semibold text-white">{metric.value}</p>
                      <p className="text-[11px] text-[#8a96a8]">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 py-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{testimonials.eyebrow}</p>
            <h2 className="display mt-4 text-[40px] text-white">{testimonials.headline}</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {testimonials.items.map((item) => (
              <blockquote key={item.name} className="card-glass p-8">
                <p className="text-[17px] leading-relaxed text-white">“{item.quote}”</p>
                <footer className="mt-6 text-[13px] text-[#8a96a8]">
                  {item.name} — {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-16 text-center text-[12px] uppercase tracking-[0.2em] text-[#5c6778]">
            {logos.label}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {logos.brands.map((name) => (
              <span key={name} className="display text-[18px] tracking-[0.16em] text-white/30">
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

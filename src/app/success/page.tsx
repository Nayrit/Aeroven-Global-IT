import type { Metadata } from "next";
import { successPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { Counter } from "@/components/Kinetic";
import { HorizontalReel } from "@/components/HorizontalReel";
import { TiltCard } from "@/components/TiltCard";
import { QuoteStage } from "@/components/QuoteStage";
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
      <ChapterHero
        index="04"
        eyebrow={hero.eyebrow}
        title="Proof in production."
        body={hero.body}
      />
      <div className="container grid grid-cols-2 gap-6 border-y border-white/10 py-10 lg:grid-cols-4">
        {hero.stats.map((stat) => (
          <div key={stat.label}>
            <p className="display text-[32px] text-white">
              <Counter value={stat.value} />
            </p>
            <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-[#8a96a8]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <section className="overflow-hidden py-20">
        <div className="container mb-8">
          <p className="eyebrow">{featuredBadge}</p>
          <h2 className="display mt-4 text-[40px] text-white sm:text-[56px]">
            Drag the work.
          </h2>
        </div>
        <HorizontalReel className="px-[max(20px,calc((100vw-1320px)/2))]">
          <TiltCard className="card-glass min-h-[480px] p-8 sm:p-10">
            <p className="text-[12px] uppercase tracking-[0.16em] text-[#c51a1b]">
              {featured.company} · {featured.industry}
            </p>
            <h3 className="display mt-5 text-[32px] text-white">{featured.title}</h3>
            <p className="mt-4 text-[15px] text-[#8a96a8]">{featured.description}</p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {featured.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="display text-[24px] text-white">{metric.value}</p>
                  <p className="text-[11px] text-[#8a96a8]">{metric.label}</p>
                </div>
              ))}
            </div>
          </TiltCard>
          {caseStudies.map((study) => (
            <TiltCard key={study.company} className="card-glass min-h-[480px] p-8">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#c51a1b]">
                {study.company}
              </p>
              <p className="mt-1 text-[12px] text-[#8a96a8]">{study.industry}</p>
              <h3 className="display mt-5 text-[26px] text-white">{study.title}</h3>
              <p className="mt-4 text-[15px] text-[#8a96a8]">{study.description}</p>
              <div className="mt-8 flex gap-5">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-[18px] font-semibold text-white">{metric.value}</p>
                    <p className="text-[11px] text-[#8a96a8]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </TiltCard>
          ))}
        </HorizontalReel>
      </section>
      <QuoteStage items={testimonials.items} />
      <section className="border-t border-white/10 py-16">
        <p className="text-center text-[12px] uppercase tracking-[0.2em] text-[#5c6778]">
          {logos.label}
        </p>
        <div className="marquee mt-6">
          <div className="marquee-track py-4">
            {[...logos.brands, ...logos.brands].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="display text-[28px] tracking-[0.18em] text-white/30"
              >
                {name} <span className="mx-4 text-[#c51a1b]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { home, offices, footer } from "@/lib/content";
import { Counter } from "@/components/Kinetic";
import { Reveal } from "@/components/Reveal";
import { CapabilityTheater } from "@/components/CapabilityTheater";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";

export default function HomePage() {
  const {
    hero,
    capabilitiesDetail,
    products,
    process,
    engagement,
    testimonials,
    faq,
    cta,
  } = home;

  const ticker = [...footer.trustedByExtended, ...footer.trustedByExtended];

  return (
    <>
      <section className="pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{hero.badge}</p>
            <h1 className="display mt-6 max-w-5xl text-[40px] text-[#14171c] sm:text-[60px] lg:text-[72px]">
              {hero.headlineBefore}
              <span className="text-[#c51a1b]">{hero.headlineAccent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-[#5d6673]">
              {hero.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/consultation" className="btn btn-primary">
                {hero.primaryCta}
                <ArrowUpRight className="size-4" />
              </Link>
              <Link href="/success" className="btn btn-ghost">
                {hero.secondaryCta}
              </Link>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-black/10 pt-10">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="display text-[28px] text-[#14171c] sm:text-[40px]">
                  <Counter value={stat.value} />
                </p>
                <p className="mt-2 text-[13px] text-[#5d6673]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track py-4">
          {ticker.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-[12px] font-semibold tracking-[0.22em] text-[#8b93a0]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <CapabilityTheater
        eyebrow={capabilitiesDetail.eyebrow}
        headline={capabilitiesDetail.headline}
        items={capabilitiesDetail.items}
        href="/capabilities"
      />

      <section className="border-t border-black/10 py-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{products.eyebrow}</p>
            <h2 className="display mt-4 max-w-3xl text-[36px] text-[#14171c] sm:text-[48px]">
              {products.headline}
            </h2>
          </Reveal>
          <article className="card mt-12 p-8 sm:p-12">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#c51a1b]">
              {products.featured.badge}
            </p>
            <h3 className="display mt-4 text-[28px] text-[#14171c] sm:text-[36px]">
              {products.featured.title}
            </h3>
            <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-[#5d6673]">
              {products.featured.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {products.featured.tags?.map((tag) => (
                <span
                  key={tag}
                  className="border border-black/10 px-3 py-1 text-[12px] text-[#5d6673]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {products.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04} className="card p-7">
                <p className="text-[12px] text-[#004b9c]">0{i + 1}</p>
                <h3 className="mt-3 text-[20px] font-semibold text-[#14171c]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5d6673]">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{process.eyebrow}</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[48px]">
              {process.headline}
            </h2>
          </Reveal>
          <div className="mt-12">
            {process.steps.map((step) => (
              <article
                key={step.number}
                className="grid gap-4 border-t border-black/10 py-8 last:border-b sm:grid-cols-[80px_1fr_1.2fr] sm:items-start"
              >
                <p className="text-[18px] font-semibold text-[#c51a1b]">{step.number}</p>
                <h3 className="text-[20px] font-semibold text-[#14171c]">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#5d6673]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-24">
        <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">{engagement.eyebrow}</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[48px]">
              {engagement.headline}
            </h2>
            <Link href="/engagement" className="btn btn-ghost mt-8">
              Compare models
            </Link>
          </div>
          <div>
            {engagement.items.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 border-t border-black/10 py-7 last:border-b"
              >
                <span className="text-[#c51a1b]">{item.number}</span>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#14171c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-[#5d6673]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white py-24">
        <div className="container">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[48px]">
            {testimonials.headline}
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {testimonials.items.map((item) => (
              <blockquote key={item.name} className="card p-7">
                <p className="text-[16px] leading-relaxed text-[#14171c]">
                  “{item.quote}”
                </p>
                <footer className="mt-6 text-[13px] text-[#5d6673]">
                  {item.name} — {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-24">
        <div className="container">
          <p className="eyebrow">Offices</p>
          <h2 className="display mt-4 text-[36px] text-[#14171c]">Global offices</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {offices.map((office) => (
              <div key={office.city} className="border-t border-black/10 pt-5">
                <p className="text-[18px] font-semibold text-[#14171c]">{office.city}</p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-[#c51a1b]">
                  {office.isHq ? "HQ · " : ""}
                  {office.region}
                </p>
                <p className="mt-3 text-[14px] text-[#5d6673]">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">{faq.eyebrow}</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[48px]">
              {faq.headline}
            </h2>
            <p className="mt-4 text-[#5d6673]">{faq.body}</p>
          </div>
          <FaqAccordion items={faq.items} />
        </div>
      </section>

      <CtaBand cta={cta} />
    </>
  );
}

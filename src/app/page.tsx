import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  home,
  offices,
} from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureIcon } from "@/components/FeatureIcon";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/CtaBand";
import { HeroOrb, Skyline } from "@/components/Illustrations";

export default function HomePage() {
  const {
    hero,
    coreCapabilities,
    capabilitiesDetail,
    products,
    values,
    process,
    engagement,
    testimonials,
    faq,
    cta,
    offices: officesHeader,
  } = home;

  return (
    <>
      {/* Hero */}
      <section className="hero-glow relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <span className="inline-flex items-center rounded-full border border-[#FCA311]/35 bg-[#FCA311]/10 px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.04em] text-[#FCA311]">
                {hero.badge}
              </span>
              <h1 className="mt-6 text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[56px]">
                {hero.headlineBefore}
                <span className="text-[#FCA311]">{hero.headlineAccent}</span>
              </h1>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[#c7cbd4] sm:text-[18px]">
                {hero.body}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/capabilities" className="btn btn-primary btn-primary-lg">
                  {hero.primaryCta}
                  <ArrowRight className="size-[18px]" strokeWidth={2.4} />
                </Link>
                <Link href="/success" className="btn btn-ghost">
                  {hero.secondaryCta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <p className="text-[24px] font-extrabold tracking-tight text-[#FCA311]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[13px] leading-snug text-[#9aa3b5]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="hidden lg:block">
            <HeroOrb />
          </Reveal>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={coreCapabilities.eyebrow}
              headline={coreCapabilities.headline}
              body={coreCapabilities.body}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreCapabilities.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="card-light group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="icon-well transition-colors duration-300 group-hover:bg-[#FCA311]/25">
                    <FeatureIcon title={item.title} />
                  </div>
                  <h3 className="mt-5 text-[17px] font-bold text-[#14213D]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#475569]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities detail */}
      <section className="section bg-black">
        <div className="container">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={capabilitiesDetail.eyebrow}
              headline={capabilitiesDetail.headline}
              body={capabilitiesDetail.body}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilitiesDetail.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.05}
                className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <article className="card-dark group h-full p-6 transition-colors duration-300 hover:border-[#FCA311]/35">
                  <div className="icon-well">
                    <FeatureIcon title={item.title} />
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold text-white">
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

      {/* Products */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={products.eyebrow}
              headline={products.headline}
              body={products.body}
            />
          </Reveal>

          <Reveal className="mt-12">
            <article className="gradient-navy relative overflow-hidden rounded-[24px] border border-[#FCA311]/25 p-8 sm:p-10">
              <div
                className="pointer-events-none absolute -right-20 top-0 size-64 rounded-full bg-[#FCA311]/12 blur-3xl"
                aria-hidden
              />
              <span className="eyebrow">{products.featured.badge}</span>
              <h3 className="mt-4 max-w-2xl text-[26px] font-extrabold tracking-[-0.02em] text-white sm:text-[32px]">
                {products.featured.title}
              </h3>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#c7cbd4] sm:text-[16px]">
                {products.featured.description}
              </p>
              {products.featured.tags ? (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {products.featured.tags.map((tag) => (
                    <li
                      key={tag}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-[#e5e5e5]"
                    >
                      <Check className="size-3.5 text-[#FCA311]" strokeWidth={2.5} />
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </Reveal>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {products.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="card-light group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="icon-well">
                    <FeatureIcon title={item.title} />
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold text-[#14213D]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#475569]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="section bg-black scroll-mt-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={values.eyebrow}
              headline={values.headline}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="card-dark h-full p-6 transition-colors duration-300 hover:border-[#FCA311]/35">
                  <div className="icon-well">
                    <FeatureIcon title={item.title} />
                  </div>
                  <h3 className="mt-5 text-[17px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#9aa3b5]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={process.eyebrow}
              headline={process.headline}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {process.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05}>
                <article className="relative h-full rounded-2xl border border-[#eef0f3] bg-[#fafbfc] p-5 transition-transform duration-300 hover:-translate-y-1">
                  <span className="text-[28px] font-extrabold tracking-tight text-[#FCA311]/40">
                    {step.number}
                  </span>
                  <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.1em] text-[#FCA311]">
                    {step.stepLabel}
                  </p>
                  <h3 className="mt-2 text-[16px] font-bold text-[#14213D]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#475569]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link href="/process" className="btn btn-outline">
              See full process
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Engagement */}
      <section className="section bg-black">
        <div className="container">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={engagement.eyebrow}
              headline={engagement.headline}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagement.items.map((item, i) => (
              <Reveal key={item.number} delay={i * 0.06}>
                <article className="card-dark group h-full p-6 transition-colors duration-300 hover:border-[#FCA311]/35">
                  <span className="text-[13px] font-bold tracking-[0.08em] text-[#FCA311]">
                    {item.number}
                  </span>
                  <div className="icon-well mt-4">
                    <FeatureIcon title={item.title} />
                  </div>
                  <h3 className="mt-5 text-[17px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#9aa3b5]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link href="/engagement" className="btn btn-primary">
              Compare engagement models
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={testimonials.eyebrow}
              headline={testimonials.headline}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.07}>
                <blockquote className="card-light flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
                  <p className="flex-1 text-[15px] leading-relaxed text-[#475569]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-6 flex items-center gap-3 border-t border-[#eef0f3] pt-5">
                    <span className="grid size-11 place-items-center rounded-full bg-[#14213D] text-[13px] font-bold text-[#FCA311]">
                      {item.initials}
                    </span>
                    <div>
                      <cite className="not-italic text-[15px] font-bold text-[#14213D]">
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

      {/* FAQ */}
      <section className="section-sm bg-white pt-0">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={faq.eyebrow}
              headline={faq.headline}
              body={faq.body}
            />
          </Reveal>
          <Reveal className="mx-auto mt-4 max-w-3xl text-center">
            <Link
              href="/consultation"
              className="text-[15px] font-semibold text-[#FCA311] transition-colors hover:text-[#ffb638]"
            >
              {faq.bodyLinkLabel}
              <ArrowRight className="ml-1 inline size-4" />
            </Link>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl">
            <FaqAccordion items={faq.items} />
          </Reveal>
        </div>
      </section>

      <CtaBand cta={cta} />

      {/* Global offices */}
      <section className="section bg-black pt-0">
        <div className="container">
          <Reveal>
            <SectionHeading
              tone="dark"
              headline={officesHeader.headline}
              body={officesHeader.body}
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {offices.map((office, i) => (
              <Reveal key={office.city} delay={i * 0.04}>
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#FCA311]/30">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[16px] font-bold text-white">
                      {office.city}
                    </h3>
                    {office.isHq ? (
                      <span className="rounded-full bg-[#FCA311]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FCA311]">
                        HQ
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#9aa3b5]">
                    {office.address}
                  </p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5f6675]">
                    {office.region}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Skyline />
          </Reveal>
        </div>
      </section>
    </>
  );
}

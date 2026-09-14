"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { home, offices, footer } from "@/lib/content";
import { Reveal, RevealText } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/CtaBand";
import { OrbitalField } from "@/components/OrbitalField";

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
  const [active, setActive] = useState(0);

  const ticker = [...footer.trustedBy, ...footer.trustedBy];

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden pt-28">
        <div className="container grid items-center gap-10 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-8">
          <div>
            <Reveal>
              <p className="eyebrow">Studio / 2026</p>
            </Reveal>
            <h1 className="display mt-6 text-[15vw] text-white sm:text-[80px] lg:text-[96px]">
              <RevealText text="Intelligence" />
              <br />
              <span className="text-[#c51a1b]">
                <RevealText text="without limits." delay={0.18} />
              </span>
            </h1>
            <Reveal delay={0.25}>
              <p className="mt-8 max-w-xl text-[18px] leading-relaxed text-[#8a96a8]">
                {hero.body}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link href="/consultation" data-cursor className="btn btn-primary">
                  {hero.primaryCta}
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link href="/success" data-cursor className="btn btn-ghost">
                  {hero.secondaryCta}
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="hidden lg:block">
            <OrbitalField />
          </Reveal>
        </div>
        <div className="container grid grid-cols-3 gap-px border-t border-white/10 bg-white/5">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="bg-[#05080c] px-4 py-7 sm:px-8">
              <p className="display text-[28px] text-white sm:text-[36px]">
                {stat.value}
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-[#8a96a8]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track py-5">
          {ticker.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="display text-[22px] tracking-[0.2em] text-white/40"
            >
              {name} <span className="mx-4 text-[#c51a1b]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="py-28">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{capabilitiesDetail.eyebrow}</p>
            <h2 className="display mt-5 max-w-4xl text-[42px] text-white sm:text-[64px]">
              {capabilitiesDetail.headline}
            </h2>
          </Reveal>
          <div className="mt-16">
            {capabilitiesDetail.items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                data-cursor
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group w-full border-t border-white/10 py-7 text-left last:border-b"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-baseline gap-6">
                    <span className="text-[13px] text-[#c51a1b]">
                      0{i + 1}
                    </span>
                    <h3 className="display text-[28px] text-white transition-colors group-hover:text-[#c51a1b] sm:text-[40px]">
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className={`max-w-md text-[15px] leading-relaxed text-[#8a96a8] transition-opacity duration-400 ${
                      active === i ? "opacity-100" : "opacity-40 lg:opacity-0"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <Link
            href="/capabilities"
            data-cursor
            className="btn btn-outline mt-12"
          >
            All capabilities
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-white/10 py-28">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{products.eyebrow}</p>
            <h2 className="display mt-5 max-w-3xl text-[42px] text-white sm:text-[64px]">
              {products.headline}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <Reveal className="card-glass relative overflow-hidden p-8 lg:row-span-2 lg:p-12">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#c51a1b]">
                {products.featured.badge}
              </span>
              <h3 className="display mt-6 text-[36px] text-white sm:text-[48px]">
                {products.featured.title}
              </h3>
              <p className="mt-5 text-[16px] leading-relaxed text-[#8a96a8]">
                {products.featured.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {products.featured.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 px-3 py-1 text-[12px] text-[#c9d0da]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
            {products.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} className="card-glass p-8">
                <span className="text-[12px] text-[#004b9c]">0{i + 1}</span>
                <h3 className="display mt-3 text-[24px] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#8a96a8]">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{process.eyebrow}</p>
            <h2 className="display mt-5 text-[42px] text-white sm:text-[64px]">
              {process.headline}
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {process.steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 0.06}
                className="bg-[#05080c] p-6 transition-colors hover:bg-[#081018]"
              >
                <p className="display text-[32px] text-[#c51a1b]">{step.number}</p>
                <h3 className="mt-6 text-[18px] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#8a96a8]">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">{engagement.eyebrow}</p>
            <h2 className="display mt-5 text-[42px] text-white sm:text-[56px]">
              {engagement.headline}
            </h2>
            <Link href="/engagement" data-cursor className="btn btn-ghost mt-8">
              Compare models
            </Link>
          </Reveal>
          <div>
            {engagement.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex gap-6 border-t border-white/10 py-8 last:border-b">
                  <span className="text-[#c51a1b]">{item.number}</span>
                  <div>
                    <h3 className="display text-[26px] text-white">{item.title}</h3>
                    <p className="mt-2 text-[15px] text-[#8a96a8]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-28">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{testimonials.eyebrow}</p>
            <h2 className="display mt-5 text-[42px] text-white sm:text-[64px]">
              {testimonials.headline}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08} className="card-glass p-8">
                <p className="text-[18px] leading-relaxed text-white">
                  “{item.quote}”
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-[#c51a1b] text-[12px] font-bold">
                    {item.initials}
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold">{item.name}</p>
                    <p className="text-[13px] text-[#8a96a8]">{item.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">{faq.eyebrow}</p>
            <h2 className="display mt-5 text-[42px] text-white sm:text-[56px]">
              {faq.headline}
            </h2>
            <p className="mt-5 text-[#8a96a8]">{faq.body}</p>
          </Reveal>
          <FaqAccordion items={faq.items} />
        </div>
      </section>

      <section className="border-t border-white/10 py-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Presence</p>
            <h2 className="display mt-5 text-[42px] text-white">Global offices</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {offices.map((office) => (
              <div key={office.city} className="bg-[#05080c] p-6">
                <p className="display text-[22px] text-white">{office.city}</p>
                <p className="mt-2 text-[13px] text-[#c51a1b]">
                  {office.isHq ? "HQ · " : ""}
                  {office.region}
                </p>
                <p className="mt-3 text-[14px] text-[#8a96a8]">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand cta={cta} />
    </>
  );
}

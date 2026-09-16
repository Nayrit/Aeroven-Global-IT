"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { home, offices, footer } from "@/lib/content";
import { Counter } from "@/components/Kinetic";
import { Reveal, RevealClip, RevealText } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { CapabilityTheater } from "@/components/CapabilityTheater";
import { InteractiveRows } from "@/components/InteractiveRows";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ImageHolder } from "@/components/ImageHolder";
import { Parallax, ScrollScale } from "@/components/Parallax";
import { TiltCard } from "@/components/TiltCard";
import { HorizontalReel } from "@/components/HorizontalReel";

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
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
        <div className="container grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">{hero.badge}</p>
            </Reveal>
            <h1 className="display mt-6 text-[40px] text-[#14171c] sm:text-[56px] lg:text-[68px]">
              <RevealText text={hero.headlineBefore.trim()} />{" "}
              <span className="text-[#c51a1b]">
                <RevealText text={hero.headlineAccent} delay={0.18} />
              </span>
            </h1>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-[#5d6673]">
                {hero.body}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Magnetic strength={0.4}>
                  <Link href="/consultation" className="btn btn-primary">
                    {hero.primaryCta}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.28}>
                  <Link href="/success" className="btn btn-ghost">
                    {hero.secondaryCta}
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
              {hero.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.12 + i * 0.1}>
                  <p className="display text-[26px] text-[#14171c] sm:text-[38px]">
                    <Counter value={stat.value} />
                  </p>
                  <p className="mt-2 text-[12px] text-[#5d6673] sm:text-[13px]">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <RevealClip delay={0.15}>
            <Parallax offset={56}>
              <ImageHolder
                label="Hero image"
                caption="Team / product / delivery atmosphere"
                ratio="hero"
                className="min-h-[320px] sm:min-h-[420px]"
              />
            </Parallax>
          </RevealClip>
        </div>

        {!reduce ? (
          <motion.a
            href="#capabilities"
            className="mt-16 flex flex-col items-center gap-2 text-[#8b93a0]"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
            <ArrowDown className="size-4" />
          </motion.a>
        ) : null}
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

      <div id="capabilities">
        <CapabilityTheater
          eyebrow={capabilitiesDetail.eyebrow}
          headline={capabilitiesDetail.headline}
          items={capabilitiesDetail.items}
          href="/capabilities"
        />
      </div>

      <section className="border-t border-black/10 py-24 sm:py-28">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{products.eyebrow}</p>
            <h2 className="display mt-4 max-w-3xl text-[36px] text-[#14171c] sm:text-[48px]">
              {products.headline}
            </h2>
          </Reveal>

          <ScrollScale className="mt-12">
            <TiltCard className="overflow-hidden border border-black/10 bg-white">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <ImageHolder
                  label="Featured product"
                  caption={products.featured.title}
                  ratio="landscape"
                  className="rounded-none border-0"
                />
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#c51a1b]">
                    {products.featured.badge}
                  </p>
                  <h3 className="display mt-4 text-[28px] text-[#14171c] sm:text-[36px]">
                    {products.featured.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-[#5d6673]">
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
                </div>
              </div>
            </TiltCard>
          </ScrollScale>

          <div className="mt-10">
            <HorizontalReel className="gap-4">
              {products.items.map((item, i) => (
                <TiltCard
                  key={item.title}
                  className="w-[min(320px,78vw)] shrink-0 overflow-hidden border border-black/10 bg-white"
                >
                  <ImageHolder
                    label={`Product 0${i + 1}`}
                    caption={item.title}
                    ratio="card"
                    className="rounded-none border-0"
                  />
                  <div className="p-6">
                    <p className="text-[12px] text-[#004b9c]">0{i + 1}</p>
                    <h3 className="mt-2 text-[18px] font-semibold text-[#14171c]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#5d6673]">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </HorizontalReel>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-24 sm:py-28">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">{process.eyebrow}</p>
              <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[48px]">
                {process.headline}
              </h2>
              <p className="mt-3 text-[14px] text-[#8b93a0]">
                Hover or tap a stage — it opens and shifts.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="mt-8">
              <ImageHolder
                label="Process visual"
                caption="Workshop / architecture / delivery"
                ratio="landscape"
              />
            </Reveal>
          </div>
          <InteractiveRows items={process.steps} layoutId="home-process" />
        </div>
      </section>

      <section className="border-t border-black/10 py-24 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">{engagement.eyebrow}</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[48px]">
              {engagement.headline}
            </h2>
            <Magnetic strength={0.3} className="mt-8">
              <Link href="/engagement" className="btn btn-ghost">
                Compare models
              </Link>
            </Magnetic>
            <div className="mt-10">
              <ImageHolder
                label="Engagement"
                caption="How teams work with Aeroven"
                ratio="portrait"
              />
            </div>
          </Reveal>
          <InteractiveRows items={engagement.items} layoutId="home-engage" />
        </div>
      </section>

      <section className="border-t border-black/10 bg-white py-24 sm:py-28">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{testimonials.eyebrow}</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[48px]">
              {testimonials.headline}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.1}>
                <TiltCard className="h-full overflow-hidden border border-black/10 bg-[#f5f3ee]">
                  <ImageHolder
                    label="Portrait"
                    caption={item.name}
                    ratio="portrait"
                    className="max-h-[220px] rounded-none border-0"
                  />
                  <div className="p-7">
                    <p className="text-[16px] leading-relaxed text-[#14171c]">
                      “{item.quote}”
                    </p>
                    <footer className="mt-6 text-[13px] text-[#5d6673]">
                      {item.name} — {item.role}
                    </footer>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-24 sm:py-28">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Offices</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c]">Global offices</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {offices.map((office, i) => (
              <Reveal key={office.city} delay={i * 0.06}>
                <TiltCard max={6} className="office-card overflow-hidden border border-black/10 bg-white">
                  <ImageHolder
                    label={office.city}
                    caption={office.region}
                    ratio="square"
                    className="rounded-none border-0"
                  />
                  <div className="p-4">
                    <p className="text-[16px] font-semibold text-[#14171c]">{office.city}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#c51a1b]">
                      {office.isHq ? "HQ · " : ""}
                      {office.region}
                    </p>
                    <p className="mt-2 text-[13px] text-[#5d6673]">{office.address}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-24 sm:py-28">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">{faq.eyebrow}</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[48px]">
              {faq.headline}
            </h2>
            <p className="mt-4 text-[#5d6673]">{faq.body}</p>
            <div className="mt-8">
              <ImageHolder
                label="FAQ visual"
                caption="Support / clarity"
                ratio="landscape"
              />
            </div>
          </Reveal>
          <FaqAccordion items={faq.items} />
        </div>
      </section>

      <CtaBand cta={cta} />
    </>
  );
}

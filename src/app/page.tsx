"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
import { Parallax } from "@/components/Parallax";

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
  const featuredOffice = offices[Math.min(2, offices.length - 1)];

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{hero.badge}</p>
          </Reveal>
          <h1 className="display mt-6 max-w-4xl text-[42px] text-[#14171c] sm:text-[60px] lg:text-[72px]">
            <RevealText text={hero.headlineBefore.trim()} />{" "}
            <span className="text-[#c51a1b]">
              <RevealText text={hero.headlineAccent} delay={0.16} />
            </span>
          </h1>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-[#5d6673]">
              {hero.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Magnetic strength={0.32}>
                <Link href="/consultation" className="btn btn-primary">
                  {hero.primaryCta}
                  <ArrowUpRight className="size-4" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.22}>
                <Link href="/success" className="btn btn-ghost">
                  {hero.secondaryCta}
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <RevealClip delay={0.12} className="mt-14 sm:mt-16">
          <div className="container">
            <Parallax offset={48}>
              <ImageHolder
                src="/media/aeroven-hero.jpg"
                alt="Aeroven engineering workspace"
                label="Hero"
                ratio="wide"
                className="min-h-[240px] sm:min-h-[380px] lg:min-h-[460px]"
              />
            </Parallax>
          </div>
        </RevealClip>

        <div className="container mt-12 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
          {hero.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.08 + i * 0.08}>
              <p className="display text-[26px] text-[#14171c] sm:text-[40px]">
                <Counter value={stat.value} />
              </p>
              <p className="mt-2 text-[12px] text-[#5d6673] sm:text-[13px]">{stat.label}</p>
            </Reveal>
          ))}
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

          <Reveal delay={0.08} className="mt-12 overflow-hidden border border-black/10 bg-white">
            <div className="grid lg:grid-cols-2">
              <ImageHolder
                src="/media/aeroven-product.jpg"
                alt={products.featured.title}
                label="Featured product"
                ratio="landscape"
                className="min-h-[260px] rounded-none border-0 lg:min-h-full"
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
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {products.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="border border-black/10 bg-white p-7 transition-colors hover:border-[#c51a1b]/30">
                <p className="text-[12px] text-[#004b9c]">0{i + 1}</p>
                <h3 className="mt-3 text-[20px] font-semibold text-[#14171c]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5d6673]">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-24 sm:py-28">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">{process.eyebrow}</p>
              <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[48px]">
                {process.headline}
              </h2>
              <p className="mt-3 text-[14px] text-[#8b93a0]">Hover a stage to open it.</p>
            </Reveal>
          </div>
          <InteractiveRows items={process.steps} layoutId="home-process" />
        </div>
      </section>

      <section className="border-t border-black/10 py-24 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">{engagement.eyebrow}</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[48px]">
              {engagement.headline}
            </h2>
            <Magnetic strength={0.24} className="mt-8">
              <Link href="/engagement" className="btn btn-ghost">
                Compare models
              </Link>
            </Magnetic>
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
          <div className="mt-12 grid gap-px bg-black/10 lg:grid-cols-3">
            {testimonials.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08} className="bg-white p-8">
                <p className="serif text-[22px] leading-relaxed text-[#14171c]">
                  “{item.quote}”
                </p>
                <footer className="mt-8 text-[13px] text-[#5d6673]">
                  {item.name} — {item.role}
                </footer>
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

          <Reveal delay={0.1} className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ImageHolder
              src="/media/aeroven-office.jpg"
              alt={`${featuredOffice.city} office`}
              label={featuredOffice.city}
              ratio="landscape"
              className="min-h-[280px]"
            />
            <div className="grid content-center gap-0 sm:grid-cols-2">
              {offices.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="border-t border-black/10 py-5 pr-4"
                >
                  <p className="text-[17px] font-semibold text-[#14171c]">{office.city}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#c51a1b]">
                    {office.isHq ? "HQ · " : ""}
                    {office.region}
                  </p>
                  <p className="mt-2 text-[13px] text-[#5d6673]">{office.address}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
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
          </Reveal>
          <FaqAccordion items={faq.items} />
        </div>
      </section>

      <CtaBand cta={cta} />
    </>
  );
}

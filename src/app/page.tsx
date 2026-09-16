"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { home, offices, footer } from "@/lib/content";
import { Counter } from "@/components/Kinetic";
import { Reveal, RevealClip, RevealText, RiseIn } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { CapabilityTheater } from "@/components/CapabilityTheater";
import { InteractiveRows } from "@/components/InteractiveRows";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ImageHolder } from "@/components/ImageHolder";
import { KenBurns, ScrollScale } from "@/components/Parallax";

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
  const featuredOffice = offices[0];
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroFade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
        <motion.div style={{ opacity: heroFade, y: heroY }}>
          <div className="container">
            <RiseIn>
              <p className="eyebrow">{hero.badge}</p>
            </RiseIn>
            <h1 className="display mt-6 max-w-4xl text-[42px] text-[#14171c] sm:text-[60px] lg:text-[72px]">
              <RevealText text={hero.headlineBefore.trim()} />{" "}
              <span className="text-[#c51a1b]">
                <RevealText text={hero.headlineAccent} delay={0.16} />
              </span>
            </h1>
            <RiseIn delay={0.35}>
              <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-[#5d6673]">
                {hero.body}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Magnetic strength={0.42}>
                  <Link href="/consultation" className="btn btn-primary">
                    {hero.primaryCta}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <Link href="/success" className="btn btn-ghost">
                    {hero.secondaryCta}
                  </Link>
                </Magnetic>
              </div>
            </RiseIn>
          </div>

          <RevealClip delay={0.2} className="mt-12 sm:mt-16">
            <div className="container">
              <KenBurns>
                <ImageHolder
                  src="/media/aeroven-hero.jpg"
                  alt="Aeroven engineering workspace"
                  label="Hero"
                  ratio="wide"
                  priority
                  className="min-h-[220px] sm:min-h-[360px] lg:min-h-[440px]"
                />
              </KenBurns>
            </div>
          </RevealClip>

          <div className="container mt-12 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
            {hero.stats.map((stat, i) => (
              <RiseIn key={stat.label} delay={0.45 + i * 0.12}>
                <p className="display text-[28px] text-[#14171c] sm:text-[42px]">
                  <Counter value={stat.value} />
                </p>
                <p className="mt-2 text-[12px] text-[#5d6673] sm:text-[13px]">{stat.label}</p>
              </RiseIn>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#capabilities"
          className="mt-14 flex flex-col items-center gap-2 text-[#8b93a0]"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[11px] uppercase tracking-[0.22em]">Scroll</span>
          <ArrowDown className="size-4" />
        </motion.a>
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
            <article className="overflow-hidden border border-black/10 bg-white">
              <KenBurns>
                <ImageHolder
                  src="/media/aeroven-product.jpg"
                  alt={products.featured.title}
                  label="Featured product"
                  ratio="landscape"
                  className="rounded-none border-0"
                />
              </KenBurns>
              <div className="relative z-[1] bg-white p-8 sm:p-12">
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
              </div>
            </article>
          </ScrollScale>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {products.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="group border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#c51a1b]/35 hover:shadow-[0_22px_44px_rgba(20,23,28,0.07)]"
              >
                <p className="text-[12px] text-[#004b9c]">0{i + 1}</p>
                <h3 className="mt-3 text-[20px] font-semibold text-[#14171c] transition-colors group-hover:text-[#c51a1b]">
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

      <section className="border-t border-black/10 py-24 sm:py-28">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">{process.eyebrow}</p>
              <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[48px]">
                {process.headline}
              </h2>
              <p className="mt-3 text-[14px] text-[#8b93a0]">
                Hover or tap each stage — it opens live.
              </p>
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
            <Magnetic strength={0.32} className="mt-8">
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
              <Reveal key={item.name} delay={i * 0.12} className="bg-white p-8">
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
            <p className="eyebrow">Office</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c]">Our office</h2>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <ScrollScale>
              <KenBurns>
                <ImageHolder
                  src="/media/aeroven-office.jpg"
                  alt={`${featuredOffice.city} office`}
                  label={featuredOffice.city}
                  ratio="landscape"
                  className="min-h-[260px]"
                />
              </KenBurns>
            </ScrollScale>
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-black/10 py-6"
            >
              <p className="text-[22px] font-semibold text-[#14171c]">
                {featuredOffice.city}
              </p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-[#c51a1b]">
                HQ · {featuredOffice.region}
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#5d6673]">
                {featuredOffice.address}
              </p>
            </motion.div>
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
          </Reveal>
          <FaqAccordion items={faq.items} />
        </div>
      </section>

      <CtaBand cta={cta} />
    </>
  );
}

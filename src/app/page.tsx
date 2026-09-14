"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { home, offices, footer, homeValues } from "@/lib/content";
import { KineticLine, Stamp, Counter } from "@/components/Kinetic";
import { Magnetic } from "@/components/Magnetic";
import { CapabilityTheater } from "@/components/CapabilityTheater";
import { ScrollReel } from "@/components/ScrollReel";
import { TiltCard } from "@/components/TiltCard";
import { PinnedProcess } from "@/components/PinnedProcess";
import { QuoteStage } from "@/components/QuoteStage";
import { Constellation } from "@/components/Constellation";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/CtaBand";
import { Scramble } from "@/components/Scramble";

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
  const verbs = [
    "Transform",
    "Compose",
    "Orchestrate",
    "Scale",
    "Secure",
    "Launch",
    "Learn",
    "Operate",
  ];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 50, damping: 20 });
  const y = useSpring(my, { stiffness: 50, damping: 20 });

  return (
    <>
      <section
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-8 pt-24"
        onMouseMove={(e) => {
          mx.set((e.clientX / window.innerWidth - 0.5) * -28);
          my.set((e.clientY / window.innerHeight - 0.5) * -18);
        }}
      >
        <div className="absolute right-[8%] top-[22%] hidden md:block">
          <Magnetic strength={0.2}>
            <Stamp size={150} className="text-white/40" />
          </Magnetic>
        </div>
        <div className="container relative">
          <p className="eyebrow">Studio / 2026</p>
          <motion.h1 style={{ x, y }} className="display mt-6 text-white">
            <span className="block text-[17vw] sm:text-[120px] lg:text-[148px]">
              <KineticLine text="INTELLIGENCE" />
            </span>
            <span className="serif mt-2 block text-[11vw] font-normal text-[#c51a1b] sm:text-[84px] lg:text-[104px]">
              <KineticLine text="without limits." delay={0.22} />
            </span>
          </motion.h1>
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-[18px] leading-relaxed text-[#c9d0da]">
              {hero.body}
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Magnetic>
                <Link href="/consultation" data-cursor="book" className="btn btn-primary">
                  {hero.primaryCta}
                  <ArrowUpRight className="size-4" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/success" data-cursor="view" className="btn btn-ghost">
                  {hero.secondaryCta}
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
        <div className="container mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <p className="display text-[32px] text-white sm:text-[48px]">
                <Counter value={stat.value} />
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-[#8a96a8]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track py-5">
          {[...verbs, ...verbs].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="display text-[32px] tracking-[0.1em] text-white/30 sm:text-[52px]"
            >
              {word} <span className="mx-6 text-[#c51a1b]">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track reverse py-3">
          {ticker.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-[13px] tracking-[0.32em] text-white/35"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <CapabilityTheater
        eyebrow={capabilitiesDetail.eyebrow}
        headline="Five practices. One organism."
        items={capabilitiesDetail.items}
        href="/capabilities"
      />

      <ScrollReel eyebrow={products.eyebrow} title="Scroll the engines.">
        <TiltCard className="card-glass h-[62vh] min-w-[78vw] p-8 sm:min-w-[560px] sm:p-12 lg:min-w-[640px]">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#c51a1b]">
            {products.featured.badge}
          </p>
          <h3 className="display mt-8 text-[36px] text-white sm:text-[48px]">
            {products.featured.title}
          </h3>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#8a96a8]">
            {products.featured.description}
          </p>
        </TiltCard>
        {products.items.map((item, i) => (
          <TiltCard
            key={item.title}
            className="card-glass h-[62vh] min-w-[78vw] p-8 sm:min-w-[480px] sm:p-10 lg:min-w-[520px]"
          >
            <p className="text-[#c51a1b]">0{i + 1}</p>
            <h3 className="display mt-8 text-[32px] text-white sm:text-[40px]">
              {item.title}
            </h3>
            <p className="mt-5 text-[16px] leading-relaxed text-[#8a96a8]">
              {item.description}
            </p>
          </TiltCard>
        ))}
      </ScrollReel>

      <PinnedProcess
        eyebrow={process.eyebrow}
        headline="Hold still. The path moves."
        steps={process.steps}
      />

      <section className="paper relative overflow-hidden py-32">
        <p className="pointer-events-none absolute -left-4 top-10 display text-[22vw] leading-none text-[#05080c]/[0.06]">
          VALUES
        </p>
        <div className="container relative">
          <p className="eyebrow">{homeValues.eyebrow}</p>
          <h2 className="display mt-4 max-w-3xl text-[48px] text-[#05080c] sm:text-[72px]">
            {homeValues.headline}
          </h2>
          <div className="mt-16 grid gap-12 sm:grid-cols-2">
            {homeValues.items.map((item, i) => (
              <article key={item.title} className="border-t border-[#05080c]/10 pt-8" data-cursor>
                <p className="text-[12px] tracking-[0.16em] text-[#c51a1b]">0{i + 1}</p>
                <h3 className="display mt-4 text-[32px] text-[#05080c]">{item.title}</h3>
                <p className="mt-3 text-[16px] text-[#3d4654]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">{engagement.eyebrow}</p>
            <h2 className="display mt-4 text-[40px] text-white sm:text-[56px]">
              How we plug in.
            </h2>
            <Magnetic className="mt-8">
              <Link href="/engagement" data-cursor="open" className="btn btn-ghost">
                Compare models
              </Link>
            </Magnetic>
          </div>
          <div>
            {engagement.items.map((item) => (
              <div
                key={item.title}
                className="group flex gap-6 border-t border-white/10 py-8 last:border-b"
                data-cursor
              >
                <span className="text-[#c51a1b]">{item.number}</span>
                <div>
                  <h3 className="display text-[28px] text-white transition-colors group-hover:text-[#c51a1b]">
                    <Scramble text={item.title} />
                  </h3>
                  <p className="mt-2 text-[15px] text-[#8a96a8]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteStage items={testimonials.items} />

      <section className="border-t border-white/10 py-28">
        <div className="container">
          <p className="eyebrow">Presence</p>
          <h2 className="display mt-4 text-[40px] text-white sm:text-[64px]">
            A constellation, not a campus.
          </h2>
          <div className="mt-14">
            <Constellation offices={offices} />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">{faq.eyebrow}</p>
            <h2 className="display mt-4 text-[40px] text-white sm:text-[56px]">
              {faq.headline}
            </h2>
            <p className="mt-5 text-[#8a96a8]">{faq.body}</p>
          </div>
          <FaqAccordion items={faq.items} />
        </div>
      </section>

      <CtaBand cta={cta} />
    </>
  );
}

"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { home, offices, footer } from "@/lib/content";
import { Counter } from "@/components/Kinetic";
import { RevealText, RiseIn } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { Scramble } from "@/components/Scramble";
import { ScrollReel } from "@/components/ScrollReel";
import { PinnedProcess } from "@/components/PinnedProcess";
import { QuoteStage } from "@/components/QuoteStage";
import { InteractiveRows } from "@/components/InteractiveRows";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ImageHolder } from "@/components/ImageHolder";
import { KenBurns } from "@/components/Parallax";

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
  const office = offices[0];
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  const reelItems = [
    {
      title: products.featured.title,
      body: products.featured.description,
      image: "/media/aeroven-product.jpg",
      tag: products.featured.badge,
    },
    ...products.items.map((item, i) => ({
      title: item.title,
      body: item.description,
      image: i % 2 === 0 ? "/media/aeroven-hero.jpg" : "/media/aeroven-office.jpg",
      tag: `0${i + 1}`,
    })),
  ];

  return (
    <>
      {/* ── HERO: full viewport cinematic ── */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 sm:pb-20"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container relative z-[2]"
        >
          <RiseIn>
            <Scramble
              text={hero.badge}
              className="eyebrow cursor-default"
              as="p"
              auto
            />
          </RiseIn>
          <h1 className="display mt-6 max-w-5xl text-[44px] text-[#14171c] sm:text-[68px] lg:text-[80px]">
            <RevealText text={hero.headlineBefore.trim()} />{" "}
            <span className="text-[#c51a1b]">
              <RevealText text={hero.headlineAccent} delay={0.18} />
            </span>
          </h1>
          <RiseIn delay={0.4}>
            <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-[#5d6673]">
              {hero.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Magnetic strength={0.45}>
                <Link
                  href="/consultation"
                  data-cursor="book"
                  className="btn btn-primary"
                >
                  {hero.primaryCta}
                  <ArrowUpRight className="size-4" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link href="/success" data-cursor="view" className="btn btn-ghost">
                  {hero.secondaryCta}
                </Link>
              </Magnetic>
            </div>
          </RiseIn>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
            {hero.stats.map((stat, i) => (
              <RiseIn key={stat.label} delay={0.55 + i * 0.1}>
                <p className="display text-[28px] text-[#14171c] sm:text-[44px]">
                  <Counter value={stat.value} />
                </p>
                <p className="mt-2 text-[12px] text-[#5d6673]">{stat.label}</p>
              </RiseIn>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ scale: heroScale }}
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[48%] z-[1] overflow-hidden opacity-50"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src="/media/aeroven-hero.jpg"
            alt=""
            className="h-[120%] w-full object-cover"
            style={{ y: heroImgY }}
          />
        </motion.div>

        <motion.a
          href="#capabilities"
          data-cursor="scroll"
          className="relative z-[2] mt-12 flex flex-col items-center gap-2 text-[#8b93a0]"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[11px] uppercase tracking-[0.24em]">Scroll</span>
          <ArrowDown className="size-4" />
        </motion.a>
      </section>

      <div className="marquee relative z-[2]">
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

      {/* ── CAPABILITIES: hover theater ── */}
      <section id="capabilities" className="relative z-[2] border-t border-black/10 bg-[#f5f3ee]/80 py-28 backdrop-blur-[2px]">
        <div className="container">
          <RiseIn>
            <p className="eyebrow">{capabilitiesDetail.eyebrow}</p>
            <h2 className="display mt-4 max-w-3xl text-[36px] text-[#14171c] sm:text-[52px]">
              {capabilitiesDetail.headline}
            </h2>
            <p className="mt-3 text-[14px] text-[#8b93a0]">
              Hover each line — watch the stage respond.
            </p>
          </RiseIn>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <CapabilityHoverList items={capabilitiesDetail.items} />
            <Magnetic strength={0.2} className="mt-4 lg:mt-0">
              <Link href="/capabilities" data-cursor="open" className="btn btn-outline">
                All capabilities
                <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS: horizontal scroll reel ── */}
      <ScrollReel eyebrow={products.eyebrow} title={products.headline}>
        {reelItems.map((card) => (
          <article
            key={card.title}
            data-cursor="drag"
            className="w-[min(78vw,420px)] shrink-0 overflow-hidden border border-black/10 bg-white"
          >
            <ImageHolder
              src={card.image}
              alt={card.title}
              label={card.tag}
              ratio="card"
              className="rounded-none border-0"
            />
            <div className="p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c51a1b]">
                {card.tag}
              </p>
              <h3 className="display mt-3 text-[24px] text-[#14171c]">{card.title}</h3>
              <p className="mt-3 line-clamp-4 text-[14px] leading-relaxed text-[#5d6673]">
                {card.body}
              </p>
            </div>
          </article>
        ))}
      </ScrollReel>

      {/* ── PROCESS: pinned scroll theater ── */}
      <PinnedProcess
        eyebrow={process.eyebrow}
        headline={process.headline}
        steps={process.steps}
      />

      {/* ── ENGAGEMENT ── */}
      <section className="relative z-[2] border-t border-black/10 bg-[#f5f3ee] py-28">
        <div className="container grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">{engagement.eyebrow}</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c] sm:text-[52px]">
              {engagement.headline}
            </h2>
            <Magnetic strength={0.3} className="mt-8">
              <Link href="/engagement" data-cursor="compare" className="btn btn-ghost">
                Compare models
              </Link>
            </Magnetic>
          </div>
          <InteractiveRows items={engagement.items} layoutId="home-engage" />
        </div>
      </section>

      {/* ── QUOTES: click-to-advance stage ── */}
      <QuoteStage items={testimonials.items} />

      {/* ── OFFICE ── */}
      <section className="relative z-[2] border-t border-black/10 py-28">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <KenBurns>
            <ImageHolder
              src="/media/aeroven-office.jpg"
              alt="Dhaka office"
              label="Dhaka"
              ratio="landscape"
              className="min-h-[280px]"
            />
          </KenBurns>
          <div>
            <p className="eyebrow">Office</p>
            <h2 className="display mt-4 text-[36px] text-[#14171c]">Dhaka HQ</h2>
            <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-[#c51a1b]">
              HQ · {office.region}
            </p>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#5d6673]">
              {office.address}
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative z-[2] border-t border-black/10 bg-white/70 py-28 backdrop-blur-sm">
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

      <div className="relative z-[2]">
        <CtaBand cta={cta} />
      </div>
    </>
  );
}

function CapabilityHoverList({
  items,
}: {
  items: readonly { title: string; description: string }[];
}) {
  return (
    <div>
      {items.map((item, i) => (
        <CapabilityRow key={item.title} item={item} index={i} />
      ))}
    </div>
  );
}

function CapabilityRow({
  item,
  index,
}: {
  item: { title: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-t border-black/10 py-7 last:border-b"
      data-cursor="explore"
    >
      <div className="flex items-baseline gap-5">
        <span className="text-[13px] font-semibold text-[#c51a1b]">
          0{index + 1}
        </span>
        <div className="flex-1">
          <Scramble
            text={item.title}
            className="display block text-[22px] text-[#14171c] transition-transform duration-500 group-hover:translate-x-3 sm:text-[28px]"
          />
          <p className="mt-0 max-h-0 overflow-hidden text-[15px] leading-relaxed text-[#5d6673] opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-40 group-hover:opacity-100">
            {item.description}
          </p>
        </div>
      </div>
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c51a1b] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

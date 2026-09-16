"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { SolutionPage } from "@/lib/solutions";
import { solutions } from "@/lib/solutions";
import { ChapterHero } from "@/components/ChapterHero";
import { Reveal } from "@/components/Reveal";
import { ImageHolder } from "@/components/ImageHolder";
import { Magnetic } from "@/components/Magnetic";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { KenBurns } from "@/components/Parallax";

export function SolutionExperience({ solution }: { solution: SolutionPage }) {
  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <ChapterHero
        index={solution.number}
        eyebrow={solution.eyebrow}
        title={solution.title}
        body={solution.summary}
      />

      <section className="pb-16">
        <div className="container">
          <Reveal>
            <KenBurns>
              <ImageHolder
                src={solution.image}
                alt={solution.title}
                label={solution.eyebrow}
                ratio="wide"
                className="min-h-[240px] sm:min-h-[360px]"
              />
            </KenBurns>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 max-w-3xl">
            <p className="text-[17px] leading-relaxed text-[#5d6673] sm:text-[18px]">
              {solution.overview}
            </p>
            <Magnetic strength={0.28} className="mt-8">
              <Link
                href="/consultation"
                data-cursor="book"
                className="btn btn-primary"
              >
                Book a Consultation
                <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white py-20">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Highlights</p>
            <h2 className="display mt-4 text-[32px] text-[#14171c] sm:text-[44px]">
              What you get
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {solution.highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.05}
                className="border border-black/10 p-7 transition-colors hover:border-[#c51a1b]/30"
              >
                <h3 className="text-[18px] font-semibold text-[#14171c]">
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

      {solution.sections.map((section, i) => (
        <section
          key={section.heading}
          className={`border-t border-black/10 py-20 ${
            i % 2 === 1 ? "bg-white" : ""
          }`}
        >
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <h2 className="display text-[28px] text-[#14171c] sm:text-[36px]">
                {section.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-[16px] leading-relaxed text-[#5d6673]">
                {section.body}
              </p>
              {section.bullets ? (
                <ul className="mt-6 space-y-3">
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-[15px] leading-relaxed text-[#14171c]"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-[#c51a1b]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="border-t border-black/10 py-16">
        <div className="container grid grid-cols-1 gap-8 sm:grid-cols-3">
          {solution.outcomes.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <p className="display text-[28px] text-[#14171c] sm:text-[40px]">
                {stat.value}
              </p>
              <p className="mt-2 text-[13px] text-[#5d6673]">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-white py-20">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Stack & practices</p>
            <h2 className="display mt-4 text-[32px] text-[#14171c]">
              How we build it
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {solution.stack.map((item) => (
              <span
                key={item}
                className="border border-black/10 px-4 py-2 text-[13px] text-[#5d6673]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Answers</p>
            <h2 className="display mt-4 text-[32px] text-[#14171c] sm:text-[40px]">
              Frequently asked
            </h2>
          </Reveal>
          <FaqAccordion items={solution.faqs} />
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f5f3ee] py-20">
        <div className="container">
          <Reveal>
            <p className="eyebrow">More solutions</p>
            <h2 className="display mt-4 text-[32px] text-[#14171c]">
              Explore the suite
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {others.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.05}>
                <Link
                  href={`/solutions/${item.slug}`}
                  data-cursor="open"
                  className="group block border border-black/10 bg-white p-6 transition-colors hover:border-[#c51a1b]/35"
                >
                  <p className="text-[12px] text-[#c51a1b]">{item.number}</p>
                  <h3 className="mt-2 text-[18px] font-semibold text-[#14171c] transition-colors group-hover:text-[#c51a1b]">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14px] text-[#5d6673]">
                    {item.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8b93a0] group-hover:text-[#c51a1b]">
                    Open
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand cta={solution.cta} href="/consultation" />
    </>
  );
}

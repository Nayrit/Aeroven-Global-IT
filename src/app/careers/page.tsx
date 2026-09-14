import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { careersPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { Counter } from "@/components/Kinetic";
import { JobsBoard } from "@/components/JobsBoard";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Careers",
  description: careersPage.hero.body,
};

export default function CareersPage() {
  const { hero, life, benefits, openRoles, hiring, cta } = careersPage;

  return (
    <>
      <ChapterHero
        index="05"
        eyebrow={hero.eyebrow}
        title={hero.headline}
        body={hero.body}
      />
      <div className="container flex flex-wrap gap-4 pb-10">
        <Link href="#roles" className="btn btn-primary">
          {hero.primaryCta}
          <ArrowUpRight className="size-4" />
        </Link>
        <Link href="#life" className="btn btn-ghost">
          {hero.secondaryCta}
        </Link>
      </div>
      <div className="container grid grid-cols-3 gap-6 border-y border-black/10 py-10">
        {hero.stats.map((stat) => (
          <div key={stat.label}>
            <p className="display text-[28px] text-[#14171c]">
              <Counter value={stat.value} />
            </p>
            <p className="mt-2 text-[13px] text-[#5d6673]">{stat.label}</p>
          </div>
        ))}
      </div>
      <section id="life" className="scroll-mt-24 py-20">
        <div className="container">
          <p className="eyebrow">{life.eyebrow}</p>
          <h2 className="display mt-4 text-[32px] text-[#14171c]">{life.headline}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {life.items.map((item) => (
              <article key={item.title} className="card p-7">
                <h3 className="text-[20px] font-semibold text-[#14171c]">{item.title}</h3>
                <p className="mt-3 text-[15px] text-[#5d6673]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-black/10 bg-white py-20">
        <div className="container">
          <p className="eyebrow">{benefits.eyebrow}</p>
          <h2 className="display mt-4 text-[32px] text-[#14171c]">{benefits.headline}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.items.map((item) => (
              <article key={item.title}>
                <h3 className="text-[17px] font-semibold text-[#14171c]">{item.title}</h3>
                <p className="mt-2 text-[14px] text-[#5d6673]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="roles" className="scroll-mt-24 py-20">
        <div className="container">
          <p className="eyebrow">{openRoles.eyebrow}</p>
          <h2 className="display mt-4 text-[32px] text-[#14171c]">{openRoles.headline}</h2>
          <div className="mt-10">
            <JobsBoard />
          </div>
        </div>
      </section>
      <section className="border-t border-black/10 py-20">
        <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {hiring.steps.map((step) => (
            <article key={step.number}>
              <p className="text-[22px] font-semibold text-[#c51a1b]">{step.number}</p>
              <h3 className="mt-2 text-[17px] font-semibold text-[#14171c]">{step.title}</h3>
              <p className="mt-2 text-[14px] text-[#5d6673]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

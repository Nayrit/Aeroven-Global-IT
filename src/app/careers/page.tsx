import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { careersPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/SectionHeading";
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
      <PageHero eyebrow={hero.eyebrow} title={hero.headline} body={hero.body} index="05" />
      <div className="container flex flex-wrap gap-4 pb-10">
        <Link href="#roles" data-cursor className="btn btn-primary">
          {hero.primaryCta}
          <ArrowUpRight className="size-4" />
        </Link>
        <Link href="#life" data-cursor className="btn btn-ghost">
          {hero.secondaryCta}
        </Link>
      </div>
      <div className="container grid grid-cols-3 gap-px border-y border-white/10 bg-white/10">
        {hero.stats.map((stat) => (
          <div key={stat.label} className="bg-[#05080c] px-4 py-8">
            <p className="display text-[28px] text-white">{stat.value}</p>
            <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-[#8a96a8]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <section id="life" className="scroll-mt-28 py-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{life.eyebrow}</p>
            <h2 className="display mt-4 text-[40px] text-white">{life.headline}</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {life.items.map((item) => (
              <article key={item.title} className="card-glass p-7">
                <h3 className="display text-[24px] text-white">{item.title}</h3>
                <p className="mt-3 text-[15px] text-[#8a96a8]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 py-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{benefits.eyebrow}</p>
            <h2 className="display mt-4 text-[40px] text-white">{benefits.headline}</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.items.map((item) => (
              <article key={item.title} className="p-2">
                <h3 className="text-[18px] font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-[14px] text-[#8a96a8]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="roles" className="scroll-mt-28 py-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{openRoles.eyebrow}</p>
            <h2 className="display mt-4 text-[40px] text-white">{openRoles.headline}</h2>
          </Reveal>
          <div className="mt-10">
            <JobsBoard />
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 py-24">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hiring.steps.map((step) => (
            <article key={step.number}>
              <p className="display text-[36px] text-[#c51a1b]">{step.number}</p>
              <h3 className="mt-3 text-[18px] font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-[14px] text-[#8a96a8]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

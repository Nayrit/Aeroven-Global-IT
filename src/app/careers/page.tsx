import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { careersPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/SectionHeading";
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
      <section className="hero-glow pb-14 pt-12 sm:pb-16 sm:pt-16">
        <div className="container">
          <Reveal>
            <Breadcrumb current={hero.breadcrumb} />
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 className="mt-4 max-w-4xl text-[34px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-[48px]">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-[#c7cbd4] sm:text-[18px]">
              {hero.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#roles" className="btn btn-primary btn-primary-lg">
                {hero.primaryCta}
                <ArrowRight className="size-[18px]" strokeWidth={2.4} />
              </Link>
              <Link href="#life" className="btn btn-ghost">
                {hero.secondaryCta}
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5"
                >
                  <p className="text-[28px] font-extrabold tracking-tight text-[#FCA311]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[13px] text-[#9aa3b5]">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="life" className="section scroll-mt-24 bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={life.eyebrow}
              headline={life.headline}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {life.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="card-light h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="text-[18px] font-bold text-[#14213D]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-black">
        <div className="container">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={benefits.eyebrow}
              headline={benefits.headline}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="card-dark h-full p-6 transition-colors duration-300 hover:border-[#FCA311]/35">
                  <h3 className="text-[17px] font-bold text-white">
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

      <section id="roles" className="section scroll-mt-24 bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={openRoles.eyebrow}
              headline={openRoles.headline}
            />
          </Reveal>
          <Reveal className="mt-10">
            <JobsBoard />
          </Reveal>
          <Reveal className="mt-8 text-center">
            <p className="text-[15px] text-[#475569]">
              {openRoles.emptyPrompt}{" "}
              <Link
                href="/consultation"
                className="font-semibold text-[#FCA311] transition-colors hover:text-[#ffb638]"
              >
                {openRoles.emptyPromptLinkLabel}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-black">
        <div className="container">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={hiring.eyebrow}
              headline={hiring.headline}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hiring.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05}>
                <article className="card-dark h-full p-6 transition-colors duration-300 hover:border-[#FCA311]/35">
                  <span className="text-[28px] font-extrabold tracking-tight text-[#FCA311]/45">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-[17px] font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#9aa3b5]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand cta={cta} href="/consultation" />
    </>
  );
}

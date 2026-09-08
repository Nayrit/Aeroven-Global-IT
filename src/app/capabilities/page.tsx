import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { capabilitiesPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/SectionHeading";
import { FeatureIcon } from "@/components/FeatureIcon";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Capabilities",
  description: capabilitiesPage.hero.body,
};

export default function CapabilitiesPage() {
  const { hero, items, stats, cta } = capabilitiesPage;

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
            <div className="mt-8 flex flex-wrap gap-2">
              {hero.anchors.map((anchor) => (
                <Link
                  key={anchor.href}
                  href={anchor.href}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[13px] font-semibold text-[#c7cbd4] transition-colors duration-200 hover:border-[#FCA311]/50 hover:text-[#FCA311]"
                >
                  {anchor.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {items.map((cap, index) => {
        const isDark = index % 2 === 0;
        return (
          <section
            key={cap.id}
            id={cap.id}
            className={`section scroll-mt-24 ${isDark ? "bg-black" : "bg-white"}`}
          >
            <div className="container">
              <Reveal>
                <div
                  className={`grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <span className="eyebrow">{cap.number}</span>
                    <h2
                      className={`mt-3 text-[28px] font-extrabold tracking-[-0.02em] sm:text-[36px] ${
                        isDark ? "text-white" : "text-[#14213D]"
                      }`}
                    >
                      {cap.title}
                    </h2>
                    <p
                      className={`mt-4 text-[16px] leading-relaxed ${
                        isDark ? "text-[#c7cbd4]" : "text-[#475569]"
                      }`}
                    >
                      {cap.description}
                    </p>
                  </div>
                  <div
                    className={`rounded-[20px] border p-6 sm:p-8 ${
                      isDark
                        ? "border-white/10 bg-[#14213D]"
                        : "border-[#eef0f3] bg-[#fafbfc]"
                    }`}
                  >
                    <div className="icon-well mb-6">
                      <FeatureIcon title={cap.title} />
                    </div>
                    <ul className="space-y-3">
                      {cap.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-3 text-[15px] ${
                            isDark ? "text-[#e5e5e5]" : "text-[#14213D]"
                          }`}
                        >
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#FCA311]/15">
                            <Check
                              className="size-3 text-[#FCA311]"
                              strokeWidth={3}
                            />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="section-sm bg-white">
        <div className="container">
          <Reveal>
            <div className="grid gap-4 rounded-[24px] border border-[#eef0f3] bg-[#fafbfc] p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-[28px] font-extrabold tracking-tight text-[#FCA311] sm:text-[32px]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[14px] text-[#475569]">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand cta={cta} />
    </>
  );
}

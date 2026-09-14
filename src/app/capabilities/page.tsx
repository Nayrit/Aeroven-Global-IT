import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { capabilitiesPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Capabilities",
  description: capabilitiesPage.hero.body,
};

export default function CapabilitiesPage() {
  const { hero, items, stats, cta } = capabilitiesPage;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.headline} body={hero.body} index="01" />
      <div className="container -mt-8 flex flex-wrap gap-3 pb-16">
        {hero.anchors.map((anchor) => (
          <Link
            key={anchor.href}
            href={anchor.href}
            data-cursor
            className="chip"
          >
            {anchor.label}
          </Link>
        ))}
      </div>
      {items.map((item, i) => (
        <section
          key={item.id}
          id={item.id}
          className={`border-t border-white/10 py-24 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
        >
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#c51a1b]">
                {item.number}
              </p>
              <h2 className="display mt-4 text-[36px] text-white sm:text-[48px]">
                {item.title}
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[#8a96a8]">
                {item.description}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 border-b border-white/10 py-4">
                    <Check className="mt-0.5 size-4 text-[#c51a1b]" />
                    <span className="text-[16px] text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}
      <section className="border-t border-white/10">
        <div className="container grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#05080c] px-6 py-10">
              <p className="display text-[32px] text-white">{stat.value}</p>
              <p className="mt-2 text-[13px] text-[#8a96a8]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

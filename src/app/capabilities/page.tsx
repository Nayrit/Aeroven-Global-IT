import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { capabilitiesPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { Counter } from "@/components/Kinetic";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Capabilities",
  description: capabilitiesPage.hero.body,
};

export default function CapabilitiesPage() {
  const { hero, items, stats, cta } = capabilitiesPage;

  return (
    <>
      <ChapterHero
        index="01"
        eyebrow={hero.eyebrow}
        title={hero.headline}
        body={hero.body}
      />
      <div className="container flex flex-wrap gap-2 pb-12">
        {hero.anchors.map((anchor) => (
          <Link key={anchor.href} href={anchor.href} className="chip">
            {anchor.label}
          </Link>
        ))}
      </div>
      {items.map((item) => (
        <section
          key={item.id}
          id={item.id}
          className="border-t border-black/10 py-16 sm:py-20"
        >
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#c51a1b]">
                {item.number}
              </p>
              <h2 className="display mt-3 text-[32px] text-[#14171c] sm:text-[40px]">
                {item.title}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-[#5d6673]">
                {item.description}
              </p>
            </div>
            <ul>
              {item.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 border-b border-black/10 py-4"
                >
                  <Check className="mt-0.5 size-4 text-[#c51a1b]" />
                  <span className="text-[16px] text-[#14171c]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <section className="border-t border-black/10 py-16">
        <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="display text-[32px] text-[#14171c] sm:text-[40px]">
                <Counter value={stat.value} />
              </p>
              <p className="mt-2 text-[13px] text-[#5d6673]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

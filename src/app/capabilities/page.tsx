import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { capabilitiesPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { MorphScene } from "@/components/MorphScene";
import { Counter } from "@/components/Kinetic";
import { CtaBand } from "@/components/CtaBand";
import { Magnetic } from "@/components/Magnetic";

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
        title="Digital muscle, composed."
        body={hero.body}
      />
      <div className="container -mt-6 flex flex-wrap gap-3 pb-16">
        {hero.anchors.map((anchor) => (
          <Magnetic key={anchor.href}>
            <Link href={anchor.href} data-cursor="jump" className="chip">
              {anchor.label}
            </Link>
          </Magnetic>
        ))}
      </div>
      {items.map((item, i) => (
        <section
          key={item.id}
          id={item.id}
          className="flex min-h-[100svh] items-center border-t border-white/10 py-20"
        >
          <div className="container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[13px] uppercase tracking-[0.2em] text-[#c51a1b]">
                {item.number}
              </p>
              <h2 className="display mt-4 text-[40px] text-white sm:text-[56px]">
                {item.title}
              </h2>
              <p className="serif mt-6 text-[22px] leading-relaxed text-[#c9d0da]">
                {item.description}
              </p>
              <ul className="mt-10 space-y-4">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-1 size-4 text-[#c51a1b]" />
                    <span className="text-[16px] text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <MorphScene
              index={i}
              className="mx-auto aspect-square w-full max-w-[520px] rounded-[48px]"
            />
          </div>
        </section>
      ))}
      <section className="border-t border-white/10 py-16">
        <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="display text-[36px] text-white sm:text-[48px]">
                <Counter value={stat.value} />
              </p>
              <p className="mt-2 text-[13px] text-[#8a96a8]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand cta={cta} />
    </>
  );
}

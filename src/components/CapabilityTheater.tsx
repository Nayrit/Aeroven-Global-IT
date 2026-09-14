"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MorphScene } from "./MorphScene";
import { Magnetic } from "./Magnetic";

type Item = {
  title: string;
  description: string;
};

export function CapabilityTheater({
  eyebrow,
  headline,
  items,
  href,
}: {
  eyebrow: string;
  headline: string;
  items: readonly Item[];
  href?: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative min-h-[100svh] py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-5 max-w-xl text-[40px] text-white sm:text-[56px]">
            {headline}
          </h2>
          <div className="mt-12">
            {items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                data-cursor="view"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex w-full items-baseline gap-5 border-t border-white/10 py-5 text-left last:border-b"
              >
                <span
                  className={`text-[12px] tracking-[0.16em] ${
                    active === i ? "text-[#c51a1b]" : "text-white/30"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`display text-[22px] transition-colors sm:text-[28px] ${
                    active === i ? "text-white" : "text-white/35"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>
          {href ? (
            <Magnetic className="mt-10 inline-flex">
              <Link href={href} data-cursor="open" className="btn btn-outline">
                Enter the studio
                <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
          ) : null}
        </div>
        <div className="relative">
          <MorphScene
            index={active}
            className="aspect-square w-full rounded-[40px]"
          />
          <p className="serif mt-8 max-w-md text-[20px] leading-relaxed text-[#c9d0da]">
            {items[active]?.description}
          </p>
        </div>
      </div>
    </section>
  );
}

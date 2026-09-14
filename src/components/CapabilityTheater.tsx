"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MorphScene } from "./MorphScene";

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
    <section className="py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-4 max-w-xl text-[36px] text-[#14171c] sm:text-[48px]">
            {headline}
          </h2>
          <div className="mt-10">
            {items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="flex w-full items-baseline gap-4 border-t border-black/10 py-5 text-left last:border-b"
              >
                <span
                  className={`text-[12px] ${
                    active === i ? "text-[#c51a1b]" : "text-[#8b93a0]"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`text-[18px] sm:text-[20px] ${
                    active === i ? "font-semibold text-[#14171c]" : "text-[#5d6673]"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            ))}
          </div>
          {href ? (
            <Link href={href} className="btn btn-outline mt-10">
              View capabilities
              <ArrowUpRight className="size-4" />
            </Link>
          ) : null}
        </div>
        <div>
          <MorphScene
            index={active}
            className="aspect-square w-full border border-black/10"
          />
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[#5d6673]">
            {items[active]?.description}
          </p>
        </div>
      </div>
    </section>
  );
}

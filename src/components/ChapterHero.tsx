"use client";

import { useMemo } from "react";
import { KineticLine, Stamp } from "./Kinetic";
import { Magnetic } from "./Magnetic";

export function ChapterHero({
  index,
  eyebrow,
  title,
  body,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  body?: string;
}) {
  const lines = useMemo(() => splitTitle(title), [title]);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32">
      {index ? (
        <span className="pointer-events-none absolute -right-6 top-24 display text-[28vw] leading-none text-white/[0.04] sm:text-[220px]">
          {index}
        </span>
      ) : null}
      <div className="container relative w-full">
        <div className="flex items-start justify-between gap-8">
          <p className="eyebrow">{eyebrow}</p>
          <Magnetic>
            <Stamp size={110} className="text-white/50" />
          </Magnetic>
        </div>
        <h1 className="mt-8">
          {lines.map((line, i) => (
            <span
              key={line}
              className="display block text-[14vw] text-white sm:text-[80px] lg:text-[96px]"
            >
              <KineticLine text={line} delay={i * 0.08} />
            </span>
          ))}
        </h1>
        {body ? (
          <p className="serif mt-8 max-w-2xl text-[20px] leading-relaxed text-[#c9d0da] sm:text-[24px]">
            {body}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function splitTitle(title: string) {
  if (title.length < 28) return [title];
  const words = title.split(" ");
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")].filter(
    Boolean,
  );
}

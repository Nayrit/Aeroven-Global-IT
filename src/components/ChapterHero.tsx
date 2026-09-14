"use client";

import { Reveal, RevealText } from "./Reveal";

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
  return (
    <section className="relative pb-12 pt-32 sm:pb-16 sm:pt-36">
      <div className="container">
        <Reveal>
          <div className="flex items-center justify-between gap-6">
            <p className="eyebrow">{eyebrow}</p>
            {index ? (
              <span className="text-[13px] tracking-[0.14em] text-[#8b93a0]">
                {index}
              </span>
            ) : null}
          </div>
          <h1 className="display mt-5 max-w-4xl text-[36px] text-[#14171c] sm:text-[56px] lg:text-[64px]">
            <RevealText text={title} />
          </h1>
          {body ? (
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#5d6673] sm:text-[19px]">
              {body}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

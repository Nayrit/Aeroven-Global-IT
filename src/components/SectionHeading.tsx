import Link from "next/link";
import { Reveal, RevealText } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  body,
  index,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  index?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div className="container">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <p className="eyebrow">{eyebrow}</p>
            {index ? (
              <span className="display text-[13vw] leading-none text-white/[0.06] sm:text-[80px]">
                {index}
              </span>
            ) : null}
          </div>
          <h1 className="display mt-6 max-w-5xl text-[13vw] text-white sm:text-[72px] lg:text-[92px]">
            <RevealText text={title} />
          </h1>
          {body ? (
            <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[#8a96a8] sm:text-[19px]">
              {body}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <p className="mb-6 text-[12px] uppercase tracking-[0.16em] text-[#8a96a8]">
      <Link href="/" data-cursor className="hover:text-white">
        Home
      </Link>
      <span className="mx-3 text-[#c51a1b]">/</span>
      <span className="text-white">{current}</span>
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  headline,
  body,
  align = "left",
}: {
  eyebrow?: string;
  headline: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <span className="eyebrow mb-4">{eyebrow}</span> : null}
      <h2 className="display mt-3 text-[40px] text-white sm:text-[56px]">{headline}</h2>
      {body ? (
        <p className="mt-5 text-[17px] leading-relaxed text-[#8a96a8]">{body}</p>
      ) : null}
    </div>
  );
}

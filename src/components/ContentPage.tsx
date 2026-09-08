import Link from "next/link";
import { Breadcrumb } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type ContentPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  updated?: string;
  sections: ContentSection[];
  cta?: { label: string; href: string };
};

export function ContentPage({
  eyebrow,
  title,
  description,
  updated,
  sections,
  cta,
}: ContentPageProps) {
  return (
    <>
      <section className="hero-glow section-sm">
        <div className="container max-w-3xl">
          <Reveal>
            <Breadcrumb current={title} />
            {eyebrow ? <span className="eyebrow mb-3">{eyebrow}</span> : null}
            <h1 className="mt-2 text-[34px] font-extrabold tracking-[-0.02em] text-white sm:text-[44px]">
              {title}
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#c7cbd4] sm:text-[18px]">
              {description}
            </p>
            {updated ? (
              <p className="mt-4 text-[13px] text-[#9aa3b5]">
                Last updated: {updated}
              </p>
            ) : null}
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-3xl space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.04}>
              <article>
                <h2 className="text-[22px] font-extrabold text-[#14213D] sm:text-[26px]">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="mt-3 text-[15px] leading-relaxed text-[#475569] sm:text-[16px]"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[15px] leading-relaxed text-[#475569]"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#FCA311]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          ))}

          {cta ? (
            <Reveal>
              <Link href={cta.href} className="btn btn-primary">
                {cta.label}
              </Link>
            </Reveal>
          ) : null}
        </div>
      </section>
    </>
  );
}

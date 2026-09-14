import Link from "next/link";
import { ChapterHero } from "@/components/ChapterHero";
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
      <ChapterHero
        eyebrow={eyebrow ?? "Legal"}
        title={title}
        body={
          updated ? `${description} Last updated ${updated}.` : description
        }
      />
      <section className="pb-28">
        <div className="container max-w-3xl space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.03}>
              <article className="border-t border-black/10 pt-8">
                <h2 className="display text-[24px] text-[#14171c]">{section.heading}</h2>
                {section.paragraphs?.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="mt-3 text-[15px] leading-relaxed text-[#5d6673]"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[15px] leading-relaxed text-[#5d6673]"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#c51a1b]" />
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
              <Link href={cta.href} data-cursor="open" className="btn btn-primary">
                {cta.label}
              </Link>
            </Reveal>
          ) : null}
        </div>
      </section>
    </>
  );
}

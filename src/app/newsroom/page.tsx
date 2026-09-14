import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ChapterHero } from "@/components/ChapterHero";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Newsroom",
  description: `Company news, announcements, and updates from ${siteConfig.name}.`,
  path: routes.newsroom,
  keywords: ["newsroom", "press", "announcements"],
});

const stories = [
  {
    date: "Sep 2026",
    tag: "Company",
    title: "Aeroven expands delivery capacity for AI platform programs",
    summary:
      "New pods focused on applied AI, data platforms, and enterprise integration to support multi-region rollouts.",
    href: routes.blog,
  },
  {
    date: "Aug 2026",
    tag: "Product",
    title: "Inside our modular ERP acceleration approach",
    summary:
      "How we combine discovery workshops with production-ready CI/CD to reach first value in weeks, not quarters.",
    href: routes.process,
  },
  {
    date: "Jul 2026",
    tag: "Culture",
    title: "Hiring across engineering, data, and design in Dhaka",
    summary:
      "Remote-friendly roles with ownership from day one. Explore open positions and our hiring process.",
    href: routes.careers,
  },
];

export default function NewsroomPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Press & updates"
        title="Newsroom"
        body="Announcements, product notes, and company updates from the Aeroven team."
      />
      <section className="pb-28">
        <div className="container">
          {stories.map((story, i) => (
            <Reveal key={story.title} delay={i * 0.05}>
              <article className="group grid gap-6 border-t border-black/10 py-10 last:border-b lg:grid-cols-[140px_1fr_auto] lg:items-start">
                <div className="text-[13px] uppercase tracking-[0.14em] text-[#5d6673]">
                  <p>{story.date}</p>
                  <p className="mt-2 text-[#c51a1b]">{story.tag}</p>
                </div>
                <div>
                  <h2 className="display text-[28px] text-[#14171c] transition-colors group-hover:text-[#c51a1b] sm:text-[36px]">
                    {story.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#5d6673]">
                    {story.summary}
                  </p>
                </div>
                <Link
                  href={story.href}
                  data-cursor
                  className="btn btn-ghost self-start"
                >
                  Read
                  <ArrowUpRight className="size-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand
        cta={{
          headline: "Media or partnership inquiry?",
          body: "Our team will route your request to the right stakeholders.",
          cta: "Contact us",
        }}
        href={routes.support}
      />
    </>
  );
}

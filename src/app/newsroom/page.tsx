import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/SectionHeading";
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
      <section className="hero-glow section-sm">
        <div className="container max-w-3xl">
          <Reveal>
            <Breadcrumb current="Newsroom" />
            <span className="eyebrow mb-3">Press & updates</span>
            <h1 className="mt-2 text-[34px] font-extrabold tracking-[-0.02em] text-white sm:text-[44px]">
              Newsroom
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#c7cbd4] sm:text-[18px]">
              Announcements, product notes, and company updates from the Aeroven
              team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <Reveal>
            <SectionHeading
              align="left"
              headline="Latest stories"
              body="For press inquiries, email hello@aeroven.com."
            />
          </Reveal>
          <div className="mt-10 space-y-4">
            {stories.map((story, i) => (
              <Reveal key={story.title} delay={i * 0.05}>
                <article className="card-light p-6 transition-transform hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#a5670a]">
                    <span>{story.date}</span>
                    <span className="text-[#E5E5E5]">·</span>
                    <span>{story.tag}</span>
                  </div>
                  <h2 className="mt-3 text-[20px] font-bold text-[#14213D]">
                    {story.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#475569]">
                    {story.summary}
                  </p>
                  <Link
                    href={story.href}
                    className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-[#14213D] hover:text-[#FCA311]"
                  >
                    Read more
                    <ArrowRight className="size-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
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

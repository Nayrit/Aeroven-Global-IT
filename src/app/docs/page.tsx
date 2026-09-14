import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ChapterHero } from "@/components/ChapterHero";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Documentation",
  description: `Guides and reference material for working with ${siteConfig.name} — process, engagement, and security practices.`,
  path: routes.docs,
  keywords: ["documentation", "guides", "Aeroven docs"],
});

const docs = [
  {
    index: "01",
    title: "Delivery process overview",
    body: "Five-stage path from discovery workshop to enterprise integration.",
    href: routes.process,
  },
  {
    index: "02",
    title: "Engagement model guide",
    body: "When to choose augmentation, end-to-end build, consulting, or managed services.",
    href: routes.engagement,
  },
  {
    index: "03",
    title: "Security & compliance posture",
    body: "How we approach private-by-design architecture, audits, and controlled delivery.",
    href: `${routes.capabilities}#quality-security`,
  },
  {
    index: "04",
    title: "Legal & policies",
    body: "Privacy Policy, Terms of Service, and Cookies Policy.",
    href: routes.privacy,
  },
];

export default function DocsPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Resources"
        title="The operating manual."
        body="Start here for how Aeroven engages, delivers, and operates production systems."
      />
      <section className="pb-28">
        <div className="container">
          {docs.map((doc, i) => (
            <Reveal key={doc.title} delay={i * 0.05}>
              <Link
                href={doc.href}
                data-cursor="open"
                className="group flex flex-col gap-4 border-t border-white/10 py-10 last:border-b sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-6">
                  <span className="display text-[22px] text-[#c51a1b]">
                    {doc.index}
                  </span>
                  <div>
                    <h2 className="display text-[28px] text-white transition-colors group-hover:text-[#c51a1b] sm:text-[36px]">
                      {doc.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#8a96a8]">
                      {doc.body}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-white/50 group-hover:text-white">
                  Open
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand
        cta={{
          headline: "Need a private technical briefing?",
          body: "We can walk through architecture patterns for your stack.",
          cta: "Book a Consultation",
        }}
        href={routes.consultation}
      />
    </>
  );
}

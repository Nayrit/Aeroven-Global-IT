import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Layers, Shield } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/SectionHeading";
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
    icon: Layers,
    title: "Delivery process overview",
    body: "Five-stage path from discovery workshop to enterprise integration.",
    href: routes.process,
  },
  {
    icon: BookOpen,
    title: "Engagement model guide",
    body: "When to choose augmentation, end-to-end build, consulting, or managed services.",
    href: routes.engagement,
  },
  {
    icon: Shield,
    title: "Security & compliance posture",
    body: "How we approach private-by-design architecture, audits, and controlled delivery.",
    href: `${routes.capabilities}#quality-security`,
  },
  {
    icon: FileText,
    title: "Legal & policies",
    body: "Privacy Policy, Terms of Service, and Cookies Policy.",
    href: routes.privacy,
  },
];

export default function DocsPage() {
  return (
    <>
      <section className="hero-glow section-sm">
        <div className="container max-w-3xl">
          <Reveal>
            <Breadcrumb current="Docs" />
            <span className="eyebrow mb-3">Resources</span>
            <h1 className="mt-2 text-[34px] font-extrabold tracking-[-0.02em] text-white sm:text-[44px]">
              Documentation
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#c7cbd4] sm:text-[18px]">
              Start here for how Aeroven engages, delivers, and operates
              production systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              headline="Browse guides"
              body="Client-facing documentation hubs. Product-specific runbooks are shared after engagement kickoff."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {docs.map((doc, i) => {
              const Icon = doc.icon;
              return (
                <Reveal key={doc.title} delay={i * 0.05}>
                  <Link
                    href={doc.href}
                    className="card-light group flex h-full flex-col p-6 transition-transform hover:-translate-y-0.5"
                  >
                    <div className="icon-well">
                      <Icon className="size-5" />
                    </div>
                    <h2 className="mt-5 text-[18px] font-bold text-[#14213D] group-hover:text-[#FCA311]">
                      {doc.title}
                    </h2>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#475569]">
                      {doc.body}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-[#14213D]">
                      Open
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
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

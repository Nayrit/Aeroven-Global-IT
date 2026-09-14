import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Aeroven",
  description: `Learn about ${siteConfig.name} — our mission, values, and approach to AI-powered digital transformation.`,
  path: routes.about,
  keywords: ["about Aeroven", "company", "mission"],
});

const pillars = [
  {
    title: "Mission",
    body: `${siteConfig.tagline} We help organizations modernize core systems, ship intelligent products, and operate reliably at global scale.`,
  },
  {
    title: "How we work",
    body: "Discover early, ship in increments, secure by default, and own the outcome — from first workshop through production support.",
  },
  {
    title: "Global footprint",
    body: "Delivery presence across San Francisco, New York, London, Munich, Bengaluru, and Dhaka — supporting clients worldwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Engineering digital platforms that scale"
        body={`${siteConfig.name} partners with startups and enterprises to design, build, and operate AI-powered software — from discovery through production.`}
      />
      <section className="pb-16">
        <div className="container flex flex-wrap gap-4">
          <Link href={routes.capabilities} data-cursor className="btn btn-primary">
            Our capabilities
            <ArrowUpRight className="size-4" />
          </Link>
          <Link href={routes.careers} data-cursor className="btn btn-ghost">
            Careers
          </Link>
        </div>
      </section>
      <section className="border-t border-white/10 py-24">
        <div className="container grid gap-8 md:grid-cols-3">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <h2 className="display text-[28px] text-white">{item.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#8a96a8]">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand
        cta={{
          headline: "Ready to build with Aeroven?",
          body: "Talk with our architects about your roadmap, stack, and timeline.",
          cta: "Book a Consultation",
        }}
        href={routes.consultation}
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/SectionHeading";
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
      <section className="hero-glow section-sm">
        <div className="container max-w-3xl">
          <Reveal>
            <Breadcrumb current="About" />
            <span className="eyebrow mb-3">Company</span>
            <h1 className="mt-2 text-[34px] font-extrabold tracking-[-0.02em] text-white sm:text-[44px]">
              Engineering digital platforms that scale
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#c7cbd4] sm:text-[18px]">
              {siteConfig.name} partners with startups and enterprises to design,
              build, and operate AI-powered software — from discovery through
              production.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={routes.capabilities} className="btn btn-primary">
                Our capabilities
                <ArrowRight className="size-4" />
              </Link>
              <Link href={routes.careers} className="btn btn-ghost">
                Careers
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              headline="What we stand for"
              body="We combine product thinking, rigorous engineering, and operational discipline so digital investments compound over time."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="card-light h-full p-6">
                  <h2 className="text-[18px] font-bold text-[#14213D]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-wrap gap-4">
            <Link href={routes.process} className="btn btn-outline">
              Our process
            </Link>
            <Link href={routes.success} className="btn btn-outline">
              Client success
            </Link>
            <Link href={routes.newsroom} className="btn btn-outline">
              Newsroom
            </Link>
          </Reveal>
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

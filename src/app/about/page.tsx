import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { ChapterHero } from "@/components/ChapterHero";
import { Constellation } from "@/components/Constellation";
import { Magnetic } from "@/components/Magnetic";
import { offices } from "@/lib/content";
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
      <ChapterHero
        eyebrow="Company"
        title="A studio for intelligent systems."
        body={`${siteConfig.name} partners with startups and enterprises to design, build, and operate AI-powered software — from discovery through production.`}
      />
      <section className="pb-16">
        <div className="container flex flex-wrap gap-4">
          <Magnetic>
            <Link href={routes.capabilities} data-cursor="open" className="btn btn-primary">
              Our capabilities
              <ArrowUpRight className="size-4" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href={routes.careers} data-cursor className="btn btn-ghost">
              Careers
            </Link>
          </Magnetic>
        </div>
      </section>
      <section className="paper py-28">
        <div className="container grid gap-12 md:grid-cols-3">
          {pillars.map((item) => (
            <article key={item.title}>
              <h2 className="display text-[32px] text-[#05080c]">{item.title}</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-[#3d4654]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="py-28">
        <div className="container">
          <p className="eyebrow">Presence</p>
          <h2 className="display mt-4 text-[40px] text-white sm:text-[56px]">
            Hover the world.
          </h2>
          <div className="mt-14">
            <Constellation offices={offices} />
          </div>
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

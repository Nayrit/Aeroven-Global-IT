import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { ChapterHero } from "@/components/ChapterHero";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { ImageHolder } from "@/components/ImageHolder";
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
        title="Engineering digital platforms that scale"
        body={`${siteConfig.name} partners with startups and enterprises to design, build, and operate AI-powered software — from discovery through production.`}
      />
      <section className="pb-12">
        <div className="container flex flex-wrap gap-4">
          <Magnetic strength={0.16}>
            <Link href={routes.capabilities} className="btn btn-primary">
              Our capabilities
              <ArrowUpRight className="size-4" />
            </Link>
          </Magnetic>
          <Magnetic strength={0.12}>
            <Link href={routes.careers} className="btn btn-ghost">
              Careers
            </Link>
          </Magnetic>
        </div>
      </section>
      <section className="border-t border-black/10 bg-white py-20">
        <div className="container grid gap-10 md:grid-cols-3">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <h2 className="display text-[26px] text-[#14171c]">{item.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5d6673]">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Offices</p>
            <h2 className="display mt-4 text-[32px] text-[#14171c]">Global offices</h2>
          </Reveal>
          <Reveal className="mt-10 overflow-hidden border border-black/10">
            <ImageHolder
              src="/media/aeroven-office.jpg"
              alt="Aeroven office"
              label="Office"
              ratio="wide"
              className="rounded-none border-0"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {offices.map((office, i) => (
              <Reveal key={office.city} delay={i * 0.05}>
                <div className="office-card border-t border-black/10 pt-5">
                  <p className="font-semibold text-[#14171c]">{office.city}</p>
                  <p className="mt-1 text-[12px] text-[#c51a1b]">
                    {office.isHq ? "HQ · " : ""}
                    {office.region}
                  </p>
                  <p className="mt-2 text-[14px] text-[#5d6673]">{office.address}</p>
                </div>
              </Reveal>
            ))}
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

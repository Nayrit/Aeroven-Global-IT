import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/lib/solutions";
import { ChapterHero } from "@/components/ChapterHero";
import { Reveal } from "@/components/Reveal";
import { ImageHolder } from "@/components/ImageHolder";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Products & Solutions",
  description:
    "Explore Aeroven’s business engines — custom AI-powered ERP, technology consulting, WMS, HRMS, and omnichannel commerce.",
  path: "/solutions",
  keywords: ["ERP", "WMS", "HRMS", "commerce", "consulting"],
});

export default function SolutionsIndexPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Products & Solutions"
        title="Next-generation business engines built for scale"
        body="Modular, scalable platforms designed to unify business functions and accelerate mission-critical operations. Open any suite for capabilities, delivery approach, and FAQs."
      />

      <section className="pb-24">
        <div className="container grid gap-6 md:grid-cols-2">
          {solutions.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.05}>
              <Link
                href={`/solutions/${item.slug}`}
                data-cursor="open"
                className="group flex h-full flex-col overflow-hidden border border-black/10 bg-white transition-colors hover:border-[#c51a1b]/40"
              >
                <ImageHolder
                  src={item.image}
                  alt={item.title}
                  label={item.number}
                  ratio="card"
                  className="rounded-none border-0"
                />
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c51a1b]">
                    {item.eyebrow}
                  </p>
                  <h2 className="display mt-3 text-[24px] text-[#14171c] transition-colors group-hover:text-[#c51a1b]">
                    {item.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#5d6673]">
                    {item.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8b93a0] group-hover:text-[#c51a1b]">
                    Explore
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        cta={{
          headline: "Not sure which suite fits?",
          body: "Book a consultation — we will map your operating model to the right modules and engagement shape.",
          cta: "Book a Consultation",
        }}
      />
    </>
  );
}

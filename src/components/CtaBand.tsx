"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CtaBlock } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { ImageHolder } from "./ImageHolder";

export function CtaBand({
  cta,
  href = "/consultation",
}: {
  cta: CtaBlock;
  href?: string;
}) {
  return (
    <section className="band-dark overflow-hidden py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="eyebrow">Next step</p>
          <h2 className="display mt-5 max-w-3xl text-[36px] sm:text-[52px]">
            <RevealText text={cta.headline} />
          </h2>
          {cta.body ? (
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#9aa3b0]">
              {cta.body}
            </p>
          ) : null}
          <Magnetic strength={0.38} className="mt-10 inline-flex">
            <Link href={href} className="btn btn-primary">
              {cta.cta}
              <ArrowUpRight className="size-4" />
            </Link>
          </Magnetic>
        </Reveal>
        <Reveal delay={0.12}>
          <ImageHolder
            label="CTA image"
            caption="Consultation / architecture session"
            ratio="square"
            className="border-white/20 bg-[#171c24] [&_.image-holder-grid]:opacity-40"
          />
        </Reveal>
      </div>
    </section>
  );
}

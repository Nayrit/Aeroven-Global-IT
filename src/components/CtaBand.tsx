"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CtaBlock } from "@/lib/content";
import { RevealText } from "./Reveal";
import { Magnetic } from "./Magnetic";

export function CtaBand({
  cta,
  href = "/consultation",
}: {
  cta: CtaBlock;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,26,27,0.22),transparent_58%)]" />
      <div className="container relative">
        <p className="eyebrow">Next</p>
        <h2 className="display mt-6 max-w-5xl text-[14vw] text-white sm:text-[80px] lg:text-[96px]">
          <RevealText text={cta.headline} />
        </h2>
        {cta.body ? (
          <p className="serif mt-8 max-w-xl text-[22px] leading-relaxed text-[#c9d0da]">
            {cta.body}
          </p>
        ) : null}
        <Magnetic className="mt-12">
          <Link href={href} data-cursor="book" className="btn btn-primary">
            {cta.cta}
            <ArrowUpRight className="size-4" />
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}

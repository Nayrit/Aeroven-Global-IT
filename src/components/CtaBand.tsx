"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CtaBlock } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";
import { Magnetic } from "./Magnetic";

export function CtaBand({
  cta,
  href = "/consultation",
}: {
  cta: CtaBlock;
  href?: string;
}) {
  return (
    <section className="band-dark py-24 sm:py-28">
      <div className="container max-w-3xl">
        <Reveal>
          <p className="eyebrow">Next step</p>
          <h2 className="display mt-5 text-[36px] sm:text-[52px]">
            <RevealText text={cta.headline} />
          </h2>
          {cta.body ? (
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#9aa3b0]">
              {cta.body}
            </p>
          ) : null}
          <Magnetic strength={0.3} className="mt-10 inline-flex">
            <Link href={href} className="btn btn-primary">
              {cta.cta}
              <ArrowUpRight className="size-4" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

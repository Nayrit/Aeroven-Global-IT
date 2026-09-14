"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CtaBlock } from "@/lib/content";
import { Reveal } from "./Reveal";

export function CtaBand({
  cta,
  href = "/consultation",
}: {
  cta: CtaBlock;
  href?: string;
}) {
  return (
    <section className="band-dark py-24">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Next step</p>
          <h2 className="display mt-5 max-w-3xl text-[36px] sm:text-[52px]">
            {cta.headline}
          </h2>
          {cta.body ? (
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#9aa3b0]">
              {cta.body}
            </p>
          ) : null}
          <Link href={href} className="btn btn-primary mt-10">
            {cta.cta}
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

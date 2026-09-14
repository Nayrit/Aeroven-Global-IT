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
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,26,27,0.18),transparent_60%)]" />
      <div className="container relative">
        <Reveal>
          <p className="eyebrow">Next</p>
          <h2 className="display mt-6 max-w-4xl text-[14vw] text-white sm:text-[72px] lg:text-[88px]">
            {cta.headline}
          </h2>
          {cta.body ? (
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#8a96a8]">
              {cta.body}
            </p>
          ) : null}
          <Link href={href} data-cursor className="btn btn-primary mt-10">
            {cta.cta}
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

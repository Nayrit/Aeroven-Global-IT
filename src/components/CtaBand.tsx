import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CtaBlock } from "@/lib/content";
import { Reveal } from "./Reveal";

type CtaBandProps = {
  cta: CtaBlock;
  href?: string;
};

export function CtaBand({ cta, href = "/consultation" }: CtaBandProps) {
  return (
    <section className="section bg-black">
      <div className="container">
        <Reveal>
          <div className="gradient-navy relative overflow-hidden rounded-[24px] border border-[#FCA311]/28 px-8 py-12 sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[#FCA311]/15 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-white sm:text-[36px]">
                  {cta.headline}
                </h2>
                {cta.body ? (
                  <p className="mt-3 text-[16px] leading-relaxed text-[#c7cbd4]">
                    {cta.body}
                  </p>
                ) : null}
              </div>
              <Link href={href} className="btn btn-primary btn-primary-lg shrink-0">
                {cta.cta}
                <ArrowRight className="size-[18px]" strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

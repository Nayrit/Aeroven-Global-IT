import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { routes } from "@/lib/site";
import { Magnetic } from "@/components/Magnetic";
import { Reveal, RevealText } from "@/components/Reveal";

export default function NotFound() {
  return (
    <section className="pb-24 pt-40">
      <div className="container">
        <Reveal>
          <p className="eyebrow">404</p>
          <h1 className="display mt-4 text-[48px] text-[#14171c] sm:text-[72px]">
            <RevealText text="Page not found" />
          </h1>
          <p className="mt-5 max-w-md text-[17px] text-[#5d6673]">
            The page you are looking for does not exist or may have moved.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Magnetic strength={0.16}>
              <Link href={routes.home} className="btn btn-primary">
                Back to home
                <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.12}>
              <Link href={routes.support} className="btn btn-ghost">
                Contact support
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

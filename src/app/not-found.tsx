import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="hero-glow flex min-h-[70vh] items-center">
      <div className="container max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-[40px] font-extrabold tracking-[-0.03em] text-white">
          Page not found
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-[#c7cbd4]">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href={routes.home} className="btn btn-primary">
            Back to home
            <ArrowRight className="size-4" />
          </Link>
          <Link href={routes.support} className="btn btn-ghost">
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}

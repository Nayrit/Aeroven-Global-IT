import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-end pb-24 pt-40">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-[16vw] text-white sm:text-[120px]">Lost in orbit.</h1>
        <p className="mt-6 max-w-md text-[17px] text-[#8a96a8]">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={routes.home} data-cursor className="btn btn-primary">
            Back to home
            <ArrowUpRight className="size-4" />
          </Link>
          <Link href={routes.support} data-cursor className="btn btn-ghost">
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}

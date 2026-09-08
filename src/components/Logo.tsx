import Link from "next/link";
import { brand } from "@/lib/content";

type LogoProps = {
  className?: string;
  /** Rendered height in pixels */
  height?: number;
};

/**
 * Official Aeroven lockup (mark + wordmark).
 * Brand colors are designed for dark backgrounds.
 */
export function Logo({ className = "", height = 32 }: LogoProps) {
  const width = Math.round(height * (790.23 / 80.6));

  return (
    <Link
      href="/"
      aria-label={brand.legalName}
      className="inline-flex items-center shrink-0 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FCA311]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/aeroven-it.svg"
        alt={brand.legalName}
        width={width}
        height={height}
        style={{ height, width: "auto", maxWidth: "min(280px, 55vw)" }}
        className={className}
        decoding="async"
      />
    </Link>
  );
}

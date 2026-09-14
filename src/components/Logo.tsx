import Link from "next/link";
import { brand } from "@/lib/content";

export function Logo({ height = 28 }: { height?: number }) {
  const width = Math.round(height * (790.23 / 80.6));

  return (
    <Link
      href="/"
      aria-label={brand.legalName}
      className="inline-flex items-center"
      data-cursor
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/aeroven-it.svg"
        alt={brand.legalName}
        width={width}
        height={height}
        style={{ height, width: "auto", maxWidth: "min(240px, 58vw)" }}
        decoding="async"
      />
    </Link>
  );
}

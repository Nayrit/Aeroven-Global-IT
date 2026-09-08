import Link from "next/link";
import { brand } from "@/lib/content";

type LogoProps = {
  className?: string;
  height?: number;
  onDark?: boolean;
};

export function Logo({
  className = "h-5 w-auto sm:h-6",
  height = 24,
  onDark = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={brand.legalName}
      className={`inline-flex items-center shrink-0 rounded-lg px-2.5 py-1.5 transition-opacity hover:opacity-90 ${
        onDark ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/aeroven-it.svg"
        alt={brand.legalName}
        height={height}
        className={className}
      />
    </Link>
  );
}

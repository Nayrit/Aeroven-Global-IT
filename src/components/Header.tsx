"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { brand, nav } from "@/lib/content";

type HeaderProps = {
  ctaHref?: string;
  ctaLabel?: string;
};

export function Header({
  ctaHref = "/consultation",
  ctaLabel = nav.cta,
}: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [...nav.links, nav.careersLink];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-white/10 bg-black/90 backdrop-blur-xl"
          : "border-transparent bg-black"
      }`}
    >
      <div className="container flex items-center justify-between gap-6 py-[18px]">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/brand/aeroven-it.svg"
            alt={brand.legalName}
            width={180}
            height={22}
            className="h-6 w-auto brightness-0 invert"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              data-active={pathname === link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={ctaHref} className="btn btn-primary hidden sm:inline-flex">
            {ctaLabel}
            <ArrowRight className="size-4" strokeWidth={2.4} />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden grid place-items-center size-10 rounded-full border border-white/15 text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black">
          <nav className="container flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-[15px] font-medium text-[#c7cbd4] transition-colors hover:bg-white/5 hover:text-[#FCA311]"
                data-active={pathname === link.href}
                style={
                  pathname === link.href ? { color: "#FCA311" } : undefined
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              className="btn btn-primary mt-3 w-full"
            >
              {ctaLabel}
              <ArrowRight className="size-4" strokeWidth={2.4} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

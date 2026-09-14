import Link from "next/link";
import { brand, footer, nav } from "@/lib/content";
import { footerLinks, siteConfig } from "@/lib/site";
import { Logo } from "./Logo";

function Column({
  title,
  links,
}: {
  title: string;
  links: readonly string[];
}) {
  return (
    <div>
      <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#c51a1b]">
        {title}
      </p>
      <ul className="space-y-2.5">
        {links.map((label) => (
          <li key={label}>
            <Link
              href={footerLinks[label] ?? "/"}
              className="footer-link text-[14px] text-[#9aa3b0] hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0f141c] text-[#f4f1ea]">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Logo height={26} />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-[#9aa3b0]">
              {brand.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {footer.social.map((item) => {
                const href =
                  siteConfig.social[item as keyof typeof siteConfig.social];
                if (!href) return null;
                return (
                  <a
                    key={item}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link text-[12px] text-[#9aa3b0] hover:text-white"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
          <Column title={footer.company.title} links={footer.company.links} />
          <Column title={footer.explore.title} links={footer.explore.links} />
          <Column title={footer.resources.title} links={footer.resources.links} />
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#6b7380]">{brand.copyright}</p>
          <div className="flex flex-wrap gap-5">
            {footer.legal.map((item) => (
              <Link
                key={item}
                href={footerLinks[item] ?? "/"}
                className="footer-link text-[13px] text-[#6b7380] hover:text-white"
              >
                {item}
              </Link>
            ))}
            <Link
              href={nav.careersLink.href}
              className="footer-link text-[13px] text-[#6b7380] hover:text-white"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

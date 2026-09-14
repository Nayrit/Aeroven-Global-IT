import Link from "next/link";
import { brand, footer, nav } from "@/lib/content";
import { footerLinks, siteConfig } from "@/lib/site";
import { Logo } from "./Logo";
import { Stamp } from "./Kinetic";

function Column({
  title,
  links,
}: {
  title: string;
  links: readonly string[];
}) {
  return (
    <div>
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c51a1b]">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((label) => (
          <li key={label}>
            <Link
              href={footerLinks[label] ?? "/"}
              data-cursor
              className="text-[15px] text-[#8a96a8] transition-colors hover:text-white"
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
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-[#05080c]">
      <div className="container flex items-end justify-between gap-8 py-16">
        <p className="display max-w-[12ch] text-[16vw] leading-[0.8] text-white sm:text-[96px]">
          Let’s build.
        </p>
        <Stamp size={140} className="hidden text-white/40 sm:block" />
      </div>
      <div className="container pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo height={28} />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-[#8a96a8]">
              {brand.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
                    data-cursor
                    className="text-[12px] uppercase tracking-[0.14em] text-[#8a96a8] hover:text-[#c51a1b]"
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
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#5c6778]">{brand.copyright}</p>
          <div className="flex flex-wrap gap-5">
            {footer.legal.map((item) => (
              <Link
                key={item}
                href={footerLinks[item] ?? "/"}
                data-cursor
                className="text-[13px] text-[#5c6778] hover:text-white"
              >
                {item}
              </Link>
            ))}
            <Link
              href={nav.careersLink.href}
              data-cursor
              className="text-[13px] text-[#5c6778] hover:text-white"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { brand, footer, nav } from "@/lib/content";
import { Logo } from "./Logo";

const footerLinkMap: Record<string, string> = {
  About: "/#values",
  Careers: "/careers",
  Newsroom: "/success",
  Contact: "/consultation",
  "AI Engineering": "/capabilities",
  Cloud: "/capabilities#cloud-devops",
  Data: "/capabilities#data-applied-ai",
  Strategy: "/engagement",
  "Digital Transformation": "/capabilities#digital-transformation",
  "Cloud & DevOps": "/capabilities#cloud-devops",
  "Data & Applied AI": "/capabilities#data-applied-ai",
  "Quality & Security": "/capabilities#quality-security",
  Capabilities: "/capabilities",
  Process: "/process",
  Engagement: "/engagement",
  Success: "/success",
  "Case Studies": "/success",
  Blog: "/success",
  Docs: "/process",
  Support: "/consultation",
  "Privacy Policy": "/consultation",
  "Terms of Service": "/consultation",
  Cookies: "/consultation",
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly string[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((label) => (
          <li key={label}>
            <Link
              href={footerLinkMap[label] ?? "/"}
              className="text-[14px] text-[#7c8494] transition-colors hover:text-[#FCA311]"
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
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo className="h-7 w-auto" height={28} />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#9aa3b5]">
              {brand.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {footer.social.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-[12px] font-medium text-[#7c8494]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <FooterColumn title={footer.company.title} links={footer.company.links} />
          <FooterColumn title={footer.explore.title} links={footer.explore.links} />
          <FooterColumn
            title={footer.resources.title}
            links={footer.resources.links}
          />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#5f6675]">{brand.copyright}</p>
          <div className="flex flex-wrap gap-4">
            {footer.legal.map((item) => (
              <Link
                key={item}
                href={footerLinkMap[item] ?? "/"}
                className="text-[13px] text-[#5f6675] transition-colors hover:text-[#FCA311]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5f6675]">
            {footer.trustedByLabel}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.trustedBy.map((name) => (
              <span
                key={name}
                className="text-[13px] font-semibold tracking-[0.08em] text-[#94a0b0]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-[13px] text-[#5f6675]">
          <Link href={nav.careersLink.href} className="hover:text-[#FCA311]">
            {nav.careersLink.label}
          </Link>
          <Link href="/consultation" className="hover:text-[#FCA311]">
            Book a Consultation
          </Link>
        </div>
      </div>
    </footer>
  );
}

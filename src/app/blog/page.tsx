import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ChapterHero } from "@/components/ChapterHero";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: `Engineering notes, architecture guidance, and delivery insights from ${siteConfig.name}.`,
  path: routes.blog,
  keywords: ["blog", "engineering blog", "AI architecture"],
});

const posts = [
  {
    category: "Architecture",
    title: "Derisking AI programs before the first sprint",
    excerpt:
      "A practical feasibility checklist covering data readiness, model fit, latency budgets, and compliance constraints.",
    href: routes.process,
  },
  {
    category: "Cloud",
    title: "CI/CD patterns that survive enterprise change control",
    excerpt:
      "How we keep release velocity high without sacrificing auditability across multi-cloud environments.",
    href: routes.capabilities,
  },
  {
    category: "Delivery",
    title: "Choosing between augmentation and end-to-end build",
    excerpt:
      "A comparison of engagement models and when each creates the most leverage for your team.",
    href: routes.engagement,
  },
  {
    category: "Security",
    title: "Private-by-design defaults for regulated industries",
    excerpt:
      "Encryption, residency, logging, and access patterns we apply for healthcare and financial workloads.",
    href: routes.docs,
  },
];

export default function BlogPage() {
  return (
    <>
      <ChapterHero
        eyebrow="Insights"
        title="Notes from the machine."
        body="Practical writing on AI systems, cloud platforms, and enterprise delivery from Aeroven engineers."
      />
      <section className="pb-28">
        <div className="container">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.04}>
              <Link
                href={post.href}
                data-cursor="read"
                className="group grid gap-4 border-t border-white/10 py-10 last:border-b lg:grid-cols-[180px_1fr_auto] lg:items-center"
              >
                <span className="text-[12px] uppercase tracking-[0.18em] text-[#c51a1b]">
                  {post.category}
                </span>
                <div>
                  <h2 className="display text-[26px] text-white transition-colors group-hover:text-[#c51a1b] sm:text-[34px]">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#8a96a8]">
                    {post.excerpt}
                  </p>
                </div>
                <ArrowUpRight className="size-6 text-white/30 transition-all group-hover:text-[#c51a1b] group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand
        cta={{
          headline: "Want a working session, not another article?",
          body: "Book a consultation with our architects.",
          cta: "Book a Consultation",
        }}
        href={routes.consultation}
      />
    </>
  );
}

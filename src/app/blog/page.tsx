import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb, SectionHeading } from "@/components/SectionHeading";
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
      <section className="hero-glow section-sm">
        <div className="container max-w-3xl">
          <Reveal>
            <Breadcrumb current="Blog" />
            <span className="eyebrow mb-3">Insights</span>
            <h1 className="mt-2 text-[34px] font-extrabold tracking-[-0.02em] text-white sm:text-[44px]">
              Blog
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#c7cbd4] sm:text-[18px]">
              Practical writing on AI systems, cloud platforms, and enterprise
              delivery from Aeroven engineers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              headline="Featured reading"
              body="Deep dives tied to how we actually ship — not generic thought leadership."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.05}>
                <article className="card-light flex h-full flex-col p-6">
                  <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#FCA311]">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-[20px] font-bold text-[#14213D]">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#475569]">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.href}
                    className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-[#14213D] hover:text-[#FCA311]"
                  >
                    Continue
                    <ArrowRight className="size-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
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

"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ChapterHero } from "@/components/ChapterHero";
import { Magnetic } from "@/components/Magnetic";
import { routes, siteConfig } from "@/lib/site";

const topics = [
  "Billing & contracts",
  "Technical support",
  "Careers",
  "Press",
  "Other",
] as const;

export function SupportClient() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState<(typeof topics)[number]>("Technical support");
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const faqs = [
      {
        q: "How fast do you respond?",
        a: "Critical production issues for managed clients target under two hours. New consultation requests typically receive a reply within one business day.",
      },
      {
        q: "Can you support an existing platform we did not build?",
        a: "Yes. Managed services engagements can start with an assessment of stack, observability, and risk before ongoing support.",
      },
      {
        q: "Where should press or partnership requests go?",
        a: `Email ${siteConfig.email} with “Press” or “Partnership” in the subject line.`,
      },
      {
        q: "How do I apply for a role?",
        a: "Visit Careers, select a role, and apply — or send your profile through the consultation form noting the role title.",
      },
    ];
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (item) =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
    );
  }, [query]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <ChapterHero
        eyebrow="Help"
        title="Support"
        body="Get help with engagements, platform issues, or general inquiries."
      />

      <section className="pb-20">
        <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="display text-[32px] text-[#14171c]">Contact channels</h2>
            <div className="mt-8 space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                data-cursor
                className="flex items-center gap-4 border-t border-black/10 pt-5"
              >
                <Mail className="size-5 text-[#c51a1b]" />
                <div>
                  <p className="text-[13px] uppercase tracking-[0.14em] text-[#5d6673]">
                    Email
                  </p>
                  <p className="mt-1 text-[16px] text-[#14171c]">{siteConfig.email}</p>
                </div>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                data-cursor
                className="flex items-center gap-4 border-t border-black/10 pt-5"
              >
                <Phone className="size-5 text-[#c51a1b]" />
                <div>
                  <p className="text-[13px] uppercase tracking-[0.14em] text-[#5d6673]">
                    Phone
                  </p>
                  <p className="mt-1 text-[16px] text-[#14171c]">{siteConfig.phone}</p>
                </div>
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Magnetic strength={0.16}>
                <Link href={routes.consultation} className="btn btn-primary">
                  Book a Consultation
                  <ArrowUpRight className="size-4" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.12}>
                <Link href={routes.docs} className="btn btn-ghost">
                  Browse docs
                </Link>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {submitted ? (
              <div className="card flex flex-col items-center px-6 py-16 text-center">
                <CheckCircle2 className="mb-4 size-12 text-[#c51a1b]" />
                <h3 className="display text-[28px] text-[#14171c]">Message sent</h3>
                <p className="mt-2 max-w-sm text-[15px] text-[#5d6673]">
                  Thanks — our team will follow up shortly during business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card p-6 sm:p-10">
                <h2 className="display text-[28px] text-[#14171c]">
                  Send a support request
                </h2>
                <p className="mt-2 text-[14px] text-[#5d6673]">
                  We typically reply within one business day.
                </p>
                <div className="mt-6 grid gap-5">
                  <label className="block">
                    <span className="mb-2 block text-[13px] font-semibold text-[#14171c]">
                      Work email <span className="text-[#c51a1b]">*</span>
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="input-field"
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[13px] font-semibold text-[#14171c]">
                      Topic
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className="chip"
                          data-active={topic === item}
                          data-cursor
                          onClick={() => setTopic(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="topic" value={topic} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[13px] font-semibold text-[#14171c]">
                      How can we help? <span className="text-[#c51a1b]">*</span>
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="input-field resize-y"
                      placeholder="Share context, urgency, and any ticket or project IDs…"
                    />
                  </label>
                </div>
                <button type="submit" data-cursor className="btn btn-primary mt-8 w-full">
                  Submit request
                  <ArrowUpRight className="size-4" />
                </button>
                <p className="mt-3 text-center text-[12px] text-[#5c6778]">
                  By submitting, you agree to our{" "}
                  <Link
                    href={routes.privacy}
                    className="underline hover:text-[#c51a1b]"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-black/10 py-24">
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="display text-[36px] text-[#14171c] sm:text-[48px]">
              Quick answers
            </h2>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search support topics…"
              className="input-field mt-6"
              aria-label="Search support FAQs"
            />
          </Reveal>
          <div className="mt-8">
            {filteredFaqs.map((item) => (
              <details
                key={item.q}
                className="border-t border-black/10 py-5 last:border-b"
              >
                <summary
                  data-cursor
                  className="cursor-pointer list-none display text-[20px] text-[#14171c]"
                >
                  {item.q}
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5d6673]">
                  {item.a}
                </p>
              </details>
            ))}
            {filteredFaqs.length === 0 ? (
              <p className="border-t border-black/10 py-8 text-[14px] text-[#5d6673]">
                No matches. Try another keyword or send a support request.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/SectionHeading";
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
      <section className="hero-glow section-sm">
        <div className="container max-w-3xl">
          <Reveal>
            <Breadcrumb current="Support" />
            <span className="eyebrow mb-3">Help</span>
            <h1 className="mt-2 text-[34px] font-extrabold tracking-[-0.02em] text-white sm:text-[44px]">
              Support
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#c7cbd4] sm:text-[18px]">
              Get help with engagements, platform issues, or general inquiries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <h2 className="text-[24px] font-extrabold text-[#14213D]">
                Contact channels
              </h2>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="card-light flex items-center gap-3 p-4 transition-colors hover:border-[#FCA311]"
                >
                  <Mail className="size-5 text-[#FCA311]" />
                  <div>
                    <p className="font-semibold text-[#14213D]">Email</p>
                    <p className="text-[14px] text-[#475569]">{siteConfig.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="card-light flex items-center gap-3 p-4 transition-colors hover:border-[#FCA311]"
                >
                  <Phone className="size-5 text-[#FCA311]" />
                  <div>
                    <p className="font-semibold text-[#14213D]">Phone</p>
                    <p className="text-[14px] text-[#475569]">{siteConfig.phone}</p>
                  </div>
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={routes.consultation} className="btn btn-primary">
                  Book a Consultation
                  <ArrowRight className="size-4" />
                </Link>
                <Link href={routes.docs} className="btn btn-outline">
                  Browse docs
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {submitted ? (
              <div className="card-light flex flex-col items-center px-6 py-16 text-center">
                <CheckCircle2 className="mb-4 size-12 text-[#FCA311]" />
                <h3 className="text-[22px] font-extrabold text-[#14213D]">
                  Message sent
                </h3>
                <p className="mt-2 max-w-sm text-[15px] text-[#475569]">
                  Thanks — our team will follow up shortly during business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card-light p-6 sm:p-8">
                <h2 className="text-[22px] font-extrabold text-[#14213D]">
                  Send a support request
                </h2>
                <p className="mt-2 text-[14px] text-[#475569]">
                  We typically reply within one business day.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-[13px] font-semibold text-[#14213D]">
                      Work email <span className="text-[#FCA311]">*</span>
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
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-[13px] font-semibold text-[#14213D]">
                      Topic
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className="chip"
                          data-active={topic === item}
                          onClick={() => setTopic(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="topic" value={topic} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-[13px] font-semibold text-[#14213D]">
                      How can we help? <span className="text-[#FCA311]">*</span>
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
                <button type="submit" className="btn btn-primary mt-6 w-full">
                  Submit request
                  <ArrowRight className="size-4" />
                </button>
                <p className="mt-3 text-center text-[12px] text-[#94a0b0]">
                  By submitting, you agree to our{" "}
                  <Link href={routes.privacy} className="underline hover:text-[#FCA311]">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section bg-[#0b0b0c]">
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="text-[28px] font-extrabold text-white">
              Quick answers
            </h2>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search support topics…"
              className="input-field mt-5 border-white/10 bg-white/5 text-white placeholder:text-[#7c8494]"
              aria-label="Search support FAQs"
            />
          </Reveal>
          <div className="mt-6 space-y-3">
            {filteredFaqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
              >
                <summary className="cursor-pointer list-none font-semibold text-white">
                  {item.q}
                </summary>
                <p className="mt-3 text-[14px] leading-relaxed text-[#c7cbd4]">
                  {item.a}
                </p>
              </details>
            ))}
            {filteredFaqs.length === 0 ? (
              <p className="text-[14px] text-[#9aa3b5]">
                No matches. Try another keyword or send a support request.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

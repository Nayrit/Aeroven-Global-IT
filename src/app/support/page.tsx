import type { Metadata } from "next";
import { Suspense } from "react";
import { SupportClient } from "@/components/SupportClient";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Support",
  description: `Contact ${siteConfig.name} support for technical help, billing, press, or general inquiries.`,
  path: routes.support,
  keywords: ["support", "help desk", "contact support"],
});

const supportFaqs = [
  {
    question: "How fast do you respond?",
    answer:
      "Critical production issues for managed clients target under two hours. New consultation requests typically receive a reply within one business day.",
  },
  {
    question: "Can you support an existing platform we did not build?",
    answer:
      "Yes. Managed services engagements can start with an assessment of stack, observability, and risk before ongoing support.",
  },
  {
    question: "Where should press or partnership requests go?",
    answer: `Email ${siteConfig.email} with “Press” or “Partnership” in the subject line.`,
  },
  {
    question: "How do I apply for a role?",
    answer:
      "Visit Careers, select a role, and apply — or send your profile through the consultation form noting the role title.",
  },
];

export default function SupportPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: "Support",
            description: `Contact ${siteConfig.name} support for technical help, billing, press, or general inquiries.`,
            path: routes.support,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Support", path: routes.support },
          ]),
          faqPageJsonLd(supportFaqs),
        ]}
      />
      <Suspense
        fallback={
          <div className="container py-40 text-[15px] text-[#5d6673]">Loading support…</div>
        }
      >
        <SupportClient />
      </Suspense>
    </>
  );
}

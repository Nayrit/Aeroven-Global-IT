import type { Metadata } from "next";
import { SupportClient } from "@/components/SupportClient";
import { buildMetadata } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Support",
  description: `Contact ${siteConfig.name} support for technical help, billing, press, or general inquiries.`,
  path: routes.support,
  keywords: ["support", "help desk", "contact support"],
});

export default function SupportPage() {
  return <SupportClient />;
}

import type { Metadata } from "next";
import { processPage } from "@/lib/content";
import { ProcessExperience } from "@/components/ProcessExperience";

export const metadata: Metadata = {
  title: "Process",
  description: processPage.hero.body,
};

export default function ProcessPage() {
  return <ProcessExperience />;
}

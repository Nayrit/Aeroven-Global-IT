import type { Metadata } from "next";
import { engagementPage } from "@/lib/content";
import { EngagementExperience } from "@/components/EngagementExperience";

export const metadata: Metadata = {
  title: "Engagement",
  description: engagementPage.hero.body,
};

export default function EngagementPage() {
  return <EngagementExperience />;
}

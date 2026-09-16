import type { Metadata } from "next";
import { engagementPage } from "@/lib/content";
import { EngagementExperience } from "@/components/EngagementExperience";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Engagement",
  description: engagementPage.hero.body,
  path: routes.engagement,
  keywords: [
    "team augmentation",
    "end to end build",
    "managed services",
    "strategy consulting",
  ],
});

export default function EngagementPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: "Engagement",
            description: engagementPage.hero.body,
            path: routes.engagement,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Engagement", path: routes.engagement },
          ]),
        ]}
      />
      <EngagementExperience />
    </>
  );
}

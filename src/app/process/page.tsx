import type { Metadata } from "next";
import { processPage } from "@/lib/content";
import { ProcessExperience } from "@/components/ProcessExperience";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Process",
  description: processPage.hero.body,
  path: routes.process,
  keywords: ["delivery process", "discovery workshop", "enterprise rollout"],
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: "Process",
            description: processPage.hero.body,
            path: routes.process,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Process", path: routes.process },
          ]),
        ]}
      />
      <ProcessExperience />
    </>
  );
}

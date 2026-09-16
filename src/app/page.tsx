import { home } from "@/lib/content";
import { HomeExperience } from "@/components/HomeExperience";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  faqPageJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI-Powered Digital Transformation",
  description: home.hero.body,
  path: "/",
  keywords: [
    "digital transformation",
    "AI solutions",
    "custom ERP",
    "enterprise software",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          webPageJsonLd({
            title: "AI-Powered Digital Transformation",
            description: home.hero.body,
            path: "/",
          }),
          faqPageJsonLd(home.faq.items),
        ]}
      />
      <HomeExperience />
    </>
  );
}

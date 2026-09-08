import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { buildMetadata } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Cookies Policy",
  description: `How ${siteConfig.name} uses cookies and similar technologies on this website.`,
  path: routes.cookies,
  keywords: ["cookies policy", "tracking technologies"],
});

export default function CookiesPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Cookies Policy"
      description="This policy describes how we use cookies and similar technologies when you visit our website."
      updated="September 8, 2026"
      cta={{ label: "Read Privacy Policy", href: routes.privacy }}
      sections={[
        {
          heading: "1. What are cookies?",
          paragraphs: [
            "Cookies are small text files stored on your device. Similar technologies include local storage, pixels, and session identifiers. They help websites function, remember preferences, and understand usage.",
          ],
        },
        {
          heading: "2. How we use cookies",
          bullets: [
            "Essential cookies — required for security, load balancing, and core site features.",
            "Preference cookies — remember UI choices such as dismissed banners where applicable.",
            "Analytics cookies — help us understand traffic and improve pages (used only where permitted).",
          ],
        },
        {
          heading: "3. Cookie categories we may use",
          paragraphs: [
            "Depending on configuration, our site may set first-party cookies for session continuity and performance. If we enable analytics providers, they may set their own cookies subject to their policies and your consent choices.",
          ],
        },
        {
          heading: "4. Managing cookies",
          paragraphs: [
            "You can control cookies through your browser settings (block, delete, or alert on cookies). Blocking essential cookies may affect site functionality. Where a consent banner is presented, you can update choices there.",
          ],
        },
        {
          heading: "5. Retention",
          paragraphs: [
            "Session cookies expire when you close your browser. Persistent cookies remain for a defined period or until deleted. Exact durations depend on the cookie purpose.",
          ],
        },
        {
          heading: "6. Updates",
          paragraphs: [
            "We may update this Cookies Policy as our practices evolve. Check the “Last updated” date on this page.",
          ],
        },
        {
          heading: "7. Contact",
          paragraphs: [
            `Questions: ${siteConfig.email}. See also our Privacy Policy for broader data practices.`,
          ],
        },
      ]}
    />
  );
}

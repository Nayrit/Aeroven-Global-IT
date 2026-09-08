import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { buildMetadata } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects personal information.`,
  path: routes.privacy,
  keywords: ["privacy policy", "data protection", "GDPR"],
});

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Privacy Policy"
      description={`This Privacy Policy explains how ${siteConfig.name} (“Aeroven”, “we”, “us”) collects, uses, shares, and protects information when you use our websites, products, and services.`}
      updated="September 8, 2026"
      cta={{ label: "Contact us about privacy", href: routes.support }}
      sections={[
        {
          heading: "1. Who we are",
          paragraphs: [
            `${siteConfig.name} provides technology consulting, custom software, cloud, data, and AI engineering services. Our primary contact for privacy matters is ${siteConfig.email}.`,
          ],
        },
        {
          heading: "2. Information we collect",
          paragraphs: [
            "We collect information you provide directly and information generated through normal use of our site.",
          ],
          bullets: [
            "Contact and consultation details such as name, work email, company, project notes, and preferred engagement model.",
            "Career application information if you apply for a role.",
            "Technical data such as IP address, browser type, device information, pages visited, and approximate location derived from IP.",
            "Communication records when you email or call us.",
          ],
        },
        {
          heading: "3. How we use information",
          bullets: [
            "Respond to consultation requests and provide our services.",
            "Improve website performance, security, and user experience.",
            "Send service-related messages and, where permitted, relevant updates.",
            "Comply with legal obligations and protect our rights.",
          ],
        },
        {
          heading: "4. Legal bases (where applicable)",
          paragraphs: [
            "Depending on your location, we may process personal data based on consent, contract performance, legitimate interests (such as securing and improving our services), or legal obligation.",
          ],
        },
        {
          heading: "5. Sharing of information",
          paragraphs: [
            "We do not sell personal information. We may share information with trusted processors who help us operate (for example hosting, analytics, or email delivery), with professional advisors, or when required by law. Processors are required to protect data and use it only for instructed purposes.",
          ],
        },
        {
          heading: "6. International transfers",
          paragraphs: [
            "We operate globally. Where information is transferred across borders, we use appropriate safeguards consistent with applicable law.",
          ],
        },
        {
          heading: "7. Retention",
          paragraphs: [
            "We retain information only as long as needed for the purposes described in this policy, including legal, accounting, or reporting requirements.",
          ],
        },
        {
          heading: "8. Security",
          paragraphs: [
            "We apply administrative, technical, and organizational measures designed to protect personal information. No method of transmission or storage is fully secure; please contact us immediately if you believe your interaction with us has been compromised.",
          ],
        },
        {
          heading: "9. Your rights",
          paragraphs: [
            `Subject to local law, you may have rights to access, correct, delete, restrict, or object to certain processing, and to withdraw consent. To exercise rights, email ${siteConfig.email}. You may also lodge a complaint with a supervisory authority where applicable.`,
          ],
        },
        {
          heading: "10. Cookies",
          paragraphs: [
            "We use cookies and similar technologies as described in our Cookies Policy. You can manage preferences through your browser and, where available, our cookie controls.",
          ],
        },
        {
          heading: "11. Children’s privacy",
          paragraphs: [
            "Our services are directed to business users and are not intended for children under 16. We do not knowingly collect personal information from children.",
          ],
        },
        {
          heading: "12. Changes",
          paragraphs: [
            "We may update this policy from time to time. The “Last updated” date reflects the latest revision. Material changes will be highlighted on this page.",
          ],
        },
        {
          heading: "13. Contact",
          paragraphs: [
            `Questions about this policy: ${siteConfig.email} · ${siteConfig.phone} · ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}.`,
          ],
        },
      ]}
    />
  );
}

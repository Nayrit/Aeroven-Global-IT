import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { buildMetadata } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms governing use of the ${siteConfig.name} website and related services.`,
  path: routes.terms,
  keywords: ["terms of service", "terms and conditions"],
});

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Legal"
      title="Terms of Service"
      description={`These Terms of Service (“Terms”) govern your access to and use of the websites, content, and online services operated by ${siteConfig.name}.`}
      updated="September 8, 2026"
      cta={{ label: "Book a consultation", href: routes.consultation }}
      sections={[
        {
          heading: "1. Acceptance",
          paragraphs: [
            "By accessing or using our website, you agree to these Terms and our Privacy Policy. If you do not agree, do not use the site.",
          ],
        },
        {
          heading: "2. Services described online",
          paragraphs: [
            "Website content describes our capabilities for informational purposes. Project work is governed by separate statements of work, master services agreements, or other written contracts between Aeroven and the client.",
          ],
        },
        {
          heading: "3. Accounts and submissions",
          paragraphs: [
            "If you submit a consultation request, job application, or other form, you agree to provide accurate information and not to misuse our forms (including spam or automated abuse).",
          ],
        },
        {
          heading: "4. Intellectual property",
          paragraphs: [
            "All site content, branding, logos, and materials are owned by Aeroven or our licensors and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works without prior written permission, except for limited personal, non-commercial viewing.",
          ],
        },
        {
          heading: "5. Acceptable use",
          bullets: [
            "Do not attempt to disrupt, probe, or compromise the site or related systems.",
            "Do not use the site for unlawful, harmful, or deceptive purposes.",
            "Do not scrape or harvest data in bulk without written consent.",
          ],
        },
        {
          heading: "6. Third-party links",
          paragraphs: [
            "Our site may link to third-party websites. We are not responsible for their content, policies, or practices.",
          ],
        },
        {
          heading: "7. Disclaimers",
          paragraphs: [
            "The site is provided “as is” and “as available.” To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant uninterrupted or error-free operation.",
          ],
        },
        {
          heading: "8. Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, Aeroven and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of the site. Our aggregate liability for site-related claims is limited to one hundred US dollars (USD $100), except where liability cannot be limited by law.",
          ],
        },
        {
          heading: "9. Indemnity",
          paragraphs: [
            "You agree to indemnify and hold harmless Aeroven from claims arising out of your misuse of the site or violation of these Terms.",
          ],
        },
        {
          heading: "10. Governing law",
          paragraphs: [
            "These Terms are governed by the laws of the State of California, USA, without regard to conflict-of-law principles, unless mandatory local law requires otherwise. Courts in San Francisco County shall have exclusive jurisdiction for disputes arising from site use, subject to applicable consumer protections.",
          ],
        },
        {
          heading: "11. Changes",
          paragraphs: [
            "We may update these Terms periodically. Continued use of the site after changes become effective constitutes acceptance of the revised Terms.",
          ],
        },
        {
          heading: "12. Contact",
          paragraphs: [
            `Questions about these Terms: ${siteConfig.email}`,
          ],
        },
      ]}
    />
  );
}

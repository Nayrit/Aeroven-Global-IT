import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { consultationPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { ConsultationForm } from "@/components/ConsultationForm";
import { InteractiveRows } from "@/components/InteractiveRows";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Book a Consultation",
  description: consultationPage.hero.body,
  path: routes.consultation,
  keywords: ["consultation", "book a call", "enterprise architecture"],
});

export default function ConsultationPage() {
  const { hero, highlights, contact, trust } = consultationPage;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: "Book a Consultation",
            description: hero.body,
            path: routes.consultation,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Consultation", path: routes.consultation },
          ]),
        ]}
      />
      <ChapterHero eyebrow={hero.eyebrow} title={hero.headline} body={hero.body} />
      <section className="pb-24">
        <div className="container grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <InteractiveRows
              layoutId="consult-highlights"
              items={highlights.map((item, i) => ({
                number: `0${i + 1}`,
                title: item.title,
                description: item.description,
              }))}
            />
            <Reveal className="mt-8 space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex min-h-11 items-center gap-3 text-[#14171c] hover:text-[#c51a1b]"
              >
                <Mail className="size-4 shrink-0 text-[#c51a1b]" aria-hidden />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                className="flex min-h-11 items-center gap-3 text-[#14171c] hover:text-[#c51a1b]"
              >
                <Phone className="size-4 shrink-0 text-[#c51a1b]" aria-hidden />
                {contact.phone}
              </a>
              <p className="flex items-start gap-3 text-[#14171c]">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#c51a1b]" aria-hidden />
                {contact.address}
              </p>
            </Reveal>
            <p className="mt-10 text-[12px] uppercase tracking-[0.14em] text-[#8b93a0]">
              {trust.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              {trust.brands.map((name) => (
                <span
                  key={name}
                  className="text-[13px] tracking-[0.1em] text-[#8b93a0]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          <Suspense
            fallback={
              <div
                className="card min-h-[420px] animate-pulse p-6 sm:p-10"
                aria-hidden
              />
            }
          >
            <ConsultationForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

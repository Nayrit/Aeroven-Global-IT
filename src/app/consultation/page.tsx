import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { consultationPage } from "@/lib/content";
import { ChapterHero } from "@/components/ChapterHero";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: consultationPage.hero.body,
};

export default function ConsultationPage() {
  const { hero, highlights, contact, trust } = consultationPage;

  return (
    <>
      <ChapterHero eyebrow={hero.eyebrow} title={hero.headline} body={hero.body} />
      <section className="pb-24">
        <div className="container grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <ul>
              {highlights.map((item) => (
                <li key={item.title} className="border-t border-black/10 py-5">
                  <h2 className="text-[18px] font-semibold text-[#14171c]">{item.title}</h2>
                  <p className="mt-2 text-[15px] text-[#5d6673]">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-[#14171c] hover:text-[#c51a1b]"
              >
                <Mail className="size-4 text-[#c51a1b]" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 text-[#14171c] hover:text-[#c51a1b]"
              >
                <Phone className="size-4 text-[#c51a1b]" />
                {contact.phone}
              </a>
              <p className="flex items-start gap-3 text-[#14171c]">
                <MapPin className="mt-0.5 size-4 text-[#c51a1b]" />
                {contact.address}
              </p>
            </div>
            <p className="mt-10 text-[12px] uppercase tracking-[0.14em] text-[#8b93a0]">
              {trust.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              {trust.brands.map((name) => (
                <span key={name} className="text-[13px] tracking-[0.1em] text-[#8b93a0]">
                  {name}
                </span>
              ))}
            </div>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}

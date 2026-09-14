import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { consultationPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/SectionHeading";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: consultationPage.hero.body,
};

export default function ConsultationPage() {
  const { hero, highlights, contact, trust } = consultationPage;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.headline} body={hero.body} />
      <section className="pb-28">
        <div className="container grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="space-y-6">
              {highlights.map((item) => (
                <li key={item.title} className="border-t border-white/10 pt-5">
                  <h2 className="display text-[22px] text-white">{item.title}</h2>
                  <p className="mt-2 text-[15px] text-[#8a96a8]">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-3">
              <a href={`mailto:${contact.email}`} data-cursor className="flex items-center gap-3 text-[#c9d0da] hover:text-[#c51a1b]">
                <Mail className="size-4 text-[#c51a1b]" />
                {contact.email}
              </a>
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} data-cursor className="flex items-center gap-3 text-[#c9d0da] hover:text-[#c51a1b]">
                <Phone className="size-4 text-[#c51a1b]" />
                {contact.phone}
              </a>
              <p className="flex items-start gap-3 text-[#c9d0da]">
                <MapPin className="mt-0.5 size-4 text-[#c51a1b]" />
                {contact.address}
              </p>
            </div>
            <p className="mt-10 text-[12px] uppercase tracking-[0.16em] text-[#5c6778]">
              {trust.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-5">
              {trust.brands.map((name) => (
                <span key={name} className="text-[13px] tracking-[0.12em] text-white/40">
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ConsultationForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

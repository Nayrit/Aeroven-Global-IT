import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { consultationPage } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/SectionHeading";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: consultationPage.hero.body,
};

export default function ConsultationPage() {
  const { hero, highlights, contact, trust } = consultationPage;

  return (
    <section className="hero-glow min-h-[calc(100vh-80px)] pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <div>
              <Breadcrumb current={hero.breadcrumb} />
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1 className="mt-4 text-[34px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-[44px]">
                {hero.headline}
              </h1>
              <p className="mt-5 text-[16px] leading-relaxed text-[#c7cbd4] sm:text-[17px]">
                {hero.body}
              </p>

              <ul className="mt-10 space-y-5">
                {highlights.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-1 size-2.5 shrink-0 rounded-full bg-[#FCA311]" />
                    <div>
                      <h2 className="text-[16px] font-bold text-white">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-[14px] leading-relaxed text-[#9aa3b5]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-[14px] text-[#c7cbd4] transition-colors hover:text-[#FCA311]"
                >
                  <Mail className="size-4 shrink-0 text-[#FCA311]" />
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-3 text-[14px] text-[#c7cbd4] transition-colors hover:text-[#FCA311]"
                >
                  <Phone className="size-4 shrink-0 text-[#FCA311]" />
                  {contact.phone}
                </a>
                <p className="flex items-start gap-3 text-[14px] text-[#c7cbd4]">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#FCA311]" />
                  {contact.address}
                </p>
              </div>

              <div className="mt-10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5f6675]">
                  {trust.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {trust.brands.map((name) => (
                    <span
                      key={name}
                      className="text-[13px] font-semibold tracking-[0.08em] text-[#94a0b0]"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ConsultationForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

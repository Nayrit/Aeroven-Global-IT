"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { consultationForm } from "@/lib/content";

export function ConsultationForm() {
  const helpField = consultationForm.fields.find((f) => f.name === "helpWith");
  const engagementField = consultationForm.fields.find(
    (f) => f.name === "engagement",
  );
  const timelineField = consultationForm.fields.find(
    (f) => f.name === "timeline",
  );
  const detailsField = consultationForm.fields.find((f) => f.name === "details");

  const [topic, setTopic] = useState(helpField?.options?.[0] ?? "");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[20px] border border-[#eef0f3] bg-white px-6 py-16 text-center shadow-[0_4px_12px_rgba(20,33,61,0.06)]">
        <CheckCircle2 className="mb-4 size-12 text-[#FCA311]" />
        <h3 className="text-[22px] font-extrabold text-[#14213D]">
          Request received
        </h3>
        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-[#475569]">
          Thanks for reaching out. Our architects will follow up within two
          hours during business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[20px] border border-[#eef0f3] bg-white p-6 shadow-[0_4px_12px_rgba(20,33,61,0.06)] sm:p-8"
    >
      <h2 className="text-[22px] font-extrabold text-[#14213D]">
        {consultationForm.headline}
      </h2>
      <p className="mt-2 text-[14px] text-[#475569]">
        {consultationForm.requiredNote}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {consultationForm.fields
          .filter((f) =>
            ["firstName", "lastName", "email", "company"].includes(f.name),
          )
          .map((field) => (
            <Field
              key={field.name}
              label={field.label}
              required={field.required}
              className={
                field.name === "email" || field.name === "company"
                  ? "sm:col-span-2"
                  : ""
              }
            >
              <input
                required={field.required}
                type={field.type === "email" ? "email" : "text"}
                name={field.name}
                className="input-field"
                placeholder={field.placeholder}
              />
            </Field>
          ))}
      </div>

      {helpField?.options ? (
        <div className="mt-5">
          <label className="mb-2 block text-[13px] font-semibold text-[#14213D]">
            {helpField.label}{" "}
            {helpField.required ? (
              <span className="text-[#FCA311]">
                {consultationForm.requiredMarker}
              </span>
            ) : null}
          </label>
          <div className="flex flex-wrap gap-2">
            {helpField.options.map((option) => (
              <button
                key={option}
                type="button"
                className="chip"
                data-active={topic === option}
                onClick={() => setTopic(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <input type="hidden" name="helpWith" value={topic} />
        </div>
      ) : null}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {engagementField ? (
          <Field label={engagementField.label}>
            <select name="engagement" className="input-field" defaultValue="">
              <option value="" disabled>
                Select a model
              </option>
              {engagementField.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        ) : null}
        {timelineField ? (
          <Field label={timelineField.label}>
            <select name="timeline" className="input-field" defaultValue="">
              <option value="" disabled>
                Select timeline
              </option>
              {timelineField.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        ) : null}
      </div>

      {detailsField ? (
        <Field label={detailsField.label} className="mt-5">
          <textarea
            name="details"
            rows={4}
            className="input-field resize-y"
            placeholder={detailsField.placeholder}
          />
        </Field>
      ) : null}

      <button
        type="submit"
        className="btn btn-primary btn-primary-lg mt-6 w-full"
      >
        {consultationForm.submitLabel}
        <ArrowRight className="size-[18px]" strokeWidth={2.4} />
      </button>
      <p className="mt-3 text-center text-[12px] text-[#94a0b0]">
        {consultationForm.privacyNote.split(
          consultationForm.privacyLinkLabel,
        )[0]}
        <Link href="/consultation" className="underline hover:text-[#FCA311]">
          {consultationForm.privacyLinkLabel}
        </Link>
        {consultationForm.privacyNote.split(
          consultationForm.privacyLinkLabel,
        )[1] ?? ""}
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[13px] font-semibold text-[#14213D]">
        {label}
        {required ? (
          <span className="text-[#FCA311]">
            {" "}
            {consultationForm.requiredMarker}
          </span>
        ) : null}
      </span>
      {children}
    </label>
  );
}

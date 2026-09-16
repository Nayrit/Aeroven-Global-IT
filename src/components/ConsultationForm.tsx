"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { consultationForm } from "@/lib/content";

export function ConsultationForm() {
  const searchParams = useSearchParams();
  const helpField = consultationForm.fields.find((f) => f.name === "helpWith");
  const engagementField = consultationForm.fields.find(
    (f) => f.name === "engagement",
  );
  const timelineField = consultationForm.fields.find(
    (f) => f.name === "timeline",
  );
  const detailsField = consultationForm.fields.find((f) => f.name === "details");

  const role = (searchParams.get("role") ?? "").slice(0, 120);
  const defaultTopic = useMemo(() => {
    if (role) {
      const careersOption = helpField?.options?.find((o) =>
        o.toLowerCase().includes("career"),
      );
      if (careersOption) return careersOption;
    }
    return helpField?.options?.[0] ?? "";
  }, [role, helpField?.options]);

  const [topic, setTopic] = useState(defaultTopic);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setPending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("type", "consultation");
    data.set("helpWith", topic);
    if (role) data.set("role", role);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again or email us directly.");
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="card flex flex-col items-center justify-center px-6 py-16 text-center">
        <CheckCircle2 className="mb-4 size-12 text-[#c51a1b]" aria-hidden />
        <h3 className="display text-[28px] text-[#14171c]">Request received</h3>
        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-[#5d6673]">
          Thanks for reaching out. Our architects will follow up within two hours
          during business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card relative p-6 sm:p-10" noValidate={false}>
      <h2 className="display text-[28px] text-[#14171c]">
        {consultationForm.headline}
      </h2>
      <p className="mt-2 text-[14px] text-[#5d6673]">
        {consultationForm.requiredNote}
      </p>
      {role ? (
        <p className="mt-3 text-[13px] text-[#c51a1b]">
          Applying regarding: <strong>{role}</strong>
        </p>
      ) : null}

      {/* Honeypot */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

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
                autoComplete={
                  field.name === "email"
                    ? "email"
                    : field.name === "firstName"
                      ? "given-name"
                      : field.name === "lastName"
                        ? "family-name"
                        : field.name === "company"
                          ? "organization"
                          : "on"
                }
                maxLength={field.name === "email" ? 254 : 120}
              />
            </Field>
          ))}
      </div>

      {helpField?.options ? (
        <div className="mt-5">
          <label className="mb-2 block text-[13px] font-semibold text-[#14171c]">
            {helpField.label}{" "}
            {helpField.required ? (
              <span className="text-[#c51a1b]">
                {consultationForm.requiredMarker}
              </span>
            ) : null}
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label={helpField.label}>
            {helpField.options.map((option) => (
              <button
                key={option}
                type="button"
                className="chip"
                data-active={topic === option}
                data-cursor
                aria-pressed={topic === option}
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
            placeholder={
              role
                ? `Tell us about your interest in ${role}…`
                : detailsField.placeholder
            }
            maxLength={5000}
          />
        </Field>
      ) : null}

      {error ? (
        <p className="mt-4 text-[14px] text-[#c51a1b]" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        data-cursor
        disabled={pending}
        className="btn btn-primary mt-6 w-full disabled:opacity-60"
      >
        {pending ? "Sending…" : consultationForm.submitLabel}
        <ArrowRight className="size-[18px]" strokeWidth={2.4} />
      </button>
      <p className="mt-3 text-center text-[12px] text-[#94a0b0]">
        {consultationForm.privacyNote.split(
          consultationForm.privacyLinkLabel,
        )[0]}
        <Link href="/privacy" className="underline hover:text-[#c51a1b]">
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
      <span className="mb-2 block text-[13px] font-semibold text-[#14171c]">
        {label}
        {required ? (
          <span className="text-[#c51a1b]">
            {" "}
            {consultationForm.requiredMarker}
          </span>
        ) : null}
      </span>
      {children}
    </label>
  );
}

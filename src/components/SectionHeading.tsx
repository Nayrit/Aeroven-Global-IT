import Link from "next/link";

type SectionHeadingProps = {
  eyebrow?: string;
  headline: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  headline,
  body,
  align = "center",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "light" ? "text-[#14213D]" : "text-white";
  const bodyColor = tone === "light" ? "text-[#475569]" : "text-[#c7cbd4]";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow ? <span className="eyebrow mb-3">{eyebrow}</span> : null}
      <h2
        className={`mt-2 text-[28px] font-extrabold tracking-[-0.02em] sm:text-[40px] ${titleColor}`}
      >
        {headline}
      </h2>
      {body ? (
        <p className={`mt-4 text-[16px] leading-relaxed sm:text-[18px] ${bodyColor}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <p className="mb-5 text-[13px] font-medium text-[#9aa3b5]">
      <Link href="/" className="transition-colors hover:text-[#FCA311]">
        Home
      </Link>
      <span className="mx-2 text-[#5f6675]">/</span>
      <span className="text-white">{current}</span>
    </p>
  );
}

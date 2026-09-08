"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { careersOpenRoles, type JobOpening } from "@/lib/content";

export function JobsBoard() {
  const filters = careersOpenRoles.filters as readonly string[];
  const [active, setActive] = useState<string>(filters[0] ?? "All");

  const jobs = useMemo(() => {
    if (active === "All") return careersOpenRoles.jobs as JobOpening[];
    return careersOpenRoles.jobs.filter((job) => job.department === active);
  }, [active]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="chip"
            data-active={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {jobs.map((job) => (
          <article
            key={job.title}
            className="card-light flex flex-col gap-4 p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="text-[17px] font-bold text-[#14213D]">
                {job.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-3 text-[13px] text-[#475569]">
                <span className="rounded-full bg-[rgba(252,163,17,0.12)] px-2.5 py-1 font-semibold text-[#a5670a]">
                  {job.department}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5" />
                  {job.location}
                </span>
                <span>{job.type}</span>
              </div>
            </div>
            <Link
              href={`/consultation?role=${encodeURIComponent(job.title)}`}
              className="btn btn-outline shrink-0"
            >
              Apply
              <ArrowRight className="size-4" />
            </Link>
          </article>
        ))}
        {jobs.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-[#E5E5E5] px-5 py-10 text-center text-[#475569]">
            No open roles in this category right now.
          </p>
        ) : null}
      </div>
    </div>
  );
}

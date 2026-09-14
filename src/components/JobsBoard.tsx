"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
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
            data-cursor
          >
            {filter}
          </button>
        ))}
      </div>
      <div>
        {jobs.map((job) => (
          <article
            key={job.title}
            className="flex flex-col gap-4 border-t border-black/10 py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="display text-[22px] text-[#14171c]">{job.title}</h3>
              <div className="mt-2 flex flex-wrap gap-3 text-[13px] text-[#5d6673]">
                <span className="text-[#c51a1b]">{job.department}</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5" />
                  {job.location}
                </span>
                <span>{job.type}</span>
              </div>
            </div>
            <Link
              href={`/consultation?role=${encodeURIComponent(job.title)}`}
              data-cursor
              className="btn btn-outline shrink-0"
            >
              Apply
              <ArrowUpRight className="size-4" />
            </Link>
          </article>
        ))}
        {jobs.length === 0 ? (
          <p className="border border-dashed border-black/15 px-5 py-10 text-center text-[#5d6673]">
            No open roles in this category right now.
          </p>
        ) : null}
      </div>
    </div>
  );
}

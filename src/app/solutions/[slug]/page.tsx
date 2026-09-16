import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSolutionSlugs, getSolution } from "@/lib/solutions";
import { SolutionExperience } from "@/components/SolutionExperience";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqPageJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) {
    return buildMetadata({
      title: "Solution not found",
      description: "This solution page could not be found.",
      path: `/solutions/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: solution.title,
    description: solution.summary,
    path: `/solutions/${solution.slug}`,
    keywords: [solution.title, solution.eyebrow, "Aeroven solutions"],
  });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const path = `/solutions/${solution.slug}`;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            title: solution.title,
            description: solution.summary,
            path,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: solution.title, path },
          ]),
          serviceJsonLd({
            name: solution.title,
            description: solution.overview,
            path,
          }),
          faqPageJsonLd(solution.faqs),
        ]}
      />
      <SolutionExperience solution={solution} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSolutionSlugs, getSolution } from "@/lib/solutions";
import { SolutionExperience } from "@/components/SolutionExperience";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return { title: "Solution" };
  return buildMetadata({
    title: solution.title,
    description: solution.summary,
    path: `/solutions/${solution.slug}`,
    keywords: [solution.title, "Aeroven", "solutions"],
  });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  return <SolutionExperience solution={solution} />;
}

import type { MetadataRoute } from "next";
import { allMarketingPaths, siteConfig, solutionPaths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return allMarketingPaths.map((path) => {
    const isHome = path === "/";
    const isSolutionHub = path === "/solutions";
    const isSolutionDetail = (solutionPaths as readonly string[]).includes(path);
    const isConversion =
      path === "/consultation" || path === "/capabilities" || isSolutionHub;
    const isLegal =
      path === "/privacy" || path === "/terms" || path === "/cookies";
    const isNews =
      path === "/blog" || path === "/newsroom";

    return {
      url: isHome ? siteConfig.url : `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency: isHome || isNews
        ? "weekly"
        : isLegal
          ? "yearly"
          : isSolutionDetail || isSolutionHub
            ? "monthly"
            : "monthly",
      priority: isHome
        ? 1
        : isConversion || isSolutionDetail
          ? 0.9
          : isLegal
            ? 0.3
            : 0.7,
    };
  });
}

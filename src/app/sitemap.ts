import type { MetadataRoute } from "next";
import { allMarketingPaths, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return allMarketingPaths.map((path) => ({
    url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency:
      path === "/" || path === "/blog" || path === "/newsroom"
        ? "weekly"
        : path === "/privacy" || path === "/terms" || path === "/cookies"
          ? "yearly"
          : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/consultation" || path === "/capabilities"
          ? 0.9
          : path === "/privacy" || path === "/terms" || path === "/cookies"
            ? 0.3
            : 0.7,
  }));
}

import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";

export const dynamic = "force-static";

const BASE_URL = "https://camguide.vercel.app";

const SITE_UPDATED = "2026-03-22";

export default function sitemap(): MetadataRoute.Sitemap {
  const guideUrls = guides.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: g.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...guideUrls,
  ];
}

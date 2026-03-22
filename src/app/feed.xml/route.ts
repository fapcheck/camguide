import { guides, getCategoryById } from "@/data/guides";

export const dynamic = "force-static";

const BASE_URL = "https://camguide.vercel.app";

export function GET() {
  const items = guides
    .slice()
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((guide) => {
      const category = getCategoryById(guide.categoryId);
      return `    <item>
      <title><![CDATA[${guide.title}]]></title>
      <link>${BASE_URL}/guides/${guide.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/guides/${guide.slug}</guid>
      <description><![CDATA[${guide.description}]]></description>
      <pubDate>${new Date(guide.publishedAt).toUTCString()}</pubDate>${category ? `\n      <category>${category.title}</category>` : ""}
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>CamGuide — Гайды для независимых моделей</title>
    <link>${BASE_URL}</link>
    <description>Бесплатная библиотека видеогайдов для вебкам-моделей, которые хотят работать самостоятельно без студий.</description>
    <language>ru</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

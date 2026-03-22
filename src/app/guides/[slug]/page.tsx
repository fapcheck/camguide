import type { Metadata } from "next";
import {
  guides,
  getGuideBySlug,
  getCategoryById,
  getRelatedGuides,
} from "@/data/guides";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import GuideCard from "@/components/GuideCard";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import ShareButtons from "@/components/ShareButtons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  const thumb = `https://img.youtube.com/vi/${guide.youtubeId}/maxresdefault.jpg`;
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: `${guide.title} — CamGuide`,
      description: guide.description,
      type: "article",
      images: [{ url: thumb, width: 1280, height: 720, alt: guide.title }],
    },
    alternates: { canonical: `/guides/${slug}` },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const category = getCategoryById(guide.categoryId);
  const related = getRelatedGuides(slug);

  const BASE_URL = "https://camguide.vercel.app";

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: guide.title,
    description: guide.description,
    thumbnailUrl: `https://img.youtube.com/vi/${guide.youtubeId}/maxresdefault.jpg`,
    uploadDate: guide.publishedAt,
    embedUrl: `https://www.youtube.com/embed/${guide.youtubeId}`,
  };

  const breadcrumbItems = [
    { name: "Главная", url: BASE_URL },
    { name: "Гайды", url: `${BASE_URL}/guides` },
    ...(category
      ? [{ name: category.title, url: `${BASE_URL}/guides?category=${category.id}` }]
      : []),
    { name: guide.title, url: `${BASE_URL}/guides/${guide.slug}` },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Гайды", href: "/guides" },
          ...(category
            ? [{ label: category.title, href: `/guides?category=${category.id}` }]
            : []),
          { label: guide.title },
        ]}
      />

      {category && (
        <span className="mb-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
          {category.title}
        </span>
      )}

      <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
        {guide.title}
      </h1>

      <div className="mb-8 flex items-center gap-3 text-sm text-muted">
        <time dateTime={guide.publishedAt}>
          {new Date(guide.publishedAt).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <span aria-hidden="true">·</span>
        <span>{Math.max(1, Math.round(guide.content.split(/\s+/).length / 200))} мин чтения</span>
      </div>

      <div className="mb-8 aspect-video overflow-hidden rounded-xl border border-border">
        <YouTubeEmbed youtubeId={guide.youtubeId} title={guide.title} />
      </div>

      <div className="mb-8 max-w-none space-y-4">
        {guide.content.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-muted leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mb-16 border-t border-border pt-6">
        <ShareButtons url={`/guides/${guide.slug}`} title={guide.title} />
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="mb-6 text-xl font-semibold">Связанные гайды</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => (
              <GuideCard key={rel.slug} guide={rel} variant="compact" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

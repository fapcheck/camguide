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

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: `${guide.title} — CamGuide`,
      description: guide.description,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const category = getCategoryById(guide.categoryId);
  const related = getRelatedGuides(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: guide.title,
    description: guide.description,
    thumbnailUrl: `https://img.youtube.com/vi/${guide.youtubeId}/maxresdefault.jpg`,
    uploadDate: "2026-01-15",
    embedUrl: `https://www.youtube.com/embed/${guide.youtubeId}`,
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

      <h1 className="mb-8 text-2xl font-bold sm:text-3xl lg:text-4xl">
        {guide.title}
      </h1>

      <div className="mb-8 aspect-video overflow-hidden rounded-xl border border-border">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${guide.youtubeId}`}
          title={guide.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="mb-16 max-w-none space-y-4">
        {guide.content.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-muted leading-relaxed">
            {paragraph}
          </p>
        ))}
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

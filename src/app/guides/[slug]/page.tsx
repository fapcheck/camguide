import type { Metadata } from "next";
import Link from "next/link";
import {
  guides,
  getGuideBySlug,
  getCategoryById,
  getRelatedGuides,
} from "@/data/guides";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";

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

const categoryGradients: Record<string, string> = {
  "getting-started": "from-pink-500 to-rose-600",
  equipment: "from-violet-500 to-purple-600",
  "obs-streaming": "from-blue-500 to-cyan-600",
  promotion: "from-amber-500 to-orange-600",
  safety: "from-emerald-500 to-teal-600",
};

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
            {related.map((rel) => {
              const gradient =
                categoryGradients[rel.categoryId] ||
                "from-pink-500 to-rose-600";
              return (
                <Link
                  key={rel.slug}
                  href={`/guides/${rel.slug}`}
                  className="group card-hover-glow rounded-xl border border-border bg-surface overflow-hidden"
                >
                  <div
                    className={`h-32 bg-gradient-to-br ${gradient} flex items-center justify-center`}
                  >
                    <svg
                      className="h-10 w-10 text-white/60 transition-transform group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold leading-snug">
                      {rel.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

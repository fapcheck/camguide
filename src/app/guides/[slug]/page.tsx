import Link from "next/link";
import { guides, getGuideBySlug, getCategoryById } from "@/data/guides";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const category = getCategoryById(guide.categoryId);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Link
        href="/guides"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Назад к гайдам
      </Link>

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

      <div className="prose-invert max-w-none">
        <p className="text-muted leading-relaxed">{guide.description}</p>
      </div>
    </div>
  );
}

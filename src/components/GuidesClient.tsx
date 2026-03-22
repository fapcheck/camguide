"use client";

import { useState } from "react";
import Link from "next/link";
import type { Category, Guide } from "@/data/guides";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

const categoryGradients: Record<string, string> = {
  "getting-started": "from-pink-500 to-rose-600",
  equipment: "from-violet-500 to-purple-600",
  "obs-streaming": "from-blue-500 to-cyan-600",
  promotion: "from-amber-500 to-orange-600",
  safety: "from-emerald-500 to-teal-600",
};

type Props = {
  categories: Category[];
  guides: Guide[];
};

export default function GuidesClient({ categories, guides }: Props) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const query = search.toLowerCase().trim();
  const filtered = guides.filter((g) => {
    const matchesCategory = !activeCategory || g.categoryId === activeCategory;
    const matchesSearch =
      !query ||
      g.title.toLowerCase().includes(query) ||
      g.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const isFiltered = !!query || !!activeCategory;

  // Group by category when not filtered
  const groupedByCategory = isFiltered
    ? null
    : categories
        .map((cat) => ({
          category: cat,
          guides: filtered.filter((g) => g.categoryId === cat.id),
        }))
        .filter((group) => group.guides.length > 0);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>
      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          activeId={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted">
          Ничего не найдено. Попробуйте изменить запрос.
        </p>
      )}

      {isFiltered ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      ) : (
        groupedByCategory?.map(({ category, guides: catGuides }) => (
          <section key={category.id} className="mb-16">
            <h2 className="mb-6 text-xl font-semibold sm:text-2xl">
              {category.title}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {catGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        ))
      )}
    </>
  );
}

function GuideCard({ guide }: { guide: Guide }) {
  const gradient =
    categoryGradients[guide.categoryId] || "from-pink-500 to-rose-600";

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group card-hover-glow rounded-xl border border-border bg-surface overflow-hidden"
    >
      <div
        className={`relative h-40 bg-gradient-to-br ${gradient} flex items-center justify-center`}
      >
        <svg
          className="h-12 w-12 text-white/60 transition-transform group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        {guide.recommended && (
          <span className="absolute top-3 right-3 rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
            Рекомендуем
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="mb-2 font-semibold leading-snug">{guide.title}</h3>
        <p className="text-sm text-muted line-clamp-2">{guide.description}</p>
      </div>
    </Link>
  );
}

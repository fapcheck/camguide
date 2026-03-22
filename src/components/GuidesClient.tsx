"use client";

import { useState } from "react";
import type { Category, Guide } from "@/data/types";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import GuideCard from "./GuideCard";

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

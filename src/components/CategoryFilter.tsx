"use client";

import type { Category } from "@/data/guides";

type Props = {
  categories: Category[];
  activeId: string | null;
  onChange: (id: string | null) => void;
};

export default function CategoryFilter({
  categories,
  activeId,
  onChange,
}: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onChange(null)}
        className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          activeId === null
            ? "bg-accent text-white"
            : "border border-border bg-surface text-muted hover:text-foreground"
        }`}
      >
        Все
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id === activeId ? null : cat.id)}
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeId === cat.id
              ? "bg-accent text-white"
              : "border border-border bg-surface text-muted hover:text-foreground"
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
}

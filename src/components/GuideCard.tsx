import Link from "next/link";
import type { Guide } from "@/data/types";
import { categoryGradients } from "@/constants/styles";

type Props = {
  guide: Guide;
  variant?: "default" | "compact";
};

export default function GuideCard({ guide, variant = "default" }: Props) {
  const gradient =
    categoryGradients[guide.categoryId] || "from-pink-500 to-rose-600";
  const isCompact = variant === "compact";

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group card-hover-glow rounded-xl border border-border bg-surface overflow-hidden"
    >
      <div
        className={`relative ${isCompact ? "h-32" : "h-40"} bg-gradient-to-br ${gradient} flex items-center justify-center`}
      >
        <svg
          className={`${isCompact ? "h-10 w-10" : "h-12 w-12"} text-white/60 transition-transform group-hover:scale-110`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        {!isCompact && guide.recommended && (
          <span className="absolute top-3 right-3 rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
            Рекомендуем
          </span>
        )}
      </div>
      <div className={isCompact ? "p-4" : "p-5"}>
        <h3
          className={`${isCompact ? "text-sm" : "mb-2"} font-semibold leading-snug`}
        >
          {guide.title}
        </h3>
        {!isCompact && (
          <p className="text-sm text-muted line-clamp-2">
            {guide.description}
          </p>
        )}
      </div>
    </Link>
  );
}

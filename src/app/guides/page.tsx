import Link from "next/link";
import { categories, getGuidesByCategory } from "@/data/guides";

const categoryGradients: Record<string, string> = {
  "getting-started": "from-pink-500 to-rose-600",
  equipment: "from-violet-500 to-purple-600",
  "obs-streaming": "from-blue-500 to-cyan-600",
  promotion: "from-amber-500 to-orange-600",
  safety: "from-emerald-500 to-teal-600",
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Библиотека гайдов</h1>
      <p className="mb-12 max-w-2xl text-muted">
        Все видеогайды собраны по категориям. Выберите тему и начните обучение
        прямо сейчас — бесплатно и без регистрации.
      </p>

      {categories.map((cat) => {
        const catGuides = getGuidesByCategory(cat.id);
        const gradient = categoryGradients[cat.id] || "from-pink-500 to-rose-600";

        return (
          <section key={cat.id} className="mb-16">
            <h2 className="mb-6 text-xl font-semibold sm:text-2xl">
              {cat.title}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {catGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group rounded-xl border border-border bg-surface overflow-hidden transition-colors hover:bg-surface-hover"
                >
                  <div
                    className={`h-40 bg-gradient-to-br ${gradient} flex items-center justify-center`}
                  >
                    <svg
                      className="h-12 w-12 text-white/60 transition-transform group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 font-semibold leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2">
                      {guide.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

import type { Metadata } from "next";
import { categories, guides } from "@/data/guides";
import GuidesClient from "@/components/GuidesClient";

export const metadata: Metadata = {
  title: "Библиотека гайдов",
  description:
    "Бесплатные видеогайды для вебкам-моделей — от настройки оборудования до продвижения и безопасности.",
  openGraph: {
    title: "Библиотека гайдов — CamGuide",
    description:
      "Бесплатные видеогайды для вебкам-моделей — от настройки оборудования до продвижения и безопасности.",
  },
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
        Библиотека гайдов
      </h1>
      <p className="mb-8 max-w-2xl text-muted">
        Все видеогайды собраны по категориям. Выберите тему и начните обучение
        прямо сейчас — бесплатно и без регистрации.
      </p>
      <GuidesClient categories={categories} guides={guides} />
    </div>
  );
}

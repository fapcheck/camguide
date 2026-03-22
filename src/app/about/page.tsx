import type { Metadata } from "next";
import { mission, story, values } from "@/data/about";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "О проекте",
  description:
    "CamGuide — бесплатный образовательный проект для вебкам-моделей, которые хотят работать самостоятельно.",
  openGraph: {
    title: "О проекте — CamGuide",
    description:
      "CamGuide — бесплатный образовательный проект для вебкам-моделей, которые хотят работать самостоятельно.",
  },
  alternates: { canonical: "/about" },
};

const iconMap: Record<string, React.ReactNode> = {
  shield: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  heart: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  star: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <AnimateIn>
        <h1 className="mb-6 text-3xl font-bold sm:text-4xl">
          О проекте CamGuide
        </h1>
        <p className="mb-6 text-lg leading-relaxed text-muted">{mission}</p>
        <p className="mb-16 leading-relaxed text-muted">{story}</p>
      </AnimateIn>

      <AnimateIn delay={100}>
        <h2 className="mb-8 text-2xl font-bold">Наши ценности</h2>
      </AnimateIn>

      <div className="grid gap-8 sm:grid-cols-3">
        {values.map((v, i) => (
          <AnimateIn key={v.title} delay={150 + i * 100}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 text-accent">{iconMap[v.icon]}</div>
              <h3 className="mb-2 text-lg font-semibold">{v.title}</h3>
              <p className="text-sm text-muted">{v.description}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}

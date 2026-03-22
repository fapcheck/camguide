import type { Metadata } from "next";
import { faqItems } from "@/data/faq";
import Accordion from "@/components/Accordion";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы",
  description:
    "Ответы на популярные вопросы о самостоятельной работе вебкам-моделью — оборудование, безопасность, заработок.",
  openGraph: {
    title: "FAQ — CamGuide",
    description:
      "Ответы на популярные вопросы о самостоятельной работе вебкам-моделью.",
  },
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AnimateIn>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          Часто задаваемые вопросы
        </h1>
        <p className="mb-10 text-muted">
          Собрали ответы на самые популярные вопросы. Если не нашли свой —
          напишите нам, и мы обязательно ответим.
        </p>
      </AnimateIn>

      <AnimateIn delay={100}>
        <Accordion items={faqItems} />
      </AnimateIn>

      <AnimateIn delay={200}>
        <div className="mt-16 rounded-xl border border-border bg-surface p-8 text-center">
          <h2 className="mb-3 text-xl font-semibold">Не нашли ответ?</h2>
          <p className="mb-6 text-sm text-muted">
            Напишите нам в Telegram — мы ответим в течение 24 часов.
          </p>
          <a
            href="https://t.me/camguide_support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Написать в Telegram
          </a>
        </div>
      </AnimateIn>
    </div>
  );
}

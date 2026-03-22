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
    </div>
  );
}

"use client";

import type { FaqItem } from "@/data/faq";

type Props = {
  items: FaqItem[];
};

export default function Accordion({ items }: Props) {
  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer items-center justify-between py-5 text-left font-medium transition-colors hover:text-accent">
            {item.question}
            <svg
              className="ml-4 h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="accordion-content">
            <div>
              <p className="pb-5 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}

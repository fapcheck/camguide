import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const benefits = [
  {
    icon: "💰",
    title: "100% дохода — ваш",
    text: "Никаких комиссий студиям. Вы получаете всё, что заработали.",
  },
  {
    icon: "🕐",
    title: "Свободный график",
    text: "Работайте когда удобно. Никто не контролирует ваше расписание.",
  },
  {
    icon: "🎓",
    title: "Пошаговые гайды",
    text: "Видеоуроки от профессионалов по каждому аспекту работы.",
  },
  {
    icon: "🔒",
    title: "Безопасность",
    text: "Научим защищать свои данные и сохранять анонимность.",
  },
  {
    icon: "📈",
    title: "Рост аудитории",
    text: "Проверенные стратегии продвижения и удержания зрителей.",
  },
  {
    icon: "🎥",
    title: "Техническая база",
    text: "Настройка оборудования, OBS и стриминга с нуля.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(236,72,153,0.08)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center">
          <AnimateIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Работай на себя.
              <br />
              <span className="bg-gradient-to-r from-accent to-pink-400 bg-clip-text text-transparent">
                Без студий и посредников.
              </span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Бесплатная библиотека видеогайдов для вебкам-моделей, которые хотят
              начать работать самостоятельно. От настройки оборудования до
              продвижения — всё в одном месте.
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <Link
              href="/guides"
              className="mt-10 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Смотреть гайды
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-4">
          <AnimateIn>
            <h2 className="mb-12 text-center text-2xl font-bold sm:text-3xl">
              Почему самостоятельная работа?
            </h2>
          </AnimateIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <AnimateIn key={b.title} delay={i * 80}>
                <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover h-full">
                  <div className="mb-3 text-3xl">{b.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold">{b.title}</h3>
                  <p className="text-sm text-muted">{b.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <AnimateIn>
            <h2 className="text-2xl font-bold sm:text-3xl">Готовы начать?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Наши гайды помогут вам пройти путь от новичка до уверенной
              независимой модели. Всё бесплатно и без регистрации.
            </p>
            <Link
              href="/guides"
              className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Начать обучение
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}

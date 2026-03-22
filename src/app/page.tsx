import Link from "next/link";

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
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Работай на себя.
          <br />
          <span className="text-accent">Без студий и посредников.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Бесплатная библиотека видеогайдов для вебкам-моделей, которые хотят
          начать работать самостоятельно. От настройки оборудования до
          продвижения — всё в одном месте.
        </p>
        <Link
          href="/guides"
          className="mt-10 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Смотреть гайды
        </Link>
      </section>

      {/* Benefits */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            Почему самостоятельная работа?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover"
              >
                <div className="mb-3 text-3xl">{b.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{b.title}</h3>
                <p className="text-sm text-muted">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-6xl px-4">
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
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-32 text-center">
      <span className="text-6xl font-bold text-accent">404</span>
      <h1 className="mt-4 text-2xl font-bold">Страница не найдена</h1>
      <p className="mt-3 text-muted">
        Возможно, она была удалена или вы перешли по неверной ссылке.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        На главную
      </Link>
    </div>
  );
}

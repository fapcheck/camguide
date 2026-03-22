import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted">
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <span>© 2026 CamGuide. Все права защищены.</span>
        <div className="flex gap-6">
          <Link href="/faq" className="hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link
            href="/about"
            className="hover:text-foreground transition-colors"
          >
            О нас
          </Link>
        </div>
      </div>
    </footer>
  );
}

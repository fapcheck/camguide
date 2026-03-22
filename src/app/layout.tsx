import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "CamGuide — Гайды для независимых моделей",
  description:
    "Видеогайды для вебкам-моделей, которые хотят работать самостоятельно без студий",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
          <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-bold text-accent">
              CamGuide
            </Link>
            <div className="flex gap-6 text-sm">
              <Link
                href="/"
                className="text-muted hover:text-foreground transition-colors"
              >
                Главная
              </Link>
              <Link
                href="/guides"
                className="text-muted hover:text-foreground transition-colors"
              >
                Гайды
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border py-8 text-center text-sm text-muted">
          <div className="mx-auto max-w-6xl px-4">
            © 2026 CamGuide. Все права защищены.
          </div>
        </footer>
      </body>
    </html>
  );
}

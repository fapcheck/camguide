import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "CamGuide — Гайды для независимых моделей",
    template: "%s — CamGuide",
  },
  description:
    "Бесплатная библиотека видеогайдов для вебкам-моделей, которые хотят работать самостоятельно без студий.",
  metadataBase: new URL("https://camguide.vercel.app"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "CamGuide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Top nav */}
        <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
          <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-bold text-accent">
              CamGuide
            </Link>
            <div className="hidden sm:flex gap-6 text-sm">
              <Link href="/" className="text-muted hover:text-foreground transition-colors">
                Главная
              </Link>
              <Link href="/guides" className="text-muted hover:text-foreground transition-colors">
                Гайды
              </Link>
              <Link href="/faq" className="text-muted hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link href="/about" className="text-muted hover:text-foreground transition-colors">
                О нас
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1 pb-16 sm:pb-0">{children}</main>

        <footer className="border-t border-border py-8 text-sm text-muted">
          <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <span>© 2026 CamGuide. Все права защищены.</span>
            <div className="flex gap-6">
              <Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">О нас</Link>
            </div>
          </div>
        </footer>

        {/* Bottom tab bar — mobile only */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface/95 backdrop-blur-md sm:hidden">
          <div className="flex">
            <Link href="/" className="flex flex-1 flex-col items-center gap-1 py-3 text-muted hover:text-foreground transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
              </svg>
              <span className="text-xs">Главная</span>
            </Link>
            <Link href="/guides" className="flex flex-1 flex-col items-center gap-1 py-3 text-muted hover:text-foreground transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs">Гайды</span>
            </Link>
            <Link href="/faq" className="flex flex-1 flex-col items-center gap-1 py-3 text-muted hover:text-foreground transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs">FAQ</span>
            </Link>
            <Link href="/about" className="flex flex-1 flex-col items-center gap-1 py-3 text-muted hover:text-foreground transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs">О нас</span>
            </Link>
          </div>
        </nav>

        {/* Analytics placeholder — uncomment and add your ID when ready */}
        {/* <Script src="https://mc.yandex.ru/metrika/tag.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}

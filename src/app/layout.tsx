import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MobileTabBar from "@/components/layout/MobileTabBar";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
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
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Перейти к содержимому
        </a>
        <Navigation />
        <main id="main-content" className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        <MobileTabBar />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}

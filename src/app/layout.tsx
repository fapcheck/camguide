import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MobileTabBar from "@/components/layout/MobileTabBar";
import ScrollToTop from "@/components/ScrollToTop";
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
        <Navigation />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        <MobileTabBar />
        <ScrollToTop />
      </body>
    </html>
  );
}

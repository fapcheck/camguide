import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CamGuide — Гайды для независимых моделей",
    short_name: "CamGuide",
    description:
      "Бесплатная библиотека видеогайдов для вебкам-моделей, которые хотят работать самостоятельно.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#ec4899",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

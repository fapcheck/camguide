export type Category = {
  id: string;
  title: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  content: string;
  categoryId: string;
  youtubeId: string;
  recommended: boolean;
  relatedSlugs: string[];
  publishedAt: string;
};

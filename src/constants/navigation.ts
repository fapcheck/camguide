export type NavItem = {
  href: string;
  label: string;
  icon: "home" | "guides" | "faq" | "about";
};

export const navItems: NavItem[] = [
  { href: "/", label: "Главная", icon: "home" },
  { href: "/guides", label: "Гайды", icon: "guides" },
  { href: "/faq", label: "FAQ", icon: "faq" },
  { href: "/about", label: "О нас", icon: "about" },
];

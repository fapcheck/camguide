import Link from "next/link";
import { navItems } from "@/constants/navigation";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-accent">
          CamGuide
        </Link>
        <div className="hidden sm:flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

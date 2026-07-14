import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href=""
          className="flex shrink-0 items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-ink whitespace-nowrap"
        >
          <Image
            src="/logo-500.png"
            alt="Bishranta Regmi"
            width={32}
            height={32}
            priority
            className="size-8 shrink-0 rounded-full"
          />
          <span className="hidden sm:inline">Bishranta Regmi</span>
        </a>
        <nav className="flex items-center gap-3 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm text-ink-dim transition-colors hover:text-ink sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="shrink-0 whitespace-nowrap rounded-full bg-accent px-3 py-2 text-sm font-medium text-accent-ink transition-transform active:scale-[0.97] hover:-translate-y-0.5 sm:px-4"
          >
            Say hello
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

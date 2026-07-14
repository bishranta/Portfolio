"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { ThemeToggle } from "./theme-toggle";
import { Magnetic } from "./magnetic";

const links = [
  { href: "#skills", label: "Skills" },
  // { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  function navigateAndClose(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const id = href.slice(1);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    history.pushState(null, "", href);

    // Closing the menu re-renders the page; doing that while a smooth
    // scroll is still in flight cancels the scroll in Chromium. Wait for
    // it to actually finish before closing.
    if (reduce) {
      setOpen(false);
      return;
    }
    if ("onscrollend" in window) {
      window.addEventListener("scrollend", () => setOpen(false), {
        once: true,
      });
    } else {
      setTimeout(() => setOpen(false), 700);
    }
  }

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
        <nav className="flex items-center gap-3 sm:gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm text-ink-dim transition-colors hover:text-ink lg:inline"
            >
              {link.label}
            </a>
          ))}
          <Magnetic className="hidden shrink-0 lg:block">
            <a
              href="#contact"
              className="whitespace-nowrap rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-transform active:scale-[0.97]"
            >
              Say hello
            </a>
          </Magnetic>
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-transform active:scale-[0.94] lg:hidden"
          >
            {open ? <X size={16} /> : <List size={16} />}
          </button>
        </nav>
      </div>

      <motion.div
        initial={false}
        animate={
          reduce
            ? { height: open ? "auto" : 0 }
            : { height: open ? "auto" : 0, opacity: open ? 1 : 0 }
        }
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-full overflow-hidden border-b border-line/70 bg-paper shadow-lg lg:hidden"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={open ? undefined : -1}
              onClick={(e) => navigateAndClose(e, link.href)}
              className="rounded-lg px-2 py-2.5 text-base text-ink-dim transition-colors hover:bg-paper-dim hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            tabIndex={open ? undefined : -1}
            onClick={(e) => navigateAndClose(e, "#contact")}
            className="mt-2 inline-flex self-start items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-medium text-accent-ink transition-transform active:scale-[0.97]"
          >
            Say hello
          </a>
        </nav>
      </motion.div>
    </header>
  );
}

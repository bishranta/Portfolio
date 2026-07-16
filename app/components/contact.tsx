"use client";

import { useState } from "react";
import { ArrowUpRight, Check, MapPin } from "@phosphor-icons/react";
import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { BrandIcon } from "./brand-icon";
import { profile } from "@/app/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const links = [
    {
      key: "email",
      label: copied ? "Copied!" : "Email",
      slug: "gmail",
      color: profile.gmailColor,
      onClick: copyEmail,
      bg: "bg-teal/15",
    },
    {
      key: "github",
      label: "GitHub",
      slug: "github",
      color: profile.githubColor,
      href: profile.github,
      bg: "bg-coral/15",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      slug: "linkedin",
      color: profile.linkedinColor,
      href: profile.linkedin,
      bg: "bg-mustard/15",
    },
    {
      key: "instagram",
      label: "Instagram",
      slug: "instagram",
      color: profile.instagramColor,
      href: profile.instagram,
      bg: "bg-teal/15",
    },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 -z-10 size-[360px] rounded-full bg-mustard/10 blur-3xl"
      />
      <Reveal className="flex flex-col items-center text-center">
        <span className="mb-4 block h-1.5 w-9 rounded-full bg-mustard" />
        <h2 className="max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
          Get in touch.
        </h2>
      </Reveal>

      <Reveal
        delay={0.05}
        className="mt-8 grid gap-10 rounded-3xl border border-line bg-paper-dim px-8 py-12 md:grid-cols-[1fr_1.1fr] md:px-12 md:py-16"
      >
        <div>
          <p className="max-w-[18ch] text-2xl font-semibold tracking-tight text-ink md:text-4xl">
            Let&apos;s build something worth shipping.
          </p>
          <p className="mt-5 max-w-[42ch] text-lg text-ink-dim text-pretty">
            I read every message myself, and I would love to hear from you,
            whether it&apos;s a role, a project, or just a hello.
          </p>
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink-dim">
            <MapPin size={16} />
            {profile.location}
          </p>
        </div>

        <RevealStagger className="grid grid-cols-2 gap-3">
          {links.map((link) => {
            const Comp = link.href ? "a" : "button";
            return (
              <RevealItem key={link.key}>
                <Comp
                  {...(link.href
                    ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
                    : { onClick: link.onClick })}
                  className={`flex w-full flex-col items-center gap-4 rounded-2xl p-5 text-center transition-transform hover:-translate-y-1 active:scale-[0.97] ${link.bg}`}
                >
                  <span className="grid size-14 place-items-center rounded-2xl bg-white shadow-sm">
                    {link.key === "email" && copied ? (
                      <Check size={28} weight="bold" className="text-teal" />
                    ) : (
                      <BrandIcon
                        slug={link.slug}
                        color={link.color}
                        size={30}
                        label={link.label}
                      />
                    )}
                  </span>
                  <p className="text-base font-medium text-ink">
                    {link.label}
                  </p>
                </Comp>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </Reveal>
    </section>
  );
}

export function ResumeLink() {
  return (
    <a
      href="/Bishranta_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
    >
      Download CV
      <ArrowUpRight size={14} />
    </a>
  );
}

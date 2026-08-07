"use client";

import { useState } from "react";
import { ArrowUpRight, Check, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import { Reveal, RevealItem, RevealStagger } from "./reveal";
import { BrandIcon } from "./brand-icon";
import { profile } from "@/app/lib/data";

const WEB3FORMS_ACCESS_KEY = "890d89e8-b7f4-4d34-b2d4-b44e3e2387d2";

type FormStatus = "idle" | "pending" | "success" | "error";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("pending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New message from portfolio site");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        console.error("Web3Forms error response:", result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Web3Forms request failed:", err);
      setStatus("error");
    }
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
    {
      key: "facebook",
      label: "Facebook",
      slug: "facebook",
      color: profile.facebookColor,
      href: profile.facebook,
      bg: "bg-coral/15",
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
        className="mt-8 grid gap-10 rounded-3xl border border-line bg-paper-dim px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_1.1fr] lg:px-12 lg:py-16"
      >
        <div className="flex flex-col">
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
          <a
            href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
            className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-dim transition-colors hover:text-ink"
          >
            <EnvelopeSimple size={16} />
            {profile.email}
          </a>

          <RevealStagger className="mt-8 grid grid-cols-2 gap-3 min-[420px]:grid-cols-3">
            {links.map((link) => {
              const Comp = link.href ? "a" : "button";
              return (
                <RevealItem key={link.key}>
                  <Comp
                    {...(link.href
                      ? { href: link.href, target: "_blank", rel: "noopener noreferrer" }
                      : { onClick: link.onClick })}
                    className={`flex w-full min-w-0 items-center gap-2.5 rounded-full py-2.5 pl-2.5 pr-4 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 active:scale-[0.97] ${link.bg}`}
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white shadow-sm">
                      {link.key === "email" && copied ? (
                        <Check size={16} weight="bold" className="text-teal" />
                      ) : (
                        <BrandIcon
                          slug={link.slug}
                          color={link.color}
                          size={16}
                          label={link.label}
                        />
                      )}
                    </span>
                    <span className="truncate">{link.label}</span>
                  </Comp>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-dim/60 outline-none transition-colors focus:border-teal"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-dim/60 outline-none transition-colors focus:border-teal"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="Send a quick message"
              className="resize-none rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-dim/60 outline-none transition-colors focus:border-teal"
            />
          </div>

          <button
            type="submit"
            disabled={status === "pending"}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform active:scale-[0.97] hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === "pending" ? "Sending..." : "Send message"}
            {status !== "pending" && <ArrowUpRight size={16} weight="bold" />}
          </button>

          {status === "success" && (
            <p className="text-sm text-teal">
              Message sent. I will get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-coral">
              Something went wrong. Please try emailing me directly.
            </p>
          )}
        </form>
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

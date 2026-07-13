"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
} from "@phosphor-icons/react";
import { Reveal } from "./reveal";
import { profile } from "@/app/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="rounded-3xl border border-line bg-paper-dim px-8 py-16 text-center md:px-16">
        <h2 className="mx-auto max-w-[20ch] text-3xl font-semibold tracking-tight md:text-5xl">
          Have a project, a role, or just a hello in mind?
        </h2>
        <p className="mx-auto mt-5 max-w-[50ch] text-lg text-ink-dim text-pretty">
          I read every message myself, and I would love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform active:scale-[0.97] hover:-translate-y-0.5"
          >
            {copied ? (
              <>
                Copied
                <Check size={16} weight="bold" />
              </>
            ) : (
              <>
                {profile.email}
                <Copy size={16} weight="bold" />
              </>
            )}
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-transform active:scale-[0.97] hover:-translate-y-0.5"
          >
            <GithubLogo size={18} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-transform active:scale-[0.97] hover:-translate-y-0.5"
          >
            <LinkedinLogo size={18} />
            LinkedIn
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-transform active:scale-[0.97] hover:-translate-y-0.5"
          >
            <InstagramLogo size={18} />
            Instagram
          </a>
        </div>
        <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-ink-dim">
          <MapPin size={16} />
          {profile.location}
        </p>
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
      Resume
      <ArrowUpRight size={14} />
    </a>
  );
}

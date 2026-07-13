import { profile } from "@/app/lib/data";
import { ResumeLink } from "./contact";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center gap-4 border-t border-line pt-8 text-sm text-ink-dim md:flex-row md:justify-between">
        <p>{profile.name}</p>
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            {profile.githubHandle}
          </a>
          <ResumeLink />
        </div>
      </div>
    </footer>
  );
}

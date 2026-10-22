import React from 'react';
import { VerifiedBadge, CopyIcon, CheckIcon, ShareIcon, MailIcon } from './Icons';

export default function Profile({ profile, onCopyLink, copied, onShare }) {
  return (
    <section className="flex flex-col items-center text-center pt-8 sm:pt-12 pb-6 px-4">
      {/* Name and Verified Badge */}
      <div className="flex items-center justify-center gap-2 mb-1.5">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <span title="Verified Hackerzone Founder" aria-label="Verified Founder" className="inline-flex items-center text-foreground">
          <VerifiedBadge className="w-5 h-5 text-foreground" />
        </span>
      </div>

      {/* Handle and Roles */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3.5">
        <span className="text-sm font-medium text-muted-foreground font-mono">
          {profile.handle}
        </span>
        <span className="text-muted-foreground/40 text-xs">•</span>
        <span className="inline-flex items-center rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-medium text-foreground border border-border/60">
          Founder & CEO, Hackerzone
        </span>
      </div>

      {/* Verified Bio */}
      <p className="max-w-lg text-[14.5px] sm:text-base leading-relaxed text-muted-foreground font-normal mb-5">
        {profile.bio}
      </p>

      {/* Quick Profile Actions */}
      <div className="flex items-center justify-center gap-2.5">
        <button
          type="button"
          onClick={onCopyLink}
          aria-label="Copy profile URL"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3.5 py-2 text-xs sm:text-sm font-medium text-foreground shadow-2xs hover:bg-muted active:scale-[0.98] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none"
        >
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-600">Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-4 h-4 text-muted-foreground" />
              <span>Copy Link</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onShare}
          aria-label="Share this profile"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3.5 py-2 text-xs sm:text-sm font-medium text-foreground shadow-2xs hover:bg-muted active:scale-[0.98] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none"
        >
          <ShareIcon className="w-4 h-4 text-muted-foreground" />
          <span>Share</span>
        </button>

        <a
          href={`mailto:${profile.email}`}
          aria-label="Send email to Satyam"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3.5 py-2 text-xs sm:text-sm font-medium text-foreground shadow-2xs hover:bg-muted active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none"
        >
          <MailIcon className="w-4 h-4 text-muted-foreground" />
          <span className="hidden xs:inline">Email</span>
        </a>
      </div>
    </section>
  );
}

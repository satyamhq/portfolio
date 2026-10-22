import React from 'react';
import { ShareIcon, ExternalLinkIcon } from './Icons';

export default function Navbar({ onShare }) {
  return (
    <header className="sticky top-0 w-full z-[100] bg-background/95 backdrop-blur-md border-b border-border/80">
      <div className="mx-auto flex h-[70px] lg:h-[76px] w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Left: Hackerzone Logo + Personal Hub Pill */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <a
            href="https://hackerzone.in/"
            className="inline-flex items-center rounded-md transition-opacity duration-150 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground shrink-0"
            aria-label="Hackerzone : Home"
          >
            <picture>
              <source srcSet="/brand/logo-black.webp" type="image/webp" />
              <img
                src="/brand/logo-black.png"
                alt="Hackerzone"
                width="116"
                height="29"
                decoding="async"
                fetchpriority="high"
                className="h-[25px] sm:h-[27px] md:h-[28px] w-auto object-contain shrink-0"
              />
            </picture>
          </a>

          <span className="h-4 w-px bg-border/80 hidden xs:inline-block" aria-hidden="true" />

          <span className="hidden xs:inline-flex items-center gap-1.5 rounded-full bg-foreground/5 px-2.5 py-0.5 text-[11px] sm:text-xs font-medium text-muted-foreground border border-border/50">
            <span>Satyam</span>
            <span className="text-foreground/40">/</span>
            <span className="text-foreground/80 font-semibold">Links</span>
          </span>
        </div>

        {/* Right actions: Share and link to hackerzone.in */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Share Profile button */}
          <button
            type="button"
            onClick={onShare}
            aria-label="Share profile"
            className="inline-flex items-center justify-center h-9 px-3 rounded-md border border-border bg-background text-xs sm:text-sm font-medium text-foreground hover:bg-muted active:scale-[0.98] transition-all gap-1.5 shadow-2xs cursor-pointer focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none"
          >
            <ShareIcon className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="hidden sm:inline">Share</span>
          </button>

          {/* Link back to hackerzone.in */}
          <a
            href="https://hackerzone.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Hackerzone official platform"
            className="inline-flex items-center justify-center h-9 px-3 sm:px-4 rounded-md border border-foreground bg-foreground text-background text-xs sm:text-sm font-medium hover:bg-foreground/90 active:scale-[0.98] transition-all gap-1.5 shadow-2xs shrink-0 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none"
          >
            <span className="hidden xs:inline">hackerzone.in</span>
            <span className="xs:hidden">HZ</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import { MailIcon, LinkedInIcon, InstagramIcon, GitHubIcon, HackerzoneMark } from './Icons';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#262626] bg-[#0a0a0a] text-[#fafafa]">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-6 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="space-y-1">
            <a
              href="https://hackerzone.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hackerzone : Home"
              className="inline-flex items-center shrink-0 rounded-md transition-opacity duration-150 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <picture>
                <source srcSet="/brand/logo-white.webp" type="image/webp" />
                <img
                  src="/brand/logo-white.png"
                  alt="Hackerzone"
                  width="104"
                  height="26"
                  loading="lazy"
                  decoding="async"
                  className="h-[22px] sm:h-[24px] w-auto object-contain shrink-0"
                />
              </picture>
            </a>
            <p className="text-[11px] sm:text-xs text-white/60 font-medium">
              Where AI builders ship.
            </p>
          </div>

          {/* Social Icons matching Hackerzone footer */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="mailto:satyam@hackerzone.in"
              aria-label="Email Satyam Kumar"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            >
              <MailIcon className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/satyamhq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Satyam Kumar on LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>

            <a
              href="https://instagram.com/satyamkr.31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Satyam Kumar on Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>

            <a
              href="https://github.com/satyamhq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Satyam Kumar on GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>

            <a
              href="https://hackerzone.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Hackerzone platform"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            >
              <HackerzoneMark className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright and verified domain note */}
        <div className="pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/50">
          <p>© 2026 Satyam Kumar · Official Personal Link Hub</p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/60">
            <a
              href="https://satyam.hackerzone.in/"
              className="hover:text-white transition-colors"
            >
              satyam.hackerzone.in
            </a>
            <span>•</span>
            <a
              href="https://hackerzone.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              hackerzone.in
            </a>
            <span>•</span>
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="LLM and Answer Engine Context (llms.txt)"
            >
              llms.txt
            </a>
            <span>•</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="XML Sitemap"
            >
              sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

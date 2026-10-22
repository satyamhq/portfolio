import React from 'react';
import { ArrowRightIcon } from './Icons';
import { HACKERZONE_S1 } from '../data/links';

export default function HackerzoneS1Card() {
  return (
    <div className="group/card relative overflow-hidden rounded-2xl border border-border bg-muted/60 p-5 sm:p-6 transition-all duration-200 hover:border-foreground/30 hover:bg-muted shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
        {/* Artwork badge with responsive WebP source & explicit dimensions */}
        <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-2.5 shadow-2xs">
          <picture>
            <source srcSet="/images/hackerzone-s1-square.webp" type="image/webp" />
            <img
              src={HACKERZONE_S1.image}
              alt={HACKERZONE_S1.title}
              width="112"
              height="112"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain drop-shadow-xs transition-transform duration-300 group-hover/card:scale-105"
            />
          </picture>
        </div>

        {/* Details */}
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full bg-foreground/10 px-2.5 py-0.5 text-[10.5px] font-semibold text-foreground uppercase tracking-wider">
              {HACKERZONE_S1.badge}
            </span>
            <span className="inline-flex rounded-full bg-emerald-500/10 text-emerald-600 px-2 py-0.5 text-[10px] font-medium">
              ● {HACKERZONE_S1.status}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
            {HACKERZONE_S1.title}
          </h3>

          <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
            {HACKERZONE_S1.description}
          </p>

          <div className="pt-1">
            <a
              href={HACKERZONE_S1.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore Hackerzone S1 Hackathons (Coming Soon)"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground hover:underline group-hover/card:translate-x-0.5 transition-transform"
            >
              <span>Explore S1 Announcements</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import {
  InstagramIcon,
  WhatsAppIcon,
  LinkedInIcon,
  GitHubIcon,
  MailIcon,
  HackerzoneMark,
  ArrowRightIcon,
  ExternalLinkIcon,
} from './Icons';

function getIcon(iconType) {
  switch (iconType) {
    case 'instagram':
      return <InstagramIcon className="w-5 h-5 text-foreground" />;
    case 'whatsapp':
      return <WhatsAppIcon className="w-5 h-5 text-foreground" />;
    case 'linkedin':
      return <LinkedInIcon className="w-5 h-5 text-foreground" />;
    case 'github':
      return <GitHubIcon className="w-5 h-5 text-foreground" />;
    case 'email':
      return <MailIcon className="w-5 h-5 text-foreground" />;
    case 'hackerzone':
      return <HackerzoneMark className="w-5 h-5 text-foreground" />;
    default:
      return <ExternalLinkIcon className="w-5 h-5 text-foreground" />;
  }
}

export default function LinkCard({ link }) {
  const isExternal = link.isExternal !== false;

  return (
    <a
      href={link.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={`Satyam Kumar on ${link.title}`}
      title={link.title}
      className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl border border-border bg-card hover:bg-muted/50 hover:border-foreground/25 shadow-2xs hover:shadow-xs transition-all duration-150 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none"
    >
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
        {/* Authentic Icon Container */}
        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background group-hover:bg-muted/80 group-hover:border-border transition-colors">
          {getIcon(link.icon)}
        </div>

        {/* Text Content */}
        <div className="min-w-0 flex-1">
          <span className="text-[15px] sm:text-[16px] font-medium text-foreground tracking-tight group-hover:text-foreground">
            {link.title}
          </span>
        </div>
      </div>

      {/* Action Arrow Icon */}
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-0.5 transition-all">
        {isExternal ? (
          <ArrowRightIcon className="w-4 h-4" />
        ) : (
          <MailIcon className="w-4 h-4" />
        )}
      </div>
    </a>
  );
}

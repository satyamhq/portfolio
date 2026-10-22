import React, { useState, useEffect } from 'react';
import {
  CloseIcon,
  CopyIcon,
  CheckIcon,
  WhatsAppIcon,
  LinkedInIcon,
  XIcon,
  TelegramIcon,
  MailIcon,
  MessageCircleIcon,
  SmartphoneIcon,
} from './Icons';

export default function ShareModal({ isOpen, onClose, profile, onToast }) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  const shareUrl = profile?.canonicalUrl || 'https://satyam.hackerzone.in/';
  const shareTitle = `${profile?.name || 'Satyam Kumar'} | Hackerzone`;
  const shareText = `Check out ${profile?.name || 'Satyam Kumar'}'s official personal link hub on Hackerzone`;

  useEffect(() => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      setCanNativeShare(true);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = shareUrl;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      if (onToast) onToast('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2400);
    } catch {
      if (onToast) onToast('Unable to copy automatically.');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        onClose();
      } catch (err) {
        if (err.name !== 'AbortError') {
          handleCopy();
        }
      }
    }
  };

  const shareOptions = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      actionUrl: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`,
      badgeColor: 'hover:border-emerald-500/50 hover:bg-emerald-500/5',
      iconColor: 'text-[#25D366]',
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      icon: XIcon,
      actionUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      badgeColor: 'hover:border-foreground/40 hover:bg-foreground/5',
      iconColor: 'text-foreground',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: LinkedInIcon,
      actionUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      badgeColor: 'hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5',
      iconColor: 'text-[#0A66C2]',
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: TelegramIcon,
      actionUrl: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      badgeColor: 'hover:border-[#229ED9]/40 hover:bg-[#229ED9]/5',
      iconColor: 'text-[#229ED9]',
    },
    {
      id: 'sms',
      name: 'Messages',
      icon: MessageCircleIcon,
      actionUrl: `sms:?&body=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      badgeColor: 'hover:border-foreground/40 hover:bg-foreground/5',
      iconColor: 'text-foreground',
    },
    {
      id: 'email',
      name: 'Email',
      icon: MailIcon,
      actionUrl: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
      badgeColor: 'hover:border-foreground/40 hover:bg-foreground/5',
      iconColor: 'text-foreground',
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-md bg-background border border-border rounded-t-2xl sm:rounded-2xl shadow-2xl p-5 sm:p-6 text-foreground max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Indicator */}
        <div className="w-12 h-1 bg-muted-foreground/30 rounded-full mx-auto mb-4 sm:hidden" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-border/70 mb-4">
          <div>
            <h2 id="share-modal-title" className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
              Share Profile
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Choose an app or copy link to share Satyam's hub
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close share options"
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-foreground"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Copy Link Row */}
        <div className="mb-5">
          <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1.5">
            Profile Link
          </label>
          <div className="flex items-center gap-2 p-1.5 pl-3 rounded-lg border border-border bg-muted/40">
            <span className="text-xs font-mono text-foreground truncate flex-1 select-all">
              {shareUrl}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy link to clipboard"
              className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background hover:bg-foreground/90 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs focus-visible:outline-2 focus-visible:outline-foreground"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Share via Apps Grid */}
        <div className="mb-4">
          <label className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2.5">
            Share via Apps
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {shareOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <a
                  key={opt.id}
                  href={opt.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border border-border bg-card text-card-foreground text-center transition-all duration-150 active:scale-95 cursor-pointer shadow-2xs group ${opt.badgeColor}`}
                  onClick={() => {
                    if (onToast) onToast(`Sharing to ${opt.name}...`);
                  }}
                >
                  <span className={`flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 mb-2 transition-transform group-hover:scale-110 ${opt.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-medium text-foreground line-clamp-1">
                    {opt.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* System / Phone Native Share Button (if supported) */}
        {canNativeShare && (
          <div className="pt-2 border-t border-border/70">
            <button
              type="button"
              onClick={handleNativeShare}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-border bg-background hover:bg-muted text-xs sm:text-sm font-medium text-foreground active:scale-[0.99] transition-all cursor-pointer shadow-2xs"
            >
              <SmartphoneIcon className="w-4 h-4 text-muted-foreground" />
              <span>More phone options (System Sheet)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

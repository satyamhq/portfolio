import React from 'react';
import { CheckIcon } from './Icons';

export default function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-2 rounded-full border border-border bg-foreground text-background px-4 py-2.5 text-xs sm:text-sm font-medium shadow-lg animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <CheckIcon className="w-4 h-4 text-emerald-400" />
      <span>{message}</span>
    </div>
  );
}

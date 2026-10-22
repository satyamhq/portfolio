import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import LinkCard from './components/LinkCard';
import HackerzoneS1Card from './components/HackerzoneS1Card';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ShareModal from './components/ShareModal';
import { PROFILE_DATA, VERIFIED_LINKS } from './data/links';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  // Ensure any previous dark mode class or cache is cleanly stripped
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2800);
  };

  const handleCopyLink = async () => {
    const url = PROFILE_DATA.canonicalUrl;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      triggerToast('Profile link copied to clipboard!');
      setTimeout(() => setCopied(false), 2400);
    } catch {
      triggerToast('Unable to copy. Please copy link manually.');
    }
  };

  const handleShare = () => {
    setIsShareOpen(true);
  };

  return (
    <div className="min-h-full flex flex-col flex-1 bg-background text-foreground">
      {/* Sticky Header matching Hackerzone */}
      <Navbar onShare={handleShare} />

      {/* Main Single Page Hub */}
      <main className="flex-1 w-full flex flex-col items-center">
        {/* Profile Card Section */}
        <div className="w-full max-w-[680px] mx-auto px-4 sm:px-6">
          <Profile
            profile={PROFILE_DATA}
            onCopyLink={handleCopyLink}
            copied={copied}
            onShare={handleShare}
          />

          {/* Links Section */}
          <section aria-label="Verified Personal & Project Links" className="w-full space-y-3 pt-2 pb-6">
            <h2 className="sr-only">Verified Links & Profiles</h2>
            {VERIFIED_LINKS.map((link) => (
              <LinkCard key={link.id} link={link} />
            ))}
          </section>

          {/* Hackerzone S1 Flagship Season Featured Card */}
          <section aria-label="Hackerzone S1 Flagship Season" className="w-full pt-1 pb-12">
            <h2 className="sr-only">Featured Flagship Season</h2>
            <HackerzoneS1Card />
          </section>
        </div>
      </main>

      {/* Footer matching Hackerzone official design */}
      <Footer />

      {/* Share Options Modal (Phone-style sheet) */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        profile={PROFILE_DATA}
        onToast={triggerToast}
      />

      {/* Toast feedback */}
      <Toast message={toastMessage} show={showToast} />
    </div>
  );
}

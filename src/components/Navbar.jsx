import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Startups', href: '#startups' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Satyam Kumar – Home"
        >
          SK<span className="navbar__logo-dot">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link ${activeSection === href.slice(1) ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="navbar__actions">
          <button
            type="button"
            className="btn btn-secondary btn-sm navbar__resume-btn"
            onClick={onOpenResume}
            aria-label="Open Resume / CV"
          >
            <FileText size={15} /> Resume
          </button>
          <a
            href="#contact"
            className="btn btn-primary btn-sm navbar__cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${mobileOpen ? 'navbar__drawer--open' : ''}`}>
        <nav className="navbar__drawer-links" aria-label="Mobile navigation">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              className={`navbar__drawer-link ${activeSection === href.slice(1) ? 'navbar__drawer-link--active' : ''}`}
              onClick={(e) => handleNavClick(e, href)}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setMobileOpen(false);
              onOpenResume();
            }}
            style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <FileText size={18} /> View / Download CV
          </button>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{ marginTop: '8px' }}
          >
            Contact Me
          </a>
        </nav>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
          transition: all 300ms var(--ease-out-expo);
          background: transparent;
        }

        .navbar--scrolled {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(229, 228, 224, 0.5);
          box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .navbar__logo {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
          color: var(--color-text-primary);
          text-decoration: none;
          flex-shrink: 0;
        }

        .navbar__logo-dot {
          color: var(--color-accent-primary);
        }

        .navbar__links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .navbar__link {
          position: relative;
          font-size: 0.875rem;
          font-weight: 450;
          color: var(--color-text-muted);
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 200ms var(--ease-out-expo);
          text-decoration: none;
        }

        .navbar__link:hover {
          color: var(--color-text-primary);
          background: rgba(0, 0, 0, 0.03);
        }

        .navbar__link--active {
          color: var(--color-accent-primary);
          font-weight: 550;
        }

        .navbar__link--active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: var(--color-accent-primary);
          border-radius: 1px;
        }

        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .navbar__resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .navbar__toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-text-primary);
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background 200ms;
        }

        .navbar__toggle:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .navbar__drawer {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 32px;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 400ms var(--ease-out-expo);
          z-index: 999;
          overflow-y: auto;
        }

        .navbar__drawer--open {
          transform: translateX(0);
        }

        .navbar__drawer-links {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .navbar__drawer-link {
          font-size: 1.125rem;
          font-weight: 500;
          color: var(--color-text-muted);
          padding: 14px 16px;
          border-radius: 12px;
          transition: all 200ms;
          text-decoration: none;
          opacity: 0;
          animation: slideIn 400ms var(--ease-out-expo) forwards;
        }

        .navbar__drawer--open .navbar__drawer-link {
          opacity: 1;
        }

        .navbar__drawer-link:hover,
        .navbar__drawer-link--active {
          color: var(--color-accent-primary);
          background: rgba(59, 47, 224, 0.05);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 1024px) {
          .navbar__links {
            display: none;
          }

          .navbar__actions {
            display: none;
          }

          .navbar__toggle {
            display: flex;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            height: 64px;
          }

          .navbar__drawer {
            top: 64px;
          }
        }
      `}</style>
    </header>
  );
}

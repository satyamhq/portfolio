import { Mail, Heart } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const footerNavGroups = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Startups', href: '#startups' },
      { label: 'Skills', href: '#skills' },
      { label: 'Achievements', href: '#achievements' },
      { label: 'Education', href: '#education' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Email', href: 'mailto:satyam31sk@gmail.com', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/satyamhq', external: true },
      { label: 'GitHub', href: 'https://github.com/satyamhq', external: true },
      { label: 'Savify', href: 'https://savify.money', external: true },
    ],
  },
];

const socialIcons = [
  { icon: <GithubIcon size={20} />, href: 'https://github.com/satyamhq', label: 'GitHub' },
  { icon: <LinkedinIcon size={20} />, href: 'https://linkedin.com/in/satyamhq', label: 'LinkedIn' },
  { icon: <Mail size={20} />, href: 'mailto:satyam31sk@gmail.com', label: 'Email' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer bg-dark" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" onClick={(e) => handleNavClick(e, '#home')}>
              SK<span className="footer__logo-dot">.</span>
            </a>
            <p className="footer__tagline">
              Engineer · Builder · Founder
            </p>
          </div>

          <div className="footer__nav-groups">
            {footerNavGroups.map((group) => (
              <div key={group.title} className="footer__nav-group">
                <h4 className="footer__nav-title">{group.title}</h4>
                <ul className="footer__nav-list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="footer__nav-link"
                        onClick={(e) => handleNavClick(e, link.href)}
                        {...(link.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Satyam Kumar. Built with{' '}
            <Heart size={14} className="footer__heart" /> and lots of coffee.
          </p>
          <div className="footer__socials">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="footer__social"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          padding-top: 80px;
          padding-bottom: 40px;
        }

        .footer__top {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 64px;
          margin-bottom: 48px;
        }

        .footer__logo {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-text-inverse);
          text-decoration: none;
          display: inline-block;
          margin-bottom: 8px;
        }

        .footer__logo-dot {
          color: var(--color-accent-primary);
        }

        .footer__tagline {
          color: rgba(250, 250, 250, 0.4);
          font-size: 0.875rem;
        }

        .footer__nav-groups {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .footer__nav-title {
          font-family: var(--font-display);
          font-size: 0.8125rem;
          font-weight: 600;
          color: rgba(250, 250, 250, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
        }

        .footer__nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer__nav-link {
          color: rgba(250, 250, 250, 0.65);
          font-size: 0.875rem;
          transition: color 200ms;
          text-decoration: none;
        }

        .footer__nav-link:hover {
          color: var(--color-text-inverse);
        }

        .footer__divider {
          height: 1px;
          background: rgba(250, 250, 250, 0.08);
          margin-bottom: 24px;
        }

        .footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .footer__copyright {
          color: rgba(250, 250, 250, 0.35);
          font-size: 0.8125rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .footer__heart {
          color: var(--color-accent-secondary);
          display: inline;
          vertical-align: middle;
        }

        .footer__socials {
          display: flex;
          gap: 8px;
        }

        .footer__social {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(250, 250, 250, 0.5);
          background: rgba(250, 250, 250, 0.05);
          transition: all 200ms var(--ease-out-expo);
          text-decoration: none;
        }

        .footer__social:hover {
          color: var(--color-text-inverse);
          background: rgba(250, 250, 250, 0.1);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .footer__top {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer__nav-groups {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer__bottom {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer__nav-groups {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}

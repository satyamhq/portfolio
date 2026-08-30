import { ArrowRight, Mail, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero({ onOpenResume }) {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="hero noise-overlay"
      aria-label="Introduction"
    >
      {/* Gradient Blob */}
      <div className="gradient-blob hero__blob" aria-hidden="true" />
      <div className="gradient-blob hero__blob hero__blob--2" aria-hidden="true" />

      <div className="container hero__container">
        <div className="hero__content">
          <ScrollReveal delay={0.1}>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Open to opportunities
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="display-heading hero__name">
              Satyam<br />Kumar
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <p className="hero__tagline">Engineer · Builder · Founder</p>
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <p className="body-text hero__intro">
              Second-year CSE student at Lovely Professional University exploring software development, 
              full-stack web technologies, and AI through real-world projects and continuous learning.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.55}>
            <div className="hero__actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenResume}
                aria-label="View and download Satyam Kumar's CV"
              >
                <FileText size={18} /> View CV / Resume
              </button>
              <a
                href="#projects"
                className="btn btn-secondary"
                onClick={(e) => handleScroll(e, '#projects')}
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="btn btn-ghost"
                onClick={(e) => handleScroll(e, '#contact')}
              >
                <Mail size={18} /> Contact Me
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3} className="hero__visual">
          <div className="hero__avatar">
            <img src="https://avatars.githubusercontent.com/u/229573311?v=4" alt="Satyam Kumar" className="hero__avatar-img" />
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">7+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">8.02</span>
              <span className="hero__stat-label">CGPA (LPU)</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">11</span>
              <span className="hero__stat-label">Certificates</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero__blob {
          top: -20%;
          right: -10%;
          width: 700px;
          height: 700px;
        }

        .hero__blob--2 {
          top: 60%;
          left: -20%;
          width: 500px;
          height: 500px;
          opacity: 0.25;
        }

        .hero__container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
          padding-top: 40px;
          padding-bottom: 40px;
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-accent-primary);
          background: rgba(59, 47, 224, 0.06);
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          margin-bottom: 24px;
        }

        .hero__badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-accent-tertiary);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        .hero__name {
          margin-bottom: 16px;
        }

        .hero__tagline {
          font-family: var(--font-body);
          font-size: clamp(1.125rem, 1.5vw, 1.375rem);
          font-weight: 400;
          color: var(--color-text-muted);
          letter-spacing: 0.04em;
          margin-bottom: 24px;
        }

        .hero__intro {
          max-width: 520px;
          margin-bottom: 36px;
          color: var(--color-text-muted);
          font-size: 1.0625rem;
          line-height: 1.7;
        }

        .hero__actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: var(--radius-btn, 12px);
          font-size: 0.9375rem;
          font-weight: 550;
          color: var(--color-text-secondary, #333);
          background: transparent;
          border: 1px solid var(--color-border, #e5e4e0);
          transition: all 200ms ease;
          text-decoration: none;
        }

        .btn-ghost:hover {
          background: rgba(0, 0, 0, 0.04);
          border-color: var(--color-text-primary, #111);
          color: var(--color-text-primary, #111);
        }

        /* Avatar & Stats */
        .hero__visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .hero__avatar {
          width: 280px;
          height: 280px;
          border-radius: 32px;
          background: linear-gradient(135deg, #3B2FE0 0%, #7C4DFF 50%, #FF5A3C 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 60px rgba(59, 47, 224, 0.25);
          position: relative;
          overflow: hidden;
        }

        .hero__avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero__stats {
          display: flex;
          gap: 32px;
        }

        .hero__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .hero__stat-number {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .hero__stat-label {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          font-weight: 450;
        }

        @media (max-width: 1024px) {
          .hero__container {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }

          .hero__intro {
            margin-left: auto;
            margin-right: auto;
          }

          .hero__actions {
            justify-content: center;
          }

          .hero__avatar {
            width: 200px;
            height: 200px;
            border-radius: 24px;
          }

          .hero__blob {
            width: 500px;
            height: 500px;
            top: -10%;
            right: -20%;
          }

          .hero__blob--2 {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 64px;
          }

          .hero__avatar {
            width: 160px;
            height: 160px;
          }

          .hero__stats {
            gap: 24px;
          }

          .hero__stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

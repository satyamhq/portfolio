import { ExternalLink, Zap, Users, BadgePercent, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Startups() {
  return (
    <section id="startups" className="section-padding bg-secondary" aria-label="Startups">
      <div className="container">
        <ScrollReveal>
          <p className="caption startups__label">STARTUPS</p>
          <h2 className="section-heading">
            Products I'm building
          </h2>
        </ScrollReveal>

        <div className="startups__showcase">
          <div className="startups__content">
            <ScrollReveal delay={0.15}>
              <div className="startups__brand">
                <div className="startups__logo">
                  <span className="startups__logo-text">S</span>
                </div>
                <div>
                  <h3 className="startups__name">Savify</h3>
                  <span className="muted-text">savify.money</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="startups__oneliner">
                Savify is a verified student cashback and discounts platform built for India.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="startups__details">
                <div className="startups__detail">
                  <div className="startups__detail-icon">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="startups__detail-title">The Problem</h4>
                    <p className="muted-text">
                      Students waste time on discount codes that don't work and miss out on exclusive offers tailored to them.
                    </p>
                  </div>
                </div>

                <div className="startups__detail">
                  <div className="startups__detail-icon startups__detail-icon--mint">
                    <BadgePercent size={20} />
                  </div>
                  <div>
                    <h4 className="startups__detail-title">The Solution</h4>
                    <p className="muted-text">
                      Verified cashback, working discount codes, and exclusive student deals — all in one platform.
                    </p>
                  </div>
                </div>

                <div className="startups__detail">
                  <div className="startups__detail-icon startups__detail-icon--coral">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="startups__detail-title">The Value</h4>
                    <p className="muted-text">
                      Students save money effortlessly. Brands get a direct, measurable, performance-based channel to reach a verified Gen Z student audience.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <a
                href="https://savify.money"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit Savify <ExternalLink size={16} />
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} className="startups__visual">
            <div className="startups__mockup">
              <div className="startups__mockup-header">
                <div className="startups__mockup-dots">
                  <span /><span /><span />
                </div>
                <span className="startups__mockup-url">savify.money</span>
              </div>
              <div className="startups__mockup-body">
                <div className="startups__mockup-hero">
                  <span className="startups__mockup-logo-big">Savify</span>
                  <p>Save more. Spend smart.</p>
                </div>
                <div className="startups__mockup-cards">
                  <div className="startups__mockup-card">
                    <Users size={16} />
                    <span>Student Verified</span>
                  </div>
                  <div className="startups__mockup-card">
                    <BadgePercent size={16} />
                    <span>Real Cashback</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .startups__label {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: 12px;
        }

        .startups__showcase {
          margin-top: 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .startups__brand {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .startups__logo {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, var(--color-accent-primary), #7C4DFF);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(59, 47, 224, 0.25);
        }

        .startups__logo-text {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .startups__name {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .startups__oneliner {
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 1.5;
          color: var(--color-text-primary);
          margin-bottom: 32px;
          max-width: 480px;
        }

        .startups__details {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }

        .startups__detail {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .startups__detail-icon {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 10px;
          background: rgba(59, 47, 224, 0.08);
          color: var(--color-accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .startups__detail-icon--mint {
          background: rgba(0, 224, 164, 0.1);
          color: var(--color-accent-tertiary);
        }

        .startups__detail-icon--coral {
          background: rgba(255, 90, 60, 0.08);
          color: var(--color-accent-secondary);
        }

        .startups__detail-title {
          font-weight: 600;
          font-size: 0.9375rem;
          margin-bottom: 4px;
        }

        /* Browser Mockup */
        .startups__visual {
          display: flex;
          justify-content: center;
        }

        .startups__mockup {
          width: 100%;
          max-width: 420px;
          background: var(--color-bg-primary);
          border-radius: 16px;
          border: 1px solid var(--color-border);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .startups__mockup-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--color-border);
          background: var(--color-bg-secondary);
        }

        .startups__mockup-dots {
          display: flex;
          gap: 6px;
        }

        .startups__mockup-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-border);
        }

        .startups__mockup-dots span:first-child { background: #FF5F57; }
        .startups__mockup-dots span:nth-child(2) { background: #FEBC2E; }
        .startups__mockup-dots span:last-child { background: #28C840; }

        .startups__mockup-url {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          background: var(--color-bg-primary);
          padding: 4px 12px;
          border-radius: 6px;
          flex: 1;
          text-align: center;
        }

        .startups__mockup-body {
          padding: 32px 24px;
        }

        .startups__mockup-hero {
          text-align: center;
          margin-bottom: 24px;
        }

        .startups__mockup-logo-big {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--color-accent-primary), #7C4DFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          margin-bottom: 8px;
        }

        .startups__mockup-hero p {
          color: var(--color-text-muted);
          font-size: 0.875rem;
        }

        .startups__mockup-cards {
          display: flex;
          gap: 12px;
        }

        .startups__mockup-card {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          border-radius: 10px;
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-text-primary);
        }

        @media (max-width: 900px) {
          .startups__showcase {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .startups__visual {
            order: -1;
          }

          .startups__mockup {
            max-width: 360px;
          }
        }
      `}</style>
    </section>
  );
}

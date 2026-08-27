import { Code2, Rocket, GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary" aria-label="About Me">
      <div className="container">
        <ScrollReveal>
          <p className="caption about__label">ABOUT ME</p>
          <h2 className="section-heading about__heading">
            Building things that<br />matter, one line at a time.
          </h2>
        </ScrollReveal>

        <div className="about__grid">
          <div className="about__text">
            <ScrollReveal delay={0.15}>
              <p className="body-text">
                I'm a second-year Computer Science student at Lovely Professional University 
                with a strong bias toward building. Rather than waiting to graduate to start 
                creating, I've been shipping real products, contributing to open-source projects, 
                and diving deep into software development from day one.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="body-text">
                My core interests span full-stack web development, AI/ML, and IoT — but what 
                drives me most is solving real problems for real people. That's why I founded 
                <strong> Savify</strong>, a student-focused cashback and discounts platform, 
                alongside my coursework and hackathon participation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="body-text">
                I'm constantly expanding my technical toolkit — from strengthening DSA and CS 
                fundamentals to exploring emerging technologies like Model Context Protocol. 
                My goal is to grow as both an engineer and founder, building products that 
                make a tangible difference.
              </p>
            </ScrollReveal>
          </div>

          <div className="about__highlights">
            <ScrollReveal delay={0.2}>
              <div className="about__card">
                <div className="about__card-icon">
                  <Code2 size={24} />
                </div>
                <h3 className="about__card-title">Developer</h3>
                <p className="muted-text">
                  Full-stack web development, IoT systems, and AI-powered applications.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="about__card">
                <div className="about__card-icon about__card-icon--coral">
                  <Rocket size={24} />
                </div>
                <h3 className="about__card-title">Founder</h3>
                <p className="muted-text">
                  Building Savify — a verified student cashback and discounts platform.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="about__card">
                <div className="about__card-icon about__card-icon--mint">
                  <GraduationCap size={24} />
                </div>
                <h3 className="about__card-title">Learner</h3>
                <p className="muted-text">
                  11+ certifications, 3 hackathons, and an ever-growing competitive programming profile.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        .about__label {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: 12px;
        }

        .about__heading {
          margin-bottom: 56px;
          max-width: 600px;
        }

        .about__grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 64px;
          align-items: start;
        }

        .about__text {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about__text p {
          color: var(--color-text-muted);
          max-width: 560px;
        }

        .about__text strong {
          color: var(--color-accent-primary);
          font-weight: 600;
        }

        .about__highlights {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about__card {
          background: var(--color-bg-primary);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid var(--color-border);
          transition: all 300ms var(--ease-out-expo);
        }

        .about__card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .about__card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(59, 47, 224, 0.08);
          color: var(--color-accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .about__card-icon--coral {
          background: rgba(255, 90, 60, 0.08);
          color: var(--color-accent-secondary);
        }

        .about__card-icon--mint {
          background: rgba(0, 224, 164, 0.1);
          color: var(--color-accent-tertiary);
        }

        .about__card-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 6px;
        }

        @media (max-width: 900px) {
          .about__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about__highlights {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .about__card {
            flex: 1;
            min-width: 200px;
          }
        }

        @media (max-width: 600px) {
          .about__highlights {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}

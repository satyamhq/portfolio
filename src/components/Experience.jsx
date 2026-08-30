import { Rocket, Trophy, BookOpen, Code, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    role: 'C/C++ Programming – Summer Training',
    org: 'Lovely Professional University | Certificate',
    period: "Jan '26 – May '26",
    description:
      'Developed a strong foundation in C/C++ programming, focusing on core programming concepts, problem-solving techniques, and structured program development. Gained hands-on experience with variables, data types, conditional statements, loops, functions, arrays, pointers, structures, and object-oriented programming concepts.',
    icon: <Code size={20} />,
    accent: 'indigo',
    current: true,
  },
  {
    role: 'Founder & Builder',
    org: 'Savify (savify.money)',
    period: '2025 – Present',
    description:
      'Founded and building Savify — a verified student cashback and discounts platform for India. Responsible for product vision, development, and growth strategy.',
    icon: <Rocket size={20} />,
    accent: 'coral',
    current: true,
  },
  {
    role: 'Hackathon Competitor',
    org: 'Multiple Events',
    period: '2026',
    description:
      'Actively participating in hackathons to sharpen problem-solving skills and build under pressure. Competed in Arena WEB-A-THON 2.0, Cognitia\'26 ReSurgence, and Hack Ai S2.',
    icon: <Trophy size={20} />,
    accent: 'mint',
    current: true,
  },
  {
    role: 'Continuous Certification & Practice',
    org: 'Google · Meta · Anthropic',
    period: '2024 – Present',
    description:
      'Completed certifications in Python (Google), Front-End, JavaScript, Version Control (Meta), and Model Context Protocol (Anthropic). Active competitive programmer across LeetCode, HackerRank, and HackerEarth.',
    icon: <BookOpen size={20} />,
    accent: 'indigo',
    current: true,
  },
];

export default function Experience() {
  const accentMap = {
    indigo: { bg: 'rgba(59, 47, 224, 0.08)', color: '#3B2FE0' },
    coral: { bg: 'rgba(255, 90, 60, 0.08)', color: '#FF5A3C' },
    mint: { bg: 'rgba(0, 224, 164, 0.1)', color: '#00C28E' },
  };

  return (
    <section id="experience" className="section-padding" aria-label="Experience">
      <div className="container">
        <ScrollReveal>
          <p className="caption exp__label">EXPERIENCE & TRAINING</p>
          <h2 className="section-heading exp__heading">
            Where I've been putting<br />in the work
          </h2>
          <p className="body-text exp__sub">
            Formal technical summer training, startup building, hackathon competitions, and continuous learning.
          </p>
        </ScrollReveal>

        <div className="exp__timeline">
          {experiences.map((exp, i) => {
            const accent = accentMap[exp.accent];
            return (
              <ScrollReveal key={exp.role} delay={i * 0.1}>
                <div className="exp__item">
                  <div className="exp__line-col">
                    <div
                      className="exp__icon"
                      style={{ background: accent.bg, color: accent.color }}
                    >
                      {exp.icon}
                    </div>
                    {i < experiences.length - 1 && <div className="exp__line" />}
                  </div>
                  <div className="exp__content">
                    <div className="exp__header">
                      <div>
                        <h3 className="exp__role">{exp.role}</h3>
                        <p className="muted-text">{exp.org}</p>
                      </div>
                      <div className="exp__period">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                        {exp.current && <span className="exp__current">Current</span>}
                      </div>
                    </div>
                    <p className="muted-text exp__desc">{exp.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <style>{`
        .exp__label {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: 12px;
        }

        .exp__heading {
          margin-bottom: 12px;
        }

        .exp__sub {
          color: var(--color-text-muted);
          margin-bottom: 48px;
          max-width: 540px;
        }

        .exp__timeline {
          max-width: 740px;
        }

        .exp__item {
          display: flex;
          gap: 24px;
          position: relative;
        }

        .exp__line-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .exp__icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .exp__line {
          width: 2px;
          flex-grow: 1;
          background: var(--color-border);
          margin: 8px 0;
          min-height: 24px;
        }

        .exp__content {
          padding-bottom: 36px;
          flex-grow: 1;
        }

        .exp__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 10px;
        }

        .exp__role {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
        }

        .exp__period {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--color-text-muted);
          font-size: 0.8125rem;
          font-weight: 450;
          white-space: nowrap;
        }

        .exp__current {
          font-size: 0.6875rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          background: rgba(0, 224, 164, 0.1);
          color: var(--color-accent-tertiary);
        }

        .exp__desc {
          line-height: 1.65;
        }

        @media (max-width: 640px) {
          .exp__header {
            flex-direction: column;
            gap: 6px;
          }

          .exp__item {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}

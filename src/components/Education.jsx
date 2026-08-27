import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const education = [
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech, Computer Science & Engineering',
    period: '2025 – 2029',
    location: 'Punjab, India',
    current: true,
    accent: 'indigo',
  },
  {
    institution: 'Mount Carmel English School',
    degree: 'Class 11th – 12th',
    period: '2023 – 2025',
    location: null,
    current: false,
    accent: 'coral',
  },
  {
    institution: 'Saraswati Vidya Mandir, Purnia',
    degree: 'Class 6th – 10th',
    period: '2018 – 2023',
    location: 'Purnia, Bihar',
    current: false,
    accent: 'mint',
  },
  {
    institution: 'Saraswati Shishu Mandir, Purnia',
    degree: 'LKG – Class 5th',
    period: '2011 – 2018',
    location: 'Purnia, Bihar',
    current: false,
    accent: 'coral',
  },
];

export default function Education() {
  const accentMap = {
    indigo: { bg: 'rgba(59, 47, 224, 0.08)', color: '#3B2FE0' },
    coral: { bg: 'rgba(255, 90, 60, 0.08)', color: '#FF5A3C' },
    mint: { bg: 'rgba(0, 224, 164, 0.1)', color: '#00C28E' },
  };

  return (
    <section id="education" className="section-padding bg-secondary" aria-label="Education">
      <div className="container">
        <ScrollReveal>
          <p className="caption edu__label">EDUCATION</p>
          <h2 className="section-heading edu__heading">
            Academic journey
          </h2>
        </ScrollReveal>

        <div className="edu__timeline">
          {education.map((edu, i) => {
            const accent = accentMap[edu.accent];
            return (
              <ScrollReveal key={edu.institution} delay={i * 0.1}>
                <div className="edu__item">
                  <div className="edu__line-col">
                    <div
                      className="edu__icon"
                      style={{ background: accent.bg, color: accent.color }}
                    >
                      <GraduationCap size={20} />
                    </div>
                    {i < education.length - 1 && <div className="edu__line" />}
                  </div>
                  <div className="edu__content">
                    <div className="edu__header">
                      <div>
                        <h3 className="edu__institution">{edu.institution}</h3>
                        <p className="muted-text">{edu.degree}</p>
                      </div>
                      <div className="edu__meta">
                        <span className="edu__period">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                        {edu.current && (
                          <span className="edu__current">Current</span>
                        )}
                      </div>
                    </div>
                    {edu.location && (
                      <span className="caption edu__location">
                        <MapPin size={12} /> {edu.location}
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <style>{`
        .edu__label {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: 12px;
        }

        .edu__heading {
          margin-bottom: 48px;
        }

        .edu__timeline {
          max-width: 700px;
        }

        .edu__item {
          display: flex;
          gap: 24px;
        }

        .edu__line-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .edu__icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .edu__line {
          width: 2px;
          flex-grow: 1;
          background: var(--color-border);
          margin: 8px 0;
          min-height: 16px;
        }

        .edu__content {
          padding-bottom: 32px;
          flex-grow: 1;
        }

        .edu__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 6px;
        }

        .edu__institution {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
        }

        .edu__meta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .edu__period {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--color-text-muted);
          font-size: 0.8125rem;
          font-weight: 450;
          white-space: nowrap;
        }

        .edu__current {
          font-size: 0.6875rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          background: rgba(0, 224, 164, 0.1);
          color: var(--color-accent-tertiary);
          white-space: nowrap;
        }

        .edu__location {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        @media (max-width: 640px) {
          .edu__header {
            flex-direction: column;
            gap: 6px;
          }

          .edu__item {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}

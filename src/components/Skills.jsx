import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'C#', 'C++', 'C', 'Python', 'JavaScript'],
    accent: '#3B2FE0',
  },
  {
    title: 'Web',
    skills: ['HTML', 'CSS', 'Full-Stack Development'],
    accent: '#7C4DFF',
  },
  {
    title: 'Data & Systems',
    skills: ['MySQL', 'SQL', 'DBMS', 'Linux System Administration'],
    accent: '#00E0A4',
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Version Control', 'Microsoft Excel'],
    accent: '#FF5A3C',
  },
  {
    title: 'AI / ML',
    skills: ['Emerging — Anthropic MCP Certified'],
    accent: '#3B2FE0',
  },
  {
    title: 'Soft Skills',
    skills: ['Leadership', 'Time Management', 'Project Management', 'Communication'],
    accent: '#6B6B70',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary" aria-label="Skills">
      <div className="container">
        <ScrollReveal>
          <p className="caption skills__label">SKILLS</p>
          <h2 className="section-heading skills__heading">
            My technical toolkit
          </h2>
        </ScrollReveal>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <div className="skills__category">
                <h3 className="skills__cat-title">
                  <span
                    className="skills__cat-dot"
                    style={{ background: cat.accent }}
                  />
                  {cat.title}
                </h3>
                <div className="skills__chips">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .skills__label {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: 12px;
        }

        .skills__heading {
          margin-bottom: 48px;
        }

        .skills__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .skills__category {
          background: var(--color-bg-primary);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid var(--color-border);
          transition: all 300ms var(--ease-out-expo);
        }

        .skills__category:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .skills__cat-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .skills__cat-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .skills__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        @media (max-width: 900px) {
          .skills__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .skills__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

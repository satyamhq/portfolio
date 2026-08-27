import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'Greenhouse Automation',
    description:
      'IoT/embedded project that automates greenhouse environmental conditions — monitoring temperature, humidity, and soil moisture using Arduino sensors and actuators.',
    problem: 'Manual greenhouse management is time-consuming and error-prone, leading to crop loss.',
    tech: ['Arduino', 'C++', 'IoT', 'Sensors'],
    github: 'https://github.com/satyamhq/greenhouse-automation-arduino',
    demo: null,
    accent: 'mint',
  },
  {
    title: 'HackerZone AI Interview',
    description:
      'An AI-powered mock interview tool that simulates technical interviews, providing real-time feedback and assessment to help candidates prepare effectively.',
    problem: 'Lack of accessible, personalized interview practice for tech candidates.',
    tech: ['AI/ML', 'JavaScript', 'Web'],
    github: 'https://github.com/satyamhq/hackerzone-ai-interview',
    demo: null,
    accent: 'indigo',
  },
  {
    title: 'Curely',
    description: null,
    problem: null,
    tech: [],
    github: 'https://github.com/satyamhq/Curely',
    demo: null,
    placeholder: true,
    accent: 'coral',
  },
  {
    title: 'HackerZone',
    description: null,
    problem: null,
    tech: [],
    github: 'https://github.com/satyamhq/hackerzone',
    demo: null,
    placeholder: true,
    accent: 'indigo',
  },
  {
    title: '61stSec',
    description: null,
    problem: null,
    tech: [],
    github: 'https://github.com/satyamhq/61stsec',
    demo: null,
    placeholder: true,
    accent: 'coral',
  },
  {
    title: 'AI Farming Assistant',
    description:
      'An AI-powered personal farming assistant that combines agricultural data with ML/LLM guidance to help farmers make better decisions about crops, soil, and weather.',
    problem: 'Small-scale farmers lack access to expert agricultural advice and data-driven insights.',
    tech: ['Python', 'AI/ML', 'LLM'],
    github: 'https://github.com/satyamhq/ai-powered-personal-farming-assistant',
    demo: null,
    accent: 'mint',
  },
  {
    title: 'Startflow',
    description: null,
    problem: null,
    tech: [],
    github: 'https://github.com/satyamhq/Startflow',
    demo: null,
    placeholder: true,
    accent: 'indigo',
  },
];

function ProjectCard({ project, index }) {
  const accentColors = {
    indigo: { bg: 'rgba(59, 47, 224, 0.06)', border: 'rgba(59, 47, 224, 0.15)', text: '#3B2FE0' },
    coral: { bg: 'rgba(255, 90, 60, 0.06)', border: 'rgba(255, 90, 60, 0.15)', text: '#FF5A3C' },
    mint: { bg: 'rgba(0, 224, 164, 0.06)', border: 'rgba(0, 224, 164, 0.15)', text: '#00C28E' },
  };

  const color = accentColors[project.accent] || accentColors.indigo;

  return (
    <ScrollReveal delay={index * 0.08}>
      <article className="project-card card">
        <div className="project-card__header">
          <h3 className="card-title">{project.title}</h3>
          {project.placeholder && (
            <span className="badge badge-placeholder">Add description</span>
          )}
        </div>

        {project.description ? (
          <p className="muted-text project-card__desc">{project.description}</p>
        ) : (
          <p className="muted-text project-card__desc project-card__desc--placeholder">
            Description coming soon — check the GitHub repo for details.
          </p>
        )}

        {project.problem && (
          <div className="project-card__problem">
            <span className="caption" style={{ fontWeight: 600 }}>Problem:</span>
            <span className="caption"> {project.problem}</span>
          </div>
        )}

        {project.tech.length > 0 && (
          <div className="project-card__tech">
            {project.tech.map((t) => (
              <span
                key={t}
                className="project-card__tech-chip"
                style={{ background: color.bg, color: color.text, borderColor: color.border }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {project.tech.length === 0 && (
          <div className="project-card__tech">
            <span className="project-card__tech-chip" style={{ background: 'rgba(107,107,112,0.06)', color: '#6B6B70', borderColor: 'rgba(107,107,112,0.15)' }}>
              Add tech stack
            </span>
          </div>
        )}

        <div className="project-card__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={16} /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding" aria-label="Projects">
      <div className="container">
        <ScrollReveal>
          <p className="caption projects__label">PROJECTS</p>
          <h2 className="section-heading projects__heading">
            Things I've built
          </h2>
          <p className="body-text projects__sub">
            From IoT systems to AI-powered tools — each project is a step toward solving real problems.
          </p>
        </ScrollReveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .projects__label {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: 12px;
        }

        .projects__heading {
          margin-bottom: 12px;
        }

        .projects__sub {
          color: var(--color-text-muted);
          margin-bottom: 48px;
          max-width: 520px;
        }

        .projects__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-card__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 12px;
        }

        .project-card__desc {
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .project-card__desc--placeholder {
          font-style: italic;
          opacity: 0.7;
        }

        .project-card__problem {
          background: var(--color-bg-secondary);
          padding: 10px 14px;
          border-radius: 10px;
          margin-bottom: 16px;
        }

        .project-card__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .project-card__tech-chip {
          font-size: 0.75rem;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          border: 1px solid;
        }

        .project-card__actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        @media (max-width: 1024px) {
          .projects__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .projects__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

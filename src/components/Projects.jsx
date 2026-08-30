import { ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const projects = [
  {
    title: 'Hackerzone – Autonomous AI Interview Platform',
    date: "Feb '26",
    description:
      'A production-grade AI interview platform supporting autonomous technical and behavioral interviews through voice and chat-based interactions.',
    highlights: [
      'Simulates live technical and behavioral interviews with real-time audio and text streaming.',
      'Integrated Google Gemini & OpenAI, WebSockets, Monaco Editor, and Excalidraw for real-time live coding, whiteboarding, automated scoring, and analytics.',
    ],
    tech: ['Next.js', 'TypeScript', 'Google Gemini', 'OpenAI', 'WebSockets', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/satyamhq/hackerzone-ai-interview',
    demo: null,
    accent: 'indigo',
    featured: true,
  },
  {
    title: 'Curely – AI Healthcare Marketplace & Telemedicine',
    date: "Mar '25",
    description:
      'A comprehensive healthcare platform connecting patients, doctors, pharmacies, and diagnostic laboratories through specialized role-based dashboards.',
    highlights: [
      'AI-powered symptom analysis, smart doctor matching, appointment booking, pharmacy ordering, and diagnostic tests.',
      'Implemented robust authentication, database management, provider verification, and admin governance with Supabase & PostgreSQL.',
    ],
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'PostgreSQL', 'Zustand', 'Tailwind CSS'],
    github: 'https://github.com/satyamhq/Curely',
    demo: null,
    accent: 'coral',
    featured: true,
  },
  {
    title: 'Agri1 – AI-Powered Personal Farming Assistant',
    date: "Oct '24",
    description:
      'An offline-first Progressive Web App built for Indian farmers with farm management, crop tracking, weather intelligence, and mandi-price tracking.',
    highlights: [
      'Real-time mandi market prices, weather forecasting, distance-based mandi sorting, and agricultural advisory.',
      'Achieved 92% sorting accuracy, reduced misclassification by 30%, and enabled <1s object detection & sorting.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'IndexedDB', 'Service Worker', 'PWA', 'APIs'],
    github: 'https://github.com/satyamhq/ai-powered-personal-farming-assistant',
    demo: null,
    accent: 'mint',
    featured: true,
  },
  {
    title: 'Greenhouse Automation',
    date: '2025',
    description:
      'IoT and embedded systems project automating greenhouse environmental parameters — monitoring temperature, humidity, and soil moisture with Arduino sensors and actuators.',
    highlights: [
      'Automated climate control algorithms for optimal plant growth.',
      'Hardware sensors and relay control for water pumps and ventilation.',
    ],
    tech: ['Arduino', 'C++', 'IoT', 'Sensors', 'Embedded C'],
    github: 'https://github.com/satyamhq/greenhouse-automation-arduino',
    demo: null,
    accent: 'mint',
  },
  {
    title: '61stSec',
    date: '2025',
    description:
      'Cybersecurity and system hardening utility toolkit focusing on rapid vulnerability assessment, automated network analysis, and security auditing.',
    highlights: [
      'Network probing and protocol analysis tools integration.',
      'Automated diagnostic scripts for Linux system administration.',
    ],
    tech: ['Python', 'Linux', 'Networking', 'Cybersecurity'],
    github: 'https://github.com/satyamhq/61stsec',
    demo: null,
    accent: 'indigo',
  },
  {
    title: 'Startflow',
    date: '2025',
    description:
      'Workflow management and productivity tool engineered for startup founders and agile teams to manage sprints, tasks, and product launch pipelines.',
    highlights: [
      'Kanban board and sprint planning interfaces.',
      'Lightweight local-first persistence and responsive UI.',
    ],
    tech: ['JavaScript', 'React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/satyamhq/Startflow',
    demo: null,
    accent: 'coral',
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
          <div>
            <h3 className="card-title">{project.title}</h3>
            {project.date && <span className="project-card__date">{project.date}</span>}
          </div>
          {project.featured && (
            <span className="badge badge-featured">Featured</span>
          )}
        </div>

        <p className="muted-text project-card__desc">{project.description}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-card__highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

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

        <div className="project-card__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={16} /> GitHub Repo
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
            Featured projects & software
          </h2>
          <p className="body-text projects__sub">
            From autonomous AI interview platforms and healthcare marketplaces to offline PWAs and IoT embedded systems.
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
          max-width: 580px;
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
          border-radius: 18px;
        }

        .project-card__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 12px;
        }

        .project-card__date {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-muted);
          display: inline-block;
          margin-top: 2px;
        }

        .badge-featured {
          background: rgba(59, 47, 224, 0.08);
          color: var(--color-accent-primary);
          font-size: 0.6875rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 999px;
          white-space: nowrap;
        }

        .project-card__desc {
          margin-bottom: 12px;
          font-size: 0.9375rem;
          line-height: 1.55;
        }

        .project-card__highlights {
          list-style: disc;
          padding-left: 18px;
          margin-bottom: 16px;
          font-size: 0.8125rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .project-card__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
          margin-top: auto;
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

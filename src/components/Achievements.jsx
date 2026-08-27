import { Trophy, Award, ExternalLink, Code2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const hackathons = [
  { name: 'Arena WEB-A-THON 2.0', date: 'Feb 13, 2026' },
  { name: "Cognitia'26 ReSurgence", date: 'Mar 27, 2026' },
  { name: 'Hack Ai S2', date: 'Apr 9, 2026' },
];

const certifications = [
  {
    name: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    url: 'https://verify.skilljar.com/c/38m7f2if3crd',
  },
  {
    name: 'Programming with JavaScript',
    issuer: 'Meta',
    date: 'Feb 2026',
    url: 'https://coursera.org/account/accomplishments/verify/181ZTYSWMNW5',
  },
  {
    name: 'Introduction to Front-End Development',
    issuer: 'Meta',
    date: 'Jan 2026',
    url: 'https://coursera.org/account/accomplishments/verify/CYAPZ7X28IRK',
  },
  {
    name: 'Version Control',
    issuer: 'Meta',
    date: 'Jan 2026',
    url: 'https://coursera.org/account/accomplishments/verify/7CR28Y1XZIOL',
  },
  {
    name: 'Crash Course on Python',
    issuer: 'Google',
    date: 'Nov 2025',
    url: 'https://coursera.org/account/accomplishments/verify/7HH1JUIJ5519',
  },
  {
    name: 'Python (Basic)',
    issuer: 'HackerRank',
    date: 'Nov 2025',
    url: 'https://hackerrank.com/certificates/e0135594a97d',
  },
  {
    name: 'Excel Essential Training (Microsoft 365)',
    issuer: 'LinkedIn Learning',
    date: 'Nov 2025',
    url: null,
  },
  {
    name: 'Communication Foundations',
    issuer: 'LinkedIn Learning',
    date: 'Nov 2025',
    url: null,
  },
  {
    name: 'Building Positive Attitude',
    issuer: 'Tech Veda',
    date: 'Oct 2025',
    url: null,
  },
  {
    name: 'Leadership Foundations',
    issuer: 'LinkedIn Learning',
    date: 'Oct 2025',
    url: null,
  },
  {
    name: 'Time Management Fundamentals',
    issuer: 'LinkedIn Learning',
    date: 'Oct 2025',
    url: null,
  },
];

const codingProfiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/satyamhq',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    name: 'HackerRank',
    url: 'https://hackerrank.com/satyamhq',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701a.257.257 0 0 0 .172-.452L9.075 4.695a.257.257 0 0 0-.344 0L6.97 6.456a.257.257 0 0 0 .172.452h.7v10.184h-.7a.257.257 0 0 0-.172.452l1.761 1.761a.257.257 0 0 0 .344 0l1.761-1.761a.257.257 0 0 0-.172-.452h-.7v-3.875h4.074v3.875h-.702a.257.257 0 0 0-.172.452l1.761 1.761a.257.257 0 0 0 .344 0l1.761-1.761a.257.257 0 0 0-.172-.452h-.7V6.908h.7a.257.257 0 0 0 .173-.452l-1.762-1.761a.257.257 0 0 0-.344 0l-1.761 1.761a.257.257 0 0 0 .172.452h.7v.891z" />
      </svg>
    ),
  },
  {
    name: 'HackerEarth',
    url: 'https://hackerearth.com/@satyamhq',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M18.462 4.762H5.538A3.538 3.538 0 0 0 2 8.3v7.4a3.538 3.538 0 0 0 3.538 3.538h12.924A3.538 3.538 0 0 0 22 15.7V8.3a3.538 3.538 0 0 0-3.538-3.538zM9.56 16.49a.492.492 0 0 1-.348.144H6.268a.492.492 0 0 1-.492-.492V7.858a.492.492 0 0 1 .492-.492h2.944a.492.492 0 0 1 .492.492v1.264a.492.492 0 0 1-.492.492H8.028v5.604h1.184a.492.492 0 0 1 .492.492v1.264a.492.492 0 0 1-.144.348v.168zm8.664-.348a.492.492 0 0 1-.492.492h-2.944a.492.492 0 0 1-.492-.492v-1.264a.492.492 0 0 1 .492-.492h1.184V9.282h-1.184a.492.492 0 0 1-.492-.492V7.526a.492.492 0 0 1 .492-.492h2.944a.492.492 0 0 1 .492.492z" />
      </svg>
    ),
  },
  {
    name: 'CodeChef',
    url: 'https://codechef.com/users/satyamhq',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M11.257.004c-.349.07-.6.398-.6.398S8.608 4.234 7.86 5.87c-.746 1.636.106 3.383.106 3.383l-2.957 2.5s-.493.378-.37.78c.125.404.66.208.66.208l2.91-.98s1.063 2.618 2.503 3.9c1.44 1.283 3.462 1.53 3.462 1.53l.263 6.242s.02.73.457.6c.438-.13.272-.94.272-.94l-.66-5.397s1.86-.26 3.1-1.8c1.24-1.54 1.82-3.907 1.82-3.907l2.958.747s.535.18.59-.233c.054-.414-.463-.665-.463-.665l-3.17-2.07s.595-1.67-.183-3.383c-.774-1.71-3.093-5.74-3.093-5.74s-.267-.34-.63-.387c-.095-.013-.188-.005-.283.023-.37.126-.51.478-.51.478S12.78 4.453 12.2 5.87c-.58 1.418-.08 3.106-.08 3.106s-.558-.16-1.02.095c-.46.255-.6.703-.6.703s-.733-1.63-.37-3.063c.366-1.433 1.677-5.95 1.677-5.95s.155-.576-.088-.68C11.563-.03 11.396-.025 11.257.003z" />
      </svg>
    ),
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding" aria-label="Achievements">
      <div className="container">
        <ScrollReveal>
          <p className="caption ach__label">ACHIEVEMENTS</p>
          <h2 className="section-heading ach__heading">
            Milestones & credentials
          </h2>
        </ScrollReveal>

        {/* Hackathons */}
        <ScrollReveal delay={0.1}>
          <div className="ach__section">
            <h3 className="ach__section-title">
              <Trophy size={20} /> Hackathons
            </h3>
            <div className="ach__hackathons">
              {hackathons.map((h) => (
                <div key={h.name} className="ach__hackathon">
                  <span className="ach__hackathon-name">{h.name}</span>
                  <span className="caption">{h.date}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal delay={0.2}>
          <div className="ach__section">
            <h3 className="ach__section-title">
              <Award size={20} /> Certifications
            </h3>
            <div className="ach__certs-grid">
              {certifications.map((cert) => (
                <div key={cert.name} className="ach__cert">
                  <div className="ach__cert-info">
                    <span className="ach__cert-name">{cert.name}</span>
                    <span className="caption">
                      {cert.issuer} · {cert.date}
                    </span>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ach__cert-verify"
                      aria-label={`Verify ${cert.name} certificate`}
                    >
                      <ExternalLink size={14} /> Verify
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Coding Profiles */}
        <ScrollReveal delay={0.3}>
          <div className="ach__section">
            <h3 className="ach__section-title">
              <Code2 size={20} /> Competitive Programming
            </h3>
            <div className="ach__profiles">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ach__profile"
                  aria-label={`${profile.name} profile — satyamhq`}
                >
                  {profile.icon}
                  <div>
                    <span className="ach__profile-name">{profile.name}</span>
                    <span className="caption">@satyamhq</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .ach__label {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: 12px;
        }

        .ach__heading {
          margin-bottom: 48px;
        }

        .ach__section {
          margin-bottom: 40px;
        }

        .ach__section-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          color: var(--color-text-primary);
        }

        /* Hackathons */
        .ach__hackathons {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 600px;
        }

        .ach__hackathon {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          background: var(--color-bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--color-border);
          transition: all 250ms var(--ease-out-expo);
        }

        .ach__hackathon:hover {
          transform: translateX(4px);
          border-color: var(--color-accent-secondary);
        }

        .ach__hackathon-name {
          font-weight: 500;
          font-size: 0.9375rem;
        }

        /* Certifications */
        .ach__certs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .ach__cert {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 18px;
          background: var(--color-bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--color-border);
          transition: all 250ms var(--ease-out-expo);
        }

        .ach__cert:hover {
          border-color: var(--color-accent-primary);
        }

        .ach__cert-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .ach__cert-name {
          font-weight: 500;
          font-size: 0.875rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ach__cert-verify {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-accent-primary);
          white-space: nowrap;
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          background: rgba(59, 47, 224, 0.06);
          transition: all 200ms;
          text-decoration: none;
        }

        .ach__cert-verify:hover {
          background: rgba(59, 47, 224, 0.12);
        }

        /* Coding Profiles */
        .ach__profiles {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ach__profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          background: var(--color-bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--color-border);
          transition: all 250ms var(--ease-out-expo);
          text-decoration: none;
          color: var(--color-text-primary);
          min-width: 180px;
        }

        .ach__profile:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          border-color: var(--color-accent-primary);
          color: var(--color-accent-primary);
        }

        .ach__profile-name {
          font-weight: 600;
          font-size: 0.875rem;
          display: block;
        }

        @media (max-width: 768px) {
          .ach__certs-grid {
            grid-template-columns: 1fr;
          }

          .ach__profiles {
            flex-direction: column;
          }

          .ach__profile {
            min-width: 0;
          }
        }
      `}</style>
    </section>
  );
}

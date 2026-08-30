import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Phone, FileText, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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

const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:satyam31sk@gmail.com',
    icon: <Mail size={20} />,
    label: 'satyam31sk@gmail.com',
  },
  {
    name: 'Mobile',
    url: 'tel:+916205844155',
    icon: <Phone size={20} />,
    label: '+91 - 6205844155',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/satyamhq',
    icon: <LinkedinIcon size={20} />,
    label: 'linkedin.com/in/satyamhq',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/satyamhq',
    icon: <GithubIcon size={20} />,
    label: 'github.com/satyamhq',
  },
];

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Simulate form submission
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <div className="container">
        <ScrollReveal>
          <p className="caption contact__label">GET IN TOUCH</p>
          <h2 className="section-heading contact__heading">
            Let's work together
          </h2>
          <p className="body-text contact__sub">
            Have a project idea, collaboration opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </ScrollReveal>

        <div className="contact__grid">
          {/* Form */}
          <ScrollReveal delay={0.15}>
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__field-label">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                  autoComplete="name"
                />
                {errors.name && (
                  <span className="contact__error">
                    <AlertCircle size={14} /> {errors.name}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__field-label">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                  autoComplete="email"
                />
                {errors.email && (
                  <span className="contact__error">
                    <AlertCircle size={14} /> {errors.email}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__field-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className={`contact__input contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                />
                {errors.message && (
                  <span className="contact__error">
                    <AlertCircle size={14} /> {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                <Send size={16} /> Send Message
              </button>

              {status === 'success' && (
                <div className="contact__toast contact__toast--success">
                  <CheckCircle size={18} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </ScrollReveal>

          {/* Direct Links */}
          <ScrollReveal delay={0.25}>
            <div className="contact__info">
              <h3 className="contact__info-title">Direct links</h3>
              <div className="contact__links">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="contact__link"
                    aria-label={link.name}
                  >
                    <span className="contact__link-icon">{link.icon}</span>
                    <div>
                      <span className="contact__link-name">{link.name}</span>
                      <span className="caption">{link.label}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact__divider" />

              <div className="contact__resume-card">
                <div className="contact__resume-info">
                  <span className="contact__resume-icon">
                    <FileText size={20} />
                  </span>
                  <div>
                    <h4 className="contact__resume-title">Curriculum Vitae</h4>
                    <p className="caption">Verified Academic & Professional Resume</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={onOpenResume}
                  style={{ width: '100%', marginTop: '12px', justifyContent: 'center' }}
                >
                  <FileText size={15} /> View & Download CV
                </button>
              </div>

              <div className="contact__divider" />

              <h3 className="contact__info-title">Coding profiles</h3>
              <div className="contact__profiles">
                {['LeetCode', 'HackerRank', 'HackerEarth', 'CodeChef'].map((name) => (
                  <span key={name} className="chip">
                    @satyamhq · {name}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .contact__label {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: 12px;
        }

        .contact__heading {
          margin-bottom: 12px;
        }

        .contact__sub {
          color: var(--color-text-muted);
          margin-bottom: 48px;
          max-width: 480px;
        }

        .contact__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: start;
        }

        /* Form */
        .contact__form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact__field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact__field-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-text-primary);
        }

        .contact__input {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1.5px solid var(--color-border);
          background: var(--color-bg-secondary);
          color: var(--color-text-primary);
          transition: all 200ms var(--ease-out-expo);
          outline: none;
        }

        .contact__input::placeholder {
          color: var(--color-text-muted);
          opacity: 0.7;
        }

        .contact__input:focus {
          border-color: var(--color-accent-primary);
          box-shadow: 0 0 0 3px rgba(59, 47, 224, 0.08);
        }

        .contact__input--error {
          border-color: var(--color-accent-secondary);
        }

        .contact__textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact__error {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8125rem;
          color: var(--color-accent-secondary);
        }

        .contact__submit {
          align-self: flex-start;
        }

        .contact__toast {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 500;
          animation: fadeIn 300ms var(--ease-out-expo);
        }

        .contact__toast--success {
          background: rgba(0, 224, 164, 0.1);
          color: var(--color-accent-tertiary);
          border: 1px solid rgba(0, 224, 164, 0.2);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Info */
        .contact__info {
          padding: 32px;
          background: var(--color-bg-secondary);
          border-radius: 20px;
          border: 1px solid var(--color-border);
        }

        .contact__info-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .contact__links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact__link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 14px;
          border-radius: 12px;
          transition: all 200ms var(--ease-out-expo);
          text-decoration: none;
          color: var(--color-text-primary);
        }

        .contact__link:hover {
          background: var(--color-bg-primary);
          transform: translateX(4px);
        }

        .contact__link-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(59, 47, 224, 0.08);
          color: var(--color-accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact__link-name {
          font-weight: 500;
          font-size: 0.9375rem;
          display: block;
        }

        .contact__resume-card {
          background: var(--color-bg-primary);
          border: 1px solid var(--color-border);
          border-radius: 14px;
          padding: 16px;
        }

        .contact__resume-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact__resume-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(59, 47, 224, 0.08);
          color: var(--color-accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact__resume-title {
          font-family: var(--font-display);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 2px;
        }

        .contact__divider {
          height: 1px;
          background: var(--color-border);
          margin: 24px 0;
        }

        .contact__profiles {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        @media (max-width: 900px) {
          .contact__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}

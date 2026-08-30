import { useState } from 'react';
import { Download, Share2, Printer, Copy, Check, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CVSection({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [shareToast, setShareToast] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handlePrintDownload = () => {
    const printWindow = window.open('/resume.html', '_blank');
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        printWindow.print();
      });
    }
  };

  const handleCopyText = () => {
    const resumeText = `SATYAM KUMAR
Email: satyam31sk@gmail.com | Mobile: +91 - 6205844155
LinkedIn: https://www.linkedin.com/in/satyamhq | GitHub: https://github.com/satyamhq

SKILLS
- Languages: C, C++, Python, JavaScript, HTML, CSS
- Tools/Platforms: Kali Linux, Metasploit, BurpSuite, Nmap, Wireshark, Hydra
- Frameworks: Bootstrap, NodeJS, ExpressJS
- Soft Skills: Adaptability, Problem-Solving, Team Player, Leadership, Time Management

PROJECTS
1. Hackerzone – Autonomous AI Interview Platform | Feb '26
- Built a production-grade AI interview platform supporting autonomous technical and behavioral interviews through voice and chat-based interactions.
- Integrated Google Gemini/OpenAI, WebSockets, Monaco Editor, and Excalidraw for real-time interviews, live coding, whiteboarding, automated scoring, and analytics.
Tech: Next.js, TypeScript, Google Gemini, OpenAI, WebSockets, Supabase, Tailwind CSS

2. Curely – AI Healthcare Marketplace & Telemedicine Platform | Mar '25
- Developed a healthcare platform connecting patients, doctors, pharmacies, and diagnostic laboratories through role-based dashboards.
- Integrated AI-powered symptom analysis and doctor matching, along with appointment booking, pharmacy ordering, diagnostic tests, and health-record management.
- Implemented authentication, database management, provider verification, and admin governance using Supabase.
Tech: Next.js, TypeScript, OpenAI API, Supabase, PostgreSQL, Zustand, Tailwind CSS

3. Agri1 – AI-Powered Personal Farming Assistant | Oct '24
- Built an offline-first Progressive Web App for Indian farmers with farm management, crop tracking, weather intelligence, and mandi-price information.
- Integrated real-time market prices, weather forecasting, distance-based mandi sorting, and agricultural advisory features.
- Achieved 92% sorting accuracy, reduced misclassification by 30%, and enabled <1s object detection & sorting.
Tech: HTML5, CSS3, JavaScript, IndexedDB, Service Worker, PWA, APIs

TRAINING
Lovely Professional University | Certificate (Jan '26 - May '26)
C/C++ Programming – Summer Training
- Developed a strong foundation in C/C++ programming, focusing on core programming concepts, problem-solving techniques, and structured program development.
- Gained hands-on experience with variables, data types, conditional statements, loops, functions, arrays, pointers, structures, and object-oriented programming concepts.
Tech: C, C++

CERTIFICATES
- Crash Course on Python | Google (Nov '25)
- Introduction to Front-End Development | Meta (Jan '26)
- Programming with JavaScript | Meta (Feb '26)
- Version Control | Meta (Mar '26)
- Introduction to Model Context Protocol | Anthropic (April '26)

ACHIEVEMENTS
- 100 DSA questions LeetCode (Mar '26)
- 31 Points HackerEarth (Mar '26)
- 3 star rating in Python on HackerRank (Apr '24)

EDUCATION
- Lovely Professional University (Phagwara, Punjab) - Bachelor of Technology - CSE; CGPA: 8.02 (Aug '25 – Present)
- Mount Carmel English School (Purnia, Bihar) - Intermediate - PCM: 82% (Mar '23 – May '25)
- Saraswati Vidya Mandir (Purnia, Bihar) - Matriculation: 85% (Mar '18 – May '23)`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/resume.html`;
    const shareData = {
      title: "Satyam Kumar's Resume / CV",
      text: "Check out Satyam Kumar's verified Resume & Portfolio (B.Tech CSE @ LPU, Founder of Savify).",
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to menu
      }
    }
    setShowShareMenu(!showShareMenu);
  };

  const handleShareOption = (platform) => {
    const resumeUrl = encodeURIComponent(`${window.location.origin}/resume.html`);
    const text = encodeURIComponent("Check out Satyam Kumar's Resume / CV — Engineer, Builder & Founder");

    let url = '';
    if (platform === 'whatsapp') {
      url = `https://api.whatsapp.com/send?text=${text}%20${resumeUrl}`;
    } else if (platform === 'linkedin') {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${resumeUrl}`;
    } else if (platform === 'email') {
      url = `mailto:?subject=Satyam%20Kumar%20Resume&body=${text}%0A%0A${resumeUrl}`;
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(`${window.location.origin}/resume.html`);
      setShareToast('Resume link copied to clipboard!');
      setTimeout(() => setShareToast(null), 3000);
      setShowShareMenu(false);
      return;
    }

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      setShowShareMenu(false);
    }
  };

  return (
    <section id="cv" className="section-padding bg-secondary cv-section" aria-label="Curriculum Vitae">
      <div className="container">
        <ScrollReveal>
          <div className="cv-section__header-row">
            <div>
              <p className="caption cv-section__label">CURRICULUM VITAE</p>
              <h2 className="section-heading cv-section__heading">
                Resume preview & credentials
              </h2>
              <p className="body-text cv-section__sub">
                Official verified resume showcasing technical projects, C/C++ training, cybersecurity skills, and academic qualifications.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="cv-section__toolbar">
              <button
                type="button"
                className="btn btn-primary cv-btn"
                onClick={handlePrintDownload}
                title="Download or Print Satyam's Resume as PDF"
              >
                <Download size={16} />
                <span>Download / Print PDF</span>
              </button>

              <div className="cv-share-wrapper">
                <button
                  type="button"
                  className="btn btn-secondary cv-btn"
                  onClick={handleShare}
                  title="Share Satyam's Resume"
                >
                  <Share2 size={16} />
                  <span>Share CV</span>
                </button>

                {showShareMenu && (
                  <div className="cv-share-dropdown">
                    <button onClick={() => handleShareOption('copy')} className="cv-share-item">
                      <Copy size={14} /> Copy Link
                    </button>
                    <button onClick={() => handleShareOption('whatsapp')} className="cv-share-item">
                      💬 WhatsApp
                    </button>
                    <button onClick={() => handleShareOption('linkedin')} className="cv-share-item">
                      💼 LinkedIn
                    </button>
                    <button onClick={() => handleShareOption('email')} className="cv-share-item">
                      ✉️ Email
                    </button>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="btn btn-secondary cv-btn"
                onClick={handleCopyText}
                title="Copy Resume contents"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy Text'}</span>
              </button>

              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost cv-btn"
                title="Open resume in full tab"
              >
                <ExternalLink size={16} />
                <span>Full Tab</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {shareToast && (
          <div className="cv-toast">
            <CheckCircle2 size={16} /> {shareToast}
          </div>
        )}

        {/* Paper Document Preview */}
        <ScrollReveal delay={0.15}>
          <div className="cv-paper-container">
            <div className="cv-paper-header-badge">
              <span className="cv-badge-dot" />
              <span>Verified Document Preview · Satyam Kumar</span>
            </div>

            <div className="cv-paper">
              {/* Header */}
              <div className="cv-paper__header">
                <h3 className="cv-paper__name">Satyam Kumar</h3>
                <div className="cv-paper__contacts">
                  <div className="cv-paper__contact-item">
                    <strong>LinkedIn:</strong>{' '}
                    <a href="https://www.linkedin.com/in/satyamhq" target="_blank" rel="noopener noreferrer">
                      https://www.linkedin.com/in/satyamhq
                    </a>
                  </div>
                  <div className="cv-paper__contact-item">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:satyam31sk@gmail.com">satyam31sk@gmail.com</a>
                  </div>
                  <div className="cv-paper__contact-item">
                    <strong>GitHub:</strong>{' '}
                    <a href="https://github.com/satyamhq" target="_blank" rel="noopener noreferrer">
                      https://github.com/satyamhq
                    </a>
                  </div>
                  <div className="cv-paper__contact-item">
                    <strong>Mobile:</strong> <span>+91 - 6205844155</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="cv-paper__section">
                <h4 className="cv-paper__section-title">SKILLS</h4>
                <table className="cv-paper__table">
                  <tbody>
                    <tr>
                      <td className="cv-paper__label-cell">Languages:</td>
                      <td>C, C++, Python, JavaScript, HTML, CSS</td>
                    </tr>
                    <tr>
                      <td className="cv-paper__label-cell">Tools/Platforms:</td>
                      <td>Kali Linux, Metasploit, BurpSuite, Nmap, Wireshark, Hydra</td>
                    </tr>
                    <tr>
                      <td className="cv-paper__label-cell">Frameworks:</td>
                      <td>Bootstrap, NodeJS, ExpressJS</td>
                    </tr>
                    <tr>
                      <td className="cv-paper__label-cell">Soft Skills:</td>
                      <td>Adaptability, Problem-Solving, Team Player, Leadership, Time Management</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Projects */}
              <div className="cv-paper__section">
                <h4 className="cv-paper__section-title">PROJECTS</h4>

                <div className="cv-paper__item">
                  <div className="cv-paper__item-head">
                    <span className="cv-paper__item-title">
                      Hackerzone – Autonomous AI Interview Platform |{' '}
                      <a href="https://github.com/satyamhq/hackerzone-ai-interview" target="_blank" rel="noopener noreferrer">
                        Github
                      </a>
                    </span>
                    <span className="cv-paper__date">Feb' 26</span>
                  </div>
                  <ul className="cv-paper__bullets">
                    <li>Built a production-grade AI interview platform supporting autonomous technical and behavioral interviews through voice and chat-based interactions.</li>
                    <li>Integrated Google Gemini/OpenAI, WebSockets, Monaco Editor, and Excalidraw for real-time interviews, live coding, whiteboarding, automated scoring, and analytics.</li>
                  </ul>
                  <div className="cv-paper__tech">
                    <strong>Tech:</strong> Next.js, TypeScript, Google Gemini, OpenAI, WebSockets, Supabase, Tailwind CSS
                  </div>
                </div>

                <div className="cv-paper__item">
                  <div className="cv-paper__item-head">
                    <span className="cv-paper__item-title">
                      Curely – AI Healthcare Marketplace & Telemedicine Platform |{' '}
                      <a href="https://github.com/satyamhq/Curely" target="_blank" rel="noopener noreferrer">
                        Github
                      </a>
                    </span>
                    <span className="cv-paper__date">Mar' 25</span>
                  </div>
                  <ul className="cv-paper__bullets">
                    <li>Developed a healthcare platform connecting patients, doctors, pharmacies, and diagnostic laboratories through role-based dashboards.</li>
                    <li>Integrated AI-powered symptom analysis and doctor matching, along with appointment booking, pharmacy ordering, diagnostic tests, and health-record management.</li>
                    <li>Implemented authentication, database management, provider verification, and admin governance using Supabase.</li>
                  </ul>
                  <div className="cv-paper__tech">
                    <strong>Tech:</strong> Next.js, TypeScript, OpenAI API, Supabase, PostgreSQL, Zustand, Tailwind CSS
                  </div>
                </div>

                <div className="cv-paper__item">
                  <div className="cv-paper__item-head">
                    <span className="cv-paper__item-title">
                      Agri1 – AI-Powered Personal Farming Assistant |{' '}
                      <a href="https://github.com/satyamhq/ai-powered-personal-farming-assistant" target="_blank" rel="noopener noreferrer">
                        Github
                      </a>
                    </span>
                    <span className="cv-paper__date">Oct' 24</span>
                  </div>
                  <ul className="cv-paper__bullets">
                    <li>Built an offline-first Progressive Web App for Indian farmers with farm management, crop tracking, weather intelligence, and mandi-price information.</li>
                    <li>Integrated real-time market prices, weather forecasting, distance-based mandi sorting, and agricultural advisory features.</li>
                    <li>Achieved 92% sorting accuracy, reduced misclassification by 30%, and enabled &lt;1s object detection & sorting.</li>
                  </ul>
                  <div className="cv-paper__tech">
                    <strong>Tech:</strong> HTML5, CSS3, JavaScript, IndexedDB, Service Worker, PWA, APIs
                  </div>
                </div>
              </div>

              {/* Training */}
              <div className="cv-paper__section">
                <h4 className="cv-paper__section-title">TRAINING</h4>
                <div className="cv-paper__item">
                  <div className="cv-paper__item-head">
                    <span className="cv-paper__item-title">
                      Lovely Professional University | <a href="#education">Certificate</a>
                    </span>
                    <span className="cv-paper__date">Jan' 26 - May' 26</span>
                  </div>
                  <div className="cv-paper__subtitle">C/C++ Programming – Summer Training</div>
                  <ul className="cv-paper__bullets">
                    <li>Developed a strong foundation in C/C++ programming, focusing on core programming concepts, problem-solving techniques, and structured program development.</li>
                    <li>Gained hands-on experience with variables, data types, conditional statements, loops, functions, arrays, pointers, structures, and object-oriented programming concepts.</li>
                  </ul>
                  <div className="cv-paper__tech">
                    <strong>Tech:</strong> C, C++
                  </div>
                </div>
              </div>

              {/* Certificates */}
              <div className="cv-paper__section">
                <h4 className="cv-paper__section-title">CERTIFICATES</h4>
                <div className="cv-paper__row">
                  <span>Crash Course on Python | <a href="https://coursera.org/account/accomplishments/verify/7HH1JUIJ5519" target="_blank" rel="noopener noreferrer">Google</a></span>
                  <span className="cv-paper__date">Nov' 25</span>
                </div>
                <div className="cv-paper__row">
                  <span>Introduction to Front-End Development | <a href="https://coursera.org/account/accomplishments/verify/CYAPZ7X28IRK" target="_blank" rel="noopener noreferrer">Meta</a></span>
                  <span className="cv-paper__date">Jan' 26</span>
                </div>
                <div className="cv-paper__row">
                  <span>Programming with JavaScript | <a href="https://coursera.org/account/accomplishments/verify/181ZTYSWMNW5" target="_blank" rel="noopener noreferrer">Meta</a></span>
                  <span className="cv-paper__date">Feb' 26</span>
                </div>
                <div className="cv-paper__row">
                  <span>Version Control | <a href="https://coursera.org/account/accomplishments/verify/7CR28Y1XZIOL" target="_blank" rel="noopener noreferrer">Meta</a></span>
                  <span className="cv-paper__date">Mar' 26</span>
                </div>
                <div className="cv-paper__row">
                  <span>Introduction to Model Context Protocol | <a href="https://verify.skilljar.com/c/38m7f2if3crd" target="_blank" rel="noopener noreferrer">Anthropic</a></span>
                  <span className="cv-paper__date">April' 26</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="cv-paper__section">
                <h4 className="cv-paper__section-title">ACHIEVEMENTS</h4>
                <div className="cv-paper__row">
                  <span>100 DSA questions <a href="https://leetcode.com/satyamhq" target="_blank" rel="noopener noreferrer">LeetCode</a></span>
                  <span className="cv-paper__date">Mar' 26</span>
                </div>
                <div className="cv-paper__row">
                  <span>31 Points <a href="https://hackerearth.com/@satyamhq" target="_blank" rel="noopener noreferrer">HackerEarth</a></span>
                  <span className="cv-paper__date">Mar' 26</span>
                </div>
                <div className="cv-paper__row">
                  <span>3 star rating in Python on <a href="https://hackerrank.com/satyamhq" target="_blank" rel="noopener noreferrer">HackerRank</a></span>
                  <span className="cv-paper__date">Apr' 24</span>
                </div>
              </div>

              {/* Education */}
              <div className="cv-paper__section">
                <h4 className="cv-paper__section-title">EDUCATION</h4>
                <div className="cv-paper__edu-item">
                  <div className="cv-paper__edu-head">
                    <span>Lovely Professional University</span>
                    <span>Phagwara, Punjab</span>
                  </div>
                  <div className="cv-paper__edu-sub">
                    <span>Bachelor of Technology - Computer Science and Engineering; CGPA: 8.02</span>
                    <span>Aug' 25 – Present</span>
                  </div>
                </div>
                <div className="cv-paper__edu-item">
                  <div className="cv-paper__edu-head">
                    <span>Mount Carmel English School</span>
                    <span>Purnia, Bihar</span>
                  </div>
                  <div className="cv-paper__edu-sub">
                    <span>Intermediate - PCM Percentage: 82%</span>
                    <span>Mar' 23 – May' 25</span>
                  </div>
                </div>
                <div className="cv-paper__edu-item">
                  <div className="cv-paper__edu-head">
                    <span>Saraswati Vidya Mandir</span>
                    <span>Purnia, Bihar</span>
                  </div>
                  <div className="cv-paper__edu-sub">
                    <span>Matriculation - Percentage: 85%</span>
                    <span>Mar' 18 – May' 23</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Floating Bar */}
            <div className="cv-paper-bottom-bar">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handlePrintDownload}
              >
                <Download size={14} /> Download PDF
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleShare}
              >
                <Share2 size={14} /> Share CV
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={onOpenResume}
              >
                <FileText size={14} /> Expand View
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .cv-section__header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .cv-section__label {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: var(--color-accent-primary);
          margin-bottom: 12px;
        }

        .cv-section__heading {
          margin-bottom: 12px;
        }

        .cv-section__sub {
          color: var(--color-text-muted);
          max-width: 580px;
        }

        .cv-section__toolbar {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 550;
        }

        .cv-share-wrapper {
          position: relative;
        }

        .cv-share-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 6px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
          z-index: 100;
          min-width: 150px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          animation: dropFade 200ms ease;
        }

        @keyframes dropFade {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cv-share-item {
          background: none;
          border: none;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.8125rem;
          font-weight: 500;
          text-align: left;
          color: var(--color-text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background 150ms;
        }

        .cv-share-item:hover {
          background: rgba(59, 47, 224, 0.08);
          color: var(--color-accent-primary);
        }

        .cv-toast {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(0, 224, 164, 0.1);
          color: var(--color-accent-tertiary);
          border: 1px solid rgba(0, 224, 164, 0.2);
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 550;
          margin-bottom: 20px;
          animation: dropFade 250ms ease;
        }

        .cv-paper-container {
          background: var(--color-bg-primary);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          padding: 36px 40px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);
          position: relative;
          max-width: 860px;
          margin: 0 auto;
        }

        .cv-paper-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78125rem;
          font-weight: 600;
          color: var(--color-accent-primary);
          background: rgba(59, 47, 224, 0.06);
          padding: 6px 12px;
          border-radius: 999px;
          margin-bottom: 24px;
        }

        .cv-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent-tertiary);
        }

        .cv-paper {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          padding: 40px 48px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
          font-family: 'Merriweather', Georgia, serif;
          color: #1a1a1a;
          line-height: 1.35;
          font-size: 13.5px;
        }

        .cv-paper__header {
          margin-bottom: 12px;
        }

        .cv-paper__name {
          font-size: 26px;
          font-weight: 700;
          color: #111;
          margin-bottom: 6px;
        }

        .cv-paper__contacts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 3px;
          font-size: 12.5px;
        }

        .cv-paper__contact-item a {
          color: #0044cc;
          text-decoration: underline;
        }

        .cv-paper__section {
          margin-top: 14px;
        }

        .cv-paper__section-title {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-bottom: 1px solid #222;
          padding-bottom: 2px;
          margin-bottom: 8px;
          font-family: inherit;
        }

        .cv-paper__table {
          width: 100%;
          font-size: 12.5px;
          border-collapse: collapse;
        }

        .cv-paper__table td {
          padding: 2px 0;
          vertical-align: top;
        }

        .cv-paper__label-cell {
          font-weight: 700;
          width: 130px;
        }

        .cv-paper__item {
          margin-bottom: 10px;
        }

        .cv-paper__item-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 13px;
        }

        .cv-paper__item-title {
          font-weight: 700;
        }

        .cv-paper__item-title a {
          color: #0044cc;
          text-decoration: underline;
          font-weight: 400;
        }

        .cv-paper__date {
          font-size: 12px;
          font-weight: 400;
          white-space: nowrap;
        }

        .cv-paper__subtitle {
          font-style: italic;
          font-size: 12px;
          margin-bottom: 2px;
        }

        .cv-paper__bullets {
          list-style-type: disc;
          padding-left: 18px;
          margin: 2px 0;
          font-size: 12.5px;
        }

        .cv-paper__bullets li {
          margin-bottom: 2px;
          line-height: 1.35;
        }

        .cv-paper__tech {
          font-size: 12px;
          margin-top: 2px;
        }

        .cv-paper__row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 12.5px;
          padding: 2px 0;
        }

        .cv-paper__row a {
          color: #0044cc;
          text-decoration: underline;
        }

        .cv-paper__edu-item {
          margin-bottom: 6px;
        }

        .cv-paper__edu-head {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 700;
        }

        .cv-paper__edu-sub {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
        }

        .cv-paper-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--color-border);
        }

        @media (max-width: 768px) {
          .cv-paper-container {
            padding: 20px 14px;
          }

          .cv-paper {
            padding: 20px 16px;
            font-size: 12px;
          }

          .cv-paper__contacts {
            grid-template-columns: 1fr;
          }

          .cv-paper__name {
            font-size: 20px;
          }

          .cv-section__toolbar {
            width: 100%;
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}

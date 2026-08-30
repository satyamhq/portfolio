import { useState, useEffect } from 'react';
import { X, Printer, ExternalLink, Download, Copy, Check, FileText, Share2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open('/resume.html', '_blank');
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        printWindow.print();
      });
    }
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/resume.html`;
    const shareData = {
      title: "Satyam Kumar's Resume / CV",
      text: "Check out Satyam Kumar's verified Resume & Portfolio.",
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {}
    }
    setShowShareMenu(!showShareMenu);
  };

  const handleShareOption = (platform) => {
    const resumeUrl = encodeURIComponent(`${window.location.origin}/resume.html`);
    const text = encodeURIComponent("Check out Satyam Kumar's Resume / CV");

    let url = '';
    if (platform === 'whatsapp') url = `https://api.whatsapp.com/send?text=${text}%20${resumeUrl}`;
    else if (platform === 'linkedin') url = `https://www.linkedin.com/sharing/share-offsite/?url=${resumeUrl}`;
    else if (platform === 'email') url = `mailto:?subject=Satyam%20Kumar%20Resume&body=${text}%0A%0A${resumeUrl}`;
    else if (platform === 'copy') {
      navigator.clipboard.writeText(`${window.location.origin}/resume.html`);
      setShowShareMenu(false);
      return;
    }

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      setShowShareMenu(false);
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

  return (
    <div className="resume-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Satyam Kumar's Resume">
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header Toolbar */}
        <div className="resume-modal-toolbar">
          <div className="resume-modal-title">
            <FileText size={20} className="resume-modal-icon" />
            <div>
              <h3>Satyam Kumar — Curriculum Vitae</h3>
              <p className="caption">Verified Academic & Professional Resume</p>
            </div>
          </div>

          <div className="resume-modal-actions">
            <div style={{ position: 'relative' }}>
              <button
                className="btn btn-secondary btn-sm"
                onClick={handleShare}
                title="Share Satyam's Resume"
              >
                <Share2 size={16} />
                <span>Share</span>
              </button>

              {showShareMenu && (
                <div className="resume-share-dropdown">
                  <button onClick={() => handleShareOption('copy')} className="resume-share-item">
                    <Copy size={13} /> Copy Link
                  </button>
                  <button onClick={() => handleShareOption('whatsapp')} className="resume-share-item">
                    💬 WhatsApp
                  </button>
                  <button onClick={() => handleShareOption('linkedin')} className="resume-share-item">
                    💼 LinkedIn
                  </button>
                  <button onClick={() => handleShareOption('email')} className="resume-share-item">
                    ✉️ Email
                  </button>
                </div>
              )}
            </div>

            <button
              className="btn btn-secondary btn-sm"
              onClick={handleCopyText}
              title="Copy Resume as text"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              className="btn btn-primary btn-sm"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Download size={16} />
              <span>Download / Print</span>
            </button>

            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Open full page resume"
            >
              <ExternalLink size={16} />
              <span>Full Tab</span>
            </a>

            <button
              className="resume-modal-close"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / Paper Preview */}
        <div className="resume-modal-body">
          <div className="resume-paper">
            {/* Header */}
            <div className="resume-header">
              <h1 className="resume-name">Satyam Kumar</h1>
              <div className="resume-contacts">
                <div className="resume-contact-item">
                  <strong>LinkedIn:</strong>{' '}
                  <a href="https://www.linkedin.com/in/satyamhq" target="_blank" rel="noopener noreferrer">
                    https://www.linkedin.com/in/satyamhq
                  </a>
                </div>
                <div className="resume-contact-item">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:satyam31sk@gmail.com">satyam31sk@gmail.com</a>
                </div>
                <div className="resume-contact-item">
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/satyamhq" target="_blank" rel="noopener noreferrer">
                    https://github.com/satyamhq
                  </a>
                </div>
                <div className="resume-contact-item">
                  <strong>Mobile:</strong> <span>+91 - 6205844155</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="resume-section">
              <h2 className="resume-section-title">SKILLS</h2>
              <table className="resume-table">
                <tbody>
                  <tr>
                    <td className="resume-label-cell">Languages:</td>
                    <td>C, C++, Python, JavaScript, HTML, CSS</td>
                  </tr>
                  <tr>
                    <td className="resume-label-cell">Tools/Platforms:</td>
                    <td>Kali Linux, Metasploit, BurpSuite, Nmap, Wireshark, Hydra</td>
                  </tr>
                  <tr>
                    <td className="resume-label-cell">Frameworks:</td>
                    <td>Bootstrap, NodeJS, ExpressJS</td>
                  </tr>
                  <tr>
                    <td className="resume-label-cell">Soft Skills:</td>
                    <td>Adaptability, Problem-Solving, Team Player, Leadership, Time Management</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Projects */}
            <div className="resume-section">
              <h2 className="resume-section-title">PROJECTS</h2>

              <div className="resume-item">
                <div className="resume-item-head">
                  <span className="resume-item-name">
                    Hackerzone – Autonomous AI Interview Platform |{' '}
                    <a href="https://github.com/satyamhq/hackerzone-ai-interview" target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </span>
                  <span className="resume-date">Feb' 26</span>
                </div>
                <ul className="resume-bullets">
                  <li>Built a production-grade AI interview platform supporting autonomous technical and behavioral interviews through voice and chat-based interactions.</li>
                  <li>Integrated Google Gemini/OpenAI, WebSockets, Monaco Editor, and Excalidraw for real-time interviews, live coding, whiteboarding, automated scoring, and analytics.</li>
                </ul>
                <div className="resume-tech">
                  <strong>Tech:</strong> Next.js, TypeScript, Google Gemini, OpenAI, WebSockets, Supabase, Tailwind CSS
                </div>
              </div>

              <div className="resume-item">
                <div className="resume-item-head">
                  <span className="resume-item-name">
                    Curely – AI Healthcare Marketplace & Telemedicine Platform |{' '}
                    <a href="https://github.com/satyamhq/Curely" target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </span>
                  <span className="resume-date">Mar' 25</span>
                </div>
                <ul className="resume-bullets">
                  <li>Developed a healthcare platform connecting patients, doctors, pharmacies, and diagnostic laboratories through role-based dashboards.</li>
                  <li>Integrated AI-powered symptom analysis and doctor matching, along with appointment booking, pharmacy ordering, diagnostic tests, and health-record management.</li>
                  <li>Implemented authentication, database management, provider verification, and admin governance using Supabase.</li>
                </ul>
                <div className="resume-tech">
                  <strong>Tech:</strong> Next.js, TypeScript, OpenAI API, Supabase, PostgreSQL, Zustand, Tailwind CSS
                </div>
              </div>

              <div className="resume-item">
                <div className="resume-item-head">
                  <span className="resume-item-name">
                    Agri1 – AI-Powered Personal Farming Assistant |{' '}
                    <a href="https://github.com/satyamhq/ai-powered-personal-farming-assistant" target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </span>
                  <span className="resume-date">Oct' 24</span>
                </div>
                <ul className="resume-bullets">
                  <li>Built an offline-first Progressive Web App for Indian farmers with farm management, crop tracking, weather intelligence, and mandi-price information.</li>
                  <li>Integrated real-time market prices, weather forecasting, distance-based mandi sorting, and agricultural advisory features.</li>
                  <li>Achieved 92% sorting accuracy, reduced misclassification by 30%, and enabled &lt;1s object detection & sorting.</li>
                </ul>
                <div className="resume-tech">
                  <strong>Tech:</strong> HTML5, CSS3, JavaScript, IndexedDB, Service Worker, PWA, APIs
                </div>
              </div>
            </div>

            {/* Training */}
            <div className="resume-section">
              <h2 className="resume-section-title">TRAINING</h2>
              <div className="resume-item">
                <div className="resume-item-head">
                  <span className="resume-item-name">
                    Lovely Professional University | <a href="#education">Certificate</a>
                  </span>
                  <span className="resume-date">Jan' 26 - May' 26</span>
                </div>
                <div className="resume-subtitle">C/C++ Programming – Summer Training</div>
                <ul className="resume-bullets">
                  <li>Developed a strong foundation in C/C++ programming, focusing on core programming concepts, problem-solving techniques, and structured program development.</li>
                  <li>Gained hands-on experience with variables, data types, conditional statements, loops, functions, arrays, pointers, structures, and object-oriented programming concepts.</li>
                </ul>
                <div className="resume-tech">
                  <strong>Tech:</strong> C, C++
                </div>
              </div>
            </div>

            {/* Certificates */}
            <div className="resume-section">
              <h2 className="resume-section-title">CERTIFICATES</h2>
              <div className="resume-row">
                <span>Crash Course on Python | <a href="https://coursera.org/account/accomplishments/verify/7HH1JUIJ5519" target="_blank" rel="noopener noreferrer">Google</a></span>
                <span className="resume-date">Nov' 25</span>
              </div>
              <div className="resume-row">
                <span>Introduction to Front-End Development | <a href="https://coursera.org/account/accomplishments/verify/CYAPZ7X28IRK" target="_blank" rel="noopener noreferrer">Meta</a></span>
                <span className="resume-date">Jan' 26</span>
              </div>
              <div className="resume-row">
                <span>Programming with JavaScript | <a href="https://coursera.org/account/accomplishments/verify/181ZTYSWMNW5" target="_blank" rel="noopener noreferrer">Meta</a></span>
                <span className="resume-date">Feb' 26</span>
              </div>
              <div className="resume-row">
                <span>Version Control | <a href="https://coursera.org/account/accomplishments/verify/7CR28Y1XZIOL" target="_blank" rel="noopener noreferrer">Meta</a></span>
                <span className="resume-date">Mar' 26</span>
              </div>
              <div className="resume-row">
                <span>Introduction to Model Context Protocol | <a href="https://verify.skilljar.com/c/38m7f2if3crd" target="_blank" rel="noopener noreferrer">Anthropic</a></span>
                <span className="resume-date">April' 26</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="resume-section">
              <h2 className="resume-section-title">ACHIEVEMENTS</h2>
              <div className="resume-row">
                <span>100 DSA questions <a href="https://leetcode.com/satyamhq" target="_blank" rel="noopener noreferrer">LeetCode</a></span>
                <span className="resume-date">Mar' 26</span>
              </div>
              <div className="resume-row">
                <span>31 Points <a href="https://hackerearth.com/@satyamhq" target="_blank" rel="noopener noreferrer">HackerEarth</a></span>
                <span className="resume-date">Mar' 26</span>
              </div>
              <div className="resume-row">
                <span>3 star rating in Python on <a href="https://hackerrank.com/satyamhq" target="_blank" rel="noopener noreferrer">HackerRank</a></span>
                <span className="resume-date">Apr' 24</span>
              </div>
            </div>

            {/* Education */}
            <div className="resume-section">
              <h2 className="resume-section-title">EDUCATION</h2>
              <div className="resume-edu-item">
                <div className="resume-edu-head">
                  <span>Lovely Professional University</span>
                  <span>Phagwara, Punjab</span>
                </div>
                <div className="resume-edu-sub">
                  <span>Bachelor of Technology - Computer Science and Engineering; CGPA: 8.02</span>
                  <span>Aug' 25 – Present</span>
                </div>
              </div>
              <div className="resume-edu-item">
                <div className="resume-edu-head">
                  <span>Mount Carmel English School</span>
                  <span>Purnia, Bihar</span>
                </div>
                <div className="resume-edu-sub">
                  <span>Intermediate - PCM Percentage: 82%</span>
                  <span>Mar' 23 – May' 25</span>
                </div>
              </div>
              <div className="resume-edu-item">
                <div className="resume-edu-head">
                  <span>Saraswati Vidya Mandir</span>
                  <span>Purnia, Bihar</span>
                </div>
                <div className="resume-edu-sub">
                  <span>Matriculation - Percentage: 85%</span>
                  <span>Mar' 18 – May' 23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .resume-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 15, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: modalFadeIn 250ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }

        .resume-modal-container {
          background: #ffffff;
          width: 100%;
          max-width: 900px;
          height: 92vh;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .resume-modal-toolbar {
          padding: 16px 24px;
          background: #fbfbfd;
          border-bottom: 1px solid var(--color-border, #e5e4e0);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-shrink: 0;
        }

        .resume-modal-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .resume-modal-icon {
          color: var(--color-accent-primary, #3B2FE0);
        }

        .resume-modal-title h3 {
          font-family: var(--font-display, system-ui);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-primary, #111);
          margin: 0;
        }

        .resume-modal-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .resume-share-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          right: 0;
          background: #ffffff;
          border: 1px solid var(--color-border, #e5e4e0);
          border-radius: 12px;
          padding: 6px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          z-index: 2050;
          min-width: 140px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          animation: modalFadeIn 180ms ease;
        }

        .resume-share-item {
          background: none;
          border: none;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.8125rem;
          font-weight: 500;
          text-align: left;
          color: var(--color-text-primary, #111);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background 150ms;
        }

        .resume-share-item:hover {
          background: rgba(59, 47, 224, 0.08);
          color: var(--color-accent-primary, #3B2FE0);
        }

        .resume-modal-close {
          background: none;
          border: none;
          padding: 8px;
          border-radius: 8px;
          color: var(--color-text-muted, #666);
          cursor: pointer;
          transition: all 150ms ease;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 4px;
        }

        .resume-modal-close:hover {
          background: rgba(0, 0, 0, 0.06);
          color: var(--color-text-primary, #111);
        }

        .resume-modal-body {
          flex: 1;
          overflow-y: auto;
          background: #f0f2f5;
          padding: 30px 20px;
          display: flex;
          justify-content: center;
        }

        .resume-paper {
          background: #ffffff;
          width: 100%;
          max-width: 780px;
          padding: 40px 48px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border-radius: 6px;
          font-family: 'Merriweather', Georgia, serif;
          color: #1a1a1a;
          line-height: 1.35;
          font-size: 13px;
        }

        .resume-header {
          margin-bottom: 12px;
        }

        .resume-name {
          font-size: 24px;
          font-weight: 700;
          color: #111;
          margin-bottom: 4px;
        }

        .resume-contacts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 3px;
          font-size: 12px;
        }

        .resume-contact-item a {
          color: #0044cc;
          text-decoration: underline;
        }

        .resume-section {
          margin-top: 12px;
        }

        .resume-section-title {
          font-size: 12.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #222;
          padding-bottom: 2px;
          margin-bottom: 6px;
          font-family: inherit;
        }

        .resume-table {
          width: 100%;
          font-size: 12px;
          border-collapse: collapse;
        }

        .resume-table td {
          padding: 2px 0;
          vertical-align: top;
        }

        .resume-label-cell {
          font-weight: 700;
          width: 125px;
        }

        .resume-item {
          margin-bottom: 8px;
        }

        .resume-item-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 12.5px;
        }

        .resume-item-name {
          font-weight: 700;
        }

        .resume-item-name a {
          color: #0044cc;
          text-decoration: underline;
          font-weight: 400;
        }

        .resume-date {
          font-size: 11.5px;
          font-weight: 400;
          white-space: nowrap;
        }

        .resume-subtitle {
          font-style: italic;
          font-size: 11.5px;
          margin-bottom: 2px;
        }

        .resume-bullets {
          list-style-type: disc;
          padding-left: 18px;
          margin: 2px 0;
          font-size: 12px;
        }

        .resume-bullets li {
          margin-bottom: 2px;
          line-height: 1.35;
        }

        .resume-tech {
          font-size: 11.5px;
          margin-top: 2px;
        }

        .resume-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 12px;
          padding: 1.5px 0;
        }

        .resume-row a {
          color: #0044cc;
          text-decoration: underline;
        }

        .resume-edu-item {
          margin-bottom: 6px;
        }

        .resume-edu-head {
          display: flex;
          justify-content: space-between;
          font-size: 12.5px;
          font-weight: 700;
        }

        .resume-edu-sub {
          display: flex;
          justify-content: space-between;
          font-size: 11.5px;
        }

        @media (max-width: 768px) {
          .resume-modal-container {
            height: 98vh;
            border-radius: 12px;
          }

          .resume-modal-toolbar {
            flex-direction: column;
            align-items: flex-start;
            padding: 12px 16px;
            gap: 12px;
          }

          .resume-modal-actions {
            width: 100%;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          .resume-modal-body {
            padding: 12px;
          }

          .resume-paper {
            padding: 20px 16px;
          }

          .resume-contacts {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

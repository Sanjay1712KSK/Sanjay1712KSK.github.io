import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumePageProps {
  onNavigate: (path: string) => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onNavigate }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="resume-page-container">
      {/* Top Document Header Bar */}
      <section className="resume-header-section">
        <div className="resume-header-content">
          <div className="resume-breadcrumb">
            <button
              onClick={() => {
                onNavigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="back-btn"
              aria-label="Return to portfolio homepage"
            >
              ← Back to Portfolio
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Curriculum Vitae</span>
          </div>

          <div className="resume-title-row">
            <div>
              <h1 className="resume-main-title">Curriculum Vitae</h1>
              <p className="resume-subtitle">
                Official document for {PORTFOLIO_DATA.profile.name} • {PORTFOLIO_DATA.profile.title}
              </p>
            </div>

            <div className="resume-actions-group">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="Open resume PDF in a new browser tab"
              >
                <span>Open in Tab ↗</span>
              </a>
              <a
                href="/resume.pdf"
                download="Sanjay_Kumar_S_CV.pdf"
                className="btn btn-primary"
                aria-label="Download Sanjay Kumar S CV PDF"
              >
                <span>Download CV (PDF) ↓</span>
              </a>
            </div>
          </div>

          {/* Document Verification Metadata */}
          <div className="resume-meta-strip">
            <div className="meta-pill">
              <span className="meta-label">CANDIDATE</span>
              <span className="meta-value">{PORTFOLIO_DATA.profile.name}</span>
            </div>
            <div className="meta-pill">
              <span className="meta-label">ACADEMICS</span>
              <span className="meta-value">SRM University, KTR (CGPA {PORTFOLIO_DATA.education.cgpa})</span>
            </div>
            <div className="meta-pill">
              <span className="meta-label">SPECIALIZATION</span>
              <span className="meta-value">AI, Robotics &amp; Autonomous Systems</span>
            </div>
            <div className="meta-pill">
              <span className="meta-label">STATUS</span>
              <span className="meta-value verified-badge">Verified 2026 Edition</span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Document Viewer Container */}
      <section className="resume-viewer-section">
        <div className="resume-frame-container">
          {!hasError ? (
            <object
              data="/resume.pdf#toolbar=1&navpanes=0&view=FitH"
              type="application/pdf"
              className="resume-object-viewer"
              aria-label="Sanjay Kumar S Curriculum Vitae PDF Viewer"
              onError={() => setHasError(true)}
            >
              {/* Fallback for browsers / devices that don't embed PDF objects directly */}
              <div className="resume-mobile-fallback">
                <div className="fallback-card">
                  <div className="fallback-icon">📄</div>
                  <h2 className="fallback-title">Sanjay Kumar S — Curriculum Vitae</h2>
                  <p className="fallback-desc">
                    Your current browser or mobile viewport does not support embedded PDF viewing. You can view or download the verified document directly:
                  </p>
                  <div className="fallback-actions">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Open PDF in Browser ↗
                    </a>
                    <a
                      href="/resume.pdf"
                      download="Sanjay_Kumar_S_CV.pdf"
                      className="btn btn-primary"
                    >
                      Download PDF Document ↓
                    </a>
                  </div>
                </div>
              </div>
            </object>
          ) : (
            <div className="resume-error-fallback">
              <p>Unable to embed PDF viewer directly. Please download the document below.</p>
              <a href="/resume.pdf" download="Sanjay_Kumar_S_CV.pdf" className="btn btn-primary">
                Download Sanjay Kumar S CV (PDF)
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Document Key Sections Summary (Fast Reading for Quick Reviewers) */}
      <section className="resume-highlights-section">
        <div className="highlights-container">
          <h2 className="highlights-title">Summary of Credentials &amp; Verification</h2>
          <div className="highlights-grid">
            <div className="highlight-col">
              <h3>Academic Background</h3>
              <p>
                <strong>B.Tech in Computer Science and Engineering (AI &amp; ML)</strong><br />
                SRM Institute of Science and Technology, Kattankulathur, Chennai (2023 – 2027).<br />
                Verified cumulative CGPA: <strong>9.46</strong> (official Sem 1–6 transcript).
              </p>
            </div>
            <div className="highlight-col">
              <h3>Key Research &amp; Industry Roles</h3>
              <p>
                <strong>Undergraduate Researcher</strong> – SRM UROP Program (Nov 2025 – Present). Autonomous drone navigation and reinforcement learning in UE5.<br />
                <strong>IT &amp; Systems Support Engineer</strong> – MEDBE Pharma and Healthcare (June 2025 – August 2026). Linux infrastructure &amp; RBAC.
              </p>
            </div>
            <div className="highlight-col">
              <h3>Direct Contacts</h3>
              <p>
                Email: <a href="mailto:sanjayksk1712@gmail.com">sanjayksk1712@gmail.com</a><br />
                Phone: <a href="tel:+919487044111">+91 94870 44111</a><br />
                GitHub: <a href="https://github.com/Sanjay1712KSK" target="_blank" rel="noreferrer">Sanjay1712KSK</a><br />
                LinkedIn: <a href="https://www.linkedin.com/in/sanjaykumarksk/" target="_blank" rel="noreferrer">sanjaykumarksk</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

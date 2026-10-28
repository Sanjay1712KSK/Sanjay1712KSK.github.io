import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ResearchDiagram } from '../components/ResearchDiagram';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeNoteId, setActiveNoteId] = useState<string>(PORTFOLIO_DATA.engineeringNotes[0].id);

  const activeNote = PORTFOLIO_DATA.engineeringNotes.find((n) => n.id === activeNoteId) || PORTFOLIO_DATA.engineeringNotes[0];

  return (
    <div className="homepage-container">
      {/* =========================================================================
          SECTION 1: HERO
          ========================================================================= */}
      <section className="section hero-section" id="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              <span>Undergraduate Researcher @ SRM UROP • AI Systems Engineer</span>
            </div>

            <h1 className="hero-name">{PORTFOLIO_DATA.profile.name}</h1>
            <p className="hero-title">{PORTFOLIO_DATA.profile.title}</p>

            <p className="hero-headline">
              {PORTFOLIO_DATA.profile.headline}
            </p>

            <p className="hero-bio">
              {PORTFOLIO_DATA.profile.shortBio}
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                Explore Selected Work ↓
              </a>
              <button
                onClick={() => {
                  onNavigate('/resume/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn btn-secondary"
                aria-label="View dedicated resume page"
              >
                View Curriculum Vitae →
              </button>
            </div>

            <div className="hero-links">
              <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <span className="link-icon">⌥</span> GitHub
              </a>
              <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <span className="link-icon">↗</span> LinkedIn
              </a>
              <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hero-social-link">
                <span className="link-icon">✉</span> {PORTFOLIO_DATA.profile.email}
              </a>
            </div>
          </div>

          {/* Right Column: Technical Snapshot Panel */}
          <div className="hero-aside">
            <div className="snapshot-card">
              <div className="snapshot-header">
                <span className="snapshot-tag">PROFILE AT A GLANCE</span>
                <span className="snapshot-status">Verified 2026</span>
              </div>

              <div className="snapshot-rows">
                <div className="snapshot-row">
                  <span className="snap-label">Research Focus</span>
                  <span className="snap-value">Reinforcement Learning &amp; Drone Autonomy in UE5</span>
                </div>
                <div className="snapshot-row">
                  <span className="snap-label">Education</span>
                  <span className="snap-value">B.Tech CSE (AI &amp; ML) • SRMIST, Chennai</span>
                </div>
                <div className="snapshot-row">
                  <span className="snap-label">Academic Record</span>
                  <span className="snap-value highlight-value">Cumulative CGPA: {PORTFOLIO_DATA.education.cgpa} (Sem 1–6)</span>
                </div>
                <div className="snapshot-row">
                  <span className="snap-label">Industry Experience</span>
                  <span className="snap-value">IT &amp; Systems Support Engineer (MEDBE Pharma)</span>
                </div>
                <div className="snapshot-row">
                  <span className="snap-label">Core Toolchain</span>
                  <span className="snap-value">Python, C++, PyTorch, Unreal Engine 5.5, Linux</span>
                </div>
              </div>

              <div className="snapshot-footer">
                <span className="pulse-indicator" aria-hidden="true" />
                <span>Active Research: GPS-Denied Simulation Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT
          ========================================================================= */}
      <section className="section about-section" id="about">
        <div className="section-header">
          <span className="section-kicker">01 / OVERVIEW</span>
          <h2 className="section-heading">Engineering Background &amp; Philosophy</h2>
        </div>

        <div className="about-grid">
          <div className="about-prose">
            <p className="prose-lead">
              My engineering work is situated at the intersection of deep reinforcement learning, high-fidelity robotics simulation, and low-level Linux systems infrastructure.
            </p>
            <p>
              In autonomous systems, the gap between algorithmic theory and physical control is often where systems break down. At the SRM UROP Program, I investigate how reinforcement learning agents (PPO) formulate stable quadrotor control under extreme uncertainty and aerodynamic disturbances within Unreal Engine 5.5 and Cosys AirSim. This work requires building reliable simulation environments, carefully formulating observation spaces, and engineering reproducible reward functions.
            </p>
            <p>
              Outside of robotics simulation, I treat software engineering and systems performance as equal disciplines. Whether architecting a computer vision workstation that processes 1,770+ FPS through hardware-accelerated NVDEC decoding or configuring Role-Based Access Control across enterprise Linux servers, I prioritize predictable performance, reproducible builds, and verified outcomes over generic claims.
            </p>
          </div>

          <div className="about-pillars">
            <div className="pillar-card">
              <h3 className="pillar-title">Simulated Autonomy</h3>
              <p className="pillar-desc">
                High-fidelity 200 Hz physics modeling in Unreal Engine 5 paired with asynchronous policy RPC loops for GPS-denied drone navigation.
              </p>
            </div>
            <div className="pillar-card">
              <h3 className="pillar-title">Hardware-Accelerated Vision</h3>
              <p className="pillar-desc">
                Direct integration of NVIDIA NVDEC/CUDA hardware decoders and containerized Meta SAM 2.1 models for dense video annotation.
              </p>
            </div>
            <div className="pillar-card">
              <h3 className="pillar-title">Resilient Systems</h3>
              <p className="pillar-desc">
                Hands-on systems administration across multi-user Linux deployments, RBAC security configurations, and local offline AI runtimes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: EDUCATION
          ========================================================================= */}
      <section className="section education-section" id="education">
        <div className="section-header">
          <span className="section-kicker">02 / ACADEMICS</span>
          <h2 className="section-heading">Education &amp; Academic Record</h2>
        </div>

        <div className="education-card">
          <div className="edu-main-row">
            <div>
              <h3 className="edu-degree">{PORTFOLIO_DATA.education.degree}</h3>
              <p className="edu-institution">
                {PORTFOLIO_DATA.education.institution} • {PORTFOLIO_DATA.education.campus}
              </p>
            </div>
            <div className="edu-score-badge">
              <span className="edu-score-label">VERIFIED CGPA</span>
              <span className="edu-score-num">{PORTFOLIO_DATA.education.cgpa} / 10.0</span>
            </div>
          </div>

          <div className="edu-meta-strip">
            <span className="edu-period">Period: <strong>{PORTFOLIO_DATA.education.period}</strong></span>
            <span className="meta-separator">•</span>
            <span className="edu-status">Status: <strong>Active Undergraduate Student</strong></span>
            <span className="meta-separator">•</span>
            <span className="edu-verified-note">{PORTFOLIO_DATA.education.verifiedNote}</span>
          </div>

          <div className="edu-subjects-container">
            <span className="subjects-label">Verified Core Academic Coursework:</span>
            <div className="subjects-tags">
              {PORTFOLIO_DATA.education.coreSubjects.map((sub, idx) => (
                <span key={idx} className="subject-tag">{sub}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EXPERIENCE
          ========================================================================= */}
      <section className="section experience-section" id="experience">
        <div className="section-header">
          <span className="section-kicker">03 / TRACK RECORD</span>
          <h2 className="section-heading">Professional &amp; Research Experience</h2>
        </div>

        <div className="experience-timeline">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <article key={idx} className="experience-entry">
              <div className="entry-marker-col">
                <div className="entry-dot" />
                <span className="entry-period">{exp.period}</span>
                <span className={`entry-type-tag ${exp.type}`}>
                  {exp.type === 'research' ? 'Academic Research' : 'Industry Operations'}
                </span>
              </div>

              <div className="entry-content">
                <div className="entry-header">
                  <h3 className="entry-role">{exp.role}</h3>
                  <div className="entry-company-loc">
                    <span className="entry-org">{exp.organization}</span>
                    <span className="meta-separator">•</span>
                    <span className="entry-loc">{exp.location}</span>
                  </div>
                </div>

                <p className="entry-summary">{exp.summary}</p>

                <ul className="entry-contributions">
                  {exp.contributions.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>

                <div className="entry-tech-stack">
                  <span className="tech-label">Technologies:</span>
                  <div className="tech-pills">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: DEDICATED RESEARCH SPOTLIGHT
          ========================================================================= */}
      <section className="section research-section" id="research">
        <div className="section-header">
          <span className="section-kicker">04 / RESEARCH SPOTLIGHT</span>
          <h2 className="section-heading">{PORTFOLIO_DATA.research.title}</h2>
          <p className="section-subheading">{PORTFOLIO_DATA.research.leadStatement}</p>
        </div>

        {/* Handcrafted Architectural Research Schematic */}
        <ResearchDiagram />

        {/* Deep Dive Grid */}
        <div className="research-deepdive-grid">
          <div className="research-panel">
            <h3 className="panel-title">The Core Problem</h3>
            <p className="panel-text">{PORTFOLIO_DATA.research.problem}</p>
          </div>

          <div className="research-panel">
            <h3 className="panel-title">Technical Approach</h3>
            <ul className="panel-list">
              {PORTFOLIO_DATA.research.technicalApproach.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="research-panel">
            <h3 className="panel-title">Simulation Environment Setup</h3>
            <div className="sim-meta-block">
              <div className="sim-row">
                <span className="sim-key">Physics Engine:</span>
                <span className="sim-val">{PORTFOLIO_DATA.research.simulationEnvironment.engine}</span>
              </div>
              <div className="sim-row">
                <span className="sim-key">Drone Simulator:</span>
                <span className="sim-val">{PORTFOLIO_DATA.research.simulationEnvironment.simulator}</span>
              </div>
              <div className="sim-row">
                <span className="sim-key">Physics Rate:</span>
                <span className="sim-val">{PORTFOLIO_DATA.research.simulationEnvironment.physicsRate}</span>
              </div>
              <div className="sim-row">
                <span className="sim-key">Simulated Sensors:</span>
                <span className="sim-val">{PORTFOLIO_DATA.research.simulationEnvironment.sensorSuite.join(', ')}</span>
              </div>
            </div>
          </div>

          <div className="research-panel">
            <h3 className="panel-title">Empirical Results &amp; Constraints</h3>
            <div className="results-block">
              <span className="results-subtitle">Demonstrated Benchmark Results:</span>
              <ul className="panel-list">
                {PORTFOLIO_DATA.research.measuredResults.map((res, idx) => (
                  <li key={idx} className="result-item">{res}</li>
                ))}
              </ul>

              <span className="results-subtitle mt-4">Current Limitations &amp; Ongoing Work:</span>
              <ul className="panel-list">
                {PORTFOLIO_DATA.research.currentLimitations.map((lim, idx) => (
                  <li key={idx} className="limitation-item">{lim}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SELECTED PROJECTS
          ========================================================================= */}
      <section className="section projects-section" id="projects">
        <div className="section-header">
          <span className="section-kicker">05 / SELECTED WORK</span>
          <h2 className="section-heading">Featured Systems &amp; Software Projects</h2>
          <p className="section-subheading">
            Authentic implementations spanning computer vision, reinforcement learning, local AI workstations, and full-stack platforms.
          </p>
        </div>

        <div className="projects-collection">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <article key={project.id} className={`project-editorial-card ${idx === 0 || idx === 1 ? 'project-spotlight' : ''}`}>
              <div className="project-top-row">
                <div className="project-category-tag">{project.category}</div>
                <div className="project-status-badge">{project.status}</div>
              </div>

              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>

              <div className="project-body-grid">
                <div className="project-main-info">
                  <div className="info-block">
                    <span className="info-label">Problem Addressed:</span>
                    <p className="info-text">{project.problem}</p>
                  </div>

                  <div className="info-block">
                    <span className="info-label">Technical Contribution:</span>
                    <p className="info-text">{project.technicalContribution}</p>
                  </div>

                  <div className="info-block">
                    <span className="info-label">Key Architecture Details:</span>
                    <ul className="project-arch-list">
                      {project.architectureDetails.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-sidebar-meta">
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="project-metrics-box">
                      <span className="metrics-box-title">Technical Specifications</span>
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="metric-row">
                          <span className="metric-lbl">{metric.label}</span>
                          <span className="metric-val">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="project-stack-box">
                    <span className="stack-box-title">Technology Stack</span>
                    <div className="project-tags-wrap">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="project-tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions-row">
                    {project.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${link.primary ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: ENGINEERING FIELD NOTES (CONSOLIDATED)
          ========================================================================= */}
      <section className="section notes-section" id="notes">
        <div className="section-header">
          <span className="section-kicker">06 / TECHNICAL DOCUMENTATION</span>
          <h2 className="section-heading">Engineering Field Notes</h2>
          <p className="section-subheading">
            Pragmatic troubleshooting breakdowns and system configuration workflows encountered while engineering deep learning and simulation testbeds.
          </p>
        </div>

        <div className="notes-container">
          {/* Note Selection Tabs */}
          <div className="notes-tab-selector" role="tablist" aria-label="Engineering Notes Topics">
            {PORTFOLIO_DATA.engineeringNotes.map((note) => (
              <button
                key={note.id}
                role="tab"
                aria-selected={activeNoteId === note.id}
                className={`note-selector-btn ${activeNoteId === note.id ? 'active' : ''}`}
                onClick={() => setActiveNoteId(note.id)}
              >
                <span className="selector-category">{note.category}</span>
                <span className="selector-title">{note.title}</span>
                <span className="selector-date">{note.date}</span>
              </button>
            ))}
          </div>

          {/* Active Note Content Viewer */}
          <div className="note-display-card" role="tabpanel">
            <div className="note-card-header">
              <span className="note-card-cat">{activeNote.category} • {activeNote.date}</span>
              <h3 className="note-card-title">{activeNote.title}</h3>
              <p className="note-card-synopsis">{activeNote.synopsis}</p>
            </div>

            <div className="note-card-body">
              <p className="note-overview">{activeNote.overview}</p>

              <div className="note-steps-list">
                {activeNote.steps.map((step, sIdx) => (
                  <div key={sIdx} className="note-step-block">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-explanation">{step.explanation}</p>
                    {step.codeSnippet && (
                      <pre className="step-code"><code>{step.codeSnippet}</code></pre>
                    )}
                    {step.criticalInsight && (
                      <div className="step-insight">
                        <strong>Engineering Insight:</strong> {step.criticalInsight}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="note-takeaways-block">
                <h4 className="takeaways-title">Key Engineering Takeaways:</h4>
                <ul className="takeaways-list">
                  {activeNote.takeaways.map((takeaway, tIdx) => (
                    <li key={tIdx}>{takeaway}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TECHNICAL SKILLS
          ========================================================================= */}
      <section className="section skills-section" id="skills">
        <div className="section-header">
          <span className="section-kicker">07 / TOOLCHAIN</span>
          <h2 className="section-heading">Verified Technical Capabilities</h2>
        </div>

        <div className="skills-grid">
          {PORTFOLIO_DATA.skills.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <h3 className="skill-cat-title">{cat.category}</h3>
              <p className="skill-cat-desc">{cat.description}</p>
              <div className="skill-tags-cloud">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: ACHIEVEMENTS & CERTIFICATIONS
          ========================================================================= */}
      <section className="section achievements-section" id="achievements">
        <div className="section-header">
          <span className="section-kicker">08 / RECOGNITION</span>
          <h2 className="section-heading">Achievements &amp; Certifications</h2>
        </div>

        <div className="recognition-grid">
          {/* Hackathons */}
          <div className="recognition-col">
            <h3 className="recognition-col-title">Competitive Hackathons</h3>
            <div className="recognition-cards-list">
              {PORTFOLIO_DATA.achievements.map((ach, idx) => (
                <div key={idx} className="rec-card">
                  <div className="rec-card-top">
                    <span className="rec-award">{ach.award}</span>
                    <span className="rec-date">{ach.date}</span>
                  </div>
                  <h4 className="rec-title">{ach.title}</h4>
                  <p className="rec-org">{ach.organization} • {ach.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="recognition-col">
            <h3 className="recognition-col-title">Verified Certifications</h3>
            <div className="recognition-cards-list">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="rec-card">
                  <div className="rec-card-top">
                    <span className="rec-issuer">{cert.issuer}</span>
                    <span className="rec-date">{cert.date}</span>
                  </div>
                  <h4 className="rec-title">{cert.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: CONTACT
          ========================================================================= */}
      <section className="section contact-section" id="contact">
        <div className="contact-box">
          <div className="contact-info">
            <span className="section-kicker">09 / CONNECT</span>
            <h2 className="contact-heading">Get in Touch</h2>
            <p className="contact-desc">
              I am open to discussions regarding undergraduate research collaborations, autonomous systems engineering, computer vision pipelines, and full-time or internship engineering roles.
            </p>

            <div className="contact-details-list">
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="detail-link">
                  {PORTFOLIO_DATA.profile.email}
                </a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <a href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`} className="detail-link">
                  {PORTFOLIO_DATA.profile.phone}
                </a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-text">{PORTFOLIO_DATA.profile.location} (IST / UTC+5:30)</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Profiles:</span>
                <div className="detail-links-group">
                  <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noopener noreferrer" className="detail-link">
                    GitHub ↗
                  </a>
                  <span className="meta-separator">•</span>
                  <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noopener noreferrer" className="detail-link">
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-action-card">
            <h3 className="card-heading">Curriculum Vitae</h3>
            <p className="card-sub">
              Access the complete, verified 2026 CV detailing all course credits, simulation projects, and systems experience.
            </p>
            <div className="card-buttons">
              <button
                onClick={() => {
                  onNavigate('/resume/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn btn-primary"
              >
                View Resume Page →
              </button>
              <a
                href="/resume.pdf"
                download="Sanjay_Kumar_S_CV.pdf"
                className="btn btn-secondary"
              >
                Download PDF (116 KB) ↓
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ResearchDiagram } from '../components/ResearchDiagram';
import {
  FrameGeneratorVisual,
  AeroControllersVisual,
  LLLMaoVisual
} from '../components/ProjectShowcaseVisuals';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeNoteId, setActiveNoteId] = useState<string>(PORTFOLIO_DATA.engineeringNotes[0].id);

  const activeNote = PORTFOLIO_DATA.engineeringNotes.find((n) => n.id === activeNoteId) || PORTFOLIO_DATA.engineeringNotes[0];

  const frameGenProject = PORTFOLIO_DATA.projects.find((p) => p.id === 'frame-generator') || PORTFOLIO_DATA.projects[0];
  const aeroProject = PORTFOLIO_DATA.projects.find((p) => p.id === 'aero-controllers') || PORTFOLIO_DATA.projects[1];
  const lllmaoProject = PORTFOLIO_DATA.projects.find((p) => p.id === 'lllmao') || PORTFOLIO_DATA.projects[2];
  const otherProjects = PORTFOLIO_DATA.projects.filter(
    (p) => !['frame-generator', 'aero-controllers', 'lllmao'].includes(p.id)
  );

  return (
    <div className="homepage-container">
      {/* =========================================================================
          SECTION 1: PRODUCT-PAGE-INSPIRED HERO
          ========================================================================= */}
      <section className="section hero-section" id="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-indicator-dot" aria-hidden="true" />
              <span>SRM UROP RESEARCHER · AI &amp; SYSTEMS ENGINEER</span>
            </div>

            <h1 className="hero-headline">
              Engineering autonomous flight in simulation, high-throughput GPU perception, and resilient systems.
            </h1>

            <p className="hero-bio">
              I am <strong>{PORTFOLIO_DATA.profile.name}</strong>, a B.Tech Computer Science (AI &amp; ML) engineer at SRM University (CGPA 9.46). My research develops continuous deep reinforcement learning controllers for autonomous UAVs in GPS-denied environments using Unreal Engine 5.5 and Cosys AirSim, alongside GPU-accelerated video decoding systems.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                Explore Featured Showcases ↓
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

            <div className="hero-social-strip">
              <span className="social-strip-label">Direct Links:</span>
              <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noopener noreferrer" className="hero-social-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <span className="strip-divider">•</span>
              <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <span className="strip-divider">•</span>
              <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hero-social-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {PORTFOLIO_DATA.profile.email}
              </a>
            </div>
          </div>

          {/* Right Column: High-Grade Engineering Spec Panel */}
          <div className="hero-aside">
            <div className="spec-card">
              <div className="spec-card-header">
                <span className="spec-tag">SYSTEM PROFILE &amp; BENCHMARKS</span>
                <span className="spec-year">2026 EDITION</span>
              </div>

              <div className="spec-matrix">
                <div className="spec-item">
                  <span className="spec-label">Academic Standing</span>
                  <div className="spec-value-group">
                    <span className="spec-value-highlight">CGPA {PORTFOLIO_DATA.education.cgpa}</span>
                    <span className="spec-subtext">SRMIST (Sem 1–6 Verified)</span>
                  </div>
                </div>

                <div className="spec-item">
                  <span className="spec-label">Simulation Physics</span>
                  <div className="spec-value-group">
                    <span className="spec-value-highlight">200 Hz Rate</span>
                    <span className="spec-subtext">UE 5.5 + Cosys AirSim</span>
                  </div>
                </div>

                <div className="spec-item">
                  <span className="spec-label">GPU Video Pipeline</span>
                  <div className="spec-value-group">
                    <span className="spec-value-highlight">1,770+ FPS</span>
                    <span className="spec-subtext">NVIDIA NVDEC Hardware Decode</span>
                  </div>
                </div>

                <div className="spec-item">
                  <span className="spec-label">Flight Trajectory Precision</span>
                  <div className="spec-value-group">
                    <span className="spec-value-highlight">&lt; 0.18 m Error</span>
                    <span className="spec-subtext">Continuous PPO Indoor Hover</span>
                  </div>
                </div>
              </div>

              <div className="spec-card-footer">
                <div className="active-dot-ping" aria-hidden="true" />
                <span>Active Research Focus: Adverse Aerodynamic Domain Randomization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT & ENGINEERING PHILOSOPHY
          ========================================================================= */}
      <section className="section about-section" id="about">
        <div className="section-header">
          <span className="section-kicker">01 / CAPABILITIES &amp; MINDSET</span>
          <h2 className="section-heading">Engineering Background &amp; Philosophy</h2>
          <p className="section-subheading">
            Bridging theoretical machine learning with high-throughput hardware and real-time physical simulation.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-prose">
            <p className="prose-lead">
              My engineering work centers on continuous control in adverse environments, high-throughput vision workstations, and resilient Linux infrastructure.
            </p>
            <p className="prose-body">
              Rather than viewing machine learning models as isolated notebooks, I treat neural networks as components within larger, deterministic engineering loops. This philosophy requires understanding the complete stack: from GPU memory layouts and NVDEC hardware acceleration, up through RPC state synchronization, down to rotor torque distribution in multi-rotor flight.
            </p>
            <p className="prose-body">
              Through the <strong>SRM UROP Program</strong>, I develop autonomous drone stabilization policies that learn to counteract wind gusts and unmodeled ground effect turbulence. In my systems work with <strong>MEDBE Pharma</strong>, I administered Linux workstations, configured role-based access security, and ensured continuous uptime across distributed operational endpoints.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-num">01</span>
                <h3 className="pillar-title">Robotics &amp; Autonomous Flight</h3>
              </div>
              <p className="pillar-text">
                Continuous deep reinforcement learning (PPO), custom quaternion state formulation, dense multi-objective reward shaping, and sub-millimeter trajectory convergence in GPS-denied environments.
              </p>
              <div className="pillar-tags">
                <span>Unreal Engine 5.5</span>
                <span>Cosys AirSim</span>
                <span>PPO</span>
                <span>Stable-Baselines3</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-num">02</span>
                <h3 className="pillar-title">High-Throughput Vision &amp; AI</h3>
              </div>
              <p className="pillar-text">
                Hardware-accelerated NVDEC video pipelines, Dockerized Meta SAM 2.1 zero-shot segmentation, and custom TrackNet frame extraction pipelines reaching over 1,770 frames per second.
              </p>
              <div className="pillar-tags">
                <span>PyTorch</span>
                <span>CUDA</span>
                <span>SAM 2.1</span>
                <span>NVDEC</span>
                <span>YOLOv8</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-num">03</span>
                <h3 className="pillar-title">Systems &amp; Linux Infrastructure</h3>
              </div>
              <p className="pillar-text">
                Production Linux administration, automated deployment scripting, strict Role-Based Access Control (RBAC), and offline-first local AI architectures built for zero-cloud latency.
              </p>
              <div className="pillar-tags">
                <span>Debian/Ubuntu</span>
                <span>Bash</span>
                <span>FastAPI</span>
                <span>Tauri (Rust)</span>
                <span>Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: EDUCATION & EXPERIENCE
          ========================================================================= */}
      <section className="section experience-section" id="experience">
        <div className="section-header">
          <span className="section-kicker">02 / PROFESSIONAL TIMELINE</span>
          <h2 className="section-heading">Education &amp; Experience</h2>
          <p className="section-subheading">
            Dual track of rigorous academic research in autonomous flight control and applied industry systems engineering.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="education-product-card">
          <div className="edu-top">
            <div className="edu-institution-group">
              <span className="edu-degree-tag">DEGREE PROGRAM</span>
              <h3 className="edu-degree">{PORTFOLIO_DATA.education.degree}</h3>
              <p className="edu-school">{PORTFOLIO_DATA.education.institution} • {PORTFOLIO_DATA.education.campus}</p>
            </div>
            <div className="edu-meta-badge">
              <span className="edu-cgpa-label">Cumulative CGPA</span>
              <span className="edu-cgpa-val">{PORTFOLIO_DATA.education.cgpa}</span>
              <span className="edu-period">{PORTFOLIO_DATA.education.period}</span>
            </div>
          </div>

          <div className="edu-divider" />

          <div className="edu-bottom">
            <span className="edu-notes-title">Core Academic Focus Areas:</span>
            <div className="edu-subjects-wrap">
              {PORTFOLIO_DATA.education.coreSubjects.map((subject, idx) => (
                <span key={idx} className="edu-subject-pill">{subject}</span>
              ))}
            </div>
            <p className="edu-transcript-note">
              ✓ Verified via official SRMIST Academic Transcript (Semesters 1 through 6 completed; Semester 6 SGPA: 9.60).
            </p>
          </div>
        </div>

        {/* Experience Roles List */}
        <div className="experience-list">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <article key={idx} className="experience-product-card">
              <div className="exp-side-col">
                <span className="exp-period-label">{exp.period}</span>
                <span className={`exp-type-badge ${exp.type}`}>
                  {exp.type === 'research' ? 'Academic Research' : 'Industry Operations'}
                </span>
                <span className="exp-loc-label">{exp.location}</span>
              </div>

              <div className="exp-main-col">
                <h3 className="exp-role-title">{exp.role}</h3>
                <h4 className="exp-org-name">{exp.organization}</h4>
                <p className="exp-summary-text">{exp.summary}</p>

                <ul className="exp-contributions-list">
                  {exp.contributions.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>

                <div className="exp-tech-strip">
                  <span className="tech-strip-title">Technologies:</span>
                  <div className="tech-strip-pills">
                    {exp.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="tech-badge-item">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: RESEARCH SPOTLIGHT (SRM UROP)
          ========================================================================= */}
      <section className="section research-section" id="research">
        <div className="section-header">
          <span className="section-kicker">03 / ACTIVE RESEARCH SPOTLIGHT</span>
          <h2 className="section-heading">{PORTFOLIO_DATA.research.title}</h2>
          <p className="section-subheading">{PORTFOLIO_DATA.research.leadStatement}</p>
        </div>

        {/* Handcrafted Architectural Research Schematic */}
        <ResearchDiagram />

        {/* Research Specifications & Empirical Breakdown */}
        <div className="research-spec-grid">
          <div className="spec-card-box">
            <h3 className="box-title">Problem Statement</h3>
            <p className="box-body">{PORTFOLIO_DATA.research.problem}</p>
          </div>

          <div className="spec-card-box">
            <h3 className="box-title">Technical Formulation</h3>
            <ul className="box-list">
              {PORTFOLIO_DATA.research.technicalApproach.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="spec-card-box">
            <h3 className="box-title">Simulation Environment Setup</h3>
            <div className="spec-meta-list">
              <div className="meta-pair">
                <span className="k">Physics Engine:</span>
                <span className="v">{PORTFOLIO_DATA.research.simulationEnvironment.engine}</span>
              </div>
              <div className="meta-pair">
                <span className="k">Drone Simulator:</span>
                <span className="v">{PORTFOLIO_DATA.research.simulationEnvironment.simulator}</span>
              </div>
              <div className="meta-pair">
                <span className="k">Physics Step Rate:</span>
                <span className="v">{PORTFOLIO_DATA.research.simulationEnvironment.physicsRate}</span>
              </div>
              <div className="meta-pair">
                <span className="k">Sensors:</span>
                <span className="v">{PORTFOLIO_DATA.research.simulationEnvironment.sensorSuite.join(', ')}</span>
              </div>
            </div>
          </div>

          <div className="spec-card-box">
            <h3 className="box-title">Empirical Results &amp; Constraints</h3>
            <span className="sub-tag">Measured Benchmark Quantifications:</span>
            <ul className="box-list mb-3">
              {PORTFOLIO_DATA.research.measuredResults.map((res, idx) => (
                <li key={idx} className="highlight-li">{res}</li>
              ))}
            </ul>

            <span className="sub-tag">Current Research Limitations:</span>
            <ul className="box-list">
              {PORTFOLIO_DATA.research.currentLimitations.map((lim, idx) => (
                <li key={idx} className="dim-li">{lim}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SELECTED PROJECTS (PRODUCT SHOWCASES)
          ========================================================================= */}
      <section className="section projects-section" id="projects">
        <div className="section-header">
          <span className="section-kicker">04 / SELECTED WORK</span>
          <h2 className="section-heading">Featured Systems &amp; Software Projects</h2>
          <p className="section-subheading">
            Authentic implementations presented as detailed product showcases, spanning GPU perception workstations, autonomous flight telemetry, and local AI engines.
          </p>
        </div>

        {/* SHOWCASE 1: Frame Generator (Two-Column Alternating Layout) */}
        <article className="showcase-card showcase-alternating">
          <div className="showcase-content-col">
            <div className="showcase-eyebrow">
              <span className="category-pill">{frameGenProject.category}</span>
              <span className="status-pill">{frameGenProject.status}</span>
            </div>

            <h3 className="showcase-title">{frameGenProject.title}</h3>
            <p className="showcase-tagline">{frameGenProject.tagline}</p>

            <div className="showcase-block">
              <span className="block-label">Problem Addressed:</span>
              <p className="block-text">{frameGenProject.problem}</p>
            </div>

            <div className="showcase-block">
              <span className="block-label">Technical Contribution:</span>
              <p className="block-text">{frameGenProject.technicalContribution}</p>
            </div>

            <div className="showcase-block">
              <span className="block-label">Architecture Highlights:</span>
              <ul className="showcase-feature-list">
                {frameGenProject.architectureDetails.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="showcase-meta-group">
              <div className="showcase-tags">
                {frameGenProject.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-badge-item">{tech}</span>
                ))}
              </div>

              <div className="showcase-actions">
                {frameGenProject.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="showcase-visual-col">
            <FrameGeneratorVisual />
          </div>
        </article>

        {/* SHOWCASE 2: Aero-Controllers (Wide Cinematic Product Showcase) */}
        <article className="showcase-card showcase-cinematic">
          <div className="cinematic-header-row">
            <div>
              <div className="showcase-eyebrow">
                <span className="category-pill">{aeroProject.category}</span>
                <span className="status-pill">{aeroProject.status}</span>
              </div>
              <h3 className="showcase-title">{aeroProject.title}</h3>
              <p className="showcase-tagline">{aeroProject.tagline}</p>
            </div>

            <div className="cinematic-actions">
              {aeroProject.links.map((link, lIdx) => (
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

          {/* Full-width 3D Flight Telemetry Interface Visual */}
          <div className="cinematic-visual-stage">
            <AeroControllersVisual />
          </div>

          <div className="cinematic-details-grid">
            <div className="cinematic-col">
              <span className="block-label">Problem Statement:</span>
              <p className="block-text">{aeroProject.problem}</p>
            </div>
            <div className="cinematic-col">
              <span className="block-label">Technical Approach:</span>
              <p className="block-text">{aeroProject.technicalContribution}</p>
            </div>
            <div className="cinematic-col">
              <span className="block-label">Architecture Breakdown:</span>
              <ul className="showcase-feature-list">
                {aeroProject.architectureDetails.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cinematic-footer">
            <span className="footer-meta-title">Technologies Utilized:</span>
            <div className="showcase-tags">
              {aeroProject.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="tech-badge-item">{tech}</span>
              ))}
            </div>
          </div>
        </article>

        {/* SHOWCASE 3: LLLMao (Alternating Visual Left, Content Right) */}
        <article className="showcase-card showcase-alternating reverse">
          <div className="showcase-visual-col">
            <LLLMaoVisual />
          </div>

          <div className="showcase-content-col">
            <div className="showcase-eyebrow">
              <span className="category-pill">{lllmaoProject.category}</span>
              <span className="status-pill">{lllmaoProject.status}</span>
            </div>

            <h3 className="showcase-title">{lllmaoProject.title}</h3>
            <p className="showcase-tagline">{lllmaoProject.tagline}</p>

            <div className="showcase-block">
              <span className="block-label">Privacy &amp; Security Challenge:</span>
              <p className="block-text">{lllmaoProject.problem}</p>
            </div>

            <div className="showcase-block">
              <span className="block-label">Technical Contribution:</span>
              <p className="block-text">{lllmaoProject.technicalContribution}</p>
            </div>

            <div className="showcase-block">
              <span className="block-label">Engine Architecture:</span>
              <ul className="showcase-feature-list">
                {lllmaoProject.architectureDetails.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="showcase-meta-group">
              <div className="showcase-tags">
                {lllmaoProject.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-badge-item">{tech}</span>
                ))}
              </div>

              <div className="showcase-actions">
                {lllmaoProject.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* SHOWCASE 4 & 5: Cattle-Go & GigShield in a Spacious Product Grid */}
        <div className="secondary-showcase-grid">
          {otherProjects.map((project) => (
            <article key={project.id} className="secondary-showcase-card">
              <div className="showcase-eyebrow">
                <span className="category-pill">{project.category}</span>
                <span className="status-pill">{project.status}</span>
              </div>

              <h3 className="secondary-title">{project.title}</h3>
              <p className="secondary-tagline">{project.tagline}</p>

              <div className="showcase-block">
                <span className="block-label">The Problem:</span>
                <p className="block-text">{project.problem}</p>
              </div>

              <div className="showcase-block">
                <span className="block-label">Technical Architecture:</span>
                <ul className="showcase-feature-list">
                  {project.architectureDetails.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>

              {project.metrics && project.metrics.length > 0 && (
                <div className="secondary-metrics-row">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="mini-metric">
                      <span className="mini-lbl">{m.label}</span>
                      <span className="mini-val">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="secondary-card-footer">
                <div className="showcase-tags">
                  {project.techStack.slice(0, 5).map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge-item">{tech}</span>
                  ))}
                </div>

                <div className="showcase-actions">
                  {project.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ENGINEERING FIELD NOTES
          ========================================================================= */}
      <section className="section notes-section" id="notes">
        <div className="section-header">
          <span className="section-kicker">05 / TECHNICAL DOCUMENTATION</span>
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
                      <pre className="step-code">
                        <code>{step.codeSnippet}</code>
                      </pre>
                    )}

                    {step.criticalInsight && (
                      <div className="step-insight">
                        <span className="insight-label">CRITICAL INSIGHT:</span>
                        <p className="insight-text">{step.criticalInsight}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="note-takeaways">
                <span className="takeaways-title">Summary Takeaways:</span>
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
          SECTION 7: TECHNICAL SKILLS MATRIX
          ========================================================================= */}
      <section className="section skills-section" id="skills">
        <div className="section-header">
          <span className="section-kicker">06 / TECHNICAL COMPETENCIES</span>
          <h2 className="section-heading">Systems &amp; Engineering Skills</h2>
          <p className="section-subheading">
            Categorized technical capabilities applied across machine learning, robotics simulation, kernel administration, and application engineering.
          </p>
        </div>

        <div className="skills-grid">
          {PORTFOLIO_DATA.skills.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-card-top">
                <span className="cat-index">0{idx + 1}</span>
                <h3 className="skill-cat-title">{cat.category}</h3>
              </div>
              <p className="skill-cat-desc">{cat.description}</p>
              
              <div className="skills-pill-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-item-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: HONORS & CERTIFICATIONS
          ========================================================================= */}
      <section className="section achievements-section" id="achievements">
        <div className="section-header">
          <span className="section-kicker">07 / VERIFIED RECOGNITION</span>
          <h2 className="section-heading">Honors, Awards &amp; Certifications</h2>
          <p className="section-subheading">
            Competitive hackathon victories, technical benchmark achievements, and certified professional specializations.
          </p>
        </div>

        <div className="achievements-container">
          <div className="awards-column">
            <h3 className="column-title">Hackathon &amp; Competitive Awards</h3>
            <div className="awards-list">
              {PORTFOLIO_DATA.achievements.map((item, idx) => (
                <div key={idx} className="award-item-card">
                  <div className="award-badge-col">
                    <span className="award-icon">🏆</span>
                  </div>
                  <div className="award-details">
                    <span className="award-honor">{item.award}</span>
                    <h4 className="award-title">{item.title}</h4>
                    <p className="award-meta">{item.organization} • {item.location} ({item.date})</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-column">
            <h3 className="column-title">Professional Certifications</h3>
            <div className="certs-list">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="cert-item-card">
                  <div className="cert-badge-col">
                    <span className="cert-icon">📜</span>
                  </div>
                  <div className="cert-details">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-meta">{cert.issuer} • Issued {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CONTACT INITIATION
          ========================================================================= */}
      <section className="section contact-section" id="contact">
        <div className="contact-box">
          <div className="contact-header">
            <span className="contact-kicker">08 / INITIATE CONTACT</span>
            <h2 className="contact-title">Let’s discuss engineering &amp; research opportunities.</h2>
            <p className="contact-desc">
              Currently available for autonomous systems engineering roles, robotics research collaborations, and machine learning infrastructure positions.
            </p>
          </div>

          <div className="contact-actions-row">
            <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="btn btn-primary btn-lg">
              <span>Send Direct Email: {PORTFOLIO_DATA.profile.email} ↗</span>
            </a>
            <button
              onClick={() => {
                onNavigate('/resume/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn btn-secondary btn-lg"
            >
              <span>View Curriculum Vitae (PDF) →</span>
            </button>
          </div>

          <div className="contact-meta-strip">
            <span>Location: {PORTFOLIO_DATA.profile.location}</span>
            <span>•</span>
            <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <span>•</span>
            <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>
    </div>
  );
};

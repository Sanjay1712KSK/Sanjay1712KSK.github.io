import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-identity">
            <span className="footer-name">{PORTFOLIO_DATA.profile.name}</span>
            <p className="footer-tagline">
              {PORTFOLIO_DATA.profile.title} • SRM University, Chennai
            </p>
            <p className="footer-location">
              Based in {PORTFOLIO_DATA.profile.location} • Available for Autonomous Systems &amp; AI Engineering
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-links-list">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('/'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 50); }}>About Overview</a></li>
              <li><a href="#experience" onClick={(e) => { e.preventDefault(); onNavigate('/'); setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), 50); }}>Experience &amp; Roles</a></li>
              <li><a href="#research" onClick={(e) => { e.preventDefault(); onNavigate('/'); setTimeout(() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' }), 50); }}>Drone Autonomy Research</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); onNavigate('/'); setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 50); }}>Selected Work</a></li>
              <li><a href="/resume/" onClick={(e) => { e.preventDefault(); onNavigate('/resume/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Curriculum Vitae (PDF)</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Direct Contact</span>
            <ul className="footer-links-list">
              <li>
                <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="footer-contact-link">
                  {PORTFOLIO_DATA.profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`} className="footer-contact-link">
                  {PORTFOLIO_DATA.profile.phone}
                </a>
              </li>
              <li>
                <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noopener noreferrer">
                  GitHub Profile ↗
                </a>
              </li>
              <li>
                <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <span>© 2026 {PORTFOLIO_DATA.profile.name}. All verified engineering content and simulation benchmarks.</span>
            <span className="footer-build-note">Built with React, TypeScript &amp; Vite • Hosted on GitHub Pages</span>
          </div>

          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Scroll back to top of page"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};


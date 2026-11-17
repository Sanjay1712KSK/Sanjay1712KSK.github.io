import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Footer() {
  const { name, github, linkedin, email, medium } = PORTFOLIO_DATA.profile;
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {name} · Built with React &amp; Vite
        </span>
        <span style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={medium} target="_blank" rel="noopener noreferrer">
            Medium
          </a>
          <a href={`mailto:${email}`}>Email</a>
        </span>
      </div>
    </footer>
  );
}

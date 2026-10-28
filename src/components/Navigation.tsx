import React, { useState, useEffect } from 'react';

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPath, onNavigate }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (currentPath !== '/') return;

      const sections = ['hero', 'about', 'experience', 'research', 'projects', 'notes', 'skills', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith('/resume')) {
      onNavigate('/resume/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPath !== '/') {
      onNavigate('/');
      // Wait for homepage to render then scroll
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Wordmark */}
        <a
          href="/"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Sanjay Kumar S Portfolio Home"
        >
          <span className="brand-name">SANJAY KUMAR S</span>
          <span className="brand-meta">AI &amp; AUTONOMOUS SYSTEMS</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${currentPath === '/' && activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}

          <span className="nav-divider" aria-hidden="true" />

          {/* Dedicated Resume Page Link */}
          <a
            href="/resume/"
            className={`nav-link nav-resume-btn ${currentPath.startsWith('/resume') ? 'active-page' : ''}`}
            onClick={(e) => handleLinkClick(e, '/resume/')}
            aria-label="View dedicated resume page"
          >
            Resume
            <span className="nav-btn-icon" aria-hidden="true">→</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="nav-mobile-menu">
          <nav className="mobile-links" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-link ${currentPath === '/' && activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-divider" />
            <a
              href="/resume/"
              className={`mobile-link mobile-resume-link ${currentPath.startsWith('/resume') ? 'active-page' : ''}`}
              onClick={(e) => handleLinkClick(e, '/resume/')}
            >
              Curriculum Vitae (PDF)
              <span>→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

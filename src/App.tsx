import { useEffect, useState, useCallback } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';

function App() {
  // Normalize initial path to handle root, /resume, /resume/, and hash routes
  const getInitialPath = (): string => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (path.includes('/resume') || hash.includes('resume')) {
      return '/resume/';
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  const navigateTo = useCallback((newPath: string) => {
    // Normalize path
    const normalized = newPath.endsWith('/') || newPath.includes('#') ? newPath : `${newPath}/`;
    
    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setCurrentPath(normalized);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('/resume') || hash.includes('resume')) {
        setCurrentPath('/resume/');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Subtle, accessible scroll reveal observer
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elementsToReveal = document.querySelectorAll(
      '.section, .showcase-card, .secondary-showcase-card, .spec-card-box, .experience-product-card, .education-product-card, .skill-category-card, .award-item-card, .cert-item-card'
    );
    
    elementsToReveal.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPath]);

  return (
    <div className="portfolio-app">
      <Navigation currentPath={currentPath} onNavigate={navigateTo} />

      <main id="main-content" className="main-content">
        {currentPath.startsWith('/resume') ? (
          <ResumePage onNavigate={navigateTo} />
        ) : (
          <HomePage onNavigate={navigateTo} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;

import { useCallback, useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { AyanCraftsPage } from './pages/AyanCraftsPage';
import { InspirationsPage } from './pages/InspirationsPage';
import { useRevealOnScroll, useScrollScenes, useTilt } from './hooks/useScroll';
import { PATHS, routeFromLocation, type Route } from './utils/routes';

type Theme = 'light' | 'dark';

const TITLES: Record<Route, string> = {
  home: 'Sanjay Kumar S | AI & Systems Engineer · Founder, Ayan Crafts',
  resume: 'Resume | Sanjay Kumar S',
  crafts: 'Ayan Crafts | Open-source studio by Sanjay Kumar S',
  inspirations: 'Inspirations | Sanjay Kumar S',
};

const readTheme = (): Theme =>
  document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

export default function App() {
  const [route, setRoute] = useState<Route>(routeFromLocation);
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    const onPop = () => setRoute(routeFromLocation());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  }, [theme]);

  useEffect(() => {
    document.title = TITLES[route];
    document.documentElement.dataset.route = route;
  }, [route]);

  // On first load, honour a deep link such as /#work once content has rendered.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id && !id.startsWith('/')) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    }
  }, []);

  useRevealOnScroll(route);
  useScrollScenes(route);
  useTilt();

  /** Navigate between pages, optionally landing on a section of the home page. */
  const navigate = useCallback((to: Route, sectionId?: string) => {
    const url = sectionId ? `${PATHS[to]}#${sectionId}` : PATHS[to];
    window.history.pushState({}, '', url);
    setRoute(to);
    requestAnimationFrame(() => {
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0 });
      }
    });
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav
        route={route}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        onNavigate={navigate}
      />
      <main id="main">
        {route === 'resume' ? (
          <ResumePage onNavigate={navigate} />
        ) : route === 'crafts' ? (
          <AyanCraftsPage onNavigate={navigate} />
        ) : route === 'inspirations' ? (
          <InspirationsPage onNavigate={navigate} />
        ) : (
          <HomePage onNavigate={navigate} />
        )}
      </main>
      <Footer />
    </>
  );
}

import { useEffect, useState, type MouseEvent } from 'react';
import { Close, Menu, Moon, Sun, ArrowRight, Hexagon } from './Icons';
import { useActiveSection, useDockMagnify, useScrollProgress } from '../hooks/useScroll';
import { PATHS, type Navigate, type Route } from '../utils/routes';

/** Each item is either a homepage section (id) or a separate page (route). */
const ITEMS: { label: string; id?: string; route?: Route }[] = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Ayan Crafts', route: 'crafts' },
  { label: 'Experience', id: 'experience' },
  { label: 'Writing', id: 'writing' },
  { label: 'Inspirations', route: 'inspirations' },
  { label: 'Contact', id: 'contact' },
];
type Item = (typeof ITEMS)[number];
const IDS = ['about', 'crafts', 'work', 'experience', 'skills', 'recognition', 'writing', 'contact'];

interface NavProps {
  route: Route;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onNavigate: Navigate;
}

export function Nav({ route, theme, onToggleTheme, onNavigate }: NavProps) {
  const [open, setOpen] = useState(false);
  const section = useActiveSection(IDS, route === 'home');
  const progressRef = useScrollProgress<HTMLDivElement>();
  const dockRef = useDockMagnify<HTMLElement>();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (item: Item) => (item.route ? route === item.route : route === 'home' && section === item.id);
  const hrefFor = (item: Item) => (item.route ? PATHS[item.route] : `/#${item.id}`);

  const go = (e: MouseEvent, item: Item) => {
    e.preventDefault();
    setOpen(false);
    if (item.route) return onNavigate(item.route);
    if (route === 'home') {
      window.history.replaceState({}, '', `#${item.id}`);
      document.getElementById(item.id!)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('home', item.id);
    }
  };

  const goResume = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    onNavigate('resume');
  };

  const goHome = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (route === 'home') {
      window.history.replaceState({}, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else onNavigate('home');
  };

  return (
    <>
      <div className="progress" ref={progressRef} aria-hidden="true" />
      <header className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand glass" onClick={goHome} aria-label="Sanjay Kumar S, home">
            <span className="brand-mark">S</span>
            <span>Sanjay Kumar S</span>
          </a>

          <nav aria-label="Primary" className="dock glass" ref={dockRef}>
            {ITEMS.map((item) => {
              const crafts = item.route === 'crafts';
              return (
                <a
                  key={item.label}
                  href={hrefFor(item)}
                  onClick={(e) => go(e, item)}
                  className={`dock-item${crafts ? ' is-crafts' : ''}${isActive(item) ? ' is-active' : ''}`}
                  aria-current={isActive(item) ? (item.route ? 'page' : 'true') : undefined}
                >
                  {crafts && <Hexagon className="hex" />}
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="nav-actions">
            <button
              className="icon-btn glass"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
            <a href="/resume/" onClick={goResume} className="btn btn-primary btn-sm resume-btn">
              Resume
            </a>
            <button
              className="icon-btn glass menu-btn"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
        {ITEMS.map((item, i) => (
          <a key={item.label} href={hrefFor(item)} onClick={(e) => go(e, item)} className={item.route === 'crafts' ? 'is-crafts' : undefined}>
            <span className="num">0{i + 1}</span>
            {item.label}
          </a>
        ))}
        <a href="/resume/" onClick={goResume} className="btn btn-primary">
          View resume <ArrowRight />
        </a>
      </div>
    </>
  );
}

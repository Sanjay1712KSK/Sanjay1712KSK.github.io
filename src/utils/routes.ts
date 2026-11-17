export type Route = 'home' | 'resume' | 'crafts' | 'inspirations';

export type Navigate = (to: Route, sectionId?: string) => void;

export const PATHS: Record<Route, string> = {
  home: '/',
  resume: '/resume/',
  crafts: '/ayan-crafts/',
  inspirations: '/inspirations/',
};

export const routeFromLocation = (): Route => {
  const { pathname, hash } = window.location;
  if (/\/resume/i.test(pathname) || /^#\/?resume/i.test(hash)) return 'resume';
  if (/\/ayan-crafts/i.test(pathname) || /^#\/?ayan-crafts/i.test(hash)) return 'crafts';
  if (/\/inspirations/i.test(pathname) || /^#\/?inspirations/i.test(hash)) return 'inspirations';
  return 'home';
};

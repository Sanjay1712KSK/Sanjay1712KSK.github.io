import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { CraftsTeaser } from '../sections/CraftsTeaser';
import { Work } from '../sections/Work';
import { Experience } from '../sections/Experience';
import { Skills } from '../sections/Skills';
import { Recognition } from '../sections/Recognition';
import { Writing } from '../sections/Writing';
import { Contact } from '../sections/Contact';
import type { Navigate } from '../utils/routes';

/** The homepage reads top-to-bottom as a story: who, what I'm building, what I've shipped, where, how, proof, writing, contact. */
export function HomePage({ onNavigate }: { onNavigate: Navigate }) {
  const toResume = () => onNavigate('resume');
  const toCrafts = () => onNavigate('crafts');
  return (
    <>
      <Hero onResume={toResume} onCrafts={toCrafts} />
      <About />
      <CraftsTeaser onOpen={toCrafts} />
      <Work />
      <Experience />
      <Skills />
      <Recognition />
      <Writing />
      <Contact onResume={toResume} />
    </>
  );
}

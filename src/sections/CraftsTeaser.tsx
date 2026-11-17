import type { MouseEvent } from 'react';
import { AYAN_CRAFTS } from '../data/portfolioData';
import { SectionHead } from '../components/SectionHead';
import { ArrowRight, Discord } from '../components/Icons';
import { delay } from '../utils/delay';

/** Full-bleed dark band that fades in from and back out to the page, so it flows rather than boxes. */
export function CraftsTeaser({ onOpen }: { onOpen: () => void }) {
  const open = (e: MouseEvent) => {
    e.preventDefault();
    onOpen();
  };

  const stats = [
    { n: String(AYAN_CRAFTS.teamSize), l: 'Team members' },
    { n: String(AYAN_CRAFTS.released.length), l: 'Open-source releases' },
    { n: `${AYAN_CRAFTS.inDevelopment.length}+`, l: 'Projects in development' },
    { n: 'You?', l: "We're looking for contributors" },
  ];

  return (
    <section className="crafts-band" id="crafts">
      <div className="container">
        <SectionHead
          label="Ayan Crafts"
          title={
            <>
              I started a studio to <span className="serif">build in the open.</span>
            </>
          }
          lede="Ayan Crafts is where my ideas become real, installable software, and where I'm building a community of people who care about doing it properly."
        />

        <div className="crafts-inner">
          <div data-reveal>
            <p className="lead">
              We&apos;re a team of {AYAN_CRAFTS.teamSize} shipping GPU-accelerated tools and Linux system software. Two projects
              are out in the open, many more are in the workshop, and we need more hands to grow.
            </p>
            <div className="actions">
              <a href="/ayan-crafts/" onClick={open} className="btn btn-inv">
                Explore Ayan Crafts <ArrowRight />
              </a>
              <a href={AYAN_CRAFTS.discord} target="_blank" rel="noopener noreferrer" className="btn btn-inv-ghost">
                <Discord /> Join the Discord
              </a>
            </div>
          </div>
          <div className="crafts-stats">
            {stats.map((s, i) => (
              <div key={s.l} data-reveal data-tilt="7" style={delay(i * 70)}>
                <strong>{s.n}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

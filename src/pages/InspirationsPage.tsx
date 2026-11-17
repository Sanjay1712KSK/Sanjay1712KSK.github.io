import type { CSSProperties, MouseEvent } from 'react';
import { INSPIRATIONS } from '../data/portfolioData';
import { ArrowRight } from '../components/Icons';
import { delay } from '../utils/delay';
import type { Navigate } from '../utils/routes';

/** Words that get the gradient in the scroll-lit statement. */
const HIGHLIGHT = new Set(['barriers.', 'invitations.']);

export function InspirationsPage({ onNavigate }: { onNavigate: Navigate }) {
  const { intro, groups, statement, closing } = INSPIRATIONS;
  const words = statement.split(' ');

  const back = (e: MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <div className="ap insp">
      {/* Hero */}
      <section className="ap-hero insp-hero" data-scroll="exit">
        <a href="/" className="back" onClick={back}>
          <ArrowRight /> Sanjay&apos;s portfolio
        </a>
        <div className="container ap-center ap-hero-inner">
          <p className="ap-eyebrow" data-reveal>
            Creative influences
          </p>
          <h1 className="ap-h1" data-reveal style={delay(80)}>
            Built on <span className="grad">inspiration.</span>
          </h1>
          <p className="ap-sub" data-reveal style={delay(160)}>
            {intro}
          </p>
        </div>
        <div className="insp-hero-strip" aria-hidden="true">
          {groups
            .flatMap((g) => g.items)
            .map((it, i) => (
              <img key={it.poster} src={it.poster} alt="" style={{ '--k': i } as CSSProperties} loading="eager" />
            ))}
        </div>
      </section>

      {/* Groups */}
      {groups.map((g, gi) => (
        <section className={`insp-group${gi === 1 ? ' ap-dark' : ''}`} key={g.title}>
          <div className="container">
            <div className="insp-head">
              <span className="insp-index" data-reveal>
                0{gi + 1}
              </span>
              <div>
                <h2 className="ap-h3" data-reveal style={delay(60)}>
                  {g.title}
                </h2>
                <p className="ap-sub" data-reveal style={delay(120)}>
                  {g.description}
                </p>
              </div>
            </div>
            <div className="insp-grid" style={{ '--cols': g.items.length } as CSSProperties}>
              {g.items.map((it, i) => (
                <figure className="insp-card" key={it.title} data-reveal data-tilt="7" style={delay(i * 90)}>
                  <img src={it.poster} alt={`${it.title} poster`} loading="lazy" decoding="async" />
                  <figcaption>
                    <strong>{it.title}</strong>
                    <span>
                      {g.title}
                      {it.year ? ` · ${it.year}` : ''}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Statement, lit word by word */}
      <section className="ap-statement insp-statement" data-scroll="sticky" aria-label={statement}>
        <div className="ap-statement-sticky">
          <div className="container ap-center">
            <p style={{ margin: '0 auto' }}>
              {words.map((w, i) => (
                <span key={i} className={`w${HIGHLIGHT.has(w) ? ' hl' : ''}`} style={{ '--i': i, '--n': words.length } as CSSProperties}>
                  {w}{' '}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Closing note */}
      <section className="insp-closing ap-dark">
        <div className="container ap-center">
          <h2 className="ap-h2" data-reveal>
            {closing[0].split('. ')[0]}.
            <br />
            <span className="grad">{closing[0].split('. ')[1]}</span>
          </h2>
          {closing.slice(1).map((c, i) => (
            <p key={i} data-reveal style={delay(100 + i * 80)}>
              {c}
            </p>
          ))}
          <div className="insp-wave" aria-hidden="true">
            {Array.from({ length: 28 }).map((_, i) => (
              <i key={i} style={{ '--k': i } as CSSProperties} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

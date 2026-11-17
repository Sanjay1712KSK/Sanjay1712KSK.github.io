import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHead } from '../components/SectionHead';
import { ProjectGrid } from '../components/ProjectGrid';
import { ArrowUpRight, GitHub } from '../components/Icons';
import { delay } from '../utils/delay';

/** GitHub's generated social card for a repo, used when there's no live-site screenshot. */
const githubCard = (repoUrl: string) => repoUrl.replace('https://github.com/', 'https://opengraph.githubassets.com/1/');

export function Work() {
  const { projects, experiments, profile } = PORTFOLIO_DATA;

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead
          label="Selected work"
          title={
            <>
              Things I&apos;ve <span className="serif">shipped.</span>
            </>
          }
          lede="Released desktop apps, a Linux system running in a real store, and award-winning hackathon builds. Open any project for the full story: the problem, what I built, and how it works."
        />

        <ProjectGrid projects={projects} featuredCount={2} />

        <div className="experiments">
          <div className="experiments-head" data-reveal>
            <h3>More builds &amp; experiments</h3>
            <a className="link-arrow" href={profile.github} target="_blank" rel="noopener noreferrer">
              Everything on GitHub <ArrowUpRight />
            </a>
          </div>
          <div className="exp-grid">
            {experiments.map((e, i) => (
              <article className="exp-card" key={e.title} data-reveal data-tilt="5" style={delay((i % 3) * 70)}>
                <a className="exp-img" href={e.demo ?? e.repo} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
                  <img
                    src={e.image ?? githubCard(e.repo)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={e.image ? undefined : { objectPosition: 'center' }}
                  />
                  <span className="tag">{e.demo ? 'Live demo' : 'GitHub'}</span>
                </a>
                <div className="exp-body">
                  <h4>{e.title}</h4>
                  {e.note && <span className="note">{e.note}</span>}
                  <p>{e.summary}</p>
                  <div className="chips">
                    {e.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="exp-links">
                    <a className="icon-btn" href={e.repo} target="_blank" rel="noopener noreferrer" aria-label={`${e.title} on GitHub`}>
                      <GitHub />
                    </a>
                    {e.demo && (
                      <a className="btn btn-ghost btn-sm" href={e.demo} target="_blank" rel="noopener noreferrer">
                        Open demo <ArrowUpRight />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

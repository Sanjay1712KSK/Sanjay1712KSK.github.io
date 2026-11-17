import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHead } from '../components/SectionHead';
import { delay } from '../utils/delay';
import { ArrowUpRight, Medium } from '../components/Icons';

export function Writing() {
  const { writing, profile } = PORTFOLIO_DATA;

  return (
    <section className="section" id="writing">
      <div className="container">
        <SectionHead
          label="Writing"
          title={
            <>
              Stories from <span className="serif">the build.</span>
            </>
          }
          lede="I write about what I build, including the parts that broke along the way. Published in the DevelopersGlobal publication on Medium."
        />
        <div className="stories">
          {writing.map((s, i) => (
            <a key={s.url} className="story" href={s.url} target="_blank" rel="noopener noreferrer" data-reveal data-tilt="4" style={delay(i * 80)}>
              <div className="story-cover">
                <img src={s.cover} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
              </div>
              <div className="story-body">
                <span className="story-meta">
                  {s.publication} · {s.date}
                </span>
                <h3>{s.title}</h3>
                <p>{s.subtitle}</p>
                <span className="project-open">
                  Read on Medium <ArrowUpRight />
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="section-more" data-reveal>
          <a className="btn btn-ghost" href={profile.medium} target="_blank" rel="noopener noreferrer">
            <Medium /> All stories on Medium
          </a>
        </div>
      </div>
    </section>
  );
}

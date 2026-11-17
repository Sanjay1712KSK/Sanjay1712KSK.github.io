import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHead } from '../components/SectionHead';
import { delay } from '../utils/delay';

export function About() {
  const { story, education, profile } = PORTFOLIO_DATA;

  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          label="About"
          title={
            <>
              Open-source power, <span className="serif">product-grade</span> polish.
            </>
          }
        />
        <div className="section-body about-grid">
          <div className="about-text">
            {story.about.map((p, i) => (
              <p key={i} data-reveal style={delay(i * 80)}>
                {p}
              </p>
            ))}
          </div>

          <aside className="glance" aria-label="At a glance" data-reveal style={delay(120)}>
            <dl>
              <div className="glance-row">
                <dt>Now</dt>
                <dd>
                  Founder, Ayan Crafts
                  <small>Undergraduate Researcher, SRM UROP</small>
                </dd>
              </div>
              <div className="glance-row">
                <dt>Education</dt>
                <dd>
                  B.Tech CSE (AI &amp; ML)
                  <small>
                    SRMIST, {education.period} · CGPA {education.cgpa}
                  </small>
                </dd>
              </div>
              <div className="glance-row">
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div className="glance-row">
                <dt>Focus</dt>
                <dd>
                  <div className="chips">
                    {story.focusAreas.map((f) => (
                      <span className="chip" key={f}>
                        {f}
                      </span>
                    ))}
                  </div>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

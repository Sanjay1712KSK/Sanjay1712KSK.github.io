import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHead } from '../components/SectionHead';
import { delay } from '../utils/delay';

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead
          label="Experience"
          title={
            <>
              Where I&apos;ve <span className="serif">worked.</span>
            </>
          }
          lede="Building a studio, doing research, and keeping real production systems running for a business that depended on them."
        />

        <div className="section-body timeline">
          {experience.map((job, i) => {
            const isCurrent = /present/i.test(job.period);
            return (
              <article className="job" key={job.role} data-reveal style={delay(i * 60)}>
                <div className="job-when">
                  {job.period}
                  <br />
                  {isCurrent && <span className="now">Current</span>}
                </div>
                <div>
                  <h3 className="job-role">{job.role}</h3>
                  <p className="job-org">
                    {job.organization} · {job.location}
                  </p>
                  <p className="job-summary">{job.summary}</p>
                  {job.contributions.length > 0 && (
                    <ul className="job-points">
                      {job.contributions.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  )}
                  <div className="chips">
                    {job.technologies.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

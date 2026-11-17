import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHead } from '../components/SectionHead';
import { delay } from '../utils/delay';

/** "3rd Place Winner" -> { n: "3", suffix: "rd", rest: "Place" } */
const place = (award: string) => {
  const m = award.match(/(\d+)(st|nd|rd|th)/i);
  return m ? { n: m[1], suffix: m[2] } : { n: '★', suffix: '' };
};

export function Recognition() {
  const { achievements, certifications, education } = PORTFOLIO_DATA;

  return (
    <section className="section" id="recognition">
      <div className="container">
        <SectionHead
          label="Recognition"
          title={
            <>
              Awards, education &amp; <span className="serif">credentials.</span>
            </>
          }
        />

        <div className="recog">
          <div className="recog-card edu" data-reveal data-tilt="5">
            <span className="big">{education.cgpa}</span>
            <h3>CGPA · B.Tech CSE (AI &amp; ML)</h3>
            <p>
              {education.institution}, {education.campus}
            </p>
            <span className="when">{education.period}</span>
          </div>
          {achievements.map((a, i) => {
            const { n, suffix } = place(a.award);
            return (
              <div className="recog-card" key={a.title} data-reveal data-tilt="5" style={delay((i + 1) * 80)}>
                <span className="big">
                  {n}
                  <sup>{suffix}</sup>
                </span>
                <h3>{a.title}</h3>
                <p>
                  {a.award} · {a.organization}
                </p>
                <span className="when">
                  {a.date} · {a.location}
                </span>
              </div>
            );
          })}
        </div>

        <div className="certs" data-reveal>
          <div className="certs-head">
            <span className="eyebrow">Certifications</span>
            <span className="eyebrow">{certifications.length}</span>
          </div>
          {certifications.map((c) => (
            <div className="cert" key={c.title}>
              <h4>{c.title}</h4>
              <span className="issuer">{c.issuer}</span>
              <span className="date">{c.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

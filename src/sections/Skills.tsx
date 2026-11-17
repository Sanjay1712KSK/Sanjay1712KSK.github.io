import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHead } from '../components/SectionHead';
import { delay } from '../utils/delay';

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead
          label="Skills"
          title={
            <>
              What I <span className="serif">work with.</span>
            </>
          }
        />
        <div className="skills">
          {PORTFOLIO_DATA.skills.map((g, i) => (
            <div className="skill-group" key={g.category} data-reveal data-tilt="3" style={delay((i % 2) * 80)}>
              <h3>{g.category}</h3>
              <p>{g.description}</p>
              <div className="chips">
                {g.skills.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import type { ProjectItem } from '../data/portfolioData';
import { ProjectArt } from './ProjectArt';
import { Dialog } from './Dialog';
import { ArrowRight, ArrowUpRight, GitHub, Hexagon } from './Icons';
import { delay } from '../utils/delay';

const isDone = (status: string) => /released|deployed|completed/i.test(status);

function ProjectCard({ p, featured, index, onOpen }: { p: ProjectItem; featured: boolean; index: number; onOpen: () => void }) {
  const isRepo = (url: string) => /github\.com/i.test(url) && !/releases|wiki/.test(url);
  const primary = p.links.find((l) => l.primary && !isRepo(l.url));
  const repo = p.links.find((l) => isRepo(l.url));
  const headline = p.metrics?.[0];
  const max = featured ? 6 : 4;

  return (
    <article className={`project${featured ? ' is-featured' : ''}`} data-reveal data-tilt="4" style={delay((index % 3) * 80)}>
      <button className="project-art" onClick={onOpen} aria-label={`Open case study: ${p.title}`} style={{ display: 'block', width: '100%' }}>
        <span className={`status-pill${isDone(p.status) ? ' is-done' : ''}`} style={{ zIndex: 1 }}>
          {p.status}
        </span>
        {p.image ? (
          <span className="shot-frame">
            <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" decoding="async" />
          </span>
        ) : (
          <ProjectArt id={p.id} />
        )}
      </button>
      <div className="project-body">
        <span className="project-cat">
          {p.org && (
            <span className="org-badge" style={{ marginRight: 8 }}>
              <Hexagon /> {p.org}
            </span>
          )}
          {p.category}
        </span>
        <h3 className="project-title">{p.title}</h3>
        <p className="project-tagline">{p.tagline}</p>
        {headline && (
          <p className="project-metric">
            {headline.label} <strong>{headline.value}</strong>
          </p>
        )}
        <div className="chips">
          {p.techStack.slice(0, max).map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
          {p.techStack.length > max && <span className="chip">+{p.techStack.length - max}</span>}
        </div>
        <div className="project-foot">
          <button className="project-open" onClick={onOpen}>
            Read case study <ArrowRight />
          </button>
          <div className="project-links">
            {repo && (
              <a className="icon-btn" href={repo.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`}>
                <GitHub />
              </a>
            )}
            {primary && (
              <a className="btn btn-ghost btn-sm" href={primary.url} target="_blank" rel="noopener noreferrer">
                {primary.label.replace(/^Live /, '')} <ArrowUpRight />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/** Project cards plus the case-study dialog they open. The first `featuredCount` cards are wider. */
export function ProjectGrid({ projects, featuredCount = 2 }: { projects: ProjectItem[]; featuredCount?: number }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [lastId, setLastId] = useState<string>(projects[0].id);
  const active = projects.find((p) => p.id === (openId ?? lastId)) ?? projects[0];

  const open = (id: string) => {
    setLastId(id);
    setOpenId(id);
  };

  return (
    <>
      <div className="projects">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} featured={i < featuredCount} index={i} onOpen={() => open(p.id)} />
        ))}
      </div>

      <Dialog
        open={openId !== null}
        onClose={() => setOpenId(null)}
        eyebrow={active.org ? `${active.org} · ${active.category}` : active.category}
        title={active.title}
      >
        <div className="dialog-section">
          <p style={{ fontSize: 18, color: 'var(--ink)' }}>{active.tagline}</p>
        </div>
        {active.metrics && (
          <div className="dialog-section metric-row">
            {active.metrics.map((m) => (
              <div key={m.label}>
                <span>{m.label}</span>
                <strong>{m.value}</strong>
              </div>
            ))}
          </div>
        )}
        <div className="dialog-section">
          <h4>The problem</h4>
          <p>{active.problem}</p>
        </div>
        <div className="dialog-section">
          <h4>What I built</h4>
          <p>{active.technicalContribution}</p>
        </div>
        <div className="dialog-section">
          <h4>How it works</h4>
          <ul className="dialog-list">
            {active.architectureDetails.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="dialog-section">
          <h4>Built with</h4>
          <div className="chips">
            {active.techStack.map((t) => (
              <span className="chip" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="dialog-actions">
          {active.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className={`btn ${l.primary ? 'btn-primary' : 'btn-ghost'}`}>
              {l.label} <ArrowUpRight />
            </a>
          ))}
        </div>
      </Dialog>
    </>
  );
}

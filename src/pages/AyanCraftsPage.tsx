import type { CSSProperties, MouseEvent } from 'react';
import { AYAN_CRAFTS, PORTFOLIO_DATA } from '../data/portfolioData';
import { ProjectArt } from '../components/ProjectArt';
import { ArrowRight, ArrowUpRight, Discord, GitHub, Hexagon, Reddit } from '../components/Icons';
import { delay } from '../utils/delay';
import type { Navigate } from '../utils/routes';

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m9 6 6 6-6 6" />
  </svg>
);

/** Words that get the gradient treatment in the scroll-lit statement. */
const HIGHLIGHT = new Set(['open-source', 'well-crafted', 'commercial', 'product,']);

export function AyanCraftsPage({ onNavigate }: { onNavigate: Navigate }) {
  const ac = AYAN_CRAFTS;
  const upscaler = PORTFOLIO_DATA.projects.find((p) => p.id === 'ai-upscaler')!;
  const frameGen = PORTFOLIO_DATA.projects.find((p) => p.id === 'frame-generator')!;
  const stories = PORTFOLIO_DATA.writing.filter((s) => ac.stories.includes(s.url));
  const words = ac.philosophy.split(' ');
  const t = ac.tribute;

  const back = (e: MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <div className="ap">
      {/* ---------- Hero ---------- */}
      <section className="ap-hero" data-scroll="exit">
        <a href="/" className="back" onClick={back}>
          <ArrowRight /> Sanjay&apos;s portfolio
        </a>
        <div className="container ap-center ap-hero-inner">
          <div data-reveal>
            <Hexagon className="ap-hex" />
          </div>
          <p className="ap-eyebrow" data-reveal style={delay(60)}>
            An open-source studio · Est. {ac.founded}
          </p>
          <h1 className="ap-h1" data-reveal style={delay(120)}>
            Ayan <span className="grad">Crafts.</span>
          </h1>
          <p className="ap-sub" data-reveal style={delay(200)}>
            Software, crafted to endure. Built by a small team, in the open.
          </p>
          <div className="ap-links" data-reveal style={delay(280)}>
            <a className="ap-pill" href={ac.discord} target="_blank" rel="noopener noreferrer">
              <Discord /> Join the Discord
            </a>
            <a className="ap-link" href={ac.github} target="_blank" rel="noopener noreferrer">
              Explore on GitHub <Chevron />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Statement, lit word by word as you scroll ---------- */}
      <section className="ap-statement" data-scroll="sticky" aria-label="Our philosophy">
        <div className="ap-statement-sticky">
          <div className="container ap-center">
            <p style={{ margin: '0 auto' }}>
              {words.map((w, i) => (
                <span key={i} className={`w${HIGHLIGHT.has(w) ? ' hl' : ''}`} style={{ '--i': i, '--n': words.length } as CSSProperties}>
                  {w}{' '}
                </span>
              ))}
              <cite>The idea behind every Ayan Crafts project</cite>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Product: AI Upscaler Studio ---------- */}
      <section className="ap-product ap-dark" id="open-source">
        <div className="container ap-center">
          <p className="ap-eyebrow" data-reveal>
            Now available · v1.0.0
          </p>
          <h2 className="ap-h2" data-reveal style={delay(60)}>
            AI Upscaler <span className="grad">Studio.</span>
          </h2>
          <p className="ap-sub" data-reveal style={delay(120)}>
            Old videos, reborn. Sharper frames, smoother motion, all on your own NVIDIA GPU.
          </p>
          <div className="ap-links" data-reveal style={delay(180)}>
            <a className="ap-pill" href={upscaler.links[0].url} target="_blank" rel="noopener noreferrer">
              Download for Windows
            </a>
            <a className="ap-link" href={upscaler.links[1].url} target="_blank" rel="noopener noreferrer">
              View source <Chevron />
            </a>
            <a className="ap-link" href={upscaler.links[2].url} target="_blank" rel="noopener noreferrer">
              Read the story <Chevron />
            </a>
          </div>
        </div>

        <div className="ap-device-wrap" data-scroll="through">
          <div className="ap-device">
            <img src="/media/upscaler-dashboard.png" alt="AI Upscaler Studio dashboard showing GPU, VRAM and NVENC encoder diagnostics" loading="lazy" />
          </div>
        </div>

        <div className="container">
          <div className="ap-specs">
            {[
              { s: '1080p30 → 1440p60', l: 'Real demo result: about 1.78× the pixels per frame at twice the frame rate.' },
              { s: 'RIFE v4.25', l: 'AI frame interpolation that generates genuinely new in-between frames.' },
              { s: 'Real-ESRGAN', l: 'x2plus and x4plus super-resolution with FP16 CUDA inference.' },
              { s: 'Zero setup', l: 'Python, PyTorch, CUDA and FFmpeg are all bundled. Just install and go.' },
            ].map((x, i) => (
              <div className="ap-spec" key={x.s} data-reveal style={delay(i * 80)}>
                <strong>{x.s}</strong>
                <span>{x.l}</span>
              </div>
            ))}
          </div>
          <div className="ap-gallery" style={{ paddingBottom: 160, marginTop: -80 }}>
            <figure data-reveal data-tilt="3">
              <img src="/media/upscaler-process.png" alt="Process Video screen with super-resolution and interpolation settings" loading="lazy" />
              <figcaption>Process Video: pick your models, scale and frame rate.</figcaption>
            </figure>
            <figure data-reveal data-tilt="3" style={delay(80)}>
              <img src="/media/upscaler-dashboard.png" alt="Dashboard with live hardware diagnostics" loading="lazy" />
              <figcaption>Dashboard: live GPU, VRAM, temperature and NVENC readiness.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- Frame Generator ---------- */}
      <section className="ap-section">
        <div className="container ap-split">
          <div>
            <p className="ap-eyebrow" data-reveal>
              Frame Generator · v2.0.0
            </p>
            <div className="ap-big grad" data-reveal style={delay(60)}>
              1,770+
              <small>frames per second, decoded on the GPU.</small>
            </div>
            <p data-reveal style={{ marginTop: 28, ...delay(120) }}>
              {frameGen.tagline} About 35× realtime, with a zero-occlusion annotation canvas and SAM 2.1 doing the tedious
              tracking for you.
            </p>
            <div className="chips" data-reveal style={delay(160)}>
              {frameGen.techStack.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <div className="ap-links" data-reveal style={delay(200)}>
              <a className="ap-link" href={frameGen.links[0].url} target="_blank" rel="noopener noreferrer">
                View on GitHub <Chevron />
              </a>
            </div>
          </div>
          <div className="ap-art" data-reveal data-tilt="6" style={delay(120)}>
            <ProjectArt id="frame-generator" />
          </div>
        </div>
      </section>

      {/* ---------- The name ---------- */}
      <section className="ap-section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="ap-head" data-reveal>
            <p className="ap-eyebrow">The name</p>
            <h2 className="ap-h2" style={{ marginTop: 12 }}>
              Why <span className="grad">Ayan.</span>
            </h2>
          </div>
          <div className="ap-tiles">
            {ac.nameMeaning.map((m, i) =>
              m.image ? (
                <div className="ap-tile is-wide has-image" key={m.title} data-reveal data-tilt="3" style={delay(i * 80)}>
                  <img src={m.image} alt="Suriya in Ayan, from the 17 Years of Ayan anniversary artwork" loading="lazy" />
                  <div className="tile-copy">
                    <span className="tile-tamil">{m.glyph}</span>
                    <h3>{m.title}</h3>
                    <p>{m.body}</p>
                  </div>
                </div>
              ) : (
                <div className="ap-tile" key={m.title} data-reveal data-tilt="4" style={delay(i * 80)}>
                  <span className="glyph">{m.glyph}</span>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              ),
            )}
            {ac.pillars.map((p, i) => (
              <div className="ap-tile" key={p.title} data-reveal data-tilt="4" style={delay(i * 80)}>
                <span className="glyph">{p.glyph}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Tribute to the film and to K. V. Anand ---------- */}
      <section className="ap-tribute ap-dark" aria-labelledby="tribute-title">
        <div className="container">
          <div className="ap-tribute-grid">
            <figure className="ap-poster" data-scroll="through" data-reveal style={{ margin: 0 }}>
              <img src="/media/ayan-17-poster.png" alt="17 Years of Ayan anniversary poster featuring Suriya" loading="lazy" />
              <figcaption>17 years of Ayan (2009 – 2026)</figcaption>
            </figure>
            <div>
              <p className="ap-eyebrow" data-reveal>
                The film behind the name
              </p>
              <h2 className="ap-h3" id="tribute-title" data-reveal style={delay(60)}>
                {t.title}
              </h2>
              {t.body.map((b, i) => (
                <p className="body" key={i} data-reveal style={delay(120 + i * 60)}>
                  {b}
                </p>
              ))}
              <div className="ap-facts" data-reveal style={delay(240)}>
                {t.facts.map((f) => (
                  <div key={f.n}>
                    <strong>{f.n}</strong>
                    <span>{f.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="memorial" data-reveal>
            <div className="flame" aria-hidden="true" />
            <span className="label">In loving memory</span>
            <h3>K. V. Anand</h3>
            <p className="years">30 October 1966 – 30 April 2021</p>
            {t.memorial.map((m, i) => (
              <p key={i}>{m}</p>
            ))}
            <p className="sign">I miss you, sir. — Sanjay</p>
          </div>
        </div>
      </section>

      {/* ---------- In the workshop ---------- */}
      <section className="ap-section ap-dark" style={{ paddingTop: 40 }} id="workshop">
        <div className="container">
          <div className="ap-head" data-reveal>
            <p className="ap-eyebrow">In the workshop</p>
            <h2 className="ap-h2" style={{ marginTop: 12 }}>
              What&apos;s <span className="grad">next.</span>
            </h2>
            <p className="ap-sub">Many of our projects are still being built, benchmarked and stress-tested. This is where new hands matter most.</p>
          </div>
          <div className="ap-tiles">
            {ac.inDevelopment.map((p, i) => (
              <div className="ap-tile is-short" key={p.title} data-reveal data-tilt="4" style={delay((i % 3) * 80)}>
                <span className="badge">In development</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
            <div className="ap-tile is-short dashed is-wide" data-reveal data-tilt="4">
              <span className="badge">Open</span>
              <h3>Your idea here.</h3>
              <p>Have something you want to build properly? Pitch it on Discord or r/AyanCrafts and build it with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stories ---------- */}
      <section className="ap-section">
        <div className="container">
          <div className="ap-head" data-reveal>
            <p className="ap-eyebrow">The story so far</p>
            <h2 className="ap-h2" style={{ marginTop: 12 }}>
              Read the <span className="grad">journey.</span>
            </h2>
          </div>
          <div className="stories" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {stories.map((s, i) => (
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
        </div>
      </section>

      {/* ---------- Join ---------- */}
      <section className="ap-join" id="join">
        <div className="container">
          <p className="ap-eyebrow" data-reveal>
            Join us
          </p>
          <h2 className="ap-h1" data-reveal style={{ marginTop: 14, ...delay(60) }}>
            We&apos;re {ac.teamSize}.
            <br />
            <span className="grad">Help us grow.</span>
          </h2>
          <p className="ap-sub" data-reveal style={delay(120)}>
            Ambitious students and independent developers who care about clean, scalable code: there&apos;s a seat at the bench
            for you.
          </p>
          <div className="chips" data-reveal style={delay(160)}>
            {ac.lookingFor.map((l) => (
              <span className="chip" key={l}>
                {l}
              </span>
            ))}
          </div>
          <div className="steps">
            {[
              { t: 'Say hello', b: 'Join the Discord studio and tell us what you like building and what you want to learn.' },
              { t: 'Pick something', b: 'Try a release, open an issue, or pick up something from the workshop.' },
              { t: 'Ship it', b: 'Share progress on r/AyanCrafts, get reviews from the team and ship it under Ayan Crafts.' },
            ].map((s, i) => (
              <div className="ac-card" key={s.t} data-reveal data-tilt="5" style={delay(i * 80)}>
                <span className="n">Step 0{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
          <div className="ap-links" data-reveal>
            <a className="ap-pill" href={ac.discord} target="_blank" rel="noopener noreferrer">
              <Discord /> Join the Discord
            </a>
            <a className="ap-link" href={ac.github} target="_blank" rel="noopener noreferrer">
              <GitHub style={{ width: 16, height: 16 }} /> GitHub <Chevron />
            </a>
            <a className="ap-link" href={ac.reddit} target="_blank" rel="noopener noreferrer">
              <Reddit style={{ width: 16, height: 16 }} /> r/AyanCrafts <Chevron />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useMemo, type MouseEvent } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, ArrowRight, GitHub, LinkedIn, Mail, Medium } from '../components/Icons';
import { delay } from '../utils/delay';

/* ---------- Before / after upscaling illustration ---------- */

const TOP = 44; // below the card header
const BOTTOM = 378; // above the card footer
const W = 480;
const CELL = 22; // "low resolution" pixel size

const SUN = { x: 356, y: 128, r: 34 };
const BACK = [
  [0, 250],
  [70, 200],
  [130, 232],
  [210, 160],
  [290, 222],
  [360, 186],
  [430, 226],
  [480, 204],
];
const FRONT = [
  [0, 300],
  [90, 252],
  [160, 286],
  [250, 236],
  [330, 290],
  [410, 262],
  [480, 284],
];
const GROUND = 336;

const ridgeY = (pts: number[][], x: number) => {
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[i + 1];
    if (x >= x1 && x <= x2) return y1 + ((y2 - y1) * (x - x1)) / (x2 - x1);
  }
  return pts[pts.length - 1][1];
};

const toPolygon = (pts: number[][]) => `${pts.map((p) => p.join(',')).join(' ')} ${W},${BOTTOM} 0,${BOTTOM}`;

/** Which layer a point falls in, front to back. */
const layerAt = (x: number, y: number) => {
  if (y >= GROUND) return 'c-ground';
  if (y >= ridgeY(FRONT, x)) return 'c-front';
  if (y >= ridgeY(BACK, x)) return 'c-back';
  if (Math.hypot(x - SUN.x, y - SUN.y) <= SUN.r) return 'c-sun';
  return y < (TOP + BOTTOM) / 2 - 30 ? 'c-sky' : 'c-sky2';
};

function UpscaleVisual() {
  // The same scene, sampled into big blocks: the "before" frame.
  const mosaic = useMemo(() => {
    const cells: { x: number; y: number; c: string }[] = [];
    for (let y = TOP; y < BOTTOM; y += CELL) {
      for (let x = 0; x < W; x += CELL) {
        cells.push({ x, y, c: layerAt(x + CELL / 2, y + CELL / 2) });
      }
    }
    return cells;
  }, []);

  return (
    <div
      className="hero-visual"
      role="img"
      aria-label="Illustration: a low-resolution 1080p30 frame being upscaled to a sharp 1440p60 frame by AI Upscaler Studio."
    >
      <div className="hero-visual-head">
        <span>AI Upscaler Studio · v1.0.0</span>
        <span className="live">upscaling</span>
      </div>
      <svg className="upscale" viewBox="0 0 480 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className="sky-a" />
            <stop offset="1" className="sky-b" />
          </linearGradient>
          <clipPath id="before">
            <rect x="0" y={TOP} width="200" height={BOTTOM - TOP}>
              <animate
                attributeName="width"
                values="150;330;150"
                dur="7s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              />
            </rect>
          </clipPath>
        </defs>

        {/* After: crisp vector scene */}
        <rect x="0" y={TOP} width={W} height={BOTTOM - TOP} fill="url(#sky)" />
        <circle className="c-sun" cx={SUN.x} cy={SUN.y} r={SUN.r} />
        <polygon className="c-back" points={toPolygon(BACK)} />
        <polygon className="c-front" points={toPolygon(FRONT)} />
        <rect className="c-ground" x="0" y={GROUND} width={W} height={BOTTOM - GROUND} />

        {/* Before: blocky low-res version, revealed up to the moving divider */}
        <g clipPath="url(#before)" shapeRendering="crispEdges">
          {mosaic.map((m) => (
            <rect key={`${m.x}-${m.y}`} className={m.c} x={m.x} y={m.y} width={CELL} height={CELL} />
          ))}
        </g>

        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="150 0;330 0;150 0"
            dur="7s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          />
          <line className="divider" x1="0" x2="0" y1={TOP} y2={BOTTOM} />
          <circle className="knob" cx="0" cy="210" r="15" />
          <path className="knob-arrows" d="M-4 205 l-5 5 5 5 M4 205 l5 5 -5 5" />
        </g>

        <g className="tag" transform={`translate(14 ${TOP + 14})`}>
          <rect width="104" height="24" rx="12" />
          <text x="52" y="16" textAnchor="middle">
            1080p · 30 fps
          </text>
        </g>
        <g className="tag" transform={`translate(${W - 118} ${TOP + 14})`}>
          <rect width="104" height="24" rx="12" />
          <text x="52" y="16" textAnchor="middle">
            1440p · 60 fps
          </text>
        </g>
      </svg>
      <div className="hero-visual-foot">
        <div>
          <span>Super-resolution</span>
          <strong>Real-ESRGAN</strong>
        </div>
        <div>
          <span>Interpolation</span>
          <strong>RIFE v4.25</strong>
        </div>
        <div>
          <span>Runs on</span>
          <strong>CUDA + NVENC</strong>
        </div>
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */

export function Hero({ onResume, onCrafts }: { onResume: () => void; onCrafts: () => void }) {
  const { profile, education, achievements } = PORTFOLIO_DATA;

  const facts = [
    { label: 'Building', value: 'Ayan Crafts, an open-source studio' },
    { label: 'Studying', value: `B.Tech CSE (AI & ML) · CGPA ${education.cgpa}` },
    { label: 'Recognition', value: `${achievements.length}× hackathon podium finishes` },
    { label: 'Based in', value: profile.location },
  ];

  const go = (fn: () => void) => (e: MouseEvent) => {
    e.preventDefault();
    fn();
  };

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          <div>
            <a href="/ayan-crafts/" onClick={go(onCrafts)} className="status" data-reveal>
              <span className="status-dot" aria-hidden="true" />
              Founder, Ayan Crafts · we&apos;re looking for contributors
            </a>
            <p className="hero-hello" data-reveal style={delay(60)}>
              Hi, I&apos;m {profile.name}.
            </p>
            <h1 className="hero-title" data-reveal style={delay(120)}>
              I build software that feels <span className="serif accent">finished.</span>
            </h1>
            <p className="hero-sub" data-reveal style={delay(200)}>
              AI &amp; systems engineer. I turn open-source power into GPU-fast video tools, private on-device AI and
              locked-down Linux systems that anyone can install and use.
            </p>
            <div className="hero-cta" data-reveal style={delay(280)}>
              <a href="#work" className="btn btn-primary">
                See my work <ArrowDown />
              </a>
              <a href="/resume/" onClick={go(onResume)} className="btn btn-ghost">
                View resume <ArrowRight />
              </a>
            </div>
            <div className="hero-social" data-reveal style={delay(340)}>
              <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHub />
              </a>
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedIn />
              </a>
              <a className="icon-btn" href={profile.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <Medium />
              </a>
              <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>

          <div data-reveal style={delay(200)}>
            <UpscaleVisual />
          </div>
        </div>

        <dl className="facts" data-reveal style={delay(400)}>
          {facts.map((f) => (
            <div className="fact" key={f.label}>
              <dt className="fact-label">{f.label}</dt>
              <dd className="fact-value" style={{ margin: 0 }}>
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        Scroll
        <i />
      </a>
    </section>
  );
}

import type { JSX } from 'react';
/**
 * Small line-art illustrations for each project card.
 * They use currentColor + var(--accent) so they adapt to both themes.
 */
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const A = { ...S, stroke: 'var(--accent)', strokeWidth: 2 } as const;
const MUTED = { opacity: 0.35 };

function FrameGenerator() {
  // A film strip of frames with a tracked ball arc running through them.
  const frames = [40, 100, 160, 220];
  const ball = [
    [62, 120],
    [122, 86],
    [182, 74],
    [242, 92],
  ];
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <rect x="24" y="44" width="272" height="100" rx="8" {...S} style={MUTED} />
      {Array.from({ length: 17 }).map((_, i) => (
        <g key={i} style={MUTED}>
          <rect x={30 + i * 16} y="50" width="8" height="5" rx="1" fill="currentColor" />
          <rect x={30 + i * 16} y="133" width="8" height="5" rx="1" fill="currentColor" />
        </g>
      ))}
      {frames.map((x) => (
        <rect key={x} x={x} y="62" width="52" height="64" rx="4" {...S} />
      ))}
      <path d="M50 132 Q 150 40 270 104" {...A} strokeDasharray="3 5" />
      {ball.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="var(--accent)" />
          <rect x={x - 9} y={y - 9} width="18" height="18" rx="2" {...S} strokeWidth={1} />
        </g>
      ))}
      <text x="24" y="164" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" opacity="0.6">
        NVDEC · 1,770+ fps
      </text>
    </svg>
  );
}

function AIUpscaler() {
  // A small blocky frame becomes a large crisp frame at double the frame rate.
  const blocks = [
    [0, 0, 0.25],
    [1, 0, 0.25],
    [2, 0, 1],
    [3, 0, 0.25],
    [0, 1, 0.25],
    [1, 1, 0.6],
    [2, 1, 0.25],
    [3, 1, 0.25],
    [0, 2, 0.6],
    [1, 2, 0.9],
    [2, 2, 0.6],
    [3, 2, 0.9],
  ];
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <g transform="translate(26 62)">
        {blocks.map(([x, y, o], i) =>
          o === 1 ? (
            <rect key={i} x={x * 18} y={y * 18} width="18" height="18" fill="var(--accent)" />
          ) : (
            <rect key={i} x={x * 18} y={y * 18} width="18" height="18" fill="currentColor" opacity={o * 0.55} />
          ),
        )}
        <rect x="0" y="0" width="72" height="54" {...S} />
        <text x="36" y="72" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" opacity="0.6">
          1080p30
        </text>
      </g>
      <path d="M112 89 H 146" {...A} />
      <path d="M140 83 l6 6 -6 6" {...A} />
      <g transform="translate(158 36)">
        <rect x="0" y="0" width="140" height="105" rx="6" {...S} />
        <circle cx="104" cy="30" r="12" fill="var(--accent)" />
        <path d="M0 78 L 34 50 L 58 68 L 90 40 L 140 76 V 99 a6 6 0 0 1 -6 6 H 6 a6 6 0 0 1 -6 -6 Z" fill="currentColor" opacity="0.18" />
        <path d="M0 78 L 34 50 L 58 68 L 90 40 L 140 76" {...S} />
        <text x="70" y="124" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" opacity="0.6">
          1440p60
        </text>
      </g>
      <g fontFamily="var(--font-mono)" fontSize="9">
        <rect x="118" y="112" width="26" height="15" rx="7.5" fill="var(--accent)" opacity="0.14" />
        <text x="131" y="122.5" textAnchor="middle" fill="var(--accent)">
          AI
        </text>
      </g>
    </svg>
  );
}

function DejOS() {
  // A retail terminal locked to one full-screen web app, with USB blocked.
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <rect x="70" y="24" width="180" height="112" rx="8" {...S} />
      <path d="M140 136 l-8 20 h56 l-8 -20" {...S} />
      <line x1="120" y1="156" x2="200" y2="156" {...S} />
      <rect x="80" y="34" width="160" height="92" rx="4" fill="currentColor" opacity="0.06" />
      <rect x="80" y="34" width="160" height="14" rx="4" fill="currentColor" opacity="0.14" />
      <rect x="92" y="38" width="70" height="6" rx="3" fill="currentColor" opacity="0.3" />
      <rect x="92" y="58" width="64" height="8" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="92" y="72" width="96" height="6" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="92" y="84" width="84" height="6" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="92" y="100" width="44" height="14" rx="4" fill="var(--accent)" />
      <g transform="translate(212 100)">
        <circle r="14" fill="var(--bg-elev)" stroke="var(--accent)" strokeWidth="2" />
        <rect x="-6" y="-2" width="12" height="9" rx="2" fill="var(--accent)" />
        <path d="M-4 -2 v-3 a4 4 0 0 1 8 0 v3" fill="none" stroke="var(--accent)" strokeWidth="1.8" />
      </g>
      <g transform="translate(276 70)" style={MUTED}>
        <rect x="-7" y="-14" width="14" height="22" rx="2" {...S} />
        <rect x="-4" y="-22" width="8" height="8" {...S} />
      </g>
      <line x1="262" y1="50" x2="290" y2="90" {...A} />
      <text x="34" y="80" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" opacity="0.6" textAnchor="middle">
        1 app
      </text>
      <text x="34" y="94" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" opacity="0.6" textAnchor="middle">
        only
      </text>
    </svg>
  );
}

function LLLMao() {
  // Chat bubbles on a laptop, wired to a local model and a vector store: nothing leaves the device.
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <rect x="40" y="30" width="150" height="100" rx="8" {...S} />
      <path d="M26 142 h178 l-10 -12 h-158 z" {...S} />
      <rect x="54" y="46" width="80" height="16" rx="8" {...S} style={MUTED} />
      <rect x="86" y="70" width="90" height="16" rx="8" fill="var(--accent)" opacity="0.9" />
      <rect x="54" y="94" width="64" height="16" rx="8" {...S} style={MUTED} />
      <path d="M190 80 H 228" {...A} strokeDasharray="3 4" />
      <path d="M228 80 V 52 H 244 M228 80 V 112 H 244" {...A} strokeDasharray="3 4" />
      <rect x="244" y="36" width="52" height="32" rx="6" {...S} />
      <text x="270" y="56" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor">
        LLM
      </text>
      <g transform="translate(270 112)">
        <ellipse cx="0" cy="-10" rx="22" ry="6" {...S} />
        <path d="M-22 -10 v20 a22 6 0 0 0 44 0 v-20" {...S} />
        <path d="M-22 0 a22 6 0 0 0 44 0" {...S} style={MUTED} />
      </g>
      <g transform="translate(150 150)">
        <rect x="-8" y="0" width="16" height="12" rx="2" fill="currentColor" />
        <path d="M-5 0 v-4 a5 5 0 0 1 10 0 v4" {...S} />
      </g>
      <text x="166" y="160" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" opacity="0.6">
        100% offline
      </text>
    </svg>
  );
}

function CattleGo() {
  // A phone scanning an animal with a confidence readout.
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <rect x="112" y="14" width="96" height="152" rx="16" {...S} />
      <rect x="146" y="22" width="28" height="5" rx="2.5" fill="currentColor" opacity="0.4" />
      <g {...A}>
        <path d="M128 50 v-10 h10 M182 40 h10 v10 M192 110 v10 h-10 M138 120 h-10 v-10" />
      </g>
      <g transform="translate(160 82)" {...S}>
        <path d="M-26 6 q0 -16 18 -16 h20 q16 0 18 12 l6 -4 q4 8 -4 10 v14 h-6 v-10 h-30 v10 h-6 v-14 q-10 0 -16 -2z" />
        <path d="M30 -2 l6 -8 M26 -6 l2 -9" />
      </g>
      <rect x="124" y="132" width="72" height="22" rx="6" fill="var(--accent)" opacity="0.12" />
      <text x="160" y="147" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--accent)">
        breed · 0.94
      </text>
      <g style={MUTED} {...S}>
        <path d="M228 60 q24 0 24 18 t24 18" />
        <path d="M44 120 q24 0 24 -18 t24 -18" />
        <circle cx="276" cy="96" r="4" />
        <circle cx="44" cy="120" r="4" />
      </g>
    </svg>
  );
}

function GigShield() {
  // A rain cloud crossing a threshold line triggers a shield / instant payout.
  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <path d="M70 76 a22 22 0 0 1 40 -16 a26 26 0 0 1 48 10 a18 18 0 0 1 -4 36 h-82 a16 16 0 0 1 -2 -30z" {...S} />
      {[84, 104, 124, 144].map((x, i) => (
        <line key={x} x1={x} y1={116 + (i % 2) * 6} x2={x - 6} y2={134 + (i % 2) * 6} {...S} />
      ))}
      <line x1="30" y1="96" x2="200" y2="96" {...A} strokeDasharray="5 5" />
      <text x="30" y="88" fontFamily="var(--font-mono)" fontSize="9" fill="var(--accent)">
        threshold
      </text>
      <path d="M200 96 H 222" {...A} />
      <path d="M216 90 l6 6 -6 6" {...A} />
      <path d="M258 52 l30 10 v28 c0 22 -14 34 -30 42 c-16 -8 -30 -20 -30 -42 v-28z" {...S} strokeWidth={1.8} />
      <path d="M246 92 l9 9 17 -18" {...A} strokeWidth={2.5} />
      <text x="258" y="156" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" opacity="0.6">
        auto payout
      </text>
    </svg>
  );
}

const ART: Record<string, () => JSX.Element> = {
  'frame-generator': FrameGenerator,
  'ai-upscaler': AIUpscaler,
  dejos: DejOS,
  lllmao: LLLMao,
  'cattle-go': CattleGo,
  gigshield: GigShield,
};

export function ProjectArt({ id }: { id: string }) {
  const Art = ART[id] ?? AIUpscaler;
  return <Art />;
}

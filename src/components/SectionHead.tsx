import type { ReactNode } from 'react';
import { delay } from '../utils/delay';

interface SectionHeadProps {
  label: string;
  title: ReactNode;
  lede?: ReactNode;
}

/** Section heading: label, large title, and an optional lede beside it. */
export function SectionHead({ label, title, lede }: SectionHeadProps) {
  return (
    <div className="section-head">
      <span className="eyebrow" data-reveal>
        {label}
      </span>
      <h2 className="section-title" data-reveal style={delay(60)}>
        {title}
      </h2>
      {lede && (
        <p className="section-lede" data-reveal style={delay(120)}>
          {lede}
        </p>
      )}
    </div>
  );
}

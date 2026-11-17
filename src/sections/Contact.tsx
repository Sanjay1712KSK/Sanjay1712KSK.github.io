import { useState, type MouseEvent } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { delay } from '../utils/delay';
import { ArrowUpRight, Check, Copy } from '../components/Icons';

export function Contact({ onResume }: { onResume: () => void }) {
  const { email, github, linkedin, phone, medium } = PORTFOLIO_DATA.profile;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const resume = (e: MouseEvent) => {
    e.preventDefault();
    onResume();
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <span className="eyebrow" data-reveal>
          Contact
        </span>
        <h2 className="contact-title" data-reveal style={delay(60)}>
          Let&apos;s build
          <br />
          something <span className="serif">together.</span>
        </h2>
        <p className="contact-sub" data-reveal style={delay(120)}>
          Have a role, a project, or want to build with Ayan Crafts? I&apos;d love to hear about it. Email is the fastest way to reach me.
        </p>

        <div data-reveal style={delay(180)}>
          <div className="email-pill">
            <a href={`mailto:${email}`}>{email}</a>
            <button className="btn btn-primary" onClick={copy} aria-live="polite">
              {copied ? (
                <>
                  <Check /> Copied
                </>
              ) : (
                <>
                  <Copy /> Copy email
                </>
              )}
            </button>
          </div>
        </div>

        <div className="contact-links" data-reveal style={delay(240)}>
          <a className="link-arrow" href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight />
          </a>
          <a className="link-arrow" href={github} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight />
          </a>
          <a className="link-arrow" href={medium} target="_blank" rel="noopener noreferrer">
            Medium <ArrowUpRight />
          </a>
          <a className="link-arrow" href={`tel:${phone.replace(/\s/g, '')}`}>
            {phone}
          </a>
          <a className="link-arrow" href="/resume/" onClick={resume}>
            Resume <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

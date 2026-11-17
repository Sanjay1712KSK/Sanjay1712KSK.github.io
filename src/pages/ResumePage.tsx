import type { MouseEvent } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, ArrowUpRight, Download } from '../components/Icons';
import type { Navigate } from '../utils/routes';

interface ResumePageProps {
  onNavigate: Navigate;
}

const PDF = '/resume.pdf';
const FILE_NAME = 'Sanjay_Kumar_S_Resume.pdf';

export function ResumePage({ onNavigate }: ResumePageProps) {
  const { profile, education } = PORTFOLIO_DATA;

  const back = (e: MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <div className="resume-page">
      <div className="container">
        <a href="/" className="back" onClick={back}>
          <ArrowRight /> Back to portfolio
        </a>

        <div className="resume-head">
          <div>
            <h1>Resume</h1>
            <p>
              {profile.name} · {profile.title} · CGPA {education.cgpa}
            </p>
          </div>
          <div className="resume-actions">
            <a href={PDF} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Open in new tab <ArrowUpRight />
            </a>
            <a href={PDF} download={FILE_NAME} className="btn btn-primary">
              <Download /> Download PDF
            </a>
          </div>
        </div>

        <div className="resume-frame">
          <object data={`${PDF}#view=FitH`} type="application/pdf" aria-label={`${profile.name} resume (PDF)`}>
            <div className="resume-fallback">
              <div>
                <h2>Can&apos;t preview the PDF here</h2>
                <p>Your browser doesn&apos;t support embedded PDFs. You can open or download it instead.</p>
                <a href={PDF} download={FILE_NAME} className="btn btn-primary">
                  <Download /> Download PDF
                </a>
              </div>
            </div>
          </object>
          <div className="resume-fallback mobile-only">
            <div>
              <h2>Resume (PDF)</h2>
              <p>On phones, the PDF opens best in your device&apos;s viewer.</p>
              <a href={PDF} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Open resume <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

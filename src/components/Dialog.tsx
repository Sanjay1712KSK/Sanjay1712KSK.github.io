import { useEffect, useRef, type ReactNode } from 'react';
import { Close } from './Icons';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

/** Native <dialog> modal: focus trapping and Escape handling come from the browser. */
export function Dialog({ open, onClose, eyebrow, title, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      d.querySelector('.dialog-scroll')?.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else if (!open && d.open) {
      d.close();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialog-title"
      onClose={onClose}
      onClick={(e) => {
        // Clicking the backdrop (the dialog element itself, outside its content) closes it.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dialog-head">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h3 id="dialog-title">{title}</h3>
        </div>
        <button className="icon-btn" onClick={onClose} aria-label="Close">
          <Close />
        </button>
      </div>
      <div className="dialog-scroll">{children}</div>
    </dialog>
  );
}

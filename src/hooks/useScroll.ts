import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Adds `.is-visible` to every `[data-reveal]` element as it scrolls into view. */
export function useRevealOnScroll(dependency: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'));
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dependency]);
}

/** Returns the id of the section currently in the reading zone of the viewport. */
export function useActiveSection(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string>('');
  useEffect(() => {
    if (!enabled) return;
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, enabled]);
  return enabled ? active : '';
}

/** Writes page scroll progress (0..1) directly to an element's transform: no re-renders. */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/**
 * Tilt + spotlight for every `[data-tilt]` element, via one delegated listener.
 * Writes CSS variables only, so React never re-renders.
 */
export function useTilt() {
  useEffect(() => {
    if (!canHover() || prefersReducedMotion()) return;
    let current: HTMLElement | null = null;
    let raf = 0;
    let last: PointerEvent | null = null;

    const reset = (el: HTMLElement) => {
      el.classList.remove('is-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };

    const apply = () => {
      raf = 0;
      if (!last) return;
      const el = (last.target as Element | null)?.closest?.('[data-tilt]') as HTMLElement | null;
      if (current && current !== el) reset(current);
      current = el;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (last.clientX - r.left) / r.width;
      const y = (last.clientY - r.top) / r.height;
      const max = Number(el.dataset.tilt) || 5;
      el.classList.add('is-tilting');
      el.style.setProperty('--ry', `${((x - 0.5) * max * 2).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${((0.5 - y) * max * 2).toFixed(2)}deg`);
      el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeaveDoc = () => current && reset(current);

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeaveDoc);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeaveDoc);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/**
 * Scroll-linked scenes. Each `[data-scroll]` element gets a `--p` (0..1) CSS variable:
 *  - data-scroll="sticky": progress through a tall container with a sticky child
 *  - data-scroll="through": progress as the element travels up through the viewport
 *  - data-scroll="exit": progress as the element scrolls out of the top
 */
export function useScrollScenes(dependency: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll]'));
    if (!els.length) return;
    if (prefersReducedMotion()) {
      els.forEach((el) => el.style.setProperty('--p', el.dataset.scroll === 'exit' ? '0' : '1'));
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue;
        let p: number;
        const mode = el.dataset.scroll;
        if (mode === 'sticky') p = -r.top / Math.max(1, r.height - vh);
        else if (mode === 'exit') p = -r.top / Math.max(1, r.height);
        else p = (vh - r.top) / (vh + r.height * 0.5);
        el.style.setProperty('--p', Math.min(1, Math.max(0, p)).toFixed(4));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [dependency]);
}

/** macOS-dock style magnification: items near the cursor scale up. Writes `--s` per item. */
export function useDockMagnify<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const dock = ref.current;
    if (!dock || !canHover() || prefersReducedMotion()) return;
    const items = () => Array.from(dock.querySelectorAll<HTMLElement>('.dock-item'));
    const RANGE = 140;
    const BOOST = 0.32;
    let raf = 0;
    let x = 0;

    const apply = () => {
      raf = 0;
      const left = dock.getBoundingClientRect().left;
      for (const it of items()) {
        // Measure from the untransformed layout box so scaling doesn't feed back into itself.
        const center = left + it.offsetLeft + it.offsetWidth / 2;
        const d = Math.abs(x - center);
        const t = Math.max(0, 1 - d / RANGE);
        const s = 1 + BOOST * (0.5 - 0.5 * Math.cos(t * Math.PI));
        it.style.setProperty('--s', s.toFixed(3));
      }
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      dock.classList.add('is-tracking');
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      dock.classList.remove('is-tracking');
      items().forEach((it) => it.style.setProperty('--s', '1'));
    };
    dock.addEventListener('pointermove', onMove);
    dock.addEventListener('pointerleave', onLeave);
    return () => {
      dock.removeEventListener('pointermove', onMove);
      dock.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

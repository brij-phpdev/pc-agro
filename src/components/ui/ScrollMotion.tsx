import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Page-wide LEDUP-style scroll choreography:
 * - Section headings, copy and grid/card children softly rise + fade in as they enter (staggered per parent).
 * - Large media marked [data-scroll-scale] grow from an inset, rounded frame to full size with scroll.
 * Respects prefers-reduced-motion.
 */
export function ScrollMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const main = document.querySelector('main');
    if (!main) return;

    let io: IntersectionObserver | null = null;
    let raf = 0;
    const scaleEls: HTMLElement[] = [];

    const setup = () => {
      const selectors = [
        'section h2', 'section h2 + p', 'section header p',
        'section [class*="grid"] > *', 'section [data-reveal]',
      ];
      const els = new Set<HTMLElement>();
      selectors.forEach(s => main.querySelectorAll<HTMLElement>(s).forEach(e => {
        if (e.closest('[data-no-reveal]') || e.closest('.hero-root')) return;
        els.add(e);
      }));

      if (reduce) return;

      els.forEach(el => {
        if (el.dataset.revealReady) return;
        el.dataset.revealReady = '1';
        const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
        const idx = Math.min(siblings.indexOf(el), 6);
        el.style.setProperty('--reveal-delay', `${Math.max(idx, 0) * 90}ms`);
        el.classList.add('reveal');
      });

      io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add('reveal-in');
            io?.unobserve(en.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92) {
          el.classList.add('reveal-in');
        } else {
          io?.observe(el);
        }
      });

      main.querySelectorAll<HTMLElement>('[data-scroll-scale]').forEach(e => scaleEls.push(e));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        scaleEls.forEach(el => {
          const r = el.getBoundingClientRect();
          // 0 when element top is at viewport bottom, 1 when it's at 25% from top
          const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.75)));
          const eased = 1 - Math.pow(1 - p, 3);
          el.style.setProperty('--scroll-p', eased.toFixed(4));
        });
      });
    };

    const t = window.setTimeout(() => {
      setup();
      if (!reduce) {
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
      }
    }, 60);

    return () => {
      window.clearTimeout(t);
      cancelAnimationFrame(raf);
      io?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  return null;
}

export default ScrollMotion;

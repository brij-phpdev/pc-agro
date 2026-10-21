import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from './Logo';

/**
 * LEDUP-style page change: a dark curtain with the illuminated PC Agro logo covers the
 * screen briefly, then dissolves to reveal the new page, which settles in softly.
 */
export const RouteTransition: React.FC = () => {
  const { pathname } = useLocation();
  const first = useRef(true);
  const [phase, setPhase] = useState<'off' | 'in' | 'out'>('off');

  useEffect(() => {
    if (first.current) { 
      first.current = false; 
      return; 
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setPhase('in');
    document.documentElement.classList.remove('page-enter');
    const t1 = setTimeout(() => {
      setPhase('out');
      void document.documentElement.offsetWidth;
      document.documentElement.classList.add('page-enter');
    }, 650);
    const t2 = setTimeout(() => setPhase('off'), 1350);
    return () => { 
      clearTimeout(t1); 
      clearTimeout(t2); 
    };
  }, [pathname]);

  if (phase === 'off') return null;
  return (
    <div aria-hidden className={`route-curtain ${phase === 'out' ? 'is-out' : ''}`}>
      <div className="route-curtain-glow" />
      <div className="route-curtain-logo relative overflow-hidden px-2 py-1">
        <Logo variant="light" className="h-12 scale-[1.3] sm:scale-[1.5] origin-center" />
        <span className="solar-intro-sweep" />
      </div>
    </div>
  );
};

export default RouteTransition;

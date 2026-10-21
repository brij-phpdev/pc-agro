import React, { useEffect, useState } from 'react';
import { Logo } from '../layout/Logo';

/**
 * One-time cinematic "dawn" entry: dark screen → sunrise glow rises from the horizon →
 * PC Agro logo fades up with a single light sweep → curtain lifts to reveal the banner.
 * Plays once per browser session; skipped for reduced-motion users.
 */
export const SolarIntro: React.FC = () => {
  const [phase, setPhase] = useState<'idle' | 'play' | 'exit' | 'done'>('idle');

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || sessionStorage.getItem('pcagro-intro')) { 
      setPhase('done'); 
      return; 
    }
    sessionStorage.setItem('pcagro-intro', '1');
    setPhase('play');
    document.documentElement.classList.add('intro-lock');
    const t1 = setTimeout(() => setPhase('exit'), 2300);
    const t2 = setTimeout(() => { 
      setPhase('done'); 
      document.documentElement.classList.remove('intro-lock'); 
    }, 3300);
    return () => { 
      clearTimeout(t1); 
      clearTimeout(t2); 
      document.documentElement.classList.remove('intro-lock'); 
    };
  }, []);

  if (phase === 'done' || phase === 'idle') return null;

  return (
    <div
      aria-hidden
      onClick={() => setPhase('exit')}
      className={`solar-intro fixed inset-0 z-[200] bg-basalt-950 overflow-hidden cursor-pointer ${phase === 'exit' ? 'is-exit' : ''}`}
      style={{ backgroundColor: '#202524' }}
    >
      <div className="solar-intro-sun" />
      <div className="solar-intro-horizon" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <div className="solar-intro-logo relative overflow-hidden px-2 py-1">
          <Logo variant="light" className="h-12 scale-[1.3] sm:scale-[1.5] origin-center" />
          <span className="solar-intro-sweep" />
        </div>
        <p className="solar-intro-tag text-[10px] sm:text-xs tracking-[0.35em] uppercase text-citron font-semibold">
          From Sunlight to Self-Reliance · Est. 1978
        </p>
      </div>
    </div>
  );
};

export default SolarIntro;

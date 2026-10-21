import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { SolarIntro } from '../ui/SolarIntro';

interface HeroSlide {
  id: number;
  numberStr: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  bgUrl: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    numberStr: '01',
    eyebrow: 'SOLAR ENERGY. BUILT ON EXPERIENCE.',
    titleLine1: 'Powering Progress.',
    titleLine2: 'Harnessing the Sun.',
    description: 'From homes to industries, PC Agro helps customers explore dependable solar solutions designed around their energy needs, site conditions and long-term goals.',
    primaryBtnText: 'Request a Quote',
    primaryBtnLink: '/contact',
    secondaryBtnText: 'Explore Our Projects',
    secondaryBtnLink: '/projects',
    bgUrl: '/images/hero-solar-1.jpg'
  },
  {
    id: 2,
    numberStr: '02',
    eyebrow: 'ESTABLISHED 1978. TECHNICAL EXPERTISE.',
    titleLine1: 'Clean Energy.',
    titleLine2: 'Engineered for Performance.',
    description: 'Custom rooftop and commercial photovoltaic systems paired with top-tier modules, high-efficiency inverters, and battery storage solutions.',
    primaryBtnText: 'Calculate Solar Potential',
    primaryBtnLink: '#calculator',
    secondaryBtnText: 'Explore All Solutions',
    secondaryBtnLink: '/solutions',
    bgUrl: '/images/hero-solar-2.jpg'
  }
];

export const HeroSlider: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIdx(prev => (prev + 1) % slides.length);
    }, 7500);
    return () => clearTimeout(timer);
  }, [currentIdx]);

  // Scroll parallax: image drifts slower than the page, copy fades/lifts away
  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        mediaRef.current?.style.setProperty('--hero-y', String(y * 0.35));
        if (contentRef.current) {
          contentRef.current.style.transform = `translate3d(0, ${y * -0.12}px, 0)`;
          contentRef.current.style.opacity = String(Math.max(0, 1 - y / 600));
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { 
      cancelAnimationFrame(raf); 
      window.removeEventListener('scroll', onScroll); 
    };
  }, []);

  const activeSlide = slides[currentIdx];

  return (
    <section className="hero-root relative w-full min-h-[680px] lg:h-[95vh] max-h-[920px] bg-moss-ink rounded-b-[44px] sm:rounded-b-[56px] overflow-hidden select-none shadow-xl border-b border-mist-grey/20">
      {/* Cinematic Solar Dawn Intro (plays once per session) */}
      <SolarIntro />

      {/* Hero Dawn Warm Glow */}
      <div className="hero-dawn" aria-hidden />

      {/* Parallax Media Canvas */}
      <div ref={mediaRef} className="hero-parallax absolute inset-0">
        {slides.map((s, idx) => {
          const isActive = idx === currentIdx;
          return (
            <div
              key={s.id}
              aria-hidden={!isActive}
              className={`hero-media absolute inset-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                isActive ? 'is-active opacity-100 z-[1]' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={s.bgUrl}
                alt={s.titleLine1}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-moss-ink/90 via-moss-ink/50 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/85 via-transparent to-moss-ink/30 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Hero Content Canvas */}
      <div 
        ref={contentRef} 
        className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-12 lg:px-20 flex flex-col justify-end pt-28 pb-28 sm:pb-32 will-change-transform"
      >
        <div key={`copy-${currentIdx}`} className="max-w-2xl sm:max-w-3xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-moss-green/20 border border-moss-green/40 backdrop-blur-md animate-heroRise">
            <Sparkles size={13} className="text-pistachio" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-pistachio uppercase">
              {activeSlide.eyebrow}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-semibold text-fog tracking-tight leading-[1.08]">
            <span className="block animate-heroRise [animation-delay:90ms]">{activeSlide.titleLine1}</span>
            <span className="block text-pistachio animate-heroRise [animation-delay:180ms]">{activeSlide.titleLine2}</span>
          </h1>
          
          {/* Horizon Energy Line */}
          <div className="energy-line" aria-hidden />

          <p className="text-sm sm:text-base lg:text-lg text-mist-grey font-normal leading-relaxed max-w-2xl pt-1 animate-heroRise [animation-delay:280ms]">
            {activeSlide.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3 animate-heroRise [animation-delay:380ms]">
            <Link
              to={activeSlide.primaryBtnLink}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-moss-green hover:bg-moss-green-600 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-glow-moss group"
            >
              <span>{activeSlide.primaryBtnText}</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              to={activeSlide.secondaryBtnLink}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-fog text-xs font-semibold uppercase tracking-wider border border-white/20 backdrop-blur-md transition-all duration-200 group"
            >
              <span>{activeSlide.secondaryBtnText}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-pistachio" />
            </Link>
          </div>
        </div>

        {/* Slide Pagination - 01 / 02 with active progress bar */}
        <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 lg:left-20 flex items-center gap-8 text-xs font-semibold">
          {slides.map((s, idx) => {
            const isActive = idx === currentIdx;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentIdx(idx)}
                className="group flex flex-col items-start focus:outline-none transition-all"
                aria-label={`Go to slide ${s.numberStr}`}
              >
                <span
                  className={`text-xs font-medium tracking-wider transition-colors ${
                    isActive
                      ? 'text-fog font-bold'
                      : 'text-mist-grey-600 group-hover:text-mist-grey'
                  }`}
                >
                  {s.numberStr}
                </span>

                <span className="relative w-12 h-0.5 mt-1.5 bg-moss-ink-800 rounded-full overflow-hidden block">
                  {isActive && (
                    <span key={`progress-${currentIdx}`} className="absolute inset-y-0 left-0 bg-moss-green rounded-full animate-line-progress" />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

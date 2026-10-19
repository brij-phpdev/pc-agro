import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Sun, Sparkles } from 'lucide-react';

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
    bgUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1920&q=85'
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
    bgUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1920&q=85'
  }
];

export const HeroSlider: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx(prev => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [currentIdx]);

  const activeSlide = slides[currentIdx];

  return (
    <section className="relative w-full min-h-[680px] lg:h-[95vh] max-h-[920px] bg-moss-ink rounded-b-[44px] sm:rounded-b-[56px] overflow-hidden select-none border-b border-moss-ink-800 shadow-xl">
      {/* Background Slides with Ken-Burns Ambient Motion */}
      {slides.map((s, idx) => {
        const isActive = idx === currentIdx;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            <img
              src={s.bgUrl}
              alt={s.titleLine1}
              className={`w-full h-full object-cover object-center ${
                isActive ? 'animate-kenburns' : 'scale-100'
              }`}
            />
            {/* Ambient gradients for high editorial contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-moss-ink/95 via-moss-ink/75 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-moss-ink via-transparent to-black/30 pointer-events-none" />
          </div>
        );
      })}

      {/* Hero Content Canvas */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-12 lg:px-20 flex flex-col justify-center pt-28 pb-20">
        <div className="max-w-2xl sm:max-w-3xl space-y-6">
          
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-moss-green/20 border border-moss-green/40 backdrop-blur-md">
            <Sparkles size={13} className="text-pistachio" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-pistachio uppercase">
              {activeSlide.eyebrow}
            </span>
          </div>

          {/* Main Title - Matches ledup.pt oversized presence */}
          <h1
            key={`title-${currentIdx}`}
            className="text-4xl sm:text-6xl lg:text-[70px] font-semibold text-fog tracking-tight leading-[1.08] animate-fadeIn"
          >
            <span>{activeSlide.titleLine1}</span>
            <br />
            <span className="text-pistachio">{activeSlide.titleLine2}</span>
          </h1>

          {/* Subtitle / Description */}
          <p
            key={`sub-${currentIdx}`}
            className="text-sm sm:text-base lg:text-lg text-mist-grey font-normal leading-relaxed max-w-2xl pt-1 animate-fadeIn"
          >
            {activeSlide.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
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

        {/* Slide Pagination - Matches 01 / 02 with active filling progress line from screenshot */}
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

                {/* Underline Indicator Track & Animated Progress Line */}
                <span className="relative w-12 h-0.5 mt-1.5 bg-moss-ink-800 rounded-full overflow-hidden block">
                  {isActive && (
                    <span className="absolute inset-0 bg-moss-green rounded-full animate-line-progress" />
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

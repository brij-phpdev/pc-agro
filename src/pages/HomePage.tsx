import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { SolutionsDock } from '../components/home/SolutionsDock';
import { BentoGridWhyUs } from '../components/home/BentoGridWhyUs';
import { CompactSolarCalculator } from '../components/home/CompactSolarCalculator';
import { ShowcaseCarouselAndConsult } from '../components/home/ShowcaseCarouselAndConsult';

export const HomePage: React.FC = () => {
  return (
    <div id="top" className="space-y-0 bg-chalk scroll-smooth">
      {/* 1. Hero Section: Cinematic & Direct with Floating Quick-Stat Bar & Dual CTAs */}
      <HeroSlider />

      {/* 2. Interactive Segmented Solutions Dock (Residential, Commercial, Industrial, Institutional) */}
      <SolutionsDock />

      {/* 3. Bento Grid: Trust, Metrics & Engineering Why-Us (Tier-1 Anatomy, Live MWh, Net Metering, SCADA) */}
      <BentoGridWhyUs />

      {/* 4. Compact 2-Column Live Solar Calculator: Dynamic Real-Time ROI Engine */}
      <CompactSolarCalculator />

      {/* 5. Curated Showcase Carousel & Minimal Consultation Strip */}
      <ShowcaseCarouselAndConsult />
    </div>
  );
};

export default HomePage;

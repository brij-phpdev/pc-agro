import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { AboutSection } from '../components/home/AboutSection';
import { SolutionsSection } from '../components/home/SolutionsSection';
import { WhyPCAgroSection } from '../components/home/WhyPCAgroSection';
import { ProjectsShowcase } from '../components/home/ProjectsShowcase';
import { TechPartnersSection } from '../components/home/TechPartnersSection';
import { SolarCalculatorSection } from '../components/home/SolarCalculatorSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { ClosingCtaSection } from '../components/home/ClosingCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0 bg-chalk">
      {/* 1. Hero Section: Powering Progress. Harnessing the Sun. */}
      <HeroSlider />

      {/* 2. Introduction Section: Our Legacy (1978 & 2015-16) */}
      <AboutSection />

      {/* 3. Solutions Section: Solar Solutions for Every Scale */}
      <SolutionsSection />

      {/* 4. Why PC Agro Section: Experience That Moves Energy Forward */}
      <WhyPCAgroSection />

      {/* 5. Featured Projects Section: Real-World Applications & Interactive Hotspots */}
      <ProjectsShowcase />

      {/* 5B. Source of Product & Technology Partners (OEM Alliances) */}
      <TechPartnersSection />

      {/* 6. Solar Calculator Section: What Could Solar Mean for You? */}
      <SolarCalculatorSection />

      {/* 7. Process Section: A Thoughtful Path to Solar Power (01-04) */}
      <ProcessSection />

      {/* 8. Closing CTA Section: Start Exploring Your Solar Options Today */}
      <ClosingCtaSection />
    </div>
  );
};

export default HomePage;

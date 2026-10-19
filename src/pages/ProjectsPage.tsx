import React, { useState, useMemo } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Link } from 'react-router-dom';
import { solarProjectsData } from '../data/solarProjectsData';
import { Sun, ArrowUpRight, ArrowRight, Eye, CheckCircle2, MapPin, Layers } from 'lucide-react';
import { ProjectHotspot } from '../types';

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Projects');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(solarProjectsData[0].id);
  const [activeHotspot, setActiveHotspot] = useState<ProjectHotspot | null>(null);

  const filterOptions = ['All Projects', 'Industrial', 'Commercial', 'Institutional', 'Residential'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All Projects') {
      return solarProjectsData;
    }
    return solarProjectsData.filter(p => p.sector.toLowerCase() === activeFilter.toLowerCase());
  }, [activeFilter]);

  const currentProject = useMemo(() => {
    const found = filteredProjects.find(p => p.id === selectedProjectId);
    return found || filteredProjects[0] || solarProjectsData[0];
  }, [filteredProjects, selectedProjectId]);

  const breadcrumbs = [
    { label: 'Projects' }
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      
      {/* 1. HERO SECTION (Exact Copy) */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Sun size={14} className="text-moss-green" />
            <span>PROJECT EXPERIENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            Powering Progress Across Different Industries.
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            Explore selected solar project experience across industrial, commercial and institutional applications.
          </p>

          <div className="pt-4">
            <Link
              to="/contact?requirement=Discuss Similar Project Consultation"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-sm font-semibold tracking-wider transition-colors shadow-soft"
            >
              <span>Discuss a Similar Project</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO SECTION (Exact Copy) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-10">
        
        {/* Header & Filter Tabs */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
            Built Around Real Energy Requirements.
          </h2>
          <p className="text-base text-moss-ink/80 max-w-3xl leading-relaxed">
            Every project has its own challenges, from available rooftop space to electricity demand. Our portfolio showcases selected applications and project work.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {filterOptions.map(f => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => {
                    setActiveFilter(f);
                    const matching = f === 'All Projects' 
                      ? solarProjectsData[0] 
                      : solarProjectsData.find(p => p.sector.toLowerCase() === f.toLowerCase());
                    if (matching) setSelectedProjectId(matching.id);
                    setActiveHotspot(null);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-moss-ink text-fog shadow-sm font-bold'
                      : 'bg-white text-moss-ink/80 hover:bg-pistachio/40 border border-mist-grey'
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProjects.map(proj => {
            const isSelected = proj.id === currentProject.id;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setActiveHotspot(null);
                }}
                className={`p-5 rounded-3xl text-left transition-all border ${
                  isSelected
                    ? 'bg-moss-green text-fog border-moss-green shadow-md scale-102'
                    : 'bg-white text-moss-ink hover:border-moss-green/40 border-mist-grey'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider mb-2">
                  <span className={isSelected ? 'text-pistachio' : 'text-moss-green'}>{proj.sector}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${isSelected ? 'bg-moss-ink text-fog' : 'bg-fog text-moss-ink border border-mist-grey'}`}>
                    {proj.capacity}
                  </span>
                </div>
                <h4 className="text-sm font-bold leading-snug line-clamp-1">
                  {proj.title}
                </h4>
                <p className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-fog/80' : 'text-moss-ink/70'}`}>
                  {proj.location}
                </p>
              </button>
            );
          })}
        </div>

        {/* 3. PROJECT DETAIL TEMPLATE CONTAINER */}
        <div className="rounded-[40px] bg-moss-ink text-fog p-6 sm:p-10 lg:p-12 border border-mist-grey/20 shadow-xl space-y-8">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-mist-grey/20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">
                Project Name
              </span>
              <h3 className="text-xl font-bold text-fog mt-1">
                {currentProject.title}
              </h3>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">
                Location
              </span>
              <p className="text-base font-semibold text-fog mt-1 flex items-center gap-1.5">
                <MapPin size={15} className="text-pistachio" />
                {currentProject.location}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">
                Capacity
              </span>
              <p className="text-base font-bold text-pistachio mt-1">
                {currentProject.capacity}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">
                Application
              </span>
              <p className="text-base font-semibold text-fog mt-1">
                {currentProject.sector} Solar Solution
              </p>
            </div>
          </div>

          {/* Overview text */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-pistachio block">
              Overview
            </span>
            <p className="text-base text-fog/90 max-w-4xl leading-relaxed">
              A solar project developed around the site's energy requirements, installation conditions and operational needs.
            </p>
          </div>

          {/* Project Gallery & Hotspot Inspection (LEDUP.PT benchmark) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-pistachio block">
                Project Gallery
              </span>
              <span className="text-xs text-fog/60 flex items-center gap-1.5">
                <Eye size={14} className="text-pistachio" />
                Click pulsing hotspots to inspect installed hardware
              </span>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-[32px] overflow-hidden border border-mist-grey/20 shadow-2xl bg-black">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/70 via-transparent to-transparent pointer-events-none" />

              {/* Pulsing Hotspots */}
              {currentProject.hotspots && currentProject.hotspots.map((spot, sIdx) => (
                <div
                  key={sIdx}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                  onClick={() => setActiveHotspot(activeHotspot?.productSlug === spot.productSlug ? null : spot)}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-pistachio/40 animate-ping" />
                    <span className="relative w-7 h-7 rounded-full bg-moss-green border-2 border-fog shadow-lg flex items-center justify-center text-fog text-xs font-bold transition-transform group-hover:scale-125">
                      {sIdx + 1}
                    </span>
                  </div>

                  {/* Hotspot Hover / Active Tooltip */}
                  <div className={`absolute bottom-9 left-1/2 -translate-x-1/2 w-56 p-3.5 rounded-2xl bg-white text-moss-ink shadow-2xl border border-mist-grey pointer-events-auto transition-all duration-200 z-30 ${
                    activeHotspot?.productSlug === spot.productSlug ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100'
                  }`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green block">
                      {spot.categoryName}
                    </span>
                    <h5 className="text-xs font-bold text-moss-ink mt-0.5 line-clamp-2">
                      {spot.productName}
                    </h5>
                    <div className="pt-2 mt-2 border-t border-mist-grey/40 flex items-center justify-between text-[11px] font-semibold text-moss-green">
                      <span>View Specifications</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Highlights */}
          {currentProject.highlights && (
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentProject.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-fog/85">
                  <CheckCircle2 size={16} className="text-pistachio flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

        </div>

      </section>

      {/* 4. PROJECT CTA (Exact Copy) */}
      <section className="mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-[48px] bg-white border border-mist-grey shadow-sm text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-moss-green block">
            NEXT STEPS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-moss-ink tracking-tight">
            Planning a Project of Your Own?
          </h2>
          <p className="text-base text-moss-ink/80 max-w-2xl mx-auto leading-relaxed">
            Share your site location and approximate energy requirements to begin a project discussion.
          </p>
          <div className="pt-4">
            <Link
              to="/contact?requirement=Project Consultation Request"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
            >
              <span>Request a Project Consultation</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;

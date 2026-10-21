import React, { useState, useMemo } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Link } from 'react-router-dom';
import { 
  solarProjectsData, 
  heavyIndustryProjects, 
  footwearProjects, 
  institutionalProjects, 
  openAccessClients, 
  regionalPresenceData 
} from '../data/solarProjectsData';
import { Sun, ArrowUpRight, ArrowRight, Eye, CheckCircle2, MapPin, Factory, Award, Building2, School, Network, Globe } from 'lucide-react';
import { ProjectHotspot } from '../types';

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Projects');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(solarProjectsData[0].id);
  const [activeHotspot, setActiveHotspot] = useState<ProjectHotspot | null>(null);
  const [directoryTab, setDirectoryTab] = useState<'Heavy Industry' | 'Footwear & Leather' | 'Institutions' | 'Open Access' | 'Regional Footprint'>('Heavy Industry');

  const filterOptions = ['All Projects', 'Heavy Industry', 'Footwear & Leather', 'Colleges & Institutions', 'Open Access'];

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
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Sun size={14} className="text-moss-green" />
            <span>PROVEN SOLAR TRACK RECORD</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            Powering Progress Across Different Industries.
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            From multi-megawatt industrial manufacturing plants and Agra's renowned footwear hubs to premier educational campuses and Open Access grid wheeling, explore PC Agro's verified execution portfolio.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Link
              to="/contact?requirement=Discuss Similar Project Consultation"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-sm font-semibold tracking-wider transition-colors shadow-soft"
            >
              <span>Discuss a Similar Project</span>
              <ArrowUpRight size={16} />
            </Link>

            <span className="text-xs font-semibold text-moss-ink/70 px-4 py-2 rounded-full bg-fog border border-mist-grey">
              Flagship: 4.6 MWp Mahesh Edible Oil Industries, Agra
            </span>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE SHOWCASE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-10">
        
        {/* Header & Filter Tabs */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
            Selected Interactive Project Highlights
          </h2>
          <p className="text-base text-moss-ink/80 max-w-3xl leading-relaxed">
            Explore key engineering installations equipped with interactive component hot-spots, technical sizing, and system specifications.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-2">
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

        {/* PROJECT DETAIL CONTAINER */}
        <div className="rounded-[40px] bg-moss-ink text-fog p-6 sm:p-10 lg:p-12 border border-mist-grey/20 shadow-xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-pistachio uppercase tracking-wider mb-1">
                <MapPin size={14} />
                <span>{currentProject.location}</span>
                <span>•</span>
                <span>{currentProject.sector}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-fog tracking-tight">
                {currentProject.title}
              </h3>
              <p className="text-sm text-fog/80 mt-1 max-w-2xl">
                {currentProject.tagline}
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3.5 rounded-2xl">
              <div>
                <span className="text-[10px] uppercase font-bold text-pistachio block">Installed Capacity</span>
                <span className="text-2xl font-bold text-fog">{currentProject.capacity}</span>
              </div>
            </div>
          </div>

          {/* Interactive Photography with Hotspots */}
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 group bg-moss-ink/80">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/60 via-transparent to-transparent pointer-events-none" />

            {/* Hotspots */}
            {currentProject.hotspots && currentProject.hotspots.map((spot, idx) => (
              <div
                key={idx}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/spot"
              >
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot?.productId === spot.productId ? null : spot)}
                  className="relative w-8 h-8 rounded-full bg-moss-green text-fog border-2 border-white shadow-xl flex items-center justify-center hover:scale-115 transition-transform animate-pulse"
                >
                  <Eye size={14} />
                </button>
              </div>
            ))}

            {/* Hotspot Drawer / Card */}
            {activeHotspot && (
              <div className="absolute bottom-6 right-6 max-w-sm bg-white text-moss-ink p-5 rounded-2xl shadow-2xl border border-mist-grey z-30 animate-fade-in">
                <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green block">
                  {activeHotspot.categoryName}
                </span>
                <h5 className="text-sm font-bold text-moss-ink mt-0.5">
                  {activeHotspot.productName}
                </h5>
                <Link
                  to="/products-list"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-moss-green hover:underline"
                >
                  <span>Explore Product Specifications</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            )}
          </div>

          {/* Project Description & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-lg font-bold text-fog">Scope of Installation</h4>
              <p className="text-sm text-fog/80 leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-lg font-bold text-fog">Technical Achievements</h4>
              <div className="space-y-2">
                {currentProject.highlights?.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-fog/85">
                    <CheckCircle2 size={15} className="text-pistachio flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 3. COMPLETE VERIFIED PROJECT DIRECTORY (Exact Data from Profile Page 7 & 8) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-mist-grey text-moss-green text-xs font-semibold uppercase tracking-wider">
            <Factory size={14} />
            <span>PORTFOLIO DIRECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight">
            Key Executed Projects & Client Portfolio
          </h2>
          <p className="text-sm text-moss-ink/80 leading-relaxed">
            A comprehensive record of solar installations and Open Access power clients executed by PC Agro across industrial, commercial, and institutional sectors.
          </p>
        </div>

        {/* Directory Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-mist-grey/70 pb-4">
          {(['Heavy Industry', 'Footwear & Leather', 'Institutions', 'Open Access', 'Regional Footprint'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setDirectoryTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all ${
                directoryTab === tab
                  ? 'bg-moss-ink text-fog shadow-sm font-bold'
                  : 'bg-white text-moss-ink/80 hover:bg-pistachio/30 border border-mist-grey'
              }`}
            >
              {tab === 'Heavy Industry' && 'Heavy Industries (10 Projects)'}
              {tab === 'Footwear & Leather' && 'Footwear & Leather (5 Projects)'}
              {tab === 'Institutions' && 'Colleges & Institutions (8 Projects)'}
              {tab === 'Open Access' && 'Open Access Energy Clients'}
              {tab === 'Regional Footprint' && 'Pan-India Regional Footprint'}
            </button>
          ))}
        </div>

        {/* Tab 1: Heavy Industries */}
        {directoryTab === 'Heavy Industry' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            {heavyIndustryProjects.map((p, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-mist-grey/70 shadow-sm flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-fog border border-mist-grey text-moss-green uppercase">
                      {p.location}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-moss-ink">{p.name}</h4>
                  <p className="text-xs text-moss-ink/70 leading-relaxed">{p.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-lg font-black text-moss-green block">{p.capacity}</span>
                  <span className="text-[10px] text-moss-ink/50 uppercase font-semibold">Capacity</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Footwear & Leather */}
        {directoryTab === 'Footwear & Leather' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            {footwearProjects.map((p, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-mist-grey/70 shadow-sm flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-fog border border-mist-grey text-moss-green uppercase">
                      {p.location}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-moss-ink">{p.name}</h4>
                  <p className="text-xs text-moss-ink/70 leading-relaxed">{p.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-lg font-black text-moss-green block">{p.capacity}</span>
                  <span className="text-[10px] text-moss-ink/50 uppercase font-semibold">Capacity</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Institutions */}
        {directoryTab === 'Institutions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            {institutionalProjects.map((p, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-mist-grey/70 shadow-sm flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-fog border border-mist-grey text-moss-green uppercase">
                      {p.location}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-moss-ink">{p.name}</h4>
                  <p className="text-xs text-moss-ink/70 leading-relaxed">{p.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-lg font-black text-moss-green block">{p.capacity}</span>
                  <span className="text-[10px] text-moss-ink/50 uppercase font-semibold">Capacity</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Open Access */}
        {directoryTab === 'Open Access' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            {openAccessClients.map((p, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-mist-grey/70 shadow-sm flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-fog border border-mist-grey text-moss-green uppercase">
                      {p.location}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-moss-ink">{p.name}</h4>
                  <p className="text-xs text-moss-ink/70 leading-relaxed">{p.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-bold text-moss-green block">{p.capacity}</span>
                  <span className="text-[10px] text-moss-ink/50 uppercase font-semibold">Service Type</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Regional Footprint */}
        {directoryTab === 'Regional Footprint' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {regionalPresenceData.map((reg, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-mist-grey/70 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-moss-green">
                  <MapPin size={18} />
                  <h4 className="text-base font-bold text-moss-ink">{reg.region}</h4>
                </div>
                <ul className="space-y-1.5 border-t border-mist-grey/50 pt-3">
                  {reg.clients.map((c, cIdx) => (
                    <li key={cIdx} className="text-xs text-moss-ink/80 flex items-start gap-2">
                      <span className="text-moss-green font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* 4. PROJECT CTA */}
      <section className="mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-[48px] bg-white border border-mist-grey shadow-sm text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-moss-green block">
            NEXT STEPS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-moss-ink tracking-tight">
            Planning a Project for Your Enterprise?
          </h2>
          <p className="text-base text-moss-ink/80 max-w-2xl mx-auto leading-relaxed">
            Share your monthly power consumption, connected load, and site location for a customized solar feasibility assessment.
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

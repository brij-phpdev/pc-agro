import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { solarProjectsData } from '../../data/solarProjectsData';
import { ArrowUpRight, ArrowRight, Eye, Sun, MapPin, Zap } from 'lucide-react';
import { ProjectHotspot } from '../../types';

export const ProjectsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<ProjectHotspot | null>(null);

  // Filter to the 3 main project categories specified by user prompt
  const displayProjects = solarProjectsData.slice(0, 3);
  const currentProject = displayProjects[activeTab] || displayProjects[0];

  return (
    <section className="py-24 bg-moss-ink text-fog overflow-hidden relative border-t border-mist-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact Copy) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-pistachio text-xs font-semibold uppercase tracking-wider">
              <Sun size={14} className="text-pistachio" />
              <span>OUR WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fog tracking-tight leading-tight">
              Solar Solutions. Real-World Applications.
            </h2>
            <p className="text-base text-fog/80 leading-relaxed font-light">
              Explore selected solar installations across industrial, commercial and institutional environments.
            </p>
          </div>

          {/* Project Selector Pills (Exact Card Labels) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {displayProjects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveTab(idx);
                  setActiveHotspot(null);
                }}
                className={`px-4 py-2.5 text-xs font-semibold rounded-full transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === idx
                    ? 'bg-moss-green text-fog shadow-md font-bold'
                    : 'bg-white/10 text-fog/80 hover:bg-white/20 border border-white/15'
                }`}
              >
                <span>{proj.title}</span>
                {proj.capacity && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    activeTab === idx ? 'bg-moss-ink text-fog font-bold' : 'bg-white/10 text-fog/70'
                  }`}>
                    {proj.capacity}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Viewer Canvas */}
        <div className="relative rounded-[36px] overflow-hidden shadow-2xl border border-mist-grey/20 bg-moss-ink">
          
          <div className="relative aspect-[16/9] min-h-[460px] max-h-[700px] w-full">
            <img
              key={currentProject.id}
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover object-center select-none animate-fadeIn"
            />
            {/* Ambient shadow gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-moss-ink via-moss-ink/30 to-transparent pointer-events-none" />

            {/* Bottom info bar overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
              <div className="max-w-xl bg-moss-ink/90 backdrop-blur-md p-6 rounded-2xl border border-mist-grey/30 pointer-events-auto shadow-xl">
                <div className="flex items-center gap-3 text-xs text-pistachio font-semibold uppercase tracking-wider mb-1">
                  <span className="flex items-center gap-1"><Zap size={13} /> {currentProject.sector} Solar</span>
                  {currentProject.location && (
                    <span className="flex items-center gap-1 text-fog/70"><MapPin size={12} /> {currentProject.location}</span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-fog">
                  {currentProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-fog/80 mt-1 leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              <div className="pointer-events-auto">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider shadow-soft transition-colors"
                >
                  <span>View All Projects</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Pulsing Hotspots on the Showcase Image */}
            {currentProject.hotspots && currentProject.hotspots.map((spot, sIdx) => (
              <div
                key={sIdx}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                onClick={() => setActiveHotspot(activeHotspot?.productSlug === spot.productSlug ? null : spot)}
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-7 h-7 rounded-full bg-pistachio/50 animate-ping" />
                  <span className="relative w-6 h-6 rounded-full bg-moss-green border-2 border-fog shadow-lg flex items-center justify-center text-fog text-[10px] font-bold transition-transform group-hover:scale-125">
                    {sIdx + 1}
                  </span>
                </div>

                {/* Hotspot Tooltip */}
                <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-52 p-3.5 rounded-2xl bg-white text-moss-ink shadow-2xl border border-mist-grey transition-all duration-200 z-30 ${
                  activeHotspot?.productSlug === spot.productSlug ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100'
                }`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green block">
                    {spot.categoryName}
                  </span>
                  <h5 className="text-xs font-bold text-moss-ink mt-0.5 line-clamp-1">
                    {spot.productName}
                  </h5>
                  <Link
                    to={`/product/${spot.productSlug}`}
                    className="pt-2 mt-2 border-t border-mist-grey/50 flex items-center justify-between text-[11px] font-semibold text-moss-green hover:text-moss-ink"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectsShowcase;

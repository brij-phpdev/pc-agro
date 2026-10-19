import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ArrowUpRight, CheckCircle2, Zap, Battery, Cpu, Sun } from 'lucide-react';

interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  dedicatedPage: string;
  image: string;
  badge: string;
  details: string[];
}

const fallbackSvg = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600' fill='%23587C60'%3e%3crect width='800' height='600' fill='%23E8E7E1'/%3e%3cpath d='M400 180 L520 340 L280 340 Z' fill='%23587C60' opacity='0.8'/%3e%3ccircle cx='400' cy='140' r='45' fill='%23C0D3B9'/%3e%3ctext x='50%25' y='75%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='26' font-weight='bold' fill='%2317251F'%3ePC AGRO SOLAR%3c/text%3e%3c/svg%3e";

export const SolarSolutionsPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace('#', '');
      const element = document.getElementById(hashId) || 
                      document.getElementById(`${hashId}-solar`) ||
                      document.getElementById(`sol-${hashId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const breadcrumbs = [
    { label: 'Solar Solutions' }
  ];

  const solutions: SolutionItem[] = [
    {
      id: 'residential',
      slug: 'residential-solar',
      title: 'Residential Solar',
      headline: 'Make Your Rooftop Work Smarter.',
      description: 'Explore rooftop solar options designed around your household electricity use, available roof space and grid requirements.',
      ctaText: 'Explore Residential Solar',
      ctaLink: '/contact?property=Residential',
      dedicatedPage: '/solutions/residential',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80',
      badge: 'Residential Solar',
      details: [
        'Rooftop planning tailored to household consumption patterns',
        'Net metering connectivity for utility bill offsets',
        'Optional battery integration for dependable backup',
        'Durable mounting structures engineered for home rooftops'
      ]
    },
    {
      id: 'commercial',
      slug: 'commercial-solar',
      title: 'Commercial Solar',
      headline: 'Smarter Energy for Growing Businesses.',
      description: 'Evaluate solar solutions for offices, shops, commercial buildings and business facilities looking to manage their electricity consumption.',
      ctaText: 'Discuss Commercial Solar',
      ctaLink: '/contact?property=Commercial',
      dedicatedPage: '/solutions/commercial',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
      badge: 'Commercial Solar',
      details: [
        'Optimized for daytime commercial operating schedules',
        'Demand-offset configurations to curb peak tariff charges',
        'Seamless integration for corporate parks and retail centers',
        'Comprehensive performance data tracking'
      ]
    },
    {
      id: 'industrial',
      slug: 'industrial-solar',
      title: 'Industrial Solar',
      headline: 'Energy Solutions for Industry.',
      description: 'Explore solar installations for factories, warehouses and manufacturing facilities, with planning based on operational loads and available installation space.',
      ctaText: 'Discuss an Industrial Project',
      ctaLink: '/contact?property=Industrial',
      dedicatedPage: '/solutions/industrial',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
      badge: 'Industrial Solar',
      details: [
        'High-capacity engineering for heavy manufacturing machinery',
        'Structural planning for factory metal sheds and ground mounts',
        'Robust multi-string and central inverter synchronization',
        'Rigorous industrial electrical safety and protection standards'
      ]
    },
    {
      id: 'institutional',
      slug: 'institutional-solar',
      title: 'Institutional Solar',
      headline: 'Supporting Institutions with Solar.',
      description: 'Solar options for schools, educational campuses, cold storage facilities and other suitable institutional or specialised applications.',
      ctaText: 'Enquire About Institutional Solar',
      ctaLink: '/contact?property=Institutional',
      dedicatedPage: '/solutions/institutional',
      image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=1200&q=80',
      badge: 'Institutional Solar',
      details: [
        'Stable, reliable energy for educational and research campuses',
        'Dependable energy management for cold chain & agricultural storage',
        'Scalable layouts accommodating future facility expansion',
        'Long-term sustainable infrastructure planning'
      ]
    }
  ];

  const systemTypes = [
    {
      name: 'On-Grid Solar',
      icon: Zap,
      description: 'Connected to the utility grid to support electricity consumption through solar generation.',
      highlight: 'Utility Interconnected'
    },
    {
      name: 'Off-Grid Solar',
      icon: Battery,
      description: 'Designed to operate independently using compatible battery storage.',
      highlight: 'Independent Operation'
    },
    {
      name: 'Hybrid Solar',
      icon: Cpu,
      description: 'Combines solar generation, grid connectivity and battery storage where supported.',
      highlight: 'Storage + Grid Integration'
    }
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-6xl mx-auto space-y-4">
          <Breadcrumb items={breadcrumbs} />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Sun size={14} className="text-moss-green" />
            <span>SOLUTIONS FOR EVERY ENERGY NEED</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-ink tracking-tight leading-[1.12]">
            The Right Solar Solution Starts Here.
          </h1>
          
          <p className="text-base sm:text-lg text-moss-ink/80 max-w-3xl leading-relaxed">
            From residential rooftops to industrial facilities, PC Agro helps customers explore solar configurations suited to their energy requirements and site conditions.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-sm font-semibold tracking-wider transition-colors shadow-soft"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/solutions/system-types"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-fog hover:bg-mist-grey/40 text-moss-ink text-xs font-semibold border border-mist-grey transition-colors"
            >
              <span>Compare System Types</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SOLAR SOLUTIONS SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        {solutions.map((sol, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={sol.id}
              id={sol.id}
              className="p-8 sm:p-12 lg:p-14 rounded-[40px] bg-white border border-mist-grey/70 shadow-sm scroll-mt-28"
            >
              {/* Secondary Anchor ID */}
              <div id={sol.slug} className="scroll-mt-28" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Text Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fog border border-mist-grey text-moss-green text-xs font-semibold uppercase tracking-wider">
                    <span>{sol.badge}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-moss-ink tracking-tight">
                    {sol.headline}
                  </h2>

                  <p className="text-base text-moss-ink/80 leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {sol.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-sm text-moss-ink/80">
                        <CheckCircle2 size={16} className="text-moss-green flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link
                      to={sol.ctaLink}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-xs font-semibold tracking-wider transition-colors shadow-soft"
                    >
                      <span>{sol.ctaText}</span>
                      <ArrowUpRight size={14} />
                    </Link>

                    <Link
                      to={sol.dedicatedPage}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fog hover:bg-mist-grey/40 text-moss-ink text-xs font-semibold border border-mist-grey transition-colors"
                    >
                      <span>View Full Details</span>
                    </Link>
                  </div>
                </div>

                {/* Image Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-[32px] overflow-hidden border border-mist-grey shadow-md relative group bg-fog">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = fallbackSvg;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* 3. SYSTEM TYPES: On-Grid, Off-Grid, Hybrid */}
      <section id="system-types" className="mt-24 pt-20 pb-20 bg-moss-ink text-fog rounded-[48px] mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-10 lg:px-12 scroll-mt-28">
        <div id="systems" className="scroll-mt-28" />
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-pistachio block mb-2">
              SYSTEM TYPES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fog tracking-tight">
              Solar Configurations Designed for Your Needs.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-[32px] bg-moss-ink/60 border border-mist-grey/30 flex flex-col justify-between hover:border-pistachio/60 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-pistachio flex items-center justify-center border border-white/10">
                      <Icon size={24} />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-pistachio block">
                      {type.highlight}
                    </span>

                    <h3 className="text-2xl font-bold text-fog">
                      {type.name}
                    </h3>

                    <p className="text-sm text-fog/80 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dedicated System Types Link & Closing CTA */}
          <div className="mt-16 pt-12 border-t border-mist-grey/30 text-center max-w-2xl mx-auto space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-fog">
              Not Sure Which System You Need?
            </h3>
            <p className="text-base text-fog/80">
              Let's discuss your requirements.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
              >
                <span>Find Your Solar Solution</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link
                to="/solutions/system-types"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-fog text-xs font-semibold uppercase tracking-wider border border-white/20 transition-colors"
              >
                <span>Compare System Types</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default SolarSolutionsPage;

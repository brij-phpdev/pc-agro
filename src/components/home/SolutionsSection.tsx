import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Factory, GraduationCap, ArrowUpRight, ArrowRight, Sun, Network } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: 'Residential Solar',
      slug: 'residential',
      icon: Home,
      description: 'Make your rooftop work smarter with solar solutions planned around your household’s energy needs.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Commercial Solar',
      slug: 'commercial',
      icon: Building2,
      description: 'Explore solar options for offices, retail spaces and commercial properties.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Industrial Solar',
      slug: 'industrial',
      icon: Factory,
      description: 'Solar solutions for factories, warehouses and manufacturing facilities.',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Open Access Solar',
      slug: 'open-access',
      icon: Network,
      description: 'Procure bulk renewable power wheeled over the grid with zero rooftop space limitations.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Institutional & Cold Chain',
      slug: 'institutional',
      icon: GraduationCap,
      description: 'Explore solar applications for campuses, schools, and temperature-critical cold storage.',
      image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-24 bg-fog text-moss-ink border-b border-mist-grey/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact Copy) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
              <Sun size={14} className="text-moss-green" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-moss-ink tracking-tight leading-tight">
              Solar Solutions for Every Scale.
            </h2>
            <p className="text-base text-moss-ink/80 leading-relaxed">
              Every property has different energy requirements. We help customers explore solar options based on electricity consumption, available space and project objectives.
            </p>
          </div>

          <div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft group"
            >
              <span>Explore All Solutions</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 5 Core Solutions Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {solutions.map((sol) => {
            const Icon = sol.icon;

            return (
              <div
                key={sol.slug}
                className="group rounded-[32px] bg-white border border-mist-grey/70 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/70 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-3 left-3 text-fog flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-moss-ink/80 backdrop-blur-md flex items-center justify-center text-pistachio">
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-bold text-fog">{sol.title}</span>
                    </div>
                  </div>

                  {/* Card Body (Exact Copy) */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-moss-ink group-hover:text-moss-green transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-moss-ink/75 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-full bg-fog group-hover:bg-moss-ink text-moss-ink group-hover:text-fog text-xs font-semibold border border-mist-grey/60 transition-all duration-200"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight size={13} className="text-moss-green group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;

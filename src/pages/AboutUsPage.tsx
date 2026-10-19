import React from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Link } from 'react-router-dom';
import { Sun, CheckCircle2, ArrowUpRight, History, ShieldCheck, FileText, Wrench, MessageCircle } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'About Us' }
  ];

  return (
    <div className="bg-fog min-h-screen text-moss-ink">
      
      {/* 1. HERO SECTION (Exact Copy & Screenshot Layout) */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 border-b border-mist-grey/60 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="flex justify-center">
            <Breadcrumb items={breadcrumbs} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
            <Sun size={14} className="text-moss-green" />
            <span>OUR STORY</span>
          </div>

          {/* Headline (Exact Copy) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-moss-ink tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Rooted in Experience.  
            <br />
            <span className="text-moss-green">Focused on Solar.</span>
          </h1>

          {/* Description (Exact Copy) */}
          <p className="text-base sm:text-lg lg:text-xl text-moss-ink/80 max-w-3xl mx-auto leading-relaxed pt-2">
            PC Agro builds on a business heritage dating back to 1978. Since entering the solar sector around 2015–16, we have continued to develop our focus on solar products, customer requirements and project-related support.
          </p>
        </div>

        {/* Floating Overlapping Rounded Image Banner */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16">
          <div className="aspect-[16/9] sm:aspect-[21/9] rounded-[40px] overflow-hidden border border-mist-grey shadow-md relative group">
            <img
              src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1800&q=85"
              alt="PC Agro Solar Energy Heritage"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Floating badge inside image */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-moss-ink/90 backdrop-blur-md text-fog px-5 py-3 rounded-2xl border border-mist-grey/30 shadow-xl flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-moss-green/40 border border-moss-green flex items-center justify-center text-pistachio">
                <History size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">Business Heritage</span>
                <span className="text-sm font-bold text-fog">Est. 1978 • Solar Since 2015–16</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR JOURNEY SECTION (Exact Copy) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Sticky Intro) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-mist-grey text-moss-green text-xs font-semibold uppercase tracking-wider">
              <span>OUR JOURNEY</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-moss-ink tracking-tight leading-tight">
              A Business That Continues to Evolve.
            </h2>

            <p className="text-base text-moss-ink/80 leading-relaxed">
              From traditional trading and equipment-related businesses to solar energy, PC Agro's journey reflects an ongoing commitment to serving changing market needs.
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-moss-green hover:bg-moss-ink text-fog text-xs font-semibold uppercase tracking-wider transition-colors shadow-soft"
              >
                <span>Talk to Our Team</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: Timeline Milestones (Exact Copy) */}
          <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-6">
            
            {/* Milestone 1: 1978 */}
            <div className="relative pl-8 sm:pl-10 border-l-2 border-moss-green/40 pb-8 last:pb-0">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-moss-ink text-pistachio flex items-center justify-center font-bold text-xs ring-4 ring-fog">
                01
              </div>
              <div className="p-6 sm:p-8 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-moss-green">
                  FOUNDATIONS
                </span>
                <h3 className="text-2xl font-bold text-moss-ink">
                  1978 — Business foundations established.
                </h3>
                <p className="text-sm text-moss-ink/80 leading-relaxed">
                  Decades of commercial trading, operational discipline and enduring relationships laid the bedrock of integrity and reliability that defines PC Agro today.
                </p>
              </div>
            </div>

            {/* Milestone 2: 2015-16 */}
            <div className="relative pl-8 sm:pl-10 border-l-2 border-moss-green/40 pb-8 last:pb-0">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-moss-ink text-pistachio flex items-center justify-center font-bold text-xs ring-4 ring-fog">
                02
              </div>
              <div className="p-6 sm:p-8 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-moss-green">
                  TRANSITION TO RENEWABLES
                </span>
                <h3 className="text-2xl font-bold text-moss-ink">
                  2015–16 — Entry into the solar sector.
                </h3>
                <p className="text-sm text-moss-ink/80 leading-relaxed">
                  Anticipating the rapid shift toward renewable power, we entered the solar sector, building technical capabilities in solar modules, inverters, and custom installations.
                </p>
              </div>
            </div>

            {/* Milestone 3: Today */}
            <div className="relative pl-8 sm:pl-10 border-l-2 border-moss-green/40 pb-8 last:pb-0">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-moss-ink text-pistachio flex items-center justify-center font-bold text-xs ring-4 ring-fog">
                03
              </div>
              <div className="p-6 sm:p-8 rounded-[32px] bg-white border border-mist-grey/70 shadow-sm space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-moss-green">
                  THE PRESENT & FUTURE
                </span>
                <h3 className="text-2xl font-bold text-moss-ink">
                  Today — Focus on solar products and project requirements.
                </h3>
                <p className="text-sm text-moss-ink/80 leading-relaxed">
                  Providing complete solar solutions for homes, businesses, and industries with dedicated technical coordination, reliable component supply, and responsive client service.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR APPROACH SECTION (Exact Copy) */}
      <section className="py-20 bg-white border-y border-mist-grey/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fog border border-mist-grey text-moss-green text-xs font-semibold uppercase tracking-wider mb-3">
              <span>OUR PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-moss-ink tracking-tight">
              Understand First. Recommend Responsibly.
            </h2>
            <p className="text-base sm:text-lg text-moss-ink/80 mt-4 leading-relaxed">
              We believe good solar planning begins with understanding your electricity use, site conditions, backup needs and project objectives. Our aim is to help you explore suitable options with clear product information and practical guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[36px] bg-fog border border-mist-grey/70 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-xl bg-white border border-mist-grey text-moss-green flex items-center justify-center font-bold text-sm">
                01
              </span>
              <h3 className="text-xl font-bold text-moss-ink">
                Site & Load Analysis
              </h3>
              <p className="text-sm text-moss-ink/80 leading-relaxed">
                Evaluating real power consumption habits, rooftop shadows, structural integrity, and local grid connectivity before recommending hardware.
              </p>
            </div>

            <div className="p-8 rounded-[36px] bg-fog border border-mist-grey/70 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-xl bg-white border border-mist-grey text-moss-green flex items-center justify-center font-bold text-sm">
                02
              </span>
              <h3 className="text-xl font-bold text-moss-ink">
                Objective Component Sizing
              </h3>
              <p className="text-sm text-moss-ink/80 leading-relaxed">
                Aligning module wattage, inverter topologies, and battery capacities to match your exact financial payback and technical needs.
              </p>
            </div>

            <div className="p-8 rounded-[36px] bg-fog border border-mist-grey/70 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-xl bg-white border border-mist-grey text-moss-green flex items-center justify-center font-bold text-sm">
                03
              </span>
              <h3 className="text-xl font-bold text-moss-ink">
                Transparent Execution
              </h3>
              <p className="text-sm text-moss-ink/80 leading-relaxed">
                Clear documentation, authentic manufacturer warranties, and straightforward guidance without unverified or exaggerated claims.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SUPPORT SECTION (Exact Copy) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-[40px] bg-moss-ink text-fog space-y-8 border border-mist-grey/20">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-pistachio block">
              COMPREHENSIVE ASSISTANCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-fog tracking-tight">
              Support Beyond Product Selection.
            </h2>
            <p className="text-base text-fog/80 leading-relaxed">
              We help customers navigate product enquiries, technical documentation, warranty information and project coordination according to the agreed scope and applicable terms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
              <FileText size={22} className="text-pistachio" />
              <h4 className="text-base font-bold text-fog">Product Enquiries</h4>
              <p className="text-xs text-fog/70 leading-relaxed">
                Fast guidance on equipment availability, module wattage ratings, and system configurations.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
              <FileText size={22} className="text-pistachio" />
              <h4 className="text-base font-bold text-fog">Technical Documentation</h4>
              <p className="text-xs text-fog/70 leading-relaxed">
                Access to equipment datasheets, single-line diagrams, and testing standard certifications.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
              <ShieldCheck size={22} className="text-pistachio" />
              <h4 className="text-base font-bold text-fog">Warranty Information</h4>
              <p className="text-xs text-fog/70 leading-relaxed">
                Transparent manufacturer warranty support for panels, inverters, and battery banks.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
              <Wrench size={22} className="text-pistachio" />
              <h4 className="text-base font-bold text-fog">Project Coordination</h4>
              <p className="text-xs text-fog/70 leading-relaxed">
                Assistance with timeline alignment, site feasibility, and reliable equipment dispatch.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-fog/70">
              Have a question about an upcoming installation or need technical specifications?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-moss-green hover:bg-fog hover:text-moss-ink text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-soft"
            >
              <span>Connect with Our Specialists</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;

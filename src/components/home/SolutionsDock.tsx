import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building2, 
  Factory, 
  GraduationCap, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Maximize2, 
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

type SolutionKey = 'residential' | 'commercial' | 'industrial' | 'institutional';

interface SolutionData {
  key: SolutionKey;
  label: string;
  icon: React.ElementType;
  badge: string;
  headline: string;
  description: string;
  highlights: { title: string; desc: string }[];
  idealArea: string;
  roiPeriod: string;
  tags: string[];
  specsUrl: string;
  image: string;
  statCallout: string;
}

const solutions: Record<SolutionKey, SolutionData> = {
  residential: {
    key: 'residential',
    label: 'Residential',
    icon: Home,
    badge: 'PM Surya Ghar Subsidy Ready',
    headline: 'Smarter Rooftop Generation for Modern Living',
    description: 'Custom-engineered for urban residences, villas and housing societies. Maximizes power output from limited roof space while preserving architectural aesthetics.',
    highlights: [
      { title: 'N-Type TOPCon Dual Glass', desc: 'Up to 22.8% cell efficiency capturing indirect and low light.' },
      { title: 'Net Metering Utility Offset', desc: 'Seamless grid export with automated DISCOM bi-directional billing.' },
      { title: 'Hybrid Storage Integration', desc: 'Battery-ready inverters guaranteeing continuous backup during outages.' }
    ],
    idealArea: '300 – 1,500 sq. ft.',
    roiPeriod: '3.2 – 3.8 Years',
    tags: ['PM Surya Ghar Approved', '85%+ Bill Reduction', 'Zero-Export Safety'],
    specsUrl: '/solutions/residential',
    image: '/images/hero-solar-1.jpg',
    statCallout: '₹80K+ Avg. Annual Bill Savings'
  },
  commercial: {
    key: 'commercial',
    label: 'Commercial',
    icon: Building2,
    badge: 'High-Tension Tariff Optimization',
    headline: 'Demand-Offset Solar for Business Facilities',
    description: 'Designed for corporate complexes, showrooms, logistics hubs and commercial buildings to curtail heavy daytime peak kVAh utility tariff charges.',
    highlights: [
      { title: 'Daytime Peak Load Shaving', desc: 'Directly offsets expensive daytime tariff slabs during peak working hours.' },
      { title: 'Multi-MPPT String Inverters', desc: '98.7% conversion efficiency with individual string telemetry.' },
      { title: 'Cloud Telemetry & SCADA', desc: 'Real-time performance alerts and generation reporting via mobile/web.' }
    ],
    idealArea: '2,500 – 25,000 sq. ft.',
    roiPeriod: '2.8 – 3.3 Years',
    tags: ['Accelerated Depreciation (40%)', 'Grid-Sync Telemetry', 'Zero Disruption'],
    specsUrl: '/solutions/commercial',
    image: '/images/hero-solar-2.jpg',
    statCallout: 'Up to 70% Energy Cost Reduction'
  },
  industrial: {
    key: 'industrial',
    label: 'Industrial',
    icon: Factory,
    badge: 'Multi-Megawatt Engineered',
    headline: 'High-Yield Heavy Power for Industry & Mills',
    description: 'Engineered for factories, metal fabrication sheds, cold storage chains and footwear manufacturing hubs requiring continuous high-amperage power.',
    highlights: [
      { title: 'Non-Penetrating Metal Clamping', desc: 'Certified mounting for standing seam and trapezoidal industrial sheds.' },
      { title: 'HT Transmission Synchronization', desc: 'CEIG-approved 11kV/33kV substation sync with harmonic filtration.' },
      { title: 'Severe Environment Durability', desc: 'Chemical, dust and ammonia-resistant modules built for heavy industrial air.' }
    ],
    idealArea: '25,000 – 500,000+ sq. ft.',
    roiPeriod: '2.3 – 2.9 Years',
    tags: ['HT Substation Sync', 'Open Access Compatible', 'Turnkey EPC'],
    specsUrl: '/solutions/industrial',
    image: '/images/hero-solar-1.jpg',
    statCallout: 'Megawatt-Scale Verified Track Record'
  },
  institutional: {
    key: 'institutional',
    label: 'Institutional',
    icon: GraduationCap,
    badge: 'Green Campus Certification',
    headline: 'Clean Energy Infrastructure for Premier Campuses',
    description: 'Tailored for universities, educational institutions, hospitals and healthcare facilities prioritizing safety, clean green energy ratings and long asset life.',
    highlights: [
      { title: 'Zero-Export Rapid Shutdown', desc: 'Advanced electrical safety conforming to international campus fire norms.' },
      { title: 'Educational Telemetry Kiosk', desc: 'Live generation displays for students, sustainability reporting, and faculty.' },
      { title: 'High-Wind Structural Engineering', desc: 'Hot-dip galvanized racking certified for 150 km/h wind shear resistance.' }
    ],
    idealArea: '5,000 – 80,000 sq. ft.',
    roiPeriod: '3.0 – 3.5 Years',
    tags: ['Institutional Net Metering', 'DISCOM Sanction Support', '25-Yr Asset Life'],
    specsUrl: '/solutions/institutional',
    image: '/images/hero-solar-2.jpg',
    statCallout: '100% Green Campus Alignment'
  }
};

export const SolutionsDock: React.FC = () => {
  const [activeKey, setActiveKey] = useState<SolutionKey>('commercial');
  const activeSolution = solutions[activeKey];
  const IconComponent = activeSolution.icon;

  return (
    <section id="solutions-dock" className="py-20 sm:py-24 bg-white text-moss-ink border-b border-mist-grey/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
              <Zap size={13} className="text-moss-green" />
              <span>SEGMENTED ENGINEERING ARCHITECTURES</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-moss-ink tracking-tight leading-[1.12]">
              Precision Energy Systems.
              <br />
              <span className="text-moss-green">Engineered for Every Scale.</span>
            </h2>

            <p className="text-sm sm:text-base text-moss-ink/80 leading-relaxed">
              Explore purpose-built photovoltaic configurations calibrated to your property type, load consumption patterns, and grid connection requirements.
            </p>
          </div>

          {/* Segmented Switcher Pill */}
          <div className="inline-flex p-1.5 rounded-full bg-fog border border-mist-grey/80 shadow-xs overflow-x-auto max-w-full scrollbar-none">
            {(Object.keys(solutions) as SolutionKey[]).map((k) => {
              const item = solutions[k];
              const TabIcon = item.icon;
              const isActive = activeKey === k;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setActiveKey(k)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-moss-ink text-fog shadow-sm'
                      : 'text-moss-ink/70 hover:text-moss-ink hover:bg-white/60'
                  }`}
                >
                  <TabIcon size={14} className={isActive ? 'text-pistachio' : 'text-moss-green'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Solution Showcase Dock Card */}
        <div 
          key={activeSolution.key}
          className="rounded-[36px] bg-fog border border-mist-grey/80 shadow-sm p-6 sm:p-10 lg:p-12 transition-all duration-300 animate-fadeIn"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Engineering Specs & Key Metrics (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-mist-grey text-moss-green text-[11px] font-bold uppercase tracking-wider">
                  <IconComponent size={13} />
                  {activeSolution.badge}
                </span>
                <span className="text-xs font-semibold text-moss-ink/60">
                  Turnkey EPC Delivery
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-moss-ink tracking-tight">
                  {activeSolution.headline}
                </h3>
                <p className="text-xs sm:text-sm text-moss-ink/80 mt-2 leading-relaxed">
                  {activeSolution.description}
                </p>
              </div>

              {/* 3 Key Engineering Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                {activeSolution.highlights.map((h, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-white border border-mist-grey/60 shadow-xs space-y-1.5 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-1.5 text-moss-green">
                      <CheckCircle2 size={15} />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-moss-green">
                        0{idx + 1} Spec
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-moss-ink leading-snug">{h.title}</h4>
                      <p className="text-[11px] text-moss-ink/70 mt-1 leading-snug">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data Strip: Ideal Area + Expected ROI + Benefit Tags */}
              <div className="pt-2 border-t border-mist-grey/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-moss-ink/50 block">Ideal Roof Area</span>
                    <span className="font-bold text-moss-ink text-sm sm:text-base flex items-center gap-1">
                      <Maximize2 size={13} className="text-moss-green" />
                      {activeSolution.idealArea}
                    </span>
                  </div>
                  <div className="w-px h-8 bg-mist-grey/60" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-moss-ink/50 block">Estimated ROI</span>
                    <span className="font-bold text-moss-green text-sm sm:text-base flex items-center gap-1">
                      <TrendingUp size={14} />
                      {activeSolution.roiPeriod}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {activeSolution.tags.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-white/80 border border-mist-grey text-[10px] font-semibold text-moss-ink/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Visual Showcase & Circular Action Trigger (5 cols) */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-[32px] overflow-hidden border border-mist-grey/80 shadow-md bg-moss-ink">
                <img
                  src={activeSolution.image}
                  alt={activeSolution.headline}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/80 via-moss-ink/20 to-transparent pointer-events-none" />

                {/* Floating Stat Pill on Image */}
                <div className="absolute top-4 left-4 bg-moss-ink/90 backdrop-blur-md text-fog px-3.5 py-2 rounded-2xl border border-white/20 shadow-lg flex items-center gap-2 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-pistachio" />
                  <span>{activeSolution.statCallout}</span>
                </div>

                {/* Circular Action Trigger: View System Specs */}
                <Link
                  to={activeSolution.specsUrl}
                  className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-pistachio text-moss-ink text-xs font-bold uppercase tracking-wider shadow-xl transition-all duration-200 transform group-hover:scale-105"
                  aria-label={`View system specifications for ${activeSolution.label}`}
                >
                  <span>View System Specs</span>
                  <div className="w-7 h-7 rounded-full bg-moss-ink text-fog flex items-center justify-center">
                    <ArrowUpRight size={13} className="text-pistachio" />
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsDock;

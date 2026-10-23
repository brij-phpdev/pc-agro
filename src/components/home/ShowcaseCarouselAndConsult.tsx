import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  Phone, 
  Sparkles,
  Zap,
  ShieldCheck
} from 'lucide-react';

interface ProjectCard {
  id: string;
  name: string;
  capacity: string;
  sector: string;
  location: string;
  commissioned: string;
  annualYield: string;
  image: string;
}

const flagshipProjects: ProjectCard[] = [
  {
    id: 'proj-1',
    name: 'Mahesh Edible Oil Industries Ltd',
    capacity: '4.6 MWp',
    sector: 'Heavy Industrial Edible Oil Refining',
    location: 'Agra, Uttar Pradesh',
    commissioned: 'Commissioned 2021',
    annualYield: '6.8M+ kWh/Yr',
    image: '/images/hero-solar-1.jpg'
  },
  {
    id: 'proj-2',
    name: 'Kisaan Steels PVT LTD',
    capacity: '1.0 MWp',
    sector: 'High-Tension Steel Rolling & Furnace',
    location: 'Ghaziabad, Uttar Pradesh',
    commissioned: 'Commissioned 2022',
    annualYield: '1.5M+ kWh/Yr',
    image: '/images/hero-solar-2.jpg'
  },
  {
    id: 'proj-3',
    name: 'Royal Polymers Footwear Cluster',
    capacity: '600 kWp',
    sector: 'Export Polymer Sole Manufacturing',
    location: 'Sikandra, Agra',
    commissioned: 'Commissioned 2020',
    annualYield: '900,000 kWh/Yr',
    image: '/images/hero-solar-1.jpg'
  },
  {
    id: 'proj-4',
    name: 'Agra Public School & College Campuses',
    capacity: '225 kWp',
    sector: 'Premier Educational & Research Campuses',
    location: 'Agra & Delhi NCR',
    commissioned: 'Commissioned 2023',
    annualYield: '330,000 kWh/Yr',
    image: '/images/hero-solar-2.jpg'
  },
  {
    id: 'proj-5',
    name: 'UltraTech & Rimjhim Ispat Open Access',
    capacity: 'Multi-MW HT',
    sector: 'High-Tension Heavy Utility Wheeling',
    location: 'Sikandrabad & Kanpur, UP',
    commissioned: 'Continuous Grid Offtake',
    annualYield: 'Direct Wheeling Offtake',
    image: '/images/hero-solar-2.jpg'
  }
];

export const ShowcaseCarouselAndConsult: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-chalk text-moss-ink border-b border-mist-grey/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Carousel Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pistachio/50 border border-pistachio text-moss-ink text-xs font-semibold uppercase tracking-wider">
              <Sun size={13} className="text-moss-green" />
              <span>COMMISSIONED INFRASTRUCTURE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-moss-ink tracking-tight leading-[1.12]">
              Flagship Projects.
              <br />
              <span className="text-moss-green">Verified Field Generation.</span>
            </h2>

            <p className="text-sm sm:text-base text-moss-ink/80 leading-relaxed">
              Explore multi-megawatt industrial installations, high-tension industrial sheds, educational institutions, and Open Access wheeling delivered by PC Agro.
            </p>
          </div>

          {/* Carousel Arrows + View All Link */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full bg-white hover:bg-fog text-moss-ink border border-mist-grey/80 shadow-xs flex items-center justify-center transition-all cursor-pointer"
              aria-label="Scroll projects left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="w-11 h-11 rounded-full bg-white hover:bg-fog text-moss-ink border border-mist-grey/80 shadow-xs flex items-center justify-center transition-all cursor-pointer"
              aria-label="Scroll projects right"
            >
              <ChevronRight size={18} />
            </button>
            <Link
              to="/projects"
              className="ml-2 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-moss-ink hover:bg-moss-green text-fog text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>All Projects</span>
              <ArrowUpRight size={14} className="text-pistachio" />
            </Link>
          </div>
        </div>

        {/* Horizontal Swipeable Project Cards Track */}
        <div 
          ref={carouselRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {flagshipProjects.map((p) => (
            <div
              key={p.id}
              className="min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] flex-1 snap-start rounded-[32px] bg-white border border-mist-grey/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Container with Capacity Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-moss-ink">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/90 via-moss-ink/30 to-transparent pointer-events-none" />
                
                {/* Floating Capacity Badge */}
                <div className="absolute top-4 left-4 bg-moss-ink/90 backdrop-blur-md text-fog px-3.5 py-1.5 rounded-full border border-white/20 shadow-md text-xs font-bold text-pistachio flex items-center gap-1.5">
                  <Zap size={12} className="text-pistachio" />
                  <span>{p.capacity}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-fog">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-pistachio block">
                    {p.sector}
                  </span>
                  <h3 className="text-lg font-bold font-display text-fog leading-snug line-clamp-1 mt-0.5">
                    {p.name}
                  </h3>
                </div>
              </div>

              {/* Card Meta & Action Link */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-moss-ink/75">
                    <MapPin size={13} className="text-moss-green flex-shrink-0" />
                    <span className="truncate">{p.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-moss-ink/75 justify-end">
                    <Calendar size={13} className="text-moss-green flex-shrink-0" />
                    <span>{p.commissioned}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-mist-grey/50 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-extrabold text-moss-green bg-fog px-2.5 py-1 rounded-full border border-mist-grey">
                    {p.annualYield}
                  </span>
                  <Link
                    to="/projects"
                    className="font-bold text-moss-ink group-hover:text-moss-green flex items-center gap-1 transition-colors"
                  >
                    <span>View Portfolio Case</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Closing Consultation Strip */}
        <div className="rounded-[40px] bg-moss-ink text-fog p-8 sm:p-12 border border-white/10 shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-moss-green/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-pistachio text-[11px] font-bold uppercase tracking-wider">
                <Sparkles size={12} className="text-pistachio" />
                <span>CONFIDENTIAL ENGINEERING CONSULTATION</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-fog tracking-tight">
                Ready to Engineer Your Clean Energy Independence?
              </h3>

              <p className="text-xs sm:text-sm text-mist-grey max-w-xl leading-relaxed">
                Connect directly with our senior solar engineers for a comprehensive site assessment, structural load evaluation, and guaranteed DISCOM payback analysis.
              </p>
            </div>

            {/* Right Action Hub (5 cols) */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="https://wa.me/917252000711?text=Hello%20PC%20Agro%2C%20I%20would%20like%20to%20schedule%20a%20site%20assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                <MessageCircle size={16} />
                <span>Direct WhatsApp: +91-7252000711</span>
              </a>

              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 text-fog font-semibold text-xs border border-white/20 transition-all text-center"
                >
                  <span>Request Callback</span>
                  <ArrowUpRight size={13} />
                </Link>

                <a
                  href="tel:+918077429207"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 text-fog font-semibold text-xs border border-white/20 transition-all text-center"
                >
                  <Phone size={13} className="text-pistachio" />
                  <span>Call +91-8077429207</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ShowcaseCarouselAndConsult;

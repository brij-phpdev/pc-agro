import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SolarMenuCategory {
  id: string;
  name: string;
  mainRoute: string;
  subHeader: string;
  subcategories: { name: string; route: string }[];
  spaceHeader: string;
  spaces: { name: string; route: string }[];
  featured: {
    title: string;
    image: string;
    route: string;
  };
}

const fallbackSvg = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='%23587C60'%3e%3crect width='400' height='300' fill='%23E8E7E1'/%3e%3cpath d='M200 80 L250 160 L150 160 Z' fill='%23587C60' opacity='0.8'/%3e%3ccircle cx='200' cy='60' r='20' fill='%23C0D3B9'/%3e%3ctext x='50%25' y='80%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%2317251F'%3ePC AGRO SOLAR%3c/text%3e%3c/svg%3e";

const solarCategories: SolarMenuCategory[] = [
  {
    id: 'residential',
    name: 'RESIDENTIAL SOLAR',
    mainRoute: '/solutions/residential',
    subHeader: 'ROOFTOP SOLUTIONS',
    subcategories: [
      { name: 'Grid-Tied Rooftop Solar', route: '/solutions/residential' },
      { name: 'Hybrid Solar with LiFePO4 Storage', route: '/solutions/residential' },
      { name: 'Bungalow & Villa Installations', route: '/solutions/residential' },
      { name: 'Housing Society Common Area Systems', route: '/solutions/residential' },
      { name: 'Net Metering Grid Synchronization', route: '/solutions/residential' },
    ],
    spaceHeader: 'PROPERTY TYPES',
    spaces: [
      { name: 'Independent Bungalows & Villas', route: '/solutions/residential' },
      { name: 'Row Houses & Duplexes', route: '/solutions/residential' },
      { name: 'Apartments & Gated Communities', route: '/solutions/residential' },
      { name: 'Farmhouses & Rural Estates', route: '/solutions/residential' },
      { name: 'Residential Rooftops (RCC & Tiled)', route: '/solutions/residential' },
    ],
    featured: {
      title: 'RESIDENTIAL HYBRID SOLAR',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
      route: '/solutions/residential'
    }
  },
  {
    id: 'commercial',
    name: 'COMMERCIAL SOLAR',
    mainRoute: '/solutions/commercial',
    subHeader: 'BUSINESS & OFFICE SOLUTIONS',
    subcategories: [
      { name: 'Office Buildings & Corporate Hubs', route: '/solutions/commercial' },
      { name: 'Retail Showrooms & Shopping Centers', route: '/solutions/commercial' },
      { name: 'Solar Shade Canopies & Carports', route: '/solutions/commercial' },
      { name: 'Daytime Peak-Tariff Offset', route: '/solutions/commercial' },
      { name: 'Accelerated Depreciation (AD) Systems', route: '/solutions/commercial' },
    ],
    spaceHeader: 'COMMERCIAL APPLICATIONS',
    spaces: [
      { name: 'Commercial Office Complexes', route: '/solutions/commercial' },
      { name: 'Retail & Wholesale Spaces', route: '/solutions/commercial' },
      { name: 'Hotels, Resorts & Hospitality', route: '/solutions/commercial' },
      { name: 'Diagnostic Centers & Clinics', route: '/solutions/commercial' },
      { name: 'Commercial EV Charging Carports', route: '/solutions/commercial' },
    ],
    featured: {
      title: 'COMMERCIAL SOLAR PERGOLA',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
      route: '/solutions/commercial'
    }
  },
  {
    id: 'industrial',
    name: 'INDUSTRIAL SOLAR',
    mainRoute: '/solutions/industrial',
    subHeader: 'HEAVY MANUFACTURING SOLUTIONS',
    subcategories: [
      { name: 'Factory Metal-Sheet Rooftop Solar', route: '/solutions/industrial' },
      { name: 'Warehouse & Logistics PV Arrays', route: '/solutions/industrial' },
      { name: 'High-Tension (HT) Net Metering', route: '/solutions/industrial' },
      { name: 'Megawatt-Scale Captive Solar Plants', route: '/solutions/industrial' },
      { name: 'DG Synchronization & Zero-Export Control', route: '/solutions/industrial' },
    ],
    spaceHeader: 'INDUSTRIAL APPLICATIONS',
    spaces: [
      { name: 'Factories & Manufacturing Units', route: '/solutions/industrial' },
      { name: 'Logistics Parks & Cold Storages', route: '/solutions/industrial' },
      { name: 'Textile & Chemical Plants', route: '/solutions/industrial' },
      { name: 'Engineering & Fabrication Sheds', route: '/solutions/industrial' },
      { name: 'Heavy Machinery Operating Facilities', route: '/solutions/industrial' },
    ],
    featured: {
      title: '500 KWP INDUSTRIAL ROOFTOP',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      route: '/solutions/industrial'
    }
  },
  {
    id: 'institutional',
    name: 'INSTITUTIONAL SOLAR',
    mainRoute: '/solutions/institutional',
    subHeader: 'CAMPUS & INSTITUTION SOLUTIONS',
    subcategories: [
      { name: 'Universities & Higher Education', route: '/solutions/institutional' },
      { name: 'Schools & Student Hostels', route: '/solutions/institutional' },
      { name: 'Hospitals & Healthcare Facilities', route: '/solutions/institutional' },
      { name: 'Government & Public Campuses', route: '/solutions/institutional' },
      { name: 'Green Campus Demonstration Stations', route: '/solutions/institutional' },
    ],
    spaceHeader: 'INSTITUTIONAL APPLICATIONS',
    spaces: [
      { name: 'Colleges & Educational Campuses', route: '/solutions/institutional' },
      { name: 'Multi-Specialty Hospitals', route: '/solutions/institutional' },
      { name: 'Research Laboratories', route: '/solutions/institutional' },
      { name: 'Cold Storages & Agri-Centres', route: '/solutions/institutional' },
      { name: 'Community Halls & Public Institutions', route: '/solutions/institutional' },
    ],
    featured: {
      title: '100 KWP CAMPUS MICROGRID',
      image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80',
      route: '/solutions/institutional'
    }
  },
  {
    id: 'hardware',
    name: 'SOLAR HARDWARE & BOS',
    mainRoute: '/products-list',
    subHeader: 'CERTIFIED PRODUCTS & COMPONENTS',
    subcategories: [
      { name: 'TopCon Bifacial Modules (550W+)', route: '/products-list?category=modules' },
      { name: 'Mono PERC All-Black Modules (450W)', route: '/products-list?category=modules' },
      { name: 'Three-Phase String Inverters (50kW)', route: '/products-list?category=inverters' },
      { name: 'Smart Hybrid Storage Inverters (10kW)', route: '/products-list?category=inverters' },
      { name: 'Modular LiFePO4 Lithium Batteries (15kWh)', route: '/products-list?category=batteries' },
      { name: 'Aluminum Mounting Structures & BOS', route: '/products-list?category=accessories' },
    ],
    spaceHeader: 'TECHNICAL CATEGORIES',
    spaces: [
      { name: 'Solar PV Modules (N-Type & Mono)', route: '/products-list?category=modules' },
      { name: 'Grid-Tied & Hybrid Inverters', route: '/products-list?category=inverters' },
      { name: 'Energy Storage & Battery Systems', route: '/products-list?category=batteries' },
      { name: 'DC Cables, Connectors & Fuses', route: '/products-list?category=accessories' },
      { name: 'Mounting Racks & Rail Clamps', route: '/products-list?category=accessories' },
    ],
    featured: {
      title: 'TOPCON 550W+ BIFACIAL',
      image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
      route: '/product/topcon-bifacial-550w'
    }
  },
  {
    id: 'systems',
    name: 'SYSTEM TYPES',
    mainRoute: '/solutions/system-types',
    subHeader: 'SYSTEM ARCHITECTURE',
    subcategories: [
      { name: 'On-Grid Solar Systems (Net Metering)', route: '/solutions/system-types#on-grid' },
      { name: 'Off-Grid Solar Systems (Autonomous)', route: '/solutions/system-types#off-grid' },
      { name: 'Hybrid Solar Systems (Grid + Battery)', route: '/solutions/system-types#hybrid' },
      { name: 'System Selection Guide & Comparison', route: '/solutions/system-types' },
    ],
    spaceHeader: 'SELECTION CRITERIA',
    spaces: [
      { name: 'Grid-Connected with Export Credits', route: '/solutions/system-types#on-grid' },
      { name: 'Remote Areas with Battery Storage', route: '/solutions/system-types#off-grid' },
      { name: 'Zero-Downtime UPS Hybrid Configurations', route: '/solutions/system-types#hybrid' },
      { name: 'Site Shading & Tilt Angle Optimization', route: '/solutions/system-types' },
    ],
    featured: {
      title: 'HYBRID STORAGE INVERTER',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      route: '/product/hybrid-inverter-10kw'
    }
  }
];

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('residential');

  if (!isOpen) return null;

  const currentCategory = solarCategories.find(c => c.id === activeCategoryId) || solarCategories[0];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#17251F]/70 backdrop-blur-xs transition-opacity duration-300 z-40 pointer-events-auto"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Pure White MegaMenu Panel with Curved Bottom (Reference: media_1792409908612_3ac011e2.png) */}
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-white text-moss-ink shadow-2xl rounded-b-[48px] sm:rounded-b-[56px] border-b border-mist-grey/50 pointer-events-auto animate-slideDown overflow-hidden"
        onMouseLeave={onClose}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-28 pb-14">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* COLUMN 1: Categories Rail (Left Column) */}
            <div className="col-span-12 md:col-span-3 flex flex-col justify-between space-y-6">
              <nav className="space-y-4">
                {solarCategories.map((cat) => {
                  const isActive = cat.id === activeCategoryId;
                  return (
                    <div key={cat.id} className="relative">
                      <button
                        type="button"
                        onClick={() => setActiveCategoryId(cat.id)}
                        onMouseEnter={() => setActiveCategoryId(cat.id)}
                        className={`text-left text-xs sm:text-[13px] tracking-wider uppercase font-semibold transition-all duration-200 block ${
                          isActive
                            ? 'text-moss-ink font-bold'
                            : 'text-mist-grey-600 hover:text-moss-ink'
                        }`}
                      >
                        <span className="relative pb-1 block">
                          {cat.name}
                          {/* Active Underline Bar */}
                          {isActive && (
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-moss-ink rounded-full transition-all duration-300" />
                          )}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </nav>

              {/* Bottom Pill: Explore All Solutions ↗ */}
              <div className="pt-6">
                <Link
                  to="/solutions"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-mist-grey/80 hover:border-moss-ink text-moss-ink text-xs font-medium transition-all duration-200 group bg-white shadow-2xs"
                >
                  <span>Explore All Solutions</span>
                  <ArrowUpRight size={13} className="text-moss-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* COLUMN 2: Subcategories (Middle-Left) */}
            <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-[11px] font-semibold tracking-wider uppercase text-mist-grey-600 mb-4">
                  {currentCategory.subHeader}
                </h4>
                <ul className="space-y-3">
                  {currentCategory.subcategories.map((sub, idx) => (
                    <li key={idx}>
                      <Link
                        to={sub.route}
                        onClick={onClose}
                        className="text-xs sm:text-sm text-moss-ink hover:text-moss-green transition-colors block py-0.5 hover:translate-x-1 transition-transform"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Pill: View All in [Category] ↗ */}
              <div className="pt-4">
                <Link
                  to={currentCategory.mainRoute}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-mist-grey/80 hover:border-moss-ink text-moss-ink text-xs font-medium transition-all duration-200 group bg-white shadow-2xs"
                >
                  <span>View All in {currentCategory.name.charAt(0) + currentCategory.name.slice(1).toLowerCase()}</span>
                  <ArrowUpRight size={13} className="text-moss-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* COLUMN 3: Applications by Space / Property (Middle-Right) */}
            <div className="col-span-12 sm:col-span-6 md:col-span-3 space-y-4">
              <h4 className="text-[11px] font-semibold tracking-wider uppercase text-mist-grey-600 mb-4">
                {currentCategory.spaceHeader}
              </h4>
              <ul className="space-y-3">
                {currentCategory.spaces.map((sp, idx) => (
                  <li key={idx}>
                    <Link
                      to={sp.route}
                      onClick={onClose}
                      className="text-xs sm:text-sm text-moss-ink hover:text-moss-green transition-colors block py-0.5 hover:translate-x-1 transition-transform"
                    >
                      {sp.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4: FEATURED HIGHLIGHT (Right Column Featured Card) */}
            <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-end space-y-4">
              <div className="w-full max-w-[240px]">
                <h4 className="text-[11px] font-semibold tracking-wider uppercase text-mist-grey-600 mb-4 text-center md:text-left">
                  FEATURED HIGHLIGHT
                </h4>

                <Link
                  to={currentCategory.featured.route}
                  onClick={onClose}
                  className="group block rounded-[24px] bg-white border border-mist-grey/60 p-6 shadow-sm hover:shadow-float transition-all duration-300 text-center"
                >
                  <div className="aspect-square w-full rounded-2xl overflow-hidden bg-fog flex items-center justify-center p-2 mb-4 relative border border-mist-grey/40">
                    <img
                      src={currentCategory.featured.image}
                      alt={currentCategory.featured.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = fallbackSvg;
                      }}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h5 className="text-xs font-bold uppercase tracking-wider text-moss-ink group-hover:text-moss-green transition-colors">
                    {currentCategory.featured.title}
                  </h5>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;

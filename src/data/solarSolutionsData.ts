export interface SolarSolution {
  id: string;
  slug: string;
  title: string;
  category: string;
  eyebrow: string;
  headline: string;
  description: string;
  benefits: string[];
  recommendedCapacity: string;
  applications: string[];
  systemTypes: string[];
  image: string;
  featuredBadge?: string;
}

export const solarSolutionsData: SolarSolution[] = [
  {
    id: 'sol-residential',
    slug: 'residential-solar',
    title: 'Residential Solar',
    category: 'Rooftop Solar',
    eyebrow: 'RESIDENTIAL SOLUTIONS',
    headline: 'Make Your Rooftop Work Smarter.',
    description: 'Explore rooftop solar options designed around your household electricity use, available roof space and grid requirements. Cut monthly utility bills up to 90%, gain power security, and enjoy clean energy year-round.',
    recommendedCapacity: '3 kW to 15 kW',
    benefits: [
      'Significant reduction in monthly domestic electricity bills up to 90%',
      'Net metering connectivity with utility grid for power export credits',
      'Optional lithium battery backup for load shedding protection',
      'Tier-1 high efficiency solar modules with 25-year performance warranty',
      'Real-time mobile app monitoring of daily solar generation'
    ],
    applications: [
      'Independent villas and bungalows',
      'Row houses and duplex residences',
      'Housing societies and residential apartments',
      'Farmhouses and rural homesteads'
    ],
    systemTypes: ['On-Grid', 'Hybrid with LiFePO4 Battery'],
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80',
    featuredBadge: 'Most Popular for Homes'
  },
  {
    id: 'sol-commercial',
    slug: 'commercial-solar',
    title: 'Commercial Solar',
    category: 'Business & Office',
    eyebrow: 'COMMERCIAL SOLUTIONS',
    headline: 'Smarter Energy for Growing Businesses.',
    description: 'Evaluate solar solutions for offices, shops, commercial buildings and business facilities looking to manage their electricity consumption, hedge against rising commercial power tariffs, and meet ESG goals.',
    recommendedCapacity: '25 kW to 200 kW',
    benefits: [
      'Drastically reduce peak daytime commercial tariff expenses',
      'Accelerated depreciation (40%) tax benefits for commercial enterprises',
      'Fast capital payback within 3 to 5 years',
      'Robust three-phase string inverters with smart energy management',
      'Customized structural engineering for tin sheds, RCC roofs and carports'
    ],
    applications: [
      'Corporate office parks and headquarters',
      'Retail malls, showrooms and supermarkets',
      'Hotels, resorts and convention centers',
      'Hospitals and healthcare clinics'
    ],
    systemTypes: ['On-Grid Three-Phase', 'Hybrid Energy Storage'],
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80',
    featuredBadge: 'High ROI for Business'
  },
  {
    id: 'sol-industrial',
    slug: 'industrial-solar',
    title: 'Industrial Solar',
    category: 'Manufacturing & Plants',
    eyebrow: 'INDUSTRIAL SCALE',
    headline: 'Energy Solutions for Industry.',
    description: 'Explore high-yield solar installations for factories, steel units, footwear plants, and warehouses. Engineered around operational power curves, high-tension lines, and maximum roof utility.',
    recommendedCapacity: '100 kW to 5 MW+',
    benefits: [
      'Substantial reduction in levelized cost of electricity (LCOE)',
      'Protection against industrial maximum demand (MD) charges',
      'Heavy-duty hot-dip galvanized mounting structures engineered for high wind loads',
      'High efficiency TopCon Bifacial modules generating power from both sides',
      'Dedicated SCADA monitoring, remote telemetry and preventive O&M'
    ],
    applications: [
      'Oil mills & food processing plants (e.g. Mahesh Edible Oil 4.6 MWp)',
      'Steel plants & rolling mills (e.g. Kisaan Steels 1.0 MWp)',
      'Footwear & leather manufacturing hubs (e.g. Royal Polymers 600 kWp, Dawar)',
      'Textile & packaging factories (e.g. Sunny Texcone 500 kWp)'
    ],
    systemTypes: ['High Voltage On-Grid', 'Captive Generation'],
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
    featuredBadge: 'Flagship 4.6 MWp Scale'
  },
  {
    id: 'sol-open-access',
    slug: 'open-access',
    title: 'Open Access Solar',
    category: 'Megawatt Utility Wheeling',
    eyebrow: 'HIGH-TENSION INDUSTRIAL POWER',
    headline: 'Clean Energy Wheeling for High-Demand Industries.',
    description: 'Open Access empowers large industrial and commercial consumers to procure solar power directly from utility-scale solar farms over state and national grids, avoiding on-site rooftop space limits and reducing tariff costs by up to 40%.',
    recommendedCapacity: '1 MW to 50 MW+',
    benefits: [
      'Tariff arbitrage saving ₹2.50 to ₹4.00 per unit compared to DISCOM rates',
      'Zero on-site rooftop space required — power wheeled via grid infrastructure',
      'Flexible models: Group Captive (Captive equity model) or Third-Party PPA',
      'Long-term tariff certainty hedged against annual grid price hikes',
      'Proven execution with marquee leaders like Ultratech Cement and Rimjhim Ispat'
    ],
    applications: [
      'Cement manufacturing plants (e.g. Ultratech Cement Sikandrabad)',
      'Steel melting and rolling units (e.g. Rimjhim Ispat Kanpur)',
      'Continuous-run dairy processing (e.g. Umang Dairy Gajraula)',
      'Large edible oil refineries & engineering units'
    ],
    systemTypes: ['Group Captive (26% Equity)', 'Third-Party PPA', 'Bilateral Banking'],
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    featuredBadge: 'Zero Rooftop Needed'
  },
  {
    id: 'sol-institutional',
    slug: 'institutional-solar',
    title: 'Institutional & Cold Storage',
    category: 'Campuses & Cold Chains',
    eyebrow: 'SPECIALIZED APPLICATIONS',
    headline: 'Powering Schools, Universities & Cold Storage.',
    description: 'Dedicated solar microgrids and cold storage power systems for educational campuses, research institutes, and temperature-critical agricultural cold storage facilities.',
    recommendedCapacity: '50 kW to 500 kW',
    benefits: [
      'Guaranteed power reliability for temperature-critical cold storage facilities',
      'Substantial electricity bill reduction for campuses operating during daytime peaks',
      'Zero diesel generator fuel expenditure during sunny outages',
      'Demonstrated sustainability leadership and green institution accreditations',
      'Installed at premier schools like Agra Public School and Shanti Gyan International'
    ],
    applications: [
      'Schools, colleges and university campuses',
      'Agro-cold storage (e.g. Amar Cold Storage, B. Harnam Singh, Jainsons Tundla)',
      'Hospitals, diagnostic labs and medical colleges',
      'Government and administrative complexes'
    ],
    systemTypes: ['On-Grid', 'Hybrid Microgrid with Backup'],
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=1000&q=80',
    featuredBadge: 'Agri-Chain & Education'
  }
];

export interface SystemTypeInfo {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  keyFeature: string;
  bestFor: string;
}

export const systemTypesData: SystemTypeInfo[] = [
  {
    id: 'type-ongrid',
    name: 'On-Grid Solar',
    slug: 'on-grid',
    tagline: 'Grid-Connected Efficiency',
    description: 'Connected directly to the utility grid with bi-directional net metering. Surplus electricity generated during sunny hours is exported back to the grid for bill credits.',
    keyFeature: 'Lowest initial capital investment and fastest return on investment (ROI in 3–4 years).',
    bestFor: 'Properties with reliable grid electricity seeking maximum bill reduction.'
  },
  {
    id: 'type-offgrid',
    name: 'Off-Grid Solar',
    slug: 'off-grid',
    tagline: 'Complete Energy Independence',
    description: 'Designed to operate completely autonomously from the utility grid using dedicated solar battery banks (Lithium LiFePO4 or Tubular Lead-Acid).',
    keyFeature: '100% self-reliance with zero dependence on local grid infrastructure.',
    bestFor: 'Remote areas, farms, agricultural pumps, and sites with frequent power cuts.'
  },
  {
    id: 'type-hybrid',
    name: 'Hybrid Solar',
    slug: 'hybrid',
    tagline: 'The Best of Both Worlds',
    description: 'Combines grid connectivity with battery storage. Powers your loads via solar first, stores excess in batteries, and exports any remaining power to the grid.',
    keyFeature: 'Seamless uninterrupted power during blackouts plus net-metering cost savings.',
    bestFor: 'Homes, clinics, and businesses that need both low bills and 24/7 power backup.'
  },
  {
    id: 'type-openaccess',
    name: 'Open Access Solar',
    slug: 'open-access',
    tagline: 'Megawatt Wheeling Power',
    description: 'Procures bulk green electricity generated off-site from large solar farms, wheeled across transmission lines directly to high-tension industrial consumers.',
    keyFeature: 'Save 40%+ on DISCOM HT tariffs with zero on-site roof space constraints.',
    bestFor: 'Heavy energy consumers (contract demand > 1 MW), steel, cement, and chemical plants.'
  }
];

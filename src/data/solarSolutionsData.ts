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
    description: 'Explore rooftop solar options designed around your household electricity use, available roof space and grid requirements. Cut monthly utility bills, gain power security, and enjoy clean energy year-round.',
    recommendedCapacity: '3 kW to 15 kW',
    benefits: [
      'Significant reduction in monthly domestic electricity bills',
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
      'Accelerated depreciation tax benefits for commercial enterprises',
      'Enhanced green building certification and corporate sustainability',
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
    description: 'Explore solar installations for factories, warehouses and manufacturing facilities, with planning based on operational loads, power quality requirements, and available installation space.',
    recommendedCapacity: '100 kW to 2 MW+',
    benefits: [
      'Levelized cost of electricity (LCOE) substantially lower than grid tariffs',
      'Protection against industrial demand charges and peak penalty fees',
      'Heavy-duty hot-dip galvanized mounting structures engineered for high wind loads',
      'High efficiency TopCon Bifacial modules generating power from both sides',
      'Dedicated SCADA monitoring, remote telemetry and preventive maintenance'
    ],
    applications: [
      'Textile and manufacturing plants',
      'Automotive and machinery workshops',
      'Food processing and chemical units',
      'Logistics warehouses and distribution hubs'
    ],
    systemTypes: ['High Voltage On-Grid', 'Captive Generation'],
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
    featuredBadge: 'Maximum MW Scale'
  },
  {
    id: 'sol-institutional',
    slug: 'institutional-solar',
    title: 'Institutional Solar',
    category: 'Campuses & Cold Storage',
    eyebrow: 'INSTITUTIONAL APPLICATIONS',
    headline: 'Supporting Institutions with Solar.',
    description: 'Solar options for schools, educational campuses, cold storage facilities and other suitable institutional or specialised applications where reliability and operational continuity are vital.',
    recommendedCapacity: '50 kW to 500 kW',
    benefits: [
      'Reliable power for temperature-critical cold storage and laboratories',
      'Inspiring sustainability education for schools and university campuses',
      'Long-term hedge against educational and municipal operating cost inflation',
      'Zero-emission campus footprint with prominent environmental credentials',
      'Tailored financing and OPEX/CAPEX consultation'
    ],
    applications: [
      'Schools, colleges and university campuses',
      'Agro-cold storage and perishable warehousing',
      'Government and municipal administrative complexes',
      'Sports complexes and research centers'
    ],
    systemTypes: ['On-Grid', 'Hybrid Microgrid'],
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=1000&q=80',
    featuredBadge: 'Critical Operations'
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
  }
];

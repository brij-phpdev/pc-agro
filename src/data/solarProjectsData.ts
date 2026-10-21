import { ProjectSlide } from '../types';

export interface VerifiedProjectItem {
  id: string;
  name: string;
  capacity: string;
  location: string;
  category: 'Heavy Industry' | 'Footwear & Leather' | 'Colleges & Institutions' | 'Open Access' | 'Cold Storage & Agro';
  description?: string;
}

export const heavyIndustryProjects: VerifiedProjectItem[] = [
  { id: 'hi-1', name: 'Mahesh Edible Oil Industries', capacity: '4.6 MWp', location: 'Agra, UP', category: 'Heavy Industry', description: 'Flagship high-yield industrial rooftop deployment powering edible oil processing.' },
  { id: 'hi-2', name: 'Mahesh Edible Oil Corporation Pvt Ltd', capacity: '2.0 MWp', location: 'Agra, UP', category: 'Heavy Industry', description: 'Large industrial rooftop solar array with grid synchronization.' },
  { id: 'hi-3', name: 'Kisaan Steels PVT LTD', capacity: '1.0 MWp', location: 'Ghaziabad, UP', category: 'Heavy Industry', description: 'Megawatt-scale industrial solar installation offsetting high-tension furnace loads.' },
  { id: 'hi-4', name: 'Mahesh Edible Oil Mills Pvt Ltd', capacity: '600 kWp', location: 'Agra, UP', category: 'Heavy Industry', description: 'Continuous daylight offset system for industrial seed crushing.' },
  { id: 'hi-5', name: 'Sunny Texcone Pvt Ltd', capacity: '500 kWp', location: 'Hapur - Ghaziabad, UP', category: 'Heavy Industry', description: 'High-efficiency industrial rooftop array for textile processing.' },
  { id: 'hi-6', name: 'Dabra Agro Pvt Ltd', capacity: '500 kWp', location: 'Dabra - Gwalior, MP', category: 'Heavy Industry', description: 'Agro-processing solar power infrastructure with high-durability mounting.' },
  { id: 'hi-7', name: 'Kamta Nath Food Products Pvt Ltd', capacity: '432 kWp', location: 'Dabra - Gwalior, MP', category: 'Heavy Industry', description: 'Food processing facility solar array lowering operating energy costs.' },
  { id: 'hi-8', name: 'Kaysons Export', capacity: '400 kWp', location: 'Artoni - Agra, UP', category: 'Heavy Industry', description: 'Export manufacturing plant solar installation with multi-MPPT inverters.' },
  { id: 'hi-9', name: 'Paras Steels Pvt Ltd', capacity: '400 kWp', location: 'Hapur, UP', category: 'Heavy Industry', description: 'Industrial metal fabrication facility rooftop solar power plant.' },
  { id: 'hi-10', name: 'Atul Group of Companies', capacity: '200 kWp', location: 'Nunhai - Agra, UP', category: 'Heavy Industry', description: 'Pumping & engineering manufacturing plant solar integration.' },
];

export const footwearProjects: VerifiedProjectItem[] = [
  { id: 'fw-1', name: 'Royal Polymers', capacity: '600 kWp', location: 'Sikandra, Agra', category: 'Footwear & Leather', description: 'Major solar array for footwear polymer sole manufacturing.' },
  { id: 'fw-2', name: 'Neelson Overseas', capacity: '250 kWp', location: 'Agra, UP', category: 'Footwear & Leather', description: 'Footwear export manufacturing facility rooftop installation.' },
  { id: 'fw-3', name: 'Raj Overseas', capacity: '250 kWp', location: 'Artoni, Agra', category: 'Footwear & Leather', description: 'Footwear manufacturing unit with high-yield mono PERC panels.' },
  { id: 'fw-4', name: 'Shroff Group', capacity: '150 kWp', location: 'Agra, UP', category: 'Footwear & Leather', description: 'Footwear production unit rooftop solar plant.' },
  { id: 'fw-5', name: 'Dawar Footwear', capacity: '100 kWp', location: 'Agra, UP', category: 'Footwear & Leather', description: 'Renowned international footwear exporter rooftop solar array.' },
];

export const institutionalProjects: VerifiedProjectItem[] = [
  { id: 'inst-1', name: 'Agra Public School', capacity: '125 kWp', location: 'Agra, UP', category: 'Colleges & Institutions', description: 'Large school campus rooftop solar installation offsetting classroom and lab power.' },
  { id: 'inst-2', name: 'Shanti Gyan International School', capacity: '100 kWp', location: 'Dwarka - New Delhi', category: 'Colleges & Institutions', description: 'Premier Delhi school campus solar project with interactive generation monitoring.' },
  { id: 'inst-3', name: 'Prelude Public School', capacity: '75 kWp', location: 'Dayalbagh - Agra', category: 'Colleges & Institutions', description: 'Educational facility clean power system with zero-export grid safety.' },
  { id: 'inst-4', name: 'SSV College', capacity: '70 kWp', location: 'Hapur, UP', category: 'Colleges & Institutions', description: 'Higher education college campus rooftop solar array.' },
  { id: 'inst-5', name: 'St. Anthony’s Girls Inter College', capacity: '50 kWp', location: 'Agra, UP', category: 'Colleges & Institutions', description: 'Historic institution campus solar adoption with net-metering.' },
  { id: 'inst-6', name: 'CF Andrews School', capacity: '30 kWp', location: 'Balkeshwar - Agra', category: 'Colleges & Institutions', description: 'School rooftop solar array reducing institutional electricity bills.' },
  { id: 'inst-7', name: 'Holy Public School', capacity: '25 kWp', location: 'Sikandra, Agra', category: 'Colleges & Institutions', description: 'Campus green power generation array.' },
  { id: 'inst-8', name: 'St. Mary’s Inter College', capacity: '25 kWp', location: 'Agra Region', category: 'Colleges & Institutions', description: 'Institution rooftop solar plant.' },
];

export const openAccessClients: VerifiedProjectItem[] = [
  { id: 'oa-1', name: 'Ultratech Cement', capacity: 'High Tension Wheeling', location: 'Sikandrabad, UP', category: 'Open Access', description: 'Open Access solar power procurement for heavy cement manufacturing.' },
  { id: 'oa-2', name: 'Rimjhim Ispat', capacity: 'High Tension Wheeling', location: 'Kanpur, UP', category: 'Open Access', description: 'Open Access green power wheeling for large stainless steel production.' },
  { id: 'oa-3', name: 'Umang Dairy', capacity: 'Utility Grid Wheeling', location: 'Gajraula, UP', category: 'Open Access', description: 'Clean solar power procurement for continuous dairy processing.' },
  { id: 'oa-4', name: 'Atul Engineering Udyog', capacity: 'High Tension Wheeling', location: 'Agra, UP', category: 'Open Access', description: 'Industrial open access supply for precision engineering manufacturing.' },
  { id: 'oa-5', name: 'Mahesh Edible Oil Industries Ltd', capacity: 'Multi-MW Solar Supply', location: 'Agra, UP', category: 'Open Access', description: 'Open access green energy procurement supplementing rooftop installations.' },
];

export const coldStorageClients: VerifiedProjectItem[] = [
  { id: 'cs-1', name: 'Amar Cold Storage', capacity: 'Solar Cold Chain', location: 'Nabha, Punjab', category: 'Cold Storage & Agro', description: 'Solar integration for temperature-sensitive agri cold storage.' },
  { id: 'cs-2', name: 'B. Harnam Singh Coldstorage', capacity: 'Agri Cold Storage', location: 'Hoshiarpur, Punjab', category: 'Cold Storage & Agro', description: 'Continuous solar power reducing refrigeration energy costs.' },
  { id: 'cs-3', name: 'Jainsons Ice & Cold Storage', capacity: 'Industrial Cold Storage', location: 'Tundla - Firozabad, UP', category: 'Cold Storage & Agro', description: 'Hybrid solar power system for uninterrupted potato and produce storage.' },
];

export interface RegionPresenceItem {
  region: string;
  clients: string[];
}

export const regionalPresenceData: RegionPresenceItem[] = [
  {
    region: 'Agra & Western UP',
    clients: [
      'Mahesh Edible Oil Industries Ltd – Agra',
      'Achal Amit & Company – Agra',
      'Atul Pumps Pvt Ltd – Agra',
      'Ritu Tech n Build – Agra',
      'Royal Polymers – Agra',
      'Shroff Polytech Pvt Ltd – Agra',
      'S N Milk Pvt Ltd – Sasni, Agra',
      'Neelson Overseas – Agra',
      'Guide Footwear Pvt Ltd – Agra',
      'Raj Overseas – Agra'
    ]
  },
  {
    region: 'Firozabad & Tundla',
    clients: [
      'Hardayal Group – Firozabad',
      'Jainsons Ice and Cold storage – Tundla, Firozabad'
    ]
  },
  {
    region: 'Punjab & Haryana Region',
    clients: [
      'Amar Cold storage – Nabha, Punjab',
      'Radiance Print Pack Pvt Ltd – Sonipat, Haryana',
      'B. Harnam Singh Coldstorage – Hoshiarpur, Punjab'
    ]
  },
  {
    region: 'Ghaziabad & Hapur Region',
    clients: [
      'Kisaan Steels Pvt Ltd – Ghaziabad',
      'Eureka Polygems – Ghaziabad',
      'Sunny Texcone Pvt Ltd – Hapur',
      'Nova Foam Works Pvt Ltd – Ghaziabad'
    ]
  },
  {
    region: 'Noida & Delhi NCR',
    clients: [
      'L.G. Electronics India Pvt Ltd – Greater Noida',
      'Ramson Graphics – Sec 5, Noida',
      'Bajrang Packers – Sec 7, Noida',
      'Shanti Gyan International School – Dwarka, New Delhi'
    ]
  },
  {
    region: 'Chhattisgarh & Madhya Pradesh',
    clients: [
      'Salasar Balaji Agrotech – Raipur, CG',
      'Shri Jagdamba Rice Mill – Raipur, CG',
      'Shyam Rice Mills – Bilaspur, CG',
      'Dabra Agro Pvt Ltd – Gwalior, MP',
      'Kamtanath Food Products – Gwalior, MP'
    ]
  }
];

export const solarProjectsData: ProjectSlide[] = [
  {
    id: 'proj-mahesh-edible-oil',
    title: '4.6 MWp Mahesh Edible Oil Industries',
    tagline: 'Flagship multi-megawatt industrial solar deployment in Agra.',
    sector: 'Heavy Industry',
    capacity: '4.6 MWp',
    location: 'Agra, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1600&q=80',
    description: 'A 4.6 MWp flagship industrial rooftop and ground-synchronized solar installation deployed across extensive factory sheds. Engineered to offset peak daytime power consumption for edible oil extraction and refining with automated cloud telemetry.',
    highlights: [
      '4.6 MWp total capacity generating over 6.8 million kWh clean energy annually',
      'High-durability structural mounting engineered for severe industrial conditions',
      'Centralized and multi-MPPT high-capacity industrial inverter stations',
      'Connected to high-voltage industrial HT grid with bi-directional net metering'
    ],
    hotspots: [
      {
        productId: 'prod-topcon-550w',
        productSlug: 'topcon-bifacial-550w',
        productName: 'High-Efficiency Tier-1 Modules',
        categoryName: 'Solar Modules',
        x: 42,
        y: 36
      },
      {
        productId: 'prod-inverter-50kw',
        productSlug: 'commercial-on-grid-inverter-50kw',
        productName: 'Kehua Tech Industrial Inverters',
        categoryName: 'Inverters',
        x: 76,
        y: 64
      },
      {
        productId: 'prod-mounting-structure',
        productSlug: 'mounting-structure-kit',
        productName: 'Hot-Dip Galvanized Racking Array',
        categoryName: 'Mounting & BOS',
        x: 24,
        y: 54
      }
    ]
  },
  {
    id: 'proj-kisaan-steels',
    title: '1.0 MWp Kissan Steels PVT LTD',
    tagline: 'Megawatt-scale industrial solar power offsetting steel rolling furnace loads.',
    sector: 'Heavy Industry',
    capacity: '1.0 MWp',
    location: 'Ghaziabad, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80',
    description: '1.0 MWp high-performance rooftop solar plant installed on industrial steel processing warehouses. Designed for severe dust environments with automated cleaning protocols and high-tension substation synchronization.',
    highlights: [
      '1.0 MWp DC capacity offsetting massive daytime induction and rolling loads',
      'Heavy-duty non-penetrative clamp mounting across curved tin shed roofs',
      'Multi-channel string inverters with integrated arc-fault circuit interrupters (AFCI)',
      'Substantial reduction in industrial maximum demand (MD) penalty tariffs'
    ],
    hotspots: [
      {
        productId: 'prod-topcon-550w',
        productSlug: 'topcon-bifacial-550w',
        productName: 'Tier-1 Mono PERC & TopCon Modules',
        categoryName: 'Solar Modules',
        x: 50,
        y: 40
      },
      {
        productId: 'prod-inverter-50kw',
        productSlug: 'commercial-on-grid-inverter-50kw',
        productName: 'Kehua Tech High-Yield Inverters',
        categoryName: 'Inverters',
        x: 75,
        y: 55
      }
    ]
  },
  {
    id: 'proj-royal-polymers',
    title: '600 kWp Royal Polymers',
    tagline: 'Leading footwear industry polymer manufacturing solar installation.',
    sector: 'Footwear & Leather',
    capacity: '600 kWp',
    location: 'Sikandra, Agra',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1600&q=80',
    description: '600 kWp rooftop solar plant deployed at Royal Polymers in Agra’s Sikandra industrial area. Generates stable clean electricity for heavy molding and vulcanization machinery.',
    highlights: [
      '600 kWp system lowering factory grid electricity costs by ~45%',
      'Custom aluminum strut framing designed to optimize sun azimuth angles',
      'Bi-directional net metering with zero-export protection during grid dropouts',
      'Fast payback achieved in approximately 3.4 years'
    ],
    hotspots: [
      {
        productId: 'prod-topcon-550w',
        productSlug: 'topcon-bifacial-550w',
        productName: 'Bifacial Solar Modules',
        categoryName: 'Solar Modules',
        x: 35,
        y: 38
      },
      {
        productId: 'prod-inverter-50kw',
        productSlug: 'commercial-on-grid-inverter-50kw',
        productName: 'Smart String Inverter System',
        categoryName: 'Inverters',
        x: 68,
        y: 52
      }
    ]
  },
  {
    id: 'proj-agra-public-school',
    title: '125 kWp Agra Public School',
    tagline: 'Educational campus green solar transformation with interactive student learning.',
    sector: 'Colleges & Institutions',
    capacity: '125 kWp',
    location: 'Agra, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=1600&q=80',
    description: '125 kWp rooftop solar installation spanning multiple institutional buildings at Agra Public School. Powers academic wings, computer labs, and auditorium lighting while serving as a green educational beacon.',
    highlights: [
      '125 kWp decentralized rooftop system generating ~180,000 kWh annually',
      'Zero diesel generator runtime during bright daytime power cuts',
      'Live lobby display showcasing solar generation and carbon offset numbers',
      'Over 145 metric tons of CO2 offset annually'
    ],
    hotspots: [
      {
        productId: 'prod-topcon-550w',
        productSlug: 'topcon-bifacial-550w',
        productName: 'Tier-1 High-Efficiency Modules',
        categoryName: 'Solar Modules',
        x: 48,
        y: 32
      },
      {
        productId: 'prod-inverter-50kw',
        productSlug: 'commercial-on-grid-inverter-50kw',
        productName: 'Institutional Grid-Tied Inverter',
        categoryName: 'Inverters',
        x: 64,
        y: 62
      }
    ]
  },
  {
    id: 'proj-open-access-ultratech',
    title: 'Open Access Energy Supply — Ultratech Cement',
    tagline: 'High-tension renewable energy wheeling for heavy cement production.',
    sector: 'Open Access',
    capacity: 'Multi-MW Supply',
    location: 'Sikandrabad, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80',
    description: 'Open Access energy facilitation delivering high-voltage green power to Ultratech Cement’s Sikandrabad facility. Provides significant tariff arbitrage over conventional state DISCOM commercial charges.',
    highlights: [
      'Multi-megawatt green energy wheeling over state transmission grid',
      'Significant per-unit tariff savings compared to peak industrial tariffs',
      'Substantial progress toward corporate sustainability and decarbonization targets',
      'Hassle-free regulatory compliance and banking management'
    ],
    hotspots: [
      {
        productId: 'prod-topcon-550w',
        productSlug: 'topcon-bifacial-550w',
        productName: 'Utility-Scale Solar Farm Infrastructure',
        categoryName: 'Open Access',
        x: 52,
        y: 44
      }
    ]
  }
];

export interface SolarProductSpec {
  label: string;
  value: string;
  category?: 'electrical' | 'mechanical' | 'warranty' | 'general';
}

export interface SolarProduct {
  id: string;
  name: string;
  slug: string;
  sku: string;
  category: 'modules' | 'inverters' | 'batteries' | 'accessories';
  categoryLabel: string;
  capacityOrPower: string;
  efficiencyOrRating: string;
  shortDescription: string;
  description: string;
  image: string;
  galleryImages: string[];
  features: string[];
  specifications: SolarProductSpec[];
  badge?: string;
  datasheetUrl?: string;
  warrantyYears: number;
}

export const solarProductsData: SolarProduct[] = [
  {
    id: 'prod-topcon-550w',
    name: 'TopCon Bifacial Dual-Glass Solar Module 550W+',
    slug: 'topcon-bifacial-550w',
    sku: 'PCA-MOD-TC550-BF',
    category: 'modules',
    categoryLabel: 'Solar Modules',
    capacityOrPower: '550W - 580W',
    efficiencyOrRating: 'Up to 22.8% Efficiency',
    badge: 'N-Type TopCon Bifacial',
    shortDescription: 'High-power N-Type TopCon bifacial module with dual-glass encapsulation, delivering up to 30% additional backside energy gain.',
    description: 'Engineered with cutting-edge 16BB N-type half-cut cell technology, this module offers lower temperature coefficients (-0.30%/°C), zero light-induced degradation (LID/LeTID), and superior weak-light performance. Dual-glass construction ensures unmatched fire resistance and protection in coastal or high-humidity climates.',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'
    ],
    warrantyYears: 30,
    features: [
      'N-Type TopCon cell architecture with 22.8% module efficiency',
      'Bifaciality factor up to 80±5% for additional ground reflection power',
      'Dual 2.0mm heat-strengthened glass with anti-reflective coating',
      '30-Year linear power warranty (max 0.4% annual degradation)',
      'Heavy-duty anodized aluminum alloy frame certified for 5400 Pa snow / 2400 Pa wind'
    ],
    specifications: [
      { label: 'Maximum Power (Pmax)', value: '550W / 565W / 580W', category: 'electrical' },
      { label: 'Module Efficiency', value: '22.4% - 22.8%', category: 'electrical' },
      { label: 'Open Circuit Voltage (Voc)', value: '50.28 V', category: 'electrical' },
      { label: 'Short Circuit Current (Isc)', value: '14.05 A', category: 'electrical' },
      { label: 'Temperature Coefficient (Pmax)', value: '-0.30 %/°C', category: 'electrical' },
      { label: 'Dimensions', value: '2278 × 1134 × 30 mm', category: 'mechanical' },
      { label: 'Weight', value: '31.5 kg', category: 'mechanical' },
      { label: 'Junction Box', value: 'IP68 with 3 bypass diodes', category: 'mechanical' },
      { label: 'Connector', value: 'MC4-EVO2 Compatible', category: 'mechanical' },
      { label: 'Product Warranty', value: '12 Years Materials & Workmanship', category: 'warranty' },
      { label: 'Performance Warranty', value: '30 Years 87.4% Power Retention', category: 'warranty' }
    ]
  },
  {
    id: 'prod-monoperc-450w',
    name: 'Mono PERC All-Black Residential Module 450W',
    slug: 'monoperc-allblack-450w',
    sku: 'PCA-MOD-MP450-BLK',
    category: 'modules',
    categoryLabel: 'Solar Modules',
    capacityOrPower: '450W',
    efficiencyOrRating: '21.3% Efficiency',
    badge: 'Aesthetic All-Black',
    shortDescription: 'Sleek all-black monocrystalline module tailored for luxury residential rooftops with premium architectural visual appeal.',
    description: 'Designed for discerning homeowners seeking both performance and aesthetic integration. High-efficiency half-cut cells maximize generation on compact roofs while the all-black frame and backsheet blend seamlessly with modern tiles and metal roofing.',
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80'
    ],
    warrantyYears: 25,
    features: [
      'High power density in compact 1762 × 1134 mm dimensions',
      'All-black front styling: black cells, ribbon, backsheet and frame',
      'Anti-PID (Potential Induced Degradation) certified cells',
      'Outstanding performance under diffused morning and evening light'
    ],
    specifications: [
      { label: 'Nominal Power', value: '450 W', category: 'electrical' },
      { label: 'Efficiency', value: '21.3%', category: 'electrical' },
      { label: 'Voc', value: '41.6 V', category: 'electrical' },
      { label: 'Weight', value: '21.2 kg', category: 'mechanical' },
      { label: 'Warranty', value: '25 Years Linear Performance', category: 'warranty' }
    ]
  },
  {
    id: 'prod-inverter-threephase-50kw',
    name: 'Three-Phase On-Grid String Inverter 50kW / 60kW',
    slug: 'threephase-ongrid-inverter-50kw',
    sku: 'PCA-INV-3PH-50K',
    category: 'inverters',
    categoryLabel: 'Solar Inverters',
    capacityOrPower: '50 kW / 60 kW',
    efficiencyOrRating: '98.8% Max Efficiency',
    badge: 'Commercial 4 MPPT',
    shortDescription: 'Industrial-grade 3-phase string inverter with 4 independent MPPT trackers, integrated DC switch and smart cloud monitoring.',
    description: 'Engineered for commercial rooftops, factory buildings and institutional microgrids. High MPPT resolution accommodates complex roof orientations with shade variance. Built-in Type II SPD on both AC and DC sides protects electronics from grid transients.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    warrantyYears: 10,
    features: [
      '4 Independent MPPTs with 2 strings per MPPT (150% DC oversizing)',
      'Ultra-high 98.8% maximum efficiency (98.3% European efficiency)',
      'Integrated AFCI (Arc Fault Circuit Interruption) for fire prevention',
      'Built-in WiFi / 4G remote monitoring with automatic alert notifications',
      'IP66 ingress protection suitable for harsh outdoor installations'
    ],
    specifications: [
      { label: 'Rated AC Output Power', value: '50,000 W / 60,000 W', category: 'electrical' },
      { label: 'Max DC Input Voltage', value: '1100 V', category: 'electrical' },
      { label: 'MPPT Operating Voltage', value: '180 V - 1000 V', category: 'electrical' },
      { label: 'Number of MPPTs', value: '4 (8 DC inputs)', category: 'electrical' },
      { label: 'Protection Degree', value: 'IP66 Outdoor Rated', category: 'mechanical' },
      { label: 'Standard Warranty', value: '5 Years Extendable to 10/15 Years', category: 'warranty' }
    ]
  },
  {
    id: 'prod-inverter-hybrid-10kw',
    name: 'Smart Hybrid Energy Storage Inverter 10kW',
    slug: 'hybrid-inverter-10kw',
    sku: 'PCA-INV-HYB-10K',
    category: 'inverters',
    categoryLabel: 'Solar Inverters',
    capacityOrPower: '10 kW Solar + 10kW Battery',
    efficiencyOrRating: '97.6% Hybrid Efficiency',
    badge: 'UPS Grade 10ms Switch',
    shortDescription: 'Next-gen hybrid inverter combining solar input, grid interaction, and high-voltage lithium battery storage with seamless 10ms backup switching.',
    description: 'The heart of energy resilience. Seamlessly manages power flow between solar panels, lithium storage, grid, and home/business loads. Zero flicker during blackouts keeps computers, servers, and refrigeration running uninterrupted.',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'
    ],
    warrantyYears: 10,
    features: [
      '10ms uninterruptible power supply (UPS) switching',
      'High-voltage battery interface (150V - 500V) for maximum round-trip efficiency',
      'Time-of-Use (TOU) peak shaving algorithm to buy low and self-consume high',
      'Supports parallel operation up to 10 units for 100kW scalable backup'
    ],
    specifications: [
      { label: 'Rated Power', value: '10,000 VA', category: 'electrical' },
      { label: 'Max PV Input', value: '15,000 W', category: 'electrical' },
      { label: 'Battery Compatibility', value: 'LiFePO4 Lithium High Voltage', category: 'electrical' },
      { label: 'Cooling', value: 'Smart Natural Convection (Silent)', category: 'mechanical' },
      { label: 'Warranty', value: '10 Years Manufacturer Warranty', category: 'warranty' }
    ]
  },
  {
    id: 'prod-battery-lifepo4-15kwh',
    name: 'Modular LiFePO4 Lithium Storage System 15kWh',
    slug: 'lifepo4-battery-storage-15kwh',
    sku: 'PCA-BAT-LFP-15K',
    category: 'batteries',
    categoryLabel: 'Batteries & Storage',
    capacityOrPower: '15.36 kWh Usable',
    efficiencyOrRating: '6,000+ Cycles @ 90% DoD',
    badge: 'Tier-1 LiFePO4 Chemistry',
    shortDescription: 'Safe, high-density Lithium Iron Phosphate (LiFePO4) modular battery stack with integrated automotive-grade BMS and thermal safety.',
    description: 'Engineered for 15+ years of reliable daily cycling. Modular 5.12kWh stackable bricks allow quick expansion from 15kWh up to 60kWh per system. Compatible with leading hybrid inverter brands via CAN/RS485 protocol communication.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    warrantyYears: 10,
    features: [
      'Ultra-safe LiFePO4 chemistry with zero thermal runaway risk',
      '6,000+ charge/discharge cycles at 90% Depth of Discharge',
      'Plug-and-play stackable installation with concealed internal wiring',
      'Active cell balancing and dual-layer safety circuit breaker protection'
    ],
    specifications: [
      { label: 'Nominal Energy', value: '15.36 kWh (3 × 5.12 kWh modules)', category: 'electrical' },
      { label: 'Nominal Voltage', value: '153.6 V (High Voltage)', category: 'electrical' },
      { label: 'Max Charge / Discharge Current', value: '50 A (7.68 kW continuous)', category: 'electrical' },
      { label: 'Protection Rating', value: 'IP55 Indoor / Semi-Outdoor', category: 'mechanical' },
      { label: 'Operating Temperature', value: '-10°C to +50°C', category: 'general' },
      { label: 'Warranty', value: '10 Years (70% capacity guarantee)', category: 'warranty' }
    ]
  },
  {
    id: 'prod-solar-structure-kit',
    name: 'Anodized Aluminum Mounting Structure Kit & DC BOS',
    slug: 'aluminum-mounting-structure-kit',
    sku: 'PCA-BOS-STR-HD',
    category: 'accessories',
    categoryLabel: 'Solar Kits & Accessories',
    capacityOrPower: 'Custom per Project kW',
    efficiencyOrRating: 'Engineered to 180 km/h Wind Load',
    badge: 'Heavy Duty Al6005-T5',
    shortDescription: 'Complete balance-of-system (BOS) package: pre-assembled anodized aluminum rail kits, stainless steel hardware, DC cables, and surge protection combiner boxes.',
    description: 'Every component working together seamlessly. We provide structural calculations verified by certified structural engineers for sheet metal, RCC roofs, ground mount arrays, and solar pergolas with 25-year corrosion resistance.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80'
    ],
    warrantyYears: 25,
    features: [
      'Extruded Al6005-T5 aluminum rails with stainless steel SUS304 bolts',
      'Zero roof puncture standing seam clamps for metal roofs',
      '4mm² and 6mm² cross-linked polyethylene (XLPE) UV-resistant DC solar cables',
      'Pre-wired IP65 DC combiner boxes with 1000V DC fuses and Type 2 SPDs'
    ],
    specifications: [
      { label: 'Material', value: 'High Strength Anodized Aluminum AL6005-T5', category: 'mechanical' },
      { label: 'Wind Resistance', value: 'Certified up to 180 km/h (50 m/s)', category: 'mechanical' },
      { label: 'Hardware', value: 'Stainless Steel A2-70 (SUS304)', category: 'mechanical' },
      { label: 'Corrosion Warranty', value: '25 Years Structural Guarantee', category: 'warranty' }
    ]
  }
];

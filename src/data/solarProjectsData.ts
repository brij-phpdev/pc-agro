import { ProjectSlide } from '../types';

export const solarProjectsData: ProjectSlide[] = [
  {
    id: 'proj-industrial-rooftop',
    title: 'Industrial Rooftop Solar',
    tagline: 'High-yield industrial solar power generating clean energy and operational savings.',
    sector: 'Industrial',
    capacity: '500 kWp',
    location: 'Industrial Manufacturing Hub',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1600&q=80',
    description: 'A 500 kWp rooftop solar installation deployed across a metal sheet warehouse roof. Engineered to offset peak daytime manufacturing power draw with grid synchronization and automated cloud telemetry.',
    highlights: [
      '500 kWp DC capacity generating ~720,000 kWh annually',
      'High-durability aluminum rail fixtures with zero roof penetrations',
      'Four 100 kW three-phase grid-tied string inverters with AFCI protection',
      'Net metering with high-voltage industrial utility connectivity'
    ],
    hotspots: [
      {
        productId: 'prod-topcon-550w',
        productSlug: 'topcon-bifacial-550w',
        productName: 'TopCon Bifacial 550W+ Modules',
        categoryName: 'Solar Modules',
        x: 42,
        y: 36
      },
      {
        productId: 'prod-inverter-50kw',
        productSlug: 'commercial-on-grid-inverter-50kw',
        productName: 'Three-Phase 100kW Industrial Inverters',
        categoryName: 'Inverters',
        x: 76,
        y: 64
      },
      {
        productId: 'prod-mounting-structure',
        productSlug: 'mounting-structure-kit',
        productName: 'Galvanized Strut Racking System',
        categoryName: 'Mounting & BOS',
        x: 24,
        y: 54
      },
      {
        productId: 'prod-topcon-550w',
        productSlug: 'topcon-bifacial-550w',
        productName: 'Class-I Lightning & Surge Arrestor Array',
        categoryName: 'Safety Systems',
        x: 88,
        y: 28
      }
    ]
  },
  {
    id: 'proj-commercial-installation',
    title: 'Commercial Solar Installation',
    tagline: 'Modern rooftop and shade canopy solar for commercial office complexes.',
    sector: 'Commercial',
    capacity: '150 kWp',
    location: 'Corporate Tech Park',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80',
    description: '150 kWp commercial solar installation tailored to an office campus. Integrates rooftop modules and carport solar canopies to charge EV infrastructure while reducing peak grid energy tariffs.',
    highlights: [
      '150 kWp system lowering campus electricity costs by ~45%',
      'Integrated solar carport providing covered parking with shade',
      'Bi-directional net metering and automated daytime load balancing',
      'Comprehensive web dashboard for live carbon abatement metrics'
    ],
    hotspots: [
      {
        productId: 'prod-monoperc-450w',
        productSlug: 'mono-perc-450w',
        productName: 'Mono PERC 450W Solar Modules',
        categoryName: 'Solar Modules',
        x: 35,
        y: 38
      },
      {
        productId: 'prod-inverter-50kw',
        productSlug: 'commercial-on-grid-inverter-50kw',
        productName: 'Commercial Smart Inverter 50kW',
        categoryName: 'Inverters',
        x: 68,
        y: 52
      },
      {
        productId: 'prod-mounting-structure',
        productSlug: 'mounting-structure-kit',
        productName: 'Elevated Solar Shade Canopy Structure',
        categoryName: 'Mounting & BOS',
        x: 82,
        y: 32
      }
    ]
  },
  {
    id: 'proj-institutional-project',
    title: 'Institutional Solar Project',
    tagline: 'Clean energy generation and educational impact across campus grounds.',
    sector: 'Institutional',
    capacity: '100 kWp',
    location: 'Higher Education Campus',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80',
    description: '100 kWp decentralized rooftop installation spanning the library and administrative buildings of an educational campus. Provides stable daytime power and serves as an interactive green engineering model for students.',
    highlights: [
      '100 kWp decentralized solar powering campus lighting and laboratories',
      'Interactive public dashboard in campus foyer displaying live generation',
      'Zero diesel generator runtime during sunny power outages',
      'Estimated 120 metric tons of CO2 offset annually'
    ],
    hotspots: [
      {
        productId: 'prod-topcon-550w',
        productSlug: 'topcon-bifacial-550w',
        productName: 'High-Yield TopCon 550W Module Array',
        categoryName: 'Solar Modules',
        x: 48,
        y: 32
      },
      {
        productId: 'prod-hybrid-inverter-10kw',
        productSlug: 'hybrid-inverter-10kw',
        productName: 'Multi-MPPT Hybrid Inverter Station',
        categoryName: 'Inverters',
        x: 64,
        y: 62
      },
      {
        productId: 'prod-lifepo4-battery-15kwh',
        productSlug: 'lifepo4-battery-15kwh',
        productName: 'Lithium Battery Emergency Backup Unit',
        categoryName: 'Storage',
        x: 22,
        y: 68
      }
    ]
  },
  {
    id: 'proj-residential-rooftop',
    title: 'Residential Rooftop Solar',
    tagline: 'Smart energy independence with battery storage for modern households.',
    sector: 'Residential',
    capacity: '15 kWp',
    location: 'Private Residence & Villa',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80',
    description: 'A 15 kWp residential hybrid solar installation equipped with 15 kWh lithium battery backup. Keeps all essential household appliances, air conditioning, and EV charging online seamlessly during power outages.',
    highlights: [
      '15 kWp rooftop PV array planned around roof architecture',
      '15 kWh LiFePO4 battery providing uninterrupted power during outages',
      'Hybrid inverter with sub-10ms automatic transfer switch (ATS)',
      'Smartphone app providing real-time solar, battery, and home consumption stats'
    ],
    hotspots: [
      {
        productId: 'prod-monoperc-450w',
        productSlug: 'mono-perc-450w',
        productName: 'Sleek Black Frame Solar Modules',
        categoryName: 'Solar Modules',
        x: 38,
        y: 34
      },
      {
        productId: 'prod-hybrid-inverter-10kw',
        productSlug: 'hybrid-inverter-10kw',
        productName: 'Hybrid Inverter with Integrated ATS',
        categoryName: 'Inverters',
        x: 58,
        y: 64
      },
      {
        productId: 'prod-lifepo4-battery-15kwh',
        productSlug: 'lifepo4-battery-15kwh',
        productName: 'LiFePO4 15 kWh Wallmount Battery',
        categoryName: 'Storage',
        x: 74,
        y: 56
      }
    ]
  }
];

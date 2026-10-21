export interface TechnologyPartner {
  id: string;
  name: string;
  role: string;
  category: 'Solar Modules' | 'Inverters & Storage';
  relationship: string;
  description: string;
  badge?: string;
  certifications: string[];
}

export const technologyPartnersData: TechnologyPartner[] = [
  {
    id: 'kehua-tech',
    name: 'Kehua Tech',
    role: 'On-Grid Inverters & Energy Storage (ESS)',
    category: 'Inverters & Storage',
    relationship: 'Official Importer & National Distributor (India & Nepal)',
    description: 'Kehua Tech is a group company of renowned Lenovo Computers and a global leader in power electronics, UPS systems, and battery storage. PC Agro is the authorized importer and distributor across India and Nepal.',
    badge: 'Exclusive Distribution Partner',
    certifications: ['IEC 62109', 'IEEE 1547', 'BIS Approved', 'Zero-Export Ready']
  },
  {
    id: 'jinko-solar',
    name: 'Jinko Solar',
    role: 'N-Type TopCon & Tiger Neo High-Yield Modules',
    category: 'Solar Modules',
    relationship: 'Direct OEM Sourcing Partner',
    description: 'World’s premier Tier-1 photovoltaic module manufacturer, pioneering high-efficiency TopCon N-type cells with superior temperature coefficient and bifacial energy generation.',
    badge: 'Global Tier-1 Leader',
    certifications: ['ALMM Approved', 'BIS Certified', 'BloombergNEF Tier-1', '30-Yr Warranty']
  },
  {
    id: 'trina-solar',
    name: 'Trina Solar',
    role: 'Vertex Multi-Busbar High-Power Modules (550W–670W+)',
    category: 'Solar Modules',
    relationship: 'Direct OEM Sourcing Partner',
    description: 'Global pioneer in 210mm silicon wafer technology, delivering ultra-high power output and high reliability for utility and commercial rooftops.',
    badge: 'Ultra High Output',
    certifications: ['ALMM Approved', 'IEC 61215/61730', 'Tier-1 Rated', '25-Yr Performance']
  },
  {
    id: 'canadian-solar',
    name: 'Canadian Solar',
    role: 'HiKu & BiHiKu High Efficiency Modules',
    category: 'Solar Modules',
    relationship: 'Direct OEM Sourcing Partner',
    description: 'One of the world’s largest solar technology providers with decades of proven bankability and industry-leading low degradation rates in extreme climates.',
    badge: 'Proven Global Bankability',
    certifications: ['ALMM Approved', 'BIS Certified', 'Hail & Salt Mist Tested', '25-Yr Linear']
  },
  {
    id: 'adani-solar',
    name: 'Adani Solar',
    role: 'Make-in-India DCR & Non-DCR High-Yield Modules',
    category: 'Solar Modules',
    relationship: 'Authorized Indian Tier-1 Channel',
    description: 'India’s largest vertically integrated solar cell and module manufacturer. 100% compliant with Domestic Content Requirement (DCR) for government and PSU projects.',
    badge: 'Make in India (DCR Compliant)',
    certifications: ['100% DCR Compliant', 'ALMM Listed', 'BIS Certified', 'MNRE Approved']
  },
  {
    id: 'navitas-solar',
    name: 'Navitas Solar',
    role: 'Conserve | Sustain | Flourish Modules',
    category: 'Solar Modules',
    relationship: 'Strategic Indian Supply Alliance',
    description: 'Leading fast-growing Indian manufacturer providing state-of-the-art mono PERC and TopCon modules engineered specifically for tropical Indian conditions.',
    badge: 'Indigenous Excellence',
    certifications: ['ALMM Approved', 'BIS Certified', 'ISO 9001:14001', '25-Yr Warranty']
  },
  {
    id: 'sungrow',
    name: 'Sungrow Power',
    role: 'Clean Power for All — String & Central Inverters',
    category: 'Inverters & Storage',
    relationship: 'Direct OEM Supply Partner',
    description: 'The world’s most bankable inverter brand with over 405 GW installed globally. Renowned for ultra-high conversion efficiency and rugged IP66 protection.',
    badge: 'World Bankability Benchmark',
    certifications: ['IEC 62109-1/2', 'VDE Certified', 'CEA Compliant', 'Smart O&M']
  },
  {
    id: 'goodwe',
    name: 'GoodWe',
    role: 'Smart Energy Innovator — Hybrid & Storage Inverters',
    category: 'Inverters & Storage',
    relationship: 'Certified Technology Partner',
    description: 'World-leading pioneer in hybrid energy storage inverters and C&I string inverters, featuring integrated UPS switching and intelligent load management.',
    badge: 'Hybrid Storage Specialist',
    certifications: ['IEC 62109', 'IP65/IP66', 'Sub-10ms UPS Switch', 'Smart App Monitoring']
  },
  {
    id: 'solis',
    name: 'Solis (Ginlong)',
    role: 'Intelligent String Inverters for Commercial & Rooftop',
    category: 'Inverters & Storage',
    relationship: 'Direct OEM Supply Partner',
    description: 'Top-3 global string inverter manufacturer offering wide MPPT voltage windows, low start-up voltage, and outstanding thermal dissipation for Indian summers.',
    badge: 'High Reliability Inverters',
    certifications: ['AFCI Arc Protection', 'BIS Certified', '98.7% Max Efficiency', '10-Yr Standard']
  }
];

export const sourcingStandards = [
  {
    title: 'ALMM & BIS Certification',
    description: 'All solar modules supplied are strictly enlisted on the Ministry of New & Renewable Energy (MNRE) Approved List of Models & Manufacturers (ALMM).'
  },
  {
    title: 'Tier-1 Global Bankability',
    description: 'We source exclusively from Tier-1 rated manufacturers evaluated by BloombergNEF, ensuring bankability for project financing and debt approvals.'
  },
  {
    title: '25 to 30-Year Warranties',
    description: 'Every panel is covered by a 10 to 12-year product warranty and a 25 to 30-year linear performance warranty guaranteeing >80% power at Year 25.'
  },
  {
    title: 'Direct National Distribution',
    description: 'As the official importer and distributor for brands like Kehua Tech, PC Agro guarantees 100% genuine serial numbers and direct OEM warranty claims.'
  }
];

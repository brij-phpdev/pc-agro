import { ProjectSlide } from '../types';

export const projectsData: ProjectSlide[] = [
  {
    id: 'proj-decorativa',
    title: 'Espaços Corporativos & Decorativos',
    tagline: 'Linhas contínuas que estruturam a arquitetura de interiores.',
    sector: 'Decorativa',
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/DECORATIVA.jpg',
    description: 'Integração de iluminação linear contínua com geometrias personalizadas em 90°, cruzamentos e transições fluidas.',
    hotspots: [
      {
        productId: 'prod-nexus-3cct',
        productSlug: 'nexus-3cct',
        productName: 'NEXUS 3CCT',
        categoryName: 'Sistemas Lineares',
        x: 45,
        y: 15
      },
      {
        productId: 'prod-nexus-conector-t',
        productSlug: 'nexus-3cct',
        productName: 'Conetor 3CCT em "T" p/ NEXUS',
        categoryName: 'Acessórios Modulares',
        x: 73,
        y: 24
      },
      {
        productId: 'prod-nexus-conector-plus',
        productSlug: 'nexus-3cct',
        productName: 'Conetor 3CCT em "+" p/ NEXUS',
        categoryName: 'Acessórios Modulares',
        x: 41,
        y: 38
      },
      {
        productId: 'prod-nexus-conector-l',
        productSlug: 'nexus-3cct',
        productName: 'Conetor 3CCT em "L" 90° p/ NEXUS',
        categoryName: 'Acessórios Modulares',
        x: 10,
        y: 41
      }
    ]
  },
  {
    id: 'proj-retail',
    title: 'Comércio & Retalho Premium',
    tagline: 'Destaque visual, fidelidade de cores e atratividade comercial.',
    sector: 'Retail',
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/RETAIL.jpg',
    description: 'Sistemas de calhas eletrificadas trifásicas com projetores de alto CRI >95 que realçam produtos e texturas.',
    hotspots: [
      {
        productId: 'prod-kastra-3cct',
        productSlug: 'kastra-3-cct',
        productName: 'KASTRA 3CCT Tracklight',
        categoryName: 'Tracklights',
        x: 21,
        y: 18
      },
      {
        productId: 'prod-calha-4vias',
        productSlug: 'kastra-3-cct',
        productName: 'Calha p/ Tracklights 4 vias',
        categoryName: 'Sistemas de Calha',
        x: 13,
        y: 14
      },
      {
        productId: 'prod-skid-7w',
        productSlug: 'skid-7w',
        productName: 'Aro Retangular Oscilante Duplo',
        categoryName: 'Aros Técnicos',
        x: 35,
        y: 2
      },
      {
        productId: 'prod-lampada-gu10',
        productSlug: 't8-led-premium-3cct-160lm',
        productName: 'Lâmpada GU10 6.5W PRO (CRI >95)',
        categoryName: 'Lâmpadas',
        x: 45,
        y: 2
      }
    ]
  },
  {
    id: 'proj-perfil',
    title: 'Sistemas de Perfil & Sancas Ocultas',
    tagline: 'Luz indireta e contornos precisos sem pontos visíveis.',
    sector: 'Perfil',
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/perfil.jpg',
    description: 'Aplicação de perfis de alumínio dissipadores e fitas LED COB para iluminação perimetral suave.',
    hotspots: [
      {
        productId: 'prod-neon-side-230v',
        productSlug: 'neon-side-1018-230v-premium-14w',
        productName: 'Perfil em U com Abas Alto',
        categoryName: 'Perfis de Alumínio',
        x: 79,
        y: 45
      },
      {
        productId: 'prod-fita-cob',
        productSlug: 'neon-side-1018-230v-premium-14w',
        productName: 'Fita LED 24V COB 130Lm/W IP20',
        categoryName: 'Fitas LED',
        x: 74,
        y: 23
      },
      {
        productId: 'prod-nexus-3cct',
        productSlug: 'nexus-3cct',
        productName: 'HALO 3CCT Pendente',
        categoryName: 'Decorativa',
        x: 10,
        y: 5
      }
    ]
  },
  {
    id: 'proj-plafons',
    title: 'Espaços Residenciais & Circulações',
    tagline: 'Uniformidade, fiabilidade e eficiência luminosa diária.',
    sector: 'Plafons',
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/PLAFONS.jpg',
    description: 'Plafons de emissão suave com seletor de temperatura de cor para adaptar o ambiente a qualquer momento do dia.',
    hotspots: [
      {
        productId: 'prod-orbis-3cct',
        productSlug: 'orbis-3cct',
        productName: 'ORBIS 3CCT IP54',
        categoryName: 'Painéis & Plafons',
        x: 45,
        y: 49
      },
      {
        productId: 'prod-skid-7w',
        productSlug: 'skid-7w',
        productName: 'SUBRA 3CCT',
        categoryName: 'Downlights',
        x: 30,
        y: 59
      }
    ]
  }
];

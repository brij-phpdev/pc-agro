import { Category } from '../types';

export const categoriesData: Category[] = [
  {
    id: 'cat-interior',
    name: 'Iluminação Interior',
    slug: 'iluminacao-interior',
    description: 'Soluções de iluminação técnica e de conforto visual para espaços comerciais, residenciais e corporativos.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    featuredProduct: {
      name: 'NEXUS 3CCT',
      slug: 'nexus-3cct',
      price: '80,70 € - 133,00 €',
      image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/0c07b3d12905cc52adefc26729ceae90.jpg',
    },
    children: [
      {
        id: 'sub-downlights',
        name: 'Downlights',
        slug: 'downlights',
        parentSlug: 'iluminacao-interior',
        description: 'Downlights embutidos e salientes com controlo ótico antirreflexo UGR<19.',
        featuredProduct: {
          name: 'SKID 7W',
          slug: 'skid-7w',
          price: '30,20 €',
          image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/d14edf5ebeba3383a6384968c8cd8ec1.jpg',
        }
      },
      {
        id: 'sub-tracklights',
        name: 'Tracklights',
        slug: 'tracklights',
        parentSlug: 'iluminacao-interior',
        description: 'Projetores para calha eletrificada monofásica e trifásica com óticas orientáveis.',
        featuredProduct: {
          name: 'KASTRA 3CCT',
          slug: 'kastra-3-cct',
          price: '56,00 € - 79,60 €',
          image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/f66aed4be65a7d949bbcd250a6029bf9.jpg',
        }
      },
      {
        id: 'sub-decorativa-int',
        name: 'Decorativa',
        slug: 'decorativa',
        parentSlug: 'iluminacao-interior',
        description: 'Luminárias suspensas e de design contemporâneo que valorizam a arquitetura.',
      },
      {
        id: 'sub-paineis',
        name: 'Painéis LED',
        slug: 'paineis',
        parentSlug: 'iluminacao-interior',
        description: 'Painéis extra-planos com difusor microprismático para escritórios e saúde.',
        featuredProduct: {
          name: 'ORBIS 3CCT',
          slug: 'orbis-3cct',
          price: '42,50 €',
          image: 'https://cms.ledup.pt/wp-content/uploads/2026/02/ORBIS-18.jpg',
        }
      },
      {
        id: 'sub-armaduras-int',
        name: 'Armaduras Interior',
        slug: 'armaduras',
        parentSlug: 'iluminacao-interior',
        description: 'Sistemas lineares contínuos e armaduras funcionais de elevada eficácia.',
      },
    ]
  },
  {
    id: 'cat-exterior',
    name: 'Iluminação Exterior',
    slug: 'iluminacao-exterior',
    description: 'Equipamentos robustos IP65/IP66 resistentes a intempéries e atmosferas salinas.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    featuredProduct: {
      name: 'FLARE Solar IP66',
      slug: 'flare-solar-ip66',
      price: '50,00 € - 108,00 €',
      image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/494f7be18c954c4c191f823c034470cd.jpg',
    },
    children: [
      {
        id: 'sub-iluminacao-rua',
        name: 'Iluminação de Rua',
        slug: 'iluminacao-rua',
        parentSlug: 'iluminacao-exterior',
        description: 'Luminárias públicas com fotometrias assimétricas e óticas rodoviárias.',
        featuredProduct: {
          name: 'ATHENA 3CCT',
          slug: 'athena-3cct',
          price: '89,90 € - 145,00 €',
          image: 'https://cms.ledup.pt/wp-content/uploads/2026/02/Athena-950-1.jpg',
        }
      },
      {
        id: 'sub-projetores',
        name: 'Projetores',
        slug: 'projetores',
        parentSlug: 'iluminacao-exterior',
        description: 'Projetores Standard, Anti-Corrosão, 3CCT e Sports Light de alta potência.',
      },
      {
        id: 'sub-luminarias-parede',
        name: 'Luminárias de Parede',
        slug: 'luminarias-parede',
        parentSlug: 'iluminacao-exterior',
        description: 'Apliques de parede salientes e de encastrar para fachadas e caminhos pedonais.',
      },
      {
        id: 'sub-plafons-ext',
        name: 'Plafons Exterior',
        slug: 'plafons',
        parentSlug: 'iluminacao-exterior',
        description: 'Plafons estanques com sensor de movimento micro-ondas e emergência.',
      }
    ]
  },
  {
    id: 'cat-fitas',
    name: 'Fitas LED & NEON',
    slug: 'fitas-led-neon',
    description: 'Fitas flexíveis profissionais 12Vdc, 24Vdc, 230V, tecnologia COB sem pontos e Neon Flex.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
    featuredProduct: {
      name: 'Neon Side 1018 230V',
      slug: 'neon-side-1018-230v-premium-14w',
      price: '22,00 €',
      image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/0ba34b30e0bd2e6327222b66ea86b8af.jpg',
    },
    children: [
      {
        id: 'sub-fitas-12v',
        name: 'Fitas 12VDC',
        slug: 'fitas-12vdc',
        parentSlug: 'fitas-led-neon',
        description: 'Fitas de baixa tensão para móveis, sancas residenciais e vitrines.',
      },
      {
        id: 'sub-fitas-24v',
        name: 'Fitas 24VDC',
        slug: 'fitas-24vdc',
        parentSlug: 'fitas-led-neon',
        description: 'Fitas profissionais de longo alcance com baixa queda de tensão.',
      },
      {
        id: 'sub-neon-flex',
        name: 'Neon LED',
        slug: 'neon-led',
        parentSlug: 'fitas-led-neon',
        description: 'Perfis de silicone flexível com emissão contínua 360° e lateral.',
      },
      {
        id: 'sub-perfis-aluminio',
        name: 'Perfis de Alumínio',
        slug: 'perfis-aluminio',
        parentSlug: 'fitas-led-neon',
        description: 'Perfis de encastrar, salientes e suspensos para dissipação térmica ótima.',
      }
    ]
  },
  {
    id: 'cat-industria',
    name: 'Indústria & Emergência',
    slug: 'industria-e-emergencia',
    description: 'Soluções de iluminação para armazéns logísticos, naves industriais e blocos autónomos de emergência.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    featuredProduct: {
      name: 'ONYX 3CCT Industrial',
      slug: 'onyx-3cct',
      price: '115,00 € - 179,00 €',
      image: 'https://cms.ledup.pt/wp-content/uploads/2026/02/ONYX-200W.jpg',
    },
    children: [
      {
        id: 'sub-highbay',
        name: 'Campânulas Highbay',
        slug: 'highbay',
        parentSlug: 'industria-e-emergencia',
        description: 'Campânulas até 200W com eficácia 160Lm/W e proteção térmica.',
      },
      {
        id: 'sub-estanques',
        name: 'Armaduras Estanques IP66',
        slug: 'estanques-ip66',
        parentSlug: 'industria-e-emergencia',
        description: 'Armaduras em policarbonato com fechos em inox para ambientes agressivos.',
      },
      {
        id: 'sub-emergencia',
        name: 'Blocos de Emergência',
        slug: 'emergencia',
        parentSlug: 'industria-e-emergencia',
        description: 'Sinalização e antipânico com autonomia de 1h a 3h certificadas EN 60598-2-22.',
      }
    ]
  },
  {
    id: 'cat-lampadas',
    name: 'Lâmpadas & Aros',
    slug: 'lampadas-e-aros',
    description: 'Gama completa de lâmpadas LED retrofit GU10, E27, E14, tubos T8 e aros técnicos de encastrar.',
    children: [
      {
        id: 'sub-lampadas-gu10',
        name: 'Lâmpadas GU10 PRO',
        slug: 'lampadas-gu10',
        parentSlug: 'lampadas-e-aros',
      },
      {
        id: 'sub-tubos-t8',
        name: 'Tubos T8 LED',
        slug: 'tubos-t8',
        parentSlug: 'lampadas-e-aros',
      },
      {
        id: 'sub-aros-encastrar',
        name: 'Aros Orientáveis e Fixos',
        slug: 'aros-encastrar',
        parentSlug: 'lampadas-e-aros',
      }
    ]
  },
  {
    id: 'cat-smart',
    name: 'Smart Control',
    slug: 'smart-control',
    description: 'Gestão inteligente de iluminação, protocolos DALI-2, 0-10V, Zigbee, controladores TUYA e comandos RF.',
    children: [
      {
        id: 'sub-controladores-rf',
        name: 'Controladores RF & Touch',
        slug: 'controladores-rf',
        parentSlug: 'smart-control',
      },
      {
        id: 'sub-fontes-alimentacao',
        name: 'Fontes de Alimentação',
        slug: 'fontes-alimentacao',
        parentSlug: 'smart-control',
      },
      {
        id: 'sub-sensores',
        name: 'Sensores de Presença',
        slug: 'sensores',
        parentSlug: 'smart-control',
      }
    ]
  }
];

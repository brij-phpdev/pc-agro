import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'prod-athena-3cct',
    databaseId: 9036,
    name: 'Luminária de Rua ATHENA 3CCT',
    slug: 'athena-3cct',
    sku: 'LDP-192-012-X',
    globalUniqueId: '5600912613180',
    price: '89,90 € - 145,00 €',
    regularPrice: '145,00 €',
    category: 'Iluminação de Rua',
    parentCategory: 'iluminacao-exterior',
    subCategory: 'iluminacao-rua',
    badge: 'Multi-Potência & 3CCT',
    shortDescription: 'Luminária de Rua ATHENA Multi-Potência (60W / 80W / 100W) 3CCT (2700K / 4200K / 5700K) e 150Lm/W com proteção IP66 e IK08.',
    description: `A ATHENA redefine a flexibilidade na iluminação pública, combinando um desempenho robusto com uma adaptabilidade incrível. É a solução ideal para quem procura otimizar o stock e personalizar a iluminação de ruas, caminhos e zonas residenciais.
Equipada com tecnologia Multi-Potência (60W / 80W / 100W) e 3CCT, a ATHENA permite ajustar tanto o fluxo luminoso como a temperatura de cor num único dispositivo, adaptando-se perfeitamente às exigências específicas de cada projeto. Com uma eficácia de 150Lm/W, oferece uma luminosidade superior com uma eficiência energética de classe mundial.`,
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/02/Athena-950-1.jpg',
    galleryImages: [
      'https://cms.ledup.pt/wp-content/uploads/2026/02/Athena-950-1.jpg',
      'https://cms.ledup.pt/wp-content/uploads/2026/02/Athena-950-2.jpg',
      'https://cms.ledup.pt/wp-content/uploads/2026/02/Athena-950-2.jpg'
    ],
    technicalImage: 'https://cms.ledup.pt/wp-content/uploads/2026/02/ATHENA-img-tecnica.jpg',
    datasheetPdf: 'https://cms.ledup.pt/wp-content/uploads/2025/09/LEDUP-Catalogo-Iluminacao-Publica_Digital.pdf',
    dimmable: true,
    ipRating: 'IP66',
    cctOptions: ['2700K', '4200K', '5700K'],
    features: [
      'Seletor interno de Multi-Potência (60W / 80W / 100W)',
      'Tecnologia 3CCT integrada com comutador estanque',
      'Eficácia luminosa elevada de 150 Lm/W',
      'Corpo em alumínio fundido sob pressão com revestimento anticorrosão',
      'Proteção contra sobretensões transitórias até 10kV',
      'Abertura do compartimento elétrico sem ferramentas (Tool-less access)'
    ],
    applications: [
      'Vias urbanas secundárias e principais',
      'Zonas residenciais e condomínios fechados',
      'Parques de estacionamento e áreas logísticas externas',
      'Ciclovias e passeios pedonais'
    ],
    specifications: [
      { label: 'Tensão de Alimentação', value: '220-240 Vac ~ 50/60Hz', category: 'eletrico' },
      { label: 'Potência Configurável', value: '60W / 80W / 100W', category: 'eletrico' },
      { label: 'Fator de Potência', value: '> 0.95', category: 'eletrico' },
      { label: 'Fluxo Luminoso', value: '9.000 lm a 15.000 lm', category: 'optico' },
      { label: 'Eficácia Luminosa', value: '150 Lm/W', category: 'optico' },
      { label: 'Temperatura de Cor (CCT)', value: '2700K / 4200K / 5700K selecionável', category: 'optico' },
      { label: 'Índice de Reprodução Cromática (CRI)', value: 'Ra > 75', category: 'optico' },
      { label: 'Ótica / Distribuição', value: 'Asimétrica Tipo II / Tipo III', category: 'optico' },
      { label: 'Grau de Proteção', value: 'IP66', category: 'mecanico' },
      { label: 'Resistência ao Impacto', value: 'IK08', category: 'mecanico' },
      { label: 'Diâmetro do Encaixe', value: 'Ø 60 mm (ajuste horizontal/vertical ±15°)', category: 'mecanico' },
      { label: 'Temperatura de Operação', value: '-30°C a +50°C', category: 'geral' },
      { label: 'Vida Útil (L80B10)', value: '> 100.000 horas', category: 'geral' },
      { label: 'Garantia', value: '5 Anos', category: 'geral' },
    ],
    variations: [
      {
        id: 'var-athena-60w',
        name: 'ATHENA 60W 3CCT',
        sku: 'LDP-192-012-60',
        price: '89,90 €',
        regularPrice: '89,90 €',
        attributes: { potencia: '60W', cct: '3CCT (2700/4200/5700K)', acabamento: 'Cinza Grafite' }
      },
      {
        id: 'var-athena-80w',
        name: 'ATHENA 80W 3CCT',
        sku: 'LDP-192-012-80',
        price: '118,50 €',
        regularPrice: '118,50 €',
        attributes: { potencia: '80W', cct: '3CCT (2700/4200/5700K)', acabamento: 'Cinza Grafite' }
      },
      {
        id: 'var-athena-100w',
        name: 'ATHENA 100W 3CCT',
        sku: 'LDP-192-012-100',
        price: '145,00 €',
        regularPrice: '145,00 €',
        attributes: { potencia: '100W', cct: '3CCT (2700/4200/5700K)', acabamento: 'Cinza Grafite' }
      }
    ],
    relatedProductSlugs: ['flare-solar-ip66', 'onyx-3cct', 'kastra-3-cct']
  },
  {
    id: 'prod-onyx-3cct',
    databaseId: 9040,
    name: 'Campânula Industrial ONYX 3CCT',
    slug: 'onyx-3cct',
    sku: 'LDP-ONX-200-3CCT',
    price: '115,00 € - 179,00 €',
    regularPrice: '179,00 €',
    category: 'Campânulas Highbay',
    parentCategory: 'industria-e-emergencia',
    subCategory: 'highbay',
    badge: '160 Lm/W Dimável 0-10V',
    shortDescription: 'Campânula Industrial Highbay ONYX com regulação 0-10V, 3CCT, alta eficiência de 160Lm/W e corpo em liga de magnésio.',
    description: `A campânula ONYX 3CCT foi desenvolvida para os ambientes industriais e logísticos mais exigentes. Equipada com sensor de luminosidade e presença opcional, garante poupanças energéticas extraordinárias.
O seu difusor em policarbonato com controlo de brilho e lentes de precisão 90° e 120° proporcionam uma uniformidade excecional ao nível do piso operacional.`,
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/02/ONYX-200W.jpg',
    galleryImages: [
      'https://cms.ledup.pt/wp-content/uploads/2026/02/ONYX-200W.jpg',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    technicalImage: 'https://cms.ledup.pt/wp-content/uploads/2026/02/ATHENA-img-tecnica.jpg',
    datasheetPdf: 'https://cms.ledup.pt/wp-content/uploads/2025/09/LEDUP-Catalogo-Lucida-v2.0_Digital.pdf',
    dimmable: true,
    ipRating: 'IP65',
    cctOptions: ['3000K', '4000K', '5000K'],
    features: [
      'Eficácia de ponta: 160 Lúmens por Watt real',
      'Regulação de fluxo 0-10V / PWM integrada',
      'Seletor CCT protegido por tampa estanque de rosca',
      'Dissipação passiva de calor em aletas de alumínio forjado a frio',
      'Gancho de suspensão com fecho de segurança incluído'
    ],
    applications: [
      'Naves industriais e unidades de transformação',
      'Centros de distribuição logística e armazéns de grande altura',
      'Pavilhões gimnodesportivos e exposições',
      'Oficinas mecânicas e cais de carga'
    ],
    specifications: [
      { label: 'Potência Nominal', value: '100W / 150W / 200W', category: 'eletrico' },
      { label: 'Tensão', value: '100-277 Vac', category: 'eletrico' },
      { label: 'Eficácia Luminosa', value: '160 Lm/W', category: 'optico' },
      { label: 'CRI', value: 'Ra > 80', category: 'optico' },
      { label: 'Ângulo de Feixe', value: '90° / 120°', category: 'optico' },
      { label: 'Grau IP', value: 'IP65', category: 'mecanico' },
      { label: 'Resistência ao Choque', value: 'IK08', category: 'mecanico' },
      { label: 'Garantia', value: '5 Anos', category: 'geral' }
    ],
    variations: [
      {
        id: 'var-onyx-100w',
        name: 'ONYX 100W 3CCT',
        sku: 'LDP-ONX-100',
        price: '115,00 €',
        regularPrice: '115,00 €',
        attributes: { potencia: '100W', cct: '3CCT (3000/4000/5000K)' }
      },
      {
        id: 'var-onyx-150w',
        name: 'ONYX 150W 3CCT',
        sku: 'LDP-ONX-150',
        price: '142,00 €',
        regularPrice: '142,00 €',
        attributes: { potencia: '150W', cct: '3CCT (3000/4000/5000K)' }
      },
      {
        id: 'var-onyx-200w',
        name: 'ONYX 200W 3CCT',
        sku: 'LDP-ONX-200',
        price: '179,00 €',
        regularPrice: '179,00 €',
        attributes: { potencia: '200W', cct: '3CCT (3000/4000/5000K)' }
      }
    ],
    relatedProductSlugs: ['athena-3cct', 't8-led-premium-3cct-160lm']
  },
  {
    id: 'prod-orbis-3cct',
    databaseId: 9042,
    name: 'Painel LED ORBIS 3CCT',
    slug: 'orbis-3cct',
    sku: 'LDP-ORB-018-IP54',
    price: '38,50 € - 54,00 €',
    regularPrice: '54,00 €',
    category: 'Painéis LED',
    parentCategory: 'iluminacao-interior',
    subCategory: 'paineis',
    badge: 'IP54 & UGR<19',
    shortDescription: 'Painel LED circular/quadrado ORBIS IP54 com ótica antiofuscamento UGR<19 e comutação 3CCT para áreas húmidas e escritórios.',
    description: `O painel LED ORBIS combina perfil ultra-fino, índice de proteção frontal IP54 e certificação UGR<19, sendo a escolha ideal para escritórios, clínicas, hotéis e instalações sanitárias onde o bem-estar visual é inegociável.`,
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/02/ORBIS-18.jpg',
    galleryImages: [
      'https://cms.ledup.pt/wp-content/uploads/2026/02/ORBIS-18.jpg',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
    ],
    technicalImage: 'https://cms.ledup.pt/wp-content/uploads/2026/02/ATHENA-img-tecnica.jpg',
    datasheetPdf: 'https://cms.ledup.pt/wp-content/uploads/2025/09/LEDUP-Catalogo-Paineis-Led_Digital.pdf',
    dimmable: false,
    ipRating: 'IP54',
    cctOptions: ['3000K', '4000K', '6000K'],
    features: [
      'Controlo de encandeamento ótimo: UGR < 19',
      'Proteção IP54 contra salpicos de água e poeiras',
      'Driver Flicker-Free (sem cintilação visual)',
      'Moldura em alumínio lacado a branco texturado RAL 9016'
    ],
    specifications: [
      { label: 'Potência', value: '18W / 24W / 36W', category: 'eletrico' },
      { label: 'Eficácia', value: '110 Lm/W', category: 'optico' },
      { label: 'UGR', value: '< 19', category: 'optico' },
      { label: 'IP', value: 'IP54', category: 'mecanico' },
      { label: 'Vida Útil', value: '50.000 horas L80B10', category: 'geral' }
    ],
    relatedProductSlugs: ['skid-7w', 'nexus-3cct']
  },
  {
    id: 'prod-nexus-3cct',
    databaseId: 3249,
    name: 'Sistema Linear Modular NEXUS 3CCT',
    slug: 'nexus-3cct',
    sku: 'LDP-NEX-060-3CCT',
    price: '80,70 € - 133,00 €',
    regularPrice: '133,00 €',
    category: 'Decorativa',
    parentCategory: 'iluminacao-interior',
    subCategory: 'decorativa',
    badge: 'Arquitetural Modular',
    shortDescription: 'Perfil linear contínuo em alumínio extrudido com ligação mecânica e elétrica direta em linha reta, L, T e cruz.',
    description: `NEXUS 3CCT é um sistema de iluminação arquitetural contínua, desenhado para criar linhas de luz contínuas e padrões geométricos sem interrupção estética. Permite instalação suspensa ou saliente, com emissão direta ou direta/indireta.`,
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/0c07b3d12905cc52adefc26729ceae90.jpg',
    galleryImages: [
      'https://cms.ledup.pt/wp-content/uploads/2026/04/0c07b3d12905cc52adefc26729ceae90.jpg',
      'https://cms.ledup.pt/wp-content/uploads/2026/04/f5d3a3f2c7fb189729c338e60f8d8490.jpg'
    ],
    technicalImage: 'https://cms.ledup.pt/wp-content/uploads/2026/02/ATHENA-img-tecnica.jpg',
    datasheetPdf: 'https://cms.ledup.pt/wp-content/uploads/2025/09/LEDUP-Catalogo-Armaduras-de-Interior-v1-v2.pdf',
    dimmable: true,
    ipRating: 'IP40',
    cctOptions: ['3000K', '4000K', '5700K'],
    features: [
      'Conetores de ligação rápida em L (90°), T e Cruz (+)',
      'Difusor opalino microextrudido com luz 100% homogénea',
      'Acabamentos de topo: Preto Anodizado ou Branco Texturado',
      'Kit de suspensão regulável micrométrico incluído'
    ],
    specifications: [
      { label: 'Comprimento', value: '1200 mm / 1500 mm', category: 'mecanico' },
      { label: 'Potência', value: '40W / 60W', category: 'eletrico' },
      { label: 'CRI', value: 'Ra > 90', category: 'optico' },
      { label: 'CCT', value: '3CCT (3000K/4000K/5700K)', category: 'optico' },
      { label: 'Garantia', value: '5 Anos', category: 'geral' }
    ],
    variations: [
      {
        id: 'var-nexus-1200-preto',
        name: 'NEXUS 1200mm Preto',
        sku: 'LDP-NEX-120-BK',
        price: '80,70 €',
        regularPrice: '80,70 €',
        attributes: { dimensao: '1200mm', potencia: '40W', acabamento: 'Preto Anodizado' }
      },
      {
        id: 'var-nexus-1500-preto',
        name: 'NEXUS 1500mm Preto',
        sku: 'LDP-NEX-150-BK',
        price: '112,80 €',
        regularPrice: '112,80 €',
        attributes: { dimensao: '1500mm', potencia: '60W', acabamento: 'Preto Anodizado' }
      },
      {
        id: 'var-nexus-1500-branco',
        name: 'NEXUS 1500mm Branco',
        sku: 'LDP-NEX-150-WH',
        price: '133,00 €',
        regularPrice: '133,00 €',
        attributes: { dimensao: '1500mm', potencia: '60W', acabamento: 'Branco Mate' }
      }
    ],
    relatedProductSlugs: ['kastra-3-cct', 'skid-7w']
  },
  {
    id: 'prod-skid-7w',
    databaseId: 3591,
    name: 'Downlight SKID 7W Antirreflexo',
    slug: 'skid-7w',
    sku: 'LDP-SKD-007-BK',
    price: '30,20 €',
    regularPrice: '30,20 €',
    category: 'Downlights',
    parentCategory: 'iluminacao-interior',
    subCategory: 'downlights',
    badge: 'UGR < 16 Conforto',
    shortDescription: 'Downlight compacto de encastrar com recuo profundo de emissão, ótica negra brilhante ou branca com UGR<16.',
    description: `O SKID 7W proporciona iluminação pontual de alto prestígio arquitetural. A fonte de luz recuada elimina qualquer ofuscamento para o observador na sala, destacando texturas e planos verticais com índice cromático Ra > 92.`,
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/d14edf5ebeba3383a6384968c8cd8ec1.jpg',
    galleryImages: [
      'https://cms.ledup.pt/wp-content/uploads/2026/04/d14edf5ebeba3383a6384968c8cd8ec1.jpg',
      'https://cms.ledup.pt/wp-content/uploads/2026/04/a695bf5134511a20b99acff38aec1845.jpg'
    ],
    datasheetPdf: 'https://cms.ledup.pt/wp-content/uploads/2025/09/LEDUP-Catalogo-Downlights-indoor_Digital.pdf',
    dimmable: true,
    ipRating: 'IP44',
    specifications: [
      { label: 'Potência', value: '7W', category: 'eletrico' },
      { label: 'Corte de Teto', value: 'Ø 68 mm', category: 'mecanico' },
      { label: 'Ângulo de Abertura', value: '36° / 60°', category: 'optico' },
      { label: 'CRI', value: 'Ra > 92', category: 'optico' },
      { label: 'UGR', value: '< 16', category: 'optico' }
    ],
    relatedProductSlugs: ['kastra-3-cct', 'nexus-3cct']
  },
  {
    id: 'prod-kastra-3cct',
    databaseId: 3016,
    name: 'Projetor Tracklight KASTRA 3CCT',
    slug: 'kastra-3-cct',
    sku: 'LDP-KST-030-3CCT',
    price: '56,00 € - 79,60 €',
    regularPrice: '79,60 €',
    category: 'Tracklights',
    parentCategory: 'iluminacao-interior',
    subCategory: 'tracklights',
    badge: 'Calha 3 Vias & Zoom',
    shortDescription: 'Projetor orientável para calha eletrificada trifásica com driver embutido no adaptador e seletor 3CCT.',
    description: `Concebido para galerias, museus e espaços de retalho requintados. Rotação 355° na horizontal e 90° na vertical com ajuste preciso de foco e lentes intermutáveis.`,
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/f66aed4be65a7d949bbcd250a6029bf9.jpg',
    galleryImages: [
      'https://cms.ledup.pt/wp-content/uploads/2026/04/f66aed4be65a7d949bbcd250a6029bf9.jpg',
      'https://cms.ledup.pt/wp-content/uploads/2026/04/937ff57991db3f10e6b992c36efc32e8.jpg'
    ],
    datasheetPdf: 'https://cms.ledup.pt/wp-content/uploads/2025/09/LEDUP-Catalogo-Tracklight_Digital.pdf',
    dimmable: true,
    ipRating: 'IP20',
    cctOptions: ['2700K', '3000K', '4000K'],
    specifications: [
      { label: 'Potência', value: '25W / 35W', category: 'eletrico' },
      { label: 'Compatibilidade', value: 'Calha Universal 4 vias (3 fases)', category: 'eletrico' },
      { label: 'CRI', value: 'Ra > 95 (True Color)', category: 'optico' },
      { label: 'Rotação', value: '355° horizontal / 90° vertical', category: 'mecanico' },
      { label: 'Garantia', value: '5 Anos', category: 'geral' }
    ],
    relatedProductSlugs: ['nexus-3cct', 'skid-7w']
  },
  {
    id: 'prod-flare-solar-ip66',
    databaseId: 2894,
    name: 'Projetor Solar Autónomo FLARE IP66',
    slug: 'flare-solar-ip66',
    sku: 'LDP-FLR-SLR-100',
    price: '50,00 € - 108,00 €',
    regularPrice: '108,00 €',
    category: 'Projetores',
    parentCategory: 'iluminacao-exterior',
    subCategory: 'projetores',
    badge: 'Solar 100% Autónomo',
    shortDescription: 'Projetor solar de alta luminosidade com painel monocristalino integrado, bateria LiFePO4 de longa duração e comando infravermelhos.',
    description: `Iluminação exterior sem fios ou custos de eletricidade. O FLARE Solar carrega em 5 a 6 horas de sol e fornece até 14 horas de autonomia noturna contínua com gestão inteligente de carga.`,
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/494f7be18c954c4c191f823c034470cd.jpg',
    galleryImages: [
      'https://cms.ledup.pt/wp-content/uploads/2026/04/494f7be18c954c4c191f823c034470cd.jpg',
      'https://cms.ledup.pt/wp-content/uploads/2026/04/90476f177d98ee955fab3e06c8611e95.jpg'
    ],
    datasheetPdf: 'https://cms.ledup.pt/wp-content/uploads/2025/09/LEDUP-Catalogo-Iluminacao-Publica_Digital.pdf',
    ipRating: 'IP66',
    specifications: [
      { label: 'Bateria', value: 'LiFePO4 3.2V 25Ah (>2000 ciclos)', category: 'eletrico' },
      { label: 'Painel Solar', value: 'Monocristalino 6V 30W', category: 'eletrico' },
      { label: 'Autonomia', value: '12 a 16 Horas', category: 'geral' },
      { label: 'Grau IP', value: 'IP66 Estanque Total', category: 'mecanico' },
      { label: 'Controlo', value: 'Comando RF com modos crepuscular e temporizador', category: 'geral' }
    ],
    relatedProductSlugs: ['athena-3cct']
  },
  {
    id: 'prod-neon-side-230v',
    databaseId: 3343,
    name: 'Fita Neon Side 1018 230V Premium 14W',
    slug: 'neon-side-1018-230v-premium-14w',
    sku: 'LDP-NEO-1018-230',
    price: '22,00 €',
    regularPrice: '22,00 €',
    category: 'Fitas LED & NEON',
    parentCategory: 'fitas-led-neon',
    subCategory: 'neon-led',
    badge: '230V Direto IP67',
    shortDescription: 'Perfil Neon LED flexível de curvatura lateral 10x18mm, ligação direta a 230Vac até 50 metros num único ponto de alimentação.',
    description: `Fabricado em silicone alimentar extrudido de alta resistência aos raios UV e névoa salina. Iluminação contínua tipo néon clássico, sem qualquer pontuação visível.`,
    image: 'https://cms.ledup.pt/wp-content/uploads/2026/04/0ba34b30e0bd2e6327222b66ea86b8af.jpg',
    galleryImages: [
      'https://cms.ledup.pt/wp-content/uploads/2026/04/0ba34b30e0bd2e6327222b66ea86b8af.jpg',
      'https://cms.ledup.pt/wp-content/uploads/2026/04/f1851880e9e4dc9c0a2d58c15cf5f998.jpg'
    ],
    datasheetPdf: 'https://cms.ledup.pt/wp-content/uploads/2025/09/LEDUP-Catalogo-Fitas-Neon_Digital.pdf',
    ipRating: 'IP67',
    specifications: [
      { label: 'Tensão', value: '230 Vac', category: 'eletrico' },
      { label: 'Consumo por Metro', value: '14 W/m', category: 'eletrico' },
      { label: 'Secção Transversal', value: '10 x 18 mm', category: 'mecanico' },
      { label: 'Unidade de Corte', value: 'A cada 10 cm', category: 'mecanico' },
      { label: 'Comprimento Máximo Alimentado', value: '50 Metros', category: 'geral' }
    ],
    relatedProductSlugs: ['nexus-3cct']
  },
  {
    id: 'prod-t8-premium',
    databaseId: 13188,
    name: 'Tubo T8 LED Premium 3CCT 160Lm/W',
    slug: 't8-led-premium-3cct-160lm',
    sku: 'LDP-T8-PREM-160',
    price: '9,80 € - 14,50 €',
    regularPrice: '14,50 €',
    category: 'Tubos T8 LED',
    parentCategory: 'lampadas-e-aros',
    subCategory: 'tubos-t8',
    badge: '160 Lm/W Rotativo',
    shortDescription: 'Tubo LED profissional com topo rotativo, corpo em vidro termorresistente e seletor 3CCT (3000K/4000K/6500K).',
    description: `Substituição direta de tubos fluorescentes tradicionais com arrancador LED de proteção (Dummy Starter incluído). Alimentação por um só topo em conformidade com as normas internacionais de segurança CE e VDE.`,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    datasheetPdf: 'https://cms.ledup.pt/wp-content/uploads/2025/09/LEDUP-Catalogo-Armaduras-de-Interior-v1-v2.pdf',
    ipRating: 'IP20',
    specifications: [
      { label: 'Comprimentos', value: '600mm (9W) / 1200mm (18W) / 1500mm (24W)', category: 'mecanico' },
      { label: 'Eficácia', value: '160 Lm/W', category: 'optico' },
      { label: 'CCT', value: '3CCT (3000K / 4000K / 6500K)', category: 'optico' },
      { label: 'Garantia', value: '5 Anos', category: 'geral' }
    ],
    relatedProductSlugs: ['onyx-3cct']
  }
];

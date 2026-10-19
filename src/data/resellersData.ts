import { ResellerStore } from '../types';

export const resellersData: ResellerStore[] = [
  {
    id: 'res-lisboa-tanqueluz',
    name: 'Tanqueluz Lisboa — Sede & Showroom',
    district: 'Lisboa',
    city: 'Lisboa',
    address: 'Av. Marechal Gomes da Costa, 27',
    postalCode: '1800-255 Lisboa',
    phone: '+351 218 310 900',
    email: 'lisboa@tanqueluz.pt',
    coordinates: { lat: 38.7562, lng: -9.1089 },
    services: ['Showroom Técnico', 'Stock Imediato', 'Aconselhamento Fotométrico', 'Levantamento em Loja']
  },
  {
    id: 'res-porto-norte',
    name: 'Iluminação & Materiais do Porto',
    district: 'Porto',
    city: 'Porto / Maia',
    address: 'Zona Industrial da Maia, Setor X, Rua D',
    postalCode: '4470-434 Maia',
    phone: '+351 229 478 200',
    email: 'norte@ledup-parceiro.pt',
    coordinates: { lat: 41.2356, lng: -8.6210 },
    services: ['Showroom Completo', 'Bancada de Ensaios LED', 'Apoio a Instaladores']
  },
  {
    id: 'res-braga',
    name: 'Eletromil Braga',
    district: 'Braga',
    city: 'Braga',
    address: 'Rua do Caires, 184',
    postalCode: '4700-206 Braga',
    phone: '+351 253 204 100',
    email: 'braga@eletromil.pt',
    coordinates: { lat: 41.5454, lng: -8.4265 },
    services: ['Stock de Fitas & Perfis', 'Serviço de Corte à Medida', 'Levantamento Rápido']
  },
  {
    id: 'res-coimbra',
    name: 'Tanqueluz Coimbra',
    district: 'Coimbra',
    city: 'Coimbra',
    address: 'Estrada de Eiras, Parque Empresarial de Eiras',
    postalCode: '3020-199 Coimbra',
    phone: '+351 239 499 150',
    email: 'coimbra@tanqueluz.pt',
    coordinates: { lat: 40.2312, lng: -8.4312 },
    services: ['Showroom Técnico', 'Distribuição Regional', 'Estudos Dialux']
  },
  {
    id: 'res-leiria',
    name: 'Tanqueluz Leiria',
    district: 'Leiria',
    city: 'Leiria',
    address: 'Zona Industrial da Barosa, Rua dos Industriais',
    postalCode: '2400-016 Leiria',
    phone: '+351 244 815 620',
    email: 'leiria@tanqueluz.pt',
    coordinates: { lat: 39.7391, lng: -8.8251 },
    services: ['Gama Completa Exterior & Viária', 'Apoio a Projetistas']
  },
  {
    id: 'res-aveiro',
    name: 'Lusoluz Aveiro',
    district: 'Aveiro',
    city: 'Aveiro',
    address: 'Rua de Vilar, Lote 12',
    postalCode: '3810-184 Aveiro',
    phone: '+351 234 378 900',
    email: 'aveiro@lusoluz.pt',
    coordinates: { lat: 40.6405, lng: -8.6538 },
    services: ['Mostruário de Luminárias de Rua', 'Stock de Campânulas ONYX']
  },
  {
    id: 'res-faro',
    name: 'Algarve Luz & Automação',
    district: 'Faro',
    city: 'Faro / Loulé',
    address: 'Parque Industrial de Loulé, Lote 45',
    postalCode: '8100-272 Loulé',
    phone: '+351 289 390 120',
    email: 'algarve@ledup-parceiro.pt',
    coordinates: { lat: 37.1386, lng: -8.0225 },
    services: ['Especialistas em Iluminação Solar FLARE', 'Showroom de Arquitetural']
  },
  {
    id: 'res-setubal',
    name: 'SadoMateriais Setúbal',
    district: 'Setúbal',
    city: 'Setúbal',
    address: 'Avenida do Alentejo, 88',
    postalCode: '2900-025 Setúbal',
    phone: '+351 265 528 400',
    email: 'setubal@sadomateriais.pt',
    coordinates: { lat: 38.5244, lng: -8.8882 },
    services: ['Armaduras Estanques IP66', 'Material Elétrico de Instalação']
  },
  {
    id: 'res-funchal',
    name: 'Madeira Luz & Técnica',
    district: 'Madeira',
    city: 'Funchal',
    address: 'Rua do Frigorífico, 14',
    postalCode: '9000-001 Funchal',
    phone: '+351 291 220 330',
    email: 'madeira@ledup-parceiro.pt',
    coordinates: { lat: 32.6500, lng: -16.9080 },
    services: ['Distribuição nas Ilhas', 'Stock Local Disponível']
  }
];

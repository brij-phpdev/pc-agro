export interface ProductVariation {
  id: string;
  name: string;
  sku: string;
  price: string;
  regularPrice: string;
  attributes: {
    potencia?: string;
    cct?: string;
    acabamento?: string;
    tensao?: string;
    dimensao?: string;
  };
}

export interface TechnicalAttribute {
  label: string;
  value: string;
  category?: 'eletrico' | 'optico' | 'mecanico' | 'geral';
}

export interface Product {
  id: string;
  databaseId?: number;
  name: string;
  slug: string;
  sku: string;
  globalUniqueId?: string;
  price: string;
  regularPrice: string;
  category: string;
  parentCategory: string;
  subCategory?: string;
  badge?: string;
  shortDescription: string;
  description: string;
  image: string;
  galleryImages: string[];
  technicalImage?: string;
  datasheetPdf?: string;
  specifications: TechnicalAttribute[];
  variations?: ProductVariation[];
  applications?: string[];
  features?: string[];
  relatedProductSlugs?: string[];
  dimmable?: boolean;
  ipRating?: string;
  cctOptions?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentSlug?: string;
  description?: string;
  image?: string;
  featuredProduct?: {
    name: string;
    slug: string;
    price: string;
    image: string;
  };
  children?: Category[];
}

export interface DocumentItem {
  id: string;
  title: string;
  category: 'catalogo' | 'ficha-tecnica';
  productCategory: string;
  fileSize: string;
  format: 'PDF';
  year?: string;
  downloadUrl: string;
  thumbnail?: string;
  description?: string;
}

export interface ResellerStore {
  id: string;
  name: string;
  district: string;
  city: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  services: string[];
}

export interface ProjectHotspot {
  productId: string;
  productSlug: string;
  productName: string;
  categoryName: string;
  x: number; // percentage
  y: number; // percentage
}

export interface ProjectSlide {
  id: string;
  title: string;
  tagline: string;
  sector: string;
  capacity?: string;
  location?: string;
  image: string;
  description: string;
  hotspots: ProjectHotspot[];
  highlights?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariation?: ProductVariation;
}

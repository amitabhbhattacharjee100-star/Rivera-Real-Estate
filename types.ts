export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'House' | 'Condominium' | 'Townhouse';
  description: string;
  features: string[];
  imageUrl: string;
  gallery: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  role: string;
}

export interface NavLink {
  label: string;
  view: string;
}

export interface Credit {
  resource: string;
  url: string;
  description: string;
}
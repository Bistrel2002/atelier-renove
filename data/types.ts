export type ServiceSlug =
  | "renovation-complete"
  | "cuisine-bain"
  | "extension"
  | "energetique";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  /** Gabarit éditorial : plein cadre, paire, ou portrait décalé */
  layout: "full" | "pair" | "portrait";
}

export interface Material {
  src: string;
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  surface: string;
  duration: string;
  budget: string;
  category: ServiceSlug;
  /** Ratio de la carte dans les grilles : 3:2 (paysage) ou 4:5 (portrait) */
  ratio: "landscape" | "portrait";
  cover: string;
  coverAlt: string;
  excerpt: string;
  brief: string[];
  beforeAfter?: { before: string; after: string; alt: string };
  gallery: GalleryImage[];
  materials: Material[];
  testimonial?: { quote: string; author: string };
}

export interface Service {
  slug: ServiceSlug;
  num: string;
  title: string;
  short: string;
  hero: string;
  heroAlt: string;
  chapo: string;
  includes: string[];
  method: { title: string; text: string }[];
  faq: { q: string; a: string }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  project: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  text: string;
}

export interface KeyFigure {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

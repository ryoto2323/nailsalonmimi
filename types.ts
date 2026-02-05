export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

export interface CouponItem {
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  conditions: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ReviewItem {
  id: number;
  content: string;
  user: string;
  age: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  open?: boolean; // UI state for accordion if needed
}

export interface StaffItem {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
  tags: string[];
  instagram?: string;
}

export enum SectionId {
  HOME = 'home',
  PROBLEM = 'problem',
  STRONG_POINTS = 'strong-points',
  BEGINNER = 'beginner',
  GALLERY = 'gallery',
  MENU = 'menu',
  STAFF = 'staff',
  OFFER = 'offer',
  FLOW = 'flow',
  ACCESS = 'access',
  EVIDENCE = 'evidence',
  VOICE = 'voice',
  FAQ = 'faq',
}
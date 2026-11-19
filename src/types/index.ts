export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  category: 'hill-station' | 'backwater' | 'sacred-path' | 'coastal' | 'wildlife' | 'custom';
  duration: string; // e.g. "5 Nights / 6 Days"
  nights: number;
  days: number;
  pricePerPerson: number;
  originalPrice?: number;
  featured?: boolean;
  rating: number;
  reviewCount: number;
  image: string;
  destinations: string[];
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
    stayLocation?: string;
  }[];
}

export interface Destination {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  bestTimeToVisit: string;
  idealDuration: string;
  topAttractions: string[];
  tags: string[];
  packagesCount: number;
}

export interface SacredPathItem {
  id: string;
  name: string;
  region: string;
  category: 'temple' | 'jyotirlinga' | 'chardham' | 'heritage';
  image: string;
  description: string;
  spiritualSignificance: string;
  popularCircuit: string;
  idealDays: string;
}

export interface Vehicle {
  id: string;
  name: string;
  category: 'sedan' | 'suv' | 'tempo-traveller' | 'luxury-coach';
  image: string;
  seatingCapacity: string;
  luggageCapacity: string;
  airConditioned: boolean;
  features: string[];
  bestFor: string;
  startingPricePerKm: number;
  packageStartingDay: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  packageName: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  packageId?: string;
  travelDate: string;
  travelersCount: number;
  travelType: string;
  message?: string;
}

export interface Artist {
  id: string;
  name: string;
  category: string;
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  isVerified: boolean;
  isPopular: boolean;
  availability: "available" | "busy" | "unavailable";
  description: string;
  specialties: string[];
  experience: number;
  stats: {
    eventsCompleted: number;
    responseTime: string;
  };
  badges: string[];
}

export interface FilterState {
  categories: string;
  locations: string;
  priceRange: [number, number];
  searchQuery: string;
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

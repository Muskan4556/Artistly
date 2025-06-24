import {
  Mic,
  Music,
  Users,
  Headphones,
  Search,
  UserCheck,
  CheckCircle,
  LucideIcon,
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  count: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface FeaturedArtist {
  name: string;
  category: string;
  rating: number;
  location: string;
  price: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "singer",
    name: "Singers",
    description: "Professional vocalists for all genres",
    icon: Mic,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    count: "150+ Artists",
  },
  {
    id: "dancers",
    name: "Dancers",
    description: "Contemporary, classical, and cultural performers",
    icon: Users,
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    count: "200+ Artists",
  },
  {
    id: "speaker",
    name: "Speakers",
    description: "Motivational and keynote speakers",
    icon: Music,
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
    count: "80+ Artists",
  },
  {
    id: "dj",
    name: "DJs",
    description: "Professional DJs for all occasions",
    icon: Headphones,
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    count: "120+ Artists",  
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Browse Artists",
    description:
      "Explore our curated collection of talented performers across various categories.",
    icon: Search,
    color: "text-purple-500",
  },
  {
    step: "02",
    title: "Shortlist & Request",
    description:
      "Select your preferred artists and send booking requests with your event details.",
    icon: UserCheck,
    color: "text-blue-500",
  },
  {
    step: "03",
    title: "Confirm Booking",
    description:
      "Connect directly with artist managers and finalize your perfect event lineup.",
    icon: CheckCircle,
    color: "text-green-500",
  },
];

export const featuredArtists: FeaturedArtist[] = [
  {
    name: "Sarah Johnson",
    category: "Singer",
    rating: 4.9,
    location: "Mumbai",
    price: "₹15,000 - ₹25,000",
    image:
      "https://images.unsplash.com/photo-1608319917470-9d9179430f8d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "DJ Arjun",
    category: "DJ",
    rating: 4.8,
    location: "Delhi",
    price: "₹20,000 - ₹35,000",
    image:
      "https://images.unsplash.com/photo-1531354580326-4f44f943946c?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Dance Co.",
    category: "Dancers",
    rating: 4.9,
    location: "Bangalore",
    price: "₹12,000 - ₹22,000",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=400&fit=crop&crop=face",
  },
];

export interface TrustedCompany {
  name: string;
  type: string;
  description: string;
  logo: string;
  industry: string;
  size: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const trustedCompanies: TrustedCompany[] = [
  {
    name: "TechCorp Solutions",
    type: "Corporate Events",
    description: "Leading tech company hosting 50+ events annually",
    logo: "/api/placeholder/120/60",
    industry: "Technology",
    size: "5000+ employees",
  },
  {
    name: "EventPro Agency",
    type: "Event Management",
    description: "Premium event planning for luxury brands",
    logo: "/api/placeholder/120/60",
    industry: "Event Management",
    size: "200+ events/year",
  },
  {
    name: "Grand Celebrations",
    type: "Wedding Planning",
    description: "India's top destination wedding planners",
    logo: "/api/placeholder/120/60",
    industry: "Wedding & Social",
    size: "1000+ weddings",
  },
  {
    name: "MegaFest Productions",
    type: "Festival Organization",
    description: "Organizers of India's largest music festivals",
    logo: "/api/placeholder/120/60",
    industry: "Entertainment",
    size: "500K+ attendees",
  },
  {
    name: "Corporate Connect",
    type: "Business Events",
    description: "Specialized in conferences and corporate galas",
    logo: "/api/placeholder/120/60",
    industry: "Corporate Services",
    size: "Fortune 500 clients",
  },
  {
    name: "Royal Occasions",
    type: "Luxury Events",
    description: "Curating exclusive high-end celebrations",
    logo: "/api/placeholder/120/60",
    industry: "Luxury Events",
    size: "Ultra-premium segment",
  },
  {
    name: "Cultural Heritage Org",
    type: "Cultural Events",
    description: "Promoting traditional arts and culture",
    logo: "/api/placeholder/120/60",
    industry: "Arts & Culture",
    size: "Pan-India reach",
  },
  {
    name: "SportsFest Management",
    type: "Sports Events",
    description: "Premier sports event management company",
    logo: "/api/placeholder/120/60",
    industry: "Sports & Recreation",
    size: "International events",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Event Manager",
    company: "TechCorp",
    content:
      "Artistly made finding the perfect performers for our corporate event incredibly easy. The booking process was seamless!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Wedding Planner",
    company: "Celebration Inc",
    content:
      "The quality of artists on this platform is exceptional. Our clients were thrilled with the entertainment!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616c273e0ec?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Festival Director",
    company: "Festival Org",
    content:
      "We've used Artistly for multiple festivals. The variety and professionalism of artists never disappoints.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Creative Director",
    company: "Brand Activations Ltd",
    content:
      "The artists we booked through Artistly exceeded all expectations. Professional, talented, and delivered an unforgettable performance!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Arjun Singh",
    role: "Corporate Events Head",
    company: "Global Solutions Inc",
    content:
      "From initial inquiry to final performance, everything was handled professionally. Our annual gala was a huge success!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Kavya Reddy",
    role: "Wedding Coordinator",
    company: "Dream Weddings",
    content:
      "The singers and dancers we booked made our client's wedding absolutely magical. Highly recommend Artistly!",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
  {
    id: 7,
    name: "Vikram Joshi",
    role: "Entertainment Manager",
    company: "Hospitality Group",
    content:
      "Quick response times and verified artists. Artistly has become our go-to platform for all entertainment needs.",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
  {
    id: 8,
    name: "Meera Nair",
    role: "Event Producer",
    company: "Cultural Events Co",
    content:
      "Amazing variety of traditional and contemporary artists. The booking system is user-friendly and efficient.",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
  {
    id: 9,
    name: "Rohit Verma",
    role: "Marketing Director",
    company: "Fashion House",
    content:
      "The DJ and live band combination we booked created the perfect atmosphere for our fashion show launch!",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
  {
    id: 10,
    name: "Anita Desai",
    role: "Social Events Manager",
    company: "Elite Celebrations",
    content:
      "Professional artists, transparent pricing, and excellent customer service. Artistly sets the gold standard!",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
  {
    id: 11,
    name: "Deepak Malhotra",
    role: "Conference Organizer",
    company: "Business Summit",
    content:
      "The keynote speaker we booked was exceptional. Great communication throughout the entire process.",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
  {
    id: 12,
    name: "Ritu Agarwal",
    role: "Party Planner",
    company: "VIP Events",
    content:
      "From Bollywood dancers to classical musicians, Artistly has the perfect artist for every occasion!",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
  {
    id: 13,
    name: "Sameer Khan",
    role: "Event Coordinator",
    company: "Tech Conferences",
    content:
      "The standup comedian we hired had the entire audience in splits. Booking was hassle-free and professional.",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
  {
    id: 14,
    name: "Pooja Mehta",
    role: "Destination Wedding Planner",
    company: "Royal Weddings",
    content:
      "Artistly helped us find amazing local artists for destination weddings. Their network is truly impressive!",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
  {
    id: 15,
    name: "Nikhil Rao",
    role: "Brand Manager",
    company: "Lifestyle Brand",
    content:
      "The live band performance at our product launch was phenomenal. Great value for money and top-notch service!",
    rating: 5,
    avatar: "/api/placeholder/64/64",
  },
];

export const platformStats = {
  totalArtists: "500+",
  totalEvents: "1000+",
  totalPlanners: "250+",
  citiesCovered: "15+",
};

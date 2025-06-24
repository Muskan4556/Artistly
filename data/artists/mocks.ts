import { Artist } from "@/types/artist";

export const artists: Artist[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    category: "Singer",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1608319917470-9d9179430f8d?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviewCount: 127,
    priceRange: "₹15,000 - ₹25,000",
    isVerified: true,
    isPopular: true,
    availability: "available",
    description:
      "Professional vocalist specializing in Bollywood, classical, and contemporary music. Perfect for weddings, corporate events, and private parties.",
    specialties: ["Bollywood", "Classical", "Jazz", "Soul"],
    experience: 8,
    stats: {
      eventsCompleted: 150,
      responseTime: "2 hours",
    },
    badges: ["Top Rated", "Quick Response", "Premium Artist"],
  },
  {
    id: "2",
    name: "DJ Arjun",
    category: "DJ",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1531354580326-4f44f943946c??w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviewCount: 89,
    priceRange: "₹20,000 - ₹35,000",
    isVerified: true,
    isPopular: true,
    availability: "available",
    description:
      "Award-winning DJ with 10+ years of experience. Specializes in electronic, Bollywood, and commercial music for clubs and events.",
    specialties: ["Electronic", "Bollywood", "House", "Commercial"],
    experience: 10,
    stats: {
      eventsCompleted: 200,
      responseTime: "1 hour",
    },
    badges: ["Award Winner", "Premium Artist", "Top Rated"],
  },
  {
    id: "3",
    name: "Priya Dance Company",
    category: "Dancers",
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviewCount: 156,
    priceRange: "₹12,000 - ₹22,000",
    isVerified: true,
    isPopular: false,
    availability: "available",
    description:
      "Award-winning contemporary and classical dance ensemble with 6 professional dancers. Renowned for their mesmerizing performances at cultural events, weddings, and corporate shows.",
    specialties: ["Classical", "Contemporary", "Bollywood", "Folk"],
    experience: 6,
    stats: {
      eventsCompleted: 120,
      responseTime: "3 hours",
    },
    badges: ["Award Winners", "Cultural Expert"],
  },
  {
    id: "4",
    name: "Dr. Christian Matthews",
    category: "Speaker",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1676278746071-cd54ce97bf16?w=400&h=200&fit=crop&crop=face",
    rating: 4.7,
    reviewCount: 67,
    priceRange: "₹25,000 - ₹50,000",
    isVerified: true,
    isPopular: false,
    availability: "busy",
    description:
      "Renowned motivational speaker and corporate trainer with 15+ years of experience. Specializes in leadership development, team building, and personal transformation.",
    specialties: [
      "Leadership Development",
      "Motivation",
      "Corporate Training",
      "Personal Development",
    ],
    experience: 15,
    stats: {
      eventsCompleted: 80,
      responseTime: "4 hours",
    },
    badges: ["Corporate Expert", "Bestselling Author"],
  },
  {
    id: "5",
    name: "Melody Sisters",
    category: "Singer",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1693835843843-82f691094f59?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviewCount: 134,
    priceRange: "₹18,000 - ₹30,000",
    isVerified: true,
    isPopular: true,
    availability: "available",
    description:
      "Twin sister duo specializing in harmony vocals. Perfect for weddings, cultural events, and private concerts.",
    specialties: ["Harmony", "Classical", "Devotional", "Folk"],
    experience: 7,
    stats: {
      eventsCompleted: 110,
      responseTime: "2 hours",
    },
    badges: ["Twin Duo", "Harmony Specialists", "Top Rated"],
  },
  {
    id: "6",
    name: "Beat Master Vikram",
    category: "DJ",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1511222138462-5d03818b409c?w=400&h=400&fit=crop&crop=face",
    rating: 4.6,
    reviewCount: 78,
    priceRange: "₹15,000 - ₹28,000",
    isVerified: true,
    isPopular: false,
    availability: "available",
    description:
      "Creative DJ known for unique mashups and live mixing. Specializes in weddings, college events, and private parties.",
    specialties: ["Mashups", "Live Mixing", "Bollywood", "Punjabi"],
    experience: 5,
    stats: {
      eventsCompleted: 95,
      responseTime: "3 hours",
    },
    badges: ["Mashup King", "College Favorite"],
  },
  {
    id: "7",
    name: "Kathak Kalakar Troupe",
    category: "Dancers",
    location: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1688820661462-a44e4b2770e8?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviewCount: 98,
    priceRange: "₹20,000 - ₹35,000",
    isVerified: true,
    isPopular: true,
    availability: "available",
    description:
      "Traditional Kathak dance troupe with 8 trained artists. Specializes in classical Indian dance forms and cultural presentations.",
    specialties: ["Kathak", "Classical", "Cultural", "Traditional"],
    experience: 12,
    stats: {
      eventsCompleted: 160,
      responseTime: "2 hours",
    },
    badges: ["Cultural Heritage", "Master Artists", "Award Winners"],
  },
  {
    id: "8",
    name: "Dr. Anita Sharma",
    category: "Speaker",
    location: "Bangalore",
    image:
      "https://plus.unsplash.com/premium_photo-1706546719021-7751fb704df3?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviewCount: 45,
    priceRange: "₹30,000 - ₹60,000",
    isVerified: true,
    isPopular: false,
    availability: "available",
    description:
      "Renowned psychologist and wellness expert. Speaks on mental health, work-life balance, and personal growth.",
    specialties: [
      "Mental Health",
      "Wellness",
      "Psychology",
      "Work-Life Balance",
    ],
    experience: 20,
    stats: {
      eventsCompleted: 60,
      responseTime: "6 hours",
    },
    badges: ["PhD Holder", "Wellness Expert", "Published Author"],
  },
  {
    id: "9",
    name: "Rhythm Rockers Band",
    category: "Singer",
    location: "Chennai",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
    reviewCount: 112,
    priceRange: "₹35,000 - ₹55,000",
    isVerified: true,
    isPopular: true,
    availability: "available",
    description:
      "5-piece rock band specializing in covers and original compositions. Perfect for concerts, festivals, and corporate events.",
    specialties: ["Rock", "Pop", "Covers", "Original Music"],
    experience: 9,
    stats: {
      eventsCompleted: 85,
      responseTime: "4 hours",
    },
    badges: ["Live Band", "Original Music", "Festival Artists"],
  },
  {
    id: "10",
    name: "DJ Annie",
    category: "DJ",
    location: "Hyderabad",
    image:
      "https://plus.unsplash.com/premium_photo-1708589337976-de3bdaf59815?w=400&h=400&fit=crop&crop=face",
    rating: 4.5,
    reviewCount: 67,
    priceRange: "₹18,000 - ₹32,000",
    isVerified: true,
    isPopular: false,
    availability: "available",
    description:
      "Female DJ specializing in electronic dance music and progressive house. Brings high energy to every event.",
    specialties: ["EDM", "Progressive House", "Trance", "Commercial"],
    experience: 4,
    stats: {
      eventsCompleted: 55,
      responseTime: "2 hours",
    },
    badges: ["Female Artist", "EDM Specialist", "Rising Star"],
  },
  {
    id: "11",
    name: "Comedy Central Amit",
    category: "Speaker",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 4.6,
    reviewCount: 89,
    priceRange: "₹20,000 - ₹40,000",
    isVerified: true,
    isPopular: true,
    availability: "available",
    description:
      "Stand-up comedian with sharp wit and clean humor. Perfect for corporate events, private parties, and entertainment shows.",
    specialties: [
      "Stand-up Comedy",
      "Corporate Humor",
      "Clean Comedy",
      "Improv",
    ],
    experience: 6,
    stats: {
      eventsCompleted: 120,
      responseTime: "1 hour",
    },
    badges: ["Comedy Star", "Corporate Favorite", "Quick Response"],
  },
  {
    id: "12",
    name: "Fusion Folk Dancers",
    category: "Dancers",
    location: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1711565375483-be625c9bd023?w=400&h=400&fit=crop&crop=face",
    rating: 4.4,
    reviewCount: 76,
    priceRange: "₹16,000 - ₹28,000",
    isVerified: true,
    isPopular: false,
    availability: "busy",
    description:
      "Modern fusion dance group combining traditional folk with contemporary styles. Specializes in cultural festivals and themed events.",
    specialties: [
      "Folk Fusion",
      "Contemporary",
      "Cultural",
      "Themed Performances",
    ],
    experience: 5,
    stats: {
      eventsCompleted: 70,
      responseTime: "5 hours",
    },
    badges: ["Fusion Specialists", "Cultural Artists", "Creative Team"],
  },
];

export const categories = [...new Set(artists.map((a) => a.category))]
  .map((cat) => ({
    label: cat,
    value: cat,
    count: artists.filter((artist) => artist.category === cat).length,
  }))
  .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
          
export const locations = [...new Set(artists.map((a) => a.location))]
  .map((loc) => ({
    label: loc,
    value: loc,
    count: artists.filter((artist) => artist.location === loc).length,
  }))
  .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));

export const priceRanges = [
  { label: "Under ₹20,000", value: [0, 20000] },
  { label: "₹20,000 - ₹35,000", value: [20000, 35000] },
  { label: "₹35,000 - ₹50,000", value: [35000, 50000] },
  { label: "Above ₹50,000", value: [50000, 100000] },
];

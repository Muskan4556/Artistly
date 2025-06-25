import { feeRangeOptions } from "@/types/artist-form";

export interface ArtistSubmission {
  id: string;
  name: string;
  bio: string;
  location: string;
  categories: string[];
  languages: string[];
  feeRange: string;
  experience: number;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  email: string;
  phone: string;
  profileImage?: string;
  website?: string;
  socialMedia: {
    instagram?: string;
    youtube?: string;
    facebook?: string;
  };
}

export const artistSubmissions: ArtistSubmission[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    bio: "Professional vocalist with 5+ years of experience in Bollywood and classical music. I have performed at over 100 events across India, specializing in live concerts, weddings, and corporate shows. My repertoire includes popular Bollywood hits, classical ragas, and contemporary fusion music.",
    location: "Mumbai",
    categories: ["Singer"],
    languages: ["Hindi", "English", "Urdu"],
    feeRange: "20000-35000",
    experience: 5,
    status: "pending",
    submittedAt: "2025-01-15",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    website: "https://rahulsharma.music",
    socialMedia: {
      instagram: "@rahulsharmamusic",
      youtube: "RahulSharmaOfficial",
    },
  },
  {
    id: "2",
    name: "Priya Patel",
    bio: "Contemporary and classical dancer with expertise in Bharatanatyam, Kathak, and modern fusion styles. I lead a professional dance troupe and have choreographed for various cultural festivals and private events. My performances blend traditional Indian dance with contemporary expressions.",
    location: "Delhi",
    categories: ["Dancers"],
    languages: ["Hindi", "English", "Gujarati"],
    feeRange: "10000-20000",
    experience: 3,
    status: "pending",
    submittedAt: "2025-01-14",
    email: "priya.patel@email.com",
    phone: "+91 87654 32109",
    socialMedia: {
      instagram: "@priyapatelDance",
      youtube: "PriyaPatelDance",
    },
  },
  {
    id: "3",
    name: "DJ Alex",
    bio: "Electronic music DJ with 7+ years of expertise in house, techno, and commercial music. Regular performer at top clubs in Bangalore and other major cities. I specialize in reading the crowd and creating unforgettable musical experiences for weddings, parties, and club events.",
    location: "Bangalore",
    categories: ["DJ"],
    languages: ["English", "Hindi", "Kannada"],
    feeRange: "20000-35000",
    experience: 7,
    status: "approved",
    submittedAt: "2025-01-13",
    email: "dj.alex@email.com",
    phone: "+91 76543 21098",
    website: "https://djalex.in",
    socialMedia: {
      instagram: "@djalexofficial",
      facebook: "DJAlexOfficial",
    },
  },
  {
    id: "4",
    name: "Dr. Kavya Menon",
    bio: "Motivational speaker and corporate trainer with 10+ years of experience in leadership development and personal growth. I hold a PhD in Psychology and have authored three bestselling books. My sessions focus on team building, stress management, and achieving professional excellence through mindful practices.",
    location: "Chennai",
    categories: ["Speaker"],
    languages: ["English", "Tamil", "Malayalam"],
    feeRange: "35000-50000",
    experience: 10,
    status: "rejected",
    submittedAt: "2025-01-12",
    email: "kavya.menon@email.com",
    phone: "+91 65432 10987",
    website: "https://kavyamenon.com",
    socialMedia: {
      instagram: "@kavyamenonspeaks",
      youtube: "DrKavyaMenon",
    },
  },
  {
    id: "5",
    name: "Arjun Singh",
    bio: "Folk and Bollywood singer with a unique voice that resonates with audiences of all ages. I specialize in Punjabi folk music, Hindi film songs, and devotional music. My performances bring energy and emotional connection to every event, from intimate gatherings to large concerts.",
    location: "Pune",
    categories: ["Singer"],
    languages: ["Hindi", "Punjabi", "English"],
    feeRange: "10000-20000",
    experience: 4,
    status: "pending",
    submittedAt: "2025-01-11",
    email: "arjun.singh@email.com",
    phone: "+91 54321 09876",
    socialMedia: {
      instagram: "@arjunsinghmusic",
      youtube: "ArjunSinghOfficial",
    },
  },
  {
    id: "6",
    name: "Maya Dance Troupe",
    bio: "Professional dance ensemble with 6 trained dancers specializing in classical Indian dance forms and contemporary choreography. We perform Bharatanatyam, Kuchipudi, and fusion dance styles. Our troupe has performed at prestigious cultural festivals and corporate events across India.",
    location: "Kolkata",
    categories: ["Dancers"],
    languages: ["Bengali", "Hindi", "English"],
    feeRange: "35000-50000",
    experience: 8,
    status: "pending",
    submittedAt: "2025-01-10",
    email: "maya.dance@email.com",
    phone: "+91 43210 98765",
    website: "https://mayadancetroupe.com",
    socialMedia: {
      instagram: "@mayadancetroupe",
      facebook: "MayaDanceTroupe",
    },
  },
  {
    id: "7",
    name: "DJ Rhea",
    bio: "Female DJ specializing in electronic dance music, progressive house, and commercial hits. Rising star in the industry with a passion for creating high-energy experiences. I bring fresh beats and creative mixing techniques to weddings, club nights, and festival events.",
    location: "Hyderabad",
    categories: ["DJ"],
    languages: ["English", "Hindi", "Telugu"],
    feeRange: "20000-35000",
    experience: 6,
    status: "approved",
    submittedAt: "2025-01-09",
    email: "dj.rhea@email.com",
    phone: "+91 32109 87654",
    socialMedia: {
      instagram: "@djrhea_official",
      youtube: "DJRheaMusic",
    },
  },
  {
    id: "8",
    name: "Dr. Vikram Joshi",
    bio: "Corporate trainer and wellness coach with a PhD in Psychology and 15+ years of experience. I specialize in leadership development, team dynamics, and mental health awareness. As an author of three bestselling books, I bring research-backed insights to every speaking engagement.",
    location: "Ahmedabad",
    categories: ["Speaker"],
    languages: ["English", "Hindi", "Gujarati"],
    feeRange: "50000-75000",
    experience: 15,
    status: "pending",
    submittedAt: "2025-01-08",
    email: "dr.vikram@email.com",
    phone: "+91 21098 76543",
    website: "https://drvikramjoshi.com",
    socialMedia: {
      instagram: "@drvikramjoshi",
      facebook: "DrVikramJoshi",
    },
  },
  {
    id: "9",
    name: "Melodic Twins",
    bio: "Twin sister duo specializing in harmony vocals, folk music, and devotional songs. Known for our mesmerizing performances and perfect vocal synchronization. We perform at weddings, cultural events, and spiritual gatherings, bringing traditional melodies with contemporary arrangements.",
    location: "Jaipur",
    categories: ["Singer"],
    languages: ["Hindi", "Rajasthani", "Sanskrit"],
    feeRange: "20000-35000",
    experience: 6,
    status: "approved",
    submittedAt: "2025-01-07",
    email: "melodictwins@email.com",
    phone: "+91 10987 65432",
    socialMedia: {
      instagram: "@melodictwins",
      youtube: "MelodicTwinsOfficial",
    },
  },
  {
    id: "10",
    name: "Sameer Khan",
    bio: "Stand-up comedian with 3+ years of experience in clean humor and corporate entertainment. My comedy style focuses on observational humor, cultural references, and interactive audience engagement. Perfect for corporate events, private parties, and entertainment shows.",
    location: "Indore",
    categories: ["Comedian"],
    languages: ["Hindi", "English", "Marathi"],
    feeRange: "10000-20000",
    experience: 3,
    status: "rejected",
    submittedAt: "2025-01-06",
    email: "sameer.comedy@email.com",
    phone: "+91 09876 54321",
    socialMedia: {
      instagram: "@standupsameer",
      youtube: "StandUpSameerComedy",
    },
  },
];

export const getSubmissionStats = () => {
  return {
    total: artistSubmissions.length,
    pending: artistSubmissions.filter((s) => s.status === "pending").length,
    approved: artistSubmissions.filter((s) => s.status === "approved").length,
    rejected: artistSubmissions.filter((s) => s.status === "rejected").length,
  };
};

export const formatFeeRange = (feeRange: string): string => {
  const feeOption = feeRangeOptions.find((option) => option.value === feeRange);
  return feeOption ? feeOption.label : feeRange;
};

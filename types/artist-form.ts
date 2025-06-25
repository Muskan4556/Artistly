import { z } from "zod";

export const artistFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),

  bio: z
    .string()
    .min(50, "Bio must be at least 50 characters")
    .max(500, "Bio must be less than 500 characters"),

  location: z
    .string()
    .min(2, "Location must be at least 2 characters")
    .max(50, "Location must be less than 50 characters"),

  categories: z
    .array(z.string())
    .min(1, "Please select at least one category")
    .max(3, "You can select up to 3 categories"),

  languages: z.array(z.string()).min(1, "Please select at least one language"),

  feeRange: z.string().min(1, "Please select your fee range"),

  experience: z
    .number()
    .min(0, "Experience cannot be negative")
    .max(50, "Experience cannot exceed 50 years"),

  profileImage: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      "File size must be less than 5MB"
    )
    .refine(
      (file) =>
        !file ||
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          file.type
        ),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    ),

  website: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),

  socialMedia: z.object({
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    facebook: z.string().optional(),
  }),
});

export type ArtistFormData = z.infer<typeof artistFormSchema>;

export const categoryOptions = [
  { value: "Singer", label: "Singer" },
  { value: "DJ", label: "DJ" },
  { value: "Dancers", label: "Dancers" },
  { value: "Speaker", label: "Speaker" },
  { value: "Band", label: "Band" },
  { value: "Comedian", label: "Comedian" },
  { value: "Magician", label: "Magician" },
  { value: "Instrumentalist", label: "Instrumentalist" },
];

export const languageOptions = [
  { value: "Hindi", label: "Hindi" },
  { value: "English", label: "English" },
  { value: "Tamil", label: "Tamil" },
  { value: "Telugu", label: "Telugu" },
  { value: "Marathi", label: "Marathi" },
  { value: "Bengali", label: "Bengali" },
  { value: "Gujarati", label: "Gujarati" },
  { value: "Kannada", label: "Kannada" },
  { value: "Malayalam", label: "Malayalam" },
  { value: "Punjabi", label: "Punjabi" },
  { value: "Urdu", label: "Urdu" },
  { value: "Sanskrit", label: "Sanskrit" },
];

export const feeRangeOptions = [
  { value: "5000-10000", label: "₹5,000 - ₹10,000" },
  { value: "10000-20000", label: "₹10,000 - ₹20,000" },
  { value: "20000-35000", label: "₹20,000 - ₹35,000" },
  { value: "35000-50000", label: "₹35,000 - ₹50,000" },
  { value: "50000-75000", label: "₹50,000 - ₹75,000" },
  { value: "75000-100000", label: "₹75,000 - ₹1,00,000" },
  { value: "100000+", label: "₹1,00,000+" },
];

export const experienceOptions = [
  { value: 0, label: "Fresher" },
  { value: 1, label: "1 Year" },
  { value: 2, label: "2 Years" },
  { value: 3, label: "3 Years" },
  { value: 4, label: "4 Years" },
  { value: 5, label: "5 Years" },
  { value: 10, label: "10+ Years" },
  { value: 15, label: "15+ Years" },
  { value: 20, label: "20+ Years" },
];

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Star,
  MapPin,
  CheckCircle,
  Crown,
  Clock,
  Users,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Artist } from "@/types/artist";
import Image from "next/image";

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "available":
        return "bg-green-500";
      case "busy":
        return "bg-yellow-500";
      case "unavailable":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Singer:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      DJ: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      Dancers:
        "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
      Speaker:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-purple-200 dark:hover:border-purple-800">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={artist.image}
          alt={`${artist.name} - ${artist.category} performer`}
          fill
          className="object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute top-3 left-3">
          <div
            className={`w-3 h-3 rounded-full ${getAvailabilityColor(
              artist.availability
            )}`}
          />
        </div>

        <div className="absolute top-3 right-3 flex flex-col space-y-1">
          {artist.isVerified && (
            <div
              className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1"
              role="badge"
              aria-label="Verified artist"
            >
              <CheckCircle className="w-3 h-3" aria-hidden="true" />
              <span>Verified</span>
            </div>
          )}
          {artist.isPopular && (
            <div
              className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1"
              role="badge"
              aria-label="Popular artist"
            >
              <Crown className="w-3 h-3" aria-hidden="true" />
              <span>Popular</span>
            </div>
          )}
        </div>

        <div className="absolute bottom-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
              artist.category
            )}`}
          >
            {artist.category}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-sm flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>{artist.rating}</span>
          <span className="text-gray-300">({artist.reviewCount})</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 line-clamp-1 tracking-tight">
            {artist.name}
          </h3>

          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{artist.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{artist.stats.eventsCompleted} events</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {artist.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {artist.specialties.slice(0, 3).map((specialty) => (
              <span
                key={specialty}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
              >
                {specialty}
              </span>
            ))}
            {artist.specialties.length > 3 && (
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs">
                +{artist.specialties.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>Responds in {artist.stats.responseTime}</span>
          </div>
          <div className="text-right">
            <span className="text-xs">Experience</span>
            <div className="font-semibold text-gray-900 dark:text-white">
              {artist.experience} years
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            {artist.priceRange}
          </div>
          <div className="text-xs text-gray-500">per event</div>
        </div>

        <div className="flex space-x-2">
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 relative overflow-hidden group/btn transform transition-all duration-200 hover:shadow-lg">
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="outline" size="icon" aria-label="Send message">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="outline" size="icon" aria-label="Call artist">
              <Phone className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {artist.badges.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-1">
              {artist.badges.slice(0, 2).map((badge) => (
                <span
                  key={badge}
                  className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

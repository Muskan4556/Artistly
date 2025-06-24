"use client";

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

interface ArtistListItemProps {
  artist: Artist;
}

export default function ArtistListItem({ artist }: ArtistListItemProps) {
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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="relative w-full md:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 128px"
          />

          <div className="absolute top-2 left-2">
            <div
              className={`w-3 h-3 rounded-full ${getAvailabilityColor(
                artist.availability
              )}`}
            />
          </div>

          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{artist.rating}</span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex-1 min-w-0 mb-4 md:mb-0">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {artist.name}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                    artist.category
                  )}`}
                >
                  {artist.category}
                </span>
                {artist.isVerified && (
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                )}
                {artist.isPopular && (
                  <Crown className="w-5 h-5 text-yellow-500" />
                )}
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{artist.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{artist.stats.eventsCompleted} events</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{artist.stats.responseTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>{artist.experience} years exp.</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                {artist.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {artist.specialties.slice(0, 4).map((specialty) => (
                  <span
                    key={specialty}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                  >
                    {specialty}
                  </span>
                ))}
                {artist.specialties.length > 4 && (
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                    +{artist.specialties.length - 4} more
                  </span>
                )}
              </div>

              {artist.badges.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {artist.badges.slice(0, 3).map((badge) => (
                    <span
                      key={badge}
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="md:text-right md:ml-6 space-y-4">
              <div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {artist.priceRange}
                </div>
                <div className="text-xs text-gray-500">per event</div>
              </div>

              <div className="flex justify-center md:justify-end">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Book Now
                </Button>
              </div>

              <div className="flex space-x-1 justify-center md:justify-end">
                <Button variant="outline" size="sm">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Chat
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

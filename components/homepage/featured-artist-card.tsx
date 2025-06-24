"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Award, Clock, Users } from "lucide-react";
import type { FeaturedArtist } from "@/data/homepage/mocks";
import { motion } from "framer-motion";

interface FeaturedArtistCardProps {
  artist: FeaturedArtist;
  index?: number;
}

export default function FeaturedArtistCard({
  artist,
  index = 0,
}: FeaturedArtistCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
        whileHover={{
          y: -8,
          boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-w-3 aspect-h-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 overflow-hidden">
          <motion.div
            className="w-full h-64 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >   
            <Image
              src={artist.image}
              alt={`${artist.name} - ${artist.category} performer`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.parentElement
                  ?.querySelector(".fallback-icon")
                  ?.classList.remove("hidden");
              }}
            />

            <div className="fallback-icon hidden absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800  items-center justify-center">
              <Users
                className="w-20 h-20 text-purple-400 dark:text-purple-300"
                aria-label={`${artist.name} - ${artist.category} performer`}
                role="img"
              />
            </div>

            <motion.div
              className="absolute top-4 left-4 bg-green-500 rounded-full p-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
              title="Verified Artist"
              aria-label="Verified Artist Badge"
            >
              <Award className="w-3 h-3 text-white" aria-hidden="true" />
            </motion.div>

            <motion.div
              className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
              <span className="text-xs font-semibold text-gray-900 dark:text-white">
                {artist.rating}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <motion.h3
              className="text-xl font-bold text-gray-900 dark:text-white"
              whileHover={{ color: "#8B5CF6" }}
              transition={{ duration: 0.2 }}
            >
              {artist.name}
            </motion.h3>
          </div>

          <motion.p
            className="text-purple-600 dark:text-purple-400 font-medium mb-3 px-3 py-1 bg-purple-50 dark:bg-purple-900/30 rounded-full inline-block text-sm"
            whileHover={{ scale: 1.05 }}
          >
            {artist.category}
          </motion.p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-700 dark:text-gray-200">
              <MapPin
                className="w-4 h-4 mr-2 text-blue-500"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">{artist.location}</span>
            </div>

            <div className="flex items-center text-gray-700 dark:text-gray-200">
              <Clock
                className="w-4 h-4 mr-2 text-green-500"
                aria-hidden="true"
              />
              <span className="text-sm">Available for booking</span>
            </div>

            <div className="flex items-center text-gray-700 dark:text-gray-200">
              <Star
                className="w-4 h-4 mr-2 text-yellow-500"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">
                {artist.rating} rating
              </span>
            </div>
          </div>

          <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Price Range
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              {artist.price}
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2"
              size="lg"
              aria-label={`Ask for quote from ${artist.name}, ${artist.category} from ${artist.location}`}
            >
              <span>Book Now</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

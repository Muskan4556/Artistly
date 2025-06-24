"use client";

import { motion } from "framer-motion";
import { Artist } from "@/types/artist";
import ArtistCard from "./artist-card";
import ArtistListItem from "./artist-list-item";
import NoArtistsFound from "./no-artists-found";

interface ArtistGridProps {
  artists: Artist[];
  viewMode: "grid" | "list";
}

export default function ArtistGrid({ artists, viewMode }: ArtistGridProps) {
  if (artists.length === 0) {
    return <NoArtistsFound />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (viewMode === "grid") {
    return (
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {artists.map((artist, index) => (
          <motion.div
            key={artist.id}
            variants={itemVariants}
            className={
              index < artists.length - 1
                ? "border-b border-gray-100 dark:border-gray-700 pb-8 sm:border-b-0 sm:pb-0"
                : ""
            }
          >
            <ArtistCard artist={artist} />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {artists.map((artist) => (
        <motion.div key={artist.id} variants={itemVariants}>
          <ArtistListItem artist={artist} />
        </motion.div>
      ))}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Filter, RefreshCw } from "lucide-react";

export default function NoArtistsFound() {
  return (
    <motion.div
      className="text-center py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md mx-auto">
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
        >
          <div className="w-24 h-24 mx-auto bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-gray-400 dark:text-gray-500" />
          </div>
        </motion.div>

        <motion.h3
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          No Artists Found
        </motion.h3>

        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {` We couldn't find any artists matching your current filters. Try
          adjusting your search criteria or browse all available artists.`}
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Try these suggestions:
          </div>

          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center justify-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Clear some filters to see more results</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Try different search terms</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <RefreshCw className="w-4 h-4" />
              <span>Browse artists in different categories</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              className="flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Clear All Filters</span>
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => window.location.reload()}
            >
              Browse All Artists
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center space-x-8 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-2 h-2 bg-purple-500 rounded-full" />
          <div className="w-2 h-2 bg-pink-500 rounded-full" />
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
            >
              <motion.h1
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Artistly
              </motion.h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/artists"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-2 py-1"
            >
              Browse Artists
            </Link>
            <Link
              href="/artist-onboarding"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-2 py-1"
            >
              Join as Artist
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-2 py-1"
            >
              Dashboard
            </Link>
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg">
                Get Started
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              className="focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            className="md:hidden pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/artists"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Artists
              </Link>
              <Link
                href="/artist-onboarding"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Join as Artist
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

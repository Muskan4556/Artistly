"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories, platformStats } from "@/data/homepage/mocks";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  MapPin,
  Music,
  Heart,
  Star,
  Zap,
} from "lucide-react";
import ConfettiAnimation from "./confetti-animation";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          {i % 4 === 0 && <Music className="w-6 h-6 text-purple-400" />}
          {i % 4 === 1 && <Star className="w-5 h-5 text-yellow-400" />}
          {i % 4 === 2 && <Heart className="w-5 h-5 text-pink-400" />}
          {i % 4 === 3 && <Zap className="w-5 h-5 text-blue-400" />}
        </motion.div>
      ))}

      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
      ></motion.div>

      <ConfettiAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="lg:grid lg:grid-cols-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium mb-6"
            >
              <TrendingUp className="w-4 h-4 mr-2" aria-hidden="true" />
              Trusted by {platformStats.totalPlanners} Event Planners
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Book Performing Artists for{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Every Occasion
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed"
            >
              {`Discover, shortlist, and book India's top performing
                artists—seamlessly connect with professionals for any event.`}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {platformStats.totalArtists}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Artists
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {platformStats.totalEvents}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Events
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {platformStats.citiesCovered}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Cities
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  4.9★
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Rating
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                  asChild
                >
                  <Link
                    href="/artists"
                    className="inline-flex items-center"
                    aria-label="Explore artists - browse our collection of professional performers"
                  >
                    Explore Artists
                    <ArrowRight
                      className="w-4 sm:w-5 h-4 sm:h-5 ml-2"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                  asChild
                >
                  <Link
                    href="/onboarding"
                    aria-label="Join as Artist - start your journey as a professional performer on our platform"
                  >
                    Join as Artist
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <motion.div className="relative" variants={itemVariants}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
              <motion.div
                className="relative backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20"
                variants={cardVariants}
              >
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      className={`${category.color} p-6 rounded-2xl text-white backdrop-blur-sm`}
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      whileHover={{
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <category.icon
                        className="w-8 h-8 mb-2"
                        aria-label={`${category.name} category icon`}
                        role="img"
                      />
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="flex items-center">
                    <Award
                      className="w-4 h-4 mr-1 text-yellow-500"
                      aria-hidden="true"
                    />
                    <span>Verified Artists</span>
                  </div>
                  <div className="flex items-center">
                    <Users
                      className="w-4 h-4 mr-1 text-green-500"
                      aria-hidden="true"
                    />
                    <span>Instant Booking</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin
                      className="w-4 h-4 mr-1 text-blue-500"
                      aria-hidden="true"
                    />
                    <span>Pan India</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Github, Linkedin, ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  const socialIcons = [
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/muskan-aa7862267/",
      label: "LinkedIn",
    },
    {
      Icon: Github,
      href: "https://github.com/Muskan4556/Artistly",
      label: "GitHub",
    },
  ];

  return (
    <motion.footer
      className="bg-gray-900 dark:bg-gray-950 text-white py-16 relative overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Artistly
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-base sm:text-base lg:text-lg">
              The premier platform connecting event planners with talented
              performing artists. Make your events unforgettable with our
              curated collection of professional performers.
            </p>

            <div className="flex space-x-4 mb-8">
              {socialIcons.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6"
              variants={itemVariants}
            >
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                Get notified about new artists and exclusive booking deals.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                />
                <motion.button
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg sm:text-xl font-semibold mb-6">
              For Event Planners
            </h4>
            <ul className="space-y-3">
              {[
                { text: "Browse Artists", href: "/artists" },
                { text: "Categories", href: "#" },
                { text: "How It Works", href: "#" },
                { text: "Pricing", href: "#" },
                { text: "Success Stories", href: "#" },
              ].map((link) => (
                <li key={link.text}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg sm:text-xl font-semibold mb-6">
              For Artists
            </h4>
            <ul className="space-y-3">
              {[
                { text: "Join Artistly", href: "/artist-onboarding" },
                { text: "Artist Dashboard", href: "#" },
                { text: "Resources", href: "#" },
                { text: "Support", href: "#" },
                { text: "Community", href: "#" },
              ].map((link) => (
                <li key={link.text}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center text-gray-400 text-center sm:text-left text-sm sm:text-base">
              <span className="mb-2 sm:mb-0">
                © 2025 Artistly. All rights reserved.
              </span>
              <div className="flex items-center">
                <span className="mx-2 hidden sm:inline">|</span>
                <span>Created with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-1"
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.span>
                <span>by</span>
                <span className="ml-1 font-medium text-purple-400 hover:text-purple-300 transition-colors">
                  Muskan
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm sm:text-base text-gray-500">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Verified Platform
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Secure Payments
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                24/7 Support
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

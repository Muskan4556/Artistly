"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Category } from "@/data/homepage/mocks";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
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
      <Link
        href={`/artists?category=${category.id}`}
        className="block focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded-2xl transition-all duration-200"
        aria-label={`Explore ${category.name} category. ${category.description}. ${category.count} available.`}
      >
        <motion.div
          className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden"
          initial="rest"
          whileTap={{ scale: 0.98 }}
          animate="rest"
          whileHover={{
            y: -8,
            boxShadow:
              "0 25px 50px -12px rgb(0 0 0 / 0.25), 0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
          }}
          transition={{ duration: 0.3 }}
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          }}
        >
          <motion.div
            className={`${category.color} relative p-8 text-center overflow-hidden`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 right-2 w-8 h-8 border border-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border border-white rounded-full"></div>
              <div className="absolute top-1/2 right-8 w-2 h-2 bg-white rounded-full"></div>
            </div>

            <motion.div
              initial={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {category.icon && (
                <category.icon
                  className="w-12 h-12 text-white mx-auto mb-4"
                  aria-label={`${category.name} category icon`}
                  role="img"
                />
              )}
            </motion.div>

            <h3 className="text-xl font-bold text-white">{category.name}</h3>

            <motion.div
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.2 }}
            >
              {category.count}
            </motion.div>
          </motion.div>

          <div className="p-6 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <p className="text-gray-800 dark:text-gray-100 mb-6 leading-relaxed font-medium">
              {category.description}
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2"
                size="sm"
                aria-label={`Explore ${category.name} artists`}
              >
                <span>Explore {category.name}</span>
                <ArrowRight
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
    
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300 -z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.2 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

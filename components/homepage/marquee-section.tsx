"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

interface MarqueeSectionProps {
  children: React.ReactNode;
  duration?: string;
  reverse?: boolean;
  className?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function MarqueeSection({
  children,
  duration = "40s",
  reverse = false,
  className = "",
}: MarqueeSectionProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={`relative overflow-hidden ${className}`}
    >
        
      <div className="absolute left-0 top-0 z-10 h-full w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 pointer-events-none"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 pointer-events-none"></div>

      <Marquee
        pauseOnHover
        style={{ "--duration": duration } as React.CSSProperties}
        reverse={reverse}
      >
        {children}
      </Marquee>
    </motion.div>
  );
}
 
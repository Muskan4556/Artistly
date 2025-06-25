"use client";

import { motion } from "framer-motion";
import { Users, Clock, CheckCircle, FileText } from "lucide-react";

interface DashboardHeaderProps {
  stats: {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
  };
}

export default function DashboardHeader({ stats }: DashboardHeaderProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
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

  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
          >
            Manager Dashboard
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-lg lg:text-xl text-purple-100 md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0"
          >
            Review and manage artist submissions from the onboarding form.
            Discover new talent and build your roster of verified performers.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <FileText className="w-4 h-4 sm:w-6 sm:h-6 text-purple-200" />
              </div>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold">
                {stats.total}
              </div>
              <div className="text-xs sm:text-sm text-purple-100 leading-tight">
                Total Submissions
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-orange-200" />
              </div>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold">
                {stats.pending}
              </div>
              <div className="text-xs sm:text-sm text-purple-100 leading-tight">
                Pending Review
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-200" />
              </div>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold">
                {stats.approved}
              </div>
              <div className="text-xs sm:text-sm text-purple-100 leading-tight">
                Approved
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <Users className="w-4 h-4 sm:w-6 sm:h-6 text-blue-200" />
              </div>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold">
                {stats.rejected}
              </div>
              <div className="text-xs sm:text-sm text-purple-100 leading-tight">
                Rejected
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

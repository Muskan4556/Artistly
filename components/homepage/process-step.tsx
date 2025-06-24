"use client";

import type { HowItWorksStep } from "@/data/homepage/mocks";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProcessStepProps {
  step: HowItWorksStep;
  index: number;
  isLast?: boolean;
}

  export default function ProcessStep({ step, index, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {!isLast && (
        <motion.div
          className="hidden lg:block absolute top-12 left-full w-16 h-24  items-center justify-center z-0"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
        >
          <ArrowRight className="w-8 h-8 text-purple-400 dark:text-purple-500" />
        </motion.div>
      )}

      <motion.div
        className="relative mb-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
      >
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg z-20">
          {step.step}
        </div>

        <motion.div
          className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 shadow-lg border-4 border-gray-100 dark:border-gray-700 flex items-center justify-center relative overflow-hidden"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <step.icon className={`w-10 h-10 ${step.color} relative z-10`} />
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-xs"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          {step.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { trustedCompanies, testimonials } from "@/data/homepage/mocks";
import CompanyCard from "./company-card";
import TestimonialCard from "./testimonial-card";
import MarqueeSection from "./marquee-section";

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

function SectionHeader({
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-8 sm:mb-12 lg:mb-16 px-4 ${className}`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}

export default function SocialProofSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <SectionHeader
            title="Trusted by Industry Leaders"
            description="From Fortune 500 companies to luxury wedding planners, discover why top event organizers choose Artistly for their entertainment needs"
          />

          <div className="overflow-hidden">
            <MarqueeSection duration="40s">
              {trustedCompanies.map((company, index) => (
                <CompanyCard
                  key={`${company.name}-${index}`}
                  company={company}
                  index={index}
                />
              ))}
            </MarqueeSection>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <SectionHeader
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what event planners and artist managers have to say."
          />

          <div className="overflow-hidden">
            <MarqueeSection duration="40s">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </MarqueeSection>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center mx-3 sm:mx-0"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight"
          >
            Join thousands of satisfied customers
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 lg:mb-3 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-purple-100 text-xs sm:text-sm lg:text-base font-medium leading-tight">
                Customer Satisfaction
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 lg:mb-3 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                24h
              </div>
              <div className="text-purple-100 text-xs sm:text-sm lg:text-base font-medium leading-tight">
                Average Response
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 lg:mb-3 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-purple-100 text-xs sm:text-sm lg:text-base font-medium leading-tight">
                Verified Artists
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 lg:mb-3 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-purple-100 text-xs sm:text-sm lg:text-base font-medium leading-tight">
                Cities Covered
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/homepage/mocks";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  const gradients = [
    "from-purple-400 to-pink-400",
    "from-blue-400 to-cyan-400",
    "from-green-400 to-emerald-400",
    "from-orange-400 to-red-400",
    "from-indigo-400 to-purple-400",
    "from-pink-400 to-rose-400",
  ];
  const gradientClass = gradients[index % gradients.length];

  return (
    <div className="mx-3 sm:mx-4 lg:mx-6 flex items-center justify-center group">
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-100 dark:border-gray-700 min-w-[280px] sm:min-w-[320px] lg:min-w-[400px] max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] transition-all duration-300 hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-600 hover:scale-105">
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-2 sm:p-3">
            <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>

        <div className="flex justify-center mb-3 sm:mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-current mx-0.5"
            />
          ))}
        </div>

        <blockquote className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 lg:mb-6 leading-relaxed italic text-center text-xs sm:text-sm lg:text-base font-medium">
          &quot;{testimonial.content}&quot;
        </blockquote>

        <div className="flex items-center justify-start">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${gradientClass} rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0`}
          >
            <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div className="text-left min-w-0 flex-1">
            <div className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm lg:text-base truncate">
              {testimonial.name}
            </div>
            <div className="text-xs sm:text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-tight">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

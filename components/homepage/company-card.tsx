"use client";

import type { TrustedCompany } from "@/data/homepage/mocks";

interface CompanyCardProps {
  company: TrustedCompany;
  index: number;
}

export default function CompanyCard({ company, index }: CompanyCardProps) {       
  const gradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
    "from-teal-500 to-green-500",
    "from-violet-500 to-purple-500",
  ];
  const gradientClass = gradients[index % gradients.length];

  return (
    <div className="mx-3 sm:mx-4 lg:mx-6 flex items-center justify-center group">
      <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl px-4 sm:px-5 lg:px-6 py-3 sm:py-4 shadow-lg border border-gray-100 dark:border-gray-700 w-[280px] sm:w-[300px] lg:w-[320px] h-20 sm:h-22 lg:h-24 flex items-center justify-start transition-all duration-300 hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-600 hover:scale-105">
        <div
          className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gradient-to-br ${gradientClass} rounded-full flex items-center justify-center mr-2 sm:mr-3 lg:mr-4 flex-shrink-0 text-white font-bold text-sm sm:text-base lg:text-lg shadow-md`}
        >
          {company.name.charAt(0)}
        </div>

        <div className="flex flex-col justify-center min-w-0 flex-1 pr-2">
          <h3 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm lg:text-base leading-tight truncate max-w-[140px] sm:max-w-[160px] lg:max-w-[180px]">
            {company.name}
          </h3>
          <p className="text-xs sm:text-xs lg:text-sm text-purple-600 dark:text-purple-400 font-medium mt-0.5 truncate">
            {company.type}
          </p>
          <p className="text-xs sm:text-xs lg:text-sm text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1 leading-tight truncate">
            {company.size}
          </p>
        </div>

        <div className="ml-1 sm:ml-2 flex-shrink-0 w-16 sm:w-18 lg:w-20">
          <span className="inline-flex items-center justify-center px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 w-full truncate">
            {company.industry.split(" ")[0]}
          </span>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  X,
  Grid3X3,
  List,
  MapPin,
  DollarSign,
  ChevronDown,
  Tag,
} from "lucide-react";
import { FilterState } from "@/types/artist";
import { categories, locations } from "@/data/artists/mocks";

interface ArtistFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  totalResults: number;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export default function ArtistFilters({
  filters,
  onFiltersChange,
  totalResults,
  viewMode,
  onViewModeChange,
  isMobile = false,
  onClose,
}: ArtistFiltersProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    locations: true,
    price: true,
  });

  const radioPrefix = isMobile ? "mobile" : "desktop";

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategorySelect = (category: string) => {
    const newCategory = filters.categories === category ? "" : category;
    onFiltersChange({ ...filters, categories: newCategory });
  };

  const handleLocationSelect = (location: string) => {
    const newLocation = filters.locations === location ? "" : location;
    onFiltersChange({ ...filters, locations: newLocation });
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    onFiltersChange({ ...filters, priceRange: range });
  };

  const handleSearchChange = (query: string) => {
    onFiltersChange({ ...filters, searchQuery: query });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: "",
      locations: "",
      priceRange: [0, 100000],
      searchQuery: "",
    });
    if (isMobile && onClose) {
      setTimeout(() => onClose(), 300);
    }
  };

  const hasActiveFilters =
    filters.categories !== "" ||
    filters.locations !== "" ||
    filters.searchQuery ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 100000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Filters
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              <X className="w-4 h-4 mr-1" />
              <span className="text-xs">Clear</span>
            </Button>
          )}
          {isMobile && onClose && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="lg:hidden"
          >
            {isCollapsed ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4 rotate-180" />
            )}
          </Button>
        </div>
      </div>

      <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {totalResults} artists found
        </span>
        <div className="hidden lg:flex items-center space-x-1 mt-2">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewModeChange("grid")}
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewModeChange("list")}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isCollapsed ? 0 : "auto",
          opacity: isCollapsed ? 0 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: [0.04, 0.62, 0.23, 0.98],
          opacity: { duration: 0.25 },
        }}
        className="overflow-hidden lg:!h-auto"
      >
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Search Artists
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name..."
              value={filters.searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <button
            onClick={() => toggleSection("categories")}
            className="flex items-center justify-between w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
          >
            <div className="flex items-center space-x-2">
              <Tag className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <span>Categories</span>
            </div>
            {expandedSections.categories ? (
              <ChevronDown className="w-4 h-4 rotate-180" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          <motion.div
            initial={false}
            animate={{
              height: expandedSections.categories ? "auto" : 0,
              opacity: expandedSections.categories ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98],
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden"
          >
            <div className="space-y-2">
              <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md">
                <input
                  type="radio"
                  name={`${radioPrefix}-category`}
                  checked={filters.categories === ""}
                  onChange={() => handleCategorySelect("")}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 touch-manipulation"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 font-medium">
                  All Categories
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full">
                  {categories.reduce((sum, cat) => sum + (cat.count || 0), 0)}
                </span>
              </label>

              {categories.map((category) => (
                <label
                  key={category.value}
                  className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md"
                >
                  <input
                    type="radio"
                    name={`${radioPrefix}-category`}
                    checked={filters.categories === category.value}
                    onChange={() => handleCategorySelect(category.value)}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 touch-manipulation"
                    aria-describedby={`category-${category.value}-count`}
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                    {category.label}
                  </span>
                  <span
                    id={`category-${category.value}-count`}
                    className="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full"
                  >
                    {category.count}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mb-6">
          <button
            onClick={() => toggleSection("locations")}
            className="flex items-center justify-between w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
          >
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <span>Locations</span>
            </div>
            {expandedSections.locations ? (
              <ChevronDown className="w-4 h-4 rotate-180" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          <motion.div
            initial={false}
            animate={{
              height: expandedSections.locations ? "auto" : 0,
              opacity: expandedSections.locations ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98],
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden"
          >
            <div className="space-y-2 max-h-48 overflow-y-auto">
              <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md">
                <input
                  type="radio"
                  name={`${radioPrefix}-location`}
                  checked={filters.locations === ""}
                  onChange={() => handleLocationSelect("")}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 touch-manipulation"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 font-medium">
                  All Locations
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full">
                  {locations.reduce((sum, loc) => sum + (loc.count || 0), 0)}
                </span>
              </label>

              {locations.map((location) => (
                <label
                  key={location.value}
                  className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md"
                >
                  <input
                    type="radio"
                    name={`${radioPrefix}-location`}
                    checked={filters.locations === location.value}
                    onChange={() => handleLocationSelect(location.value)}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 touch-manipulation"
                    aria-describedby={`location-${location.value}-count`}
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                    {location.label}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full">
                    {location.count}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mb-6">
          <button
            onClick={() => toggleSection("price")}
            className="flex items-center justify-between w-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
          >
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <span>Price Range</span>
            </div>
            {expandedSections.price ? (
              <ChevronDown className="w-4 h-4 rotate-180" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          <motion.div
            initial={false}
            animate={{
              height: expandedSections.price ? "auto" : 0,
              opacity: expandedSections.price ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98],
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden"
          >
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md">
                <input
                  type="radio"
                  name={`${radioPrefix}-priceRange`}
                  checked={
                    filters.priceRange[0] === 0 &&
                    filters.priceRange[1] === 100000
                  }
                  onChange={() => handlePriceRangeChange([0, 100000])}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 font-medium">
                  All Price Ranges
                </span>
              </label>

              {[
                { label: "Under ₹20,000", value: [0, 20000] },
                { label: "₹20,000 - ₹35,000", value: [20000, 35000] },
                { label: "₹35,000 - ₹50,000", value: [35000, 50000] },
                { label: "Above ₹50,000", value: [50000, 100000] },
              ].map((range) => (
                <label
                  key={range.label}
                  className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md"
                >
                  <input
                    type="radio"
                    name={`${radioPrefix}-priceRange`}
                    checked={
                      filters.priceRange[0] === range.value[0] &&
                      filters.priceRange[1] === range.value[1]
                    }
                    onChange={() =>
                      handlePriceRangeChange(range.value as [number, number])
                    }
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

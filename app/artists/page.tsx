"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ArtistFilters from "@/components/artists/artist-filters";
import ArtistGrid from "@/components/artists/artist-grid";
import { Button } from "@/components/ui/button";
import { Filter, Grid3X3, List } from "lucide-react";
import { artists } from "@/data/artists/mocks";
import { FilterState } from "@/types/artist";

const formatCategoryFromURL = (category: string | null): string => {
  if (!category) return "";

  const categoryMap: { [key: string]: string } = {
    singer: "Singer",
    dj: "DJ",
    dancers: "Dancers",
    speaker: "Speaker",
  };

  return categoryMap[category.toLowerCase()] || "";
};

export default function ArtistsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [filters, setFilters] = useState<FilterState>({
    categories: "",
    locations: "",
    priceRange: [0, 100000],
    searchQuery: "",
  });

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showDesktopFilters, setShowDesktopFilters] = useState(true);

  useEffect(() => {
    const category = searchParams.get("category");
    const normalizedCategory = formatCategoryFromURL(category);

    setFilters((prev) => ({
      ...prev,
      categories: normalizedCategory,
    }));
  }, [searchParams]);

  const updateCategoryURL = (category: string) => {
    if (category) {
      const urlCategory = category.toLowerCase();

      router.replace(`${pathname}?category=${urlCategory}`, {
        scroll: false,
      });
    } else {
      router.replace(pathname, { scroll: false });
    }
  };

  const handleFiltersChange = (newFilters: FilterState) => {
    const oldCategory = filters.categories;
    const newCategory = newFilters.categories;

    setFilters(newFilters);

    if (oldCategory !== newCategory) {
      updateCategoryURL(newCategory);
    }
  };

  const handleViewModeChange = (newViewMode: "grid" | "list") => {
    setViewMode(newViewMode);
  };

  const filteredArtists = artists.filter((artist) => {
    if (filters.categories && filters.categories !== artist.category) {
      return false;
    }

    if (filters.locations && filters.locations !== artist.location) {
      return false;
    }

    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 100000) {
      const priceText = artist.priceRange.replace(/[₹,]/g, "");
      const artistMinPrice = parseInt(priceText.split(" - ")[0]);
      const artistMaxPrice = parseInt(priceText.split(" - ")[1]);

      if (
        artistMaxPrice < filters.priceRange[0] ||
        artistMinPrice > filters.priceRange[1]
      ) {
        return false;
      }
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const nameMatch = artist.name.toLowerCase().includes(query);
      const descriptionMatch = artist.description.toLowerCase().includes(query);
      const specialtyMatch = artist.specialties.some((specialty) =>
        specialty.toLowerCase().includes(query)
      );
      const categoryMatch = artist.category.toLowerCase().includes(query);

      if (
        !nameMatch &&
        !descriptionMatch &&
        !specialtyMatch &&
        !categoryMatch
      ) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="">
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Browse Artists
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                {` Discover and book India's top performing artists for your next
                  event. From singers to dancers, find the perfect talent for any
                  occasion.`}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-2 sm:space-y-0 text-sm">
                <div className="flex items-center justify-center">
                  <span className="font-semibold">{artists.length}+</span>
                  <span className="ml-1">Verified Artists</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="font-semibold">15+</span>
                  <span className="ml-1">Cities</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="font-semibold">4.9 ★</span>
                  <span className="mx-1">Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8">
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl sm:text-lg font-semibold text-gray-900 dark:text-white">
                {filteredArtists.length} Artists Found
              </h2>
              <div className="flex items-center justify-between sm:justify-end space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden flex items-center space-x-2 text-sm"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDesktopFilters(!showDesktopFilters)}
                  className="hidden lg:flex items-center space-x-2"
                >
                  <Filter className="w-4 h-4" />
                  <span>
                    {showDesktopFilters ? "Hide Filters" : "Show Filters"}
                  </span>
                </Button>

                <div className="flex md:hidden lg:hidden items-center space-x-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleViewModeChange("grid")}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleViewModeChange("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleViewModeChange("grid")}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleViewModeChange("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {showMobileFilters && (
            <div className="lg:hidden mb-6">
              <ArtistFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                totalResults={filteredArtists.length}
                viewMode={viewMode}
                onViewModeChange={handleViewModeChange}
                isMobile={true}
                onClose={() => setShowMobileFilters(false)}
              />
            </div>
          )}

          <div
            className={`lg:grid lg:gap-8 ${
              showDesktopFilters ? "lg:grid-cols-12" : "lg:grid-cols-1"
            }`}
          >
            {showDesktopFilters && (
              <div className="hidden lg:block lg:col-span-3">
                <ArtistFilters
                  filters={filters}
                  onFiltersChange={handleFiltersChange}
                  totalResults={filteredArtists.length}
                  viewMode={viewMode}
                  onViewModeChange={handleViewModeChange}
                />
              </div>
            )}

            <div
              className={showDesktopFilters ? "lg:col-span-9" : "lg:col-span-1"}
            >
              <ArtistGrid artists={filteredArtists} viewMode={viewMode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

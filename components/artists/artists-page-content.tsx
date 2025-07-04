"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ArtistGrid from "@/components/artists/artist-grid";
import { Button } from "@/components/ui/button";
import { Filter, Grid3X3, List } from "lucide-react";
import { artists } from "@/data/artists/mocks";
import { FilterState } from "@/types/artist";
import ArtistFiltersShimmer from "@/components/shimmer/artist-filters-shimmer";

const ArtistFilters = lazy(() => import("@/components/artists/artist-filters"));

const FILTER_MAPS = {
  category: {
    singer: "Singer",
    dj: "DJ",
    dancers: "Dancers",
    speaker: "Speaker",
  },
  location: {
    mumbai: "Mumbai",
    delhi: "Delhi",
    bangalore: "Bangalore",
    pune: "Pune",
    jaipur: "Jaipur",
    chennai: "Chennai",
    hyderabad: "Hyderabad",
    kolkata: "Kolkata",
  },
  price: {
    under20k: [0, 20000] as [number, number],
    "20k-35k": [20000, 35000] as [number, number],
    "35k-50k": [35000, 50000] as [number, number],
    above50k: [50000, 100000] as [number, number],
  },
};

const parseUrlParam = (
  param: string | null,
  type: keyof typeof FILTER_MAPS
): string | [number, number] => {
  if (!param) return type === "price" ? [0, 100000] : "";

  const lowerParam = param.toLowerCase();

  if (type === "category") {
    const categoryMap = FILTER_MAPS.category as Record<string, string>;
    return categoryMap[lowerParam] || "";
  }

  if (type === "location") {
    const locationMap = FILTER_MAPS.location as Record<string, string>;
    return locationMap[lowerParam] || "";
  }

  if (type === "price") {
    const priceMap = FILTER_MAPS.price as Record<string, [number, number]>;
    return priceMap[lowerParam] || [0, 100000];
  }

  return "";
};

export default function ArtistsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

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
    setFilters({
      categories: parseUrlParam(
        searchParams.get("category"),
        "category"
      ) as string,
      locations: parseUrlParam(
        searchParams.get("location"),
        "location"
      ) as string,
      priceRange: parseUrlParam(searchParams.get("price"), "price") as [
        number,
        number
      ],
      searchQuery: searchParams.get("search") || "",
    });
  }, [searchParams]);

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);

    const params = new URLSearchParams();
    if (newFilters.categories)
      params.set("category", newFilters.categories.toLowerCase());
    if (newFilters.locations)
      params.set("location", newFilters.locations.toLowerCase());
    if (newFilters.searchQuery) params.set("search", newFilters.searchQuery);

    if (newFilters.priceRange[1] < 100000) {
      const [min, max] = newFilters.priceRange;
      if (max <= 20000) params.set("price", "under20k");
      else if (min >= 20000 && max <= 35000) params.set("price", "20k-35k");
      else if (min >= 35000 && max <= 50000) params.set("price", "35k-50k");
      else if (min >= 50000) params.set("price", "above50k");
    }

    router.replace(params.toString() ? `?${params}` : "/artists", {
      scroll: false,
    });
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

      if (!nameMatch) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8">
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
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
          <Suspense fallback={<ArtistFiltersShimmer />}>
            <ArtistFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              totalResults={filteredArtists.length}
              viewMode={viewMode}
              onViewModeChange={handleViewModeChange}
              isMobile={true}
              onClose={() => setShowMobileFilters(false)}
            />
          </Suspense>
        </div>
      )}

      <div
        className={`lg:grid lg:gap-8 ${
          showDesktopFilters ? "lg:grid-cols-12" : "lg:grid-cols-1"
        }`}
      >
        {showDesktopFilters && (
          <div className="hidden lg:block lg:col-span-3">
            <Suspense fallback={<ArtistFiltersShimmer />}>
              <ArtistFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                totalResults={filteredArtists.length}
                viewMode={viewMode}
                onViewModeChange={handleViewModeChange}
              />
            </Suspense>
          </div>
        )}

        <div className={showDesktopFilters ? "lg:col-span-9" : "lg:col-span-1"}>
          <ArtistGrid artists={filteredArtists} viewMode={viewMode} />
        </div>
      </div>
    </div>
  );
}

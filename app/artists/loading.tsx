import ArtistsPageHeaderShimmer from "@/components/shimmer/artists-page-header-shimmer";
import PageControlsShimmer from "@/components/shimmer/page-controls-shimmer";
import ArtistFiltersShimmer from "@/components/shimmer/artist-filters-shimmer";
import ArtistGridShimmer from "@/components/shimmer/artist-grid-shimmer";

export default function ArtistsPageShimmer() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <ArtistsPageHeaderShimmer />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8">
        <PageControlsShimmer />

        <div className="flex gap-6 lg:grid lg:grid-cols-[300px_1fr]">
          <div className="hidden lg:block">
            <ArtistFiltersShimmer />
          </div>

          <div className="flex-1">
            <ArtistGridShimmer />
          </div>
        </div>
      </div>
    </div>
  );
}

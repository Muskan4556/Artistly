import { Suspense } from "react";
import { artists } from "@/data/artists/mocks";
import ArtistsPageContent from "@/components/artists/artists-page-content";

function ArtistsPageFallback() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Browse Artists
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              {` Discover and book India's top performing artists for your
              next event. From singers to dancers, find the perfect talent for
              any occasion.`}
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
              Loading artists...
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      </div>
    </div>
  );
}

export default function ArtistsPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Browse Artists
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              {`  Discover and book India's top performing artists for your
                  next event. From singers to dancers, find the perfect talent for
                  any occasion.`}
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

      <Suspense fallback={<ArtistsPageFallback />}>
        <ArtistsPageContent />
      </Suspense>
    </div>
  );
}

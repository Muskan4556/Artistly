export default function ArtistFiltersShimmer() {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
      </div>
      <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2"></div>
        <div className="flex space-x-1">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8"></div>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-2"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        <div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 mb-2"></div>
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-8 bg-gray-200 dark:bg-gray-700 rounded"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

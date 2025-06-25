export default function FeaturedArtistShimmer() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden animate-pulse">
      <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
      </div>
    </div>
  );
}

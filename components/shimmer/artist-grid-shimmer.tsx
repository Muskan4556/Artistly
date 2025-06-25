export default function ArtistGridShimmer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-pulse">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
          <div className="p-6">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FormSectionShimmer() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
      </div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

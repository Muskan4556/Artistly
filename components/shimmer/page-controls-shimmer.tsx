export default function PageControlsShimmer() {
  return (
    <div className="mb-4 sm:mb-6 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
        <div className="flex space-x-2">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8"></div>
        </div>
      </div>
    </div>
  );
}

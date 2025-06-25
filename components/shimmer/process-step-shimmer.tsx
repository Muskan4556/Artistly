export default function ProcessStepShimmer() {
  return (
    <div className="text-center animate-pulse">
      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-32 mx-auto"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
    </div>
  );
}

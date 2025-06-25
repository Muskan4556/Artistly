export default function GlobalShimmer() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse">
            <span className="text-2xl font-bold text-white">A</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Loading Artistly
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Preparing your experience...
        </p>

        <div className="flex justify-center">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-gray-200 dark:border-gray-700 rounded-full"></div>
            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        <div className="flex justify-center space-x-1 mt-8">
          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

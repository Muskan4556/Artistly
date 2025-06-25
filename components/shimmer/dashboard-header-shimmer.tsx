export default function DashboardHeaderShimmer() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 sm:py-12 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="h-8 bg-white/20 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-white/20 rounded w-96 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-6 h-6 bg-white/20 rounded mx-auto mb-2"></div>
              <div className="h-6 bg-white/20 rounded w-12 mx-auto mb-1"></div>
              <div className="h-4 bg-white/20 rounded w-16 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

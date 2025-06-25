export default function ArtistsPageHeaderShimmer() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-pulse">
          <div className="h-12 bg-white/20 rounded w-64 mx-auto mb-4"></div>
          <div className="h-6 bg-white/20 rounded w-96 mx-auto mb-6"></div>
          <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-2 sm:space-y-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-4 bg-white/20 rounded w-24 mx-auto sm:mx-0"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Suspense, lazy } from "react";
import HeroSection from "@/components/homepage/hero-section";
import CategoryCard from "@/components/homepage/category-card";
import ProcessStepShimmer from "@/components/shimmer/process-step-shimmer";
import FeaturedArtistShimmer from "@/components/shimmer/featured-artist-shimmer";
import SocialProofShimmer from "@/components/shimmer/social-proof-shimmer";
import {
  categories,
  howItWorksSteps,
  featuredArtists,
} from "@/data/homepage/mocks";

const ProcessStep = lazy(() => import("@/components/homepage/process-step"));
const FeaturedArtistCard = lazy(
  () => import("@/components/homepage/featured-artist-card")
);
const SocialProofSection = lazy(
  () => import("@/components/homepage/social-proof-section")
);

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
      <HeroSection />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Browse Artists by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find the perfect performers for your event from our diverse
              collection of talented artists
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Simple steps to find and book the perfect artists for your event
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
            <Suspense
              fallback={
                <>
                  {[...Array(3)].map((_, i) => (
                    <ProcessStepShimmer key={i} />
                  ))}
                </>
              }
            >
              {howItWorksSteps.map((step, index) => (
                <ProcessStep
                  key={index}
                  step={step}
                  index={index}
                  isLast={index === howItWorksSteps.length - 1}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Featured Artists
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover some of our top-rated performers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Suspense
              fallback={
                <>
                  {[...Array(3)].map((_, i) => (
                    <FeaturedArtistShimmer key={i} />
                  ))}
                </>
              }
            >
              {featuredArtists.map((artist, index) => (
                <FeaturedArtistCard key={index} artist={artist} index={index} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      <Suspense fallback={<SocialProofShimmer />}>
        <SocialProofSection />
      </Suspense>
    </div>
  );
}

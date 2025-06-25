"use client";

import { useState, Suspense, lazy } from "react";
import {
  artistSubmissions,
  ArtistSubmission,
  getSubmissionStats,
} from "@/data/dashboard/mocks";
import DashboardHeaderShimmer from "@/components/shimmer/dashboard-header-shimmer";
import SubmissionsTableShimmer from "@/components/shimmer/submissions-table-shimmer";

const DashboardHeader = lazy(
  () => import("@/components/dashboard/dashboard-header")
);
const SubmissionsTable = lazy(
  () => import("@/components/dashboard/submissions-table")
);

export default function DashboardPage() {
  const [submissions, setSubmissions] =
    useState<ArtistSubmission[]>(artistSubmissions);

  const handleAction = (id: string, action: "view" | "approve" | "reject") => {
    if (action === "view") {
      console.log("Viewing submission:", id);
    } else {
      setSubmissions((prev) =>
        prev.map((sub) =>
          sub.id === id
            ? { ...sub, status: action === "approve" ? "approved" : "rejected" }
            : sub
        )
      );
      console.log(
        `${action === "approve" ? "Approved" : "Rejected"} submission:`,
        id
      );
    }
  };

  const stats = getSubmissionStats();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Suspense fallback={<DashboardHeaderShimmer />}>
        <DashboardHeader stats={stats} />
      </Suspense>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Suspense fallback={<SubmissionsTableShimmer />}>
          <SubmissionsTable submissions={submissions} onAction={handleAction} />
        </Suspense>
      </div>
    </div>
  );
}

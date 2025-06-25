"use client";

import { useState } from "react";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import SubmissionsTable from "@/components/dashboard/submissions-table";
import {
  artistSubmissions,
  ArtistSubmission,
  getSubmissionStats,
} from "@/data/dashboard/mocks";

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
      <DashboardHeader stats={stats} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <SubmissionsTable submissions={submissions} onAction={handleAction} />
      </div>
    </div>
  );
}

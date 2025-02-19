"use client";

import React from "react";
import DashboardContent from "@/components/dashboard/DashboardContent";

const DashboardPage = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto">
      <DashboardContent /> {/* ✅ Shows the main dashboard analytics */}
    </main>
  );
};

export default DashboardPage;

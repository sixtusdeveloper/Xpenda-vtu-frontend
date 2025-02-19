"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import ToggleMode from "@/components/ui/toggleMode";
import { useUser } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isPending, setIsPending] = useState(false); // ✅ Added loading state

  const pathname = usePathname();
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  const [currentPage, setCurrentPage] = useState(
    pathname.split("/").pop() || "dashboard"
  );

  useEffect(() => {
    setCurrentPage(pathname.split("/").pop() || "dashboard");
  }, [pathname]);

  if (!isLoaded) {
    return (
      <div className="h-screen flex justify-center items-center text-lg">
        Checking authentication...
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setIsPending={setIsPending} // ✅ Pass loading state updater
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="shadow p-4 flex justify-between items-center md:px-6 border">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <ToggleMode />
          <h2 className="text-xl font-semibold capitalize">
            {currentPage.replace("-", " ")}
          </h2>
        </header>

        {/* Show Spinner when transitioning between pages */}
        {isPending ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
            {children}
          </main>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;

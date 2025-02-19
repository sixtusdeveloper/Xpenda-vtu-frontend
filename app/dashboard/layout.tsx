"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import ToggleMode from "@/components/ui/toggleMode";
import { useUser } from "@clerk/nextjs";
import { MoonLoader, PulseLoader, ClipLoader } from "react-spinners";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        router.push("/sign-in");
      }
    }
  }, [isLoaded, isSignedIn, router]);

  const [currentPage, setCurrentPage] = useState(
    pathname.split("/").pop() || "dashboard"
  );

  useEffect(() => {
    setCurrentPage(pathname.split("/").pop() || "dashboard");
    setLoading(false); // ✅ Hide spinner only when page updates
  }, [pathname]);

  if (!isLoaded) {
    return (
      <div className="h-screen flex justify-center flex-col items-center text-center">
        <PulseLoader color="#4A90E2" size={30} />

        <span className="text-base py-2 sm:text-lg">
          Checking authentication...
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setLoading={setLoading} // ✅ Pass setLoading to Sidebar
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

        {/* ✅ Show spinner only until the actual navigation is complete */}
        {isLoading ? (
          <div className="flex-1 flex justify-center items-center text-lg">
            {/* <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div> */}
            {/* <MoonLoader color="#4A90E2" size={50} /> */}
            {/* <PulseLoader color="#4A90E2" size={10} /> */}
            <ClipLoader color="#4A90E2" size={50} />
          </div>
        ) : (
          <Suspense
            fallback={<div className="text-center text-lg">Loading...</div>}
          >
            <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
              {children}
            </main>
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;

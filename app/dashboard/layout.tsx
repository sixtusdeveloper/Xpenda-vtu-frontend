"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import ToggleMode from "@/components/ui/toggleMode";
import { useUser } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();

  // ✅ Combine both effects into one
  useEffect(() => {
    if (isLoaded) {
      if (!isSignedIn) {
        router.push("/sign-in"); // Redirect unauthenticated users
      }
    }
  }, [isLoaded, isSignedIn, router]);

  const [currentPage, setCurrentPage] = useState(
    pathname.split("/").pop() || "dashboard"
  );

  useEffect(() => {
    setCurrentPage(pathname.split("/").pop() || "dashboard");
  }, [pathname]);

  // ✅ Show a proper loading state instead of returning `null`
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
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

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

        {/* ✅ Wrap in Suspense to prevent delays */}
        <Suspense
          fallback={<div className="text-center text-lg">Loading...</div>}
        >
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
            {children}
          </main>
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardLayout;

// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useState, Suspense } from "react";
// import Sidebar from "@/components/dashboard/Sidebar";
// import { FaBars, FaTimes } from "react-icons/fa";
// import ToggleMode from "@/components/ui/toggleMode";
// import { useRouter } from "next/navigation";
// import { useUser } from "@clerk/nextjs";

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const pathname = usePathname();
//   const [currentPage, setCurrentPage] = useState(
//     pathname.split("/").pop() || "dashboard"
//   );

//   const { isSignedIn, isLoaded } = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     if (isLoaded && !isSignedIn) {
//       router.push("/sign-in"); // Redirect unauthenticated users to sign-in
//     }
//   }, [isLoaded, isSignedIn, router]);

//   if (!isLoaded || !isSignedIn) {
//     return null; // Prevent rendering until authentication is checked
//   }

//   useEffect(() => {
//     setCurrentPage(pathname.split("/").pop() || "dashboard");
//   }, [pathname]); // ✅ Updates page immediately on URL change

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <header className="shadow p-4 flex justify-between items-center md:px-6 border">
//           <button
//             className="md:hidden"
//             onClick={() => setSidebarOpen(!isSidebarOpen)}
//           >
//             {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>

//           <ToggleMode />
//           <h2 className="text-xl font-semibold capitalize">
//             {currentPage.replace("-", " ")}
//           </h2>
//         </header>

//         {/* ✅ Wrap in Suspense to prevent delays */}
//         <Suspense
//           fallback={<div className="text-center text-lg">Loading...</div>}
//         >
//           <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
//             {children}
//           </main>
//         </Suspense>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

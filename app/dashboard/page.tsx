"use client";

import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import ToggleMode from "@/components/ui/toggleMode";
import DashboardContent from "@/components/dashboard/DashboardContent";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="shadow p-4 flex justify-between items-center md:px-6">
          {/* Sidebar Toggle Button */}
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <ToggleMode />

          <h2 className="text-xl font-semibold capitalize">Dashboard</h2>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
          <DashboardContent /> {/* ✅ Shows the main dashboard analytics */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

// "use client";
// import React, { useState } from "react";
// import { usePathname } from "next/navigation"; // ✅ Get the current URL path
// import Sidebar from "@/components/dashboard/Sidebar";
// import { FaBars, FaTimes } from "react-icons/fa";
// import ToggleMode from "@/components/ui/toggleMode";
// import DashboardContent from "@/components/dashboard/DashboardContent";
// import Orders from "@/components/dashboard/Orders";
// import Transactions from "@/components/dashboard/Transactions";
// import FundWallet from "@/components/dashboard/FundWallet";
// import TrackOrder from "@/components/dashboard/TrackOrder";
// import Airtime from "@/components/dashboard/Airtime";
// import Data from "@/components/dashboard/Data";
// import CableTV from "@/components/dashboard/CableTV";
// import Electricity from "@/components/dashboard/Electricity";
// import Epins from "@/components/dashboard/Epins";
// import Betting from "@/components/dashboard/Betting";

// const Dashboard = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const pathname = usePathname(); // ✅ Get the URL path (e.g., /dashboard/airtime)
//   const page = pathname.split("/")[2] || "dashboard"; // ✅ Extract section from URL

//   const renderContent = () => {
//     switch (page) {
//       case "orders":
//         return <Orders />;
//       case "transactions":
//         return <Transactions />;
//       case "fund-wallet":
//         return <FundWallet />;
//       case "track-order":
//         return <TrackOrder />;
//       case "airtime":
//         return <Airtime />;
//       case "data":
//         return <Data />;
//       case "cable-tv":
//         return <CableTV />;
//       case "electricity":
//         return <Electricity />;
//       case "epins":
//         return <Epins />;
//       case "betting":
//         return <Betting />;
//       default:
//         return <DashboardContent />;
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <header className="shadow p-4 flex justify-between items-center md:px-6">
//           {/* Sidebar Toggle Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setSidebarOpen(!isSidebarOpen)}
//           >
//             {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>

//           <ToggleMode />

//           {/* Ensure page is defined before using .replace() */}
//           <h2 className="text-xl font-semibold capitalize">
//             {page.replace("-", " ")}
//           </h2>
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
//           {renderContent()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// "use client";

// import React, { useState } from "react";
// import Sidebar from "@/components/dashboard/Sidebar";
// import { FaBars, FaTimes } from "react-icons/fa";
// import ToggleMode from "@/components/ui/toggleMode";
// import DashboardContent from "@/components/dashboard/DashboardContent";
// import Orders from "@/components/dashboard/Orders";
// import Transactions from "@/components/dashboard/Transactions";
// import FundWallet from "@/components/dashboard/FundWallet";
// import TrackOrder from "@/components/dashboard/TrackOrder";
// import Airtime from "@/components/dashboard/Airtime";
// import Data from "@/components/dashboard/Data";
// import CableTV from "@/components/dashboard/CableTV";
// import Electricity from "@/components/dashboard/Electricity";
// import Epins from "@/components/dashboard/Epins";
// import Betting from "@/components/dashboard/Betting";

// const Dashboard = ({ page }: { page: string }) => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const renderContent = () => {
//     switch (page) {
//       case "orders":
//         return <Orders />;
//       case "transactions":
//         return <Transactions />;
//       case "fund-wallet":
//         return <FundWallet />;
//       case "track-order":
//         return <TrackOrder />;
//       case "airtime":
//         return <Airtime />;
//       case "data":
//         return <Data />;
//       case "cable-tv":
//         return <CableTV />;
//       case "electricity":
//         return <Electricity />;
//       case "epins":
//         return <Epins />;
//       case "betting":
//         return <Betting />;
//       default:
//         return <DashboardContent />;
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <header className="shadow p-4 flex justify-between items-center md:px-6">
//           {/* Sidebar Toggle Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setSidebarOpen(!isSidebarOpen)}
//           >
//             {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>

//           <ToggleMode />

//           <h2 className="text-xl font-semibold capitalize">
//             {page ? page.replace("-", " ") : "Dashboard"}
//           </h2>
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
//           {renderContent()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

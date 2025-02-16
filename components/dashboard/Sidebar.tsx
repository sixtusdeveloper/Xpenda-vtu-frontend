"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Get current route
import { sidebarItems } from "@/data/dashboard";
import { Logo } from "../NavbarLogo";
import { FaTimes } from "react-icons/fa";

interface NavbarProps {
  LogoImg?: string;
  title?: string;
}

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps & NavbarProps> = ({
  isSidebarOpen,
  setSidebarOpen,
  LogoImg,
  title = "Xpenda",
}) => {
  const pathname = usePathname(); // ✅ Get the current route

  return (
    <aside
      className={`w-64 space-y-6 py-7 px-4 fixed md:relative inset-y-0 left-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out h-screen md:h-auto overflow-y-auto z-50 bg-gray-900 text-white`}
    >
      {/* Sidebar Header */}
      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
        <div className="flex lg:flex-1">
          <Logo src={LogoImg} alt="Logo" title={title} />
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setSidebarOpen(false)}
        >
          <FaTimes size={24} />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav>
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.link;

          return (
            <Link
              href={item.link}
              key={index}
              className={`flex items-center py-3 px-4 rounded-lg transition ${
                isActive
                  ? "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white font-semibold"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setSidebarOpen(false)} // ✅ Close sidebar on mobile
            >
              <Icon className="mr-3 text-lg" />
              <span className="text-base font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

// "use client";
// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; // ✅ Track the current path
// import { sidebarItems } from "@/data/dashboard";
// import { Logo } from "../NavbarLogo";
// import { FaTimes } from "react-icons/fa";

// interface NavbarProps {
//   LogoImg?: string;
//   title?: string;
// }

// interface SidebarProps {
//   isSidebarOpen: boolean;
//   setSidebarOpen: (isOpen: boolean) => void;
// }

// const Sidebar: React.FC<SidebarProps & NavbarProps> = ({
//   isSidebarOpen,
//   setSidebarOpen,
//   LogoImg,
//   title = "Xpenda",
// }) => {
//   const pathname = usePathname(); // ✅ Get current route

//   return (
//     <aside
//       className={`w-64 space-y-6 py-7 px-4 fixed md:relative inset-y-0 left-0 transform ${
//         isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//       } md:translate-x-0 transition-transform duration-300 ease-in-out h-screen md:h-auto overflow-y-auto z-50`}
//     >
//       {/* Sidebar Header */}
//       <div className="flex justify-between items-center pb-2 border-b">
//         <div className="flex lg:flex-1">
//           <Logo src={LogoImg} alt="Logo" title={title} />
//         </div>
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setSidebarOpen(false)}
//         >
//           <FaTimes size={24} />
//         </button>
//       </div>

//       {/* Sidebar Navigation */}
//       <nav>
//         {sidebarItems.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <Link
//               href={item.link}
//               key={index}
//               className={`flex items-center py-3 px-4 rounded-lg transition ${
//                 pathname === item.link
//                   ? "bg-gray-700 text-white"
//                   : "hover:bg-gray-700"
//               }`}
//               onClick={() => setSidebarOpen(false)} // ✅ Close sidebar after clicking (for mobile)
//             >
//               <Icon className="mr-3 text-lg" />
//               <span className="text-base font-medium">{item.name}</span>
//             </Link>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// };

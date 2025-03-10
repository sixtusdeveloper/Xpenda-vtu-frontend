"use client";

import React, { useEffect, useTransition, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { sidebarItems } from "@/data/dashboard";
import { Logo } from "../NavbarLogo";
import { FaTimes } from "react-icons/fa";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import UserIcon from "@heroicons/react/24/outline/UserIcon";

interface NavbarProps {
  LogoImg?: string;
  title?: string;
}

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  setLoading: (isLoading: boolean) => void; // ✅ Added setLoading
}

const Sidebar: React.FC<SidebarProps & NavbarProps> = ({
  isSidebarOpen,
  setSidebarOpen,
  setLoading, // ✅ Receive loading state control
  LogoImg,
  title = "Xpenda",
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isSidebarOpen) {
      sidebarItems.forEach((item) => router.prefetch(item.link));
    }
  }, [isSidebarOpen, router]);

  const handleNavigation = useCallback(
    (link: string) => {
      if (pathname !== link) {
        // ✅ Only load if changing pages
        setLoading(true); // Show spinner
        startTransition(() => {
          router.replace(link, { scroll: false });
        });
      }
      setSidebarOpen(false);
    },
    [router, setSidebarOpen, setLoading, pathname]
  );

  return (
    <aside
      className={`w-64 space-y-6 py-7 px-4 fixed md:relative inset-y-0 left-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-150 ease-in-out h-screen md:h-auto
      overflow-y-auto z-50 bg-gray-900 text-white no-scrollbar border-r border-gray-800`}
    >
      <div className="flex justify-between items-center border-b border-gray-700 pb-2">
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

      <nav>
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.link;

          return (
            <button
              key={index}
              onClick={() => handleNavigation(item.link)}
              className={`flex w-full items-center mb-2 leading-snug py-3 px-4 rounded-lg transition ${
                isActive
                  ? "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white text-base font-semibold"
                  : "hover:bg-gray-600 hover:text-white"
              }`}
            >
              <Icon className="mr-3 text-lg" />
              <span className="text-base font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="border-t border-gray-700 mt-6 pt-4 flex items-center gap-3">
        <SignedIn>
          <div className="flex items-center gap-2">
            <UserButton />
            {user && (
              <span className="block lg:block text-[15px] font-semibold bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-400 bg-clip-text text-transparent">
                {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
              </span>
            )}
          </div>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <button className="inline-flex text-base font-medium px-3 py-2 rounded-lg bg-blue-500 hover:bg-indigo-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white">
              <UserIcon className="mr-1 h-5 w-5 text-white" /> Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </aside>
  );
};

export default Sidebar;

// PROPERLY WORKING JUST NOT PERFECT IN THE SENSE THAT IT'S NOT TRACKING THE CURRENT ACTIVE LINK BEFORE THE SPINNER DISAPPEARS
// "use client";

// import React, { useEffect, useTransition, useState, useCallback } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { sidebarItems } from "@/data/dashboard";
// import { Logo } from "../NavbarLogo";
// import { FaTimes } from "react-icons/fa";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
//   useUser,
// } from "@clerk/nextjs";
// import UserIcon from "@heroicons/react/24/outline/UserIcon";

// interface NavbarProps {
//   LogoImg?: string;
//   title?: string;
// }

// interface SidebarProps {
//   isSidebarOpen: boolean;
//   setSidebarOpen: (isOpen: boolean) => void;
//   setIsPending: (isLoading: boolean) => void; // ✅ New prop to control loading state
// }

// const Sidebar: React.FC<SidebarProps & NavbarProps> = ({
//   isSidebarOpen,
//   setSidebarOpen,
//   setIsPending, // ✅ Received loading state setter
//   LogoImg,
//   title = "Xpenda",
// }) => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { user } = useUser();
//   const [isTransitioning, startTransition] = useTransition();

//   useEffect(() => {
//     if (isSidebarOpen) {
//       sidebarItems.forEach((item) => router.prefetch(item.link));
//     }
//   }, [isSidebarOpen, router]);

//   const handleNavigation = useCallback(
//     (link: string) => {
//       setIsPending(true); // ✅ Set loading to true when clicking a link
//       startTransition(() => {
//         router.replace(link, { scroll: false });
//         setSidebarOpen(false);
//         setTimeout(() => setIsPending(false), 800); // ✅ Simulated delay to avoid flickering
//       });
//     },
//     [router, setSidebarOpen, setIsPending]
//   );

//   return (
//     <aside
//       className={`w-64 space-y-6 py-7 px-4 fixed md:relative inset-y-0 left-0 transform ${
//         isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//       } md:translate-x-0 transition-transform duration-150 ease-in-out h-screen md:h-auto
//       overflow-y-auto z-50 bg-gray-900 text-white no-scrollbar border-r border-gray-800`}
//     >
//       {/* Sidebar Header */}
//       <div className="flex justify-between items-center border-b border-gray-700 pb-2">
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
//           const isActive = pathname === item.link;

//           return (
//             <button
//               key={index}
//               onClick={() => handleNavigation(item.link)}
//               className={`flex w-full items-center mb-2 leading-snug py-3 px-4 rounded-lg transition ${
//                 isActive
//                   ? "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white text-base font-semibold"
//                   : "hover:bg-gray-600 hover:text-white"
//               }`}
//             >
//               <Icon className="mr-3 text-lg" />
//               <span className="text-base font-medium">{item.name}</span>
//             </button>
//           );
//         })}
//       </nav>

//       {/* User Profile Section */}
//       <div className="border-t border-gray-700 mt-6 pt-4 flex items-center gap-3">
//         <SignedIn>
//           <div className="flex items-center gap-2">
//             <UserButton />
//             {user && (
//               <span className="block lg:block text-[15px] font-semibold bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-400 bg-clip-text text-transparent">
//                 {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
//               </span>
//             )}
//           </div>
//         </SignedIn>

//         <SignedOut>
//           <SignInButton>
//             <button className="inline-flex text-base font-medium px-3 py-2 rounded-lg bg-blue-500 hover:bg-indego-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white">
//               <UserIcon className="mr-1 h-5 w-5 text-white" /> Sign In
//             </button>
//           </SignInButton>
//         </SignedOut>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

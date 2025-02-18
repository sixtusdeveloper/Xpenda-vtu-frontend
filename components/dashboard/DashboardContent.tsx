"use client";

import React, { useState, useEffect } from "react";
import Card from "@/components/custom/Card";
import CardContent from "@/components/custom/CardContent";
import CardHeader from "@/components/custom/CardHeader";
import CardTitle from "@/components/custom/CardTitle";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiUsers, FiTrendingUp, FiDollarSign } from "react-icons/fi";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const DashboardContent = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); // Simulated loading state
  }, []);

  const revenueData = [
    { name: "Jan", revenue: 5000 },
    { name: "Feb", revenue: 7000 },
    { name: "Mar", revenue: 6500 },
    { name: "Apr", revenue: 9000 },
    { name: "May", revenue: 12000 },
  ];

  const transactionsData = [
    { name: "Mon", transactions: 200 },
    { name: "Tue", transactions: 350 },
    { name: "Wed", transactions: 280 },
    { name: "Thu", transactions: 450 },
    { name: "Fri", transactions: 600 },
  ];

  const usersData = [
    { name: "Jan", users: 1500 },
    { name: "Feb", users: 2000 },
    { name: "Mar", users: 2500 },
    { name: "Apr", users: 3000 },
    { name: "May", users: 3500 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-2 sm:p-6 lg: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      {/* Overview Cards */}
      {[
        {
          title: "Total Revenue",
          value: "₦12,500,000",
          icon: <FiDollarSign size={32} className="text-green-500" />,
        },
        {
          title: "Total Transactions",
          value: "14,500",
          icon: <FiTrendingUp size={32} className="text-blue-500" />,
        },
        {
          title: "New Customers",
          value: "2,500",
          icon: <FiUsers size={32} className="text-yellow-500" />,
        },
      ].map((item, index) => (
        <motion.div key={index} whileHover={{ scale: 1.05 }}>
          <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              {item.icon}
              <span className="text-xl sm:text-2xl font-semibold">
                {loading ? "Loading..." : item.value}
              </span>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      {/* Charts Section */}
      <motion.div
        className="col-span-1 sm:col-span-2"
        whileHover={{ scale: 1.02 }}
      >
        <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Revenue Growth</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-40 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={revenueData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={isDarkMode ? "#555" : "#ccc"}
                  />
                  <XAxis dataKey="name" stroke={isDarkMode ? "#ddd" : "#333"} />
                  <YAxis stroke={isDarkMode ? "#ddd" : "#333"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDarkMode ? "#333" : "#fff",
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="col-span-1" whileHover={{ scale: 1.02 }}>
        <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Daily Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-40 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={transactionsData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={isDarkMode ? "#555" : "#ccc"}
                  />
                  <XAxis dataKey="name" stroke={isDarkMode ? "#ddd" : "#333"} />
                  <YAxis stroke={isDarkMode ? "#ddd" : "#333"} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDarkMode ? "#333" : "#fff",
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                  />
                  <Bar dataKey="transactions" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default DashboardContent;

// "use client";

// import React, { useState, useEffect } from "react";
// import Card from "@/components/custom/Card";
// import CardContent from "@/components/custom/CardContent";
// import CardHeader from "@/components/custom/CardHeader";
// import CardTitle from "@/components/custom/CardTitle";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { FiUsers, FiTrendingUp, FiDollarSign } from "react-icons/fi";
// import { useTheme } from "next-themes";
// import { motion } from "framer-motion";

// const DashboardContent = () => {
//   const { theme } = useTheme();
//   const isDarkMode = theme === "dark";
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1500); // Simulated loading state
//   }, []);

//   const revenueData = [
//     { name: "Jan", revenue: 5000 },
//     { name: "Feb", revenue: 7000 },
//     { name: "Mar", revenue: 6500 },
//     { name: "Apr", revenue: 9000 },
//     { name: "May", revenue: 12000 },
//   ];

//   const transactionsData = [
//     { name: "Mon", transactions: 200 },
//     { name: "Tue", transactions: 350 },
//     { name: "Wed", transactions: 280 },
//     { name: "Thu", transactions: 450 },
//     { name: "Fri", transactions: 600 },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
//     >
//       {/* Overview Cards */}
//       {[
//         {
//           title: "Total Revenue",
//           value: "₦12,500,000",
//           icon: <FiDollarSign size={32} className="text-green-500" />,
//         },
//         {
//           title: "Total Transactions",
//           value: "14,500",
//           icon: <FiTrendingUp size={32} className="text-blue-500" />,
//         },
//         {
//           title: "New Customers",
//           value: "2,500",
//           icon: <FiUsers size={32} className="text-yellow-500" />,
//         },
//       ].map((item, index) => (
//         <motion.div key={index} whileHover={{ scale: 1.05 }}>
//           <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
//             <CardHeader>
//               <CardTitle>{item.title}</CardTitle>
//             </CardHeader>
//             <CardContent className="flex items-center justify-between">
//               {item.icon}
//               <span className="text-xl sm:text-2xl font-semibold">
//                 {loading ? "Loading..." : item.value}
//               </span>
//             </CardContent>
//           </Card>
//         </motion.div>
//       ))}

//       {/* Charts Section */}
//       <motion.div
//         className="col-span-1 sm:col-span-2"
//         whileHover={{ scale: 1.02 }}
//       >
//         <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
//           <CardHeader>
//             <CardTitle>Revenue Growth</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {loading ? (
//               <div className="h-40 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
//             ) : (
//               <ResponsiveContainer width="100%" height={250}>
//                 <LineChart data={revenueData}>
//                   <CartesianGrid
//                     strokeDasharray="3 3"
//                     stroke={isDarkMode ? "#555" : "#ccc"}
//                   />
//                   <XAxis dataKey="name" stroke={isDarkMode ? "#ddd" : "#333"} />
//                   <YAxis stroke={isDarkMode ? "#ddd" : "#333"} />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: isDarkMode ? "#333" : "#fff",
//                       color: isDarkMode ? "#fff" : "#000",
//                     }}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="revenue"
//                     stroke="#3b82f6"
//                     strokeWidth={3}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             )}
//           </CardContent>
//         </Card>
//       </motion.div>

//       <motion.div className="col-span-1" whileHover={{ scale: 1.02 }}>
//         <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
//           <CardHeader>
//             <CardTitle>Daily Transactions</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {loading ? (
//               <div className="h-40 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
//             ) : (
//               <ResponsiveContainer width="100%" height={250}>
//                 <BarChart data={transactionsData}>
//                   <CartesianGrid
//                     strokeDasharray="3 3"
//                     stroke={isDarkMode ? "#555" : "#ccc"}
//                   />
//                   <XAxis dataKey="name" stroke={isDarkMode ? "#ddd" : "#333"} />
//                   <YAxis stroke={isDarkMode ? "#ddd" : "#333"} />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: isDarkMode ? "#333" : "#fff",
//                       color: isDarkMode ? "#fff" : "#000",
//                     }}
//                   />
//                   <Bar dataKey="transactions" fill="#f97316" />
//                 </BarChart>
//               </ResponsiveContainer>
//             )}
//           </CardContent>
//         </Card>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default DashboardContent;

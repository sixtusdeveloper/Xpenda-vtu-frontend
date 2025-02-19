"use client";

import React, { useState, useEffect } from "react";
import Card from "@/components/custom/Card";
import CardContent from "@/components/custom/CardContent";
import CardHeader from "@/components/custom/CardHeader";
import CardTitle from "@/components/custom/CardTitle";
import { FiSearch, FiTruck } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useUser } from "@clerk/nextjs";

interface TrackingInfo {
  id: string;
  service: string;
  amount: string;
  status: string;
  recipient: string;
  paymentMethod: string;
  lastUpdated: string;
  estimatedDelivery?: string;
  location?: string;
}

const TrackOrder = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { user, isSignedIn } = useUser();

  const [searchQuery, setSearchQuery] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const trackingInfo = [
      {
        id: "XP-123456",
        service: "Airtime Purchase",
        amount: "₦500",
        status: "Success",
        recipient: "08012345678 (MTN)",
        paymentMethod: "Wallet",
        lastUpdated: "2025-02-18 10:30 AM",
        estimatedDelivery: "2025-02-20 5:00 PM",
        location: "Lagos, Nigeria",
      },
      {
        id: "XP-987654",
        service: "Data Purchase",
        amount: "₦1,000",
        status: "Pending",
        recipient: "08098765432 (Airtel)",
        paymentMethod: "Bank Transfer",
        lastUpdated: "2025-02-18 10:45 AM",
      },
      {
        id: "XP-654321",
        service: "Electricity Bill",
        amount: "₦5,000",
        status: "Failed",
        recipient: "Prepaid Meter: 1234567890 (Ikeja Electric)",
        paymentMethod: "Card",
        lastUpdated: "2025-02-17 9:00 PM",
      },
      {
        id: "XP-789123",
        service: "Cable TV Subscription",
        amount: "₦3,500",
        status: "Success",
        recipient: "GOTV - 1234567890",
        paymentMethod: "USSD",
        lastUpdated: "2025-02-16 3:00 PM",
      },
    ];

    setTrackingData(trackingInfo);
    setLoading(false);
  }, []);

  const filteredTracking = trackingData.filter((order) =>
    order.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTracking.length / itemsPerPage);
  const paginatedData = filteredTracking.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-4 space-y-6"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
        Track Your Order
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
        Enter your order ID to track the real-time status and delivery updates.
      </p>

      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Enter Order ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={20} />
      </div>

      {/* Tracking Details */}
      {loading ? (
        <p className="text-center text-gray-500">Loading tracking data...</p>
      ) : paginatedData.length > 0 ? (
        paginatedData.map((order) => (
          <Card
            key={order.id}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md"
          >
            <CardHeader>
              <CardTitle>Order ID: {order.id}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">
                Status: <span className="text-blue-500">{order.status}</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Last Updated: {order.lastUpdated}
              </p>
              {order.estimatedDelivery && (
                <p className="text-gray-600 dark:text-gray-400">
                  Estimated Delivery: {order.estimatedDelivery}
                </p>
              )}
              <div className="flex items-center space-x-3 mt-4">
                <FiTruck size={24} className="text-green-500" />
                <p className="text-sm">{order.recipient}</p>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-center text-gray-500">No orders found.</p>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 items-center mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-600 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default TrackOrder;

// "use client";

// import React, { useState, useEffect } from "react";
// import Card from "@/components/custom/Card";
// import CardContent from "@/components/custom/CardContent";
// import CardHeader from "@/components/custom/CardHeader";
// import CardTitle from "@/components/custom/CardTitle";
// import { FiSearch, FiCheckCircle, FiClock, FiXCircle } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import { useUser } from "@clerk/nextjs";

// interface TrackingInfo {
//   id: string;
//   service: string;
//   amount: string;
//   status: "Success" | "Pending" | "Failed";
//   recipient: string;
//   paymentMethod: string;
//   lastUpdated: string;
// }

// const TrackOrder = () => {
//   const { theme } = useTheme();
//   const { user, isSignedIn } = useUser();

//   const [searchQuery, setSearchQuery] = useState("");
//   const [trackingData, setTrackingData] = useState<TrackingInfo[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const trackingInfo: TrackingInfo[] = [
//       {
//         id: "XP-123456",
//         service: "Airtime Purchase",
//         amount: "₦500",
//         status: "Success",
//         recipient: "08012345678 (MTN)",
//         paymentMethod: "Wallet",
//         lastUpdated: "2025-02-18 10:30 AM",
//       },
//       {
//         id: "XP-987654",
//         service: "Data Purchase",
//         amount: "₦1,000",
//         status: "Pending",
//         recipient: "08098765432 (Airtel)",
//         paymentMethod: "Bank Transfer",
//         lastUpdated: "2025-02-18 10:45 AM",
//       },
//       {
//         id: "XP-654321",
//         service: "Electricity Bill",
//         amount: "₦5,000",
//         status: "Failed",
//         recipient: "Prepaid Meter: 1234567890 (Ikeja Electric)",
//         paymentMethod: "Card",
//         lastUpdated: "2025-02-17 9:00 PM",
//       },
//     ];

//     setTrackingData(trackingInfo);
//     setLoading(false);
//   }, []);

//   const filteredTracking = trackingData.filter((order) =>
//     order.id.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const getStatusIcon = (status: "Success" | "Pending" | "Failed") => {
//     switch (status) {
//       case "Success":
//         return <FiCheckCircle className="text-green-500" size={20} />;
//       case "Pending":
//         return <FiClock className="text-yellow-500" size={20} />;
//       case "Failed":
//         return <FiXCircle className="text-red-500" size={20} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="p-4 sm:p-6 space-y-6"
//     >
//       <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
//         Track Your Order
//       </h2>
//       <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
//         Enter your order ID to check your transaction status.
//       </p>

//       {/* Search Bar */}
//       <div className="relative mb-6">
//         <input
//           type="text"
//           placeholder="Enter Order ID..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
//         />
//         <FiSearch className="absolute left-3 top-3 text-gray-500" size={22} />
//       </div>

//       {/* Tracking Details */}
//       {loading ? (
//         <p className="text-center text-gray-500">Loading tracking data...</p>
//       ) : filteredTracking.length > 0 ? (
//         filteredTracking.map((order) => (
//           <Card
//             key={order.id}
//             className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md"
//           >
//             <CardHeader>
//               <CardTitle className="text-lg font-bold">
//                 Order ID: {order.id}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="flex items-center space-x-3 mb-3">
//                 {getStatusIcon(order.status)}
//                 <p className="text-lg font-semibold">
//                   Status:{" "}
//                   <span
//                     className={`${
//                       order.status === "Success"
//                         ? "text-green-500"
//                         : order.status === "Pending"
//                         ? "text-yellow-500"
//                         : "text-red-500"
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </p>
//               </div>
//               <p className="text-gray-600 dark:text-gray-400">
//                 <span className="font-semibold">Service:</span> {order.service}
//               </p>
//               <p className="text-gray-600 dark:text-gray-400">
//                 <span className="font-semibold">Amount:</span> {order.amount}
//               </p>
//               <p className="text-gray-600 dark:text-gray-400">
//                 <span className="font-semibold">Recipient:</span>{" "}
//                 {order.recipient}
//               </p>
//               <p className="text-gray-600 dark:text-gray-400">
//                 <span className="font-semibold">Payment Method:</span>{" "}
//                 {order.paymentMethod}
//               </p>
//               <p className="text-gray-600 dark:text-gray-400">
//                 <span className="font-semibold">Last Updated:</span>{" "}
//                 {order.lastUpdated}
//               </p>
//             </CardContent>
//           </Card>
//         ))
//       ) : (
//         <p className="text-center text-gray-500">No orders found.</p>
//       )}
//     </motion.div>
//   );
// };

// export default TrackOrder;

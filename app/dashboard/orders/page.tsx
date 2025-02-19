"use client";

import React, { useState, useEffect } from "react";
import Card from "@/components/custom/Card";
import CardContent from "@/components/custom/CardContent";
import CardHeader from "@/components/custom/CardHeader";
import CardTitle from "@/components/custom/CardTitle";
import { FiShoppingCart, FiDollarSign, FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const Orders = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [balance] = useState("₦150,000.00");
  interface Order {
    id: string;
    item: string;
    amount: string;
    status: string;
    date: string;
  }

  const [orders, setOrders] = useState<Order[]>([]);
  const [visibleOrders, setVisibleOrders] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const { user, isSignedIn } = useUser();

  // Get current hour
  const currentHour = new Date().getHours();

  let greeting = "Good evening";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  }

  useEffect(() => {
    // Static placeholder orders data
    const ordersData = [
      {
        id: "ORD001",
        item: "Airtime - MTN",
        amount: "₦5,000",
        status: "Completed",
        date: "2025-02-18",
      },
      {
        id: "ORD002",
        item: "Data - Glo 10GB",
        amount: "₦3,500",
        status: "Pending",
        date: "2025-02-17",
      },
      {
        id: "ORD003",
        item: "Electricity Bill - Ikeja",
        amount: "₦7,200",
        status: "Failed",
        date: "2025-02-04",
      },
      {
        id: "ORD004",
        item: "Electricity Bill - Ikeja",
        amount: "₦5,200",
        status: "Pending",
        date: "2025-02-03",
      },
      {
        id: "ORD005",
        item: "Electricity Bill - Ikeja",
        amount: "₦72,200",
        status: "Completed",
        date: "2025-02-04",
      },
      {
        id: "ORD006",
        item: "Electricity Bill - Ikeja",
        amount: "₦2,200",
        status: "Pending",
        date: "2025-02-08",
      },
      {
        id: "ORD007",
        item: "Electricity Bill - Ikeja",
        amount: "₦73,200",
        status: "Completed",
        date: "2025-02-11",
      },
      {
        id: "ORD008",
        item: "Electricity Bill - Ikeja",
        amount: "₦27,200",
        status: "Pending",
        date: "2025-02-12",
      },
      {
        id: "ORD009",
        item: "Electricity Bill - Ikeja",
        amount: "₦90,200",
        status: "Completed",
        date: "2025-02-02",
      },
      {
        id: "ORD0010",
        item: "Electricity Bill - Ikeja",
        amount: "₦24,200",
        status: "Pending",
        date: "2025-02-13",
      },
      {
        id: "ORD0011",
        item: "Electricity Bill - Ikeja",
        amount: "₦22,200",
        status: "Failed",
        date: "2025-01-06",
      },
      {
        id: "ORD0012",
        item: "Electricity Bill - Ikeja",
        amount: "₦233,200",
        status: "Completed",
        date: "2025-01-26",
      },
    ];

    setOrders(ordersData);
    setLoading(false);
  }, []);

  const loadMoreOrders = () => {
    setVisibleOrders((prev) => prev + 10);
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.amount.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-2 sm:p-4 space-y-6"
    >
      <h4>
        {" "}
        {isSignedIn && user ? (
          <>
            👋 {greeting},{" "}
            <span className="font-sans font-bold">
              {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
            </span>
          </>
        ) : (
          "👋 Hi there!"
        )}
      </h4>
      <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
        Orders Dashboard
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-base lg:text-base mb-8">
        Manage and view all occured orders along with their dates, status and
        more..
      </p>
      {/* User Info & Balance Section */}
      <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md lg:flex-nowrap flex-wrap flex justify-between items-center">
        <div>
          <CardTitle className="text-base lg:text-lg py-2">
            Welcome, {user?.fullName || "User"}!
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base py-1">
            Email: {user?.primaryEmailAddress?.toString() || "N/A"}
          </p>
          <div className="flex items-center lg:flex-nowrap flex-wrap space-x-4 mt-2">
            <FiShoppingCart size={32} className="text-blue-500" />
            <span className="text-sm sm:text-base font-semibold">
              Total Order: {loading ? "Loading..." : orders.length}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FiDollarSign size={32} className="text-green-500" />
          <span className="text-2xl font-semibold bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            {balance}
          </span>
          <img
            src={user?.imageUrl}
            alt="User Avatar"
            className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600"
          />
        </div>
      </Card>

      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search orders..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={20} />
      </div>

      {/* Orders Table */}
      <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white">
                  <th className="p-3 text-left">Order ID</th>
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.slice(0, visibleOrders).map((order) => (
                  <tr
                    key={order.id}
                    className="border-t border-gray-300 dark:border-gray-700"
                  >
                    <td className="p-3 text-sm">{order.id}</td>
                    <td className="p-3 text-sm">{order.item}</td>
                    <td className="p-3 text-sm">{order.amount}</td>
                    <td
                      className={`p-3 font-semibold text-sm ${
                        order.status === "Completed"
                          ? "text-green-500"
                          : order.status === "Pending"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {order.status}
                    </td>
                    <td className="p-3 text-sm">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Load More Button */}
          {visibleOrders < filteredOrders.length && (
            <button
              onClick={loadMoreOrders}
              className="flex items-center text-center mx-auto mt-4 px-4 py-2 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white text-base font-semibold rounded-lg hover:from-yellow-600 hover:to-purple-700 transition-all"
            >
              Load More
            </button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Orders;

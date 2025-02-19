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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FiUsers, FiTrendingUp, FiDollarSign, FiMonitor } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  revenueData,
  transactionsData,
  servicesData,
  deviceData,
  COLORS,
  referralData,
} from "@/data/dashboard";
import { motion } from "framer-motion";

const DashboardContent = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [loading, setLoading] = useState(true);
  const [newCustomers, setNewCustomers] = useState(0);
  const [userGrowth, setUserGrowth] = useState<
    { name: string; users: number }[]
  >([]);

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
    setTimeout(() => setLoading(false), 1500); // Simulated loading state
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/clerk-users");
        const data = await response.json();

        setNewCustomers(data.length);

        interface User {
          created_at: string;
        }

        interface MonthlyData {
          [key: string]: number;
        }

        const monthlyData: MonthlyData = data.reduce(
          (acc: MonthlyData, user: User) => {
            const month = new Date(user.created_at).toLocaleString("default", {
              month: "short",
            });

            acc[month] = (acc[month] || 0) + 1;
            return acc;
          },
          {}
        );

        const formattedUserGrowth = Object.keys(monthlyData).map((month) => ({
          name: month,
          users: monthlyData[month],
        }));

        setUserGrowth(formattedUserGrowth);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h4 className="text-lg sm:text-xl font-semibold py-2 mb-2">
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-2 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4"
      >
        {/* Overview Cards */}
        {["Total Revenue", "Total Transactions", "New Customers"].map(
          (title, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  {index === 0 ? (
                    <FiDollarSign size={32} className="text-green-500" />
                  ) : index === 1 ? (
                    <FiTrendingUp size={32} className="text-blue-500" />
                  ) : (
                    <FiUsers size={32} className="text-yellow-500" />
                  )}
                  <span className="text-xl sm:text-2xl font-semibold">
                    {loading
                      ? "Loading..."
                      : index === 2
                      ? newCustomers
                      : "₦12,500,000"}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          )
        )}

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
                    <XAxis
                      dataKey="name"
                      stroke={isDarkMode ? "#ddd" : "#333"}
                    />
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

        {/* DAILY TRANSACTIONS CHART */}
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
                    <XAxis
                      dataKey="name"
                      stroke={isDarkMode ? "#ddd" : "#333"}
                    />
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

        {/* Top Performing Services Pie Chart */}
        <motion.div className="col-span-1" whileHover={{ scale: 1.02 }}>
          <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Top Performing Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={servicesData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {servicesData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Device & Platform Usage */}
        <motion.div className="col-span-1" whileHover={{ scale: 1.02 }}>
          <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Device & Platform Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={deviceData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {deviceData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* User Growth Chart */}
        {/* User Growth Chart */}
        <motion.div className="col-span-1" whileHover={{ scale: 1.02 }}>
          <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="h-40 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
              ) : (
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={userGrowth}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={isDarkMode ? "#555" : "#ccc"}
                    />
                    <XAxis
                      dataKey="name"
                      stroke={isDarkMode ? "#ddd" : "#333"}
                    />
                    <YAxis stroke={isDarkMode ? "#ddd" : "#333"} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDarkMode ? "#333" : "#fff",
                        color: isDarkMode ? "#fff" : "#000",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#3b82f6"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </motion.div>
        {/* <motion.div className="col-span-1" whileHover={{ scale: 1.02 }}>
        <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="h-40 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={usersData}>
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
                    dataKey="users"
                    stroke="#3b82f6"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </motion.div> */}

        {/* Referral Tracker Chart */}
        <motion.div className="col-span-1" whileHover={{ scale: 1.02 }}>
          <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Referral Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="h-40 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
              ) : (
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={referralData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={isDarkMode ? "#555" : "#ccc"}
                    />
                    <XAxis
                      dataKey="month"
                      stroke={isDarkMode ? "#ddd" : "#333"}
                    />
                    <YAxis stroke={isDarkMode ? "#ddd" : "#333"} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDarkMode ? "#333" : "#fff",
                        color: isDarkMode ? "#fff" : "#000",
                      }}
                    />
                    <Bar
                      dataKey="referrals"
                      fill="#f59e0b"
                      radius={[5, 5, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </>
  );
};

export default DashboardContent;

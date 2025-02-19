"use client";

import React, { useState, useEffect } from "react";
import Card from "@/components/custom/Card";
import CardContent from "@/components/custom/CardContent";
import CardHeader from "@/components/custom/CardHeader";
import CardTitle from "@/components/custom/CardTitle";
import { FiDollarSign, FiSearch, FiCreditCard } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useUser } from "@clerk/nextjs";

const Transactions = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [balance] = useState("₦150,000.00");
  interface Transaction {
    id: string;
    description: string;
    amount: string;
    status: string;
    date: string;
  }

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [visibleTransactions, setVisibleTransactions] = useState(10);
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
    const transactionsData = [
      {
        id: "TXN001",
        description: "Airtime Purchase",
        amount: "₦2,000",
        status: "Pending",
        date: "2025-02-18",
      },
      {
        id: "TXN002",
        description: "Data Subscription",
        amount: "₦3,500",
        status: "Completed",
        date: "2025-02-17",
      },
      {
        id: "TXN003",
        description: "Electricity Bill",
        amount: "₦7,200",
        status: "Failed",
        date: "2025-02-04",
      },
      {
        id: "TXN004",
        description: "Electricity Bill",
        amount: "₦26,200",
        status: "Completed",
        date: "2025-01-02",
      },
      {
        id: "TXN005",
        description: "Electricity Bill",
        amount: "₦25,400",
        status: "Completed",
        date: "2024-02-03",
      },
      {
        id: "TXN006",
        description: "Electricity Bill",
        amount: "₦74,200",
        status: "Completed",
        date: "2025-01-22",
      },
      {
        id: "TXN007",
        description: "Electricity Bill",
        amount: "₦22,400",
        status: "Completed",
        date: "2023-02-02",
      },
      {
        id: "TXN008",
        description: "Electricity Bill",
        amount: "₦132,200",
        status: "Completed",
        date: "2024-12-02",
      },
      {
        id: "TXN009",
        description: "Electricity Bill",
        amount: "₦122,200",
        status: "Completed",
        date: "2025-01-02",
      },
      {
        id: "TXN0010",
        description: "Electricity Bill",
        amount: "₦27,100",
        status: "Completed",
        date: "2025-02-04",
      },
      {
        id: "TXN0011",
        description: "Electricity Bill",
        amount: "₦72,250",
        status: "Completed",
        date: "2025-01-11",
      },
      {
        id: "TXN0012",
        description: "Electricity Bill",
        amount: "₦34,000",
        status: "Completed",
        date: "2024-01-02",
      },
    ];
    setTransactions(transactionsData);
    setLoading(false);
  }, []);

  const loadMoreTransactions = () => {
    setVisibleTransactions((prev) => prev + 10);
  };

  const filteredTransactions = transactions.filter((txn) =>
    Object.values(txn).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <section className="w-full pt-10">
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
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Transactions Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base lg:text-base mb-8">
          Manage and view all occured transactions along with their dates,
          status and more..
        </p>
        <Card className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <CardTitle>Account Balance</CardTitle>

            <div className="flex items-center space-x-4">
              <FiDollarSign size={32} className="text-green-500" />
              <span className="flex text-xl lg:text-2xl font-semibold py-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                {balance}
              </span>
            </div>
          </div>
          <FiCreditCard size={32} className="text-green-500" />
        </Card>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch
            className="absolute left-3 top-2.5 text-gray-500"
            size={20}
          />
        </div>
        <Card className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white">
                    <th className="p-3 text-left">Transaction ID</th>
                    <th className="p-3 text-left">Description</th>
                    <th className="p-3 text-left">Amount</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions
                    .slice(0, visibleTransactions)
                    .map((txn) => (
                      <tr
                        key={txn.id}
                        className="border-t border-gray-300 dark:border-gray-700"
                      >
                        <td className="p-3 text-sm">{txn.id}</td>
                        <td className="p-3 text-sm">{txn.description}</td>
                        <td className="p-3 text-sm">{txn.amount}</td>
                        <td
                          className={`p-3 font-semibold text-sm ${
                            txn.status === "Completed"
                              ? "text-green-500"
                              : txn.status === "Pending"
                              ? "text-yellow-500"
                              : "text-red-500"
                          }`}
                        >
                          {txn.status}
                        </td>
                        <td className="p-3 text-sm">{txn.date}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {visibleTransactions < filteredTransactions.length && (
              <button
                onClick={loadMoreTransactions}
                className="flex items-center text-center mx-auto mt-4 px-4 py-2 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white text-base font-semibold rounded-lg hover:from-yellow-600 hover:to-purple-700 transition-all"
              >
                Load More
              </button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Transactions;

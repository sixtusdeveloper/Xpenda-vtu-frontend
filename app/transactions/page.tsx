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

  useEffect(() => {
    const transactionsData = [
      {
        id: "TXN001",
        description: "Airtime Purchase",
        amount: "₦2,000",
        status: "Completed",
        date: "2025-02-18",
      },
      {
        id: "TXN002",
        description: "Data Subscription",
        amount: "₦3,500",
        status: "Pending",
        date: "2025-02-17",
      },
      {
        id: "TXN003",
        description: "Electricity Bill",
        amount: "₦7,200",
        status: "Failed",
        date: "2025-02-04",
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 space-y-6"
    >
      <h4>
        {isSignedIn && user ? (
          <>
            👋 Welcome, <span className="font-bold">{user.firstName}</span>!
          </>
        ) : (
          "👋 Hi there!"
        )}
      </h4>
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
        Transactions Dashboard
      </h2>
      <Card className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex justify-between items-center">
        <div>
          <CardTitle>Account Balance</CardTitle>
          <span className="text-2xl font-semibold">{balance}</span>
        </div>
        <FiCreditCard size={32} className="text-green-500" />
      </Card>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={20} />
      </div>
      <Card className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full border rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white">
                <th className="p-3">Transaction ID</th>
                <th className="p-3">Description</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.slice(0, visibleTransactions).map((txn) => (
                <tr key={txn.id} className="border-t">
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
          {visibleTransactions < filteredTransactions.length && (
            <button
              onClick={loadMoreTransactions}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white rounded-lg"
            >
              Load More
            </button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Transactions;

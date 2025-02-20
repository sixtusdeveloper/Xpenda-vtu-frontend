"use client";

import React, { useState } from "react";
import Card from "@/components/custom/Card";
import CardContent from "@/components/custom/CardContent";
import CardHeader from "@/components/custom/CardHeader";
import CardTitle from "@/components/custom/CardTitle";
import { FiDollarSign, FiCreditCard, FiShield, FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useUser } from "@clerk/nextjs";
import SecurePaymentForm from "@/components/custom/SecurePaymentForm";

const FundWallet = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { user, isSignedIn } = useUser();
  const [balance, setBalance] = useState("₦150,000.00");

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
            👋 Welcome, <span className="font-bold">{user.fullName}</span>
          </>
        ) : (
          "👋 Hi there!"
        )}
      </h4>
      <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">
        Fund Wallet
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-base lg:text-base mb-8">
        Securely add funds to your wallet using the safest and most advanced
        payment methods.
      </p>

      {/* User Info & Balance */}
      <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md flex justify-between items-center">
        <div>
          <CardTitle className="text-lg">Available Balance</CardTitle>
          <p className="text-2xl font-semibold bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            {balance}
          </p>
        </div>
        <FiShield size={40} className="text-blue-500" />
      </Card>

      {/* Secure Payment Section */}
      <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Secure Payment Options</CardTitle>
        </CardHeader>
        <CardContent>
          <SecurePaymentForm setBalance={setBalance} />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FundWallet;

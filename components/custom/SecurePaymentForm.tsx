"use client";

import React, { useState, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { FiCreditCard, FiShield, FiLock } from "react-icons/fi";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface SecurePaymentFormProps {
  setBalance: Dispatch<SetStateAction<string>>;
}
const SecurePaymentForm: React.FC<SecurePaymentFormProps> = ({
  setBalance,
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate secure transaction processing (replace with real API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Payment successful!");
    } catch (error) {
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg mx-auto border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
        Secure Fund Wallet
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Add funds securely using encrypted transactions.
      </p>
      <form onSubmit={handlePayment} className="space-y-4">
        <div className="relative">
          <FiCreditCard
            className="absolute left-3 top-3 text-gray-500"
            size={20}
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount (₦)"
            className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <FiShield className="mr-1 text-green-500" /> Encrypted Payment
          </div>
          <div className="flex items-center">
            <FiLock className="mr-1 text-blue-500" /> 2FA Protection
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white font-semibold py-3 rounded-lg"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Fund Wallet Securely"}
        </Button>
      </form>
    </motion.div>
  );
};

export default SecurePaymentForm;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { bettingProviders } from "@/data/betting";
import SuccessModal from "@/components/ui/SuccessModal";
import { useUser } from "@clerk/nextjs";
import { FaExclamationCircle } from "react-icons/fa";

const BettingDashboard = () => {
  const { user } = useUser();
  const [selectedProvider, setSelectedProvider] = useState("");
  const [customerID, setCustomerID] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Stores values before resetting the form
  const [fundedProvider, setFundedProvider] = useState("");
  const [fundedCustomerID, setFundedCustomerID] = useState("");
  const [fundedAmount, setFundedAmount] = useState("");

  const handlePurchase = () => {
    setError("");
    if (!selectedProvider) return setError("Please select a betting provider.");
    if (!customerID || customerID.length < 6)
      return setError("Invalid Customer ID/User ID.");
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0)
      return setError("Enter a valid amount.");

    setLoading(true);

    setTimeout(() => {
      // Store values before resetting the form
      setFundedProvider(selectedProvider);
      setFundedCustomerID(customerID);
      setFundedAmount(amount);

      setLoading(false);
      setShowSuccess(true);

      // Reset form fields
      setSelectedProvider("");
      setCustomerID("");
      setAmount("");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-none"
    >
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-left">
        Fund Betting Account
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm py-2 text-left mb-4">
        Select your betting provider, enter your customer ID and amount to fund
        your account instantly.
      </p>

      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
          Betting Provider
        </label>
        <div className="text-sm rounded-none">
          <Select
            value={selectedProvider}
            onValueChange={setSelectedProvider}
            className="rounded-none"
          >
            <SelectItem value="">Choose Provider</SelectItem>
            {bettingProviders.map((provider) => (
              <SelectItem key={provider} value={provider}>
                {provider}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
          Customer ID/User ID
        </label>
        <Input
          type="text"
          placeholder="Enter Customer ID"
          value={customerID}
          onChange={(e) => setCustomerID(e.target.value)}
          className="rounded-none"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
          Amount (₦)
        </label>
        <Input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="rounded-none"
        />
      </div>

      {error && (
        <p className="flex justify-center gap-2 mx-auto py-3 h-12 text-sm lg:text-base px-4 items-center bg-red-200 text-red-500 text-center">
          <FaExclamationCircle className="text-red-400" size={18} />
          {error}
        </p>
      )}

      <Button
        onClick={handlePurchase}
        disabled={loading}
        className="w-full h-12 py-3 mt-2 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white font-bold text-base rounded-none shadow-lg hover:opacity-90 transition duration-300"
      >
        {loading ? "Processing..." : "Fund Now"}
      </Button>

      {/* Success Modal with Correct Data */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message={`🎉 Congratulations ${user?.firstName || "User"} ${
          user?.lastName || ""
        }, 
          your ${fundedProvider} account has been funded with ₦${fundedAmount} 
          for Customer ID: ${fundedCustomerID}.`}
        link="/dashboard/orders"
        linkText="View Order Status"
      />
    </motion.div>
  );
};

export default BettingDashboard;

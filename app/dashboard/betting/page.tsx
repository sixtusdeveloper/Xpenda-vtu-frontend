"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { bettingProviders } from "@/data/betting";
import SuccessModal from "@/components/ui/SuccessModal";
import { useUser } from "@clerk/nextjs";

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
      className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-center">
        Fund Betting Account
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm py-2 text-center mb-6">
        Select your betting provider, enter your customer ID and amount to fund
        your account instantly.
      </p>

      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Betting Provider
        </label>
        <div className="text-sm">
          <Select value={selectedProvider} onValueChange={setSelectedProvider}>
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
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Customer ID/User ID
        </label>
        <Input
          type="text"
          placeholder="Enter Customer ID"
          value={customerID}
          onChange={(e) => setCustomerID(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Amount (₦)
        </label>
        <Input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <Button
        onClick={handlePurchase}
        disabled={loading}
        className="w-full h-12 py-3 mt-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white font-bold text-base rounded-lg shadow-lg hover:opacity-90 transition duration-300"
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

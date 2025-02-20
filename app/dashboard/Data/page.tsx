"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSmartphone } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { validatePhoneNumber } from "@/lib/utils/validators";
import { networks } from "@/data/networks";

const DataDashboard = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [error, setError] = useState("");

  interface Network {
    id: number;
    name: string;
    plans: string[];
  }

  const handleNetworkChange = (value: string): void => {
    console.log("Selected Network:", value);
    setSelectedNetwork(value);
    setSelectedPlan(""); // Reset selected plan when network changes
  };

  const handlePurchase = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      setError("Invalid phone number. Please enter a valid number.");
      return;
    }
    if (!selectedNetwork) {
      setError("Please select a network provider.");
      return;
    }
    if (!selectedPlan) {
      setError("Please select a data plan.");
      return;
    }
    setError("");
    alert(
      `Processing Data Purchase: ${selectedPlan} for ${phoneNumber} on ${selectedNetwork}`
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-center">
        Buy Data Plan
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm py-2 text-center mb-6">
        Select your network, choose a data plan, and enter your phone number to
        purchase instantly and it will be delivered to your phone number.
      </p>

      {/* Network Selection */}
      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Select Network
        </label>
        <div className="text-sm">
          <Select
            onChange={(e) => handleNetworkChange(e.target.value)}
            value={selectedNetwork}
            className="border-gray-300 dark:border-gray-600 focus:border-yellow-500 dark:focus:border-yellow-400 
                 focus:ring focus:ring-yellow-400 dark:focus:ring-yellow-500 
                 rounded-lg shadow-sm transition duration-300"
          >
            <SelectItem value="">Choose Network</SelectItem>
            {networks.map((network) => (
              <SelectItem key={network.id} value={network.name}>
                {network.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      {/* Data Plan Selection */}
      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Select Data Plan
        </label>
        <div className="text-sm">
          <Select
            onChange={(e) => setSelectedPlan(e.target.value)}
            value={selectedPlan}
            className="border-gray-300 dark:border-gray-600 focus:border-yellow-500 dark:focus:border-yellow-400 
                 focus:ring focus:ring-yellow-400 dark:focus:ring-yellow-500 
                 rounded-lg shadow-sm transition duration-300"
          >
            <SelectItem value="">Choose Plan</SelectItem>
            {selectedNetwork ? (
              networks
                .find((net) => net.name === selectedNetwork)
                ?.plans.map((plan) => (
                  <SelectItem key={plan} value={plan}>
                    {plan}
                  </SelectItem>
                ))
            ) : (
              <SelectItem value="" aria-disabled="true">
                Select a network first
              </SelectItem>
            )}
          </Select>
        </div>
      </div>

      {/* Phone Number Input */}
      <div className="mb-4 relative">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Phone Number
        </label>
        <Input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <FiSmartphone
          className="absolute right-3 top-10 text-gray-500"
          size={20}
        />
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Purchase Button */}
      <Button
        onClick={handlePurchase}
        className="w-full h-12 py-3 mt-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white font-bold text-base rounded-lg shadow-lg hover:opacity-90 transition duration-300"
      >
        Purchase Data Plan
      </Button>
      <p className="text-sm text-semibold text-center mt-4 text-gray-600 dark:text-gray-300">
        To get 1GB at ₦249, 2GB at ₦499, 5GB at ₦1249 and 10GB at ₦2499 etc,
        kindly{" "}
        <a href="/dashboard/reseller" className="text-blue-500 hover:underline">
          Upgrade to Reseller.
        </a>
      </p>
    </motion.div>
  );
};

export default DataDashboard;

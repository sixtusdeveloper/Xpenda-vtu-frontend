"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { electricityProviders } from "@/data/electricity";
import { meterTypes } from "@/data/electricity";

const ElectricityDashboard = () => {
  const [selectedProvider, setSelectedProvider] = useState("");
  const [meterType, setMeterType] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handlePurchase = () => {
    if (!selectedProvider) {
      setError("Please select an electricity provider.");
      return;
    }
    if (!meterType) {
      setError("Please select a meter type.");
      return;
    }
    if (!meterNumber || meterNumber.length < 6) {
      setError("Invalid meter number.");
      return;
    }
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError("Enter a valid amount.");
      return;
    }
    setError("");
    alert(
      `Processing Electricity Payment: ${amount} for ${selectedProvider} (${meterType}) - Meter No: ${meterNumber}`
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
        Pay Electricity Bills
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm py-2 text-center mb-6">
        Select your electricity provider, meter type, enter your meter number,
        and amount to pay instantly.
      </p>

      {/* Provider Selection */}
      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Electricity Company
        </label>
        <Select value={selectedProvider} onValueChange={setSelectedProvider}>
          <SelectItem value="">Choose Provider</SelectItem>
          {electricityProviders.map((provider) => (
            <SelectItem key={provider} value={provider}>
              {provider}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* Meter Type Selection */}
      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Meter Type
        </label>
        <Select
          // onChange={(e) => setMeterType(e.target.value)}
          onValueChange={setMeterType}
          value={meterType}
        >
          <SelectItem value="">Choose Meter Type</SelectItem>
          {meterTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* Meter Number Input */}
      <div className="mb-4 relative">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Meter Number
        </label>
        <Input
          type="text"
          placeholder="Enter Meter Number"
          value={meterNumber}
          onChange={(e) => setMeterNumber(e.target.value)}
        />
      </div>

      {/* Amount Input */}
      <div className="mb-4 relative">
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

      {/* Pay Button */}
      <Button
        onClick={handlePurchase}
        className="w-full h-12 py-3 mt-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white font-bold text-base rounded-lg shadow-lg hover:opacity-90 transition duration-300"
      >
        Pay Now
      </Button>

      <p className="text-sm text-semibold text-center mt-4 text-gray-600 dark:text-gray-300">
        Get up to 2% cashback on every electricity bill payment.{""}
        <a href="#" className="text-blue-500 hover:underline">
          Learn more
        </a>
      </p>
    </motion.div>
  );
};

export default ElectricityDashboard;

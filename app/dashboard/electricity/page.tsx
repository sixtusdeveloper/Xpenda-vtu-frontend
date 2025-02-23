"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { electricityProviders, meterTypes } from "@/data/electricity";
import SuccessModal from "@/components/ui/SuccessModal";
import { useUser } from "@clerk/nextjs";
import { FaExclamationCircle } from "react-icons/fa";

const ElectricityDashboard = () => {
  const { user } = useUser();
  const [selectedProvider, setSelectedProvider] = useState("");
  const [meterType, setMeterType] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handlePurchase = () => {
    setError("");
    if (!selectedProvider)
      return setError("Please select an electricity provider.");
    if (!meterType) return setError("Please select a meter type.");
    if (!meterNumber || meterNumber.length < 6 || !/^[0-9]+$/.test(meterNumber))
      return setError("Invalid meter number.");
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0)
      return setError("Enter a valid amount.");

    setLoading(true);
    setTimeout(() => {
      setSuccessMessage(
        `🎉 Congratulations ${user?.firstName || "User"} ${
          user?.lastName || ""
        }, your electricity bill payment for\nProvider: ${selectedProvider}\nMeter Type: ${meterType}\nMeter No: ${meterNumber}\nAmount: ₦${amount} was successful!`
      );
      setIsSuccessModalOpen(true);

      // Reset form values after successful submission
      setSelectedProvider("");
      setMeterType("");
      setMeterNumber("");
      setAmount("");
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-none"
      >
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-left">
          Pay Electricity Bills
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm py-2 text-left mb-4">
          Select your electricity provider, meter type, enter your meter number,
          and amount to pay instantly.
        </p>

        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
            Electricity Company
          </label>
          <div className="text-sm none">
            <Select
              value={selectedProvider}
              onValueChange={setSelectedProvider}
              className="rounded-none"
            >
              <SelectItem value="">Choose Provider</SelectItem>
              {electricityProviders.map((provider) => (
                <SelectItem key={provider} value={provider}>
                  {provider}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm mb-2">
            Meter Type
          </label>
          <div className="text-sm none">
            <Select
              value={meterType}
              onValueChange={setMeterType}
              className="rounded-none"
            >
              <SelectItem value="">Choose Meter Type</SelectItem>
              {meterTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm mb-2">
            Meter Number
          </label>
          <Input
            type="text"
            placeholder="Enter Meter Number"
            value={meterNumber}
            onChange={(e) => setMeterNumber(e.target.value)}
            className="rounded-none"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-200 font-semibold text-sm mb-2">
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
          {loading ? "Processing..." : "Pay Now"}
        </Button>

        <p className="text-sm text-semibold text-left mt-2 text-gray-600 dark:text-gray-300">
          Get up to 2% cashback on every electricity bill payment.{" "}
          <a
            href="/dashboard/reseller"
            className="text-blue-500 hover:underline"
          >
            Learn more
          </a>
        </p>
      </motion.div>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        message={successMessage}
        link="/dashboard/orders"
        linkText="View Order Status"
      />
    </>
  );
};

export default ElectricityDashboard;

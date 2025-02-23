"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSmartphone } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { validatePhoneNumber } from "@/lib/utils/validators";
import { networks } from "@/data/networks";
import SuccessModal from "@/components/ui/SuccessModal";
import { useUser } from "@clerk/nextjs";
import { FaExclamationCircle } from "react-icons/fa";

const DataDashboard = () => {
  const { user } = useUser();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleNetworkChange = (value: string): void => {
    setSelectedNetwork(value);
    setSelectedPlan(""); // Reset selected plan when network changes
  };

  const handlePurchase = async () => {
    setError(""); // Reset error before validation

    // Trim input values to avoid issues with spaces
    const phone = phoneNumber.trim();
    const network = selectedNetwork.trim();
    const plan = selectedPlan.trim();

    // Validation checks
    if (!validatePhoneNumber(phone)) {
      setError("Invalid phone number. Please enter a valid number.");
      return;
    }
    if (!network) {
      setError("Please select a network provider.");
      return;
    }
    if (!plan) {
      setError("Please select a data plan.");
      return;
    }

    setLoading(true); // Show loading state

    try {
      // Simulate an API call
      setTimeout(() => {
        setSuccessMessage(
          `🎉 Congratulations ${user?.firstName || "User"} ${
            user?.lastName || ""
          }, your data purchase for\nNetwork: ${network}\nPlan: ${plan}\nPhone: ${phone} was successful!`
        );
        setIsSuccessModalOpen(true);

        // Reset form after successful transaction
        setPhoneNumber("");
        setSelectedNetwork("");
        setSelectedPlan("");
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError("Data purchase failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-none"
    >
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-left">
        Buy Data Plan
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm py-2 text-left mb-4">
        Select your network, choose a data plan, and enter your phone number to
        purchase instantly.
      </p>

      {/* Network Selection */}
      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
          Select Network
        </label>
        <div className="text-sm rounded-none">
          <Select onValueChange={setSelectedNetwork} value={selectedNetwork}>
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
        <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
          Select Data Plan
        </label>
        <div className="text-sm">
          <Select
            onValueChange={setSelectedPlan}
            value={selectedPlan}
            className="rounded-none"
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
        <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
          Phone Number
        </label>
        <Input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="rounded-none"
        />
        <FiSmartphone
          className="absolute right-3 top-10 text-gray-500"
          size={20}
        />
      </div>

      {error && (
        <p className="flex justify-center gap-2 mx-auto py-3 h-12 text-sm lg:text-base px-4 items-center bg-red-200 text-red-500 text-center">
          <FaExclamationCircle className="text-red-400" size={18} />
          {error}
        </p>
      )}

      {/* Purchase Button */}
      <Button
        onClick={handlePurchase}
        disabled={loading}
        className={`w-full h-12 py-3 mt-2 font-bold text-base rounded-none shadow-lg transition duration-300 ${
          loading
            ? "opacity-50 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white cursor-not-allowed"
            : "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white hover:opacity-90"
        }`}
      >
        {loading ? "Processing..." : "Purchase Data Plan"}
      </Button>
      <p className="text-sm text-semibold text-left mt-2 text-gray-600 dark:text-gray-300">
        To get 1GB at ₦249, 2GB at ₦499, 5GB at ₦1249 and 10GB at ₦2499 etc,
        kindly&nbsp;
        <a href="/dashboard/reseller" className="text-blue-500 hover:underline">
          Upgrade to Reseller.
        </a>
      </p>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        message={successMessage}
        link="/dashboard/orders"
        linkText="View Order Status"
      />
    </motion.div>
  );
};

export default DataDashboard;

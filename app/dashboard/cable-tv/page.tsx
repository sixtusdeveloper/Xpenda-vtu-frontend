"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { validateSmartCardNumber } from "@/lib/utils/validators";
import { providers, packages } from "@/data/cable-tv";

const CableTVDashboard = () => {
  const [selectedProvider, setSelectedProvider] = useState("");
  const [smartCardNumber, setSmartCardNumber] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setError(""); // Reset error state

    // Trim values to prevent whitespace issues
    const provider = selectedProvider.trim();
    const smartCard = smartCardNumber.trim();
    const packageName = selectedPackage.trim();

    // Validation checks
    if (!provider) {
      setError("Please select a Cable TV provider.");
      return;
    }
    if (!validateSmartCardNumber(smartCard)) {
      setError("Invalid SmartCard/IUC Number.");
      return;
    }
    if (!packageName) {
      setError("Please select a package/bouquet.");
      return;
    }

    setLoading(true); // Indicate processing

    try {
      // Placeholder for future API request
      // const response = await api.subscribeCableTV({ provider, smartCard, packageName });

      setTimeout(() => {
        alert(
          `✅ Subscription successful!\nProvider: ${provider}\nPackage: ${packageName}\nSmartCard: ${smartCard}`
        );

        // Reset form inputs after successful submission
        setSelectedProvider("");
        setSmartCardNumber("");
        setSelectedPackage("");
        setError(""); // Clear errors
        setLoading(false);
      }, 2000); // Simulating API call
    } catch (error) {
      setError("❌ Subscription failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-center">
        Subscribe to Cable TV
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm py-2 text-center mb-6">
        Select your provider, enter your SmartCard/IUC number, and choose a
        package to subscribe instantly.
      </p>

      {/* Provider Selection */}
      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Choose Cable TV
        </label>
        <div className="text-sm">
          <Select
            onValueChange={setSelectedProvider}
            value={selectedProvider}
            className="border-gray-300 dark:border-gray-600 focus:border-yellow-500 dark:focus:border-yellow-400 
           focus:ring focus:ring-yellow-400 dark:focus:ring-yellow-500 
           rounded-lg shadow-sm transition duration-300"
          >
            <SelectItem value="">Choose Provider</SelectItem>
            {providers.map((provider) => (
              <SelectItem key={provider} value={provider}>
                {provider}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      {/* Package/Bouquet Selection */}
      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Choose Package/Bouquet
        </label>
        <div className="text-sm">
          <Select
            onValueChange={setSelectedPackage}
            value={selectedPackage}
            className="border-gray-300 dark:border-gray-600 focus:border-yellow-500 dark:focus:border-yellow-400 
           focus:ring focus:ring-yellow-400 dark:focus:ring-yellow-500 
           rounded-lg shadow-sm transition duration-300"
          >
            <SelectItem value="">Choose Package</SelectItem>
            {packages.map((pkg) => (
              <SelectItem key={pkg} value={pkg}>
                {pkg}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      {/* SmartCard/IUC Number Input */}
      <div className="mb-4 relative">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          SmartCard/IUC Number
        </label>
        <Input
          type="text"
          placeholder="Enter SmartCard/IUC Number"
          value={smartCardNumber}
          onChange={(e) => setSmartCardNumber(e.target.value)}
        />
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Subscribe Button */}
      <Button
        onClick={handlePurchase}
        disabled={loading}
        className={`w-full h-12 py-3 mt-4 font-bold text-base rounded-lg shadow-lg transition duration-300 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white hover:opacity-90"
        }`}
      >
        {loading ? "Processing..." : "Subscribe Now"}
      </Button>
      <p className="text-sm text-semibold text-center mt-4 text-gray-600 dark:text-gray-300">
        To enjoy 0.5% discounts and ₦0.00 service fees on cable TV, kindly{" "}
        <a href="/dashboard/reseller" className="text-blue-500 hover:underline">
          Upgrade to Reseller.
        </a>{" "}
        API Users get even higher discounts.
      </p>
    </motion.div>
  );
};

export default CableTVDashboard;

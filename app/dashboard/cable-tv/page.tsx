"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { validateSmartCardNumber } from "@/lib/utils/validators";
import { providers, packages } from "@/data/cable-tv";
import SuccessModal from "@/components/ui/SuccessModal";
import { useUser } from "@clerk/nextjs";
import { FaExclamationCircle } from "react-icons/fa";

const CableTVDashboard = () => {
  const { user } = useUser();
  const [selectedProvider, setSelectedProvider] = useState("");
  const [smartCardNumber, setSmartCardNumber] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
      setTimeout(() => {
        setSuccessMessage(
          `🎉 Congratulations ${user?.firstName || "User"} ${
            user?.lastName || ""
          }, your subscription for\nProvider: ${provider}\nPackage: ${packageName}\nSmartCard: ${smartCard} was successful!`
        );
        setIsSuccessModalOpen(true);

        // Reset form inputs after successful submission
        setSelectedProvider("");
        setSmartCardNumber("");
        setSelectedPackage("");
        setError(""); // Clear errors
        setLoading(false);
      }, 2000); // Simulating API call
    } catch (error) {
      setError("Subscription failed. Please try again.");
      setLoading(false);
    }
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
          Subscribe to Cable TV
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm py-2 text-left mb-4">
          Select your provider, enter your SmartCard/IUC number, and choose a
          package to subscribe instantly.
        </p>

        {/* Provider Selection */}
        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
            Choose Cable TV
          </label>
          <div className="text-sm rounded-none">
            <Select
              onValueChange={setSelectedProvider}
              value={selectedProvider}
              className="rounded-none text-sm"
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
          <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
            Choose Package/Bouquet
          </label>
          <div className="text-sm rounded-none">
            <Select
              onValueChange={setSelectedPackage}
              value={selectedPackage}
              className="rounded-none"
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
          <label className="text-gray-700 dark:text-gray-300 font-semibold text-sm mb-2">
            SmartCard/IUC Number
          </label>
          <Input
            type="text"
            placeholder="Enter SmartCard/IUC Number"
            value={smartCardNumber}
            onChange={(e) => setSmartCardNumber(e.target.value)}
            className="rounded-none"
          />
        </div>

        {error && (
          <p className="flex justify-center gap-2 mx-auto py-3 h-12 text-sm lg:text-base px-4 items-center bg-red-200 text-red-500 text-center">
            <FaExclamationCircle className="text-red-400" size={18} />
            {error}
          </p>
        )}

        {/* Subscribe Button */}
        <Button
          onClick={handlePurchase}
          disabled={loading}
          className={`w-full h-12 py-3 mt-2 font-bold text-base rounded-none shadow-lg transition duration-300 ${
            loading
              ? "opacity-50 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white cursor-not-allowed"
              : "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white font-bold text-base shadow-lg hover:opacity-90 transition duration-300"
          }`}
        >
          {loading ? "Processing..." : "Subscribe Now"}
        </Button>
        <p className="text-sm text-semibold text-left mt-2 text-gray-600 dark:text-gray-300">
          To enjoy 0.5% discounts and ₦0.00 service fees on cable TV, kindly{" "}
          <a
            href="/dashboard/reseller"
            className="text-blue-500 hover:underline"
          >
            Upgrade to Reseller.
          </a>{" "}
          API Users get even higher discounts.
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

export default CableTVDashboard;

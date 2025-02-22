"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import SuccessModal from "@/components/ui/SuccessModal";
import { useUser } from "@clerk/nextjs";

const networks = ["MTN", "AIRTEL", "GLO", "9MOBILE"];
const denominations = ["₦100", "₦200", "₦500", "₦1000"];

const EpinDashboard = () => {
  const { user } = useUser();
  const [network, setNetwork] = useState("");
  const [denomination, setDenomination] = useState("");
  const [quantity, setQuantity] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handlePurchase = async () => {
    setError("");
    const trimmedBusinessName = businessName.trim();

    if (!network) return setError("❌ Please select a network provider.");
    if (!denomination) return setError("❌ Please select a denomination.");
    if (!quantity || isNaN(Number(quantity)) || Number(quantity) <= 0) {
      return setError("❌ Enter a valid quantity.");
    }
    if (!trimmedBusinessName)
      return setError("❌ Enter a valid business name.");

    setLoading(true);

    try {
      setTimeout(() => {
        setSuccessMessage(
          `🎉 Congratulations ${user?.firstName || "User"} ${
            user?.lastName || ""
          },  your E-PIN purchase for\n\nNetwork: ${network}\nDenomination: ${denomination}\nQuantity: ${quantity}\nBusiness: ${trimmedBusinessName} was successful!`
        );
        setIsSuccessModalOpen(true);

        setNetwork("");
        setDenomination("");
        setQuantity("");
        setBusinessName("");
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError("❌ E-PIN purchase failed. Please try again.");
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
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-left">
        Buy E-PINs
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm py-2 text-left mb-6">
        Select your network, denomination, quantity, and enter your business
        name to proceed.
      </p>

      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Network Provider
        </label>
        <Select value={network} onValueChange={setNetwork}>
          <SelectItem value="">Choose Network</SelectItem>
          {networks.map((net) => (
            <SelectItem key={net} value={net}>
              {net}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Denomination
        </label>
        <Select value={denomination} onValueChange={setDenomination}>
          <SelectItem value="">Choose Denomination</SelectItem>
          {denominations.map((denom) => (
            <SelectItem key={denom} value={denom}>
              {denom}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Quantity
        </label>
        <Input
          type="number"
          placeholder="Enter Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-700 dark:text-gray-300 font-semibold">
          Business Name
        </label>
        <Input
          type="text"
          placeholder="Enter Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <Button
        onClick={handlePurchase}
        disabled={loading}
        className="w-full h-12 py-3 mt-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white font-bold text-base rounded-lg shadow-lg hover:opacity-90 transition duration-300"
      >
        {loading ? "Processing..." : "Buy Now"}
      </Button>

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

export default EpinDashboard;

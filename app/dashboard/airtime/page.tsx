"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSmartphone } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { networks } from "@/data/networks";
import { Select, SelectItem } from "@/components/ui/select";
import { validatePhoneNumber } from "@/lib/utils/validators";
import SuccessModal from "@/components/ui/SuccessModal";
import { useUser } from "@clerk/nextjs";

const AirtimeDashboard = () => {
  const { user } = useUser();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handlePurchase = async () => {
    setError("");

    const phone = phoneNumber.trim();
    const network = selectedNetwork.trim();
    const airtimeAmount = amount.trim();

    if (!validatePhoneNumber(phone)) {
      setError("❌ Invalid phone number. Please enter a valid number.");
      return;
    }
    if (!network) {
      setError("❌ Please select a network provider.");
      return;
    }
    if (
      !airtimeAmount ||
      isNaN(Number(airtimeAmount)) ||
      Number(airtimeAmount) <= 0
    ) {
      setError("❌ Please enter a valid amount.");
      return;
    }

    setLoading(true);

    try {
      setTimeout(() => {
        setSuccessMessage(
          `🎉 Congratulations ${user?.firstName || "User"} ${
            user?.lastName || ""
          },  your airtime purchase for\nNetwork: ${network}\nAmount: ₦${airtimeAmount}\nPhone: ${phone} was successful!`
        );
        setIsSuccessModalOpen(true);

        setPhoneNumber("");
        setSelectedNetwork("");
        setAmount("");
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError("❌ Airtime purchase failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg"
      >
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-left">
          Buy Airtime
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm py-2 text-left mb-6">
          Select your network, enter your phone number, and purchase airtime
          instantly.
        </p>

        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold">
            Select Network
          </label>
          <div className="text-sm">
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

        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold">
            Amount (₦)
          </label>
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-left text-sm">{error}</p>}

        <Button
          onClick={handlePurchase}
          disabled={loading}
          className={`w-full h-12 py-3 mt-4 font-bold text-base rounded-lg shadow-lg transition duration-300 ${
            loading
              ? "opacity-50 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white cursor-not-allowed"
              : "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white font-bold text-base rounded-lg shadow-lg hover:opacity-90 transition duration-300"
          }`}
        >
          {loading ? "Processing..." : "Purchase Airtime"}
        </Button>
        <p className="text-sm text-semibold text-left mt-4 text-gray-600 dark:text-gray-300">
          To enjoy 2.5% discounts on airtime, kindly{" "}
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

export default AirtimeDashboard;

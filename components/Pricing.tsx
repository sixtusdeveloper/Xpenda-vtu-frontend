import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    network: "MTN",
    prices: ["₦100 - 500MB", "₦200 - 1GB", "₦500 - 3GB", "₦1000 - 5GB"],
    color: "bg-yellow-500",
  },
  {
    network: "Glo",
    prices: ["₦100 - 600MB", "₦200 - 1.2GB", "₦500 - 3.5GB", "₦1000 - 5.5GB"],
    color: "bg-green-500",
  },
  {
    network: "Airtel",
    prices: ["₦100 - 400MB", "₦200 - 1GB", "₦500 - 2.5GB", "₦1000 - 4.5GB"],
    color: "bg-red-500",
  },
  {
    network: "9mobile",
    prices: ["₦100 - 500MB", "₦200 - 1GB", "₦500 - 2GB", "₦1000 - 4GB"],
    color: "bg-blue-500",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-10 -mt-20 pb-16 pt-32 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Affordable VTU Pricing Plans
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Get the best data & airtime rates across all networks. Choose your
          preferred plan and start recharging instantly.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3
                className={`text-xl font-bold ${plan.color} text-center py-2 rounded-md`}
              >
                {plan.network}
              </h3>
              <ul className="mt-4 space-y-2 text-center">
                {plan.prices.map((price, idx) => (
                  <li key={idx} className="text-gray-300 text-lg">
                    {price}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-10">
          <Link href="/pricing">
            <Button className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white text-lg px-6 py-3 rounded-lg">
              See All Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

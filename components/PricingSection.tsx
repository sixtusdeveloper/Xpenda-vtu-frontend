"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { pricingData } from "@/data/pricing-lists";
import { useRouter } from "next/navigation";

const PricingSection = () => {
  const router = useRouter(); // ✅ Initialize router

  // ✅ Function to handle fast navigation
  const navigateToPricing = () => {
    router.push("/pricing"); // ✅ Instantly navigates without delay
  };
  return (
    <section id="pricing" className="relative py-10 md:py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-start md:text-center text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Affordable VTU Pricing Plans
        </h2>
        <p className="text-start md:text-center mb-12 max-w-2xl mx-auto">
          Get the best data & airtime rates across all networks. Choose your
          preferred plan and start recharging instantly.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-800 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center text-white"
            >
              {/* Network Image */}
              <div className="mb-4 w-20 h-20 relative">
                <Image
                  src={plan.image}
                  alt={`${plan.network} Logo`}
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
              </div>

              {/* Network Name */}
              <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                {plan.network}
              </h3>

              {/* Pricing List */}
              <ul className="space-y-2 text-sm text-center w-full">
                {plan.prices.map((price, idx) => (
                  <li
                    key={idx}
                    className="py-2 px-3 bg-gray-800 rounded-md shadow-md border border-gray-700"
                  >
                    {price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-10">
          <Button
            type="button"
            onClick={navigateToPricing}
            className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-base h-12 px-6 py-3 rounded-lg shadow-lg"
          >
            See All Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

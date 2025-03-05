"use client";

import React from "react";
import Image from "next/image";
import { pricingData } from "@/data/pricing-lists";
import { useRouter } from "next/navigation";

const PricingSection = () => {
  const router = useRouter();
  const navigateToPricing = () => {
    router.push("/pricing");
  };
  return (
    <section id="pricing" className="relative py-10 md:py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left md:text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Affordable VTU Pricing Plans
          </h2>
          <p className="mb-12 max-w-2xl mx-auto">
            Get the best data & airtime rates across all networks. Choose your
            preferred plan and start recharging instantly.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="bg-secondary dark:bg-gray-900 p-6 rounded-sm shadow-sm border hover:scale-105 transition-transform duration-300 flex flex-col items-center"
            >
              {/* Network Image */}
              <div className="relative">
                <Image
                  src={plan.image}
                  alt={`${plan.network} Logo`}
                  width={50}
                  height={50}
                  className="rounded-lg object-contain pricing-image"
                />
              </div>

              {/* Network Name */}
              <h3 className="text-base my-2 font-bold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                {plan.network}
              </h3>

              {/* Pricing List */}
              <ul className="space-y-2 text-xs text-center w-full">
                {plan.prices.map((price, idx) => (
                  <li
                    key={idx}
                    className="py-2 px-3 bg-secondary dark:bg-gray-800 rounded-sm shadow-sm border border-blue-200 dark:border-transparent"
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
          <button
            type="button"
            onClick={navigateToPricing}
            className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-base h-12 px-6 py-3 rounded-none shadow-lg hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            See All Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

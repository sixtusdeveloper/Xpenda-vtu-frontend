"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { pricingData } from "@/data/pricing";

const PricingPlans = () => {
  return (
    <section
      id="pricing"
      className="w-full px-4 lg:px-8 pt-10 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-left lg:text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text py-4">
          Complete Pricing List
        </h2>
        <p className="text-gray-300 text-left lg:text-center  text-lg mb-8">
          Explore our competitive and transparent pricing across all categories.
        </p>
        {pricingData.map((section, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-2xl font-semibold text-left bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 bg-clip-text text-transparent py-2">
              {section.category}
            </h3>
            <div className="overflow-x-auto bg-gray-800 shadow-lg rounded-lg">
              <table className="w-full border border-gray-700">
                <thead>
                  <tr className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white">
                    <th className="py-3 px-4 text-left">Products & Services</th>
                    <th className="py-3 px-4 text-left">Customers</th>
                    <th className="py-3 px-4 text-left">Resellers</th>
                    <th className="py-3 px-4 text-left">API Users</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-700 hover:bg-gray-700 transition-all"
                    >
                      <td className="py-3 px-4 text-sm lg:text-base">
                        {item.service}
                      </td>
                      <td className="py-3 px-4 text-sm lg:text-base">
                        {item.customers}
                      </td>
                      <td className="py-3 px-4 text-sm lg:text-base">
                        {item.resellers}
                      </td>
                      <td className="py-3 px-4 text-sm lg:text-base">
                        {item.apiUsers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;

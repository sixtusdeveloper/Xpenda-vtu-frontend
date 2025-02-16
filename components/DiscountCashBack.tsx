"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { discountData } from "@/data/discounts";

const DiscountCashback = () => {
  return (
    <section
      id="discounts"
      className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-left lg:text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Exclusive Cashback & Discounts
        </h2>
        <p className="text-lg text-left lg:text-center mt-4 opacity-90">
          Enjoy amazing discounts on every transaction! The more you spend, the
          more you save.
        </p>

        {/* Discount Table */}
        <div className="mt-8 overflow-x-auto bg-gray-800 shadow-lg rounded-lg">
          <table className="w-full border border-gray-700 text-white">
            <thead>
              <tr className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white">
                <th className="py-3 px-4 text-left">Amount Spent (₦)</th>
                <th className="py-3 px-4 text-left">Discount (%)</th>
                <th className="py-3 px-4 text-left">Cashback Earned (₦)</th>
              </tr>
            </thead>
            <tbody>
              {discountData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-700 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                  } hover:bg-gray-700 transition-all`}
                >
                  <td className="py-3 px-4 text-sm lg:text-base">
                    {row.amount}
                  </td>
                  <td className="py-3 px-4 text-sm lg:text-base">
                    {row.discount}
                  </td>
                  <td className="py-3 px-4 text-sm lg:text-base">
                    {row.cashback}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Link href="/signup">
            <Button className="px-6 py-3 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:scale-105 text-white font-semibold rounded-lg shadow-lg">
              Start Saving Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscountCashback;

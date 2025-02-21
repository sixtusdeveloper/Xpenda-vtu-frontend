"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ServicesHero = () => {
  const router = useRouter();
  const navigateToPricing = () => {
    router.push("/pricing");
  };
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white pt-20 text-center h-[55vh] lg:min-h-[70vh]">
      <div className="lg:text-center text-left max-w-6xl mx-auto px-6 mt-8 lg:mt-10">
        <h1 className="text-4xl font-extrabold py-6 bg-gradient-to-r from-blue-50 via-blue-50 to-blue-100 text-transparent bg-clip-text">
          Join the Xpenda Referral Program
        </h1>
        <p className="text-base max-w-3xl mx-auto">
          Earn rewards by inviting your friends to Xpenda. The more you refer,
          the more you earn!
        </p>
        <button
          type="button"
          onClick={navigateToPricing}
          className="mt-6 bg-white text-purple-600 text-base px-6 py-3 rounded-none shadow-lg font-semibold"
        >
          See Our Prices
        </button>
      </div>
    </div>
  );
};

export default ServicesHero;

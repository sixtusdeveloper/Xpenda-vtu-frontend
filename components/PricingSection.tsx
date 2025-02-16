import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    network: "MTN",
    image: "/images/mtn.png", // ✅ Replace with your actual local path
    prices: ["₦100 - 500MB", "₦200 - 1GB", "₦500 - 3GB", "₦1000 - 5GB"],
  },
  {
    network: "Glo",
    image: "/images/glo.png", // ✅ Replace with your actual local path
    prices: ["₦100 - 600MB", "₦200 - 1.2GB", "₦500 - 3.5GB", "₦1000 - 5.5GB"],
  },
  {
    network: "Airtel",
    image: "/images/airtel.png", // ✅ Replace with your actual local path
    prices: ["₦100 - 400MB", "₦200 - 1GB", "₦500 - 2.5GB", "₦1000 - 4.5GB"],
  },
  {
    network: "9mobile",
    image: "/images/9mobile.png", // ✅ Replace with your actual local path
    prices: ["₦100 - 500MB", "₦200 - 1GB", "₦500 - 2GB", "₦1000 - 4GB"],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-10 md::py-20 bg-secondary">
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
              className="bg-secondary p-4 rounded-lg border shadow-md hover:scale-105 transition-transform duration-300 animate-fadeIn flex flex-col justify-center items-center"
            >
              {/* Network Image */}
              <div className="mb-4 w-16 h-16 relative">
                <Image
                  src={plan.image}
                  alt={`${plan.network} Logo`}
                  layout="fill"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg network-img"
                />
              </div>

              {/* Pricing List */}
              <ul className="space-y-2 text-start">
                {plan.prices.map((price, idx) => (
                  <li key={idx} className="text-xs font-semibold border-b p-1">
                    {price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-10">
          <Link href="/pricing">
            <Button className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-base h-12 px-6 py-3 rounded-lg">
              See All Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

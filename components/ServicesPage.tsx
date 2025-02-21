import React from "react";
import {
  ZapIcon,
  PhoneIcon,
  TvIcon,
  DollarSignIcon,
  CheckCircleIcon,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Buy & Resell Airtime & Data",
    description:
      "Get the best rates for airtime and data top-ups across all networks.",
    icon: (
      <PhoneIcon className="w-12 h-12 p-2 shadow-lg overflow-hidden rounded-full bg-yellow-400 text-white" />
    ),
    bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
  {
    title: "Electricity Bills Payment",
    description:
      "Pay your electricity bills instantly with seamless transactions.",
    icon: (
      <ZapIcon className="w-12 h-12 p-2 shadow-lg overflow-hidden rounded-full bg-blue-400 text-white" />
    ),
    bg: "bg-gradient-to-r from-blue-400 to-blue-700",
  },
  {
    title: "Cable TV Subscription",
    description:
      "Subscribe or renew your DStv, GOtv, and Startimes plans easily.",
    icon: (
      <TvIcon className="w-12 h-12 p-2 shadow-lg overflow-hidden rounded-full bg-red-400 text-white" />
    ),
    bg: "bg-gradient-to-r from-red-400 to-pink-500",
  },
  {
    title: "Convert Airtime to Cash",
    description:
      "Turn excess airtime into cash and withdraw directly to your bank.",
    icon: (
      <DollarSignIcon className="w-12 h-12 p-2 shadow-lg overflow-hidden rounded-full bg-green-400 text-white" />
    ),
    bg: "bg-gradient-to-r from-green-400 to-teal-500",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-secondary w-full py-4 lg:py-10">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 text-left lg:text-center py-12 lg:py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Our Professional Services
        </h1>
        <p className="text-base lg:text-base max-w-3xl mx-auto leading-snug">
          Xpenda offers secure and reliable digital solutions for airtime, data,
          bill payments, and more. Experience seamless transactions with
          unbeatable rates.
        </p>
      </div>

      {/* Services Grid */}
      <div
        id="services"
        className="max-w-6xl mx-auto px-6 text-left md:text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-center text-white transition-transform transform hover:scale-105 ${service.bg}`}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm opacity-90">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Xpenda Section */}
      <div
        id="see-why"
        className="max-w-6xl mx-auto mt-8 lg:mt-20 px-6 text-center"
      >
        <h2 className="text-left lg:text-center text-3xl font-bold py-6 mb-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Why Choose Xpenda?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Fast & Secure Transactions",
            "Affordable Pricing",
            "24/7 Customer Support",
            "Seamless User Experience",
          ].map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
              <p className="font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

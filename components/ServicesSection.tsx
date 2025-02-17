import React from "react";
import { ZapIcon, PhoneIcon, TvIcon, DollarSignIcon } from "lucide-react";
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

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary relative">
      <div className="max-w-6xl mx-auto px-6 text-left md:text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Our Services
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          We offer fast and secure digital solutions for airtime, data, bill
          payments, and more.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* CTA Button */}
        <div className="mt-12">
          <Link href="/services">
            <button className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-base h-12 px-6 py-3 rounded-lg">
              Explore More Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

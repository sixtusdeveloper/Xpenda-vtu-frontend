"use client";

import React from "react";
import { FaBookOpen, FaCode } from "react-icons/fa";
import { useRouter } from "next/navigation";

const APIDocsSection = () => {
  const router = useRouter();
  const navigateToAPIDocs = () => {
    router.push("/api-docs");
  };
  return (
    <section
      id="dev-api"
      className="relative py-16 px-6 md:px-12 lg:px-20 bg-gray-900 text-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="lg:text-center text-left text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Xpenda API for Developers
        </h2>
        <p className="lg:text-center text-left mt-4 text-lg md:text-xl opacity-90">
          Integrate seamless VTU transactions into your application using our
          powerful API.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <FaCode className="text-yellow-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold text-white">
              Easy Integration
            </h3>
            <p className="text-gray-300 mt-2">
              Get started in minutes with clear documentation and simple API
              requests.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <FaBookOpen className="text-pink-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold text-white">
              Comprehensive Docs
            </h3>
            <p className="text-gray-300 mt-2">
              Detailed API documentation to help you build with confidence.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <FaCode className="text-purple-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold text-white">
              Secure Transactions
            </h3>
            <p className="text-gray-300 mt-2">
              Industry-standard security to protect every API request.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <button
            type="button"
            onClick={navigateToAPIDocs}
            className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:scale-105 text-white font-semibold text-base h-12 px-6 py-3 rounded-lg shadow-lg"
          >
            Read API Docs
          </button>
        </div>
      </div>
    </section>
  );
};

export default APIDocsSection;

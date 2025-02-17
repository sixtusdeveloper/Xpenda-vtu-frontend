"use client";

import React from "react";
import { FaCopy, FaKey, FaCode, FaBookOpen, FaLock } from "react-icons/fa";
import { useState } from "react";
import APIUsage from "./APIUsage";
import APIPlugin from "./APIPlugin";
import { useRouter } from "next/navigation";

const APIDocsPage = () => {
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const navigateToDashboard = () => router.push("/dashboard");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full min-h-screen bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto py-10">
        <div className="text-left py-8">
          <h1 className="text-left mt-8 text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Xpenda Enterprise API Documentation
          </h1>
          <p className="mt-4 text-base lg:text-lg text-left opacity-90">
            The Xpenda API provides seamless VTU integration for developers,
            resellers, and enterprises. Automate airtime, data, and utility bill
            transactions in real-time.
          </p>
        </div>
        {/* Overview of the API documentation page: */}
        <APIUsage />
        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-8 text-left">
          <div className="text-left lg:text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
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
            <FaLock className="text-purple-500 text-3xl mb-3" />
            <h3 className="text-xl font-semibold text-white">
              Secure Transactions
            </h3>
            <p className="text-gray-300 mt-2">
              Industry-standard security to protect every API request.
            </p>
          </div>
        </div>

        {/* Authentication & API Key */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-semibold text-white">
            Authentication & API Key
          </h3>
          <p className="mt-4 text-gray-300">
            To authenticate requests, include your unique API key in the headers
            of each request. You can generate and manage your API keys from your
            Xpenda developer dashboard.
          </p>
          <pre className="bg-gray-800 p-4 text-green-500 rounded-lg mt-4 text-sm overflow-x-auto">
            {`curl -X GET "https://api.xpenda.com/v1/balance" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json"`}
          </pre>
        </div>

        {/* Usage & Integration Guide */}
        <div id="api-usage" className="mt-16 text-left">
          <h3 className="text-2xl font-semibold text-white">
            Usage & Integration Guide
          </h3>
          <p className="mt-4 text-gray-300">
            Implement Xpenda API seamlessly in your application by following
            these steps.
          </p>
          <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-300">
            <li>Sign up for an API key on your developer dashboard.</li>
            <li>Include your API key in all requests for authentication.</li>
            <li>
              Use our RESTful endpoints to initiate VTU transactions, check
              balances, and more.
            </li>
            <li>Handle webhook events for real-time transaction updates.</li>
          </ol>
        </div>

        {/* Webhooks & Event Handling */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-semibold text-white">
            Webhooks & Event Handling
          </h3>
          <p className="mt-4 text-gray-300">
            Stay updated with real-time transaction notifications using
            webhooks. Set up a webhook URL in your Xpenda developer dashboard to
            receive transaction events.
          </p>
          <pre className="bg-gray-800 p-4 text-green-500 rounded-lg mt-4 text-sm overflow-x-auto">
            {`{
  "event": "transaction.success",
  "data": {
    "transaction_id": "12345",
    "status": "completed",
    "amount": "500",
    "currency": "NGN"
  }
}`}
          </pre>
        </div>

        <APIPlugin />

        {/* Authentication Section */}
        <div
          id="auth-key"
          className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-yellow-400 flex items-center">
            <FaKey className="mr-3" /> Authentication
          </h2>
          <p className="mt-3 text-gray-300">
            All requests require an API key. Obtain your API key from the
            dashboard.
          </p>
          <div className="mt-4 p-4 bg-gray-700 rounded-lg flex justify-between items-center">
            <code className="text-yellow-400 text-sm">
              Authorization: Bearer YOUR_API_KEY
            </code>
            <button
              onClick={() => handleCopy("Authorization: Bearer YOUR_API_KEY")}
              className="text-white bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded-lg"
            >
              <FaCopy />
            </button>
          </div>
        </div>

        {/* Example API Request */}
        <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-pink-400 flex items-center">
            <FaCode className="mr-3" /> Example API Request
          </h2>
          <p className="mt-3 text-gray-300">
            Below is an example request to buy airtime using the Xpenda API.
          </p>
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <code className="text-green-500 block text-sm whitespace-pre-wrap">
              {`curl -X POST "https://api.xpenda.com/v1/airtime" \
-H "Authorization: Bearer YOUR_API_KEY" \
-H "Content-Type: application/json" \
-d '{ "network": "MTN", "amount": 500, "phone": "08123456789" }'`}
            </code>
            <button
              onClick={() =>
                handleCopy(
                  `curl -X POST "https://api.xpenda.com/v1/airtime" \
-H "Authorization: Bearer YOUR_API_KEY" \
-H "Content-Type: application/json" \
-d '{ "network": "MTN", "amount": 500, "phone": "08123456789" }'`
                )
              }
              className="text-white bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded-lg mt-3"
            >
              <span className="text-sm gap-2 flex items-center">
                {copied ? "Copied!" : "Copy"} <FaCopy />
              </span>
            </button>
          </div>
        </div>

        {/* Response Example */}
        <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-purple-400 flex items-center">
            <FaBookOpen className="mr-3" /> API Response Example
          </h2>
          <p className="mt-3 text-gray-300">
            A successful API request returns a response like this:
          </p>
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <code className="text-green-500 block text-sm whitespace-pre-wrap">
              {`{
  "status": "success",
  "transaction_id": "123456789",
  "message": "Airtime purchase successful."
}`}
            </code>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={navigateToDashboard}
            className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:scale-105 text-white font-semibold text-base h-12 px-6 py-3 rounded-lg shadow-lg"
          >
            Get Your API Key
          </button>
        </div>
      </div>
    </section>
  );
};

export default APIDocsPage;

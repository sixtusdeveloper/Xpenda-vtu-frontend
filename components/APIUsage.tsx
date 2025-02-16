"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const APIUsage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("YOUR_API_KEY_HERE");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      {/* API Overview */}
      <div className="mt-16 text-left">
        <h3 className="text-2xl font-extrabold text-yellow-400">
          API Integration Overview
        </h3>
        <p className="mt-2 text-gray-300">
          Xpenda's API is a RESTful service designed for speed and reliability.
          It supports JSON responses, token-based authentication, and
          industry-standard security measures.
        </p>
      </div>

      {/* Authentication */}
      <div className="mt-16 text-left">
        <h3 className="text-2xl font-extrabold text-pink-500">
          Authentication
        </h3>
        <p className="mt-2 text-gray-300">
          Secure API access is granted via Bearer Token authentication. You must
          include your API key in all requests.
        </p>
        <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-sm overflow-x-auto">
          {`GET /api/v1/balance HTTP/1.1
  Host: api.xpenda.com
  Authorization: Bearer YOUR_API_KEY`}
        </pre>
      </div>

      {/* API Endpoints */}
      <div className="mt-16 text-left">
        <h3 className="text-2xl font-extrabold text-blue-400">
          Available API Endpoints
        </h3>
        <p className="mt-2 text-gray-300">
          Integrate the following endpoints in your application:
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            🔹 <b>Get Wallet Balance:</b> <code>/api/v1/balance</code>
          </li>
          <li>
            🔹 <b>Purchase Airtime:</b> <code>/api/v1/airtime</code>
          </li>
          <li>
            🔹 <b>Buy Data:</b> <code>/api/v1/data</code>
          </li>
          <li>
            🔹 <b>Pay Bills:</b> <code>/api/v1/bills</code>
          </li>
          <li>
            🔹 <b>Verify Customer:</b> <code>/api/v1/verify</code>
          </li>
        </ul>
      </div>

      {/* API Usage Guide */}
      <div className="mt-16 text-left">
        <h3 className="text-2xl font-extrabold text-green-400">
          API Usage & Implementation
        </h3>
        <p className="mt-2 text-gray-300">
          Integrate Xpenda API into your platform with these steps:
        </p>
        <ul className="mt-4 space-y-2">
          <li>✅ Obtain an API key from the developer dashboard.</li>
          <li>✅ Include your API key in requests as a Bearer token.</li>
          <li>
            ✅ Utilize GET requests to fetch balance, verify customers, and
            purchase airtime/data.
          </li>
          <li>✅ Handle JSON responses and log transactions accordingly.</li>
        </ul>
      </div>

      {/* Developer API Key */}
      <div className="mt-16 text-left">
        <h3 className="text-2xl font-extrabold text-yellow-500">
          Developer API Key
        </h3>
        <p className="mt-2 text-gray-300">
          Click the button below to copy your API key.
        </p>
        <div className="mt-4 flex items-center">
          <span className="p-2 bg-gray-800 rounded-lg text-sm select-all">
            YOUR_API_KEY_HERE
          </span>
          <Button
            onClick={handleCopy}
            className="ml-2 bg-yellow-500 hover:bg-yellow-600"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default APIUsage;

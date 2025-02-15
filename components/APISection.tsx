import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Code, Cloud, Lock, Server } from "lucide-react";

const APISection = () => {
  return (
    <section id="api-docs" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Powerful & Secure API Integration
          </h2>
          <p className="text-lg mt-4">
            Integrate Xpenda’s API to enable{" "}
            <strong>automated airtime, data, and bill payments</strong> on your
            platform. Enjoy{" "}
            <strong>fast, reliable, and secure transactions</strong> with
            seamless API connectivity.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <Code className="w-6 h-6 text-blue-400" />
              Developer-Friendly REST API
            </li>
            <li className="flex items-center gap-3">
              <Cloud className="w-6 h-6 text-yellow-400" />
              Scalable & Fast Transactions
            </li>
            <li className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-green-400" />
              Bank-Grade Security & Encryption
            </li>
            <li className="flex items-center gap-3">
              <Server className="w-6 h-6 text-purple-400" />
              99.9% Uptime & Real-time Processing
            </li>
          </ul>
          <div className="mt-6">
            <Button className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-base h-12 px-6 py-3 rounded-lg">
              View API Documentation
            </Button>
          </div>
        </div>

        {/* Right Side - API Image */}
        <div className="flex justify-center">
          <Image
            src="/images/api.png"
            alt="Xpenda API Integration"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default APISection;

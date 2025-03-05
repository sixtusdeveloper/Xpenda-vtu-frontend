"use client";

import React from "react";
import Image from "next/image";
import FAQ from "./FAQ";

import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <>
      <section className="w-full min-h-screen bg-secondary py-20 px-4 lg:px-24">
        {/* Hero Section */}
        <div
          id="about-us"
          className="max-w-6xl mx-auto text-center pb-12 md:pb-16"
        >
          <h1 className="text-left md:text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-2 md:mb-6">
            About <span className="text-yellow-600">Xpenda</span>
          </h1>
          <p className="text-sm md:text-base mt-4 text-left md:text-center">
            Empowering businesses and individuals with seamless, secure, and
            affordable VTU services.
          </p>
        </div>

        {/* What We Offer */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/about-info.webp"
            alt="About Xpenda"
            width={500}
            height={400}
            className="rounded-md shadow-sm border wallet-image"
          />
          <div className="shadow-sm rounded-sm lg:p-6 text-left">
            <h2 className="text-left text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-600 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-6">
              What We Offer
            </h2>
            <p className="leading-relaxed">
              At Xpenda, we provide{" "}
              <strong>fast, affordable, and automated</strong> VTU services,
              including:
            </p>
            <ul className="list-none pl-6 mt-4 space-y-2">
              <li className="py-1 flex gap-2 items-center">
                <CheckCircle size={20} className="text-green-500" />
                Instant Airtime and Data Purchase
              </li>
              <li className="py-1 flex gap-2 items-center">
                <CheckCircle size={20} className="text-green-500" />
                Electricity Bill Payment
              </li>
              <li className="flex gap-2 items-center">
                {" "}
                <CheckCircle size={20} className="text-green-500" />
                Cable TV Subscription
              </li>
              <li className="py-1 flex gap-2 items-center">
                {" "}
                <CheckCircle size={20} className="text-green-500" />
                Secure Airtime-to-Cash Conversion
              </li>
              <li className="py-1 flex gap-2 items-center">
                {" "}
                <CheckCircle size={20} className="text-green-500" />
                Automated Reselling for Business Owners
              </li>
            </ul>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div id="vision-mission" className="w-full mx-auto mt-20 ">
          <h2 className="text-left py-4 lg:text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-6">
            Our Mission and Vision
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Vision */}
            <div className="p-8 bg-secondary dark:bg-gray-900 rounded-md shadow-sm border text-left">
              <h2 className="text-green-500 text-2xl font-bold mb-4">
                🌟 Our Vision
              </h2>
              <p className="leading-7 text-sm md:text-base">
                To become the <strong>leading digital VTU platform</strong> in
                Africa, providing seamless transactions and business
                opportunities for individuals and entrepreneurs that are{" "}
                <strong>secure, reliable, and affordable</strong>.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 bg-secondary dark:bg-gray-900 rounded-md shadow-sm border text-left">
              <h2 className="text-pink-500 text-2xl font-bold mb-4">
                🚀 Our Mission
              </h2>
              <p className="leading-7 text-sm md:text-base">
                At Xpenda, we are committed to{" "}
                <strong>empowering businesses and individuals</strong> by
                offering <strong>xfast, secure, and affordable</strong> VTU
                solutions. We strive to bridge the gap in digital transactions
                through innovation, transparency, and reliability.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Xpenda */}
        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-left py-4 lg:text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-6">
            Why Choose Xpenda?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary dark:bg-gray-900 p-6 rounded-md shadow-sm border">
              <h3 className="text-green-500 text-xl font-semibold">
                🌍 Accessibility
              </h3>
              <p className="mt-2">
                Available 24/7 with seamless transactions nationwide.
              </p>
            </div>
            <div className="bg-secondary dark:bg-gray-900 p-6 rounded-md shadow-sm border">
              <h3 className="text-blue-500 text-xl font-semibold">
                🔒 Security
              </h3>
              <p className="mt-2">
                Your transactions are protected with industry-leading
                encryption.
              </p>
            </div>
            <div className="bg-secondary dark:bg-gray-900 p-6 rounded-md shadow-sm border">
              <h3 className="text-yellow-600 text-xl font-semibold">
                ⚡ Speed
              </h3>
              <p className="mt-2">
                Instant top-ups and payments with no delays.
              </p>
            </div>
            <div className="bg-secondary dark:bg-gray-900 p-6 rounded-md shadow-sm border">
              <h3 className="text-pink-500 text-xl font-semibold">
                💰 Affordability
              </h3>
              <p className="mt-2">
                Enjoy the best VTU prices with great discounts.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto mt-20 text-center">
          <h2 className="text-left py-2 lg:text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-600 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-2 md:mb-6">
            How Xpenda Works
          </h2>
          <p className="max-w-3xl mx-auto text-left md:text-center">
            Getting started is easy. Just follow these simple steps:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-secondary dark:bg-gray-900 p-6 rounded-md shadow-sm border text-left">
              <h3 className="text-green-500 text-xl font-semibold">
                1️⃣ Sign Up
              </h3>
              <p className="mt-2">Create an account in seconds.</p>
            </div>
            <div className="bg-secondary dark:bg-gray-900 p-6 rounded-md shadow-sm border text-left">
              <h3 className="text-blue-500 text-xl font-semibold">
                2️⃣ Fund Wallet
              </h3>
              <p className="mt-2">Add money to your wallet securely.</p>
            </div>
            <div className="bg-secondary dark:bg-gray-900 p-6 rounded-md shadow-sm border text-left">
              <h3 className="text-pink-500 text-xl font-semibold">
                3️⃣ Start Transacting
              </h3>
              <p className="mt-2">
                Buy data, airtime, and pay bills instantly.
              </p>
            </div>
          </div>
        </div>

        {/* <FAQ Section */}
        <FAQ />
      </section>
    </>
  );
};

export default About;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQ from "./FAQ";
import { useUser, useClerk } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const About = () => {
  const { redirectToSignUp, openSignIn } = useClerk();
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loadingState, setLoadingState] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    document.body.style.overflow = "auto";
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    document.body.style.overflow = "auto";
  };

  const handleUserCheck = (callback: () => void) => {
    setLoadingState("Please wait...");
    setTimeout(() => {
      setLoadingState("Checking user existence...");
      setTimeout(() => {
        setLoadingState(null);
        callback();
      }, 2000);
    }, 2000);
  };

  const handleLoginClick = () => {
    setLoadingState("Please wait...");
    setTimeout(() => {
      setLoadingState("Checking user existence...");
      setTimeout(() => {
        setLoadingState(null);
        if (isSignedIn) {
          setShowSuccessModal(true);
        } else {
          router.push("/sign-in");
        }
      }, 2000);
    }, 2000);
  };

  const handleLoggedInClick = () => {
    handleUserCheck(() => {
      if (isSignedIn) {
        router.push("/dashboard");
      } else {
        setShowErrorModal(true);
      }
    });
  };

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
          <p className="text-lg mt-4 text-left md:text-center">
            Empowering businesses and individuals with seamless, secure, and
            affordable VTU services.
          </p>
        </div>

        {/* What We Offer */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/about-offer.png"
            alt="About Xpenda"
            width={500}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h2 className="text-left text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-6">
              What We Offer
            </h2>
            <p className="leading-relaxed">
              At Xpenda, we provide{" "}
              <strong>fast, affordable, and automated</strong> VTU services,
              including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Instant Airtime and Data Purchase</li>
              <li>Electricity Bill Payment</li>
              <li>Cable TV Subscription</li>
              <li>Secure Airtime-to-Cash Conversion</li>
              <li>Automated Reselling for Business Owners</li>
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
            <div className="p-8 bg-gray-900 rounded-lg shadow-lg text-left">
              <h2 className="text-yellow-400 text-2xl font-bold mb-4">
                🌟 Our Vision
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To become the <strong>leading digital VTU platform</strong> in
                Africa, providing seamless transactions and business
                opportunities for individuals and entrepreneurs.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 bg-gray-900 rounded-lg shadow-lg text-left">
              <h2 className="text-yellow-400 text-2xl font-bold mb-4">
                🚀 Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
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
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-yellow-400 text-xl font-semibold">
                🌍 Accessibility
              </h3>
              <p className="text-gray-300 mt-2">
                Available 24/7 with seamless transactions nationwide.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-yellow-400 text-xl font-semibold">
                🔒 Security
              </h3>
              <p className="text-gray-300 mt-2">
                Your transactions are protected with industry-leading
                encryption.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-yellow-400 text-xl font-semibold">
                ⚡ Speed
              </h3>
              <p className="text-gray-300 mt-2">
                Instant top-ups and payments with no delays.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-yellow-400 text-xl font-semibold">
                💰 Affordability
              </h3>
              <p className="text-gray-300 mt-2">
                Enjoy the best VTU prices with great discounts.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto mt-20 text-center">
          <h2 className="text-left py-2 lg:text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-2 md:mb-6">
            How Xpenda Works
          </h2>
          <p className="max-w-3xl mx-auto text-left md:text-center">
            Getting started is easy. Just follow these simple steps:
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-yellow-400 text-xl font-semibold">
                1️⃣ Sign Up
              </h3>
              <p className="text-gray-300 mt-2">
                Create an account in seconds.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-yellow-400 text-xl font-semibold">
                2️⃣ Fund Wallet
              </h3>
              <p className="text-gray-300 mt-2">
                Add money to your wallet securely.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-yellow-400 text-xl font-semibold">
                3️⃣ Start Transacting
              </h3>
              <p className="text-gray-300 mt-2">
                Buy data, airtime, and pay bills instantly.
              </p>
            </div>
          </div>
        </div>

        {/* <FAQ Section */}
        <FAQ />

        {/* Call to Action */}
        <div className="text-center mt-4 md:mt-6 lg:mt-8">
          <h2 className="text-left py-2 lg:text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-2 md:mb-6">
            Join Xpenda Today
          </h2>
          <p className="md:mt-2 text-left lg:text-center">
            Sign up and start enjoying the best VTU services in Nigeria!
          </p>

          <button
            type="button"
            onClick={openModal}
            className="mt-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:scale-105 text-white text-lg h-12 px-6 py-3 rounded-lg"
          >
            Get Started
          </button>
        </div>
      </section>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-secondary p-6 rounded-lg shadow-lg w-[95%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-2 right-2">
              <FaTimes className="hover:text-red-500" size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4">
              Sign in to Access the Dashboard
            </h3>
            <p className="mb-4">
              You need to be signed in to access the dashboard and it features
              e-books.
            </p>
            {loadingState ? (
              <div className="flex flex-col items-center">
                <CircularProgress />
                <p className="mt-2 text-sm font-semibold">{loadingState}</p>
              </div>
            ) : (
              <div className="flex justify-between">
                <button
                  onClick={handleLoggedInClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-[48%]"
                >
                  I've Logged in
                </button>

                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md w-[48%]"
                  onClick={handleLoginClick}
                >
                  Let me log in
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showErrorModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeErrorModal}
        >
          <div
            className="bg-secondary p-6 rounded-lg shadow-lg w-[95%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeErrorModal}
              className="absolute top-2 right-2"
            >
              <FaTimes className="hover:text-red-500" size={20} />
            </button>
            <div className="flex flex-col items-center">
              <FaExclamationCircle className="text-red-500 text-4xl mb-3" />
              <h3 className="text-xl font-semibold mb-4">
                No, You Haven't Logged In!
              </h3>
              <p className="mb-4 text-center">
                Please sign in to access the the dashboard and it features.
              </p>
              <button
                onClick={() => router.push("/sign-in")}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full"
              >
                Log in Now
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeSuccessModal}
        >
          <div className="bg-secondary p-6 rounded-lg shadow-lg w-[95%] max-w-md relative">
            <button
              onClick={closeSuccessModal}
              className="absolute top-2 right-2"
            >
              <FaTimes className="hover:text-green-500" size={20} />
            </button>
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-green-500 text-4xl mb-3" />
              <h3 className="text-xl font-semibold mb-4">
                You're Already Logged In!
              </h3>
              <p className="mb-4 text-center">
                Hey {user?.firstName} {user?.lastName}, you are already signed
                in.
              </p>
              <button
                onClick={() => router.push("/dashboard")}
                className="font-sans bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white text-sm tracking-wide block px-4 py-2 rounded-md w-full"
              >
                Go to dashboard page
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;

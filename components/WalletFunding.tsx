"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaTimes, FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

const WalletFunding = () => {
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
        router.push("/dashboard/fund-wallet");
      } else {
        setShowErrorModal(true);
      }
    });
  };

  return (
    <>
      <section
        id="wallet"
        className="w-full py-10 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white text-center"
      >
        <div className="max-w-5xl mx-auto px-6 lg:flex lg:items-center lg:justify-between">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-left text-4xl md:text-5xl font-extrabold leading-tight">
              Instant & Secure Wallet Funding
            </h2>
            <p className="text-left mt-4 text-lg md:text-xl opacity-90">
              Fund your wallet instantly using secure payment methods and start
              transacting in seconds.
            </p>
            <div className="mt-6 text-left">
              <button
                type="button"
                onClick={openModal}
                className="px-6 h-12 py-3 bg-white text-purple-600 font-semibold rounded-none shadow-lg hover:scale-105 transition-all"
              >
                Fund Your Wallet Now
              </button>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <Image
              src="/images/wallet-funding.webp"
              alt="Wallet Funding Illustration"
              width={500}
              height={300}
              className="rounded-sm shadow-md wallet-image"
            />
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-secondary dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[95%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-2 right-2">
              <FaTimes className="hover:text-red-500" size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4">
              Sign in to Access your Wallet
            </h3>
            <p className="mb-4">
              You need to be signed in to fund your wallet and start transacting
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
            className="bg-secondary dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[95%] max-w-md relative"
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
                Please sign in to access your wallet and start transacting.
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
          <div className="bg-secondary dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[95%] max-w-md relative">
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
                onClick={() => router.push("/dashboard/fund-wallet")}
                className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white text-sm tracking-wide block px-4 py-2 rounded-md w-full"
              >
                Proceed to Wallet Funding
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WalletFunding;

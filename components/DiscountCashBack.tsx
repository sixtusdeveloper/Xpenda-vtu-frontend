"use client";

import Link from "next/link";
import React from "react";
import { discountData } from "@/data/discounts";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const DiscountCashback = () => {
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
        router.push("/dashboard/transactions");
      } else {
        setShowErrorModal(true);
      }
    });
  };

  return (
    <>
      <section
        id="discounts"
        className="w-full py-16 px-6 md:px-12 lg:px-20 bg-secondary"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-left lg:text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Exclusive Cashback & Discounts
          </h2>
          <p className="text-lg text-left lg:text-center mt-4 opacity-90">
            Enjoy amazing discounts on every transaction! The more you spend,
            the more you save.
          </p>

          {/* Discount Table */}
          <div className="mt-8 overflow-x-auto bg-secondary dark:bg-gray-800 shadow-lg rounded-lg">
            <table className="w-full border">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white">
                  <th className="py-3 px-4 text-left">Amount Spent (₦)</th>
                  <th className="py-3 px-4 text-left">Discount (%)</th>
                  <th className="py-3 px-4 text-left">Cashback Earned (₦)</th>
                </tr>
              </thead>
              <tbody>
                {discountData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-secondary" : "bg-secondary"
                    } hover:dark:bg-gray-700 hover:bg-gray-50 transition-all`}
                  >
                    <td className="py-3 px-4 text-sm lg:text-base">
                      {row.amount}
                    </td>
                    <td className="py-3 px-4 text-sm lg:text-base">
                      {row.discount}
                    </td>
                    <td className="py-3 px-4 text-sm lg:text-base">
                      {row.cashback}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={openModal}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:scale-105 text-white font-semibold rounded-none shadow-lg"
            >
              Start Saving Now
            </button>
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
              Sign in to Access the Dashboard
            </h3>
            <p className="mb-4">
              You need to be signed in to access the dashboard and it features .
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
                onClick={() => router.push("/dashboard/transactions")}
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

export default DiscountCashback;

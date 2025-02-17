"use client";

import React from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const { redirectToSignUp, openSignIn } = useClerk();
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loadingState, setLoadingState] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigateToAbout = () => {
    router.push("/about");
  };

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
      <section
        id="hero"
        className="relative pt-8 lg:px-0 px-4 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-[80vh] lg:min-h-[500px] bg-gradient-to-r from-purple-700 via-indigo-500 to-purple-900"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 px-4 mt-10 lg:px-16">
          {/* Left: Hero Text */}
          <motion.div
            className="text-white max-w-3xl p-0 lg:py-4 mt-16 text-start lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting */}
            <motion.h3
              className="text-sm py-2 tracking-wide sm:text-base"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {isSignedIn && user ? (
                <>
                  👋 Welcome,{" "}
                  <span className="font-bold">
                    {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
                  </span>
                </>
              ) : (
                "👋 Welcome to Xpenda!"
              )}
            </motion.h3>

            {/* Heading */}
            <motion.h1
              className="text-[2.2rem] leading-tight lg:text-[3rem] font-extrabold font-sans"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <strong>
                Buy & Resell{" "}
                <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
                  Airtime & Data
                </span>
                , Pay{" "}
                <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Bills & Subscriptions
                </span>{" "}
                Seamlessly with{" "}
                <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Xpenda VTU
                </span>
              </strong>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="lg:pt-4 pt-2 leading-6 text-base"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Xpenda makes it easy to{" "}
              <strong>
                buy & resell airtime, data, pay electricity bills, and subscribe
                to cable TV
              </strong>{" "}
              at the best rates. Plus, convert excess{" "}
              <strong>airtime into cash</strong> instantly. Enjoy{" "}
              <strong>fast, secure, and automated transactions</strong> today!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-6 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              <button
                type="button"
                onClick={openModal}
                className="h-12 px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-sm md:text-base lg:text-base"
              >
                Get Started
              </button>

              <button
                type="button"
                onClick={navigateToAbout}
                className="h-12 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white hover:bg-purple-700 font-semibold text-sm md:text-base lg:text-base"
              >
                About Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Xpenda-Themed Image */}
          <motion.div
            className="hidden lg:flex mt-10 w-full lg:w-1/2 justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Image
              src="/xpenda-hero.png"
              alt="Xpenda VTU Platform"
              width={600}
              height={300}
              className="xpenda-img rounded-lg shadow-lg"
            />
          </motion.div>
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

export default Home;

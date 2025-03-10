"use client";

import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useUser, useClerk } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const AboutCallToAction = () => {
  const router = useRouter();
  const { redirectToSignUp, openSignIn } = useClerk();
  const { user, isSignedIn } = useUser();
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
      <section className="relative w-full h-[350px] flex items-center md:justify-center justify-start text-center text-white overflow-hidden">
        {/* Fixed Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/new-program.webp')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 lg:pl-20 lg:pr-8 md:text-center text-left">
          <h1 className="text-4xl font-extrabold md:text-5xl leading-snug">
            Join Xpenda Today
          </h1>
          <p className="mt-4 text-base opacity-95">
            Sign up and start enjoying the best VTU services in Nigeria!
          </p>
          <button
            type="button"
            onClick={openModal}
            className="mt-6 py-3 px-6 text-base font-semibold rounded-none inline-block bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white shadow-lg hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            Learn More
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
              You need to be signed in to access the dashboard and it features.
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
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-md w-[48%]"
                >
                  I've Logged in
                </button>

                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-3 rounded-md w-[48%]"
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
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md w-full"
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
                className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white text-sm tracking-wide block px-4 py-3 rounded-md w-full"
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

export default AboutCallToAction;

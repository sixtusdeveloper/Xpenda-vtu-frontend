"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";

const ServicesHero = () => {
  const { user, isSignedIn } = useUser();

  // Get current hour
  const currentHour = new Date().getHours();

  let greeting = "Good evening";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  }

  const router = useRouter();
  const navigateToPricing = () => {
    router.push("/pricing");
  };
  return (
    <section className=" text-white pt-0 lg:pt-0 text-center min-h-[50vh] lg:min-h-[75vh]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 z-10">
        <div className="mx-w-4xl p-4 lg:p-10 text-left lg:mx-auto lg:flex lg:flex-col items-center lg:text-center relative z-20">
          <motion.h3
            className="text-sm py-2 tracking-wide font-semibold sm:text-base"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {isSignedIn && user ? (
              <>
                👋 {greeting},{" "}
                <span className="font-sans font-bold">
                  {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
                </span>
              </>
            ) : (
              "👋 Hi there!"
            )}
          </motion.h3>
          <h1 className="text-4xl font-extrabold mt-2 mb-6 bg-gradient-to-r from-blue-50 via-blue-50 to-blue-100 text-transparent bg-clip-text">
            Join the Xpenda Affiliate and Referral Program
          </h1>
          <motion.p
            className="text-base max-w-3xl mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Earn some side income by marketing, advertizing and inviting new
            users to Xpenda. The more you advertise, market our services or
            refer new users, the more you make side income from our platform!
          </motion.p>
          <button
            type="button"
            onClick={navigateToPricing}
            className="mt-6 bg-white text-purple-600 text-base px-6 py-3 rounded-none shadow-lg font-semibold hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            See Our Prices
          </button>
        </div>
        <Image
          src="/images/contact-bg.webp"
          alt="Courses Hero"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-20 absolute inset-0"
        />
      </div>
    </section>
  );
};

export default ServicesHero;

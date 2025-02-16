"use client";

import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Link from "next/link";

import React from "react";

const PricingHero = () => {
  const { user, isSignedIn } = useUser();

  // Get current hour
  const currentHour = new Date().getHours();

  let greeting = "Good evening";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  }

  return (
    <section className="relative w-full pt-10 lg:px-0 px-2 md:px-4 md:pt-20 flex items-center flex-wrap justify-start md:justify-center min-h-[60vh] lg:min-h-[500px] bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white text-center">
      <motion.div
        className="text-left lg:text-center max-w-4xl mx-auto px-2 lg:px-6 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.h3
          className="text-sm py-2 tracking-wide sm:text-base"
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
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Unlock the Best Deals with Our Competitive Pricing
        </h1>
        <p className="text-left lg:text-center py-2 mt-2 text-base md:text-lg opacity-90">
          Get unbeatable rates on Airtel, Glo, MTN, and 9mobile with Xpenda—your
          trusted VTU partner.
        </p>
        <Link href="#pricing">
          <button className="mt-4 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:scale-105 transition-all">
            Explore Plans
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default PricingHero;

"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ReferralProgram = () => {
  const router = useRouter();

  const navigateToReferral = () => {
    router.push("/dashboard/referral");
  };

  return (
    <div id="referral" className="bg-secondary py-8">
      <div className="max-w-6xl mx-auto px-6 text-center py-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Xpenda Referral Program
        </h2>
        <p className="text-left lg:text-center text-base lg:text-base max-w-3xl mx-auto mb-6">
          Earn rewards by inviting your friends to Xpenda. The more you refer,
          the more you earn!
        </p>
      </div>

      {/* Referral Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center">
        <div className="p-6 shadow-sm bg-secondary dark:bg-gray-900 rounded-md border">
          <Image
            src="/images/signup.png"
            alt="Sign Up"
            width={50}
            height={50}
            className="mx-auto p-2"
          />
          <h3 className="text-lg lg:text-xl font-semibold mt-4">
            Step 1: Sign Up
          </h3>
          <p className="mt-2 text-sm lg:text-sm p-2">
            Create an account on Xpenda to get your unique referral link.
          </p>
        </div>
        <div className="p-6 shadow-sm bg-secondary dark:bg-gray-900 rounded-md border">
          <Image
            src="/images/share.png"
            alt="Share Link"
            width={50}
            height={50}
            className="mx-auto p-2"
          />
          <h3 className="text-lg lg:text-xl font-semibold mt-4">
            Step 2: Share Your Link
          </h3>
          <p className="mt-2 text-sm lg:text-sm p-2">
            Invite friends by sharing your referral link via social media or
            direct messages.
          </p>
        </div>
        <div className="p-6 shadow-sm bg-secondary dark:bg-gray-900 rounded-md border">
          <Image
            src="/images/earn.png"
            alt="Earn Rewards"
            width={70}
            height={70}
            className="mx-auto p-2"
          />
          <h3 className="text-lg lg:text-xl font-semibold mt-4">
            Step 3: Earn Rewards
          </h3>
          <p className="mt-2 text-sm lg:text-sm p-2">
            Get bonuses and commissions when your referrals make transactions.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div
        id="earnings"
        className="max-w-6xl mx-auto text-left lg:text-center py-12 px-6"
      >
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Start Earning Today!
        </h3>
        <p className="text-base mt-2">
          Join our referral program and enjoy exclusive rewards.
        </p>

        <button
          type="button"
          onClick={navigateToReferral}
          className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-white text-base font-semibold px-6 py-3 rounded-none shadow-lg hover:ease-in-out hover:scale-105 transition-all duration-300"
        >
          Get Your Referral Link
        </button>
      </div>
    </div>
  );
};

export default ReferralProgram;

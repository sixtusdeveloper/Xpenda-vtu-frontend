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
        <h2 className="text-left lg:text-center text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Xpenda Referral Program
        </h2>
        <p className="text-left lg:text-center text-base lg:text-lg max-w-3xl mx-auto mb-6">
          Earn rewards by inviting your friends to Xpenda. The more you refer,
          the more you earn!
        </p>
      </div>

      {/* Referral Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center">
        <div className="p-6 shadow-lg rounded-lg border">
          <Image
            src="/images/signup.png"
            alt="Sign Up"
            width={70}
            height={70}
            className="mx-auto p-2"
          />
          <h3 className="text-lg lg:text-xl font-semibold mt-4">
            Step 1: Sign Up
          </h3>
          <p className="mt-2 text-sm lg:text-base">
            Create an account on Xpenda to get your unique referral link.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg border">
          <Image
            src="/images/share.png"
            alt="Share Link"
            width={70}
            height={70}
            className="mx-auto p-2"
          />
          <h3 className="text-lg lg:text-xl font-semibold mt-4">
            Step 2: Share Your Link
          </h3>
          <p className="mt-2 text-sm lg:text-base">
            Invite friends by sharing your referral link via social media or
            direct messages.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg border">
          <Image
            src="/images/earn.png"
            alt="Earn Rewards"
            width={80}
            height={80}
            className="mx-auto p-2"
          />
          <h3 className="text-lg lg:text-xl font-semibold mt-4">
            Step 3: Earn Rewards
          </h3>
          <p className="mt-2 text-sm lg:text-base">
            Get bonuses and commissions when your referrals make transactions.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div
        id="earnings"
        className="max-w-6xl mx-auto text-left lg:text-center py-12 px-6"
      >
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Start Earning Today!
        </h3>
        <p className="text-base mt-2">
          Join our referral program and enjoy exclusive rewards.
        </p>

        <button
          type="button"
          onClick={navigateToReferral}
          className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-white text-base font-semibold px-6 py-3 rounded-none shadow-lg"
        >
          Get Your Referral Link
        </button>
      </div>
    </div>
  );
};

export default ReferralProgram;

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const WalletSection = () => {
  return (
    <section id="wallet" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Secure, Reliable & Fast Digital Wallet
          </h2>
          <p className="text-lg mt-4">
            Fund your wallet and make seamless transactions with ease. Buy data,
            airtime, and pay bills directly from your Xpenda wallet with instant
            processing.
          </p>
          <ul className="mt-6 space-y-2">
            <li>✔️ Instant funding & withdrawals</li>
            <li>✔️ Secure transactions</li>
            <li>✔️ Track your spending easily</li>
          </ul>
          <div className="mt-6">
            <Button className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-base h-12 px-6 py-3 rounded-lg">
              Go to Wallet
            </Button>
          </div>
        </div>

        {/* Right Side - Wallet Image */}
        <div className="flex justify-center">
          <Image
            src="/images/wallet.png"
            alt="Xpenda Wallet"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WalletSection;

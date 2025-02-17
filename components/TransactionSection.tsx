"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShieldCheckIcon, LockIcon, CreditCardIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const TransactionSection = () => {
  const router = useRouter();
  const navigateToTransactions = () => {
    router.push("/dashboard/transactions");
  };

  return (
    <section id="transactions" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/transaction.png"
            alt="Secure Transactions - Xpenda"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-left md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Secure & Reliable Transactions
          </h2>
          <p className="text-base md:text-lg mt-4">
            At Xpenda, every transaction is{" "}
            <strong>end-to-end encrypted and fraud-proof</strong>. Your security
            is our priority, ensuring seamless payments with{" "}
            <strong>full protection</strong>.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <ShieldCheckIcon className="w-6 h-6 text-green-400" />
              Advanced Fraud Protection
            </li>
            <li className="flex items-center gap-3">
              <LockIcon className="w-6 h-6 text-blue-400" />
              Encrypted & Secured Transactions
            </li>
            <li className="flex items-center gap-3">
              <CreditCardIcon className="w-6 h-6 text-yellow-400" />
              Fast & Reliable Payments
            </li>
          </ul>
          <div className="mt-6">
            <Button
              type="button"
              onClick={navigateToTransactions}
              className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-base h-12 px-6 py-3 rounded-lg"
            >
              View Transactions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionSection;

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const navigateToAbout = () => {
    router.push("/about");
  };
  return (
    <section id="about" className="relative py-16 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - About Content */}
        <div>
          <h2 className="text-left md:text-left text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-6">
            About Xpenda
          </h2>
          <p className="text-left md:text-left text-base mb-6 leading-relaxed">
            Xpenda is a trusted <strong> Top-Up (VTU) platform </strong>Virtual
            providing seamless transactions for{" "}
            <strong>airtime, data, bills, and subscriptions</strong> at
            unbeatable rates. We empower individuals and businesses to{" "}
            <strong>buy, sell, and automate transactions</strong> securely and
            efficiently.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div className="p-4 shadow-sm border rounded-md bg-secondary dark:bg-gray-900">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                🔒 100% Secure
              </h3>
              <p className="text-sm mt-2 dark:text-gray-200">
                End-to-end encryption for safe transactions.
              </p>
            </div>
            <div className="p-4 shadow-sm border rounded-md bg-secondary dark:bg-gray-900">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                ⚡ Instant Delivery
              </h3>
              <p className="text-sm mt-2 dark:text-gray-200">
                Transactions processed within seconds.
              </p>
            </div>
            <div className="p-4 shadow-sm border rounded-md bg-secondary dark:bg-gray-900">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                💰 Affordable Rates
              </h3>
              <p className="text-sm mt-2 dark:text-gray-200">
                Buy & resell at competitive prices.
              </p>
            </div>
            <div className="p-4 shadow-sm border rounded-md bg-secondary dark:bg-gray-900">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                📞 24/7 Support
              </h3>
              <p className="text-sm mt-2 dark:text-gray-200">
                We’re always available to assist you.
              </p>
            </div>
          </div>

          {/* <a href="/about"> */}
          <button
            type="button"
            onClick={navigateToAbout}
            className="mt-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-base h-12 px-6 py-3 rounded-none hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            Learn More
          </button>
          {/* </a> */}
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/about-xpenda-trans.webp"
            alt="About Xpenda"
            width={500}
            height={500}
            className="rounded-md shadow-sm border wallet-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

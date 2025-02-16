"use client";

import React from "react";
import { BackgroundLines } from "./ui/background-lines";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <BackgroundLines className="absolute inset-0 z-0">{null}</BackgroundLines>

      {/* Auth Form */}
      <div className="relative z-10 w-full max-w-md bg-black-100 p-6 sm:p-10 rounded-lg shadow-md">
        {children}
      </div>

      {/* Footer Links */}
      <footer className="relative z-10 mt-8 py-8 text-center text-sm text-gray-400">
        <a
          href="https://www.sixtusdev.net/pages/privacy_policy"
          className="hover:text-green-500 text-yellow-500 hover:underline"
        >
          Privacy Policy
        </a>{" "}
        |{" "}
        <a
          href="https://www.sixtusdev.net/pages/terms_condition"
          className="hover:text-green-500 text-yellow-500 hover:underline"
        >
          Terms & Conditions
        </a>
      </footer>
    </main>
  );
};

export default Layout;

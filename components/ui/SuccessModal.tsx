"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  link: string;
  linkText: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  message,
  link,
  linkText,
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-red-500"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-bold text-center text-green-600">
          <CheckCircle
            size={40}
            className="text-green-500 text-center mx-auto mb-2"
          />
          Success!
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm text-center mt-2">
          {message}
        </p>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => router.push("/dashboard/orders")}
            className="w-full h-12 py-3 mt-4 bg-gradient-to-r from-green-500 via-green-600 to-purple-600 text-white font-bold text-base rounded-lg shadow-lg hover:opacity-90 transition duration-300"
          >
            View Order Status
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessModal;

"use client";

import React, { useEffect, useRef } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Import success icon from React Icons
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is allowed on unmount
    };
  }, [isOpen]);

  // Close the modal when clicking outside of it
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2 lg:p-4 z-50" // Darker overlay effect
    >
      <div className="bg-secondary border rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 z-40 cursor-pointer border rounded-full bg-secondary hover:text-red-600"
        >
          <IoClose size={18} />
        </button>
        <div className="flex flex-col items-center">
          <AiOutlineCheckCircle className="text-green-500 text-4xl mb-4" />{" "}
          {/* Success icon */}
          <p className="text-center text-base tracking-wide leading-snug font-semibold mb-4">
            {message}
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-800 text-white text-base font-semibold rounded-full py-2 px-8"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

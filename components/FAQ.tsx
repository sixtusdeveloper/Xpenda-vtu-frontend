"use client";

import React, { useState, useEffect } from "react";
import { faqs } from "@/data/faq-data"; // Import FAQs data

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleFeedback = (response: string) => {
    setFeedback(response);
    setShowModal(true);
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div id="faq" className="w-full pt-10 bg-secondary">
      <div className="px-0 md:px-10 max-w-4xl mx-auto py-10">
        <h1 className="text-left text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-4 md:mb-6">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-base lg:text-lg mb-8 sm:text-start text-start">
          Welcome to my FAQ page! Here you can find answers to the most common
          questions about my platform.
        </p>
        <div className="rounded-xl border p-2 md:p-6 shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:shadow-md transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-lg text-bold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                  {faq.question}
                </h2>
                <span className="text-2xl text-blue-500">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-4 text-base leading-snug">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="py-4 text-center mt-2 md:mt-4 lg:mt-4">
          <p className="text-sm">
            Could not find what you're looking for?{" "}
            <a href="/#contact" className="text-green-500 hover:underline ml-2">
              Contact Us
            </a>
          </p>
        </div>

        <div className="py-4 text-center mt-2">
          <h2 className="text-center">
            Did you find these Questions and Answers helpful?
          </h2>
          <div className="flex py-4 justify-center items-center gap-6">
            <button
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 hover:scale-105 text-white text-lg h-12 px-6 py-3 rounded-lg"
              onClick={() => handleFeedback("yes")}
            >
              Yes, they were
            </button>
            <button
              className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:scale-105 text-white text-lg h-12 px-6 py-3 rounded-lg"
              onClick={() => handleFeedback("no")}
            >
              No, they weren't
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Feedback */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center"
          onClick={() => setShowModal(false)} // Click outside to close
        >
          <div
            className="bg-secondary border p-8 rounded-lg max-w-lg w-full text-center"
            onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing
          >
            {feedback === "yes" ? (
              <>
                <div className="text-4xl text-green-500 mb-4">👍</div>
                <h3 className="lg:text-lg font-semibold text-base">
                  Glad you find it helpful!
                </h3>
                <p className="text-sm mt-4">
                  If you need any other questions, kindly reach out using the
                  message link below this page.
                </p>
                <a
                  href="/contact"
                  className="text-green-500 hover:underline mt-4 block"
                >
                  Message me
                </a>
              </>
            ) : (
              <>
                <div className="text-4xl text-red-500 mb-4">👎</div>
                <h3 className="lg:text-lg text-base font-semibold">
                  Sorry to hear that!
                </h3>
                <p className="text-sm mt-4">
                  If you need further assistance, feel free to reach out using
                  the message link below.
                </p>
                <a
                  href="/contact"
                  className="text-green-500 hover:underline mt-4 block"
                >
                  Message me
                </a>
              </>
            )}
            <button
              className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQPage;

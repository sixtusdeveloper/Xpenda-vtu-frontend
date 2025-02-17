"use client";

import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ScrollIndicator = () => {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop === 0) {
        setAtTop(true);
        setAtBottom(false);
        setScrollDirection("down");
      } else if (scrollTop + clientHeight >= scrollHeight - 10) {
        setAtTop(false);
        setAtBottom(true);
        setScrollDirection("up");
      } else {
        setAtTop(false);
        setAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScroll = (target: number, duration: number) => {
    const start = window.scrollY || document.documentElement.scrollTop;
    const distance = target - start;
    const startTime = performance.now();

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, start + distance * progress);

      if (elapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  const scrollToPosition = (direction: "down" | "up") => {
    if (direction === "down") {
      smoothScroll(document.documentElement.scrollHeight, 1200); // 1500ms for smooth scroll to bottom
    } else if (direction === "up") {
      smoothScroll(0, 1200); // 1500ms for smooth scroll to top
    }
  };

  const handleClick = () => {
    scrollToPosition(scrollDirection);
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed ${
        atTop ? "top-20" : "bottom-20"
      } cursor-pointer p-4 rounded-full border shadow-lg
      bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white 
      animate-[pulse_2s_ease-in-out_infinite] transition-all duration-700 
      hover:scale-110 hover:animate-none right-2 lg:right-6 z-50`}
      style={{ transition: "top 0.3s, bottom 0.3s" }}
    >
      {scrollDirection === "down" ? (
        <FaArrowDown className="text-xl" />
      ) : (
        <FaArrowUp className="text-xl" />
      )}
    </div>
  );
};

export default ScrollIndicator;

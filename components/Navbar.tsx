"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Logo } from "@/components/NavbarLogo";
import Image from "next/image";
import ToggleMode from "@/components/ui/toggleMode";

interface NavbarProps {
  LogoImg?: string;
  title?: string;
  LogoImgDark?: string;
  navigation: { name: string; href: string }[];
}

export default function Navbar({
  LogoImg,
  title = "Xpenda", // Default title if none provided
  navigation,
}: NavbarProps) {
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      for (let item of navigation) {
        const section = document.querySelector(`#${item.href.substring(1)}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  const handleClick = (href: string) => {
    setActiveSection(href.substring(1));
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolling ? "bg-secondary border-b" : "bg-black/50 text-white"
        }`}
      >
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-4 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Logo src={LogoImg} alt="Logo" title={title} />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center cursor-pointer justify-center rounded-md p-2.5"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={`#${item.href.substring(1)}`}
                className={`text-sm hover:text-pink-700 tracking-wide font-semibold cursor-pointer ${
                  activeSection === item.href.substring(1)
                    ? "hover:text-pink-700 bg-gradient-to-r from-pink-600 via-pink-500 to-yellow-600 font-semibold bg-clip-text text-transparent"
                    : "text-default hover:text-pink-700"
                } hover:text-pink-700`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5 items-center">
            <ToggleMode />
            {/* Signed-in and Signed-out logic */}
            <SignedIn>
              <div className="flex items-center gap-4">
                {user && (
                  <span className="hidden lg:block text-sm font-semibold bg-gradient-to-r from-pink-600 via-yellow-500 to-purple-500 bg-clip-text text-transparent">
                    {user.firstName}
                  </span>
                )}
                <UserButton />
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <button className="inline-flex text-base font-semibold px-3 py-2 rounded-none bg-blue-500 hover:bg-indego-800 bg-gradient-to-r from-yellow-500 via-purple-500 to-indigo-500 text-white">
                  <UserIcon className="mr-1 h-5 w-5 text-white" /> Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-40" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center">
                <Image
                  src="/Logo.png"
                  alt="Sixtusdev Logo"
                  width={30}
                  height={30}
                />
                <span className="hidden font-sans sm:block self-center text-base font-semibold bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  {title}
                </span>
              </a>
              <ToggleMode />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-300"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={`#${item.href.substring(1)}`}
                      className="-mx-3 block text-white rounded-lg px-3 py-2 text-sm font-semibold leading-7 hover:text-pink-700"
                      onClick={() => {
                        handleClick(item.href);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-3">
                  <SignedIn>
                    <div className="flex items-center gap-4">
                      <UserButton />

                      {user && (
                        <span className="text-sm font-semibold bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent">
                          {user.firstName}
                        </span>
                      )}
                    </div>
                  </SignedIn>
                  <SignedOut>
                    <SignInButton>
                      <button className="inline-flex text-base font-semibold px-3 py-2 rounded-none bg-blue-500 hover:bg-indego-800 bg-gradient-to-r from-yellow-500 via-purple-500 to-indigo-500 text-white">
                        <UserIcon className="mr-1 h-5 w-5 text-white" /> Sign In
                      </button>
                    </SignInButton>
                  </SignedOut>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}

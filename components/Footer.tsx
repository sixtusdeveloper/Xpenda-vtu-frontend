import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* QUICK LINKS */}
        {/* BRANDING */}
        <div>
          <h3 className="text-base font-bold mb-4">About Xpenda</h3>
          <p className="text-left md:text-left text-sm mb-2 text-gray-400 leading-7">
            Xpenda is a trusted <strong> Top-Up (VTU) platform </strong>Virtual
            providing seamless transactions for{" "}
            <strong>airtime, data, bills, and subscriptions</strong> at
            unbeatable rates. We empower individuals and businesses to{" "}
            <strong>buy, sell, and automate transactions</strong> securely and
            efficiently.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <a
                href="/"
                className="text-gray-300 hover:text-yellow-400 border-b border-gray-800 py-2 leading-6"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-300 hover:text-yellow-400 border-b border-gray-800 py-2 leading-6"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-gray-300 hover:text-yellow-400 border-b border-gray-800 py-2 leading-6"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="text-gray-300 hover:text-yellow-400 border-b border-gray-800 py-2 leading-6"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-300 hover:text-yellow-400 border-b border-gray-800 py-2 leading-6"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-base font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <a href="/dashboard">
              <li className="text-gray-300 hover:text-yellow-400 border-b border-gray-800 py-2 leading-6 text-sm">
                Airtime & Data Reselling
              </li>
            </a>
            <a href="/dashboard">
              <li className="text-gray-300 hover:text-yellow-400 border-b border-gray-800 py-2 leading-6 text-sm">
                Electricity Bill Payment
              </li>
            </a>
            <a href="/dashboard">
              <li className="text-gray-300 hover:text-yellow-400 border-b border-gray-800 py-2 leading-6 text-sm">
                Cable TV Subscription
              </li>
            </a>
            <a href="/dashboard">
              <li className="text-gray-300 hover:text-yellow-400 border-b border-gray-800 py-2 leading-6 text-sm">
                Airtime to Cash Conversion
              </li>
            </a>
            <a href="/dashboard">
              <li className="text-gray-300 hover:text-yellow-400 border-b border-gray-800 py-2 leading-6 text-sm">
                Secure API Integration
              </li>
            </a>
          </ul>
        </div>

        {/* CONTACT & SOCIALS */}
        <div>
          <h3 className="text-base font-bold mb-4">Contact & Follow Us</h3>
          <p className="text-sm text-gray-400 leading-7 border-b py-2 border-gray-800">
            📍 Plot 39 Awolowo Road, Ikoyi, Lagos, Nigeria
          </p>
          <p className="text-sm text-gray-400 leading-7 border-b py-2 border-gray-800">
            📞 +234 902 204 8105
          </p>
          <p className="text-sm text-gray-400 leading-7 border-b py-2 border-gray-800">
            ✉ contact@sixtusdev.net
          </p>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="flex justify-between flex-wrap px-4 sm:px-8 items-center gap-4 border-t border-gray-800 mt-8 pt-6 text-sm text-gray-500">
        <a href="/" className="-m-1.5 p-1.5 flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Xpenda Logo"
            width={55}
            height={55}
            style={{ width: "auto", height: "auto" }}
            priority={true}
          />
          <span className="self-center font-sans text-base font-bold bg-gradient-to-r from-blue-500 via-yellow-500 to-pink-500 uppercase text-transparent bg-clip-text">
            XPENDA
          </span>
        </a>

        {/* SOCIAL MEDIA ICONS */}
        <div className="flex gap-4">
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 text-lg  bg-gray-700 p-2 rounded-full"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 text-lg  bg-gray-700 p-2 rounded-full"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 text-lg  bg-gray-700 p-2 rounded-full"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 text-lg bg-gray-700 p-2 rounded-full"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="flex gap-4">
          © {new Date().getFullYear()} Xpenda VTU{" "}
          <span className="block">
            <Link
              href="/terms"
              className="hover:text-yellow-400 hover:underline text-sm"
            >
              Terms & Conditions
            </Link>{" "}
            |
            <Link
              href="/privacy"
              className="hover:text-yellow-400 hover:underline ml-2 text-sm"
            >
              Privacy Policy
            </Link>
          </span>{" "}
          <span>
            Developed by&nbsp;
            <a
              href="https://www.sixtusdev.net"
              target="_blank"
              className="hover:text-yellow-500 hover:underline"
            >
              Sixtusdev
            </a>{" "}
            - All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

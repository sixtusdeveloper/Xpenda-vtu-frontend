import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* BRANDING */}
        <div>
          <Image src="/logo.png" alt="Xpenda Logo" width={80} height={30} />
          <p className="mt-4 text-sm text-gray-400">
            <strong>Xpenda</strong> is your trusted platform for{" "}
            <strong>buying and reselling</strong>&nbsp; Airtime, Data, and
            Utility Payments in Nigeria.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-yellow-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-300 hover:text-yellow-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-yellow-400"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-yellow-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li className="text-gray-300">Airtime & Data Reselling</li>
            <li className="text-gray-300">Electricity Bill Payment</li>
            <li className="text-gray-300">Cable TV Subscription</li>
            <li className="text-gray-300">Airtime to Cash Conversion</li>
            <li className="text-gray-300">Secure API Integration</li>
          </ul>
        </div>

        {/* CONTACT & SOCIALS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact & Follow Us</h3>
          <p className="text-sm text-gray-400">
            📍 Plot 39 Awolowo Road, Ikoyi, Lagos, Nigeria
          </p>
          <p className="text-sm text-gray-400">📞 +234 902 204 8105</p>
          <p className="text-sm text-gray-400">✉ contact@sixtusdev.net</p>

          {/* SOCIAL MEDIA ICONS */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Xpenda VTU. Developed by Sixtusdev. All
        rights reserved.
        <span className="block mt-2">
          <Link
            href="/terms"
            className="text-yellow-400 hover:underline text-sm"
          >
            Terms & Conditions
          </Link>{" "}
          |
          <Link
            href="/privacy"
            className="text-yellow-400 hover:underline ml-2 text-sm"
          >
            Privacy Policy
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

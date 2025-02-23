"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const AboutHero = () => {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push("/dashboard");
  };

  const navigateToServices = () => {
    router.push("/services");
  };

  return (
    <section className="relative w-full min-h-[65vh] lg:min-h-[500px] bg-cover bg-center flex md:flex-col items-center justify-center px-6 lg:px-16 py-8 md:py-10 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero-img.png"
          alt="Xpenda About Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl md:max-w-4xl text-left md:text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
          Empowering Your Digital Transactions with&nbsp;
          <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Xpenda VTU
          </span>
        </h1>
        <p className="mt-4 text-sm lg:text-base opacity-90">
          Xpenda is a fast, secure, and automated platform for buying and
          reselling airtime, data, and digital services. Whether you're an
          individual or a business, we make transactions seamless and
          affordable.
        </p>
        <div className="mt-6 flex flex-wrap justify-start md:justify-center gap-4">
          <button
            type="button"
            onClick={navigateToDashboard}
            className="h-12 px-6 py-3 rounded-none bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-base"
          >
            Get Started
          </button>

          <button
            type="button"
            onClick={navigateToServices}
            className="h-12 px-6 py-3 rounded-none bg-transparent ring-2 ring-purple-600 hover:bg-purple-600 border-white text-white font-semibold text-base transition-all duration-300"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

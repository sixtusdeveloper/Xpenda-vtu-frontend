import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[86vh] flex flex-col md:flex-row items-center justify-between px-6 lg:px-16 py-10 bg-gradient-to-r from-purple-900 via-blue-700 to-indigo-900 text-white">
      {/* Left: Text Content */}
      <div className="flex-1 text-left md:text-left max-w-2xl py-10 mt-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
          Empowering Your Digital Transactions with&nbsp;
          <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Xpenda VTU
          </span>
        </h1>
        <p className="mt-4 text-base lg:text-lg opacity-90">
          Xpenda is a fast, secure, and automated platform for buying and
          reselling airtime, data, and digital services. Whether you're an
          individual or a business, we make transactions seamless and
          affordable.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/pricing">
            <Button className="h-12 px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-base">
              Get Started
            </Button>
          </Link>
          <Link href="#about-us">
            <Button className="h-12 px-6 py-3 rounded-lg bg-transparent ring-1 outline border-white text-white font-semibold text-base">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Right: Hero Image */}
      <div className="flex-1 w-full h-full flex justify-center items-center py-10 mt-2 md:mt-10">
        <Image
          src="/images/about-hero-img.png"
          alt="Xpenda About Hero"
          width={700}
          height={700}
          className="h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutHero;

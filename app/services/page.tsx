import React from "react";
import ServicesPage from "@/components/ServicesPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ServicesNavigation } from "@/data";
import ServicesReferralSection from "@/components/ServicesReferralSection";
import ServicesHero from "@/components/ServicesHero";
import ServicesDetailed from "@/components/ServicesDetailed";

const ServicesPageComponent = () => {
  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <Navbar navigation={ServicesNavigation} />
        <ServicesHero />
        <ServicesPage />
        <ServicesDetailed />
        <ServicesReferralSection />
        <Footer />
      </div>
    </main>
  );
};

export default ServicesPageComponent;

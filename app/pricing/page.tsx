import DiscountCashback from "@/components/DiscountCashBack";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingAPIDocs from "@/components/PricingAPIDocs";
import PricingHero from "@/components/PricingHero";
import PricingPlans from "@/components/PricingPlans";
import ScrollIndicator from "@/components/ScrollIndicator";
import WalletFunding from "@/components/WalletFunding";
import { pricingNavigation } from "@/data";
import React from "react";

const Pricing = () => {
  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <Navbar navigation={pricingNavigation} />
        <PricingHero />
        <PricingPlans />
        <DiscountCashback />
        <WalletFunding />
        <PricingAPIDocs />
        <Footer />
        <ScrollIndicator />
      </div>
    </main>
  );
};

export default Pricing;

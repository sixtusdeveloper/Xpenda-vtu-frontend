import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { navigation } from "@/data";
import TransactionSection from "@/components/TransactionSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import WalletSection from "@/components/WalletSection";
import APISection from "@/components/APISection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <Navbar navigation={navigation} />
        <Hero />
        <ServicesSection />
        <AboutSection />
        <PricingSection />
        <WalletSection />
        <TransactionSection />
        <APISection />
        <Footer />
        <ScrollIndicator />
      </div>
    </main>
  );
}

import ContactHero from "@/components/ContactHero";
import ContactMap from "@/components/ContactMap";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ContactNavigation } from "@/data";
import React from "react";

const Contact = () => {
  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <Navbar navigation={ContactNavigation} />
        <ContactHero />
        <ContactSection />
        <ContactMap />
        <Footer />
      </div>
    </main>
  );
};

export default Contact;

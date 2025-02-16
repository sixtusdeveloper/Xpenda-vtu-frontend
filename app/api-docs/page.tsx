"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import APIDocs from "@/components/APIDocs";
import { apiDocsNavigation } from "@/data";
import ScrollIndicator from "@/components/ScrollIndicator";

const ApiDocs = () => {
  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <Navbar navigation={apiDocsNavigation} />
        <APIDocs />
        <Footer />
        <ScrollIndicator />
      </div>
    </main>
  );
};

export default ApiDocs;

import About from "@/components/About";
import AboutCallToAction from "@/components/AboutCallToAction";
import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import { aboutNavigation } from "@/data";

const page = () => {
  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <Navbar navigation={aboutNavigation} />
        <AboutHero />
        <About />
        <AboutCallToAction />
        <Footer />
        <ScrollIndicator />
      </div>
    </main>
  );
};

export default page;

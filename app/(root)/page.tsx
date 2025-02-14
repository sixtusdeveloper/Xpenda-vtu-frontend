import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { navigation } from "@/data";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <Navbar navigation={navigation} />
        <Hero />
        <Pricing />
      </div>
    </main>
  );
}

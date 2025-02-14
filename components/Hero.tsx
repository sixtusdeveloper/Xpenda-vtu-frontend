// "use client";

// import React from "react";
// import { useUser } from "@clerk/nextjs";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// const Home = () => {
//   const { user, isSignedIn } = useUser();

//   return (
//     <section
//       id="hero"
//       className="relative pt-8 lg:px-0 px-4 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-[80vh] lg:min-h-[500px] bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 px-4 lg:px-16">
//         {/* Left: Hero Text */}
//         <motion.div
//           className="text-white max-w-2xl text-center lg:text-left"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {/* Greeting */}
//           <motion.h3
//             className="text-sm py-2 tracking-wide sm:text-base"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             {isSignedIn && user ? (
//               <>
//                 👋 Welcome,{" "}
//                 <span className="font-bold">
//                   {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
//                 </span>
//               </>
//             ) : (
//               "👋 Welcome to Xpenda!"
//             )}
//           </motion.h3>

//           {/* Heading */}
//           <motion.h1
//             className="text-[2.2rem] leading-tight lg:text-[3rem] font-extrabold font-sans"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//           >
//             <strong>
//               Buy & Resell{" "}
//               <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
//                 Airtime & Data
//               </span>{" "}
//               Seamlessly with{" "}
//               <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
//                 Xpenda VTU
//               </span>
//             </strong>
//           </motion.h1>

//           {/* Paragraph */}
//           <motion.p
//             className="lg:pt-4 pt-2 leading-6 text-base"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             Xpenda makes it easy to **buy and resell airtime, data, and
//             subscription services** at the best rates. Start your VTU business
//             today and enjoy **fast, secure, and automated transactions**.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             className="mt-6 flex flex-wrap gap-4"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.1, ease: "easeOut" }}
//           >
//             <Button className="h-12 px-6 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg">
//               Get Started
//             </Button>
//             <Button
//               variant="outline"
//               className="h-12 px-6 py-3 rounded-lg border-white text-white hover:bg-white hover:text-black font-semibold text-lg"
//             >
//               Learn More
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Right: Image */}
//         <motion.div
//           className="w-full lg:w-1/2 flex justify-center items-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//         >
//           <Image
//             src="/assets/vtu-dashboard.png"
//             alt="Xpenda VTU Dashboard"
//             width={500}
//             height={350}
//             className="rounded-lg shadow-lg"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Home;

"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
  const { user, isSignedIn } = useUser();

  return (
    <section
      id="hero"
      className="relative pt-8 lg:px-0 px-4 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-[80vh] lg:min-h-[500px] bg-gradient-to-r from-purple-700 via-indigo-500 to-purple-900"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 px-4 mt-10 lg:px-16">
        {/* Left: Hero Text */}
        <motion.div
          className="text-white max-w-3xl p-0 lg:py-4 mt-16 text-start lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Greeting */}
          <motion.h3
            className="text-sm py-2 tracking-wide sm:text-base"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {isSignedIn && user ? (
              <>
                👋 Welcome,{" "}
                <span className="font-bold">
                  {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
                </span>
              </>
            ) : (
              "👋 Welcome to Xpenda!"
            )}
          </motion.h3>

          {/* Heading */}
          <motion.h1
            className="text-[2.2rem] leading-tight lg:text-[3rem] font-extrabold font-sans"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <strong>
              Buy & Resell{" "}
              <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
                Airtime & Data
              </span>{" "}
              Seamlessly with{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Xpenda VTU
              </span>
            </strong>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="lg:pt-4 pt-2 leading-6 text-base"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Xpenda makes it easy to{" "}
            <strong>
              buy and resell airtime, data, and subscription services
            </strong>{" "}
            at the best rates. Start your VTU business today and enjoy{" "}
            <strong>fast, secure, and automated transactions</strong>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <Button className="h-12 px-6 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="h-12 px-6 py-3 rounded-lg border-white text-white hover:bg-white hover:text-black font-semibold text-lg"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Xpenda-Themed Image */}
        <motion.div
          className="hidden lg:flex mt-10 w-full lg:w-1/2 justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src="/xpenda-hero.png"
            alt="Xpenda VTU Platform"
            width={600}
            height={300}
            className="xpenda-img rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

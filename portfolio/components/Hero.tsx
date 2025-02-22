




"use client";

import Connect from "../components/connect";
import astro from "../asset/astronaut.png";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "../asset/star.png";

export default function Hero() {
  return (
     <div className="flex flex-col  p-10">
    <div className="flex flex-row md:flex-row items-center justify-between md:mx-40 ">
      {/* Left Container */}
      <div className="flex flex-row items-start w-full md:w-1/2">
        {/* Astronaut Floating Animation */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="mb-4" // Space between the astronaut and text
        >
          <Image src={astro} alt="Astronaut" className="w-[150px] h-[150px]" />
        </motion.div>

        {/* Text Container */}
        <div className="flex flex-col items-start gap-2">
          {/* "Hi!" Floating Independently */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0 }}
            className="text-4xl font-mono text-white"
          >
            Hi!
          </motion.div>

          {/* "I'm Saurabh Pandey" Floating with Different Timing */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.3 }}
            className="text-6xl font-mono text-white"
          >
            {`I'm Saurabh `}
          </motion.div>

          {/* "Student at IIIT Ranchi" Floating with a Different Delay */}
          <motion.div
            animate={{ y: [-7, 7, -7] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.5 }}
            className="text-sm text-gray-400 font-mono pt-2"
          >
            Student at Indian Institute of Information Technology Ranchi
          </motion.div>

          {/* Connect Component */}
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.5 }}
          >
            <Connect />
          </motion.div>

        
          
        </div>
      </div>

      {/* Right Container */}
      <div className="flex justify-center w-full md:w-1/2 mt-4 md:mt-0">
        <motion.img
          src={img.src}
          alt=""
          className="bg-transparent w-1/2 h-auto"
          animate={{ y: [-7, 7, -7] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
    </div>
    
    <motion.div
            className="mt-4 text-[18px] text-gray-400 font-serif font-thin flex justify-center"
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.5 }}
          >
            {`<scroll down>`}
          </motion.div>
    
     </div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const bgImages = [
    "/Bg-hero.jpg",
    "/Bg-2.png",
    "/BG-3.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const words = "Build Better Software. Faster. Smarter.".split(" ");

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const wordAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">

      
      <div className="absolute inset-0">
        {bgImages.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === i ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src={src} alt="Hero BG" fill className="object-cover" />
          </motion.div>
        ))}
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 max-w-5xl px-6 md:px-36 text-center">

        {/* TEXT RELOADS ANIMATION EVERY IMAGE CHANGE */}
        <motion.h1
          key={index}            
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordAnim}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          key={"p-" + index}    
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-md md:text-lg mb-6 text-gray-100"
        >
          Empowering businesses with scalable, high-performance digital
          solutions. We combine technology, creativity, and innovation to build
          products that grow with your vision.
        </motion.p>

        <motion.a
          key={"btn-" + index} 
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Explore More
        </motion.a>

      </div>
    </section>

      {/* OVERLAY CARDS SECTION */}
      <div className="relative z-20 -mt-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
  {/* Card 1 */}
  <div
    className="group bg-white text-black rounded-2xl shadow-xl p-8 
    flex flex-col items-center justify-center 
    hover:-translate-y-3 transition-all duration-500 
    w-full h-60 hover:bg-blue-500"
  >
    <div className="flex items-center justify-center w-20 h-20 bg-white mb-4 transition-all duration-500">
      <Image
        src="/secure.png"
        width={50}
        height={50}
        alt="Secure Solutions Icon"
        className="transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <h3 className="text-2xl font-semibold mb-3 text-blue-600 transition-all duration-500 group-hover:text-white">
      Secure Solutions
    </h3>

    <p className="text-gray-600 text-center text-lg transition-all duration-500 group-hover:text-white">
      We create secure, scalable blockchain platforms to power your
      digital future.
    </p>
  </div>

  {/* Card 2 */}
  <div
    className="group bg-white text-black rounded-2xl shadow-xl p-8 
    flex flex-col items-center justify-center 
    hover:-translate-y-3 transition-all duration-500 
    w-full h-60 hover:bg-blue-500"
  >
    <div className="flex items-center justify-center w-20 h-20 bg-white mb-4 transition-all duration-500">
      <Image
        src="/dev.png"
        width={50}
        height={50}
        alt="Expert Developers Icon"
        className="transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <h3 className="text-2xl font-semibold mb-3 text-blue-600 transition-all duration-500 group-hover:text-white">
      Expert Developers
    </h3>

    <p className="text-gray-600 text-center text-lg transition-all duration-500 group-hover:text-white">
      Our experienced team builds future-ready Web3 and cloud solutions.
    </p>
  </div>

  {/* Card 3 */}
  <div
    className="group bg-white text-black rounded-2xl shadow-xl p-8 
    flex flex-col items-center justify-center 
    hover:-translate-y-3 transition-all duration-500 
    w-full h-60 hover:bg-blue-500"
  >
    <div className="flex items-center justify-center w-20 h-20 bg-white mb-4 transition-all duration-500">
      <Image
        src="/trust.jpeg"
        width={50}
        height={50}
        alt="Trusted Clients Icon"
        className="transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <h3 className="text-2xl font-semibold mb-3 text-blue-600 transition-all duration-500 group-hover:text-white">
      Trusted by Clients
    </h3>

    <p className="text-gray-600 text-center text-lg transition-all duration-500 group-hover:text-white">
      Delivering excellence and innovation for global businesses.
    </p>
  </div>
 </div>
</div>
 </>
 );
}

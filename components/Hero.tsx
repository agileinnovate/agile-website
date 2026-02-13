"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const slides = [
    {
      image: "/Bg-hero.jpg",
      title: "Web & Mobile Solutions",
      description:
        "Providing secure and scalable solutions for modern mobile and web applications. Empowering businesses with cutting-edge technology.",
      button: "Explore More",
    },
    {
      image: "/BG-2.png",
      title: "Blockchain, DeFi & NFTs",
      description:
        "Enterprise-grade blockchain development services for startups, enterprises, and Web3 innovators worldwide.",
      button: "Discover More",
    },
    {
      image: "/BG-3.png",
      title: "Building Secure Applications",
      description:
        "End-to-end blockchain and smart contract solutions designed for performance, security, and scalability.",
      button: "Get Started",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out will-change-opacity ${
                index === i ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ transform: "translateZ(0)" }}
            >
              <Image
                src={slide.image}
                alt="Hero Background"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        <div className="relative z-20 max-w-4xl px-6 md:px-20 text-center">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            {slides[index].title}
          </motion.h1>

          <motion.p
            key={"p-" + index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-gray-200"
          >
            {slides[index].description}
          </motion.p>

          <motion.a
            key={"btn-" + index}
            href="/contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            {slides[index].button}
          </motion.a>
        </div>
      </section>

      {/* OVERLAY CARDS SECTION */}
      <div className="relative z-30 -mt-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white text-black rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center hover:-translate-y-3 transition-all duration-500 w-full h-50 hover:bg-blue-500">
            <div className="flex items-center justify-center w-16 h-16 bg-white mb-2">
              <Image
                src="/secure.png"
                width={40}
                height={40}
                alt="Secure Solutions"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600 group-hover:text-white">
              Secure Solutions
            </h3>
            <p className="text-gray-600 text-center text-md group-hover:text-white">
              We create secure, scalable blockchain platforms to power your
              digital future.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white text-black rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center hover:-translate-y-3 transition-all duration-500 w-full h-50 hover:bg-blue-500">
            <div className="flex items-center justify-center w-16 h-16 bg-white mb-2">
              <Image
                src="/dev.png"
                width={40}
                height={40}
                alt="Expert Developers"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600 group-hover:text-white">
              Expert Developers
            </h3>
            <p className="text-gray-600 text-center text-md group-hover:text-white">
              Our experienced team builds future-ready Web3 and cloud solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white text-black rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center hover:-translate-y-3 transition-all duration-500 w-full h-50 hover:bg-blue-500">
            <div className="flex items-center justify-center w-16 h-16 bg-white mb-2">
              <Image
                src="/trust.jpeg"
                width={40}
                height={40}
                alt="Trusted Clients"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-600 group-hover:text-white">
              Trusted by Clients
            </h3>
            <p className="text-gray-600 text-center text-md group-hover:text-white">
              Delivering excellence and innovation for global businesses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-start text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Bg-hero.jpg"
          alt="AgileInnovate Background"
          fill
          priority
          className="object-cover opacity-90"
        />

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl px-6 md:px-35 text-left">
          <motion.h1
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
          >
            Build Better Software. Faster. Smarter.
          </motion.h1>

          <motion.p
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            className="text-md md:text-lg mb-6 text-gray-50"
          >
           Empowering businesses with scalable, high-performance digital solutions. At Agile Innovate, we combine technology, creativity, and agile engineering to turn your ideas into powerful applications that grow with your vision.
          </motion.p>

          <motion.a
            href="/contact"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
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

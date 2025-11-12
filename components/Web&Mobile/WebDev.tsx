"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import WebDevTab from "./WebDevTab";
import DevelopmentProcess from "./DevelopmentProcess";

export default function WebDev() {
  return (
    <>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative w-full h-[350px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/web-dev.webp"
            alt="Web Development"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT — TEXT + FEATURES */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <span className="text-blue-500 bg-blue-100 px-4 py-1 rounded-md text-sm font-semibold">
            Web & Mobile Services
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-4">
            Web <span className="text-blue-600">Development</span>
          </h2>

          <p className="text-gray-600 text-md leading-relaxed mb-8">
            We develop powerful, scalable, and secure web applications tailored 
            to your business. From UI/UX design to full-stack development, we 
            deliver high-performance websites that engage users.
          </p>

          {/* FEATURES LIST */}
          <div className="space-y-5">
            {[
              "Responsive UI/UX Design",
              "SEO-Optimized Websites",
              "Custom Web Applications",
              "API Integration & Automation",
              "High-Performance Web Architecture",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-xl" />
                <p className="text-gray-700 text-md">{feature}</p>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <a
            href="/contact"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
    
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center px-6">

        {/* Small Title */}
        <h4 className="text-md font-semibold tracking-wide text-blue-600 uppercase">
          WHY CHOOSE US
        </h4>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mt-5">
          We Deliver Excellence With Innovation
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-md leading-relaxed mt-4">
          At AgileInnovate, we combine technology, creativity, and strategic
          thinking to build future-ready digital solutions for businesses.
          Our team focuses on trust, quality, and client-first execution.
        </p>
      </div>
    </section>


     <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-6">

        {/* Small Title */}
        <h4 className="text-md font-semibold tracking-wide text-blue-600 uppercase">
          OUR SERVICES
        </h4>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mt-5">
          Comprehensive Web Development Solutions
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
        From concept to deployment, we offer end-to-end web development services tailored to your business needs.
        </p>
      </div>
<WebDevTab/>
    </section>
    <section>
        <DevelopmentProcess/>
    </section>


    </>
  );
}

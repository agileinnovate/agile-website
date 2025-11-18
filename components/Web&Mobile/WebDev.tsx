"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import WebDevTab from "./WebDevTab";
import DevelopmentProcess from "./DevelopmentProcess";

export default function WebDev() {
  return (
    <>
      {/*SECTION 1 — INTRO + IMG*/}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="relative w-full h-60 sm:h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/web-dev.webp"
              alt="Web Development"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <span className="text-blue-500 bg-blue-100 px-3 py-1 rounded-md text-xs sm:text-sm font-semibold">
              Web & Mobile Services
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-5 mb-4 leading-tight">
              Web <span className="text-blue-600">Development</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              We develop powerful, scalable, and secure web applications tailored
              to your business. From UI/UX design to full-stack development, we
              deliver high-performance websites that engage users.
            </p>

            {/* FEATURES LIST */}
            <div className="space-y-4 sm:space-y-5">
              {[
                "Responsive UI/UX Design",
                "SEO-Optimized Websites",
                "Custom Web Applications",
                "API Integration & Automation",
                "High-Performance Web Architecture",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-600 text-lg sm:text-xl" />
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA BUTTON */}
            <a
              href="/contact"
              className="inline-block mt-8 bg-blue-600 text-white px-5 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/*SECTION 2 — WHY CHOOSE US*/}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">

          <h4 className="text-sm sm:text-md font-semibold tracking-wide text-blue-600 uppercase">
            WHY CHOOSE US
          </h4>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            We Deliver Excellence With Innovation
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            At AgileInnovate, we combine technology, creativity, and strategic
            thinking to build future-ready digital solutions. Our team focuses on
            trust, quality, and client-first execution.
          </p>
        </div>
      </section>

      {/*SECTION 3 — OUR SERVICES*/}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">

          <h4 className="text-sm sm:text-md font-semibold tracking-wide text-blue-600 uppercase">
            OUR SERVICES
          </h4>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Comprehensive Web Development Solutions
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            From concept to deployment, we offer end-to-end web development
            services tailored to your business needs.
          </p>
        </div>

        {/* TABS COMPONENT */}
        <WebDevTab />
      </section>

      {/*  SECTION 4 — DEVELOPMENT PROCESS*/}
      <section>
        <DevelopmentProcess />
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import MobileAppProcess from "./MobileAppProcess";


export default function MobileApp() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-[350px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/mobile.jpg"
              alt="Mobile App Development"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <span className="text-blue-500 bg-blue-100 px-4 py-1 rounded-md text-sm font-semibold">
              Mobile Application Development
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-4">
              Transform Your Idea Into <span className="text-blue-600">Powerful Mobile Apps</span>
            </h2>

            <p className="text-gray-600 text-md leading-relaxed mb-8">
              We build fast, scalable, and feature-rich Android and iOS mobile apps 
              that deliver seamless user experiences and boost business growth.
            </p>

            {/* FEATURES LIST */}
            <div className="space-y-5">
              {[
                "Cross-Platform Development (iOS & Android)",
                "Intuitive UI/UX Mobile App Design",
                "High-Performance Architecture",
                "Secure APIs & Cloud Integration",
                "End-to-End App Development & Support",
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
              Build My App
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h4 className="text-md font-semibold tracking-wide text-blue-600 uppercase">
            WHY CHOOSE US
          </h4>

          <h1 className="text-4xl font-bold text-gray-900 mt-5">
            Cutting-Edge Mobile App Solutions
          </h1>

          <p className="text-gray-600 text-md leading-relaxed mt-4">
            AgileInnovate combines innovation, expertise, and modern development technologies 
            to build mobile apps that stand out in performance, security, and user experience.
          </p>
        </div>
      </section>

      {/* MOBILE APP SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h4 className="text-md font-semibold tracking-wide text-blue-600 uppercase">
            OUR SERVICES
          </h4>

          <h1 className="text-4xl font-bold text-gray-900 mt-5">
            Mobile App Development Services
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            From concept to deployment, we provide complete mobile development solutions
            tailored to your business needs.
          </p>
        </div>

        {/* TABS COMPONENT */}
        <MobileAppProcess/>
      </section>

    </>
  );
}

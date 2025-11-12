"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaHeartbeat, FaUserMd, FaShieldVirus, FaClipboardCheck } from "react-icons/fa";

export default function Healthcare() {
  return (
    <>
      {/* ====================== HERO SECTION ====================== */}
      <section className="relative w-full min-h-[140vh] overflow-hidden bg-white">

        <div className="relative w-full h-[90vh]">
          <Image
            src="/health-hero.webp" 
            alt="Healthcare Background"
            fill
            className="object-cover"
            priority
          />

          {/* Center-left TEXT Content */}
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 max-1w-xl text-gray-900"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Smart Healthcare Solutions<br /> Powered by Technology
            </h1>

            <p className="text-md md:text-lg text-gray-900 leading-relaxed">
              Deliver better patient outcomes with secure, scalable, and intelligent <br />
              digital healthcare platforms driven by AI, IoT, and blockchain.
            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition-all">
              Get a Consultation
            </button>
          </motion.div>

        </div>

        {/* Blue Divider */}
        <div className="w-full h-2 bg-linear-to-r from-blue-600 to-blue-400 mt-20"></div>

        {/* ====================== STATS SECTION ====================== */}
        <div className="w-full py-12">
          <div
            className="
              max-w-6xl 
              mx-auto 
              grid 
              grid-cols-1 
              md:grid-cols-4 
              gap-10 
              text-center
            "
          >

            {/* STAT 1 */}
            <div className="flex items-center justify-center gap-6">
              <div>
                <div className="text-blue-600 text-6xl font-extrabold">
                  <CountUp end={98} duration={2} />
                </div>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  patient data accuracy with digital records
                </p>
              </div>
              <div className="hidden md:block w-0.5 h-20 bg-gray-300"></div>
            </div>

            {/* STAT 2 */}
            <div className="flex items-center justify-center gap-6">
              <div>
                <div className="text-blue-600 text-6xl font-extrabold">
                  <CountUp end={70} duration={2} />
                </div>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  reduction in admin & paperwork time
                </p>
              </div>
              <div className="hidden md:block w-0.5 h-20 bg-gray-300"></div>
            </div>

            {/* STAT 3 */}
            <div className="flex items-center justify-center gap-6">
              <div>
                <div className="text-blue-600 text-6xl font-extrabold">
                  <CountUp end={80} duration={2} />
                </div>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  improvement in treatment speed using automation
                </p>
              </div>
              <div className="hidden md:block w-0.5 h-20 bg-gray-300"></div>
            </div>

            {/* STAT 4 */}
            <div className="flex items-center justify-center gap-6">
              <div>
                <div className="text-blue-600 text-6xl font-extrabold">
                  <CountUp end={99} decimals={1} duration={2} />
                </div>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  system uptime for critical healthcare operations
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ====================== WHY CHOOSE US SECTION ====================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6F]">
              Why Healthcare Providers Trust Our Digital Solutions
            </h2>

            <div className="w-full h-[3px] bg-blue-600 mt-2"></div>

            <p className="text-center md:text-left text-gray-600 mt-3 mb-10">
              Enhancing patient care through advanced technology and automation.
            </p>

            {/* LIST ITEMS */}
            <div className="space-y-10">

              {/* ITEM 1 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                    <FaHeartbeat />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Better Patient Experience</h3>
                    <p className="text-gray-600 text-sm">
                      Reduce wait time, streamline workflows, and deliver personalized care backed by smart technology.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200 mt-6"></div>
              </div>

              {/* ITEM 2 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                    <FaUserMd />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Doctor-Friendly Interfaces</h3>
                    <p className="text-gray-600 text-sm">
                      Easy-to-use tools for doctors, nurses, and hospital staff to make healthcare more efficient.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200 mt-6"></div>
              </div>

              {/* ITEM 3 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                    <FaShieldVirus />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Secure Medical Records</h3>
                    <p className="text-gray-600 text-sm">
                      HIPAA-compliant, encrypted, and blockchain-secured health data protection.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200 mt-6"></div>
              </div>

              {/* ITEM 4 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                    <FaClipboardCheck />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Streamlined Compliance</h3>
                    <p className="text-gray-600 text-sm">
                      Automated regulatory workflows ensure accuracy and reduce legal risks.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/Healthcare.jpg" 
              alt="Healthcare Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>
    </>
  );
}

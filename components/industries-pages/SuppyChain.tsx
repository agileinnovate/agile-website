"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaTruck, FaClock, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function SupplyChain() {
  return (
    <>
    <section className="relative w-full min-h-[140vh] overflow-hidden bg-white">
     <div className="relative w-full h-[115vh]">
      {/* Background Image */}
      <Image
        src="/supply.jpg"  
        alt="Supply Chain Background"
        fill
        priority
        className="object-cover"
      />

     
      <motion.div
        initial={{ y: 240,}}
        whileInView={{ y: 0, }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 max-w-xl" 
      >
        <h1 className="text-black text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
          Transform Your Supply Chain<br/> With Smart Technology
        </h1>

        <p className="text-black text-md md:text-lg max-w-2xl leading-relaxed mb-8">
          Optimize logistics, enhance real-time visibility, and
           automate workflow using next-generation blockchain, IoT, and AI-powered supply chain solutions.
        </p>

        <button className="bg-black hover:bg-white border hover:block text-white hover:text-black px-9 py-4 rounded-full">
          Get a Consultation
        </button>
      </motion.div>

</div>

      {/* BLUE DIVIDER */}
      <div className="w-full h-2 bg-linear-to-r from-blue-600 to-blue-400 mt-20"></div>

      {/* STATIC STATS SECTION */}
<div className="w-full py-12">
  <div className="
    max-w-6xl 
    mx-auto 
    grid 
    grid-cols-1 
    md:grid-cols-4 
    gap-10 
    text-center
  ">
    
    {/* STAT 1 */}
    <div className="flex items-center justify-center gap-6">
      <div>
        <div className="text-blue-600 text-6xl font-extrabold">
          <CountUp end={73} duration={2} />
        </div>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          of banks actively exploring blockchain
        </p>
      </div>

      {/* Vertical divider */}
      <div className="hidden md:block w-0.5 h-20 bg-gray-300"></div>
    </div>

    {/* STAT 2 */}
    <div className="flex items-center justify-center gap-6">
      <div>
        <div className="text-blue-600 text-6xl font-extrabold">
          <CountUp end={90} duration={2} />
        </div>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          reduction in settlement time (T+2 → minutes)
        </p>
      </div>

      <div className="hidden md:block w-0.5 h-20 bg-gray-300"></div>
    </div>

    {/* STAT 3 */}
    <div className="flex items-center justify-center gap-6">
      <div>
        <div className="text-blue-600 text-6xl font-extrabold">
          <CountUp end={30} duration={2} />
        </div>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          cost reduction in back-office operations
        </p>
      </div>

      <div className="hidden md:block w-0.5 h-20 bg-gray-300"></div>
    </div>

    {/* STAT 4 (NO DIVIDER after last item) */}
    <div className="flex items-center justify-center gap-6">
      <div>
        <div className="text-blue-600 text-6xl font-extrabold">
          <CountUp end={99} decimals={1} duration={2} />
        </div>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          blockchain network uptime (decentralized)
        </p>
      </div>
    </div>

  </div>
</div>
    </section>
    
    <section className="w-full py-20 bg-white">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-2">

        {/* LEFT CONTENT */}
        <div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6F]">
            Why Companies Trust Our Supply Chain & Logistics Solutions
          </h2>

          {/* UNDERLINE */}
          <div className="w-full h-[3px] bg-blue-600 mt-2"></div>

          {/* SUBTITLE */}
          <p className="text-center md:text-left text-gray-600 mt-3 mb-10">
            Intelligent, transparent, and scalable solutions for modern logistics.
          </p>

          {/* LIST ITEMS */}
          <div className="space-y-10">

            {/* ITEM 1 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                  <FaTruck />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Improved Supply Chain Visibility</h3>
                  <p className="text-gray-600 text-sm">
                    Real-time tracking of shipments, inventory, and warehouse operations to reduce delays and errors.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 mt-6"></div>
            </div>

            {/* ITEM 2 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                  <FaClock />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Faster Delivery Performance</h3>
                  <p className="text-gray-600 text-sm">
                    Predictive analytics and route optimization reduce delivery times and improve fleet efficiency.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 mt-6"></div>
            </div>

            {/* ITEM 3 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                  <FaChartLine />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Lower Operational Costs</h3>
                  <p className="text-gray-600 text-sm">
                    Automated workflows reduce manual processes, paperwork, and unnecessary transportation costs.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 mt-6"></div>
            </div>

            {/* ITEM 4 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                  <FaShieldAlt />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Secure & Fraud-Proof Operations</h3>
                  <p className="text-gray-600 text-sm">
                    Blockchain-enabled tracking ensures tamper-proof records across the entire logistics ecosystem.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
          <Image
            src="/Supply-right.avif" 
            alt="Supply Chain Illustration"
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

  

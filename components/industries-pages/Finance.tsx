"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaShieldAlt, FaSyncAlt, FaSmile, FaBalanceScale } from "react-icons/fa";

export default function Finance() {
  return (
    <>
    <section className="relative w-full min-h-[140vh] overflow-hidden bg-white">

      {/* HERO SECTION */}
      <div className="relative w-full h-[90vh]">
        <Image
          src="/FBG.jpg"
          alt="Finance Background"
          fill
          className="object-cover"
          priority
        />

        {/* Text Content */}
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-10 md:left-20 bottom-20 max-w-xl text-white"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Finance & Banking Solutions
          </h1>

          <p className="text-md md:text-lg text-gray-200 leading-relaxed">
            Empowering businesses with secure, modern, and innovative digital
            finance systems. We build next-generation financial platforms
            using blockchain and advanced technologies.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition-all">
            Get a consultation
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">

        {/* LEFT CONTENT */}
        <div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6F]">
            Why Financial Institutions Choose Our Blockchain Solutions
          </h2>

          {/* UNDERLINE */}
          <div className="w-full h-[3px] bg-blue-600 mt-2"></div>

          {/* SUBTITLE */}
          <p className="text-center md:text-left text-gray-600 mt-3 mb-10">
            Enterprise-grade technology with measurable business impact
          </p>

          {/* LIST ITEMS */}
          <div className="space-y-10">

            {/* ITEM 1 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                  <FaShieldAlt />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Enhanced Security</h3>
                  <p className="text-gray-600 text-sm">
                    Military-grade encryption and decentralized architecture protect against fraud and cyber threats.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 mt-6"></div>
            </div>

            {/* ITEM 2 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                  <FaSyncAlt />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Operational Efficiency</h3>
                  <p className="text-gray-600 text-sm">
                    Reduce reconciliation needs and back-office costs by up to 70% with shared ledgers.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 mt-6"></div>
            </div>

            {/* ITEM 3 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                  <FaSmile />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Improved Customer Experience</h3>
                  <p className="text-gray-600 text-sm">
                    Faster transactions, reduced fees, and innovative products delight your customers.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 mt-6"></div>
            </div>

            {/* ITEM 4 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                  <FaBalanceScale />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Regulatory Advantage</h3>
                  <p className="text-gray-600 text-sm">
                    Built-in compliance features help you stay ahead of evolving financial regulations.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
          <Image
            src="/finance-right.jpg"    
            alt="Finance Illustration"
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

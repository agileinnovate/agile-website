"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { 
  FaShoppingCart, 
  FaBoxOpen, 
  FaCreditCard, 
  FaChartLine 
} from "react-icons/fa";

export default function RetailEcommerce() {
  return (
    <>
      {/* ====================== HERO SECTION ====================== */}
      <section className="relative w-full min-h-[140vh] overflow-hidden bg-white">

        <div className="relative w-full h-[115vh]">
          <Image
            src="/retail.avif"
            alt="Retail Background"
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
            className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 max-w-xl text-white"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Smart Retail & E-Commerce<br /> Technology Solutions
            </h1>

            <p className="text-md md:text-lg text-gray-100 leading-relaxed">
              Deliver personalized shopping experiences, streamline inventory, 
              and boost online sales with AI-powered, scalable retail solutions.
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
                  <CountUp end={35} duration={2} />
                </div>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  increase in conversion rates with AI recommendations
                </p>
              </div>
              <div className="hidden md:block w-0.5 h-20 bg-gray-300"></div>
            </div>

            {/* STAT 2 */}
            <div className="flex items-center justify-center gap-6">
              <div>
                <div className="text-blue-600 text-6xl font-extrabold">
                  <CountUp end={50} duration={2} />
                </div>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  reduction in cart abandonment with automation
                </p>
              </div>
              <div className="hidden md:block w-0.5 h-20 bg-gray-300"></div>
            </div>

            {/* STAT 3 */}
            <div className="flex items-center justify-center gap-6">
              <div>
                <div className="text-blue-600 text-6xl font-extrabold">
                  <CountUp end={65} duration={2} />
                </div>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  faster order fulfillment with smart inventory
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
                  uptime for high-traffic e-commerce operations
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
              Why Retailers Choose Our E-Commerce Solutions
            </h2>

            <div className="w-full h-[3px] bg-blue-600 mt-2"></div>

            <p className="text-center md:text-left text-gray-600 mt-3 mb-10">
              Designed to boost efficiency, reduce costs, and grow online sales.
            </p>

            {/* LIST ITEMS */}
            <div className="space-y-10">

              {/* ITEM 1 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                    <FaShoppingCart />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Personalized Shopping Experience</h3>
                    <p className="text-gray-600 text-sm">
                      AI-driven recommendations show the right products to the right customers at the right time.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200 mt-6"></div>
              </div>

              {/* ITEM 2 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                    <FaBoxOpen />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Smart Inventory Management</h3>
                    <p className="text-gray-600 text-sm">
                      Predictive stock levels reduce overstocking and prevent out-of-stock losses.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200 mt-6"></div>
              </div>

              {/* ITEM 3 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                    <FaCreditCard />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Seamless & Secure Payments</h3>
                    <p className="text-gray-600 text-sm">
                      Faster checkout with multi-currency, wallet, and fraud-protected payments.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200 mt-6"></div>
              </div>

              {/* ITEM 4 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                    <FaChartLine />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Data-Driven Insights</h3>
                    <p className="text-gray-600 text-sm">
                      Real-time analytics help optimize marketing, pricing, and product strategy.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/retail-right.jpg"
              alt="Retail Illustration"
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

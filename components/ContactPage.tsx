"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-gray-800">
      {/* 🟦 Section 1: Hero Background */}
      <section className="relative h-[55vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/contact-hero.png"
          alt="Contact background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-blue-700/40 to-blue-900/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-50 max-w-2xl text-lg"
          >
            Share a few details about your project, and we’ll get back to you soon.
          </motion.p>
        </div>
      </section>

      {/* 🟩 Section 2 */}
      <section className="relative -mt-28 md:-mt-36 z-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-2xl p-8 md:p-10 border border-blue-100">
          {/* Left Info Card */}
          <div className="bg-linear-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Let’s Talk About Your Project
              </h2>
              <ul className="space-y-3 text-gray-200 text-sm">
                <li>✅ Free Consultation</li>
                <li>💬 24/7 Expert Support</li>
                <li>⏱️ On-Time Delivery</li>
              </ul>

              <div className="mt-8 space-y-2 text-sm">
                <p>📧 info@agileinnovate.com</p>
                <p>📞 9178965412</p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <form className="grid gap-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
           <select
  className="p-3 w-full border border-gray-300 rounded-lg 
             text-gray-600 bg-white cursor-pointer
             focus:outline-none focus:border-blue-500"
  defaultValue="" 
>
  <option value="" disabled className="text-gray-300">
    Select a Service
  </option>

  <option value="dapp" className="text-gray-600">Dapp Development</option>
  <option value="ai-agent" className="text-gray-600">AI Agent</option>
  <option value="ai-workflows" className="text-gray-600">AI Workflows</option>
  <option value="devops" className="text-gray-600">DevOps support AWS/GCP/Azure and others</option>
  <option value="mobile-app" className="text-gray-600">Mobile App Development</option>
  <option value="cms-web-tools" className="text-gray-600">CMS & Web Tools</option>
  <option value="informative-website" className="text-gray-600">Informative Website</option>
  <option value="ecommerce" className="text-gray-600">Ecommerce Website</option>
  <option value="crm-erp" className="text-gray-600">CRM/ERP</option>
  <option value="digital-marketing" className="text-gray-600">Digital Marketing</option>
  <option value="ui-ux" className="text-gray-600">UI/UX</option>
  <option value="graphic-designing" className="text-gray-600">Graphic Designing</option>
</select>


            </div>

            <textarea
              rows={4}
              placeholder="Project details..."
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all"
            >
              Submit 
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

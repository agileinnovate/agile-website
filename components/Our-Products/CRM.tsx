"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CRMPage() {
  return (
    <main>
      <section className="relative w-full h-[420px] flex items-center justify-center bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <Image
          src="/crm-hero.jpg"
          alt="CRM Hero"
          fill
          className="object-cover opacity-30"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Smart CRM to Grow Your Sales Faster
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mt-4">
            Manage leads, automate follow-ups, track pipelines, and convert faster
            with a powerful CRM built for modern businesses.
          </p>

          <button className="mt-6 bg-white text-blue-700 px-8 py-3 rounded-lg shadow font-semibold hover:bg-blue-100 transition">
            Book Demo
          </button>
        </motion.div>
      </section>

      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          CRM Modules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Lead Management",
            "Sales Pipeline",
            "Contact Management",
            "Activity Scheduling",
            "Email & SMS Integration",
            "Customer Segmentation",
          ].map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {module}
              </h3>
              <p className="text-gray-600">
                Powerful tools to streamline your sales and customer lifecycle.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Key CRM Features
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            "Track leads from multiple channels",
            "Visual sales pipeline with drag & drop",
            "Automated follow-up & reminders",
            "360° customer profile",
            "Team performance analytics",
            "Email, WhatsApp & SMS integration",
          ].map((feature, i) => (
            <div key={i} className="flex gap-3">
              <CheckCircle className="text-blue-700" size={28} />
              <p className="text-lg text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </section>

   
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Visual Sales Pipeline
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Manage your entire sales cycle with a simple, intuitive pipeline view.
          Track deal stages, assign team members, forecast revenue and never miss
          a follow-up again.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-blue-200"
        >
          <Image
            src="/crm-pipeline.jpg"
            alt="CRM Pipeline"
            width={1600}
            height={900}
            className="w-full"
          />
        </motion.div>
      </section>

    
      <section className="py-20 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          CRM Automation
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Automate repetitive tasks like lead assignment, follow-ups, reminders,
          email campaigns, and pipeline updates. Boost productivity and convert
          customers faster.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-blue-200"
        >
          <Image
            src="/crm-automation.jpg"
            alt="CRM Automation Workflow"
            width={1600}
            height={900}
            className="w-full"
          />
        </motion.div>
      </section>

 
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Industry Use Cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          {[
            "Real Estate",
            "Education",
            "E-Commerce",
            "Travel & Tours",
            "Healthcare",
            "B2B Sales",
            "Automobile",
            "Financial Services",
          ].map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm text-center hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {industry}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-blue-600 to-blue-800 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Boost Your Sales?
        </h2>

        <p className="max-w-2xl mx-auto text-lg mb-8">
          Get a personalized demo of our CRM system and see how it can transform
          your sales process.
        </p>

        <button className="bg-white text-blue-700 px-10 py-4 rounded-lg text-lg font-semibold shadow hover:bg-blue-100 transition">
          Book Free Demo
        </button>
      </section>
    </main>
  );
}


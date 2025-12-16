"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Billing() {
  return (
    <main>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative h-[420px] bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <Image
          src="/billing-hero.jpg"
          alt="Billing Software Hero"
          fill
          className="object-cover opacity-30"
        />

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Smart Billing & Invoicing Software
          </motion.h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4">
            Create invoices, manage stock, track payments, generate GST reports
            and automate your entire billing workflow.
          </p>

          <button className="mt-6 bg-white text-blue-700 px-8 py-3 rounded-lg shadow font-semibold hover:bg-blue-100 transition">
            Book Demo
          </button>
        </div>
      </section>

      {/* ---------------- CORE MODULES ---------------- */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Core Modules of Billing Software
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            "GST Billing & Invoicing",
            "Point of Sale (POS)",
            "Item & Stock Management",
            "Barcode & QR Code Generator",
            "Purchase & Supplier Billing",
            "Customer Credit & Ledger",
            "Expense & Profit Tracking",
            "Online Payments Integration",
            "Tax Reports & GSTR Filing",
          ].map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {module}
              </h3>
              <p className="text-gray-600">
                Manage and automate {module.toLowerCase()} efficiently.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- KEY FEATURES ---------------- */}
      <section className="py-16 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Key Features
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "One-click GST invoices & e-invoice support",
            "POS system with fast billing",
            "Barcode scanning for quicker checkout",
            "Inventory auto-update after sales",
            "Daily, weekly, monthly revenue reports",
            "Multi-branch billing system",
            "Customer loyalty & discount system",
            "Cash, UPI, Card & Wallet payment support",
            "Purchase + stock reconciliation",
          ].map((feature, i) => (
            <div className="flex gap-3" key={i}>
              <CheckCircle className="text-blue-700" size={26} />
              <p className="text-gray-700 text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- POS BILLING UI ---------------- */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Fast POS Billing
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4 mb-10">
          Process customer bills in seconds with barcode scanning, quick search,
          item suggestions, and instant payment options.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto rounded-xl shadow-xl border border-blue-200 overflow-hidden"
        >
          <Image
            src="/billing-pos.jpg"
            alt="POS Billing UI"
            width={1600}
            height={900}
          />
        </motion.div>
      </section>

      {/* ---------------- GST INVOICING UI ---------------- */}
      <section className="py-20 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700">
          GST & Professional Invoicing
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-12">
          Auto-calculate CGST, SGST, IGST. Generate branded invoices, e-way bills,
          PDF downloads, and share directly via WhatsApp or Email.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto rounded-xl shadow-lg border border-blue-200 overflow-hidden"
        >
          <Image
            src="/billing-invoice.jpg"
            alt="Invoice UI"
            width={1600}
            height={900}
          />
        </motion.div>
      </section>

      {/* ---------------- INVENTORY UI ---------------- */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Advanced Inventory & Stock Tracking
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4 mb-10">
          Auto-manage stock levels, low stock alerts, expiry tracking, purchase
          orders, and supplier billing.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto rounded-xl shadow-lg border border-blue-200 overflow-hidden"
        >
          <Image
            src="/billing-inventory.jpg"
            alt="Inventory UI"
            width={1600}
            height={900}
          />
        </motion.div>
      </section>

      {/* ---------------- INDUSTRY USE CASES ---------------- */}
      <section className="py-20 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Suitable For Every Business Type
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Retail Stores",
            "Supermarkets",
            "Pharmacies",
            "Restaurants",
            "Garment & Footwear Shops",
            "Electronics Stores",
            "Wholesale Distributors",
            "Hardware & Tools Shops",
          ].map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl text-center border border-blue-200 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Automate Your Billing?
        </h2>

        <p className="max-w-2xl mx-auto text-lg mb-8">
          Experience the fastest billing and complete business automation. Book a demo today.
        </p>

        <button className="bg-white text-blue-700 px-10 py-4 rounded-lg text-lg font-semibold shadow hover:bg-blue-100 transition">
          Book Free Demo
        </button>
      </section>

    </main>
  );
}

"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Odoo() {
  return (
    <main className="w-full">

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative w-full h-[420px] flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <Image
          src="/odoo-hero.jpg"
          alt="Odoo ERP"
          fill
          className="object-cover opacity-30"
        />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Odoo ERP — All-In-One Business Solution
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Automate, streamline and transform your business with custom Odoo ERP
            development and implementation.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100">
              Book Demo
            </button>
            <button className="border border-white px-6 py-3 rounded-lg text-white">
              Explore Modules
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- What is Odoo ERP ---------------- */}
      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">What is Odoo ERP?</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Odoo is a suite of 50+ business applications including CRM, Inventory,
          Accounting, HR, Manufacturing, and E-Commerce. It offers complete
          customization and automation for all business sizes.
        </p>
      </section>

      {/* ---------------- Key Modules ---------------- */}
      <section className="py-16 bg-blue-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700">
          Odoo ERP Key Modules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            "CRM",
            "Inventory & Warehouse",
            "Accounting & Finance",
            "HR & Payroll",
            "Manufacturing (MRP)",
            "Sales & Purchase",
            "E-Commerce",
            "Project Management",
            "POS System",
          ].map((module, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{module}</h3>
              <p className="text-gray-600">
                Explore complete automation and workflows for {module}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Why Choose Us ---------------- */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700">
          Why Choose Us for Odoo ERP?
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {[
            "100% customizable Odoo ERP solution",
            "Fast delivery and affordable pricing",
            "Certified Odoo developers",
            "Cloud & On-Premise deployment",
            "Real-time dashboards & automation",
            "24/7 technical support",
          ].map((item, i) => (
            <div className="flex gap-3 items-start" key={i}>
              <CheckCircle className="text-blue-600 mt-1" size={26} />
              <p className="text-gray-700 text-lg">{item}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ---------------- Implementation Process ---------------- */}
      <section className="py-16 bg-blue-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700">
          Our Odoo Implementation Process
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            "Requirement Analysis",
            "Solution Planning",
            "Custom Development",
            "Data Migration",
            "Training & Go-Live",
            "Maintenance & Support",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </h3>
              <p className="text-gray-700 text-lg font-medium">{step}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center px-6">
        <h2 className="text-4xl font-semibold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Get a free consultation and discover how Odoo ERP can automate and elevate your business.
        </p>

        <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow hover:bg-blue-100 transition">
          Book Free Demo
        </button>
      </section>
    </main>
  );
}

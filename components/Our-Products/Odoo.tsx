"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Odoo() {
  return (
    <main className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative bg-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 bg-blue-50 rounded-full blur-3xl opacity-70"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-widest text-blue-600 font-medium mb-4">
              Odoo ERP Experts
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              Transform Your Business with
              <span className="block text-blue-600">
                Smart Odoo ERP Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              We implement, customize, and optimize Odoo ERP to streamline
              operations, increase productivity, and drive scalable growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                Book Free Consultation
              </button>

              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                View Modules
              </button>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="rounded-4xl overflow-hidden shadow-xl w-137.5 h-100">
              <Image
                src="/odoo-erp.webp"
                alt="Odoo ERP"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What is Odoo ERP?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Odoo is a powerful suite of 50+ integrated business applications
            including CRM, Inventory, Accounting, HR, Manufacturing, and
            E-Commerce. It enables complete business automation under one
            unified platform.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-800">
              Core Odoo Modules We Implement
            </h2>
            <p className="text-gray-500 mt-4">
              End-to-end ERP solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "CRM",
              "Inventory Management",
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
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {module}
                </h3>
                <p className="text-gray-600">
                  Fully customized workflows and automation for {module}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Our Odoo ERP Services?
            </h2>

            <div className="space-y-5">
              {[
                "Fully customizable ERP solutions",
                "Certified Odoo developers",
                "Cloud & On-Premise deployment",
                "Real-time dashboards & automation",
                "Affordable & scalable pricing",
                "Dedicated long-term support",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle className="text-blue-600 mt-1" size={22} />
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/odoo-openerp.png"
              alt="Odoo Implementation"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-14">
            Our Implementation Process
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
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
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="text-blue-600 text-4xl font-bold mb-4">
                  {`0${i + 1}`}
                </div>
                <p className="text-lg font-medium text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-blue-800 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg mb-8 text-blue-200">
            Let’s build a scalable Odoo ERP system tailored to your business.
          </p>

          <button className="bg-white text-blue-800 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition">
            Schedule Free Demo
          </button>
        </div>
      </section>
    </main>
  );
}

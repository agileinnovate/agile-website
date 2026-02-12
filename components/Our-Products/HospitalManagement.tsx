"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HospitalManagement() {
  return (
    <main>
      {/* ------------------------------------------------ */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------ */}
      <section className="relative h-105 bg-linear-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <Image
          src="/hospital-hero.jpg"
          alt="Hospital Management Hero"
          fill
          className="object-cover opacity-30"
        />

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Smart Hospital Management System
          </motion.h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4">
            Manage patients, doctors, appointments, billing, pharmacy, labs &
            operations with a unified healthcare management platform.
          </p>

          <button className="mt-6 bg-white text-blue-700 px-8 py-3 rounded-lg shadow font-semibold hover:bg-blue-100 transition">
            Book Demo
          </button>
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* CORE MODULES */}
      {/* ------------------------------------------------ */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Core Hospital Modules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Patient Registration & OPD",
            "Doctor & Appointment Scheduling",
            "Electronic Medical Records (EMR)",
            "IPD Admission & Bed Management",
            "Pharmacy Management",
            "Billing & Invoicing",
            "Laboratory Management",
            "Radiology & Diagnostics",
            "Nursing & Ward Management",
          ].map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">{module}</h3>
              <p className="text-gray-600 mt-2">
                Essential tools to digitize hospital operations.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* KEY FEATURES */}
      {/* ------------------------------------------------ */}
      <section className="py-16 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Key Features of HMS
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Centralized patient record management",
            "Doctor-wise appointment calendar",
            "Integrated pharmacy & inventory",
            "Automated billing & insurance support",
            "Lab test ordering & report generation",
            "Paperless digital medical records",
            "Doctor & nurse allocation to wards",
            "Real-time bed occupancy tracking",
            "Mobile app for doctors & patients",
          ].map((feature, i) => (
            <div className="flex gap-3" key={i}>
              <CheckCircle className="text-blue-700" size={26} />
              <p className="text-gray-700 text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* PATIENT MANAGEMENT UI */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Patient Management Dashboard
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Track patient visits, medical history, prescriptions, lab results,
          allergies, and previous treatments in one centralized EMR system.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto shadow-xl rounded-xl overflow-hidden border border-blue-200"
        >
          <Image
            src="/hospital-patient.jpg"
            alt="Patient Management UI"
            width={1600}
            height={900}
          />
        </motion.div>
      </section>

      {/* ------------------------------------------------ */}
      {/* DOCTOR & APPOINTMENT UI */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Doctor & Appointment Scheduling
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Allow patients to book appointments online while doctors manage their
          daily schedules through a dynamic calendar interface.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-blue-200"
        >
          <Image
            src="/hospital-appointment.jpg"
            alt="Appointment Dashboard"
            width={1600}
            height={900}
          />
        </motion.div>
      </section>

      {/* ------------------------------------------------ */}
      {/* BILLING & PHARMACY UI */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Billing, Pharmacy & Inventory
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Manage pharmacy stock, invoices, taxes, insurance claims, and payments
          with automated billing workflows.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto rounded-xl shadow-lg border border-blue-200 overflow-hidden"
        >
          <Image
            src="/hospital-billing.jpg"
            alt="Billing UI"
            width={1600}
            height={900}
          />
        </motion.div>
      </section>

      {/* ------------------------------------------------ */}
      {/* INDUSTRY USE CASES */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Suitable For All Healthcare Institutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Hospitals",
            "Clinics",
            "Diagnostic Centers",
            "Nursing Homes",
            "Blood Banks",
            "Rehabilitation Centers",
            "Multi-speciality Hospitals",
            "Telemedicine Providers",
          ].map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl text-center border border-blue-200 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {industry}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* CTA SECTION */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-linear-to-br from-blue-600 to-blue-800 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Digitize Your Hospital?
        </h2>

        <p className="max-w-2xl mx-auto text-lg mb-8">
          Experience a complete hospital automation system. Book a personalized
          demo today.
        </p>

        <button className="bg-white text-blue-700 px-10 py-4 rounded-lg text-lg font-semibold shadow hover:bg-blue-100 transition">
          Book Free Demo
        </button>
      </section>
    </main>
  );
}

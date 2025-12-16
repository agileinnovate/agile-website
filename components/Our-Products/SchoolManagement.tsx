"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function SchoolManagement() {
  return (
    <main>

      {/* ------------------------------------------------ */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------ */}
      <section className="relative h-[420px] bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <Image
          src="/school-hero.jpg"
          alt="School Management Hero"
          fill
          className="object-cover opacity-30"
        />

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Smart School Management System
          </motion.h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4">
            Manage students, teachers, attendance, exams, fees, and online learning — 
            all from a single intelligent dashboard.
          </p>

          <button className="mt-6 bg-white text-blue-700 px-8 py-3 rounded-lg shadow font-semibold hover:bg-blue-100 transition">
            Book Demo
          </button>
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* SCHOOL MODULES */}
      {/* ------------------------------------------------ */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Core Modules Included
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Student Information System (SIS)",
            "Attendance Management",
            "Online Classes & LMS",
            "Time Table & Scheduling",
            "Fees Management & Billing",
            "Exam & Result Management",
            "Teacher & Staff Management",
            "Parent Portal & Mobile App",
            "Transport Management",
          ].map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">{module}</h3>
              <p className="text-gray-600 mt-2">
                Complete module to simplify school operations.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* FEATURES */}
      {/* ------------------------------------------------ */}
      <section className="py-16 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Key Features
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Centralized student database",
            "Automated attendance tracking",
            "Digital assignments & homework",
            "Timetable automation",
            "Online exam & report card generation",
            "Role-based access control",
            "Teacher performance analytics",
            "Parent communication app",
            "Secure cloud backups",
          ].map((feature, i) => (
            <div className="flex gap-3" key={i}>
              <CheckCircle className="text-blue-700" size={26} />
              <p className="text-gray-700 text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* SIS (STUDENT PROFILE) UI */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Student Information System (SIS)
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Manage complete student records including personal details, academics,
          attendance, fees, ID cards, health records and more.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto shadow-xl rounded-xl overflow-hidden border border-blue-200"
        >
          <Image
            src="/school-sis.jpg"
            alt="School SIS UI"
            width={1600}
            height={900}
          />
        </motion.div>
      </section>

      {/* ------------------------------------------------ */}
      {/* TIMETABLE & ATTENDANCE UI */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Timetable & Attendance Tracking
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Auto-generate timetables and instantly track attendance with biometric,
          QR code or mobile-based systems.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-blue-200"
        >
          <Image
            src="/school-attendance.jpg"
            alt="Attendance Dashboard"
            width={1600}
            height={900}
          />
        </motion.div>
      </section>

      {/* ------------------------------------------------ */}
      {/* FEES MANAGEMENT UI */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Fees & Billing Management
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Track payments, send reminders, manage fee structures, late fines and
          generate invoices with one click.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto rounded-xl shadow-lg border border-blue-200 overflow-hidden"
        >
          <Image
            src="/school-fees.jpg"
            alt="Fees Dashboard"
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
          Industry Use Cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Schools",
            "Colleges",
            "Coaching Institutes",
            "Universities",
            "Training Centers",
            "Online Academies",
            "NGO Educational Programs",
            "Skill Development Centers",
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

      {/* ------------------------------------------------ */}
      {/* CTA SECTION */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Digitize Your School?
        </h2>

        <p className="max-w-2xl mx-auto text-lg mb-8">
          Get a personalized demo and see how our School Management System can simplify operations.
        </p>

        <button className="bg-white text-blue-700 px-10 py-4 rounded-lg text-lg font-semibold shadow hover:bg-blue-100 transition">
          Book Free Demo
        </button>
      </section>

    </main>
  );
}

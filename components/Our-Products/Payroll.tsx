"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Payroll() {
  return (
    <main>

      {/* ------------------------------------------------ */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------ */}
      <section className="relative h-[420px] bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <Image
          src="/hr-hero.jpg"
          alt="HR & Payroll Hero"
          fill
          className="object-cover opacity-30"
        />

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            HR & Payroll Management System
          </motion.h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4">
            Automate HR operations, manage employees, process accurate payroll,
            track attendance, and improve workforce productivity.
          </p>

          <button className="mt-6 bg-white text-blue-700 px-8 py-3 rounded-lg shadow font-semibold hover:bg-blue-100 transition">
            Book Demo
          </button>
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* CORE HR MODULES */}
      {/* ------------------------------------------------ */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          HR & Payroll Modules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            "Employee Management (HRMS)",
            "Attendance & Shift Management",
            "Payroll Processing",
            "Leave & Holiday Management",
            "Performance & Appraisal",
            "Recruitment & Onboarding",
            "Expense Claims & Travel Requests",
            "Timesheet & Work Hours Tracking",
            "Document & Compliance Management",
          ].map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{module}</h3>
              <p className="text-gray-600">
                Complete module for modern HR automation.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* HR FEATURES */}
      {/* ------------------------------------------------ */}
      <section className="py-16 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          HR & Payroll Key Features
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Automated salary calculation with tax & deductions",
            "Employee profile with documents & history",
            "Biometric, QR or GPS attendance tracking",
            "Shift scheduling & overtime management",
            "Leave approval workflow",
            "Bonus, incentives & reimbursement tracking",
            "Auto-generated payslips & reports",
            "ESI, PF, TDS & compliance-ready payroll",
            "Self-service portal for employees",
          ].map((feature, i) => (
            <div className="flex gap-3" key={i}>
              <CheckCircle className="text-blue-700" size={26} />
              <p className="text-gray-700 text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* EMPLOYEE PROFILE UI */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Employee Profile & HRMS Dashboard
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A centralized HRMS dashboard for managing employee details, attendance,
          documents, appraisals, leaves, payroll history and more.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl border border-blue-200"
        >
          <Image
            src="/hr-dashboard.jpg"
            alt="HR Dashboard"
            width={1600}
            height={900}
          />
        </motion.div>
      </section>

      {/* ------------------------------------------------ */}
      {/* PAYROLL UI */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Payroll Processing & Salary Slip
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Generate accurate salary slips with automated calculations for tax,
          allowances, overtime, deductions, PF/ESI, bonuses & reimbursement.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg border border-blue-200"
        >
          <Image
            src="/hr-payroll.jpg"
            alt="Payroll UI"
            width={1600}
            height={900}
          />
        </motion.div>
      </section>

      {/* ------------------------------------------------ */}
      {/* ATTENDANCE & SHIFT UI */}
      {/* ------------------------------------------------ */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Attendance, Shifts & Leave Management
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Track employee attendance in real-time through biometric devices or
          mobile check-in, and manage shifts, holidays, and leave applications.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-blue-200"
        >
          <Image
            src="/hr-attendance.jpg"
            alt="Attendance UI"
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
          Suitable For All Industries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "IT Companies",
            "Manufacturing",
            "Retail Stores",
            "Hospitals & Clinics",
            "Schools & Universities",
            "Construction Companies",
            "Call Centers & BPO",
            "Corporate Offices",
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
          Ready to Automate Your HR & Payroll?
        </h2>

        <p className="max-w-2xl mx-auto text-lg mb-8">
          Get a personalized demo and experience how automation improves workforce productivity.
        </p>

        <button className="bg-white text-blue-700 px-10 py-4 rounded-lg text-lg font-semibold shadow hover:bg-blue-100 transition">
          Book Free Demo
        </button>
      </section>

    </main>
  );
}

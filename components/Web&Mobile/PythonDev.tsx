"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type TabKey = "frameworks" | "databases" | "deployment";

interface StackItem {
  title: string;
  desc: string;
  icon: string | StaticImport;
}

export default function PythonDev() {
  const [activeTab, setActiveTab] = useState<TabKey>("frameworks");

  // Tabs
  const tabs: { key: TabKey; label: string }[] = [
    { key: "frameworks", label: "Frameworks" },
    { key: "databases", label: "Databases" },
    { key: "deployment", label: "Deployment" },
  ];

  // Framework Data
  const frameworkData: StackItem[] = [
    {
      title: "Django REST Framework",
      desc: "Perfect for complex, database-driven APIs with built-in admin and ORM.",
      icon: "/dj.svg",
    },
    {
      title: "FastAPI",
      desc: "Modern, fast (high-performance) web framework for building APIs with Python 3.7+.",
      icon: "/fastapi.svg",
    },
    {
      title: "Flask",
      desc: "Microframework for lightweight API services with minimal overhead.",
      icon: "/flask.svg",
    },
  ];

  // Database Data
  const databaseData = [
    {
      title: "PostgreSQL",
      desc: "Reliable, open-source relational database system with advanced performance and security.",
      icon: "/postgresql.svg",
    },
    {
      title: "MongoDB",
      desc: "NoSQL database for fast, flexible, and scalable data management with dynamic schemas.",
      icon: "/mongodb.svg",
    },
    {
      title: "Redis",
      desc: "In-memory key-value store for caching, session management, and fast data retrieval.",
      icon: "/redis.svg",
    },
  ];

  // Deployment Data
  const deploymentData = [
    {
      title: "Docker",
      desc: "Containerization platform for packaging and running Python applications seamlessly.",
      icon: "/docker.svg",
    },
    {
      title: "Kubernetes",
      desc: "Orchestrates containerized applications for automatic deployment and scalability.",
      icon: "/kubernets.svg",
    },
    {
      title: "AWS / Azure",
      desc: "Cloud hosting solutions providing scalability, performance, and reliability for your apps.",
      icon: "/aws.svg",
    },
  ];


   const steps = [
    {
      no: "1",
      title: "Requirement Analysis",
      desc: "We conduct in-depth discussions to understand your business needs and technical requirements.",
    },
    {
      no: "2",
      title: "Architecture Design",
      desc: "Our experts design scalable API architecture with proper documentation and versioning strategy.",
    },
    {
      no: "3",
      title: "Development & Testing",
      desc: "Agile development with continuous integration and comprehensive test coverage.",
    },
    {
      no: "4",
      title: "Deployment & Monitoring",
      desc: "CI/CD pipeline setup with performance monitoring and analytics integration.",
    },
    {
      no: "5",
      title: "Maintenance & Support",
      desc: "Ongoing support, updates, and enhancements to keep your API performing at its best.",
    },
  ];

  const tabData = {
    frameworks: frameworkData,
    databases: databaseData,
    deployment: deploymentData,
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="text-gray-900 text-5xl md:text-6xl font-extrabold leading-tight">
              Expert Python <br />
              Development <br />
              Services
            </h1>

            <p className="text-gray-700 text-xl leading-relaxed max-w-xl">
              Building scalable, high-performance Python solutions tailored to
              your business needs.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
                Get a Free Consultation
              </button>

              <button className="px-8 py-3 text-lg font-semibold text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition-all">
                Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center pt-20">
            <div className="relative w-full max-w-[600px] h-[380px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/python.jpg"
                alt="Python Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/*TECHNOLOGY STACK SECTION */}
      <section className="py-24 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-center text-4xl font-extrabold text-gray-900">
            Our Python API Technology Stack
          </h2>

          <p className="text-center text-gray-600 text-lg mt-2">
            We use the best tools for your specific requirements
          </p>

          {/* TABS */}
          <div className="flex justify-center gap-10 mt-8">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`pb-1 text-md font-semibold ${
                  activeTab === t.key
                    ? "text-gray-800 border-b-2 border-blue-700"
                    : "text-gray-500 hover:text-blue-700"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {tabData[activeTab].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl px-10 p-8 text-center hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="flex justify-center mb-4 mt-2">
                  <Image
                    src={item.icon}
                    alt={String(item.title)}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


<section className="w-full bg-[#f8f9fc] py-10">
  <div className="max-w-9xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
      Why Choose Python for Backend Development?
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-md">
      Python offers unmatched flexibility, rapid development, high security,
      and powerful frameworks for scalable backend systems.
    </p>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4"
    >
      {[
        { number: "1M+", text: "APIs Served Daily" },
        { number: "40%", text: "Faster Development Time" },
        { number: "12+", text: "Years of Python Expertise" },
      ].map((tab, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.08 }}
          className="bg-white shadow-md px-10 py-6 rounded-xl"
        >
          <h3 className="text-3xl font-bold text-blue-700">{tab.number}</h3>
          <p className="text-gray-600 text-sm mt-2">{tab.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>

  <div className="w-full flex justify-center mt-10 px-6">
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl overflow-hidden shadow-xl w-full max-w-[1000px]"
    >
      <Image
        src="/python1.png"
        alt="Python Development Banner"
        width={1000}
        height={600}
        className="object-cover w-full h-auto"
      />
    </motion.div>
  </div>
</section>



      <section className="relative bg-gray-100 text-black py-24 overflow-hidden">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-4">
            Our Python API Development Process
          </h2>
          <p className="text-gray-900 text-lg">
            A proven methodology for delivering exceptional results
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-blue-500 pl-10 space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex gap-10 items-start">
              {/* Step Circle */}
              <div className="absolute -left-[1.9rem] w-10 h-10 flex items-center justify-center 
                border-2 border-black rounded-full bg-transparent font-bold text-lg">
                {step.no}
              </div>

              {/* Step Content */}
              <div className="px-12">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {step.title}
                </h3>
                <p className="text-gray-900  text-md">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

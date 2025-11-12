"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";

export default function PythonDev() {
  const [activeTab, setActiveTab] = useState("frameworks");

  // Tabs
  const tabs = [
    { key: "frameworks", label: "Frameworks" },
    { key: "databases", label: "Databases" },
    { key: "deployment", label: "Deployment" },
  ];

  // Framework Data
  const frameworkData = [
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

  // Active tab mapping
  const tabData = {
    frameworks: frameworkData,
    databases: databaseData,
    deployment: deploymentData,
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
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
                src="/python.png"
                alt="Python Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY STACK SECTION ===== */}
      <section className="py-24 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* SECTION TITLE */}
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
            {tabData[activeTab].map((item: { icon: string | StaticImport; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; desc: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, idx: Key | null | undefined) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl px-10  p-8 text-center hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="flex justify-center mb-4 mt-2">
                  <Image
                    src={item.icon}
                    alt={item.title}
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
    </>
  );
}

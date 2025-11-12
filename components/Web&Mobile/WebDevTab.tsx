"use client";

import { useState } from "react";
import Image from "next/image";

// ----- 4 TAB DATA -----
const tabs = [
  {
    id: "custom",
    label: "Custom Development",
    title: "Bespoke Web Applications",
    desc: "We specialize in building custom web applications designed specifically for your business requirements. Our team leverages the latest technologies to create scalable, maintainable solutions that grow with your business.",
    image: "/custom.avif", // replace with your image
    bullets: [
      "Custom business applications",
      "SPA – Single Page Applications",
      "Database-driven solutions",
      "Progressive Web Apps (PWA)",
      "Real-time collaboration tools",
    ],
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    title: "E-Commerce Solutions",
    desc: "Transform your online store with our powerful e-commerce development services. We build secure, high-converting platforms that deliver exceptional shopping experiences.",
    image: "/e-commerce.jpg",
    bullets: [
      "Custom Shopify themes and apps",
      "WooCommerce development",
      "Headless e-commerce architecture",
      "Payment gateway integration",
      "Inventory management systems",
    ],
  },
  {
    id: "cms",
    label: "CMS Development",
    title: "Content Management Systems",
    desc: "Empower your team with intuitive content management systems that make website updates effortless while maintaining design integrity.",
    image: "/cms.png",
    bullets: [
      "WordPress custom development",
      "Custom admin dashboards",
      "Content workflow automation",
      "Headless CMS implementation",
      "Multi-site management",
    ],
  },
  {
    id: "api",
    label: "API Integration",
    title: "API Development & Integration",
    desc: "Connect your web applications with third-party services and internal systems through robust API solutions.",
    image: "/api.avif",
    bullets: [
      "RESTful API development",
      "Third-party API integration",
      "Webhook configuration",
      "GraphQL implementation",
      "Microservices architecture",
    ],
  },
];

export default function WebDevTab() {
  const [active, setActive] = useState("custom");

  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 ">

        {/* ---------- TABS ---------- */}
        <div className="flex justify-between border-b border-gray-300 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative pb-6 text-lg font-semibold transition 
                ${
                  active === tab.id
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }
              `}
            >
              {tab.label}

              {/* Underline */}
              {active === tab.id && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-600 rounded-full mb-7"></span>
              )}
            </button>
          ))}
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {current.title}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              {current.desc}
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {current.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mt-1"></span>
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

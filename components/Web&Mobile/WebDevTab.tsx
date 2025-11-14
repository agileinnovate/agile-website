  "use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "custom",
    label: "Custom Development",
    title: "Bespoke Web Applications",
    desc: "We specialize in building custom web applications designed specifically for your business requirements. Our team leverages the latest technologies to create scalable, maintainable solutions that grow with your business.",
    image: "/custom.avif",
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
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* MOBILE: vertical list */}
        <div className="block sm:hidden w-full border-b pb-4 space-y-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              aria-pressed={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative w-full text-left px-4 py-3 rounded-md transition-all
                ${active === tab.id ? "text-blue-700" : "text-gray-700 hover:text-blue-600"}
              `}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-base">{tab.label}</span>
              </div>

              {/* Underline for active mobile tab */}
              {active === tab.id && (
                <span className="absolute left-0 bottom-0 w-full h-1.5 bg-blue-600 rounded-t-md"></span>
              )}
            </button>
          ))}
        </div>

        {/* DESKTOP: horizontal row */}
        <div className="hidden sm:flex items-center gap-10 border-b border-gray-300 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              aria-pressed={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative pb-4 text-lg font-semibold transition
                ${active === tab.id ? "text-blue-600" : "text-gray-600 hover:text-blue-500"}
              `}
            >
              {tab.label}
              {active === tab.id && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* ---------- CONTENT GRID ---------- */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image Section */}
          <div className="relative w-full h-[240px] sm:h-[300px] md:h-[380px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              {current.title}
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              {current.desc}
            </p>

            {/* Bullets */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {current.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-600 rounded-full mt-1"></span>
                  <span className="text-gray-700 text-sm sm:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

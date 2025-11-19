"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DevelopmentProcess from "../Web&Mobile/DevelopmentProcess";

export default function NextJSPage() {
  const items = [
    {
      icon: "/next.jpg",
      title: "Custom Next.js Web Applications",
      desc: "Fast, scalable, and modern web applications using Next.js App Router, SSR, ISR, metadata API, and advanced caching.",
    },
    {
      icon: "/API.png",
      title: "SEO-Optimized Web Platforms",
      desc: "Boost your traffic with automatic SEO optimization, metadata generation, dynamic sitemap, and lightning-fast page loads.",
    },
    {
      icon: "/react3.png",
      title: "API Routes & Backend Integration",
      desc: "Build full-stack functionality using Next.js API Routes, server actions, middleware, and secure backend logic.",
    },
    {
      icon: "/realtime.png",
      title: "Optimized Deployment on Vercel",
      desc: "Deploy globally with edge networks, automatic scaling, serverless functions, and ultra-fast performance on Vercel.",
    },
    {
      icon: "/TPO.png",
      title: "Image Optimization & Performance",
      desc: "Deliver perfect image optimization, route-level caching, and 90+ Lighthouse performance scores effortlessly.",
    },
    {
      icon: "/CID.png",
      title: "Next.js for eCommerce",
      desc: "Build blazing-fast ecommerce systems with dynamic routing, payments, product pages, and headless CMS integrations.",
    },
  ];

  return (
    <>
     
      <section className="w-full bg-[#f7f8fc] py-34">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
              Build High-Performance <br /> Web Apps with Next.js
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              We create modern, SEO-optimized, fast, and scalable web applications using 
              Next.js — the most powerful React framework used by global brands.
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:bg-blue-800 transition"
            >
              Get Started
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 1.3 }}>
              <Image
                src="/next1.webp"
                alt="Next.js Development Banner"
                width={580}
                height={550}
                className="object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </motion.div>

        </div>
      </section>

      <section className="w-full bg-[#f8f9fc] py-10">
        <div className="max-w-9xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Choose Next.js for Your Application?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-md">
            Next.js offers best-in-class performance, SSR, SEO advantages, and the fastest developer experience.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4"
          >
            {[
              { number: "95+", text: "Lighthouse Score" },
              { number: "SEO+", text: "Optimized for Search Engines" },
              { number: "10x", text: "Faster Page Loads" },
            ].map((tab, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="bg-white shadow-md px-10 py-6 rounded-xl"
              >
                <h3 className="text-3xl font-extrabold text-blue-700">{tab.number}</h3>
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
              src="/next3.png"
              alt="Next.js Large Banner"
              width={1000}
              height={500}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#f4f6fb] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            End-to-End Next.js Development Services
          </h2>

          <p className="text-center text-md text-gray-700 mb-8">
            Scalable, secure, and modern web apps — built for performance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center"
              >
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#eef2ff] mb-4">
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.title}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-blue-800 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      <section>
        <DevelopmentProcess />
      </section>
    </>
  );
}

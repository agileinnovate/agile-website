"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DevelopmentProcess from "../Web&Mobile/DevelopmentProcess";

export default function MongoDB() {
  const items = [
    {
      icon: "/mongodb.svg",
      title: "Custom MongoDB Database Design",
      desc: "Schema design and optimized document structures tailored for scalable and high-performance applications.",
    },
    {
      icon: "/API.png",
      title: "CRUD Operations & Data Modeling",
      desc: "Efficient data modeling, indexing, and optimized CRUD operations for lightning-fast query performance.",
    },
    {
      icon: "/react3.png",
      title: "Aggregation Pipelines",
      desc: "Powerful data aggregation, analytics pipelines, and real-time data transformations using MongoDB Aggregation Framework.",
    },
    {
      icon: "/realtime.png",
      title: "Real-Time Data & Change Streams",
      desc: "Build real-time dashboards, tracking systems, and analytics using MongoDB Change Streams & WebSocket integrations.",
    },
    {
      icon: "/TPO.png",
      title: "Performance Tuning & Indexing",
      desc: "Query optimization, indexing strategies, sharding, and replication for maximum database performance.",
    },
    {
      icon: "/CID.png",
      title: "MongoDB Atlas Deployment",
      desc: "Enterprise-grade cloud deployment, backups, scaling, and automated monitoring with MongoDB Atlas.",
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
              Build Scalable Databases <br /> with MongoDB
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              We build high-performance, flexible, and secure database architectures using MongoDB.
              Power your applications with modern NoSQL storage, real-time processing, and horizontal scaling.
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
                src="/mongodb.webp"
                alt="MongoDB Hero"
                width={620}
                height={580}
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

        </div>
      </section>

      <section className="w-full bg-[#f8f9fc] py-10">
        <div className="max-w-9xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Choose MongoDB?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-md">
            MongoDB provides unmatched flexibility, scalability, and powerful data processing capabilities
            for modern applications.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4"
          >
            {[
              { number: "1B+", text: "Documents Processed Daily" },
              { number: "99.99%", text: "Cluster Uptime on Atlas" },
              { number: "10TB+", text: "Data Scaled Seamlessly" },
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

        {/* BIG IMAGE */}
        <div className="w-full flex justify-center mt-10 px-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-xl w-full max-w-[1000px]"
          >
            <Image
              src="/mongodb2.jpg"
              alt="MongoDB Big Banner"
              width={1000}
              height={550}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </section>
      
      <section className="w-full bg-[#f4f6fb] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            End-to-End MongoDB Development Services
          </h2>

          <p className="text-center text-md text-gray-700 mb-8">
            Build secure, scalable, and high-performance database solutions.
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DevelopmentProcess from "../Web&Mobile/DevelopmentProcess";

export default function NodeJS() {

  const items = [
    {
      icon: "/nodejs.png",
      title: "Custom Framework Development",
      desc: "High-performance, secure, and scalable server-side applications built using Express.js, NestJS, and modern Node.js tooling.",
    },
    {
      icon: "/API.png",
      title: "API Development & Integration",
      desc: "Robust RESTful & GraphQL APIs using Express.js, Axios, Apollo Server, and real-time integrations.",
    },
    {
      icon: "/react3.png",
      title: "Microservices Architecture",
      desc: "Build modular, independent services with Docker, Kubernetes, and load-balanced Node.js microservices.",
    },
    {
      icon: "/realtime.png",
      title: "Real-time Applications",
      desc: "Real-time dashboards, chat apps, and live tracking using WebSockets, Socket.io, Redis, and event streaming.",
    },
    {
      icon: "/TPO.png",
      title: "Performance Optimization",
      desc: "Optimize backend speed, reduce server loads, improve caching, & increase throughput using Redis and clustering.",
    },
    {
      icon: "/CID.png",
      title: "CI/CD & Cloud Deployment",
      desc: "Deploy Node.js apps to AWS, GCP, DigitalOcean, Vercel, and Dockerized pipelines for automated scaling.",
    },
  ];

  return (
    <>
      <section className="w-full bg-[#f7f8fc] py-34">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
              Build Scalable Backends with <br /> Modern Node.js Technologies
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              We build blazing-fast, scalable, and secure backend systems using Node.js,
              Express.js, NestJS, and cutting-edge server-side technologies ideal for startups
              and enterprise applications.
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:bg-blue-800 transition"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 1.3 }}>
              <Image
                src="/node1.png"
                alt="NodeJS Backend Image"
                width={580}
                height={550}
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#f8f9fc] py-10">
        <div className="max-w-9xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Choose Node.js for Backend Development?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-md">
            Node.js offers unmatched performance, scalability, and developer productivity
            for building next-generation backend systems.
          </p>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4"
          >
            {[
              { number: "500K+", text: "Requests Handled Daily" },
              { number: "98%", text: "Faster API Response Times" },
              { number: "15+", text: "Years of Backend Expertise" },
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
              src="/node2.jpg"
              alt="NodeJS Large Banner"
              width={1000}
              height={600}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Node Features Section */}
      <section className="w-full bg-[#f4f6fb] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            End-to-End Node.js Development Services
          </h2>

          <p className="text-center text-md text-gray-700 mb-8">
            Powerful backend solutions designed for performance, flexibility, and scale.
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

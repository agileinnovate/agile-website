"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DevelopmentProcess from "../Web&Mobile/DevelopmentProcess";

export default function TechHero() {
  const items = [
    {
      icon: "/react2.svg",
      title: "Custom React Application Development",
      desc: "Tailored React.js solutions built from the ground up to fit your specific business workflows and UX needs.",
    },
    {
      icon: "/API.png",
      title: "API Integration & Data Handling",
      desc: "Efficient integration with RESTful and GraphQL APIs using Axios, React Query, or Apollo for dynamic data flows.",
    },
    {
      icon: "/react3.png",
      title: "Migration to React",
      desc: "Seamless migration from legacy frontends to React for enhanced performance, interactivity, and scalability.",
    },
    {
      icon: "/realtime.png",
      title: "Real-time Interface Development",
      desc: "Build real-time UIs using WebSockets, Firebase, or third-party tools for collaborative and live data interfaces.",
    },
    {
      icon: "/TPO.png",
      title: "Testing & Performance Optimization",
      desc: "Robust testing using Jest and React Testing Library, plus fine-tuning for speed, accessibility, and responsiveness.",
    },
    {
      icon: "/CID.png",
      title: "CI/CD & Deployment",
      desc: "React build automation, containerization with Docker, and deployment to Vercel, Netlify, or cloud platforms.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
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
              Build Faster with <br /> Modern Technologies
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              We develop high-performance, scalable, and modern digital products
              using the latest frameworks and technologies that power global
              brands and innovative startups.
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
                src="/ReactJS.jpg"
                alt="Technology Hero"
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
            Our React Development Expertise
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-md">
            We specialize in building powerful and dynamic web applications using
            React.js, Next.js, Redux, and related libraries.
          </p>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4"
          >
            {[
              { number: "10+", text: "Industries Served with React" },
              { number: "20", text: "Countries Served" },
              { number: "15+", text: "Years of Frontend Expertise" },
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

        {/* IMAGE SECTION */}
        <div className="w-full flex justify-center mt-10 px-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-xl w-full max-w-[1200px]"
          >
            <Image
              src="/react-banner.jpg"
              alt="React Banner"
              width={1200}
              height={600}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

    
      <section className="w-full bg-[#f4f6fb] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            Our React Development Expertise
          </h2>
          <p className="text-center text-md text-gray-700 mb-8">Comprehensive React solutions tailored to your business requirements</p>

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
                {/* Icon Circle */}
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#eef2ff] mb-4">
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.title}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-blue-800 leading-snug">{item.title}</h3>

                <p className="text-gray-600 text-sm mt-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <DevelopmentProcess/>
      </section>
    </>
  );
}

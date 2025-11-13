"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiDjango,
  SiFlask,
  SiExpress,
  SiAngular,
  SiFastapi,
} from "react-icons/si";

export default function Framework() {
  return (
    <main className="overflow-x-hidden bg-[#050505] text-white">
      {/* 🟢 Section 1: Hero */}
     <section className="relative h-[98vh] flex items-center justify-start text-start overflow-hidden">
  {/* Background Image */}
  <Image
    src="/web-hero.jpg" 
    alt="Frameworks background"
    fill
    priority
    className="object-cover brightness-75"
  />


  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 140 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 px-6"
  >
    <h1 className="text-5xl md:text-6xl font-bold ">
      Frameworks That Power<br/> Innovation
    </h1>
    <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
      We build modern, scalable applications using the latest and most reliable web frameworks.
    </p>
  </motion.div>
</section>


      {/* 🟢 Section 2: Overview */}
      <section className="bg-[#2c69e4] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Framework Expertise</h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            From frontend to backend, we use frameworks that ensure reliability,
            speed, and scalability.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
            {[
              { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
              { name: "React", icon: SiReact, color: "text-sky-400" },
              { name: "Django", icon: SiDjango, color: "text-green-500" },
              { name: "Flask", icon: SiFlask, color: "text-gray-400" },
              { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
              { name: "Angular", icon: SiAngular, color: "text-red-500" },
            ].map((fw, i) => {
              const Icon = fw.icon;
              return (
                <motion.div
                  key={fw.name}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center"
                >
                  <Icon className={`w-12 h-12 ${fw.color}`} />
                  <p className="mt-2 text-gray-300">{fw.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🟢 Section 3: Frontend Frameworks */}
      <section className="bg-linear-to-r from-[#071021] to-[#0a0a0a] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold mb-6">Frontend Frameworks</h2>
            <p className="text-gray-300 mb-6">
              We use advanced frontend frameworks to build fast, responsive, and
              interactive UIs for modern applications.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>⚡ React – Dynamic, component-based UI library</li>
              <li>🚀 Next.js – SEO-optimized and lightning-fast</li>
              <li>🧩 Angular – Robust structure for large-scale apps</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/frontend.webp"
              alt="Frontend frameworks"
              width={550}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 🟢 Section 4: Backend Frameworks */}
      <section className="bg-[#0b0f17] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/backend.jpg"
              alt="Backend frameworks"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold mb-6">Backend Frameworks</h2>
            <p className="text-gray-300 mb-6">
              Our backend systems are built with reliable, scalable frameworks
              that handle complex business logic effortlessly.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>⚙️ Django – Secure, high-performance backend</li>
              <li>🐍 Flask & FastAPI – Lightweight for microservices</li>
              <li>🟢 Express.js – Fast Node-based backend for APIs</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 🟢 Section 5: Fullstack Showcase */}
      <section className="bg-linear-to-b from-[#0a0a0a] to-[#101820] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Full-Stack Framework Combinations
          </motion.h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Combining the power of frontend and backend frameworks to deliver
            seamless, high-performing applications.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "React + Django",
                desc: "Enterprise-grade architecture with robust backend and clean UI.",
              },
              {
                title: "Next.js + Node.js",
                desc: "Optimized for SSR and API-driven web apps.",
              },
              {
                title: "React + FastAPI",
                desc: "Ideal for AI and real-time application development.",
              },
            ].map((combo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-gray-800/30 border border-gray-700/40 shadow-lg hover:border-teal-400/40 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3 text-teal-300">
                  {combo.title}
                </h3>
                <p className="text-gray-300">{combo.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiReact,
  SiPython,
  SiNodedotjs,
  SiDocker,
  SiAmazon,
  SiMongodb,
  SiKubernetes,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

interface Tech {
  name: string;
  icon: IconType;
  color: string;
  description: string;
}

const techStack: Tech[] = [
  {
    name: "React",
    icon: SiReact,
    color: "text-sky-400",
    description:
      "React is a JavaScript library for building dynamic, high-performance user interfaces using a component-based architecture.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    description:
      "Next.js is a React framework with server-side rendering, static generation, and API routes for fast modern web apps.",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-yellow-400",
    description:
      "Python is a powerful language for AI, ML, and backend applications. We use it for scalable backend and automation solutions.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
    description:
      "Node.js powers our backend services with fast, non-blocking I/O and a huge ecosystem of NPM packages.",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-500",
    description:
      "Docker helps us containerize and deploy apps with consistency across environments, ensuring smooth CI/CD pipelines.",
  },
  {
    name: "AWS",
    icon: SiAmazon,
    color: "text-orange-400",
    description:
      "AWS provides reliable, scalable cloud infrastructure. We use it for hosting, storage, and DevOps pipelines.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
    description:
      "MongoDB is our preferred NoSQL database for high scalability and flexible document storage.",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "text-blue-400",
    description:
      "Kubernetes orchestrates our containerized applications, managing scaling, deployment, and uptime.",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "text-teal-400",
    description:
      "TailwindCSS allows us to build beautiful, responsive designs rapidly with utility-first classes.",
  },
];

export default function Technologies() {
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-sky-400 to-teal-300">
          Technologies We Excel In
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Click on any technology to learn how AgileInnovate uses it to build world-class software.
        </p>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center gap-10">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.button
                key={tech.name}
                onClick={() => setSelectedTech(tech)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.15 }}
                className="group focus:outline-none"
              >
                <div className="p-6 bg-linear-to-br from-gray-800/40 to-gray-700/20 backdrop-blur-xl border border-gray-700/30 rounded-full shadow-lg transition-all duration-300 hover:shadow-sky-400/30 hover:border-sky-400/50">
                  <Icon className={`w-12 h-12 ${tech.color}`} />
                </div>
                <p className="text-sm text-gray-300 mt-3 group-hover:text-white transition-all">
                  {tech.name}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50"
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#121212] border border-gray-700 rounded-2xl p-8 max-w-md mx-4 text-left shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <selectedTech.icon className={`w-10 h-10 ${selectedTech.color}`} />
                <h3 className="text-2xl font-semibold">{selectedTech.name}</h3>
              </div>
              <p className="text-gray-300">{selectedTech.description}</p>
              <button
                onClick={() => setSelectedTech(null)}
                className="mt-6 px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-medium transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

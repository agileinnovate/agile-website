"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // icon set

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        "“AgileInnovate transformed our digital vision into a powerful reality. Their technical expertise, communication, and commitment to deadlines have been exceptional.”",
      name: "John Carter",
      role: "CEO, NextWave Technologies",
    },
    {
      quote:
        "“Working with AgileInnovate was a game changer. The team delivered our mobile app ahead of schedule with amazing attention to detail.”",
      name: "Priya Sharma",
      role: "Product Head, TechNova Labs",
    },
    {
      quote:
        "“Their blockchain expertise is second to none. We’re impressed by the security and scalability of our new platform.”",
      name: "Michael Brown",
      role: "CTO, BlockEdge Systems",
    },
    {
      quote:
        "“AgileInnovate’s developers truly care about product quality. Every sprint felt efficient and transparent.”",
      name: "Sarah Lee",
      role: "Operations Lead, CloudCore",
    },
    {
      quote:
        "“The collaboration process was smooth and professional. They handled every challenge with creativity and speed.”",
      name: "David Kim",
      role: "Founder, InnovX Digital",
    },
    {
      quote:
        "“From concept to deployment, AgileInnovate exceeded expectations. Highly recommended for anyone serious about innovation.”",
      name: "Emma Wilson",
      role: "Project Manager, FutureTech Solutions",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* LEFT SIDE — TEXT CONTENT */}
        <div className="text-left">
          <span className="text-blue-400 bg-blue-100 px-6 py-1 text-md font-medium">
            Our Testimonial
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-6">
            30+ Satisfied Clients Worldwide
          </h2>

          {/* Animated testimonial text */}
          <div className="h-42 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-full"
              >
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {testimonials[index].quote}
                </p>

                <div className="flex items-center space-x-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Buttons */}
          <div className="flex space-x-4 mt-18">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-blue-400 hover:bg-blue-500 hover:text-white transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-blue-400 hover:bg-blue-500 hover:text-white transition"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-2xl overflow-hidden ">
            <Image
              src="/Testinomial.png"
              alt="Happy Clients"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

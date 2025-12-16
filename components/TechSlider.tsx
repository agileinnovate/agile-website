"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TechSlider() {
  const logos = [
    "/android.png",
    "/flutter.png",
    "/react-native.png",
    "/ios.png",
    "/html.png",
    "/css.png",
    "/javascript.png",
    "/node.png",
    "/python.png",
    "/rails.png",
    "/dot-net.png",
    "/aws.png",
  ];

  // Duplicate for infinite loop
  const infinite = [...logos, ...logos];
  const slideWidth = 180; // actual width incl. gap
  const totalWidth = infinite.length * slideWidth;

  const [pos, setPos] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPos((prev) => {
        const next = prev + slideWidth;

        // Reset when half of track is scrolled
        return next >= totalWidth / 2 ? 0 : next;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [totalWidth]);

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          animate={{ x: -pos }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex gap-16"
          style={{ width: totalWidth }}
        >
          {infinite.map((src, index) => (
            <div key={index} className="min-w-[150px] flex justify-center">
              <Image
                src={src}
                alt="Tech Logo"
                width={90}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

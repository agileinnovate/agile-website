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

  const infinite = [...logos, ...logos]; // Duplicate for seamless loop
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPos((prev) => prev + 150); // move 150px every 2 sec
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          animate={{ x: -pos }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="flex gap-16"
          style={{ width: `${infinite.length * 150}px` }}
        >
          {infinite.map((src, index) => (
            <div key={index} className="min-w-[150px] flex justify-center">
              <Image
                src={src}
                alt="Tech Logo"
                width={80}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

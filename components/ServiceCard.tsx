"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { title: "Mobile App Development", icon: "/OIP.webp" },
  { title: "Software Development", icon: "/SD.png" },
  { title: "Web Development", icon: "/domain.png" },
  { title: ".NET Development", icon: "/net-framework.png" },
  { title: "PHP Development", icon: "/php-logo.png" },
  { title: "Block Chain", icon: "/Blockchain.png" },
  { title: "MERN Stack Development", icon: "/developer.png" },
  { title: "Full Stack Development", icon: "/Fullstack.png" },
  { title: "Flutter App Development", icon: "/flutter.png" },
  { title: "Laravel Development", icon: "/laravel.png" },
];

export default function ServiceCard() {
  return (
    <section className="bg-[#2966e0] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
        <p className="text-md text-gray-200 max-w-3xl mx-auto mb-14">
          As a certified IT company, Agailinnovate helps organizations thrive digitally 
          by offering innovative solutions using cutting-edge tools and frameworks. 
          Contact us to learn more!
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-6 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center w-60 h-20 bg-white rounded-2xl text-black px-4 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Animated Icon */}
              <motion.div
                animate={{ x: [0, 10, 0, -10, 0] }}
                transition={{
                  duration: 1, 
                  ease: "easeInOut",
                  repeat: 2, 
                }}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={45}
                  height={45}
                  className="mr-4 object-contain"
                />
              </motion.div>

              
              <h3 className=" font-xl">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

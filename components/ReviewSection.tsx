"use client";

import Image from "next/image";
import { FaUsers, FaGlobe, FaFlagCheckered, FaClipboardCheck } from "react-icons/fa";
import CountUp from "react-countup";

export default function ReviewSection() {
  const stats = [
    {
      icon: <FaUsers className="text-blue-500 w-[49px] h-12" />,
      value: "500+",
      label: "Client Testimonials",
    },
    {
      icon: <FaGlobe className="text-blue-500 w-[49px] h-12" />,
      value: "20+",
      label: "Global Reach",
    },
    {
      icon: <FaFlagCheckered className="text-blue-500 w-[49px] h-12" />,
      value: "1000+",
      label: "Completed Projects",
    },
    {
      icon: <FaClipboardCheck className="text-blue-500 w-[49px] h-12" />,
      value: "99%+",
      label: "On-Time Delivery",
    },
  ];

  return (
    <section className="relative py-20 flex justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/BGR.png"
          alt="Background pattern"
          fill
          priority
          className="object-cover opacity-80"
        />
      </div>

      {/* Stats Cards */}
      <div className="relative z-10 max-w-6xl w-full px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-[259px] h-[105px] bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-center px-6"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="shrink-0">{stat.icon}</div>

              {/* Text */}
              <div>
                <h2 className="text-3xl font-bold text-blue-600">
                 <CountUp end={parseInt(stat.value)} duration={6} />+
                  </h2>

                <p className="text-gray-700 text-sm mt-1">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

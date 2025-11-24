"use client";

import { motion } from "framer-motion";

// React Icons
import { MdPhoneIphone } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { SiBlockchaindotcom } from "react-icons/si";
import { RiRobot2Line } from "react-icons/ri";
import { MdOutlineDataExploration } from "react-icons/md";
import { GiDigitalTrace } from "react-icons/gi";
import { FaSearchDollar } from "react-icons/fa";

export default function NineServiceCards() {
  const cards = [
    {
      icon: <MdPhoneIphone />,
      title: "Mobile App Development",
      desc: "We build high-performance iOS & Android apps designed for user experience and scalability.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      desc: "Custom software solutions engineered to streamline workflows and accelerate business growth.",
    },
    {
      icon: <TbWorldCode />,
      title: "Web Development",
      desc: "Modern, responsive, SEO-friendly websites built using the latest web technologies.",
    },
    {
      icon: <SiBlockchaindotcom />,
      title: "dApps Development",
      desc: "Fully customized decentralized applications built with secure blockchain architecture.",
    },
    {
      icon: <SiBlockchaindotcom />,
      title: "Blockchain Solutions",
      desc: "Smart contracts, wallets, NFTs, and blockchain integrations for modern digital ecosystems.",
    },
    {
      icon: <RiRobot2Line />,
      title: "AI Agents",
      desc: "Intelligent autonomous agents for automation, customer support, and business operations.",
    },
    {
      icon: <MdOutlineDataExploration />,
      title: "Data Analysis",
      desc: "Data processing, visualization, and insights to support informed business decisions.",
    },
    {
      icon: <GiDigitalTrace />,
      title: "360° Digital Marketing",
      desc: "Complete marketing solutions including branding, social media, and paid ad campaigns.",
    },
    {
      icon: <FaSearchDollar />,
      title: "SEO / ASO",
      desc: "Boost website ranking and app visibility with advanced SEO & app store optimization strategies.",
    },
  ];

  return (
    <section className="w-full bg-[#f5f9ff] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-blue-900"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 mt-4 text-md"
          >
            Explore the powerful digital solutions we provide to help your business grow.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((item, i) => (
         <motion.div
  key={i}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
  className="group relative overflow-hidden bg-[#eaf5ff] shadow-md rounded-2xl p-8 text-center
             min-h-[260px] flex flex-col"
>
  {/* Hover Background Image */}
  <div
  className="absolute inset-0 z-0 bg-red-500 opacity-0 group-hover:opacity-100 transition duration-500"
></div>



  {/* Content */}
  <div className="relative z-10">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="w-15 h-15 mx-auto bg-[#00a6e7] rotate-45 
                 flex items-center justify-center rounded-lg mb-6 shadow-md"
    >
      <div className="-rotate-45 text-white text-4xl">
        {item.icon}
      </div>
    </motion.div>

    <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>

    <p className="text-gray-600 text-sm leading-relaxed grow">{item.desc}</p>
  </div>
</motion.div>

          ))}
        </div>

      </div>
    </section>
  );
}

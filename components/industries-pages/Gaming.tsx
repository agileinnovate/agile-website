"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  FaGamepad,
  FaCubes,
  FaUsers,
  FaVrCardboard
} from "react-icons/fa";

export default function Gaming() {
  return (
    <>
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Powering the Future of <br />
              <span className="text-purple-600">Gaming & Metaverse</span>
            </h1>

            <p className="text-gray-600 text-md md:text-lg leading-relaxed max-w-lg">
              Create immersive digital worlds, enhance player engagement,
              and build next-generation gaming ecosystems powered by Web3,
              blockchain and metaverse technologies.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-full shadow-lg transition-all">
              Get a Consultation
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/gaming-hero.jpeg"  
              alt="Gaming Banner"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

        </div>
      </section>

    
      <div className="w-full h-2 bg-linear-to-r from-purple-600 to-indigo-500"></div>

      {/* ====================== STATS SECTION ====================== */}
      <section className="w-full py-16 bg-gray-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center px-4 pt-20">

          {/* STAT 1 */}
          <div className="flex items-center justify-center gap-6">
            <div>
              <div className="text-purple-600 text-6xl font-extrabold">
                <CountUp end={80} duration={2} />
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                player retention boost with AI personalization
              </p>
            </div>
            <div className="hidden md:block w-0.5 h-20 bg-gray-300"></div>
          </div>

          {/* STAT 2 */}
          <div className="flex items-center justify-center gap-6">
            <div>
              <div className="text-purple-600 text-6xl font-extrabold">
                <CountUp end={95} duration={2} />
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                reduction in cheating with blockchain-secured assets
              </p>
            </div>
            <div className="hidden md:block w-0.5 h-20 bg-gray-300"></div>
          </div>

          {/* STAT 3 */}
          <div className="flex items-center justify-center gap-6">
            <div>
              <div className="text-purple-600 text-6xl font-extrabold">
                <CountUp end={70} duration={2} />
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                faster in-game transactions with decentralized systems
              </p>
            </div>
            <div className="hidden md:block w-0.5 h-20 bg-gray-300"></div>
          </div>

          {/* STAT 4 */}
          <div className="flex items-center justify-center gap-6">
            <div>
              <div className="text-purple-600 text-6xl font-extrabold">
                <CountUp end={99} decimals={1} duration={2} />
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                uptime for multiplayer & metaverse servers
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ====================== WHY CHOOSE US SECTION ====================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E83]">
              Why Gaming Studios Choose Our Metaverse Solutions
            </h2>

            <div className="w-full h-[3px] bg-purple-600 mt-2"></div>

            <p className="text-center md:text-left text-gray-600 mt-3 mb-10">
              Technology that increases engagement, enhances player experience, and builds scalable game ecosystems.
            </p>

            {/* LIST ITEMS */}
            <div className="space-y-10">

              {/* ITEM 1 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-full text-purple-600 text-xl">
                    <FaGamepad />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Immersive Gameplay</h3>
                    <p className="text-gray-600 text-sm">
                      High-performance engines that ensure smooth and interactive player experiences.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200 mt-6"></div>
              </div>

              {/* ITEM 2 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-full text-purple-600 text-xl">
                    <FaCubes />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">NFT & Asset Tokenization</h3>
                    <p className="text-gray-600 text-sm">
                      Create unique, tradable digital assets with blockchain security.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200 mt-6"></div>
              </div>

              {/* ITEM 3 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-full text-purple-600 text-xl">
                    <FaUsers />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Player Community Growth</h3>
                    <p className="text-gray-600 text-sm">
                      Build social metaverse spaces that increase engagement and loyalty.
                    </p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200 mt-6"></div>
              </div>

              {/* ITEM 4 */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-full text-purple-600 text-xl">
                    <FaVrCardboard />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">AR/VR Ready</h3>
                    <p className="text-gray-600 text-sm">
                      Deliver ultra-immersive digital environments with AR/VR technology.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/gaming-right.jpeg"  
              alt="Gaming Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>
    </>
  );
}

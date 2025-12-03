"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#051B43] text-white pt-16">

      {/* ================== TOP GRID ================== */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ========= Company Info ========= */}
      {/* ========= Company Info ========= */}
<div className="w-full">
  
  {/* Logo */}
  <div className="mb-6 bg-white ">
    <Image
      src="/logo1.png"
      alt="AgileInnovate Logo"
      width={180}
      height={80}
      className="object-contain mx-auto md:mx-0 pl-8"
    />
  </div>

  {/* Description */}
  <p className="text-sm leading-relaxed text-gray-200 mb-6 text-center md:text-left">
    At AgileInnovate, we're dedicated to crafting exceptional IT solutions 
    that empower businesses worldwide. We blend deep industry knowledge 
    with agile methodologies to deliver innovation that matters.
  </p>

  {/* Email Subscription */}
  <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0">

    {/* Input */}
    <input
      type="email"
      placeholder="Your Email"
      className="w-full px-3 py-2 text-white border border-gray-400 
                 bg-[#0A2A5E] rounded-md sm:rounded-none sm:rounded-l-md 
                 focus:outline-none"
    />

    {/* Button */}
    <button
      className="bg-white px-3 py-2 font-semibold text-blue-900 
                 hover:bg-gray-200 transition rounded-md 
                 sm:rounded-none sm:rounded-r-md w-full sm:w-auto"
    >
      Sign Up
    </button>
  </div>
  </div>

        {/* ========= Get In Touch ========= */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Get In Touch</h3>
          <div className="w-12 h-[2px] bg-[#1EA6FF] mb-5"></div>

          <p className="text-gray-300 text-sm mb-2">📍 Noida Extension India 201009</p>
          <p className="text-gray-300 text-sm mb-2">📧 info@agileinnovate.tech</p>
          <p className="text-gray-300 text-sm mb-4">📞 +91 9958204253</p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-3">
            {[FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center bg-[#1EA6FF] text-white rounded hover:bg-white hover:text-[#1EA6FF] transition"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* ========= Quick Links ========= */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <div className="w-12 h-[2px] bg-[#1EA6FF] mb-5"></div>

          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Services", "/services"],
              ["Meet The Team", "/team"],
              ["Latest Blog", "/blog"],
              ["Contact Us", "/contact"],
            ].map(([title, link]) => (
              <li key={title}>
                <Link href={link} className="hover:text-white transition flex items-center gap-2">
                  ➤ <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ========= Popular Links ========= */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Popular Links</h3>
          <div className="w-12 h-[2px] bg-[#1EA6FF] mb-5"></div>

          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Services", "/services"],
              ["Meet The Team", "/team"],
              ["Latest Blog", "/blog"],
              ["Contact Us", "/contact"],
            ].map(([title, link]) => (
              <li key={title}>
                <Link href={link} className="hover:text-white transition flex items-center gap-2">
                  ➤ <span>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================== BOTTOM BAR ================== */}
      <div className="mt-12 bg-[#03112D] py-4 text-center">
        <p className="text-sm text-gray-300">
          © AgileInnovate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

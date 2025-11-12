"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* 1️⃣ Company Info */}
        <div>
          <div className="flex items-center mb-1">
            <Image
              src="/logo.png"
              alt="AgileInnovate Logo"
              width={190}
              height={70}
              className="object-contain"
            />
          </div>
         
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-black font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Our Services */}
        <div>
          <h3 className="text-black font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li>Blockchain Development</li>
            <li>Web & App Development</li>
            <li>AI & Cloud Integration</li>
            <li>Full Stack Solutions</li>
          </ul>
        </div>

        {/* 4️⃣ Contact Info */}
        <div>
          <h3 className="text-black font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-black text-sm mb-2">
            📍 Noida, Uttar Pradesh, India
          </p>
          <p className="text-black text-sm mb-2">
            📧 info@agileinnovate.com
          </p>
          <p className="text-black text-sm mb-6">📞 +91 98765 43210</p>

          <div className="flex space-x-4 text-xl">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </Link>
            <Link
              href="mailto:info@agileinnovate.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-semibold">AgileInnovate</span>. All
        Rights Reserved.
      </div>
    </footer>
  );
}

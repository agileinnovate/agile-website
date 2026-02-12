"use client";

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#051B43] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="w-full">
          <div className="mb-5 bg-white p-2">
            <Image
              src="/logo1.png"
              alt="AgileInnovate Logo"
              width={180}
              height={80}
              className="object-contain mx-auto ad:mx-0 pl-8"
            />
          </div>

          <p className="text-sm leading-relaxed text-gray-300 mb-6">
            At AgileInnovate, we're dedicated to crafting exceptional IT
            solutions that empower businesses worldwide.We blend deep industry
            knowledge with agile methodologies to deliver innovation that
            matters.
          </p>

          <div className="flex space-x-3">
            {[FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center bg-[#1EA6FF] rounded hover:bg-white hover:text-[#1EA6FF] transition"
                >
                  <Icon size={18} />
                </div>
              ),
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="w-12 h-0.5 bg-[#1EA6FF] mb-5"></div>

          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Services", "/services"],
              ["Meet The Team", "/team"],
              ["Latest Blog", "/blog"],
              ["Press Room", "/press"],
              ["Contact Us", "/contact"],
            ].map(([title, link]) => (
              <li key={title}>
                <Link
                  href={link}
                  className="hover:text-white transition flex items-center gap-2"
                >
                  ➤ {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="w-12 h-0.5 bg-[#1EA6FF] mb-5"></div>

          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Services", "/services"],
              ["Meet The Team", "/team"],
              ["Latest Blog", "/blog"],
              ["Press Room", "/press"],
              ["Contact Us", "/contact"],
            ].map(([title, link]) => (
              <li key={title}>
                <Link
                  href={link}
                  className="hover:text-white transition flex items-center gap-2"
                >
                  ➤ {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="w-12 h-0.5 bg-[#1EA6FF] mb-5"></div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1EA6FF]">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-medium">Mail Us:</p>
                <p className="text-sm text-gray-300">info@agileinnovate.tech</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1EA6FF]">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-sm text-gray-300">+91 9958204253</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1EA6FF]">
                <FaUserTie />
              </div>
              <div>
                <p className="font-medium">Join Our Team</p>
                <p className="text-sm text-gray-300">hr@agileinnovate.tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 bg-[#03112D] py-4 text-center">
        <p className="text-sm text-gray-300">
          © AgileInnovate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

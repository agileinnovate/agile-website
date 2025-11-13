"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import IndustriesModal from "./IndustriesModel";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /*  INDUSTRIES DROPDOWN */
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const industriesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openIndustries = () => {
    if (industriesTimer.current) clearTimeout(industriesTimer.current);
    setIndustriesOpen(true);
  };

  const closeIndustries = () => {
    if (industriesTimer.current) clearTimeout(industriesTimer.current);
    industriesTimer.current = setTimeout(() => setIndustriesOpen(false), 150);
  };

  /* ABOUT DROPDOWN */
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openAbout = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    setAboutOpen(true);
  };

  const closeAbout = () => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    aboutTimer.current = setTimeout(() => setAboutOpen(false), 150);
  };

  /* WEB & MOBILE DROPDOWN*/
  const [webMobileOpen, setWebMobileOpen] = useState(false);
  const webMobileTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openWebMobile = () => {
    if (webMobileTimer.current) clearTimeout(webMobileTimer.current);
    setWebMobileOpen(true);
  };

  const closeWebMobile = () => {
    if (webMobileTimer.current) clearTimeout(webMobileTimer.current);
    webMobileTimer.current = setTimeout(() => setWebMobileOpen(false), 150);
  };

  return (
    <>
      <nav className="fixed w-full bg-white text-blue-600 shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-3 h-20">

          {/* Logo */}
          <div className="relative w-[290px] h-[100px] scale-125 md:scale-150">
            <Image src="/logo.png" alt="AgileInnovate Logo" fill className="object-contain" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 text-lg font-bold">

            {/* Home */}
            <Link href="/" className="hover:text-blue-300 flex items-center gap-1">
              Home 
            </Link>

            {/* ABOUT DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={closeAbout}
            >
              <span className="cursor-pointer hover:text-blue-300 flex items-center gap-1">
                About <FaAngleDown className="text-sm" />
              </span>

              {aboutOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-white shadow-xl rounded-xl border p-8 w-[480px] animate-fadeSlide z-999"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <Link href="/about"
                      className="p-4 rounded-xl border hover:shadow-xl transition"
                    >
                      <h2 className="text-lg font-semibold text-gray-800">
                        About Us
                      </h2>
                      <div className="w-12 h-[3px] bg-blue-600 mt-1 mb-3"></div>
                      <p className="text-sm text-gray-600">
                        Learn more about our mission and values.
                      </p>
                    </Link>

                    {/* Card 2 */}
                    <Link href="/career"
                      className="p-4 rounded-xl border hover:shadow-xl transition"
                    >
                      <h2 className="text-lg font-semibold text-gray-800">
                        Career
                      </h2>
                      <div className="w-12 h-[3px] bg-blue-600 mt-1 mb-3"></div>
                      <p className="text-sm text-gray-600">
                        Join our team and build your future.
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES normal link */}
            <Link href="/services" className="hover:text-blue-300">
              Services
            </Link>

            {/* WEB & MOBILE DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={openWebMobile}
              onMouseLeave={closeWebMobile}
            >
              <span className="cursor-pointer hover:text-blue-300 flex items-center gap-1">
                Web & Mobile <FaAngleDown className="text-sm" />
              </span>

              {webMobileOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white shadow-xl rounded-xl border p-6 w-[650px] animate-fadeSlide z-999"
                >
                  <div className="grid grid-cols-3 gap-6">

                    {/* 6 CARDS */}
                    {[
                      { title: "Web Development", desc: "Powerful responsive websites.", link: "/service/web-development" },
                      { title: "Mobile App Development", desc: "iOS & Android apps.", link: "/service/mobile-app" },
                      { title: "Python Development", desc: "Automation & backend systems.", link: "/service/python" },
                      { title: "LightSpeed Dev", desc: "Fast modern development.", link: "/service/lightspeed" },
                      { title: "Technologies", desc: "MERN, MEAN, Django, Next.js", link: "/service/technologies" },
                      { title: "Frameworks", desc: "Reliable modern frameworks.", link: "/service/frameworks" },
                    ].map((card, i) => (
                      <Link key={i} href={card.link}
                        className="p-4 rounded-xl hover:shadow-2xl border border-gray-300 transition"
                      >
                        <h2 className="text-sm font-md text-gray-800">{card.title}</h2>
                        <div className="w-12 h-[3px] bg-blue-600 mt-1 mb-3"></div>
                        <p className="text-sm text-gray-500">{card.desc}</p>
                      </Link>
                    ))}

                  </div>
                </div>
              )}
            </div>

            {/* INDUSTRIES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={openIndustries}
              onMouseLeave={closeIndustries}
            >
              <span className="cursor-pointer hover:text-blue-300 flex items-center gap-1">
                Industries <FaAngleDown className="text-sm" />
              </span>

              {industriesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-999">
                  <IndustriesModal />
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Link href="/contact">
              <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 border border-blue-500 rounded-full px-12 py-3">
                Contact Us
              </button>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
       {/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden bg-white border-t py-4 text-left px-5 space-y-4">

    {/* Home */}
    <Link href="/" className="block font-semibold text-gray-700 text-lg">
      Home
    </Link>

    {/* ABOUT DROPDOWN (Mobile) */}
    <div>
      <button
        onClick={() => setAboutOpen(!aboutOpen)}
        className="w-full flex justify-between items-center font-semibold text-gray-700 text-lg"
      >
        About <FaAngleDown className={`${aboutOpen ? "rotate-180" : ""} transition`} />
      </button>

      {aboutOpen && (
        <div className="ml-4 mt-2 space-y-2 text-gray-600">
          <Link href="/about" className="block hover:text-blue-600">About Us</Link>
          <Link href="/career" className="block hover:text-blue-600">Career</Link>
        </div>
      )}
    </div>

    {/* WEB & MOBILE DROPDOWN (Mobile) */}
    <div>
      <button
        onClick={() => setWebMobileOpen(!webMobileOpen)}
        className="w-full flex justify-between items-center font-semibold text-gray-700 text-lg"
      >
        Web & Mobile <FaAngleDown className={`${webMobileOpen ? "rotate-180" : ""} transition`} />
      </button>

      {webMobileOpen && (
        <div className="ml-4 mt-2 space-y-2 text-gray-600">
          <Link href="/service/web-development" className="block hover:text-blue-600">Web Development</Link>
          <Link href="/service/mobile-app" className="block hover:text-blue-600">Mobile App Development</Link>
          <Link href="/service/python" className="block hover:text-blue-600">Python Development</Link>
          <Link href="/service/lightspeed" className="block hover:text-blue-600">LightSpeed Dev</Link>
          <Link href="/service/technologies" className="block hover:text-blue-600">Technologies</Link>
          <Link href="/service/frameworks" className="block hover:text-blue-600">Frameworks</Link>
        </div>
      )}
    </div>

    {/* INDUSTRIES DROPDOWN (Mobile) */}
    <div>
      <button
        onClick={() => setIndustriesOpen(!industriesOpen)}
        className="w-full flex justify-between items-center font-semibold text-gray-700 text-lg"
      >
        Industries <FaAngleDown className={`${industriesOpen ? "rotate-180" : ""} transition`} />
      </button>

      {industriesOpen && (
        <div className="ml-4 mt-2 space-y-2 text-gray-600">
          {/* Replace below with your industries list */}
          <Link href="/industries/healthcare" className="block hover:text-blue-600">Healthcare</Link>
          <Link href="/industries/finance" className="block hover:text-blue-600">Finance</Link>
          <Link href="/industries/education" className="block hover:text-blue-600">Education</Link>
          <Link href="/industries/ecommerce" className="block hover:text-blue-600">E-Commerce</Link>
          <Link href="/industries/real-estate" className="block hover:text-blue-600">Real Estate</Link>
        </div>
      )}
    </div>

    {/* Contact */}
    <Link href="/contact" className="block font-semibold text-gray-700 text-lg">
      Contact
    </Link>
  </div>
)}

      </nav>

      {/* Animation */}
      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlide {
          animation: fadeSlide 0.25s ease-out forwards;
        }
      `}</style>
    </>
  );
}

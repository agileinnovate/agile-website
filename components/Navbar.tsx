"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import IndustriesModal from "./IndustriesModel";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* INDUSTRIES DROPDOWN */
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

  /* WEB & MOBILE DROPDOWN */
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

  /* TECHNOLOGIES SUBMENU */
  const [technologiesOpen, setTechnologiesOpen] = useState(false);

  /* MOBILE DROPDOWNS */
  const [mobileAbout, setMobileAbout] = useState(false);
  const [mobileWebMobile, setMobileWebMobile] = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);
  const [mobileTech, setMobileTech] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white text-blue-600 shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 h-20">

          {/* LOGO */}
          <div className="relative w-[160px] h-[70px]">
            <Image src="/logo1.png" alt="AgileInnovate Logo" fill className="object-contain" />
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-10 text-lg font-bold">

            <Link href="/" className="hover:text-blue-300">Home</Link>

            {/* ABOUT */}
            <div
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={closeAbout}
            >
              <span className="cursor-pointer hover:text-blue-300 flex items-center gap-1">
                About <FaAngleDown />
              </span>

              {aboutOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 
                  bg-white shadow-xl rounded-xl border p-8 w-[480px] z-999">
                  <div className="grid grid-cols-2 gap-6">

                    <Link href="/about"
                      className="p-4 rounded-xl border hover:shadow-xl transition">
                      <h2 className="text-lg font-semibold text-gray-800">About Us</h2>
                      <div className="w-12 h-[3px] bg-blue-600 mt-1 mb-3"></div>
                      <p className="text-sm text-gray-600">Who we are & what we do.</p>
                    </Link>

                    <Link href="/career"
                      className="p-4 rounded-xl border hover:shadow-xl transition">
                      <h2 className="text-lg font-semibold text-gray-800">Career</h2>
                      <div className="w-12 h-[3px] bg-blue-600 mt-1 mb-3"></div>
                      <p className="text-sm text-gray-600">Join our team.</p>
                    </Link>

                  </div>
                </div>
              )}
            </div>

            <Link href="/services" className="hover:text-blue-300">Services</Link>

            {/* WEB & MOBILE */}
            <div
              className="relative"
              onMouseEnter={openWebMobile}
              onMouseLeave={closeWebMobile}
            >
              <span className="cursor-pointer hover:text-blue-300 flex items-center gap-1">
                Web & Mobile <FaAngleDown />
              </span>

              {webMobileOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 
                  bg-white shadow-xl rounded-xl border p-6 w-[750px] z-[999]">

                  <div className="grid grid-cols-3 gap-6 relative">

                    <Link href="/service/web-development"
                      className="p-4 rounded-xl border hover:shadow-xl transition">
                      <h2 className="text-sm font-semibold text-gray-800">Web Development</h2>
                      <div className="w-12 h-[3px] bg-blue-600 mt-1 mb-3"></div>
                      <p className="text-sm text-gray-500">Corporate & modern UI websites.</p>
                    </Link>

                    <Link href="/service/mobile-app"
                      className="p-4 rounded-xl border hover:shadow-xl transition">
                      <h2 className="text-sm font-semibold text-gray-800">Mobile App Development</h2>
                      <div className="w-12 h-[3px] bg-blue-600 mt-1 mb-3"></div>
                      <p className="text-sm text-gray-500">iOS & Android apps.</p>
                    </Link>

                    <Link href="/service/python"
                      className="p-4 rounded-xl border hover:shadow-xl transition">
                      <h2 className="text-sm font-semibold text-gray-800">Python Development</h2>
                      <div className="w-12 h-[3px] bg-blue-600 mt-1 mb-3"></div>
                      <p className="text-sm text-gray-500">Backend & automation.</p>
                    </Link>

                    <Link href="/service/lightspeed"
                      className="p-4 rounded-xl border hover:shadow-xl transition">
                      <h2 className="text-sm font-semibold text-gray-800">LightSpeed Dev</h2>
                      <div className="w-12 h-[3px] bg-blue-600 mt-1 mb-3"></div>
                      <p className="text-sm text-gray-500">Ultra-fast development.</p>
                    </Link>

                    {/* TECHNOLOGIES SUBMENU */}
                    <div
                      className="relative p-4 rounded-xl border hover:shadow-xl transition bg-white cursor-pointer"
                      onMouseEnter={() => setTechnologiesOpen(true)}
                      onMouseLeave={() => setTechnologiesOpen(false)}
                    >
                      <h2 className="text-sm font-semibold text-gray-800 flex justify-between">
                        Technologies <FaAngleDown />
                      </h2>

                      <div className="w-12 h-[3px] bg-blue-600 mt-1 mb-3"></div>
                      <p className="text-sm text-gray-500">React, Next.js, Node...</p>

                      {technologiesOpen && (
                        <div className="absolute top-0 left-full bg-white border 
                          shadow-xl rounded-xl p-6 w-[180px] z-[999]">

                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies</h3>

                          <div className="grid grid-cols-1 gap-y-3 text-gray-700 text-sm">
                            <Link href="/technology/react" className="hover:text-blue-600">React</Link>
                            <Link href="/technology/nextjs" className="hover:text-blue-600">Next.js</Link>
                            <Link href="/technology/mongodb" className="hover:text-blue-600">MongoDB</Link>
                            <Link href="/technology/nodejs" className="hover:text-blue-600">Node.js</Link>
                            <Link href="/technology/python" className="hover:text-blue-600">Python</Link>
                          </div>
                        </div>
                      )}
                    </div>

                    <Link href="/service/frameworks"
                      className="p-4 rounded-xl border hover:shadow-xl transition">
                      <h2 className="text-sm font-semibold text-gray-800">Frameworks</h2>
                      <div className="w-12 h-[3px] bg-blue-600 mt-1 mb-3"></div>
                      <p className="text-sm text-gray-500">Modern frameworks.</p>
                    </Link>

                  </div>
                </div>
              )}
            </div>

            {/* INDUSTRIES */}
            <div
              className="relative"
              onMouseEnter={openIndustries}
              onMouseLeave={closeIndustries}
            >
              <span className="cursor-pointer hover:text-blue-300 flex items-center gap-1">
                Industries <FaAngleDown />
              </span>

              {industriesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-[999]">
                  <IndustriesModal />
                </div>
              )}
            </div>

            <Link href="/contact">
              <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 
                border border-blue-500 rounded-full px-12 py-3">
                Contact Us
              </button>
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button className="md:hidden text-3xl" onClick={() => setMenuOpen(true)}>☰</button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-999 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {/* SLIDE BAR */}
          <div
            className="absolute right-0 top-0 h-full w-[75%] sm:w-[55%] bg-white shadow-xl 
            p-5 overflow-y-auto transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-[140px] h-[60px]">
                <Image src="/logo1.png" alt="Logo" fill className="object-contain" />
              </div>
              <button className="text-4xl" onClick={() => setMenuOpen(false)}>×</button>
            </div>

            {/* MOBILE LINKS */}
            <div className="space-y-6 text-gray-700 text-md font-semibold">

              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

              {/* ABOUT MOBILE */}
              <div>
                <button
                  onClick={() => setMobileAbout(!mobileAbout)}
                  className="w-full flex justify-between"
                >
                  About <FaAngleDown className={`${mobileAbout ? "rotate-180" : ""}`} />
                </button>

                {mobileAbout && (
                  <div className="ml-4 mt-2 space-y-2 text-gray-600">
                    <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link><br/>
                    <Link href="/career" onClick={() => setMenuOpen(false)}>Career</Link>
                  </div>
                )}
              </div>

              {/* WEB & MOBILE */}
              <div>
                <button
                  onClick={() => setMobileWebMobile(!mobileWebMobile)}
                  className="w-full flex justify-between"
                >
                  Web & Mobile <FaAngleDown className={`${mobileWebMobile ? "rotate-180" : ""}`} />
                </button>

                {mobileWebMobile && (
                  <div className="ml-4 mt-2 space-y-3 text-gray-600">

                    <Link href="/service/web-development" onClick={() => setMenuOpen(false)}>Web Development</Link><br/>
                    <Link href="/service/mobile-app" onClick={() => setMenuOpen(false)}>Mobile Apps</Link><br/>
                    <Link href="/service/python" onClick={() => setMenuOpen(false)}>Python</Link><br/>
                    <Link href="/service/lightspeed" onClick={() => setMenuOpen(false)}>LightSpeed</Link><br/>

                    {/* Technologies Mobile Accordion */}
                    <div>
                      <button
                        onClick={() => setMobileTech(!mobileTech)}
                        className="w-full flex justify-between text-gray-700"
                      >
                        Technologies <FaAngleDown className={`${mobileTech ? "rotate-180" : ""}`} />
                      </button>

                      {mobileTech && (
                        <div className="ml-4 mt-2 space-y-2 text-gray-600">
                          <Link href="/technology/react" onClick={() => setMenuOpen(false)}>React</Link><br/>
                          <Link href="/technology/nextjs" onClick={() => setMenuOpen(false)}>NextJS</Link><br/>
                          <Link href="/technology/mongodb" onClick={() => setMenuOpen(false)}>MongoDB</Link><br/>
                          <Link href="/technology/nodejs" onClick={() => setMenuOpen(false)}>NodeJS</Link><br/>
                          <Link href="/technology/python" onClick={() => setMenuOpen(false)}>Python</Link>
                        </div>
                      )}
                    </div>

                    <Link href="/service/frameworks" onClick={() => setMenuOpen(false)}>Frameworks</Link>
                  </div>
                )}
              </div>

              {/* INDUSTRIES */}
              <div>
                <button
                  onClick={() => setMobileIndustries(!mobileIndustries)}
                  className="w-full flex justify-between"
                >
                  Industries <FaAngleDown className={`${mobileIndustries ? "rotate-180" : ""}`} />
                </button>

                {mobileIndustries && (
                  <div className="ml-4 mt-2 space-y-2 text-gray-600">

                    <Link href="/industries/healthcare" onClick={() => setMenuOpen(false)}>Healthcare</Link><br/>
                    <Link href="/industries/finance" onClick={() => setMenuOpen(false)}>Finance</Link><br/>
                    <Link href="/industries/supply" onClick={() => setMenuOpen(false)}>Supply Chain</Link><br/>
                    <Link href="/industries/ecommerce" onClick={() => setMenuOpen(false)}>E-Commerce</Link><br/>
                    <Link href="/industries/realestate" onClick={() => setMenuOpen(false)}>Real Estate</Link><br/>
                    <Link href="/industries/gaming" onClick={() => setMenuOpen(false)}>Gaming</Link>
                  </div>
                )}
              </div>

              {/* CONTACT */}
              <div className="p-5 border-t bg-white">
        <Link href="/contact">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Contact Us
          </button>
        </Link>
      </div>

            </div>

          </div>
        </div>
      )}

    </>
  );
}

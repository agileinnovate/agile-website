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
{/* MOBILE SLIDE-IN MENU  */}
<div
  className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-999 md:hidden transition-opacity duration-300 ${
    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
  onClick={() => setMenuOpen(false)}
>
  {/* SIDE DRAWER */}
  <div
    className={`absolute right-0 top-0 h-full w-[75%] sm:w-[55%] bg-white shadow-xl p-6 overflow-y-auto transition-transform duration-300 ${
      menuOpen ? "translate-x-0" : "translate-x-full"
    }`}
    onClick={(e) => e.stopPropagation()} 
  >

    {/* HEADER ROW (Logo + Close Button) */}
<div className="flex items-center justify-between mb-2">

  {/* Logo */}
  <div className="relative w-[190px] h-[100px]">
    <Image src="/logo.png" alt="Logo" fill className="object-contain" />
  </div>

  {/* Close Button */}
  <button
    className="text-4xl text-blue-600 font-bold"
    onClick={() => setMenuOpen(false)}
  >
    ×
  </button>

</div>


    {/* NAV ITEMS INSIDE DRAWER */}
    <div className="space-y-6 text-gray-700 text-lg font-semibold">

      <Link href="/" onClick={() => setMenuOpen(false)} className="block">
        Home
      </Link>

      {/* ABOUT DROPDOWN MOBILE */}
      <div>
        <button
          onClick={() => setAboutOpen(!aboutOpen)}
          className="w-full flex justify-between"
        >
          About <FaAngleDown className={`${aboutOpen ? "rotate-180" : ""}`} />
        </button>

        {aboutOpen && (
          <div className="ml-4 mt-2 space-y-2 text-gray-600 text-base">
            <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link><br/>
            <Link href="/career" onClick={() => setMenuOpen(false)}>Career</Link>
          </div>
        )}
      </div>

      {/* WEB & MOBILE DROPDOWN */}
      <div>
        <button
          onClick={() => setWebMobileOpen(!webMobileOpen)}
          className="w-full flex justify-between"
        >
          Web & Mobile <FaAngleDown className={`${webMobileOpen ? "rotate-180" : ""}`} />
        </button>

        {webMobileOpen && (
          <div className="ml-4 mt-2 space-y-2 text-gray-600 text-base">
            <Link href="/service/web-development" onClick={() => setMenuOpen(false)}>Web Development</Link><br/>
            <Link href="/service/mobile-app" onClick={() => setMenuOpen(false)}>Mobile Apps</Link><br/>
            <Link href="/service/python" onClick={() => setMenuOpen(false)}>Python</Link><br/>
            <Link href="/service/lightspeed" onClick={() => setMenuOpen(false)}>LightSpeed</Link><br/>
            <Link href="/service/technologies" onClick={() => setMenuOpen(false)}>Technologies</Link><br/>
            <Link href="/service/frameworks" onClick={() => setMenuOpen(false)}>Frameworks</Link><br/>
          </div>
        )}
      </div>

      {/* INDUSTRIES DROPDOWN */}
      <div>
        <button
          onClick={() => setIndustriesOpen(!industriesOpen)}
          className="w-full flex justify-between"
        >
          Industries <FaAngleDown className={`${industriesOpen ? "rotate-180" : ""}`} />
        </button>

        {industriesOpen && (
          <div className="ml-4 mt-2 space-y-2 text-gray-600 text-base">
            <Link href="/industries/healthcare" onClick={() => setMenuOpen(false)}>Healthcare</Link><br/>
            <Link href="/industries/finance" onClick={() => setMenuOpen(false)}>Finance</Link><br/>
            <Link href="/industries/supply" onClick={() => setMenuOpen(false)}>Supply Chain</Link><br/>
            <Link href="/industries/ecommerce" onClick={() => setMenuOpen(false)}>E-Commerce</Link><br/>
            <Link href="/industries/realestate" onClick={() => setMenuOpen(false)}>Real Estate</Link><br/>
            <Link href="/industries/gaming" onClick={() => setMenuOpen(false)}>Gaming</Link><br/>
          </div>
        )}
      </div>

      {/* CONTACT INFO SECTION */}
<div className="mt-10 pt-6 border-t border-gray-200">

  <h3 className="text-xl font-bold text-gray-900 mb-5">
    Contact Info
  </h3>

  {/* Address */}
  <div className="flex items-start gap-3 text-gray-600 mb-4">
    <span className="text-blue-600 text-xl">📍</span>
    <p className="leading-snug">
     Noida, Uttar Pradesh, India
    </p>
  </div>

  {/* Email */}
  <div className="flex items-center gap-3 text-gray-600 mb-4">
    <span className="text-blue-600 text-xl">✉️</span>
    <p>info@agileinnovate.com</p>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-3 text-gray-600 mb-6">
    <span className="text-blue-600 text-xl">📞</span>
    <p>+9178965321</p>
  </div>

  {/* Contact Us Button */}
  <Link href="/contact">
    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
      Contact Us
    </button>
  </Link>

</div>

    </div>
  </div>
</div>


      </nav>
    </>
  );
}

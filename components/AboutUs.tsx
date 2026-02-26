"use client";

import Image from "next/image";
import {
  FaCode,
  FaLink,
  FaRobot,
  FaCog,
  FaCloud,
  FaChartLine,
  FaAward,
  FaUsers,
  FaPhoneAlt,
  FaGem,
  FaCheckCircle,
  FaRocket,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import Link from "next/link";

export default function AboutPage() {
  const services = [
    {
      title: "Software Development",
      icon: <FaCode className="text-blue-600 w-8 h-8" />,
      desc: "Custom high-performance software solutions tailored to your unique business requirements and goals.",
    },
    {
      title: "Blockchain dApps",
      icon: <FaLink className="text-blue-600 w-8 h-8" />,
      desc: "Decentralized applications built with security and scalability at the core of the architecture.",
    },
    {
      title: "AI Agents",
      icon: <FaRobot className="text-blue-600 w-8 h-8" />,
      desc: "Intelligent autonomous agents designed to automate complex tasks and enhance user experiences.",
    },
    {
      title: "Automation",
      icon: <FaCog className="text-blue-600 w-8 h-8" />,
      desc: "Streamline your workflows with smart automation tools that reduce manual effort and errors.",
    },
    {
      title: "Cloud Solutions",
      icon: <FaCloud className="text-blue-600 w-8 h-8" />,
      desc: "Scale your infrastructure globally with secure, reliable, and cost-effective cloud services.",
    },
    {
      title: "Digital Marketing",
      icon: <FaChartLine className="text-blue-600 w-8 h-8" />,
      desc: "Data-driven marketing strategies to boost your online presence and drive meaningful engagement.",
    },
  ];

  const features = [
    {
      title: "Agile Methodology",
      desc: "We follow iterative processes to ensure rapid delivery and flexibility.",
      icon: <FaRocket className="text-blue-600 w-10 h-10" />,
    },
    {
      title: "Security First",
      desc: "Advanced encryption and security protocols in every line of code.",
      icon: <FaShieldAlt className="text-blue-600 w-10 h-10" />,
    },
    {
      title: "Client-Centric",
      desc: "Your vision is our priority. We work as an extension of your team.",
      icon: <FaUsers className="text-blue-600 w-10 h-10" />,
    },
    {
      title: "Innovative Mindset",
      desc: "Leveraging the latest technologies to keep you ahead of the curve.",
      icon: <FaLightbulb className="text-blue-600 w-10 h-10" />,
    },
  ];

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Delivered", value: "200+" },
    { label: "Happy Clients", value: "150+" },
    { label: "Support", value: "24/7" },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-70 md:h-115 flex items-center justify-center text-center px-6">
        <Image
          src="/Bg-hero.jpg"
          alt="Agile Innovate Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#051B43]/60"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6 uppercase">
            Building Smart Digital Solutions <br className="hidden md:block" />
            for Modern Businesses
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-md md:text-lg opacity-90 leading-relaxed font-medium">
            Agile Innovate delivers scalable, secure, and innovative IT
            solutions that transform business challenges into success stories.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl -rotate-2 group-hover:rotate-0 transition duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Team Meeting"
              className="relative rounded-2xl shadow-2xl w-full h-112.5 object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest rounded-full">
              Our Story
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight uppercase">
              About <span className="text-blue-600">Agile Innovate</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              With over a decade of experience, we empower startups,
              enterprises, and agencies by transforming complex challenges into
              seamless digital solutions.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              From AI agents and blockchain dApps to automation, cloud
              solutions, and full-stack product development — we deliver
              precision-driven innovation.
            </p>

            <div className="pt-4 flex items-center space-x-3 text-blue-600 group cursor-pointer w-fit">
              <span className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <FaPhoneAlt className="w-5 h-5" />
              </span>
              <span className="font-bold text-lg">info@agileinnovate.tech</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest rounded-full mb-3">
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
              Our Core Expertise
            </h2>
            <p className="text-gray-600 text-md font-medium">
              We provide world-class technology services tailored to your
              business needs, ensuring scalability and future-proof results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-slate-100 group"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-5 p-4 bg-blue-50 rounded-2xl group-hover:text-white transition-colors duration-300">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="font-black text-xl text-gray-900 pt-4 group-hover:text-blue-600 transition-colors duration-300">
                    {s.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 font-medium pl-2">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-4xl md:text-6xl font-black text-blue-600 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION  */}
      <section className="py-14 px-6 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest rounded-full mb-4">
                Why Us
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6  uppercase leading-tight">
                Why Partner With <br />
                <span className="text-blue-600 underline decoration-blue-600 decoration-4 underline-offset-8">
                  Agile Innovate?
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 font-medium">
                We combine technical excellence with a deep understanding of
                your business goals to deliver solutions that actually work.
              </p>

              <div className="space-y-4">
                {[
                  "100% Transparency",
                  "End-to-End Delivery",
                  "Global Standards",
                  "Innovation Driven",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <FaCheckCircle className="text-blue-600 w-6 h-6" />
                    <span className="font-bold text-gray-800 uppercase text-sm tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-[40px] shadow-lg border border-slate-100 hover:shadow-2xl transition duration-500 group"
                >
                  <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:text-white transition-all duration-300">
                    <div className="scale-100 group-hover:scale-110 transition-transform duration-300">
                      {f.icon}
                    </div>
                  </div>
                  <h3 className="font-black text-lg text-gray-900 mb-3 uppercase italic leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed italic">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#193976] rounded-[60px] p-10 md:p-16 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent scale-150"></div>

            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-normal uppercase ">
                Ready to transform your <br />
                digital presence?
              </h2>
              <p className="text-gray-300 text-md md:text-lg mb-6 opacity-90 font-medium ">
                Get a free consultation today and let's discuss how we can help
                your business reach new heights.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/contact">
                  <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-blue-500 hover:scale-105 transition duration-300 shadow-[0_10px_40px_-10px_rgba(30,166,255,0.5)] uppercase">
                    Contact Us Now
                  </button>
                </Link>
                <div className="hidden sm:block h-12 w-px bg-white/20"></div>
                <div className="text-white text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1EA6FF]">
                    Email Us
                  </p>
                  <p className="font-black text-lg">info@agileinnovate.tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

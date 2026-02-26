"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const contentEl = contentRef.current;

    if (sectionEl && contentEl) {
      const ctx = gsap.context(() => {
        gsap.from(contentEl, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 60%",
          },
        });
      }, sectionEl);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-8 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-6 mb-6">
        <h1 className="text-3xl md:text-3xl font-bold text-gray-900">
          About Us
        </h1>
        <div className="relative w-36 h-1 bg-blue-700 mx-auto mt-1 rounded-full overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full animate-moveDot"></div>
        </div>

        <p className="text-gray-700 text-md leading-relaxed mt-2">
          We are a forward-thinking technology company dedicated to delivering
          scalable, secure, and high-performance digital solutions.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-87.5 md:h-112.5 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/about.jpeg"
            alt="Team collaboration at AgileInnovate"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div ref={contentRef} className="text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">AgileInnovate</span>
          </h2>
          <p className="text-gray-600 text-md leading-relaxed mb-6">
            At{" "}
            <span className="font-semibold text-blue-600">AgileInnovate</span>,
            we’re passionate about driving digital transformation through
            innovation, agility, and cutting-edge technology. We partner with
            businesses worldwide to design, develop, and deploy powerful digital
            solutions that accelerate growth and efficiency.
          </p>

          <p className="text-gray-600 text-md leading-relaxed mb-6">
            Our team of dedicated developers, designers, and strategists brings
            years of experience in web, mobile, cloud, and AI-driven
            technologies. Whether you’re a startup or an enterprise, we deliver
            scalable, secure, and future-ready software that fits your unique
            business needs.
          </p>

          <a
            href="/about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

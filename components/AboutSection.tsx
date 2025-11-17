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

    if (sectionEl && contentEl ) {
      const ctx = gsap.context(() => {
        // Animate text content
        gsap.from(contentEl, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 60%", // when 80% of viewport hits section
          },
        });
      }, sectionEl);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
       
        <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/about.jpeg"
            alt="Team collaboration at AgileInnovate"
            fill
            className="object-cover rounded-2xl"
          />
         
        </div>

        {/* Right Side - Text */}
        <div ref={contentRef} className="text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">AgileInnovate</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-semibold text-blue-600">AgileInnovate</span>, 
            we’re passionate about driving digital transformation through innovation, 
            agility, and cutting-edge technology. We partner with businesses worldwide 
            to design, develop, and deploy powerful digital solutions that accelerate 
            growth and efficiency.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our team of dedicated developers, designers, and strategists brings years of 
            experience in web, mobile, cloud, and AI-driven technologies. Whether you’re 
            a startup or an enterprise, we deliver scalable, secure, and future-ready 
            software that fits your unique business needs.
          </p>

          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

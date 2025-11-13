"use client";

import Image from "next/image";

export default function LightDev() {
     const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "25", label: "Development Experts" },
    { number: "40%", label: "Faster Delivery" },
    { number: "24", label: "Hour Support" },
  ];

   const categories = [
    {
      title: "Frontend",
      items: [
        "React.js with Next.js",
        "Vue.js with Nuxt.js",
        "Angular with Ionic",
        "Tailwind CSS",
        "Web Components",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js with Express",
        "Python with Django",
        "Java Spring Boot",
        ".NET Core",
        "Serverless Architecture",
      ],
    },
    {
      title: "DevOps",
      items: [
        "Docker & Kubernetes",
        "AWS/GCP/Azure",
        "Terraform",
        "GitHub Actions",
        "ArgoCD",
      ],
    },
    {
      title: "Lightspeed Specializations",
      items: [
        "Custom API Extensions",
        "POS Integrations",
        "Omnichannel Solutions",
        "Inventory Sync Systems",
        "Checkout Optimizations",
      ],
    },
  ];

  return (
    <>
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-7 flex flex-col md:flex-row items-center gap-16">
        
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 space-y-7">
          <h1 className="text-gray-900 text-5xl md:text-6xl font-extrabold leading-tight">
            Fast & Reliable <br />
            <span className="text-blue-700">LightSpeed</span> <br />
            Development Services
          </h1>

          <p className="text-gray-700 text-xl leading-relaxed max-w-xl">
            Delivering high-speed, optimized, and scalable applications 
            using cutting-edge LightSpeed development frameworks.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
              Start Your Project
            </button>

            <button className="px-8 py-3 text-lg font-semibold text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-between pt-20">
          <div className="relative w-full max-w-[600px] h-[380px] overflow-hidden">
            <Image
              src="/lightspeed.webp" 
              alt="LightSpeed Development"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
     <section className="bg-[#1E1B87] py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white text-center gap-10 md:gap-0">
        
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-2 relative w-full md:w-1/4">
            {/* Vertical divider except last */}
            {idx !== stats.length - 1 && (
              <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/30"></span>
            )}

            {/* Number */}
            <div className=" text-white text-4xl md:text-5xl font-bold px-14 py-4">
              {item.number}
            </div>

            {/* Label */}
            <p className="text-gray-200 text-md">{item.label}</p>
          </div>
        ))}

      </div>
    </section>

     <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          Our Accelerated Tech Stack
          </h2>
          <p className="text-gray-600 mb-10 text-md">
            We combine the best modern technologies with our proprietary frameworks.
          </p>

          {/* GRID OF BOXES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl shadow-xl p-6 hover:shadow-md transition"
              >
                <h3 className="text-blue-900 font-semibold text-lg border-b border-gray-200 pb-2 mb-3">
                  {cat.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  {cat.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[550px] h-[550px]">
            <Image
              src="/lighspeed2.jpg" 
              alt="Tech Stack Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>

     <section className="bg-[#1E1B87] py-12">
   <div className="text-center">
  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Ready to Accelerate Your<br/> Development
  </h1>

  <p className="text-md text-gray-100 max-w-2xl mx-auto mb-6">
    Our Lightspeed Development team can help you bring your product to market
    faster without compromising quality.
  </p>

  <button
    className="
      px-8 py-2 text-md font-md
      bg-blue-600 text-white rounded-full
      shadow-md hover:bg-blue-700 transition-all
    "
  >
    Schedule Free Consultation
  </button>
</div>

     </section>
    </>
  );
}

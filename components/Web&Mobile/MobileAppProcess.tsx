"use client";

export default function MobileAppProcess() {
  const steps = [
    {
      no: "01",
      title: "Requirement Analysis",
      desc: "We begin by understanding your app idea, target audience, features, and technical needs to build a clear development roadmap.",
    },
    {
      no: "02",
      title: "UI/UX Wireframing",
      desc: "Our design experts create intuitive wireframes and mobile-friendly layouts to ensure a smooth and engaging user experience.",
    },
    {
      no: "03",
      title: "App Development",
      desc: "Using modern mobile frameworks, we build fast, secure, and scalable mobile applications for iOS and Android.",
    },
    {
      no: "04",
      title: "Testing & Quality Assurance",
      desc: "We perform performance testing, device compatibility testing, and bug fixes to ensure a flawless user experience.",
    },
    {
      no: "05",
      title: "Deployment & Maintenance",
      desc: "We deploy your app to App Store and Play Store, provide updates, support, and long-term maintenance.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4">

        {/* Title Section */}
        <div className="text-center mb-6">
          <span className="text-blue-500 font-medium uppercase text-sm tracking-wide">
            Mobile App Process
          </span>

          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mt-2">
            End-to-End Mobile App Development
          </h2>

          <p className="text-gray-600 mt-3">
            A streamlined and efficient process to build powerful mobile applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-12">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-blue-200"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative mb-10">

              {/* Number Circle */}
              <div className="absolute -left-px top-4 transform -translate-x-1/2 
                w-12 h-12 rounded-full bg-white border-[3px] border-blue-500 
                flex items-center justify-center text-blue-600 font-bold shadow-md">
                {step.no}
              </div>

              {/* Content Card */}
              <div className="ml-16 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">{step.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

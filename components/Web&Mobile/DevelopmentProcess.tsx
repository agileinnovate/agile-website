"use client";

export default function DevelopmentProcess() {
  const steps = [
    {
      no: "01",
      title: "Discovery & Planning",
      desc: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
    },
    {
      no: "02",
      title: "UI/UX Design",
      desc: "Our designers create intuitive, visually appealing interfaces focused on user experience and conversion optimization.",
    },
    {
      no: "03",
      title: "Development",
      desc: "Using agile methodologies, we build your solution with clean, maintainable code and regular progress updates.",
    },
    {
      no: "04",
      title: "Testing & QA",
      desc: "Rigorous testing across devices and browsers ensures flawless performance before launch.",
    },
    {
      no: "05",
      title: "Deployment & Support",
      desc: "We handle seamless deployment and provide ongoing maintenance and support services.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* ---------- Title Section ---------- */}
        <div className="text-center mb-10">
          <span className="text-blue-500 font-medium uppercase text-xs sm:text-sm tracking-wide">
            Our Methodology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-bold mt-2 leading-tight">
            Proven Development Process
          </h2>

          <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Our structured approach ensures quality, transparency, and on-time delivery.
          </p>
        </div>

        {/* ---------- Timeline Container ---------- */}
        <div className="relative pl-8 sm:pl-14">

          {/* Vertical Line */}
          <div className="absolute left-3 sm:left-6 top-0 h-full w-0.5 bg-blue-200"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative mb-12 sm:mb-14">

              {/* Number Circle */}
              <div className="
                absolute 
                top-2 sm:top-3
                -left-0.5 sm:-left-[3px]
                transform -translate-x-1/2
                w-10 h-10 sm:w-12 sm:h-12 
                rounded-full bg-white border-[3px] border-blue-500 
                flex items-center justify-center 
                text-blue-600 text-sm sm:text-lg font-bold shadow-md">
                {step.no}
              </div>

              {/* Card */}
              <div className="ml-10 sm:ml-20 bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

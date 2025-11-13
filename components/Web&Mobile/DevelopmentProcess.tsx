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
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4">

        {/* Title Section */}
        <div className="text-center mb-6">
          <span className="text-blue-500 font-medium uppercase text-sm tracking-wide">
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mt-2">
            Proven Development Process
          </h2>
          <p className="text-gray-600 mt-3">
            Our structured approach ensures quality, transparency, and on-time delivery.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-12">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-blue-200"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative mb-10">

              {/* Circle */}
              <div className="absolute -left-px top-4 transform -translate-x-1/2 w-12 h-12 
                rounded-full bg-white border-[3px] border-blue-500 
                flex items-center justify-center text-blue-600 font-bold shadow-md">
                {step.no}
              </div>

              {/* Card */}
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

// Enhanced Career Page for Agile Innovate
"use client";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";


export default function Career() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    coverLetter: "",
    captcha: "",
  });

  type Job = {
id: string;
title: string;
level: string;
location: string;
short: string;
tags?: string[];
};

  const JOBS: Job[] = [
{
id: "frontend-react",
title: "Frontend Developer (React / Next.js)",
level: "Mid - Senior",
location: "Remote / Noida",
short: "Build modern, high-performance web interfaces using React and Next.js.",
tags: ["React", "Next.js", "TypeScript"],
},
{
id: "backend-node",
title: "Backend Developer (Node.js)",
level: "Mid - Senior",
location: "Remote / Noida",
short: "Design and implement scalable APIs and services in Node.js.",
tags: ["Node.js", "APIs", "Databases"],
},
{
id: "uiux-designer",
title: "UI/UX Designer",
level: "Mid",
location: "Remote / Noida",
short: "Craft delightful user experiences and high-fidelity interfaces.",
tags: ["Figma", "User Research", "Prototyping"],
},
];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      setFormData({ ...formData, [name]: e.target.files ? e.target.files[0] : null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Application submitted successfully!");
  };

  const formRef = useRef<HTMLDivElement | null>(null);

  const handleApplyNow = (jobTitle: string) => {
  setFormData({ ...formData, position: jobTitle });

  setTimeout(() => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};



  const jobs = [
    {
    title: "Frontend Developer",
    experience: "2–4 Years",
    stack: "React.js, TypeScript, Tailwind CSS, Redux",
  },
  {
    title: "iOS Developer",
    experience: "2–5 Years",
    stack: "Swift, SwiftUI, Xcode, REST APIs, Core Data",
  },
  {
    title: "Blockchain Project Manager",
    experience: "5–7 Years",
    stack: "Solidity, React, Hardhat, Ethers.js",
  },
  {
    title: "Backend Developer",
    experience: "3–5 Years",
    stack: "Node.js, Express, MongoDB",
  },
  
  {
    title: "PHP Developer",
    experience: "2–4 Years",
    stack: "PHP, Laravel, Symfony, MySQL, REST APIs",
  },
  {
    title: "React Native Developer",
    experience: "2–5 Years",
    stack: "React Native, Redux, TypeScript, REST APIs",
  },
];

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[45vh] mt-20 flex flex-col justify-center px-6 md:px-36 text-white overflow-hidden">
        <Image src="/CareerBG.jpg" alt="Agile Innovate Careers" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-blue-700/70 to-purple-700/70"></div>

        <motion.div 
        initial={{ opacity: 0, y: 90 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }} 
        className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-xl">
            Build the Future. <br /> Shape the Digital World.
          </h1>
          <p className="mt-5 text-md md:text-xl max-w-2xl text-gray-200 font-light">
            Join Agile Innovate — where innovation meets passion, and ideas become real-world impact.
          </p>
        </motion.div>
      </section>

 
      {/* CULTURE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}  
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-blue-700 mb-4">Life at Agile Innovate</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        At Agile Innovate, we believe that great products are built by great people. Our culture empowers creativity,
        collaboration, and continuous growth through real challenges and global opportunities.
      </p>

      <ul className="space-y-3 text-gray-800">
        <li>✔ Flexible Work Environment</li>
        <li>✔ Learning & Innovation Programs</li>
        <li>✔ Global Exposure & Client Interaction</li>
        <li>✔ Supportive Leadership & Mentorship</li>
      </ul>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }} 
      viewport={{ once: true }}
    >
      <Image
        src="/Career1.jpg"
        alt="Agile Innovate Work Culture"
        width={600}
        height={500}
        className="rounded-2xl object-cover"
      />
    </motion.div>

  </div>
</section>



   {/* opening section */}
       <section className="w-full bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Current Openings
        </h2>

        <div className="w-full h-0.5 bg-blue-900 my-8"></div>


        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-blue-50 hover:bg-blue-100 p-6 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-900">
                {job.title}
              </h3>

              <p className="text-sm text-gray-600 mt-3">
                <span className="font-semibold">Experience:</span> {job.experience}
              </p>

              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold">Tech Stack:</span> {job.stack}
              </p>

              {/* Buttons */}
              <div className="items-center mt-6">
                <button
                 onClick={() => handleApplyNow(job.title)}
                   className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition w-full">
                     Apply Now</button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* APPLY FORM SECTION */}
    <section
  ref={formRef}
  className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-14 mb-20 border border-gray-100"
>
  <div className="grid md:grid-cols-2 gap-12">
    
    {/* LEFT FORM */}
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Apply for a <span className="text-blue-600">Role</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* NAME + EMAIL */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 
            placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 
            placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
          />
        </div>

       
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 
            placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
          />

          <input
            type="text"
            name="position"
            placeholder="Position (e.g., React Developer)"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 
            placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
          />
        </div>

        {/* FILE UPLOAD */}
        <div>
          <label className="block text-sm text-gray-800  font-medium">Upload Resume</label>

          <input
            type="file"
            name="resume"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 
            cursor-pointer bg-white file:bg-blue-100 file:text-blue-700 
            file:px-4 file:py-2 file:rounded-md hover:file:bg-blue-200"
          />
        </div>

        {/* COVER LETTER */}
        <textarea
          name="coverLetter"
          placeholder="Cover Letter (Optional)"
          rows={4}
          value={formData.coverLetter}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 
          placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
        ></textarea>

        {/* CAPTCHA */}
        <input
          type="text"
          name="captcha"
          placeholder="What is 3 + 2?"
          value={formData.captcha}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 
          placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
        />

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className=" bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg 
          hover:bg-blue-700 transition shadow-md"
        >
          Submit Application
        </button>
      </form>
    </div>

    {/* RIGHT SIDE INFO */}
    <div className="bg-blue-50 p-8 rounded-2xl shadow-md">
      <h3 className="text-2xl font-bold text-blue-800 mb-6">Why Join Agile Innovate?</h3>

      <ul className="space-y-3 mb-10 text-gray-700 text-sm mt-20">
        <li>🌍 Friendly, Inclusive Environment</li>
        <li>🚀 Fast Career Growth & Mentorship</li>
        <li>💼 Work on International Projects</li>
        <li>📘 Upskilling & Certification Support</li>
        <li>🔥 Competitive Salary & Benefits</li>
      </ul>

      <div className="grid grid-cols-2 gap-3 text-center mt-30">
        <div>
          <h4 className="text-2xl font-bold text-blue-700">95%</h4>
          <p className="text-gray-600 text-sm">Team Satisfaction</p>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-blue-700">500+</h4>
          <p className="text-gray-600 text-sm">Clients Served</p>
        </div>
      </div>
    </div>

  </div>
</section>
    </main>
  );
}


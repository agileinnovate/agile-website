"use client";

import Image from "next/image";
import { useState, ChangeEvent } from "react";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
      setFormData({
        ...formData,
        [name]: e.target.files ? e.target.files[0] : null,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[45vh] mt-20 flex flex-col justify-center px-6 md:px-36 text-white overflow-hidden">
        <Image
          src="/CareerBG.jpg"
          alt="Team Collaboration"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-700/90 via-blue-500/80 to-purple-700/80 mix-blend-multiply blur-2xl"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Code the Change. <br />
            Lead the Revolution.
          </h1>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative z-20 flex justify-center px-4 py-16">
        <div className="max-w-4xl bg-blue-50 rounded-2xl shadow-2xl p-8 md:p-12 border border-blue-100">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="hidden md:block w-1 bg-blue-600 rounded-full mt-2"></div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                About Our Company
              </h2>
              <p className="text-gray-800 text-md leading-relaxed mb-4">
                We are pioneers in blockchain technology and innovative IT
                solutions, committed to delivering excellence and empowering
                businesses worldwide.
              </p>
              <p className="text-gray-800 text-md leading-relaxed">
                Our culture thrives on collaboration, creativity, and continuous
                learning, making us the perfect place to grow your career while
                shaping the future of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-4 md:p-14 mb-20 border border-gray-100">
        <div className="grid md:grid-cols-2 gap-10">

          {/* ===== LEFT - FORM ===== */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Apply for a <span className="text-blue-600">Position</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={formData.position}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-800 mb-1">
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer p-2 focus:outline-none focus:border-blue-500"
                  accept=".pdf,.doc,.docx"
                />
              </div>

              <textarea
                name="coverLetter"
                placeholder="Cover Letter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={4}
                className="border border-gray-300 text-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
              ></textarea>

              <input
                type="text"
                name="captcha"
                placeholder="What is 1 + 4?"
                value={formData.captcha}
                onChange={handleChange}
                className="border border-gray-300 text-gray-700 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
                required
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* ===== RIGHT - INFO ===== */}
          <div className="bg-blue-50 p-8 rounded-2xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">
              Why Join Us?
            </h3>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li>🌍 Friendly work environment</li>
              <li>🚀 Career acceleration & growth</li>
              <li>💼 Work on global client projects</li>
              <li>📘 Continuous learning & upskilling</li>
              <li>🔥 Attractive compensation packages</li>
            </ul>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-3xl font-bold text-blue-600">95%</h4>
                <p className="text-gray-500 text-sm">Team Satisfaction</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-3xl font-bold text-blue-600">500+</h4>
                <p className="text-gray-500 text-sm">Clients Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="w-full">

      {/* ===================== HERO SECTION ===================== */}
     <section className="relative h-[54vh]  flex flex-col justify-center px-6 md:px-36 text-white overflow-hidden">
            <Image
              src="/CareerBG.jpg"
              alt="Team Collaboration"
              fill
              priority
              className="object-cover pt-15"
            />
            <div className="absolute inset-0 bg-linear-to-r from-blue-700/90 via-blue-500/80 to-purple-700/80 mix-blend-multiply blur-3xl"></div>
    
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight pt-45 px-12 text-gray-50">
                Code the Change. <br />
                Lead the Revolution.
              </h1>
            </div>
          </section>


      {/* ===================== CONTENT SECTION ===================== */}
     <section className="py-10 px-4 flex justify-center bg-white terms-text">

        <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl p-6 md:p-12">

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Privacy Policy
          </h2>

          <p className="text-center text-gray-500 text-sm mt-1">
            Last updated: June 2, 2025
          </p>

          {/* Intro */}
          <p className="text-gray-600 text-center text-sm mt-3">
            At AgileInnovate ("we," "us," or "our"), we prioritize your privacy.
            This policy explains how we collect, use, and protect your data when
            you use our services or visit our website.
          </p>

          {/* Section 1 */}
          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
              1. Information We Collect
            </h3>
<div className="w-full h-px bg-gray-300"></div>

            <p className="text-gray-700 font-semibold text-sm mb-2 mt-3">Personal Data:</p>
            <p className="text-gray-600 leading-relaxed text-sm ml-3">
               Contact details (name, email, phone) When you inquire or request services <br/> 
               Business information (company name, project requirements).<br/>
               Wallet addresses (if you pay via cryptocurrency).
            </p>

            <p className="text-gray-700 font-semibold text-sm mb-2 mt-4">Automated Data:</p>
            <p className="text-gray-600 leading-relaxed text-sm ml-3">
               IP address, browser type, and device information via cookies. <br/> 
              On-chain data (for blockchain analytics, if applicable).<br/>
         
            </p>
          </div>

          {/* Section 2 */}
          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
            2. Use of Data
            </h3>
           <div className="w-full h-px bg-gray-300"></div>

           <p className="text-gray-700 font-semibold text-sm mb-2 mt-4">We use your data to:</p>
            <p className="text-gray-600 leading-relaxed ml-3 text-sm">
            Provide and improve our blockchain development services.<br/>
            Process transactions (including crypto payments).<br/>
            Communicate about projects, updates, or security issues.<br/>
            Analyze website traffic and on-chain interactions.<br/>
            Comply with legal obligations (e.g., KYC/AML checks if required).
            </p>
          </div>

          {/* Section 3 */}
          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
             3. Data Sharing & Disclosure
            </h3>
            <div className="w-full h-px bg-gray-300"></div>

            <p className="text-gray-700 font-semibold text-sm mb-2 mt-4">We do not sell your data. Limited sharing occurs with:</p>
            <p className="text-gray-600 leading-relaxed ml-3 text-sm">
              Service Providers: Hosting, payment processors, or auditors.<br/>
              Blockchain Networks: Public transactions are immutable and visible on-chain.<br/>
              Legal Compliance: If required by law (e.g., subpoenas).<br/>
            </p>
          </div>

          {/* Section 4 */}
          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
              4. Security Measures
            </h3>
<div className="w-full h-px bg-gray-300"></div>

            <p className="text-gray-600 leading-relaxed">
            We implement:
            </p>

            <p className="text-gray-600  mt-2 text-sm ">
           Encryption (SSL/TLS for data transmission).<br/>
           Secure storage for sensitive information.<br/>
           Smart contract audits to minimize vulnerabilities.
            </p>
          </div>

           {/* Section 5 */}
          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
              5. Cookies & Tracking
            </h3>
<div className="w-full h-px bg-gray-300"></div>

            <p className="text-gray-600 leading-relaxed">
            We use cookies for:
            </p>

            <p className="text-gray-600  mt-2 text-sm ">
           Website functionality (e.g., login sessions).<br/>
           Analytics (Google Analytics, anonymized).
          
            </p>
          </div>

           {/* Section 6 */}
          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
              6. Your Rights
            </h3>
<div className="w-full h-px bg-gray-300"></div>

            <p className="text-gray-600 leading-relaxed">
            Depending on your jurisdiction, you may:
            </p>

            <p className="text-gray-600  mt-2 text-sm ">
           Request access, correction, or deletion of personal data.<br/>
           Opt out of marketing communications.<br/>
           Withdraw consent (where applicable).
            </p>
          </div>

           {/* Section 7 */}
          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
              7. Policy Updates
            </h3>

            <div className="w-full h-px bg-gray-300"></div>


            <p className="text-gray-600  mt-2 text-sm ">
           We may update this policy. Changes will be posted here with a revised "Last updated" date.
            </p>
          </div>

          <p className="text-center text-gray-600 mt-6 text-sm">
          For privacy requests, contact our Data Protection Officer at<span className="text-blue-600"> info@agileinnovate.com </span>
          </p>

        </div>
      </section>
    </div>
  );
}

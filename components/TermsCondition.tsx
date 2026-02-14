"use client";
import Image from "next/image";

export default function TermsCondition() {
  return (
    <div className="w-full">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative h-[54vh]  flex flex-col justify-center px-6 md:px-36 text-white overflow-hidden">
        <Image
          src="/privay-bg.jpg"
          alt="Team Collaboration"
          fill
          priority
          className="object-cover pt-15"
        />

        <section className="relative  py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-300 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-100 max-w-xl mx-auto">
            Please read these terms carefully before using our website and
            services.
          </p>
        </section>
      </section>

      {/* ===================== CONTENT SECTION ===================== */}
      <section className="py-10 px-1 flex justify-center bg-white terms-text">
        <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl p-4 md:p-12">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Terms and Conditions
          </h2>

          <p className="text-center text-sm text-gray-500 mt-1">
            Last updated: June 2, 2025
          </p>


          <p className="text-gray-600 text-center text-sm mt-3">
            Welcome to SeQuere Technologies ("we," "us," or "our"). These Terms
            and Conditions govern your use of our blockchain development
            services. By engaging with us, you agree to comply with these terms.
          </p>

          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
              1. Services Provided
            </h3>
            <div className="w-full h-px bg-gray-300"></div>

            <p className="text-gray-600 font-semibold text-sm mb-2 mt-3">
              SeQuere Technologies offers blockchain-related services, including
              but not limited to:
            </p>
            <p className="text-gray-600 leading-relaxed text-sm ml-3">
              Smart Contract Development (Ethereum, Solana, Binance Smart Chain,
              etc.)
              <br />
              Decentralized Application (dApp) Development
              <br />
              Tokenization & NFT Solutions
              <br />
              Blockchain Consulting & Architecture Design
              <br />
              Private & Consortium Blockchain Deployment
              <br />
              Security Audits & Penetration Testing
              <br />
              Web & Mobile Development
            </p>

            <p className="text-gray-600 leading-relaxed text-sm ml-3">
              All services are subject to a formal agreement outlining
              deliverables, timelines, and costs.
            </p>
          </div>

  
          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
              2. Intellectual Property Rights
            </h3>
            <div className="w-full h-px bg-gray-300"></div>

            <p className="text-gray-600 text-sm mt-2">
              <span className="font-semibold text-gray-700">
                Pre-Existing IP:
              </span>{" "}
              Any pre-existing intellectual property owned by either party
              remains their sole property.
            </p>

            <p className="text-gray-600 text-sm mt-4">
              <span className="font-semibold text-gray-700">Developed IP:</span>{" "}
              Unless otherwise agreed in writing, all custom-developed code,
              smart contracts, and technical documentation remain the property
              of AgileInnovate until full payment is received. Upon payment, the
              client receives a non-exclusive, perpetual license to use the
              deliverables.
            </p>
            <p className="text-gray-600 text-sm mt-4">
              <span className="font-semibold text-gray-700">
                Open-Source Components:
              </span>{" "}
              Some solutions may incorporate open-source software, subject to
              their respective licenses.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-2">
              3. Payment & Fees
            </h3>
            <div className="w-full h-px bg-gray-300"></div>

            <p className="text-gray-700 font-semibold text-sm mb-2 mt-4">
              Payment Schedule:
            </p>
            <p className="text-gray-600 leading-relaxed text-sm ml-3">
              50% upfront payment before work begins
              <br />
              30% upon milestone completion
              <br />
              20% upon final delivery
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
              4. Confidentiality & Data Protection
            </h3>
            <div className="w-full h-px bg-gray-300"></div>

            <p className="text-gray-600  mt-2 text-sm ">
              Both parties agree to keep proprietary information confidential.
              We comply with GDPR and other applicable data protection laws.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-2">
              5. Limitations of Liability
            </h3>
            <div className="w-full h-px bg-gray-300"></div>
            <p className="text-gray-600 text-sm mt-2">
              <span className="font-semibold text-gray-700">No Warranty:</span>{" "}
              Blockchain technology is experimental. We do not guarantee
              uninterrupted or error-free service.
            </p>

            <p className="text-gray-600 text-sm mt-2">
              <span className="font-semibold text-gray-700">
                Indirect Damages:
              </span>{" "}
              SeQuere Technologies is not liable for lost profits, data
              breaches, or third-party issues arising from blockchain use.
            </p>

            <p className="text-gray-600 text-sm mt-2">
              <span className="font-semibold text-gray-700">
                Regulatory Compliance:
              </span>{" "}
              Clients are responsible for ensuring their use of our services
              complies with local laws.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
              6. Termination
            </h3>
            <div className="w-full h-px bg-gray-300"></div>

            <p className="text-gray-600  mt-2 text-sm ">
              Either party may terminate with 30 days' written notice. Unpaid
              work remains due, and pre-paid uncompleted work is refunded
              proportionally.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
              7. Governing Law & Dispute Resolution
            </h3>
            <div className="w-full h-px bg-gray-300"></div>
            <p className="text-gray-600  mt-2 text-sm ">
              These terms are governed by the laws of state of Punjab, India.
              Disputes shall first attempt mediation before litigation.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-xl font-bold text-blue-600 mb-3">
              8. Amendments
            </h3>

            <div className="w-full h-px bg-gray-300"></div>

            <p className="text-gray-600  mt-2 text-sm ">
              We may update these terms periodically. Continued engagement
              implies acceptance
            </p>
          </div>

          <p className="text-center text-gray-600 mt-2">
            For questions, contact us at
            <span className="text-blue-600"> info@agileinnovate.com </span>
          </p>
        </div>
      </section>
    </div>
  );
}

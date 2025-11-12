"use client";

import { BsBank2 } from "react-icons/bs";
import { FaTruck, FaClinicMedical, FaStore, FaBuilding, FaGamepad } from "react-icons/fa";
import IndustryCard from "./IndustryCard";

export default function IndustriesModel() {
  return (
    <div className="bg-white rounded-3xl p-10 w-[750px] shadow-2xl border border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <IndustryCard icon={<BsBank2 />} title="Finance & Banking" url="/industries/finance" />
        <IndustryCard icon={<FaTruck />} title="Supply Chain & Logistics" url="/industries/supply" />
        <IndustryCard icon={<FaClinicMedical />} title="Healthcare" url="/industries/healthcare" />
        <IndustryCard icon={<FaStore />} title="Retail & E-Commerce" url="/industries/retail" />
        <IndustryCard icon={<FaBuilding />} title="Real Estate" url="/industries/realestate" />
        <IndustryCard icon={<FaGamepad />} title="Gaming & Metaverse" url="/industries/gaming" />
      </div>
    </div>
  );
}

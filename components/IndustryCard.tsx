"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface IndustryCardProps {
  icon: ReactNode;
  title: string;
  url: string;
}

export default function IndustryCard({ icon, title, url }: IndustryCardProps) {
  return (
    <Link href={url} className="block">
      <div
        className="
          bg-white
          shadow-md
          rounded-xl
          p-4
          flex
          items-center
          gap-4
          border
          border-gray-200
          hover:shadow-xl
          
          cursor-pointer
        "
      >
        {/* LEFT ICON */}
        <div className="text-blue-600 text-4xl shrink-0">
          {icon}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col">
          <h3 className="text-sm font-md text-gray-800">
            {title}
          </h3>

          <div className="w-14 h-0.5 bg-blue-600 rounded-full mt-1"></div>
        </div>
      </div>
    </Link>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { press as staticPressRoom } from "@/lib/press";

interface PressEntry {
  slug: string;
  title: string;
  desc: string;
  image: string;
  date: string;
  content: string;
}

export default function PressRoom() {
  const pressItems = staticPressRoom;

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="relative h-80 md:h-105 flex items-center justify-center text-center px-6">
        <Image
          src="/Bg-hero.jpg"
          alt="AgileInnovate Press Room"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#051B43]/80"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Press Room
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            Stay updated with the latest news, announcements, and media coverage
            from AgileInnovate.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {pressItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {pressItems.map((item) => (
              <Link
                key={item.slug}
                href={`/press/${item.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300 border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1EA6FF] transition leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 mt-3 text-sm line-clamp-2 italic font-medium">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center text-[#1EA6FF] font-black text-xs uppercase tracking-widest group-hover:underline">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <p className="text-slate-400 font-bold uppercase tracking-widest">
              No press releases available at this time.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

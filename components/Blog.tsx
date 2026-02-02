"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs as staticBlogs } from "@/lib/blogs";
import { fetchBlogs } from "@/lib/api";

interface BlogEntry {
  slug: string;
  title: string;
  desc: string;
  image: string;
  date: string;
  category: string;
  content: string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const response = await fetchBlogs();
        const data = response.data || response;

        if (Array.isArray(data) && data.length > 0) {
          const mappedBlogs = data.map((b: any) => ({
            ...b,
            desc:
              b.desc ||
              b.content?.slice(0, 150).replace(/<[^>]*>/g, "") + "..." ||
              "",

            image:
              b.image?.startsWith("http") || b.image?.startsWith("data:")
                ? b.image
                : b.image
                  ? `http://localhost:4000/uploads/${b.image.replace(/^\/?uploads\//, "")}`
                  : "/Bg-hero.jpg",
          }));
          setBlogs(mappedBlogs);
        } else {
          setBlogs(staticBlogs);
        }
      } catch (error) {
        console.error("Failed to fetch blogs, using static fallback:", error);
        setBlogs(staticBlogs);
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* ================= HERO WITH BG IMAGE ================= */}
      <div className="relative h-80 md:h-[420px] flex items-center justify-center text-center px-6">
        <Image
          src="/Bg-hero.jpg"
          alt="AgileInnovate Blog"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            AgileInnovate Blog
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            Insights, trends, and expert guidance on software development,
            technology, and digital transformation.
          </p>
        </div>
      </div>

      {/* ================= BLOG GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {loading ? (
          <div className="text-center py-20">
            <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-500 font-medium">
              Fetching latest insights...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover "
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs text-blue-600 font-medium mb-2">
                    {blog.date}
                  </p>
                  <h2 className="text-xl font-bold text-gray-900 transition">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mt-3 text-sm line-clamp-2">
                    {blog.desc}
                  </p>

                  <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm">
                    Read More
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs as staticBlogs } from "@/lib/blogs";
import {
  Search,
  Sparkles,
  Bot,
  Loader2,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    try {
      const mapped = staticBlogs.map((b: any) => ({
        ...b,
        date: b.date || "Jan 1, 2025",
        desc:
          b.desc ||
          (b.content
            ? b.content.slice(0, 150).replace(/<[^>]*>/g, "") + "..."
            : ""),
        image: b.image || "/Bg-hero.jpg",
      }));

      setBlogs(mapped);
    } catch (err) {
      console.error(err);
      setError("Failed to load blogs.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <div className="relative h-80 md:h-105 flex items-center justify-center text-center px-6">
        <Image
          src="/Bg-hero.jpg"
          alt="AgileInnovate Blog"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

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

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600 mb-4" />
            <p className="text-gray-500 font-medium">
              Loading latest insights...
            </p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-100 rounded-3xl p-10 text-center max-w-2xl mx-auto">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gray-900 text-white px-6 py-2 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : blogs.length > 0 ? (
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
                    className="object-cover"
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No blogs found at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

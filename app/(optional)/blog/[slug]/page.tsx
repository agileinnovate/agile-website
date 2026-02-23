import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs as staticBlogs } from "@/lib/blogs";
import { fetchBlogBySlug } from "@/lib/api";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let blog;
  try {
    blog = await fetchBlogBySlug(slug);
    if (!blog) {
      blog = staticBlogs.find((b) => b.slug === slug);
    }
  } catch (error) {
    blog = staticBlogs.find((b) => b.slug === slug);
  }

  if (!blog) return { title: "Blog Not Found" };

  return {
    title: `${blog.title} | Agailinnovate Blog`,
    description:
      blog.desc || blog.content?.slice(0, 160).replace(/<[^>]*>/g, ""),
    openGraph: {
      title: blog.title,
      description:
        blog.desc || blog.content?.slice(0, 160).replace(/<[^>]*>/g, ""),
      type: "article",
      images: [
        blog.image?.startsWith("http") || blog.image?.startsWith("data:")
          ? blog.image
          : blog.image?.startsWith("/") && !blog.image?.startsWith("/uploads")
            ? blog.image
            : blog.image
              ? `http://localhost:4000/uploads/${blog.image.replace(/^\/?uploads\//, "")}`
              : "/Bg-hero.jpg",
      ],
    },
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;

  let blog;
  try {
    const fetchedBlog = await fetchBlogBySlug(slug);
    if (fetchedBlog) {
      blog = {
        ...fetchedBlog,
        desc:
          fetchedBlog.desc ||
          fetchedBlog.content?.slice(0, 150).replace(/<[^>]*>/g, "") + "..." ||
          "",
        category: fetchedBlog.category || "Technology",
      };
    } else {
      blog = staticBlogs.find((b) => b.slug === slug);
    }
  } catch (error) {
    console.error("Error fetching blog from API, trying fallback:", error);
    blog = staticBlogs.find((b) => b.slug === slug);
  }

  if (!blog) return notFound();

  return (
    <article className="bg-white text-black pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* IMAGE SECTION */}
        <div className="flex justify-center mb-6 pt-4">
          <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src={
                blog.image?.startsWith("http") ||
                blog.image?.startsWith("data:")
                  ? blog.image
                  : blog.image?.startsWith("/") &&
                      !blog.image?.startsWith("/uploads")
                    ? blog.image
                    : blog.image
                      ? `http://localhost:4000/uploads/${blog.image.replace(/^\/?uploads\//, "")}`
                      : "/Bg-hero.jpg"
              }
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight px-4">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center space-x-3 text-gray-400">
            <span className="h-px w-6 bg-gray-100"></span>
            <p className="text-xs font-semibold uppercase tracking-widest italic">
              {blog.date}
            </p>
            <span className="h-px w-6 bg-gray-100"></span>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="max-w-2xl mx-auto">
          {blog.desc && (
            <div className="mb-10 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-400 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed pl-6 italic">
                {blog.desc}
              </p>
            </div>
          )}

          <div
            className="prose prose-blue max-w-none text-gray-900 rich-text-content"
            dangerouslySetInnerHTML={{
              __html: blog?.content || "<p>No content available.</p>",
            }}
          />
        </div>
      </div>
    </article>
  );
}

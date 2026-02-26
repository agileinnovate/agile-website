import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "@/lib/blogs";
import ReactMarkdown from "react-markdown";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* STATIC SLUG GENERATION */
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

/* SEO METADATA */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return { title: "Blog Not Found" };

  return {
    title: `${blog.title} | Agailinnovate Blog`,
    description:
      blog.desc || blog.content?.slice(0, 160).replace(/<[^>]*>/g, ""),
    openGraph: {
      title: blog.title,
      description:
        blog.desc || blog.content?.slice(0, 160).replace(/<[^>]*>/g, ""),
      images: [blog.image || "/Bg-hero.jpg"],
    },
  };
}

/* BLOG DETAIL PAGE */
export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;

  const blogData = blogs.find((b) => b.slug === slug);

  if (!blogData) return notFound();

  return (
    <article className="bg-white text-black pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-6 pt-4">
          <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src={blogData.image || "/Bg-hero.jpg"}
              alt={blogData.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {blogData.title}
          </h1>
          <p className="text-xs text-gray-500">{blogData.date}</p>
        </div>

        <div className="prose max-w-none">
          <ReactMarkdown>{blogData.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}

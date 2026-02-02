import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchPressBySlug } from "@/lib/api";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PressDetail({ params }: Props) {
  const { slug } = await params;

  let press;
  try {
    press = await fetchPressBySlug(slug);
  } catch (error) {
    console.error("Error fetching press item from API:", error);
    return notFound();
  }

  if (!press) return notFound();
  const displayImage =
    press.image?.startsWith("http") || press.image?.startsWith("data:")
      ? press.image
      : press.image
        ? `http://localhost:4000/uploads/${press.image.replace(/^\/?uploads\//, "")}`
        : "/Bg-hero.jpg";

  const displayDate =
    press.date ||
    (press.createdAt ? new Date(press.createdAt).toLocaleDateString() : "");

  return (
    <article className="bg-white text-black pt-32 pb-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-10 pt-4">
          <div className="relative w-full max-w-2xl aspect-21/9 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src={displayImage}
              alt={press.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {press.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <div className="h-px w-8 bg-gray-200"></div>
            <p className="text-xs font-black uppercase tracking-widest italic">
              {displayDate}
            </p>
            <div className="h-px w-8 bg-gray-200"></div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="max-w-2xl mx-auto">
          <div
            className="prose prose-blue prose-lg max-w-none text-gray-800 rich-text-content leading-relaxed font-medium"
            dangerouslySetInnerHTML={{
              __html: press?.content || "<p>No content available.</p>",
            }}
          />

          <div className="mt-16 pt-8 border-t border-gray-100 italic text-sm text-gray-500 text-center">
            For further media inquiries, please contact our PR department at
            pr@agileinnovate.tech
          </div>
        </div>
      </div>
    </article>
  );
}

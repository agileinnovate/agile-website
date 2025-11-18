import type { Metadata } from "next";
import WebDev from "@/components/Web&Mobile/WebDev";

export const metadata: Metadata = {
  title: "Web Development Services | Agailinnovate",
  description:
    "Agailinnovate provides modern, scalable, and high-performance web development services using cutting-edge technologies like React, Next.js, Node.js, and cloud-optimized architectures.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/service/web-development",
  },
  openGraph: {
    title: "Web Development Services | Agailinnovate",
    description:
      "Build fast, secure, and scalable web applications with Agailinnovate's expert development team. Powered by the latest web technologies.",
    url: "https://agile-website-tan.vercel.app/service/web-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | Agailinnovate",
    description:
      "Professional web development services using React, Next.js, Node.js, and other modern technologies.",
    
  },
};

export default function WebPage() {
  return <WebDev />;
}

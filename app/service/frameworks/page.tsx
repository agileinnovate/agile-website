import type { Metadata } from "next";
import Framework from "@/components/Web&Mobile/Framework";

export const metadata: Metadata = {
  title: "Web & Mobile Frameworks | Agailinnovate",
  description:
    "Explore the powerful web and mobile development frameworks used by Agailinnovate, including React, Next.js, Angular, Flutter, React Native, and more.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/service/frameworks",
  },
  openGraph: {
    title: "Web & Mobile Development Frameworks | Agailinnovate",
    description:
      "Discover the robust frameworks we use to build scalable, secure, and modern web & mobile applications.",
    url: "https://agile-website-tan.vercel.app/service/frameworks",
   
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Mobile Frameworks | Agailinnovate",
    description:
      "Explore the core frameworks behind Agailinnovate’s modern digital solutions.",
   
  },
};

export default function FrameworksPage() {
  return <Framework />;
}

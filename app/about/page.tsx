import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About Us | Agailinnovate",
  description:
    "Learn about Agailinnovate — a technology-driven company delivering innovative, secure, and scalable digital solutions.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/about",
  },
  openGraph: {
    title: "About Us | Agailinnovate",
    description:
      "Discover who we are, what we do, and how Agailinnovate helps businesses grow with cutting-edge technology.",
    url: "https://agile-website-tan.vercel.app/about",
  
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Agailinnovate",
    description:
      "Learn about Agailinnovate — delivering secure and scalable tech solutions.",
    images: ["/og-about.png"],
  },
};

export default function AboutPage() {
  return <AboutSection />;
}

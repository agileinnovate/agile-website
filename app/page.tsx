import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import ReviewSection from "@/components/ReviewSection";
import ContactPage from "@/components/ContactPage";
import TechSlider from "@/components/TechSlider";

export const metadata: Metadata = {
  title: "Agailinnovate | Empowering Digital Innovation",
  description:
    "Agailinnovate builds secure, scalable, and future-ready digital solutions for businesses worldwide. Explore our services in web development, mobile apps, cloud, AI, and more.",
  metadataBase: new URL("https://agile-website-tan.vercel.app"),

  alternates: {
    canonical: "https://agile-website-tan.vercel.app/",
  },

  openGraph: {
    title: "Agailinnovate | Empowering Digital Innovation",
    description:
      "We deliver scalable, secure, and modern digital solutions — including web, mobile, cloud, AI, and enterprise platforms.",
    url: "https://agile-website-tan.vercel.app/",
    siteName: "Agailinnovate",
    images: [
      {
        url: "/og-home.png", // optional — add to /public
        width: 1200,
        height: 630,
        alt: "Agailinnovate Home Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Agailinnovate | Empowering Digital Innovation",
    description:
      "Innovative digital solutions for business growth — powered by Agailinnovate.",
    images: ["/og-home.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="relative">
        <Hero />
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-linear-to-b from-transparent to-white pointer-events-none"></div>
      </div>

      <div className="relative z-10 bg-white pt-24 md:pt-28">
        <AboutSection />
      </div>

      <ServicesSection />
      <ReviewSection />
      <Testimonial />
      <ContactPage />
      <TechSlider/>
    </main>
  );
}

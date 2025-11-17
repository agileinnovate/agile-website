import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import ReviewSection from "@/components/ReviewSection";
import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: "Agile Innovate | Software Development & Digital Solutions",
  description:
    "Agile Innovate builds high-performance software solutions including web apps, mobile apps, UI/UX design, cloud services, AI solutions, and enterprise digital products.",
  keywords: [
    "Software Development Company",
    "Web Development",
    "Mobile App Development",
    "Next.js Development",
    "UI UX Design",
    "Cloud Services",
    "AI Development",
    "Agile Innovate"
  ],
  openGraph: {
    title: "Agile Innovate | Build Digital Solutions That Scale",
    description:
      "We help businesses innovate with modern web, mobile, cloud, and AI technologies.",
    url: "https://yourdomain.com",
    siteName: "Agile Innovate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile Innovate | Digital Innovation Company",
    description:
      "Build modern, scalable, and secure digital products with Agile Innovate.",
  },
  alternates: {
    canonical: "https://yourdomain.com",
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
    </main>
  );
}

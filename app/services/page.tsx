import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services | Agailinnovate",
  description:
    "Discover Agailinnovate’s wide range of technology services including web development, app development, cloud solutions, UI/UX design, and digital transformation.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/services",
  },
  openGraph: {
    title: "Our Services | Agailinnovate",
    description:
      "Explore innovative and scalable digital solutions offered by Agailinnovate, including web development, cloud services, and more.",
    url: "https://agile-website-tan.vercel.app/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Agailinnovate",
    description:
      "Explore Agailinnovate’s digital solutions including development, cloud, UI/UX, AI integrations, and more.",
    images: ["/og-services.png"],
  },
};

export default function ServicesPage() {
  return <ServiceCard />;
}

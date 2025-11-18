import type { Metadata } from "next";
import RealEstate from "@/components/industries-pages/RealEstate";

export const metadata: Metadata = {
  title: "Real Estate & Property Tech Solutions | Agailinnovate",
  description:
    "Agailinnovate delivers advanced real estate and proptech solutions including property listing platforms, virtual tours, real estate CRM, automation tools, and smart property management systems.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/industries/realestate",
  },
  openGraph: {
    title: "Real Estate & Property Tech Solutions | Agailinnovate",
    description:
      "Transform your real estate business with innovative proptech solutions including listing portals, automation systems, VR property tours, and smart management platforms.",
    url: "https://agile-website-tan.vercel.app/industries/realestate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate & Property Tech Solutions | Agailinnovate",
    description:
      "Build modern real estate technology with Agailinnovate—listing systems, automation tools, smart property management, and VR experiences.",
  },
};

export default function RealstatePage() {
  return <RealEstate />;
}

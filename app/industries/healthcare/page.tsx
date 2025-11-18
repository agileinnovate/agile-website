import type { Metadata } from "next";
import Healthcare from "@/components/industries-pages/HealthCare";

export const metadata: Metadata = {
  title: "Healthcare & Medical Solutions | Agailinnovate",
  description:
    "Agailinnovate delivers modern healthcare technology solutions including telemedicine apps, EMR/EHR systems, patient portals, health analytics, and hospital management platforms.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/industries/healthcare",
  },
  openGraph: {
    title: "Healthcare & Medical Solutions | Agailinnovate",
    description:
      "Transform your healthcare organization with secure, compliant, and innovative digital health solutions including telemedicine, patient portals, and medical data systems.",
    url: "https://agile-website-tan.vercel.app/industries/healthcare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare & Medical Solutions | Agailinnovate",
    description:
      "Agailinnovate provides secure & scalable healthcare digital solutions, including telemedicine, EMR/EHR, and hospital management software.",
  },
};

export default function HealthPage() {
  return <Healthcare />;
}

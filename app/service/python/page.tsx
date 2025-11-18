import type { Metadata } from "next";
import PythonDev from "@/components/Web&Mobile/PythonDev";

export const metadata: Metadata = {
  title: "Python Development Services | Agailinnovate",
  description:
    "Agailinnovate offers professional Python development services including backend APIs, automation, AI/ML solutions, data processing, and scalable web applications.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/service/python",
  },
  openGraph: {
    title: "Python Development Services | Agailinnovate",
    description:
      "Build powerful backend systems, automation tools, machine learning models, and scalable applications with Agailinnovate’s Python development expertise.",
    url: "https://agile-website-tan.vercel.app/service/python",
  },
  twitter: {
    card: "summary_large_image",
    title: "Python Development Services | Agailinnovate",
    description:
      "High-performance Python development for APIs, automation, AI, ML, web apps, and backend solutions.",
    
  },
};

export default function WebPage() {
  return <PythonDev />;
}

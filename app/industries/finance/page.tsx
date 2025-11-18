import type { Metadata } from "next";
import Finance from "@/components/industries-pages/Finance";

export const metadata: Metadata = {
  title: "Finance & Banking Solutions | Agailinnovate",
  description:
    "Agailinnovate delivers secure, scalable, and compliant financial technology solutions including digital banking, fintech platforms, automation, analytics, and secure payment systems.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/industries/finance",
  },
  openGraph: {
    title: "Finance & Banking Solutions | Agailinnovate",
    description:
      "Transform your financial services with secure and innovative digital solutions—from fintech apps to automated workflows and enterprise banking platforms.",
    url: "https://agile-website-tan.vercel.app/industries/finance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance & Banking Solutions | Agailinnovate",
    description:
      "Explore advanced digital solutions for finance and banking, tailored for security, compliance, and high performance.",
  },
};

export default function FinancePage() {
  return <Finance />;
}

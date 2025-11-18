import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Agailinnovate",
  description:
    "Read Agailinnovate’s Privacy Policy to understand how we collect, use, protect, and safeguard your personal information while providing our digital services.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Agailinnovate",
    description:
      "Learn how Agailinnovate securely handles personal data and protects user privacy across all our digital services.",
    url: "https://agile-website-tan.vercel.app/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Agailinnovate",
    description:
      "Understand how Agailinnovate manages, protects, and uses personal information.",
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}

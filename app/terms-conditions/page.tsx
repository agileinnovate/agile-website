import type { Metadata } from "next";
import TermsCondition from "@/components/TermsCondition";

export const metadata: Metadata = {
  title: "Terms & Conditions | Agailinnovate",
  description:
    "Read Agailinnovate’s Terms & Conditions to understand the rules, policies, and legal guidelines for using our website, products, and digital services.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/terms-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Agailinnovate",
    description:
      "Learn the terms, policies, and conditions governing the use of Agailinnovate’s services and digital platforms.",
    url: "https://agile-website-tan.vercel.app/terms-conditions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Agailinnovate",
    description:
      "Review the terms and conditions that apply to Agailinnovate services and website usage.",

  },
};

export default function TermsPage() {
  return <TermsCondition />;
}

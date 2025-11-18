export const metadata = {
  title: "Terms & Conditions | Agile Innovate",
  description:
    "Read the Terms & Conditions of Agile Innovate to understand the rules, regulations, and responsibilities that govern the use of our software development services and website.",
  keywords: [
    "Terms and Conditions",
    "Agile Innovate Terms",
    "Service Agreement",
    "User Terms",
    "Legal Policies"
  ],
  openGraph: {
    title: "Terms & Conditions | Agile Innovate",
    description:
      "Learn about the terms and conditions governing the use of Agile Innovate’s website and software development services.",
    url: "https://yourdomain.com/terms-conditions",
    siteName: "Agile Innovate",
    type: "article",
  },
};

import TermsCondition from "@/components/TermsCondition";

export default function TermsPage() {
  return <TermsCondition />;
}

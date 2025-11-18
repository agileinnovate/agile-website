import type { Metadata } from "next";
import Technologies from "@/components/Web&Mobile/Technologies";

export const metadata: Metadata = {
  title: "Technologies We Use | Agailinnovate",
  description:
    "Explore the latest web and mobile technologies used by Agailinnovate, including modern frameworks, cloud platforms, databases, DevOps tools, and AI-powered development stacks.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/service/technologies",
  },
  openGraph: {
    title: "Technologies We Use | Agailinnovate",
    description:
      "Discover the cutting-edge technologies behind Agailinnovate’s high-performance web, mobile, and cloud applications.",
    url: "https://agile-website-tan.vercel.app/service/technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologies We Use | Agailinnovate",
    description:
      "Explore the powerful technologies powering Agailinnovate’s modern digital solutions.",
    
  },
};

export default function TechnologyPage() {
  return <Technologies />;
}

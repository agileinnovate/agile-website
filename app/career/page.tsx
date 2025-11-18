import type { Metadata } from "next";
import Career from "@/components/Career";

export const metadata: Metadata = {
  title: "Career Opportunities | Agailinnovate",
  description:
    "Explore exciting career opportunities at Agailinnovate. Join our innovative team and help build secure, scalable, and future-ready solutions.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/career",
  },
  openGraph: {
    title: "Career Opportunities | Agailinnovate",
    description:
      "Join Agailinnovate and build the future of digital innovation. Explore open positions and grow your career.",
    url: "https://agile-website-tan.vercel.app/career",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Opportunities | Agailinnovate",
    description:
      "Explore open roles and career growth opportunities at Agailinnovate.",
    images: ["/og-career.png"],
  },
};

export default function CareerPage() {
  return <Career />;
}

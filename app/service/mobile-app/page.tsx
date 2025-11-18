import type { Metadata } from "next";
import MobileApp from "@/components/Web&Mobile/MobileApp";

export const metadata: Metadata = {
  title: "Mobile App Development | Agailinnovate",
  description:
    "Build high-performance mobile apps with Agailinnovate. We deliver Android, iOS, and cross-platform mobile applications using modern frameworks and scalable architectures.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/service/mobile-app",
  },
  openGraph: {
    title: "Mobile App Development | Agailinnovate",
    description:
      "Agailinnovate develops robust, user-friendly, and scalable mobile apps using React Native, Flutter, Kotlin, Swift, and more.",
    url: "https://agile-website-tan.vercel.app/service/mobile-app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development | Agailinnovate",
    description:
      "Custom mobile applications crafted for performance, usability, and scalability — powered by Agailinnovate.",
  
  },
};

export default function WebPage() {
  return <MobileApp />;
}

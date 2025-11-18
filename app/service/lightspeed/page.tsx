import type { Metadata } from "next";
import LightDev from "@/components/Web&Mobile/LightDev";

export const metadata: Metadata = {
  title: "Lightning-Fast Development | Agailinnovate",
  description:
    "Experience lightning-fast web and mobile development with Agailinnovate. We use optimized workflows, modern frameworks, and high-performance architectures to deliver rapid, scalable solutions.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/service/lightspeed",
  },
  openGraph: {
    title: "Lightning-Fast Development | Agailinnovate",
    description:
      "Agailinnovate delivers high-speed development solutions using modern frameworks, optimized architectures, and efficient workflows.",
    url: "https://agile-website-tan.vercel.app/service/lightspeed",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightning-Fast Development | Agailinnovate",
    description:
      "Super-fast web and mobile development solutions powered by Agailinnovate’s optimized processes and modern tools.",
   
  },
};

export default function LightSpeedPage() {
  return <LightDev />;
}

import type { Metadata } from "next";
import Gaming from "@/components/industries-pages/Gaming";

export const metadata: Metadata = {
  title: "Gaming Solutions | Agailinnovate",
  description:
    "Agailinnovate delivers cutting-edge gaming solutions including game development, AR/VR experiences, multiplayer systems, gamification platforms, and high-performance gaming technology.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/industries/gaming",
  },
  openGraph: {
    title: "Gaming Solutions | Agailinnovate",
    description:
      "From game development to AR/VR, multiplayer experiences, and scalable backend infrastructure, Agailinnovate empowers gaming innovation.",
    url: "https://agile-website-tan.vercel.app/industries/gaming",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming Solutions | Agailinnovate",
    description:
      "Next-gen gaming development & AR/VR solutions crafted for performance, scalability, and immersive engagement.",
  },
};

export default function GamingPage() {
  return <Gaming />;
}

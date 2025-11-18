import type { Metadata } from "next";
import SupplyChain from "@/components/industries-pages/SuppyChain";

export const metadata: Metadata = {
  title: "Supply Chain & Logistics Solutions | Agailinnovate",
  description:
    "Agailinnovate provides modern supply chain and logistics solutions including warehouse automation, fleet tracking, inventory management, predictive analytics, and real-time logistics visibility platforms.",
  alternates: {
    canonical:
      "https://agile-website-tan.vercel.app/industries/supply",
  },
  openGraph: {
    title: "Supply Chain & Logistics Solutions | Agailinnovate",
    description:
      "Optimize your supply chain with advanced digital solutions including fleet monitoring, warehouse automation, predictive analytics, and end-to-end logistics platforms.",
    url: "https://agile-website-tan.vercel.app/industries/supply",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supply Chain & Logistics Solutions | Agailinnovate",
    description:
      "Build smarter, faster, and more efficient logistics systems with Agailinnovate’s advanced supply chain technology solutions.",
    
  },
};

export default function SupplyChainPage() {
  return <SupplyChain />;
}

import type { Metadata } from "next";
import RetailEcommerce from "@/components/industries-pages/RetailEcommerce";

export const metadata: Metadata = {
  title: "Retail & Ecommerce Solutions | Agailinnovate",
  description:
    "Agailinnovate provides modern Retail & Ecommerce solutions including digital storefronts, inventory systems, omnichannel integration, and secure payment technologies.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/industries/ecommerce",
  },
  openGraph: {
    title: "Retail & Ecommerce Solutions | Agailinnovate",
    description:
      "Enhance your retail and ecommerce business with advanced digital solutions including storefront development, automation, and scalable commerce platforms.",
    url: "https://agile-website-tan.vercel.app/industries/ecommerce",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail & Ecommerce Solutions | Agailinnovate",
    description:
      "Digital solutions for modern Retail & Ecommerce businesses—secure, scalable, and conversion-focused.",
    images: ["/og-retail-ecommerce.png"],
  },
};

export default function EcommerPage() {
  return <RetailEcommerce />;
}

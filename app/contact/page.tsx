import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Agailinnovate",
  description:
    "Get in touch with Agailinnovate for project inquiries, support, collaborations, and technology solutions. We're here to help you innovate and grow.",
  alternates: {
    canonical: "https://agile-website-tan.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Us | Agailinnovate",
    description:
      "Reach out to Agailinnovate for business inquiries, partnerships, and technology services.",
    url: "https://agile-website-tan.vercel.app/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Agailinnovate",
    description:
      "Connect with Agailinnovate for collaboration, support, or service inquiries.",
    images: ["/og-contact.png"],
  },
};

export default function Contact() {
  return <ContactPage />;
}

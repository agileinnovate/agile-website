import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agailinnovate | Innovating with Technology",
  description:
    "Agailinnovate builds secure, scalable, and future-ready digital solutions for businesses worldwide.",
  metadataBase: new URL("https://agile-website-tan.vercel.app/"),

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Agailinnovate | Innovating with Technology",
    description:
      "We build secure, scalable, and future-ready digital solutions.",
    url: "https://agile-website-tan.vercel.app/",
    siteName: "Agailinnovate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agailinnovate OG Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

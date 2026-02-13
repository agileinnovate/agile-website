import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agailinnovate | Innovating with Technology",
  description:
    "Agailinnovate builds secure, scalable, and future-ready digital solutions for businesses worldwide.",
  metadataBase: new URL("https://agile-website-tan.vercel.app/"),

  alternates: {
    canonical: "/",
  },

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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-gray-900 overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agailinnovate",
              url: "https://agile-website-tan.vercel.app/",
            }),
          }}
        />
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* GLOBAL SEO METADATA*/
export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Agile Innovate | Innovating with Technology",
    template: "%s | Agile Innovate",
  },
  description:
    "Agile Innovate builds secure, scalable, and future-ready digital solutions for businesses worldwide.",
  keywords: [
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Next.js Company",
    "Agile Innovate",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Agile Innovate" }],
  creator: "Agile Innovate",
  publisher: "Agile Innovate",
  alternates: {
    canonical: "https://yourdomain.com",
  },

  /* Social Share + Rich Cards */
  openGraph: {
    title: "Agile Innovate | Innovating with Technology",
    description:
      "We build cutting-edge web, mobile, AI, cloud, and automation solutions tailored for your business needs.",
    url: "https://yourdomain.com",
    siteName: "Agile Innovate",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Agile Innovate | Innovating with Technology",
    description:
      "Building secure, scalable, high-performance digital solutions.",
    creator: "@agileinnovate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 overflow-x-hidden">
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />

        {/*ORGANIZATION SCHEMA (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agile Innovate",
              url: "https://yourdomain.com",
              logo: "https://yourdomain.com/logo.png",
              sameAs: [
                "https://facebook.com",
                "https://linkedin.com",
                "https://instagram.com",
              ],
            }),
          }}
        />

      </body>
    </html>
  );
}

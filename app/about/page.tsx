import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About Agile Innovate | Software Development Experts",
  description:
    "Agile Innovate is a leading software development company specializing in modern web, mobile, and cloud solutions. Learn more about our mission, values, and team.",
  keywords: [
    "Agile Innovate",
    "About Agile Innovate",
    "Software Development Company",
    "Web Development",
    "App Development",
    "IT Services"
  ],
  openGraph: {
    title: "About Agile Innovate",
    description:
      "We build scalable, secure, and innovative software solutions that help businesses grow.",
    url: "https://yourdomain.com/about",
    siteName: "Agile Innovate",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}

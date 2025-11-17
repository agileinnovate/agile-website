export const metadata = {
  title: "Software Development Services | Agile Innovate",
  description:
    "Agile Innovate offers modern software development services including web development, mobile applications, UI/UX design, cloud engineering, DevOps, AI/ML, and product strategy.",
  keywords: [
    "Software Development Services",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Services",
    "DevOps",
    "AI/ML Development",
    "IT Services",
    "Agile Innovate Services"
  ],
  openGraph: {
    title: "Software Development Services | Agile Innovate",
    description:
      "Explore all the software development and digital solutions provided by Agile Innovate for startups and enterprises worldwide.",
    url: "https://yourdomain.com/services",
    siteName: "Agile Innovate",
    type: "website",
  },
};

import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  return <ServiceCard />;
}

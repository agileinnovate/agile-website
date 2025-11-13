import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import ReviewSection from "@/components/ReviewSection";
import Career from "@/components/Career";
import ContactPage from "@/components/ContactPage";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
  
      <div className="relative">
        <Hero />
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-linear-to-b from-transparent to-white pointer-events-none"></div>
      </div>

      <div className="relative z-10 bg-white pt-24 md:pt-28">
        <AboutSection />
      </div>
      <ServicesSection />
      <ReviewSection />
      <Testimonial/>
      <ContactPage/>
      
    </main>
  );
}

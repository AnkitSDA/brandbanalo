import AboutSection from "@/components/sections/home/AboutSection";
import BrandSection from "@/components/sections/home/BrandSection";
import CaseStudySection from "@/components/sections/home/CaseStudySection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import HeroSection from "@/components/sections/home/HeroSection";
import MarqueeSectionTop from "@/components/sections/home/MarqueeSectionTop";
import MissionSection from "@/components/sections/home/MissionSection";
import NewsSection from "@/components/sections/home/NewsSection";
import ServiceSection from "@/components/sections/home/ServiceSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";

export default function HomeSections() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <AboutSection />
      <ServiceSection />
      <MarqueeSectionTop />
      <MissionSection />
      <CaseStudySection />
      <IndustriesSection />
      <TestimonialSection />
      <NewsSection />
    </>
  );
}




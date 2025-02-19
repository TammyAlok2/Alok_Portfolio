import AboutSection from "@/components/Homepage/AboutSection/AboutSection";
import ContactInfoSection from "@/components/Homepage/ContactInfoSection/ContactInfoSection";
import HeroSection from "@/components/Homepage/HeroSection/HeroSection";
import ProjectsSection from "@/components/Homepage/ProjectsSection/ProjectsSection";
import { ServicesSection } from "@/components/Homepage/ServicesSection/ServicesSection";
import SkillsSection from "@/components/Homepage/SkillsSection/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactInfoSection />
    </div>
  );
}

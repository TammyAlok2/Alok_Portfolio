"use client";

import AboutSection from "@/components/Homepage/AboutSection/AboutSection";
import ContactInfoSection from "@/components/Homepage/ContactInfoSection/ContactInfoSection";
import HeroSection from "@/components/Homepage/HeroSection/HeroSection";
import ProjectsSection from "@/components/Homepage/ProjectsSection/ProjectsSection";
import { ServicesSection } from "@/components/Homepage/ServicesSection/ServicesSection";
import SkillsSection from "@/components/Homepage/SkillsSection/SkillsSection";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

export default function Home() {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Show content after component mounts
    setShowContent(true);

    // Hide intro after 2.5 seconds
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {showContent ? (
        <div className="text-center h-screen flex flex-col items-center justify-center fixed bg-white dark:bg-[#09090b] z-[1000] inset-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mb-6 text-gray-500 [text-shadow:0.05rem_0.05rem_.05rem_lightgray] text-xs"
          >
            <Link href="/">
            <Image height={120} width={120} src={"/New_logo.png"} alt="logo" className="mb-[-2rem] w-[10rem]" />
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-indigo-600 mb-4"
          >
            <Typewriter
              options={{
                strings: [
                  "Hello! Welcome to My Portfolio 🚀",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-400"
          >
            I create beautiful, responsive, and interactive web experiences.
          </motion.p>
        </div>
      ) : (
        <div>
          <HeroSection />
          {/* <AboutSection /> */}
          <ServicesSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactInfoSection />
        </div>
      )}
    </>
  );
}

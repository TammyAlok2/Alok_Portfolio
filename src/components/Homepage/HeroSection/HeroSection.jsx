'use client';

import React from 'react';
import { Download, Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { FaReact, FaPaintBrush, FaSearch, FaServer } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";
import { motion } from "framer-motion";
import Link from 'next/link';
import { FlipWords } from '@/components/ui/flip-words';

const experiences = [
  { name: "3y+ React.js Development", position: "right-[25rem] top-4 max-md:right-0 max-[1134px]:right-[20rem]", icon: <FaReact className=" text-black" size={24} /> },
  { name: "2y+ Next.js & TypeScript", position: "top-12 right-[-1rem] max-md:right-0 max-md:top-12 max-[1024px]:top-3", icon: <MdDeveloperMode className=" text-black" size={24} /> },
  { name: "4y+ UI/UX & Tailwind CSS", position: "right-[-3rem] bottom-[-11rem] max-md:right-0 max-md:bottom-[-9rem] max-[1354px]:right-0  max-[1354px]:bottom-[-15rem]", icon: <FaPaintBrush className=" text-black" size={24} /> },
  { name: "3y+ JavaScript & ES6+", position: "top-[4rem] right-[23rem] max-md:right-0 max-md:top-[2rem] max-[1134px]:right-[17rem]", icon: <BiCodeAlt className=" text-black" size={24} /> },
  { name: "1.5y+ On Page Optimization", position: "right-[28rem] bottom-[-10rem] max-md:right-0 max-md:bottom-[-8rem] max-[1134px]:right-[20rem]", icon: <FaSearch className=" text-black" size={24} /> },
];

const HeroSection = () => {
  const words = ["Frontend Developer", "Innovative", "Responsive Design Expert", "JavaScript Enthusiast", "UI/UX Specialist"];

  return (
    <div className="flex max-[1024px]:flex-col min-[1024px]:flex-row items-center justify-between py-16 px-6 max-[1024px]:items-start">
      {/* Hero Section */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Greeting */}
        <div className="bg-indigo-100 text-indigo-700 inline-block px-4 py-2 rounded-full relative">
          <div className='w-3 h-3 bg-indigo-700 rounded-full absolute animate-ping left-[4px]'></div>
          Hi everyone 👋 I'm Pavan
        </div>

        {/* Main Heading */}
        <div className="space-y-1 w-[90%] max-md:hidden">
          <FlipWords words={words} /> <br />
        </div>

        <div className="space-y-1 font-bold text-[2.2rem] [text-shadow:0.02rem_0.01rem_0.02rem_black] w-[90%] min-md:hidden">
          <h1>Frontend Developer</h1>
        </div>

        {/* Description */}
        <div className="rounded-lg max-w-md">
          As a Frontend Developer, I specialize in building responsive, user-centric, and high-performance web applications.
        </div>

        {/* Social Links */}
        <div>
          <p className="mb-3 text-indigo-800 font-bold">Find me on:</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/Pavanpraja" className="bg-purple-100 p-3 rounded-full">
              <Github className="h-5 w-5 text-purple-800" />
            </Link>
            <Link href="https://www.linkedin.com/in/pavan-prajapati-8a348626b/" className="bg-blue-100 p-3 rounded-full">
              <Linkedin className="h-5 w-5 text-blue-800" />
            </Link>
            <Link href="https://www.instagram.com/pavanprajapati9206/" className="bg-pink-100 p-3 rounded-full">
              <Instagram className="h-5 w-5 text-pink-800" />
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative mt-10 md:mt-0 max-[1024px]:left-[22rem] max-[768px]:left-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="p-4 rounded-2xl flex justify-center relative max-md:justify-start max-md:p-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-40"></div>
          <Image
            width={350}
            height={350}
            src="/herosection/profile.jpg"
            alt="Designer Portrait"
            className="z-[-1] relative opacity-[.8] aspect-auto max-md:w-[80%]"
          />
        </motion.div>

        {/* Decorative Experience Badges with Animation */}
        {/* Decorative Elements */}
        <div className="absolute right-0 max-md:left-[14rem] top-4 max-md:top-0 flex items-center flex-col">
          {experiences?.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.5, repeat: Infinity, repeatDelay: 4 }}
              className={`relative ${exp.position} flex items-center gap-2 bg-[#00000026] text-black font-semibold shadow-lg border [text-shadow:0_0.02rem_0_white] px-4 py-2 rounded-full`}
            >
              {exp?.icon}
              <div className='max-md:hidden'>
              {exp?.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
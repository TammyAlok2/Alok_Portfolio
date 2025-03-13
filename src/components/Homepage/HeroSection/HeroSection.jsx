'use client';

import React from 'react';
import { FlipWords } from '@/components/ui/flip-words';
import SocialLinks from './components/SocialLinks';
import ImageSection from './components/ImageSection';
import { words } from '@/data/heroSectionData';
import { FaReact, FaPaintBrush, FaSearch } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";

const HeroSection = () => {

  const experiences = [
  {
    name: "React.js Development",
    position: "right-[25rem] top-4 max-md:right-0 max-[1134px]:right-[20rem]",
    icon: <FaReact className=" text-black dark:text-gray-300" size={24} />,
  },
  {
    name: "Next.js & TypeScript",
    position:
      "top-12 right-[-1rem] max-md:right-0 max-md:top-12 max-[1024px]:top-3",
    icon: (
      <MdDeveloperMode className=" text-black dark:text-gray-300" size={24} />
    ),
  },
  {
    name: "UI/UX & Tailwind CSS",
    position:
      "right-[-3rem] bottom-[-11rem] max-md:right-0 max-md:bottom-[-9rem] max-[1354px]:right-0  max-[1354px]:bottom-[-15rem]",
    icon: <FaPaintBrush className=" text-black dark:text-gray-300" size={24} />,
  },
  {
    name: "JavaScript & ES6+",
    position:
      "top-[4rem] right-[23rem] max-md:right-0 max-md:top-[2rem] max-[1134px]:right-[17rem]",
    icon: <BiCodeAlt className=" text-black dark:text-gray-300" size={24} />,
  },
  {
    name: "On Page Optimization",
    position:
      "right-[28rem] bottom-[-10rem] max-md:right-0 max-md:bottom-[-8rem] max-[1134px]:right-[20rem]",
    icon: <FaSearch className=" text-black dark:text-gray-300" size={24} />,
  },
];

  return (
    <div className="flex max-[1024px]:flex-col min-[1024px]:flex-row items-center justify-between py-16 px-6 max-[1024px]:items-start max-md:pt-[7rem]">
      {/* Hero Section */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Greeting */}
        <div className="bg-indigo-100 dark:bg-indigo-500 text-indigo-700 dark:text-indigo-100 inline-block px-4 py-2 rounded-full relative">
          <div className='w-3 h-3 bg-indigo-200 rounded-full absolute animate-ping left-[4px]'></div>
          Hi everyone 👋 I'm Pavan
        </div>

        {/* Main Heading */}
        <div className="space-y-1 w-[90%] max-[768px]:hidden">
          <FlipWords words={words} /> <br />
        </div>

        <div className="space-y-1 font-bold text-[2.2rem] [text-shadow:0.02rem_0.01rem_0.02rem_black] w-[90%] min-[768px]:hidden">
          <h1>Frontend Developer</h1>
        </div>

        {/* Description */}
        <div className="rounded-lg max-w-md dark:text-gray-400">
          As a Frontend Developer, I specialize in building responsive, user-centric, and high-performance web applications.
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>

      {/* Image Section */}
      <ImageSection experiences={experiences}/>
    </div>
  );
};

export default HeroSection;

'use client';

import React from 'react';
import { FlipWords } from '@/components/ui/flip-words';
import SocialLinks from './components/SocialLinks';
import ImageSection from './components/ImageSection';
import { words } from '@/data/heroSectionData';

const HeroSection = () => {
  
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
      <ImageSection />
    </div>
  );
};

export default HeroSection;

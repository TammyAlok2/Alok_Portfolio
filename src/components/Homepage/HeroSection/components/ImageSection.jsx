import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

const ImageSection = ({experiences}) => {
  return (
    <div className="w-full md:w-1/2 relative mt-10 md:mt-0 max-[1024px]:left-[22rem] max-[768px]:left-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="p-4 rounded-2xl flex justify-center relative max-md:justify-start max-md:p-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-40"></div>
        <Image
          width={450}
          height={450}
          src="/aboutsection/about.png"
          alt="Designer Portrait"
          className="z-[-1] relative opacity-[.8] aspect-auto max-md:w-[80%]"
        />
      </motion.div>

      {/* Decorative Experience Badges with Animation */}
      <div className="absolute right-0 max-md:left-[14rem] top-4 max-md:top-0 flex items-center flex-col">
        {experiences?.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.5,
              repeat: Infinity,
              repeatDelay: 4,
            }}
            className={`relative ${exp.position} flex items-center gap-2 bg-[#00000026] text-black font-semibold shadow-lg border dark:border-gray-300 [text-shadow:0_0.02rem_0_white] px-4 py-2 rounded-full dark:text-gray-300`}
          >
            {exp?.icon}
            <div className="max-md:hidden">{exp?.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;

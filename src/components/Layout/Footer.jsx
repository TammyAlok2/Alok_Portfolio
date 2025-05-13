'use client';

import { socialLinks } from '@/data/footerData';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="w-full py-8 max-md:pb-[6rem] max-md:pt-[2rem] bg-[aliceblue] dark:bg-black text-gray-900 border-t-[1rem] border-[#e6f2f6] rounded-t-3xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-center flex-col text-center">
        <h3 className="text-3xl font-bold mb-3 dark:text-gray-300">
          Stay Connected, Stay Inspired
        </h3>

        <p className="text-gray-800 mb-6 max-w-md dark:text-gray-400">
          Thank you for visiting my portfolio. I'm always open to new opportunities and collaborations.
        </p>

        <div className="flex space-x-6 mb-6 relative left-[-.8rem]">
          {socialLinks.map((social, index) => (
            <Link 
              key={index} 
              href={social.href} 
              className="hover:text-blue-400 transition-colors duration-300 dark:text-gray-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <div className="text-sm text-gray-700 dark:text-gray-300">
          © {currentYear} Alok Tamrakar. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

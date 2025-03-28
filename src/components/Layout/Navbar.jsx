"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import DarkModeToggle from "../common/DarkModeToggle";
import { navItems } from "@/data/navbarData";
import useScroll from "@/hooks/useScroll";

const ScrollToTopButton = ({ showScrollButton, scrollToTop }) => {

  return (
    <>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 max-md:bottom-[5rem] z-[10000] bg-indigo-600 text-white p-3 active:scale-95 dark:border-[.1rem] dark:border-gray-300 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

const Navbar = () => {
  const { isScrolled, showScrollButton, scrollToTop } = useScroll();

  return (
    <>
      <nav
        className={`px-6 py-4 fixed left-0 right-0 bg-white dark:bg-black z-[100] ${
          isScrolled
            ? "shadow-md dark:bg-[#2a1861b8] dark:backdrop-blur-[1rem] border-b-[.2rem] rounded-b-xl border-gray-300"
            : ""
        }`}
        id="home"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center text-2xl text-indigo-600 shadow-md border font-bold justify-center">
                PP
              </div>
              <span className="font-semibold text-2xl tracking-[.03rem] dark:text-white">
                Portfolio
              </span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <div key={index} className="group">
                <Link
                  href={item.path}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-400"
                >
                  {item.name}
                </Link>
                <div className="group-hover:bg-indigo-500 w-0 group-hover:w-full h-1 rounded-full transition-all duration-500 ease-in-out"></div>
              </div>
            ))}
            <DarkModeToggle />
          </div>

          <div className="min-[768px]:hidden mt-[.6rem]">
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <ScrollToTopButton
        showScrollButton={showScrollButton}
        scrollToTop={scrollToTop}
      />
    </>
  );
};

export default Navbar;

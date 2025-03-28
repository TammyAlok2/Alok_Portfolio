"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IoBriefcaseOutline,
  IoDocumentText,
  IoHomeOutline,
  IoMailOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { FaBriefcase } from "react-icons/fa";

const MobileNavbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    playClickSound();
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    playClickSound();
  };

  const playClickSound = () => {
    if (typeof window !== "undefined") {
      const clickSound = new Audio("/click.mp3");
      clickSound.currentTime = 0; // Reset sound for instant replay
      clickSound.play();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black rounded-t-xl border-t-[.2rem] border-gray-300 shadow-lg z-50">
      <div className="flex justify-around items-center py-2">
        <NavItem
          icon={<IoHomeOutline size={20} />}
          label="Home"
          isActive={activeTab === "home"}
          onClick={() => handleTabChange("home")}
          href="/#home"
        />
        <NavItem
          icon={<GiSkills size={20} />}
          label="Skills"
          isActive={activeTab === "skills"}
          onClick={() => handleTabChange("skills")}
          href="/#skills"
        />
        <AddButton
          isActive={activeTab === "add"}
          onClick={toggleExpand}
          isExpanded={isExpanded}
        />
        <NavItem
          icon={<IoBriefcaseOutline size={20} />}
          label="Services"
          isActive={activeTab === "services"}
          onClick={() => handleTabChange("services")}
          href="/#services"
        />
        <NavItem
          icon={<IoMailOutline size={20} />}
          label="Contact"
          isActive={activeTab === "contact"}
          onClick={() => handleTabChange("contact")}
          href="/#contact"
        />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 left-0 right-7 flex justify-center items-center gap-6 mb-4"
          >
            <Link href={"/#projects"}>
              <ExpandedButton
                icon={<GrProjects size={20} />}
                className={`${
                  activeTab === "projects"
                    ? "text-purple-600 border-[.2rem] border-purple-600 relative bottom-1 rounded-full bg-purple-100"
                    : "dark:bg-black dark:text-white border-[.1rem] dark:border-white bg-white text-black border-black"
                } : `}
                onClick={() => handleTabChange("projects")}
              />
            </Link>
            <Link href={"/experience"}>
              <ExpandedButton
                icon={<FaBriefcase size={20} />}
                className={`${
                  activeTab === "experience"
                    ? "text-purple-600 border-[.2rem] border-purple-600 relative bottom-1 rounded-full bg-purple-100"
                    : "dark:bg-black dark:text-white border-[.1rem] dark:border-white bg-white text-black border-black"
                } : `}
                onClick={() => handleTabChange("experience")}
              />
            </Link>
            <Link href={"/resume"}>
              <ExpandedButton
                icon={<IoDocumentText size={20} />}
                className={`${
                  activeTab === "resume"
                    ? "text-purple-600 border-[.2rem] border-purple-600 relative bottom-1 rounded-full bg-purple-100"
                    : "dark:bg-black dark:text-white border-[.1rem] dark:border-white bg-white text-black border-black"
                } : `}
                onClick={() => handleTabChange("resume")}
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavItem = ({ icon, label, isActive, onClick, href }) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center"
      onClick={(e) => {
        onClick();
      }}
    >
      <div
        className={`p-1 transition-all duration-300 ease-in-out ${
          isActive
            ? "text-purple-600 border-[.2rem] border-purple-600 relative bottom-7 rounded-full bg-purple-100"
            : "text-gray-500"
        }`}
      >
        {icon}
      </div>
      <span
        className={`text-xs mt-1 ${
          isActive ? "font-medium text-purple-600 hidden" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </Link>
  );
};

const AddButton = ({ isActive, onClick, isExpanded }) => {
  return (
    <div className="flex flex-col items-center -mt-6" onClick={onClick}>
      <button>
        <motion.div
          animate={{ rotate: isExpanded ? 225 : 0 }}
          transition={{ duration: 0.3 }}
          className={`text-white bg-purple-600 active:scale-90 rounded-full p-3 ${
            isActive
              ? "border-[.3rem] border-white relative bottom-1 transition-all duration-300 ease-in-out"
              : ""
          }`}
        >
          {isExpanded ? (
            <IoCloseOutline size={24} className="rotate-[45deg]" />
          ) : (
            <RxCross2 size={24} className="rotate-[135deg]" />
          )}
        </motion.div>
      </button>
      <span className="text-xs mt-1 invisible">Resume</span>
    </div>
  );
};

const ExpandedButton = ({ icon, className, onClick }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.2 }}
      className={`${className} rounded-full p-3 shadow-md cursor-pointer hover:shadow-lg transform hover:scale-110 transition-all`}
      onClick={onClick}
    >
      {icon}
    </motion.div>
  );
};

export default MobileNavbar;

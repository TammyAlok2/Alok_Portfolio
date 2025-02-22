"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 ease-in-out mt-[-0.3rem]"
    >
       <div
        className={`absolute top-1 ${
          isDark ? 'left-9' : 'left-1'
        } w-5 h-5 rounded-full bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out flex items-center justify-center`}
      >
        {isDark ? (
          <Moon size={14} className="text-gray-200" />
        ) : (
          <Sun size={14} className="text-gray-800" />
        )}
      </div>
    </button>
  );
}

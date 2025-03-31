"use client";

import React from "react";
import { useState } from "react";

const useMobileNavbar = () => {
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
  return { isExpanded, activeTab, handleTabChange, toggleExpand };
};

export default useMobileNavbar;

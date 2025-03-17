"use client";

import React, { useRef, useEffect } from "react";
import Circle from "./Circle";

const MouseMove = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = circleRef.current;
      if (!circle) return;

      // Update position instantly
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
      circle.style.transform = "translate(-50%, -50%)"; // Keep it centered
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <Circle ref={circleRef} />;
};

export default MouseMove;

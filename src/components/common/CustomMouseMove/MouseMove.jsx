"use client";

import React, { useRef, useEffect, useState } from "react";
import Circle from "./Circle";
import { motion } from "framer-motion";

const MouseMove = () => {
  const circleRef = useRef(null);
  const [clickEffect, setClickEffect] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = circleRef.current;
      if (!circle) return;

      // Update position instantly
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
      circle.style.transform = "translate(-50%, -50%)"; // Keep it centered
    };

    const handleClick = (e) => {
      setClickEffect({ x: e.clientX, y: e.clientY + window.scrollY });

      // Remove effect after animation
      setTimeout(() => setClickEffect(null), 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <Circle ref={circleRef} />

      {/* Click Effect Animation */}
      {clickEffect && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 5, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute rounded-full bg-[#444ee7] shadow-xl z-[10000] max-md:hidden"
          style={{
            width: "2rem",
            height: "2rem",
            left: `${clickEffect.x}px`,
            top: `${clickEffect.y}px`,
            transform: "translate(-50%, -50%)",
            position: "absolute",
          }}
        />
      )}
    </>
  );
};

export default MouseMove;

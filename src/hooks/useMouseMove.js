'use client';

import { useRef, useEffect, useState } from "react";

const useMouseMove = () => {
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
  return { circleRef, clickEffect };
};

export default useMouseMove;

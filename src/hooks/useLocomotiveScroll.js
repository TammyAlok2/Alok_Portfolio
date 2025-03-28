"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08, // Adjust for smoothness
      multiplier: 1.2, // Speed
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return scrollRef;
};

export default useLocomotiveScroll;

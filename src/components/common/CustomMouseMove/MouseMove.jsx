"use client";

import useMouseMove from "@/hooks/useMouseMove";
import Circle from "./Circle";
import { motion } from "framer-motion";

const MouseMove = () => {  

  const { circleRef, clickEffect } = useMouseMove();

  return (
    <>
      <Circle ref={circleRef} />

      {/* Click Effect Animation */}
      {clickEffect && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 5, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute rounded-full bg-[#444ee7] shadow-xl z-[10000]"
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

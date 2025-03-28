'use client';

import React, { forwardRef } from 'react'

const Circle = forwardRef((props, ref) => {
  return (
    <div
        ref={ref}
        className="h-[1rem] max-md:hidden w-[1rem] rounded-full bg-[#444ee7] shadow-xl z-[10000] flex items-center justify-center text-black font-bold transition-transform duration-50 ease-out animate-fire"
      style={{
        position: "fixed", // Moves freely with cursor
        pointerEvents: "none", // Prevents interference
        boxShadow: "0 0 15px 5px #444ee7", // Fire glow effect
      }}
        >
          🧿
      </div>
  )
})

export default Circle

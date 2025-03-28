"use client";

import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";
import React from "react";

const ClientLayout = ({ children }) => {
  const { scollRef } = useLocomotiveScroll();
  console.log("hello")
  return (
    <>
      <div data-scroll-container ref={scollRef}>
        {children}
      </div>
    </>
  );
};

export default ClientLayout;

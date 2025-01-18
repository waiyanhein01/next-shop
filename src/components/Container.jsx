"use client";
import React from "react";

const Container = ({ children }) => {
  return (
    <main className="xl:w-[1280px] lg:w-[1024px] 2xl:w-full mx-auto h-auto flex items-center justify-center">
      <div className="xl:w-[1120px] lg:w-[900px] h-auto">{children}</div>
    </main>
  );
};

export default Container;

"use client";
import React from "react";
import Link from "next/link";

const BreadCrumb = ({ currentPage }) => {
  return (
    <div className=" flex items-center gap-3 border-b border-[#E4E4E7] py-5 mb-5">
      <Link
        href="/"
        className=" text-[16px] leading-[24px] font-medium text-[#18181B]"
      >
        Home
      </Link>
      <span className="text-[16px] leading-[24px] font-normal text-[#000000]">
        /
      </span>
      <h1 className="text-[16px] leading-[24px] font-normal text-[#71717A]">
        {currentPage}
      </h1>
    </div>
  );
};

export default BreadCrumb;

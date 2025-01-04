"use client";
import React from "react";
import Link from "next/link";

const BreadCrumb = ({ currentPage, links }) => {
  return (
    <div className=" flex items-center gap-3 border-b border-[#E4E4E7] py-5 mb-7">
      <Link
        href="/"
        className=" text-[16px] leading-[24px] font-medium text-[#18181B]"
      >
        Home
      </Link>
      <span className="text-[16px] leading-[24px] font-normal text-[#000000]">
        /
      </span>

      {links &&
        links.map((link, index) => (
          <h1 key={index} className="inline-flex items-center gap-3">
            <Link
              href={link.path}
              className=" text-[16px] text-nowrap leading-[24px] font-normal text-[#000000]"
            >
              {link.title}
            </Link>
            <span className="text-[16px] leading-[24px] font-normal text-[#000000]">
              /
            </span>
          </h1>
        ))}

      <h1 className="text-[16px] text-nowrap leading-[24px] font-normal text-[#71717A]">
        {currentPage}
      </h1>
    </div>
  );
};

export default BreadCrumb;

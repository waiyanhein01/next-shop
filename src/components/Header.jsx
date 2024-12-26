import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="xl:w-[1280px] lg:w-[1024px] 2xl:w-full mx-auto h-[112px] p-[10px] flex items-center justify-center">
      <div className="xl:w-[1120px] lg:w-[900px] h-[32px]  flex items-center justify-between">
        {/* logo */}
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={32}
          className="justify-items-start w-auto h-[32px]"
        />

        {/* nav */}
        <div className=" w-[441px] h-[17px] flex items-center justify-between ">
          <Link
            href="/"
            className=" w-auto h-[17px] font-medium text-[14px] leading-[17.07px] text-[#18181B] uppercase"
          >
            Home
          </Link>
          <Link
            href="/products"
            className=" w-auto h-[17px] font-medium text-[14px] leading-[17.07px] text-[#18181B] uppercase"
          >
            Products
          </Link>
          <Link
            href="/about"
            className=" w-auto h-[17px] font-medium text-[14px] leading-[17.07px] text-[#18181B] uppercase"
          >
            About
          </Link>
          <Link
            href="/faq"
            className=" w-auto h-[17px] font-medium text-[14px] leading-[17.07px] text-[#18181B] uppercase"
          >
            Faq
          </Link>
          <Link
            href="/contact-us"
            className=" w-auto h-[17px] font-medium text-[14px] leading-[17.07px] text-[#18181B] uppercase"
          >
            Contact
          </Link>
        </div>

        {/* icons */}
        <div className="w-[140px] h-[20px] flex items-center justify-between">
          <Image
            src="/search.svg"
            alt="search"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />

          <div className="relative">
            <Image
              src="/heart.svg"
              alt="heart"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
            <span className=" absolute -top-1 -right-1 text-[13px] bg-[#18181B] w-[14px] h-[14px] rounded-full flex justify-center items-center text-[#ffffff]">
              2
            </span>
          </div>

          <div className="relative">
            <Image
              src="/bag.svg"
              alt="bag"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
            <span className=" absolute -top-1 -right-1 text-[13px] bg-[#18181B] w-[14px] h-[14px] rounded-full flex justify-center items-center text-[#ffffff]">
              2
            </span>
          </div>

          <Image
            src="/user.svg"
            alt="user"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

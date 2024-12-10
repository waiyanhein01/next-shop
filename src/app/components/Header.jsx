import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-[1280px] h-[112px] p-[10px] flex items-center justify-center border-b-[1px] border-[#E5E5E5] xl:w-full mx-auto">
      <div className="w-[1120px] h-[32px] flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={32}
          className="justify-items-start w-auto h-[32px]"
        />

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

        <div className="w-[140px] h-[20px] flex items-center justify-between">
          <Image
            src="/search.svg"
            alt="search"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />

          <Image
            src="/heart.svg"
            alt="heart"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />

          <Image
            src="/bag.svg"
            alt="bag"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />

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

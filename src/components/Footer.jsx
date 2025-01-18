import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="xl:w-[1280px] lg:w-[1024px] 2xl:w-full mx-auto h-[280px] mt-auto flex flex-col items-center justify-center border-t-[1px] border-[#E5E5E5]">
      <div className="xl:w-[1120px] lg:w-[900px] h-[200px] flex justify-between pt-14">
        {/* logo */}
        <div className="w-[148px] h-[77px] ">
          <Image
            src="/logo.svg"
            alt="logo"
            width={50}
            height={32}
            className="justify-items-start w-auto h-[32px] mb-[16px]"
          />
          <h1 className="w-[148px] h-[24px] font-bold text-[24px] leading-[29.04px] text-[#18181B] uppercase">
            TrendFlow
          </h1>
        </div>

        {/* group */}
        <div className=" w-[451px] h-[133px] flex justify-between ">
          <div className="">
            <h1 className="w-auto h-[21px] font-semibold text-[14px] leading-[21px] text-[#353535]">
              Terms & Conditions
            </h1>
            <div className="flex flex-col gap-1 mt-[20px]">
              <h2 className="w-auto h-[21px] font-normal text-[14px] leading-[24px] text-[#8F8F8F]">
                Returns & Refunds
              </h2>
              <h2 className="w-auto h-[21px] font-normal text-[14px] leading-[24px] text-[#8F8F8F]">
                Privacy Policy
              </h2>
              <h2 className="w-auto h-[21px] font-normal text-[14px] leading-[24px] text-[#8F8F8F]">
                Cookies Policy
              </h2>
            </div>
          </div>

          <div className="">
            <h1 className="w-auto h-[21px] font-semibold text-[14px] leading-[21px] text-[#353535]">
              Store
            </h1>
            <div className="flex flex-col gap-1 mt-[20px]">
              <h2 className="w-auto h-[21px] font-normal text-[14px] leading-[24px] text-[#8F8F8F]">
                About
              </h2>
              <h2 className="w-auto h-[21px] font-normal text-[14px] leading-[24px] text-[#8F8F8F]">
                Contact Us
              </h2>
              <h2 className="w-auto h-[21px] font-normal text-[14px] leading-[24px] text-[#8F8F8F]">
                FAQ
              </h2>
            </div>
          </div>

          <div className="">
            <h1 className="w-auto h-[21px] font-semibold text-[14px] leading-[21px] text-[#353535]">
              SOCIAL
            </h1>
            <div className="flex flex-col gap-1 mt-[20px]">
              <h2 className="w-auto h-[21px] font-normal text-[14px] leading-[24px] text-[#8F8F8F]">
                Facebook
              </h2>
              <h2 className="w-auto h-[21px] font-normal text-[14px] leading-[24px] text-[#8F8F8F]">
                Instagram
              </h2>
              <h2 className="w-auto h-[21px] font-normal text-[14px] leading-[24px] text-[#8F8F8F]">
                X
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[56px] bg-[#27272A] flex items-center justify-center mx-auto mt-auto">
        <h1 className="w-[1280px] h-[24px] font-normal text-[14px] leading-[24px] text-[#D4D4D8] text-center">
          Copy Right © 2024 Wai Yan Hein, All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

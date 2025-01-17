import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <h1 className="w-auto h-[36px] text-[28px] leading-[32px] font-bold text-[#18181B] uppercase">
        About TrendFlow
      </h1>
      <p className="text-[16px] w-[570px] h-auto leading-[22px] mt-3 font-normal text-[#71717A]">
        At TrendFlow, we make shopping personal. We combine expert styling with
        smart technology to bring you clothes that fit your vibe, save you time,
        and help you feel your best—every day.
      </p>

      <Image
        src="/aboutImage.svg"
        alt="about"
        width={100}
        height={100}
        className="w-full h-full my-10"
      />
    </div>
  );
};

export default About;

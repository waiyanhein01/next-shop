import Image from "next/image";
import React from "react";
import useCategoryStore from "./store/useCategoryStore";

const Page = () => {
  const { categories } = useCategoryStore();
  // console.log(categories);
  return (
    <div className="">
      {/* HeroSection */}
      <div className="relative">
        <Image src="/hero-image.svg" alt="hero" width={1920} height={1080} />

        <div className="w-[750px] h-[196px] absolute bottom-[20px] left-[80px]">
          <h1 className="w-[665px] h-150px font-extrabold text-[68px] leading-[74.8px] text-[#FAFAFA]">
            Own your look <br /> Own your moment
          </h1>
          <h4 className=" w-[750px] h-[26px] font-medium text-[20px] leading-[26px] text-[#FAFAFA] mt-[20px]">
            Step into outfits that bring comfort, confidence, and a sense of
            belonging.
          </h4>
        </div>
      </div>

      {/* CategorySection */}

      <div className="xl:w-[1280px] lg:w-[1024px] 2xl:w-full mx-auto h-[396px] flex flex-col items-center justify-center mt-[50px] mb-[50px]">
        <div className="xl:w-[1120px] lg:w-[900px]">
          <div className="">
            <h1 className=" w-auto h-[36px] font-bold text-[24px] leading-[36px] text-[#18181B] uppercase">
              Shop by Category
            </h1>
            <h3 className=" w-auto h-[20px] font-extralight text-[16px] leading-[19.5px] text-[#71717A] mt-2">
              Explore our collections and find the perfect pieces for every
              moment.
            </h3>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 bv">
            {categories.slice(1, 5).map((category) => {
              return (
                <div
                  key={category.id}
                  className="relative w-[265px] overflow-hidden h-[200px] rounded-[8px] bg-[#E6E6E6]"
                >
                  <Image
                    src={category.image}
                    alt="hero"
                    width={300}
                    height={100}
                    className="absolute bottom-0  "
                  />
                  <span className="absolute bottom-[20px] left-[20px] w-auto h-[24px] font-medium text-[17px] leading-[24.2px] text-[#3F3F46]">
                    {category.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="w-full h-[76px] flex flex-col items-center justify-center mt-[50px]">
            <h1 className="w-[440px] h-[24px] font-medium text-[14px] leading-[24px] text-[#71717A]">
              Explore Our Collection – Find Exactly What You’re Looking For
            </h1>

            <button className="w-[440px] h-[48px] text-[#18181B] flex items-center justify-center gap-2 text-center underline underline-offset-2">
              <span className="text-lg font-normal">View all categories</span>
              <Image
                src="/topRightIcon.svg"
                alt="icon"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return (
    <div className="xl:w-[1120px] lg:w-[900px] mb-10">
      <div className="">
        <h1 className=" w-auto h-[36px] font-bold text-[24px] leading-[36px] text-[#18181B] uppercase">
          Shop the Collection
        </h1>
        <h3 className=" w-auto h-[20px] font-extralight text-[16px] leading-[19.5px] text-[#71717A] mt-2">
          Explore everything we’ve got—styles that match your vibe, your mood,
          and your life.
        </h3>
      </div>

      <div className="mt-5 flex items-center justify-between flex-wrap gap-5 ">
        {data.map((item) => {
          return (
            <div key={item.id} className=" py-3">
              <div className=" w-[265px] h-[290px] relative overflow-hidden bg-[#FAFAFA] border shadow-md rounded-[8px] ">
                <Image
                  src={item.image}
                  alt="hero"
                  width={150}
                  height={150}
                  className="absolute bottom-5 left-16"
                />

                <div className="border border-[#71717A] rounded-full w-[30px] h-[30px] flex items-center justify-center absolute top-3 right-3">
                  <Image
                    src="/HeartIcon.svg"
                    alt="hero"
                    width={100}
                    height={100}
                    className="w-[14px] h-[14px]"
                  />
                </div>
              </div>

              <div className="w-[265px] h-[130px] mt-5 flex flex-col">
                <div className="w-auto h-[58px]">
                  <div className=" w-auto h-[28px] flex items-center gap-3">
                    <h2 className=" w-auto h-[27px] line-clamp-1 font-semibold text-[18px] leading-[27px] text-[#18181B]">
                      {item.title}
                    </h2>
                    <h2 className=" w-auto h-auto bg-black px-[12px] py-[4px] rounded-md font-normal text-[14px] text-[#FAFAFA]">
                      New
                    </h2>
                  </div>

                  <h2 className=" w-auto h-[22px] font-semibold text-[16px] leading-[22.4px] text-[#71717A]">
                    {item.price} MMK
                  </h2>
                </div>

                <div className="w-[265px] h-[48px] flex items-center mt-auto justify-center bg-[#18181B] rounded-[8px]">
                  <div className="w-[108px] h-[24px] flex items-center justify-center gap-2">
                    <Image
                      src="/addToCartBagIcon.svg" // cartIcon
                      alt="icon"
                      width={24}
                      height={24}
                    />

                    <h1 className="w-[80px] h-[24px] font-medium text-[14px] leading-[24px] text-[#FAFAFA]">
                      Add to cart
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;

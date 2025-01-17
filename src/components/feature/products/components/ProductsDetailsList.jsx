import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../ui/accordion";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import ProductDetailCarousel from "./ProductDetailCarousel";

const ProductsDetailsList = async ({
  product: { id, title, price, description, category, image },
}) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <>
      <div className="mt-5 grid lg:grid-cols-2 grid-cols-1 gap-20 mb-5">
        <div className=" col-span-1 relative">
          <ProductDetailCarousel image={image} />
        </div>

        <div className=" col-span-1">
          <div className=" flex flex-col min-h-[520px]">
            {/* heading and price */}
            <div className="">
              <div className="flex items-center gap-3">
                <h1 className=" text-[20px] font-semibold text-[#000000]">
                  {title}
                </h1>
                <h2 className=" w-auto h-[25px] bg-black px-[15px] py-[2px] rounded-md font-normal text-[14px] text-[#FAFAFA]">
                  New
                </h2>
              </div>

              <div className=" mt-2">
                <h1 className=" w-auto h-[20px] font-semibold text-[16px] leading-[12.4px] text-[#18181B]">
                  {price} MMK
                </h1>
              </div>
            </div>

            {/* color */}
            <div className="mt-5">
              <h1 className=" w-auto h-[22px] font-normal text-[16px] leading-[22.4px] text-[#18181B] mb-3">
                Color
              </h1>
              <span className=" px-[15px] py-[5px] rounded-md border border-[#71717A] bg-[#D9D9D9]"></span>
            </div>

            {/* size */}
            <div className="mt-5">
              <h1 className=" w-auto h-[22px] font-normal text-[16px] leading-[22.4px] text-[#18181B] mb-3">
                Size
              </h1>
              <div className=" flex items-center gap-3">
                <span className=" px-[13px] py-[4px] rounded-md border text-[#FAFAFA] bg-[#18181B]">
                  S
                </span>
                <span className=" px-[13px] py-[4px] rounded-md border text-[#000000] bg-[#F4F4F5]">
                  M
                </span>
                <span className=" px-[13px] py-[4px] rounded-md border text-[#000000] bg-[#F4F4F5]">
                  L
                </span>
                <span className=" px-[13px] py-[4px] rounded-md border text-[#000000] bg-[#F4F4F5]">
                  XL
                </span>
              </div>
            </div>

            {/* quantity */}
            <div className="mt-5">
              <h1 className=" w-auto h-[22px] font-normal text-[16px] leading-[22.4px] text-[#18181B] mb-3">
                Quantity
              </h1>
              <div className=" flex items-center gap-3">
                <span className=" px-[4px] py-[4px] rounded-md border text-[#000000] bg-[#F4F4F5]">
                  <Minus className="size-4" />
                </span>
                <span className=" text-[16px] leading-[22px] font-normal text-[#000000]">
                  2
                </span>
                <span className=" px-[4px] py-[4px] rounded-md border text-[#000000] bg-[#F4F4F5]">
                  <Plus className="size-4" />
                </span>
              </div>
            </div>

            {/* description */}
            <div className="mt-5">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Product Description</AccordionTrigger>
                  <AccordionContent>{description}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* add to whitelist */}
            <div className="mt-5">
              <div className="flex items-center gap-3">
                <Heart className="size-5 text-[#71717A]" />
                <h1 className=" text-[16px] leading-[22px] font-normal text-[#000000]">
                  Add to wishlist
                </h1>
              </div>
            </div>

            {/* add to cart */}
            <div className="mt-auto">
              <button className="w-full h-[48px] flex items-center mt-auto justify-center bg-[#18181B] hover:bg-[#434347] duration-200 rounded-[8px]">
                <div className="w-[108px] h-[24px] flex items-center justify-center gap-2">
                  <Image
                    src="/addToCartBagIcon.svg" // cartIcon
                    alt="icon"
                    width={24}
                    height={24}
                  />

                  <h1 className="w-[80px] h-[24px] font-medium text-[14px] leading-[24px] text-[#FAFAFA] ">
                    Add to cart
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ProductSection */}
      <div className="xl:w-[1280px] lg:w-[1024px] 2xl:w-full mx-auto h-auto flex flex-col items-center justify-center mt-[50px] mb-[50px]">
        <div className="xl:w-[1120px] lg:w-[900px]">
          <div className="">
            <h1 className=" w-auto h-[36px] font-bold text-[24px] leading-[36px] text-[#18181B] uppercase">
              You might also like
            </h1>
            <h3 className=" w-auto h-[20px] font-extralight text-[16px] leading-[19.5px] text-[#71717A] mt-2">
              More styles picked just for you—explore and find your next
              favorite!
            </h3>
          </div>

          <div className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-3">
            {data.slice(0, 4).map((item) => {
              return (
                <div key={item.id} className="cols-span-1">
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

                    <button className="w-[265px] h-[48px] flex items-center mt-auto justify-center bg-[#18181B] hover:bg-[#434347] rounded-[8px]">
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
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetailsList;

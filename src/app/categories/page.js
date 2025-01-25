import BreadCrumb from "@/components/BreadCrumb";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import useCategoryStore from "../store/useCategoryStore";
import Link from "next/link";

const Page = () => {
  const { categories } = useCategoryStore();
  return (
    <Container>
      <BreadCrumb currentPage="Categories" />
      <div className=" mb-[50px]">
        <div className="">
          <div className="">
            <h1 className=" w-auto h-[36px] font-bold text-[24px] leading-[36px] text-[#18181B] uppercase">
              All Categories
            </h1>
            <h3 className=" w-auto h-[20px] font-extralight text-[16px] leading-[19.5px] text-[#18181B] mt-2">
              Relaxed fits for everyday wear.
            </h3>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-3">
            {categories.map((category) => {
              return (
                <Link
                  href="/products"
                  key={category.id}
                  className="relative w-[265px] col-span-1 bg-[#E8E8E8] overflow-hidden h-[200px] rounded-[8px] "
                >
                  <Image
                    src={category.image}
                    alt="hero"
                    width={300}
                    height={300}
                    className="absolute bottom-0 bg-transparent"
                  />
                  <span className="absolute bottom-[20px] left-[20px] w-auto h-[24px] font-medium text-[17px] leading-[24.2px] text-[#3F3F46]">
                    {category.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;

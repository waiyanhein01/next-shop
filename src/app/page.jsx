import Image from "next/image";
import React from "react";
import useCategoryStore from "./store/useCategoryStore";
import Link from "next/link";

export const metadata = {
  title: "Next Shop",
  description: '...',
}

const Page = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  // console.log(data);
  const { categories } = useCategoryStore();
  // console.log(categories);
  return (
    <div className="">
      {/* HeroSection */}
      <div className="relative">
        <Image src="/hero-image.svg" alt="hero" width={1920} height={1080} />

        <div className="w-[750px] h-[196px] absolute bottom-[20px] 2xl:left-[294px] xl:left-20 lg:left-14 flex flex-col items-start justify-center">
            <h1 className="w-[665px] h-150px font-extrabold 2xl:text-[68px] xl:text-[60px] lg:text-[50px] text-[40px] 2xl:leading-[74.8px] xl:leading-[68px] lg:leading-[50px] text-[#FAFAFA]">
              Own your look <br /> Own your moment
            </h1>
            <h4 className=" w-[750px] h-[26px] font-medium text-[20px] leading-[26px] text-[#FAFAFA] mt-[20px]">
              Step into outfits that bring comfort, confidence, and a sense of
              belonging.
            </h4>
          </div>
      </div>

      {/* CategorySection */}
      <div className="xl:w-[1280px] lg:w-[1024px] 2xl:w-full mx-auto h-auto flex flex-col items-center justify-center mt-[50px] mb-[50px]">
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

          <div className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-3">
            {categories.slice(0, 4).map((category) => {
              return (
                <Link href="/products"
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

          <div className="w-full h-[76px] flex flex-col items-center justify-center mt-[50px]">
            <h1 className="w-[440px] h-[24px] font-medium text-[14px] leading-[24px] text-[#71717A]">
              Explore Our Collection – Find Exactly What You’re Looking For
            </h1>

            <Link
              href="/categories"
              className="w-[440px] h-[48px] text-[#18181B] flex items-center justify-center gap-2 text-center underline underline-offset-2"
            >
              <span className="text-lg font-normal">View all categories</span>
              <Image
                src="/topRightIcon.svg"
                alt="icon"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ProductSection */}
      <div className="xl:w-[1280px] lg:w-[1024px] 2xl:w-full mx-auto h-auto flex flex-col items-center justify-center mt-[50px] mb-[50px]">
        <div className="xl:w-[1120px] lg:w-[900px]">
          <div className="">
            <h1 className=" w-auto h-[36px] font-bold text-[24px] leading-[36px] text-[#18181B] uppercase">
              Explore Our Latest Styles
            </h1>
            <h3 className=" w-auto h-[20px] font-extralight text-[16px] leading-[19.5px] text-[#71717A] mt-2">
              Find clothes that match your vibe and make every day better.
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

          <div className="w-full h-[76px] flex flex-col items-center justify-center mt-[50px]">
            <h1 className="w-[440px] h-[24px] font-medium text-[14px] leading-[24px] text-[#71717A]">
              Discover all our styles and find the look that’s made for you!
            </h1>

            <Link
              href="/products"
              className="w-[440px] h-[48px] text-[#18181B] flex items-center justify-center gap-2 text-center underline underline-offset-2"
            >
              <span className="text-lg font-normal">View all categories</span>
              <Image
                src="/topRightIcon.svg"
                alt="icon"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

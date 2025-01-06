"use client";
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const ProductsDetailsList = ({ product }) => {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="mt-5 grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
      <div className=" col-span-1">
        <Carousel
          // plugins={[
          //   Autoplay({
          //     delay: 2000,
          //   }),
          // ]}
          setApi={setApi}
          className=""
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </div>
      </div>
      <div className=" col-span-1"></div>
    </div>
  );
};

export default ProductsDetailsList;

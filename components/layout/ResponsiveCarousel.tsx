"use client";

import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const items = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  { id: 3, content: "Item 3" },
  { id: 4, content: "Item 4" },
  { id: 5, content: "Item 5" },
  { id: 6, content: "Item 6" },
  { id: 7, content: "Item 7" },
  { id: 8, content: "Item 8" },
];

export function ResponsiveCarousel() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [autoSlide, setAutoSlide] = React.useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setItemsPerSlide(4);
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  React.useEffect(() => {
    if (autoSlide) {
      const intervalId = setInterval(() => {
        scrollNext();
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(intervalId);
    }
  }, [api, autoSlide, scrollNext]);

  const toggleAutoSlide = () => {
    setAutoSlide((prev) => !prev);
  };

  const dotCount = Math.ceil(items.length / itemsPerSlide);

  return (
    <div className="w-full pt-12 ">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={item.content}
              className="md:basis-1/2 lg:basis-1/4  px-8"
            >
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{item.content}</span>
                </CardContent>
              </Card> */}

              <div className="font-gabarito w-full flex  space-y-4 justify-center items-center flex-col">
                <Image
                  alt="avatar"
                  width={252}
                  height={252}
                  src="/image/about/avatar.png"
                  className=" rounded-full"
                />

                <div className=" text-[#252525]">
                  <h3 className="text-[24px] leading-[32px] ">Marco Altea</h3>
                  <p className="text-center">CEO</p>
                </div>

                <p className="text-center text-[16px] leading-[20px]">
                  As the CEO of Whable, I am proud of the strides we've made in
                  pushing the boundaries of innovation and success. Our journey
                  has been challenging yet incredibly rewarding
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="pt-12 text-center">
        {Array.from({ length: dotCount }).map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={cn(
              "w-4 h-4 p-0 rounded-full mx-1",
              Math.floor(current / itemsPerSlide) === index
                ? "bg-primary"
                : "bg-[#C4C4C4]"
            )}
            onClick={() => api?.scrollTo(index * itemsPerSlide)}
          />
        ))}
      </div>
    </div>
  );
}

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
import { getTeamMembers } from "@/app/actions/getTeamMember";

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


interface TeamMember {
  _id: string;
  name: string;
  position: string;
  bio: string;
  avatarUrl: string;
}

export function ResponsiveCarousel() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [autoSlide, setAutoSlide] = React.useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [loading, setLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    async function fetchTeamMembers() {
      const result = await getTeamMembers();
      if (result.success) {
        setTeamMembers(result.data);
      }
      setLoading(false);
    }
    fetchTeamMembers();
  }, []);


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

  const dotCount = Math.ceil(teamMembers.length / itemsPerSlide);

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
          {teamMembers.map((member) => (
            <CarouselItem
              key={member._id}
              className="md:basis-1/2 lg:basis-1/4 px-8"
            >
              <div className="font-gabarito w-full flex space-y-4 justify-center items-center flex-col">
                <Image
                  alt={`${member.name}'s avatar`}
                  width={252}
                  height={252}
                  src={member.avatarUrl}
                  className="rounded-full"
                />

                <div className="text-[#252525]">
                  <h3 className="text-[24px] leading-[32px]">{member.name}</h3>
                  <p className="text-center">{member.position}</p>
                </div>

                <p className="text-center text-[16px] leading-[20px]">
                  {member.bio}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {teamMembers.length > 4 && (
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
      )}
    </div>
  );
}

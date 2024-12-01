"use client";
import Image from "next/image";
import Link  from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About", 
      href: "/about",
    },
    {
      label: "Services",
      href: "/services", 
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto shadow-md h-[72px] flex items-center relative">
      <div className="container mx-auto flex items-center justify-between gap-6 px-7">
        {/* Logo */}
        <div className="flex items-center gap-4 text-[28px] font-bold leading-[38px] text-primary">
          <div className="w-[48px] h-[48px] relative aspect-square md:h-[56px] md:w-[56px]">
            <Image 
              alt="logo" 
              src="/logo.png" 
              fill
              sizes="(max-width: 768px) 48px, 56px"
              className="object-contain"
            />
          </div>
          <h1 className="hidden lg:block text-3xl font-gabarito    text-primary">
            Whable
          </h1>
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <div className="hidden md:flex flex-1 font-semibold text-[18px] text space-x-2 font-gabarito">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className={`text-[#521F7E] hover:text-[#521F7E] hover:bg-[#F0ECF4] text-[18px] leading-[24px] ${
                pathname === link.href ? "bg-[#E2D9EA]" : ""
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>

        <div className="flex gap-4">
          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="md:hidden rounded-full text-[14px] leading-[16px] text-primary font-bold border-primary border-[2px]"
              >
                <Image alt="menu" width={17} height={17} src="/icons/menu.png" className="mr-2" />
                MENU
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col py-8 px-6">
                {/* Sheet Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-[48px] h-[48px] relative">
                    <Image 
                      alt="logo" 
                      src="/logo.png" 
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-gabarito font-bold  text-primary">
                    Whable
                  </h2>
                </div>
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block p-4 text-[#521F7E] hover:bg-[#F0ECF4] rounded-lg transition-colors duration-200 text-lg font-medium ${
                        pathname === link.href ? "bg-[#E2D9EA]" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Login Button */}
          <div>
            <Button className="rounded-full">
              <Image alt="user" width={17} height={17} src="/icons/user.png"  />
              Accedi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

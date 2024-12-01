"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const Whable = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const Services = [
    {
      label: "Whabler",
      href: "/",
    },
    {
      label: "Host",
      href: "/",
    },
    {
      label: "Angel",
      href: "/",
    },
    {
      label: "Ambassador",
      href: "/",
    },
  ];

  const Community = [
    {
      label: "Blog",
      href: "/",
    },
    {
      label: "Events",
      href: "/about",
    },
    {
      label: "Volunteers",
      href: "/services",
    },
    {
      label: "FAQs",
      href: "/contact",
    },
  ];
  return (
    <footer className=" bg-[#FFDD54] ">
      <div className=" px-8 lg:px-[156px] py-12">
        <div className=" flex flex-col gap-6 md:flex-row justify-between">
          {/* Logo & Description */}
          <div className="flex flex-1 flex-col sm:flex-row md:flex-col  justify-between gap-5">
            <div className="flex flex-col   gap-4 mb-4">
              {/* --------------logo------------ */}
              <div className=" flex  items-center gap-4">
                <div className="w-[48px] h-[48px] relative">
                  <Image
                    alt="logo"
                    src="/footer.png"
                    fill
                    sizes="51px"
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-gabarito font-bold tex-[28px] leading-[38px] text-primary">
                  Whable
                </h2>
              </div>
              <p className="text-sm font-gabarito  font-normal">
                The platform with which to easily find truly <br /> accessible
                locations for people with <br /> disabilities and plan safe
                travel
              </p>
            </div>

            <div className="flex   items-end ">
              <Link href="https://facebook.com" className="">
                <Image
                  alt="logo"
                  src="/icons/Facebook.png"
                  width={48}
                  height={48}
                />
              </Link>
              <Link href="https://instagram.com">
                <Image
                  alt="logo"
                  src="/icons/Instagram.png"
                  width={48}
                  height={48}
                />
              </Link>

              <Link href="https:/linkedin.com">
                <Image
                  alt="logo"
                  src="/icons/Linkedin.png"
                  width={48}
                  height={48}
                />
              </Link>
              <Link href="https:/youtube.com">
                <Image
                  alt="logo"
                  src="/icons/Youtube.png"
                  width={48}
                  height={48}
                />
              </Link>
            </div>
          </div>
          <div className=" flex  justify-between  md:justify-evenly flex-1  font-gabarito ">
            {/* Quick Links */}
            <div className="">
              <h3 className="text-lg font-bold mb-4">Whable</h3>
              <ul className="space-y-2">
                {Whable.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[16px] leading-[20px] font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <div className="">
                <h3 className="text-lg font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                  {Services.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[16px] leading-[20px] font-medium "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="">
                <h3 className="text-lg font-bold mb-4">Community</h3>

                <ul className="space-y-2">
                  {Community.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[16px] leading-[20px] font-medium "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t  space-y-5 border-t-black mt-8 pt-8   text-sm font-gabarito">
          <div className="w-full gap-3 flex flex-col sm:flex-row justify-between">
            <div className="  ">
              <p>&copy;Whable 2024, all rights reserved</p>
            </div>

            <div className=" flex gap-5  text-black">
              <p>Terms & Conditions</p>
              <p>Privacy</p>
              <p>Cookie</p>
            </div>
          </div>
          <p>Content</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

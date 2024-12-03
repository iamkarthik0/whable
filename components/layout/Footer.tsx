"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const navigationLinks = {
    Whable: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
    Services: [
      { label: "Whabler", href: "/whabler" },
      { label: "Host", href: "/host" },
      { label: "Angel", href: "/angel" },
      { label: "Ambassador", href: "/ambassador" },
    ],
    Community: [
      { label: "Blog", href: "/blog" },
      { label: "Events", href: "/events" },
      { label: "Volunteers", href: "/volunteers" },
      { label: "FAQs", href: "/faqs" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: "/icons/Facebook.png" },
    { name: "Instagram", href: "https://instagram.com", icon: "/icons/Instagram.png" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "/icons/Linkedin.png" },
    { name: "YouTube", href: "https://youtube.com", icon: "/icons/Youtube.png" },
  ];

  return (
    <footer className="bg-[#FFDD54]">
      <div className="px-8 lg:px-[65px] xl:px-[156px] py-12">
        <div className="flex flex-col gap-6 md:flex-row justify-between">
          {/* Logo & Description */}
          <div className="flex flex-1 flex-col sm:flex-row md:flex-col justify-between gap-5">
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex items-center gap-4">
                <Link href="/" className="w-[48px] h-[48px] relative">
                <Image
                    alt="Whable logo"
                    src="/footer.png"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </Link>
            
                <h2 className="text-2xl font-gabarito font-bold text-[28px] leading-[38px] text-primary">
                  Whable
                </h2>
              </div>
              <p className="text-sm font-gabarito font-normal">
                The platform with which to easily find truly <br /> accessible
                locations for people with <br /> disabilities and plan safe
                travel
              </p>
            </div>

            <div className="flex items-end">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} aria-label={`${link.name} profile`}>
                  <Image
                    alt={`${link.name} icon`}
                    src={link.icon}
                    width={48}
                    height={48}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-between md:justify-evenly flex-1 font-gabarito">
            {Object.entries(navigationLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-lg font-bold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={`${category}-${link.label}`}>
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
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t space-y-5 border-t-black mt-8 pt-8 text-sm font-gabarito">
          <div className="w-full gap-3 flex flex-col sm:flex-row justify-between">
            <div>
              <p>&copy; Whable 2024, all rights reserved</p>
            </div>

            <div className="flex gap-5 text-black">
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/cookie">Cookie</Link>
            </div>
          </div>
          <p>Content</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


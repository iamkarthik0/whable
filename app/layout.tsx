import type { Metadata } from "next";
import { Gabarito, Bitter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const gabarito = Gabarito({
  subsets: ['latin'],
  variable: '--font-gabarito',
});

const bitter = Bitter({
  subsets: ['latin'],
  variable: '--font-bitter',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.variable} ${bitter.variable} antialiased `}
      >
      
        {children}
      </body>
    </html>
  );
}

import { Manrope } from "next/font/google";
import React from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Clutchd, LLC - UI",
  description: "An open source UI library for NextJS, built with TailwindCSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  )
}
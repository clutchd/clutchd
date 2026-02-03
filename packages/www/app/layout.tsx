import { Page } from "@clutchd/layout";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type React from "react";
import "./globals.css";
import { PostHogProvider } from "../lib/posthog-client";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Clutchd LLC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <PostHogProvider ph_key="phc_j0aLnWV0pZBoeBRSmRsYUH3pKpEQxOLRNA016TP8tUs">
        <body className="flex flex-col min-h-dvh bg-transparent">{children}</body>
      </PostHogProvider>
    </html>
  );
}

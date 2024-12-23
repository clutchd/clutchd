import { Page } from "@clutchd/layout";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type React from "react";
import "./globals.css";
import { SimpleAnalytics } from "./simpleAnalytics";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Clutchd, LLC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <Page asChild className="bg-white">
        <body>
          <SimpleAnalytics />
          {children}
        </body>
      </Page>
    </html>
  );
}

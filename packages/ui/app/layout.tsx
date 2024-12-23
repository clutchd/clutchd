import { Page } from "@clutchd/layout";
import { Manrope } from "next/font/google";
import type React from "react";
import { SimpleAnalytics } from "~/components/simpleAnalytics";
import { TailwindIndicator } from "~/components/tailwindIndicator";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <Page asChild className="bg-white p-5">
        <body>
          <SimpleAnalytics />
          {children}
          <TailwindIndicator />
        </body>
      </Page>
    </html>
  );
}

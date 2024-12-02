import { Page } from "@clutchd/layout";
import { Manrope } from "next/font/google";
import type React from "react";
import "./globals.css";
import SimpleAnalytics from "~/components/simpleAnalytics";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <Page className="bg-white p-5" asChild>
        <body>
          {/* <DarkModeToggle initialValue={theme?.value as "light" | "dark"} /> */}
          <SimpleAnalytics />
          {children}
        </body>
      </Page>
    </html>
  );
}

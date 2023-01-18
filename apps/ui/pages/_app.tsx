import { AppProps } from "next/app";
import React from "react";
import { Manrope } from "@next/font/google";
import "../styles.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-manrope",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-manrope: ${manrope.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

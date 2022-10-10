import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

type loadingTypes = "idle" | "loading" | "loaded";

interface IAvatar extends ReactPropsWithoutRef<typeof Component.span> {
  src: string;
  alt?: string;
  fallback?: string;
}

function Avatar({ alt, src, fallback = "U", ...props }: IAvatar) {
  const [loadingState, setLoadingState] = useState<loadingTypes>("idle");

  const className = clsx(
    "h-12 w-12 rounded-full overflow-hidden relative",
    props.className
  );

  return (
    <Component.span
      {...props}
      className={className}
    >
      {src != null && <Image
        onLoadStart={() => { console.log("start"); setLoadingState("loading") }}
        onLoadingComplete={() => { console.log("done"); setLoadingState("loaded") }}
        alt={alt}
        layout="fill"
        objectFit="cover"
        src={src}
      />}
      {
        loadingState != "loaded" &&
        <span className="block w-full h-full text-center leading-[48px] bg-gray-50 text-gray-500">
          {fallback}
        </span>
      }
    </Component.span>
  );
}

export { Avatar };
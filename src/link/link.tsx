import clsx from "clsx";
import { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion/dist/framer-motion";
import NextLink from "next/link";
import React from "react";

export interface ILink extends HTMLMotionProps<"a"> {
  href?: string | undefined;
  target?: string;
  rel?: string;
}

export default function Link({ href = "/", ...props }: ILink) {
  const external = !href?.startsWith("/") || false;

  props.className = clsx("cursor-pointer", props.className);

  if (external) {
    return <motion.a href={href} {...props} />;
  }

  return (
    <NextLink href={href}>
      <motion.a href={href} {...props} />
    </NextLink>
  );
}

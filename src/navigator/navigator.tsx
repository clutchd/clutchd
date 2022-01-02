import clsx from "clsx";
import { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion/dist/framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Link } from "../link";
import { IsCurrentRoute } from "../utils";

export interface INavigator extends HTMLMotionProps<"button"> {
  href?: string;
  activeClassName?: string;
}

export default function Navigator({
  activeClassName,
  children,
  href,
  type,
  ...props
}: INavigator) {
  const router = useRouter();
  const [active, setActive] = useState(IsCurrentRoute(router, href));

  // calculate className
  props.className = clsx("cursor-pointer", props.className);
  const className = active
    ? clsx(props.className, activeClassName)
    : props.className;

  useEffect(() => {
    setActive(IsCurrentRoute(router, href));
  }, [href, router]);

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      {...props}
      className={className}
      onClick={props.onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}

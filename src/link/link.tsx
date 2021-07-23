import NextLink from "next/link";
import * as React from "react";
import { IComponent } from "../component";

export interface ILink extends IComponent {
  href?: string;
}

export default function Link({ href = "", ...props }: ILink) {
  const external = href.startsWith("http") || href.startsWith("www");

  if (external) {
    return <a href={href} {...props} />;
  }

  return (
    <NextLink href={href}>
      <a {...props} />
    </NextLink>
  );
}

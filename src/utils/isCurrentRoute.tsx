import { NextRouter } from "next/router";

export default function isCurrentRoute(router: NextRouter, href: string | undefined) {
  href = href?.startsWith("/") ? href : `/${href}`;
  if (router?.route.startsWith(href)) {
    return true;
  }
  return false;
}

import classNames from "classnames";
import { NextRouter, useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button, IButton } from "../button";
import { Link } from "../link";

export interface INavButton extends IButton {
  active?: {
    state?: boolean;
    className?: string;
    "!className"?: string;
  };
  href?: string;
}

export default function NavButton({
  active = {
    state: false,
    className: "",
    "!className": "",
  },
  type = "button",
  children,
  href,
  ...props
}: INavButton) {
  const router = useRouter();
  const originalActive = active.state || false;
  const [activeState, setActiveState] = useState(
    getActiveState(router, originalActive, href)
  );

  const [className, setClassName] = useState(
    classNames(
      props.className,
      activeState ? active.className : active["!className"]
    )
  );

  useEffect(
    () =>
      setClassName(
        classNames(
          props.className,
          activeState ? active.className : active["!className"]
        )
      ),
    [activeState]
  );

  useEffect(() => {
    setActiveState(getActiveState(router, originalActive, href));
  }, [href, router]);

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <Button
      {...props}
      className={className}
      onClick={props.onClick}
      type={type}
      children={children}
    />
  );
}

function getActiveState(
  router: NextRouter,
  originalActive?: boolean,
  href?: string
) {
  const fullHref = href?.startsWith("/") ? href : `/${href}`;
  if (router?.route.startsWith(fullHref)) {
    return true;
  }
  return originalActive;
}

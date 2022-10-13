import { Protect } from "@clutchd/protect";
import { Skeleton } from "@clutchd/skeleton";
import clsx from "clsx";
import * as React from "react";
import { ITextProps } from "./text";

/**
 * Type to define `Base` component
 */
type IBase = typeof Base;

/**
 * Type to define `Base` props
 */
interface IBaseProps extends ITextProps {
  component: string;
  loadingWrapper?: string;
  loadingComponent?: string;
  tag?: string;
}

/**
 * `Base` - The base text component that is responsible for rendering all text components
 * @param props `IBaseProps` used to render this `Base`
 * @returns `Base` component
 */
function Base({ children, protect = false, tag = "p", ...props }: IBaseProps) {
  // dynamically determine underlying text component
  const InternalText = tag as keyof JSX.IntrinsicElements;

  // get class names
  const className = clsx(
    props.component,
    "transition-all duration-200 leading-normal",
    props.className
  );

  // text component to be rendered
  const component = (
    <InternalText className={className}>{children}</InternalText>
  );

  // loading component to be rendered
  const loading = (
    <div
      className={clsx(
        GetWrapper(className),
        props.loadingWrapper,
        "flex items-center"
      )}
    >
      <Skeleton
        className={clsx(
          GetComponent(className),
          "min-w-[144px]",
          props.loadingComponent,
          "animate-pulse"
        )}
      />
    </div>
  );

  // if protection is needed, return component with protection
  if (protect) {
    return <Protect.Component loading={loading}>{component}</Protect.Component>;
  }

  // otherwise, return component
  return component;
}

/**
 * Type to define a `TextClassMap` object
 */
type ITextClassMap = {
  "text-xs": string;
  "text-sm": string;
  "text-base": string;
  "text-lg": string;
  "text-xl": string;
  "text-2xl": string;
  "text-3xl": string;
  "text-4xl": string;
  "text-5xl": string;
  "text-6xl": string;
  "text-7xl": string;
  "text-8xl": string;
  "text-9xl": string;
};

/**
 * Helper function to retrieve the proper classes for a text skeleton
 * @param className className being used to generate skeleton classes
 * @param map `ITextClassMap` object containing input class -> output class
 * @returns skeleton class
 */
function GetClass(className: string, map: ITextClassMap): string {
  const classes = className.split(" ");

  for (let i = 0; i < classes.length; i++) {
    if (Object.keys(map).includes(classes[i])) {
      return map[classes[i]];
    }
  }

  return map["text-base"];
}

/**
 * Gets the skeleton component's class based on the provided className
 * @param className className being used to generate skeleton classes
 * @returns component skeleton class
 */
function GetComponent(className: string): string {
  const map = {
    "text-xs": "h-[12px]",
    "text-sm": "h-[14px]",
    "text-base": "h-[16px]",
    "text-lg": "h-[18px]",
    "text-xl": "h-[20px]",
    "text-2xl": "h-[24px]",
    "text-3xl": "h-[30px]",
    "text-4xl": "h-[36px]",
    "text-5xl": "h-[48px]",
    "text-6xl": "h-[60px]",
    "text-7xl": "h-[72px]",
    "text-8xl": "h-[96px]",
    "text-9xl": "h-[128px]",
  };

  return GetClass(className, map);
}

/**
 * Gets the skeleton wrapper's class based on the provided className
 * @param className className being used to generate skeleton classes
 * @returns wrapper skeleton class
 */
function GetWrapper(className: string): string {
  const map = {
    "text-xs": "h-[16px]",
    "text-sm": "h-[20px]",
    "text-base": "h-[24px]",
    "text-lg": "h-[28px]",
    "text-xl": "h-[28px]",
    "text-2xl": "h-[32px]",
    "text-3xl": "h-[36px]",
    "text-4xl": "h-[40px]",
    "text-5xl": "h-[48px]",
    "text-6xl": "h-[60px]",
    "text-7xl": "h-[72px]",
    "text-8xl": "h-[96px]",
    "text-9xl": "h-[128px]",
  };

  return GetClass(className, map);
}

export { Base };
export type { IBase, IBaseProps };
